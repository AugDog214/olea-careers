import { initI18n, strings, currentLang, onLangChange } from './js/i18n.js';
import { initCalculator } from './js/calculator.js';
import { initForm } from './js/form.js';
import { initMotion } from './js/motion.js';
import { initNav } from './js/nav.js';

// Header condenses once the page scrolls past the hero's first beat
const header = document.getElementById('site-header');
let ticking = false;

window.addEventListener(
  'scroll',
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      header.classList.toggle('is-condensed', window.scrollY > 40);
      ticking = false;
    });
  },
  { passive: true }
);

// Heidy quote base render (plain text). motion.js re-splits it into word
// spans for the scroll-highlight; this keeps the quote readable with
// reduced motion / no JS-motion. Registered BEFORE initMotion so the
// motion rebuild runs after this on language change.
const quoteEl = document.querySelector('[data-quote]');
function renderQuotePlain() {
  if (quoteEl) quoteEl.textContent = `“${strings['quote.q'][currentLang()]}”`;
}
renderQuotePlain();
onLangChange(renderQuotePlain);

// Proof stats: hide the row entirely while the values are placeholders —
// hollow dashes are worse than absence. Reappears once real numbers land.
const stats = document.querySelector('.stats');
if (stats && [...stats.querySelectorAll('.stat-value')].every((v) => v.textContent.includes('—'))) {
  stats.style.display = 'none';
}

// Melt CTA: hide while the contact section (which has its own submit CTA)
// is on screen, so the two never overlap.
const melt = document.querySelector('[data-melt]');
const contact = document.getElementById('contact');
if (melt && contact && 'IntersectionObserver' in window) {
  new IntersectionObserver(
    ([entry]) => melt.classList.toggle('is-hidden', entry.isIntersecting),
    { threshold: 0.15 }
  ).observe(contact);
}

initI18n();
initCalculator();
initNav();
initForm();
initMotion();
