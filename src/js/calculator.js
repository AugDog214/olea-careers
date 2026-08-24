// Commission calculator — quiet, collapsed under the Offer.
// Self-generated proof: the agent's own numbers make the argument.

import { currentLang, onLangChange } from './i18n.js';

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function initCalculator() {
  const toggle = document.getElementById('calc-toggle');
  const panel = document.getElementById('calc-panel');
  if (!toggle || !panel) return;

  panel.innerHTML = `<div class="calc-fields calc-fields--sliders"><label class="calc-range" for="c-gci"><span data-i18n="calc.gci">Annual GCI</span><output id="c-gci-output">$250,000</output><input id="c-gci" type="range" min="50000" max="1000000" step="25000" value="250000" /></label><label class="calc-range" for="c-tx"><span data-i18n="calc.tx">Closed transactions</span><output id="c-tx-output">12</output><input id="c-tx" type="range" min="1" max="50" value="12" /></label><fieldset class="calc-split"><legend data-i18n="calc.split">Your current split</legend><label><input type="radio" name="split" value="0.30" checked /> 70/30</label><label><input type="radio" name="split" value="0.20" /> 80/20</label></fieldset></div><p class="calc-disclosure">For an exact Olea comparison, enter the fee quote you received. Leaving these blank keeps this estimate honest.</p><div class="calc-fees"><label>Monthly fee <input id="c-monthly" inputmode="decimal" placeholder="$" /></label><label>Flat transaction fee <input id="c-transaction" inputmode="decimal" placeholder="$" /></label></div><div class="calc-results" aria-live="polite"><div><span>Your traditional split cost</span><strong id="c-split-cost">$75,000</strong></div><div><span>Your Olea annual fees</span><strong id="c-olea-cost">Add fee quote</strong></div><div><span>Estimated difference</span><strong id="c-savings">Add fee quote</strong></div></div><p class="calc-result" id="c-result"></p><a class="calc-cta" href="#contact" data-i18n="calc.cta">Talk to the Managing Broker about your numbers →</a>`;
  const $ = (selector) => panel.querySelector(selector);
  const parse = (value) => { const clean = String(value).replace(/[$,\s]/g, ''); if (!clean) return null; const n = Number(clean); return Number.isFinite(n) && n >= 0 ? n : null; };
  function recalc() {
    const gci = Number($('#c-gci').value), tx = Number($('#c-tx').value), split = gci * Number(panel.querySelector('input[name="split"]:checked').value);
    const monthly = parse($('#c-monthly').value), fee = parse($('#c-transaction').value);
    $('#c-gci-output').textContent = usd.format(gci); $('#c-tx-output').textContent = String(tx); $('#c-split-cost').textContent = usd.format(split);
    if (monthly === null || fee === null) {
      const label = currentLang() === 'es' ? 'Agrega la tarifa' : 'Add fee quote';
      $('#c-olea-cost').textContent = label; $('#c-savings').textContent = label;
      $('#c-result').textContent = currentLang() === 'es' ? 'Agrega la cuota mensual y la tarifa por transacción para ver la diferencia exacta.' : 'Add the monthly and transaction fee to see the exact difference.';
      return;
    }
    const olea = monthly * 12 + fee * tx;
    $('#c-olea-cost').textContent = usd.format(olea); $('#c-savings').textContent = usd.format(split - olea);
    $('#c-result').textContent = currentLang() === 'es' ? 'Esta comparación usa tus números y la tarifa que ingresaste.' : 'This comparison uses your numbers and the fee quote you entered.';
  }

  panel.addEventListener('input', recalc);
  panel.addEventListener('change', recalc);

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    window.dispatchEvent(new CustomEvent('olea:calculator-toggle', { detail: { open: !open } }));
    if (open) {
      const closing = panel.animate([
        { opacity: 1, transform: 'translateY(0)' },
        { opacity: 0, transform: 'translateY(-12px)' },
      ], { duration: 180, easing: 'ease-in', fill: 'forwards' });
      closing.onfinish = () => { panel.hidden = true; panel.style.removeProperty('opacity'); panel.style.removeProperty('transform'); };
    } else {
      panel.hidden = false;
      panel.animate([
        { opacity: 0, transform: 'translateY(-12px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 280, easing: 'cubic-bezier(.2,.8,.2,1)' });
    }
  });

  // re-render the result in the right language when the site language flips
  onLangChange(recalc);

  recalc();
}
