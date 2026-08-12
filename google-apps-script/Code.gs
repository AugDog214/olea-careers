const CONFIG = Object.freeze({
  recipientEmail: 'theoleagroup@gmail.com',
  sheetName: 'Agent Recruiting Leads',
  allowedSiteOrigin: 'https://careers.myoleagroup.com',
  timeZone: 'America/New_York',
  minimumFormAgeMs: 3000,
  maximumFormAgeMs: 24 * 60 * 60 * 1000,
  duplicateWindowSeconds: 90,
  maximumLeadsPerMinute: 6,
  maximumLeadsPerHour: 40,
  maximumLeadsPerDay: 75,
});

const HEADERS = [
  'Received at',
  'Delivery status',
  'Name',
  'Phone',
  'Email',
  'Current brokerage',
  'Reason for considering a move',
  'Source',
  'UTM source',
  'UTM campaign',
  'UTM content',
  'Page URL',
  'Submitted at',
  'Request ID',
];

function setup() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  if (!spreadsheet) {
    throw new Error('Open this Apps Script project from its Google Sheet, then run setup again.');
  }

  PropertiesService.getScriptProperties().setProperty('SPREADSHEET_ID', spreadsheet.getId());
  const sheet = getOrCreateSheet_(spreadsheet);
  formatSheet_(sheet);
  MailApp.getRemainingDailyQuota();

  return `Ready. Leads will be saved in "${CONFIG.sheetName}" and emailed to ${CONFIG.recipientEmail}.`;
}

function doGet() {
  return ContentService.createTextOutput('Olea Careers lead receiver is online.');
}

function doPost(event) {
  const requestId = clean_(event && event.parameter && event.parameter.requestId, 80);

  try {
    const lead = parseLead_(event);

    if (lead.companyFax) return resultPage_(requestId, true, 'accepted');
    validateLead_(lead);

    const lock = LockService.getScriptLock();
    lock.waitLock(10000);
    let row;
    let sheet;
    let cache;
    let duplicateKey;
    try {
      const spreadsheetId = PropertiesService.getScriptProperties().getProperty('SPREADSHEET_ID');
      if (!spreadsheetId) throw new Error('Run setup() before deploying the web app.');

      sheet = getOrCreateSheet_(SpreadsheetApp.openById(spreadsheetId));
      enforceRateLimit_();
      cache = CacheService.getScriptCache();
      duplicateKey = `lead:${digest_(`${lead.email}|${lead.phone}`)}`;
      if (cache.get(duplicateKey)) return resultPage_(requestId, true, 'duplicate');
      row = appendLead_(sheet, lead);
    } finally {
      lock.releaseLock();
    }

    try {
      sendLeadEmail_(lead);
      sheet.getRange(row, 2).setValue('Emailed');
      cache.put(duplicateKey, '1', CONFIG.duplicateWindowSeconds);
    } catch (error) {
      sheet.getRange(row, 2).setValue(`Saved; email failed: ${clean_(error.message, 180)}`);
      throw error;
    }

    return resultPage_(requestId, true, 'emailed');
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    return resultPage_(requestId, false, 'delivery_failed');
  }
}

function parseLead_(event) {
  const params = (event && event.parameter) || {};
  return {
    requestId: clean_(params.requestId, 80),
    name: clean_(params.name, 100),
    phone: clean_(params.phone, 40),
    email: clean_(params.email, 160).toLowerCase(),
    currentBrokerage: clean_(params.currentBrokerage, 160),
    reason: clean_(params.reason, 2000),
    source: clean_(params.source, 80) || 'Agent Recruiting',
    utm_source: clean_(params.utm_source, 160),
    utm_campaign: clean_(params.utm_campaign, 160),
    utm_content: clean_(params.utm_content, 160),
    pageUrl: clean_(params.pageUrl, 500),
    submittedAt: clean_(params.submittedAt, 60),
    formStartedAt: Number(params.formStartedAt || 0),
    companyFax: clean_(params.companyFax, 300),
  };
}

function validateLead_(lead) {
  if (!/^[a-zA-Z0-9-]{20,80}$/.test(lead.requestId)) throw new Error('Invalid request ID.');
  if (lead.name.length < 2) throw new Error('Name is required.');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) throw new Error('A valid email is required.');
  if (lead.phone.replace(/\D/g, '').length < 7) throw new Error('A valid phone is required.');
  if (!lead.pageUrl.startsWith(`${CONFIG.allowedSiteOrigin}/`)) throw new Error('Unknown form origin.');

  const age = Date.now() - lead.formStartedAt;
  if (!Number.isFinite(age) || age < CONFIG.minimumFormAgeMs || age > CONFIG.maximumFormAgeMs) {
    throw new Error('Form timing check failed.');
  }
}

function appendLead_(sheet, lead) {
  sheet.appendRow([
    new Date(),
    'Received',
    sheetSafe_(lead.name),
    sheetSafe_(lead.phone),
    sheetSafe_(lead.email),
    sheetSafe_(lead.currentBrokerage),
    sheetSafe_(lead.reason),
    sheetSafe_(lead.source),
    sheetSafe_(lead.utm_source),
    sheetSafe_(lead.utm_campaign),
    sheetSafe_(lead.utm_content),
    sheetSafe_(lead.pageUrl),
    sheetSafe_(lead.submittedAt),
    sheetSafe_(lead.requestId),
  ]);
  return sheet.getLastRow();
}

