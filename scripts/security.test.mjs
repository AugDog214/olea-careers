import assert from 'node:assert/strict';
import { createHash, randomUUID } from 'node:crypto';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import vm from 'node:vm';

const source = readFileSync(new URL('../google-apps-script/Code.gs', import.meta.url), 'utf8');

// These fakes have no Google credentials or network implementation.
function receiver({ mailError } = {}) {
  const now = Date.now();
  class FixtureDate extends Date {
    constructor(...args) { super(...(args.length ? args : [now])); }
    static now() { return now; }
  }
  const rows = [['existing header']];
  const statuses = [];
  const emails = [];
  const logs = [];
  const cached = new Map();
  const properties = new Map([['SPREADSHEET_ID', 'LOCAL-TEST-ONLY']]);
  const sheet = {
    getLastRow: () => rows.length,
    appendRow: row => rows.push(row),
    getRange: () => ({ setValue: value => statuses.push(value) }),
  };
  let locked = false;
  const cache = { get: key => cached.get(key), put: (key, value) => cached.set(key, value) };
  const context = vm.createContext({
    Date: FixtureDate,
    console: { error: (...args) => logs.push(args.join(' ')) },
    SpreadsheetApp: { openById: () => ({ getSheetByName: () => sheet }) },
    PropertiesService: { getScriptProperties: () => ({
      getProperty: key => properties.get(key),
      setProperties: values => Object.entries(values).forEach(([key, value]) => properties.set(key, value)),
    }) },
    CacheService: { getScriptCache: () => cache },
    LockService: { getScriptLock: () => ({
      waitLock: () => { assert.equal(locked, false); locked = true; },
      releaseLock: () => { locked = false; },
    }) },
    MailApp: { sendEmail: email => {
      assert.equal(locked, false);
      if (mailError) throw mailError;
      emails.push(email);
    } },
    Utilities: {
      DigestAlgorithm: { SHA_256: 'SHA_256' },
      computeDigest: (_, value) => [...createHash('sha256').update(value).digest()],
      formatDate: date => date.toISOString().slice(0, 10),
    },
    HtmlService: {
      XFrameOptionsMode: { ALLOWALL: 'ALLOWALL' },
      createHtmlOutput: html => ({ html, setTitle() { return this; }, setXFrameOptionsMode() { return this; } }),
    },
  });
  vm.runInContext(source, context, { filename: 'Code.gs' });
  return { context, rows, statuses, emails, logs, cached, properties, now, isLocked: () => locked };
}

function parameters(overrides = {}) {
  return {
    requestId: randomUUID(), name: 'Test Applicant', phone: '202-555-0123',
    email: 'applicant@example.invalid', currentBrokerage: '', reason: '',
    source: 'Agent Recruiting', utm_source: 'local-test', utm_campaign: '', utm_content: '',
    pageUrl: 'https://careers.myoleagroup.com/', submittedAt: new Date().toISOString(),
    formStartedAt: String(Date.now() - 5000), companyFax: '', ...overrides,
  };
}

test('valid recruiting inquiry is saved, emailed, and confirmed', () => {
  const h = receiver();
  const p = parameters();
  const result = h.context.doPost({ parameter: p });
  assert.equal(h.rows.length, 2);
  assert.equal(h.emails.length, 1);
  assert.deepEqual(h.statuses, ['Emailed']);
  assert(result.html.includes('"status":"emailed"'));
  assert(result.html.includes(p.requestId));
  assert(result.html.includes('https://careers.myoleagroup.com'));
  assert.equal(h.isLocked(), false);
});

test('duplicate inquiry is acknowledged without another email or row', () => {
  const h = receiver();
  h.context.doPost({ parameter: parameters() });
  const result = h.context.doPost({ parameter: parameters() });
  assert.equal(h.emails.length, 1);
  assert.equal(h.rows.length, 2);
  assert(result.html.includes('"status":"duplicate"'));
  assert.equal(h.isLocked(), false);
});

test('client URL query and fragment are omitted from stored and emailed page URL', () => {
  const h = receiver();
  const result = h.context.doPost({ parameter: parameters({ pageUrl: 'https://careers.myoleagroup.com/?private_note=PRIVATE-FIXTURE#PRIVATE-FRAGMENT' }) });
  assert(result.html.includes('"status":"emailed"'));
  assert.equal(h.rows[1][11], 'https://careers.myoleagroup.com/');
  assert(!h.emails[0].body.includes('PRIVATE-FIXTURE'));
  assert(!h.emails[0].htmlBody.includes('PRIVATE-FRAGMENT'));
});

