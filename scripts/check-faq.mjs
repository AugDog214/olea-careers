import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { faqEntries, faqSchema } from '../src/js/faq-content.js';

const html = readFileSync(new URL('../dist/index.html', import.meta.url), 'utf8');
const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
assert.deepEqual(schema['@graph'].find(node => node['@type'] === 'FAQPage').mainEntity, faqSchema());
assert.equal((html.match(/class="faq-item"/g) || []).length, faqEntries.length);
for (const entry of faqEntries) {
  assert.equal(entry.en.length, 2);
  assert.equal(entry.es.length, 2);
  assert(entry.en.every(Boolean) && entry.es.every(Boolean));
  assert(html.includes(entry.en[0]));
  assert(html.includes(entry.en[1]));
}
assert(!html.includes('No long-term lock-in'));
console.log(`Verified ${faqEntries.length} static FAQs, EN/ES content, and exact JSON-LD parity.`);