function sendLeadEmail_(lead) {
  const subjectName = lead.name.replace(/[\r\n]/g, ' ').slice(0, 80);
  const plainBody = [
    'New confidential agent recruiting inquiry',
    '',
    `Name: ${lead.name}`,
    `Phone: ${lead.phone}`,
    `Email: ${lead.email}`,
    `Current brokerage: ${lead.currentBrokerage || 'Not provided'}`,
    '',
    'Reason for considering a move:',
    lead.reason || 'Not provided',
    '',
    `Source: ${lead.source}`,
    `UTM source: ${lead.utm_source || 'None'}`,
    `UTM campaign: ${lead.utm_campaign || 'None'}`,
    `Page: ${lead.pageUrl}`,
    `Received: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} ET`,
  ].join('\n');

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;color:#0A1A3A;line-height:1.5;max-width:680px">
      <p style="font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#15489F">Olea Careers</p>
      <h1 style="font-size:26px;margin:0 0 22px">New confidential agent inquiry</h1>
      <table cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%">
        ${emailRow_('Name', lead.name)}
        ${emailRow_('Phone', lead.phone)}
        ${emailRow_('Email', lead.email)}
        ${emailRow_('Current brokerage', lead.currentBrokerage || 'Not provided')}
      </table>
      <h2 style="font-size:16px;margin:24px 0 6px">Reason for considering a move</h2>
      <p style="white-space:pre-wrap;margin-top:0">${html_(lead.reason || 'Not provided')}</p>
      <hr style="border:0;border-top:1px solid #C3E0E5;margin:24px 0">
      <p style="font-size:12px;color:#44516a">Source: ${html_(lead.source)}<br>UTM source: ${html_(lead.utm_source || 'None')}<br>UTM campaign: ${html_(lead.utm_campaign || 'None')}<br>Page: ${html_(lead.pageUrl)}</p>
    </div>`;

  MailApp.sendEmail({
    to: CONFIG.recipientEmail,
    replyTo: lead.email,
    name: 'Olea Careers',
    subject: `[Olea Careers] Confidential inquiry from ${subjectName}`,
    body: plainBody,
    htmlBody,
  });
}

function getOrCreateSheet_(spreadsheet) {
  let sheet = spreadsheet.getSheetByName(CONFIG.sheetName);
  if (!sheet) sheet = spreadsheet.insertSheet(CONFIG.sheetName);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS);
  return sheet;
}

function formatSheet_(sheet) {
  sheet.setFrozenRows(1);
  sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold').setBackground('#15489F').setFontColor('#FFFFFF');
  sheet.autoResizeColumns(1, HEADERS.length);
  sheet.setColumnWidth(7, 420);
  sheet.setColumnWidth(12, 320);
}

function resultPage_(requestId, ok, status) {
  const payload = JSON.stringify({ type: 'olea-lead-result', requestId, ok, status }).replace(/</g, '\\u003c');
  const target = JSON.stringify(CONFIG.allowedSiteOrigin);
  return HtmlService.createHtmlOutput(
    `<!doctype html><meta charset="utf-8"><script>window.parent.postMessage(${payload},${target});<\/script>`
  ).setTitle('Olea Careers').setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function enforceRateLimit_() {
  const cache = CacheService.getScriptCache();
  const properties = PropertiesService.getScriptProperties();
  const minuteKey = `rate:minute:${Math.floor(Date.now() / 60000)}`;
  const hourKey = `rate:hour:${Math.floor(Date.now() / 3600000)}`;
  const currentDay = Utilities.formatDate(new Date(), CONFIG.timeZone, 'yyyy-MM-dd');
  const minuteCount = Number(cache.get(minuteKey) || 0) + 1;
  const hourCount = Number(cache.get(hourKey) || 0) + 1;
  const storedDay = properties.getProperty('RATE_LIMIT_DAY');
  const dayCount = storedDay === currentDay
    ? Number(properties.getProperty('RATE_LIMIT_DAY_COUNT') || 0) + 1
    : 1;

  if (
    minuteCount > CONFIG.maximumLeadsPerMinute
    || hourCount > CONFIG.maximumLeadsPerHour
    || dayCount > CONFIG.maximumLeadsPerDay
  ) {
    throw new Error('Submission rate limit reached.');
  }

  cache.put(minuteKey, String(minuteCount), 120);
  cache.put(hourKey, String(hourCount), 7200);
  properties.setProperties({
    RATE_LIMIT_DAY: currentDay,
    RATE_LIMIT_DAY_COUNT: String(dayCount),
  }, false);
}

function emailRow_(label, value) {
  return `<tr><td style="border-bottom:1px solid #C3E0E5;font-weight:700;width:170px">${html_(label)}</td><td style="border-bottom:1px solid #C3E0E5">${html_(value)}</td></tr>`;
}

function clean_(value, maxLength) {
  return String(value == null ? '' : value).trim().replace(/\u0000/g, '').slice(0, maxLength);
}

function html_(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function sheetSafe_(value) {
  const text = String(value || '');
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function digest_(value) {
  return Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, value)
    .map((byte) => (`0${(byte & 255).toString(16)}`).slice(-2))
    .join('');
}
