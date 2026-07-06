import { initI18n } from './js/i18n.js';
import { initCalculator } from './js/calculator.js';
import { initForm } from './js/form.js';
import { initMotion } from './js/motion.js';

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

initI18n();
initCalculator();
initForm();
initMotion();
