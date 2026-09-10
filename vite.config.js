import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { faqEntries, faqGroups, faqSchema } from './src/js/faq-content.js';

const escapeHtml = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

const renderFaq = () => {
  const tabs = faqGroups.map((group, index) => `<button class="faq-tab" id="faq-tab-${group.id}" type="button" role="tab" aria-controls="faq-panel-${group.id}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}" data-faq-tab="${group.id}" data-i18n="faq.group.${group.id}">${escapeHtml(group.label.en)}</button>`).join('');
  const panels = faqGroups.map((group) => {
    const items = group.indexes.map((entryIndex) => {
      const entry = faqEntries[entryIndex];
      return `<details class="faq-item"><summary data-i18n="faq.q${entryIndex + 1}">${escapeHtml(entry.en[0])}</summary><p data-i18n="faq.a${entryIndex + 1}">${escapeHtml(entry.en[1])}</p></details>`;
    }).join('');
    return `<section class="faq-panel" id="faq-panel-${group.id}" role="tabpanel" aria-labelledby="faq-tab-${group.id}" data-faq-panel="${group.id}"><h3 class="faq-group-title" data-i18n="faq.group.${group.id}">${escapeHtml(group.label.en)}</h3><div class="faq-panel-grid">${items}</div></section>`;
  }).join('');
  return `<!-- faq-generated:start --><div class="faq-list" data-faq><div class="faq-tabs" role="tablist" aria-label="FAQ topics">${tabs}</div><div class="faq-panels">${panels}</div></div><!-- faq-generated:end -->`;
};

// Base path comes from the workflow: '/olea-careers/' while serving from
// augdog214.github.io, '/' once careers.myoleagroup.com DNS is live.
export default defineConfig({
  plugins: [{
    name: 'olea-static-faq',
    transformIndexHtml(html) {
      if (!html.includes('faq-generated:start')) return html;
      // Render visible FAQ and matching structured data at build time, not only in JS.
      html = html.replace(/<!-- faq-generated:start -->[\s\S]*?<!-- faq-generated:end -->/, renderFaq());
      return html.replace(/(<script type="application\/ld\+json">)([\s\S]*?)(<\/script>)/, (_, start, json, end) => {
        const data = JSON.parse(json);
        const faq = data['@graph']?.find(node => node['@type'] === 'FAQPage');
        if (faq) faq.mainEntity = faqSchema();
        return start + JSON.stringify(data).replaceAll('<', '\\u003c') + end;
      });
    },
  }],
  base: process.env.VITE_BASE || '/',
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        capeCoral: fileURLToPath(new URL('./join-real-estate-brokerage-cape-coral/index.html', import.meta.url)),
        fortMyers: fileURLToPath(new URL('./100-percent-commission-real-estate-broker-fort-myers/index.html', import.meta.url)),
        bilingual: fileURLToPath(new URL('./bilingual-real-estate-brokerage-careers-swfl/index.html', import.meta.url)),
      },
    },
  },
});
