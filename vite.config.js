import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import { faqEntries, faqSchema } from './src/js/faq-content.js';

const escapeHtml = text => text.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// Base path comes from the workflow: '/olea-careers/' while serving from
// augdog214.github.io, '/' once careers.myoleagroup.com DNS is live.
export default defineConfig({
  plugins: [{
    name: 'olea-static-faq',
    transformIndexHtml(html) {
      if (!html.includes('class="faq-list"')) return html;
      // Render visible FAQ and matching structured data at build time, not only in JS.
      html = html.replace(/<div class="faq-list">[\s\S]*?<\/div>/, `<div class="faq-list">${faqEntries.map((entry, i) => `<details class="faq-item"><summary data-i18n="faq.q${i + 1}">${escapeHtml(entry.en[0])}</summary><p data-i18n="faq.a${i + 1}">${escapeHtml(entry.en[1])}</p></details>`).join('\n')}</div>`);
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