test('all bounded receiver fields reject overflow rather than silently truncate', () => {
  const h = receiver();
  for (const [key, limit] of Object.entries({ requestId: 80, name: 100, phone: 40, email: 160, currentBrokerage: 160, reason: 2000, source: 80, utm_source: 160, utm_campaign: 160, utm_content: 160, pageUrl: 500, submittedAt: 60, companyFax: 300 })) {
    assert.throws(() => h.context.parseLead_({ parameter: parameters({ [key]: 'x'.repeat(limit + 1) }) }), /Field is too long/);
    assert.equal(h.context.field_('x'.repeat(limit), limit).length, limit);
  }
});

test('oversized bodies and duplicate parameters cannot reach mail or Sheets', () => {
  const h = receiver();
  for (const event of [
    { parameter: parameters(), contentLength: 65537 },
    { parameter: parameters(), postData: { contents: 'x'.repeat(65537) } },
    { parameter: parameters(), parameters: { email: ['a@example.invalid', 'b@example.invalid'] } },
  ]) assert(h.context.doPost(event).html.includes('"status":"delivery_failed"'));
  assert.equal(h.rows.length, 1);
  assert.equal(h.emails.length, 0);
});

test('malformed required fields, lookalike origins, and stale/future timing fail server validation', () => {
  const h = receiver();
  for (const override of [
    { name: 'x' }, { phone: '123' }, { email: 'invalid' }, { email: 'a@example.invalid\r\nBcc:other@example.invalid' },
    { requestId: 'short' }, { pageUrl: 'https://careers.myoleagroup.com.attacker.invalid/' },
    { pageUrl: 'http://careers.myoleagroup.com/' },
    { formStartedAt: String(Date.now() + 10000) }, { formStartedAt: String(Date.now() - 25 * 60 * 60 * 1000) },
    { formStartedAt: String(Date.now() - 500) }, { formStartedAt: 'invalid' },
  ]) assert(h.context.doPost({ parameter: parameters(override) }).html.includes('"status":"delivery_failed"'));
  assert.equal(h.rows.length, 1);
  assert.equal(h.emails.length, 0);
});

test('honeypot does not save or email a lead', () => {
  const h = receiver();
  h.context.doPost({ parameter: parameters({ companyFax: 'bot-fixture' }) });
  assert.equal(h.rows.length, 1);
  assert.equal(h.emails.length, 0);
});

test('spreadsheet formula prefixes are inert, including after whitespace normalization', () => {
  const h = receiver();
  for (const prefix of ['=', '+', '-', '@']) {
    const text = prefix + 'FORMULA-FIXTURE';
    assert.equal(h.context.sheetSafe_(text), "'" + text);
    assert.equal(h.context.sheetSafe_(h.context.field_('\t\n' + text, 100)), "'" + text);
  }
  assert.equal(h.context.sheetSafe_('ordinary text'), 'ordinary text');
});

test('HTML email escapes submitted markup and subject line cannot inject headers', () => {
  const h = receiver();
  h.context.doPost({ parameter: parameters({ name: 'Test\r\nApplicant <script>', reason: '<img src=x onerror=alert(1)>' }) });
  assert.equal(h.emails.length, 1);
  assert(!h.emails[0].htmlBody.includes('<script>'));
  assert(!h.emails[0].htmlBody.includes('<img src=x'));
  assert(h.emails[0].htmlBody.includes('&lt;img'));
  assert(!/[\r\n]/.test(h.emails[0].subject));
});

test('provider errors do not expose fixture personal information in logs or status', () => {
  const h = receiver({ mailError: new Error('PRIVATE-FIXTURE applicant@example.invalid') });
  const result = h.context.doPost({ parameter: parameters() });
  assert(result.html.includes('"status":"delivery_failed"'));
  assert.deepEqual(h.statuses, ['Saved; email failed']);
  assert.deepEqual(h.logs, ['Olea lead delivery failed.']);
  assert(!JSON.stringify([h.logs, h.statuses, result]).includes('PRIVATE-FIXTURE'));
});

test('global minute quota rejects a submission before another row or email', () => {
  const h = receiver();
  h.cached.set(`rate:minute:${Math.floor(h.now / 60000)}`, '6');
  assert(h.context.doPost({ parameter: parameters() }).html.includes('"status":"delivery_failed"'));
  assert.equal(h.rows.length, 1);
  assert.equal(h.emails.length, 0);
  assert.equal(h.isLocked(), false);
});

test('result page escapes script-closing input even on the error path', () => {
  const h = receiver();
  const result = h.context.doPost({ parameter: parameters({ requestId: '</script><script>fixture</script>' }) });
  assert(!result.html.includes('</script><script>fixture'));
  assert(result.html.includes('\\u003c'));
});
