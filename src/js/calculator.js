// Commission calculator — quiet, collapsed under the Offer.
// Self-generated proof: the agent's own numbers make the argument.

import { currentLang, onLangChange } from './i18n.js';

// ⚠️ CONFIRM #1: fee model is flat per-transaction; EXACT AMOUNT PENDING from
// Heidy. $495 is a flagged placeholder. Swapping models or amounts = edit here only.
export const FEE_MODEL = {
  type: 'perTransaction',
  amount: 495, // ⚠️ REPLACE with Heidy's real per-transaction fee
};

export function oleaCost(transactions) {
  return FEE_MODEL.amount * transactions;
}

// EN/ES result strings live here (they need interpolation, so not in the flat map)
const resultCopy = {
  en: (paid, olea, kept, split) =>
    `At a${split.startsWith('8') ? 'n' : ''} ${split} split you paid <strong>${paid}</strong> to your broker last year. At The Olea Group you'd have paid <strong>${olea}</strong> — you keep <strong>${kept}</strong> more.`,
  es: (paid, olea, kept, split) =>
    `Con un split de ${split} le pagaste <strong>${paid}</strong> a tu broker el año pasado. En The Olea Group habrías pagado <strong>${olea}</strong> — te quedas con <strong>${kept}</strong> más.`,
};

const usd = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export function initCalculator() {
  const toggle = document.getElementById('calc-toggle');
  const panel = document.getElementById('calc-panel');
  if (!toggle || !panel) return;

  panel.innerHTML = `
    <div class="calc-fields">
      <div class="form-field calc-field">
        <label for="c-gci" data-i18n="calc.gci">Last year's GCI ($)</label>
        <input id="c-gci" type="text" inputmode="decimal" autocomplete="off" />
      </div>
      <div class="form-field calc-field">
        <label for="c-tx" data-i18n="calc.tx">Closed transactions</label>
        <input id="c-tx" type="text" inputmode="numeric" autocomplete="off" />
      </div>
      <fieldset class="calc-split" id="c-split">
        <legend data-i18n="calc.split">Your current split</legend>
        <label><input type="radio" name="split" value="0.30" checked /> 70/30</label>
        <label><input type="radio" name="split" value="0.20" /> 80/20</label>
      </fieldset>
    </div>
    <p class="calc-result" id="c-result" aria-live="polite"></p>
    <a class="calc-cta" href="#contact" data-i18n="calc.cta" hidden>Talk to Heidy about your numbers →</a>
  `;

  const gciInput = panel.querySelector('#c-gci');
  const txInput = panel.querySelector('#c-tx');
  const result = panel.querySelector('#c-result');
  const cta = panel.querySelector('.calc-cta');

  const parseNum = (v) => {
    const n = parseFloat(String(v).replace(/[$,\s]/g, ''));
    return Number.isFinite(n) && n >= 0 ? n : null;
  };

  function recalc() {
    const gci = parseNum(gciInput.value);
    const tx = parseNum(txInput.value);
    if (gci === null || tx === null || gci === 0 || tx === 0) {
      result.innerHTML = '';
      cta.hidden = true;
      return;
    }
    const splitRate = parseFloat(panel.querySelector('input[name="split"]:checked').value);
    const splitLabel = splitRate === 0.3 ? '70/30' : '80/20';
    const paidToBroker = gci * splitRate;
    const olea = oleaCost(Math.round(tx));
    const kept = paidToBroker - olea;
    if (kept <= 0) {
      // edge case: tiny GCI + many transactions — stay honest, show nothing misleading
      result.innerHTML = '';
      cta.hidden = true;
      return;
    }
    result.innerHTML = resultCopy[currentLang()](
      usd.format(paidToBroker),
      usd.format(olea),
      usd.format(kept),
      splitLabel
    );
    result.dataset.kept = kept;
    cta.hidden = false;
  }

  panel.addEventListener('input', recalc);
  panel.addEventListener('change', recalc);

  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    panel.hidden = open;
  });

  // re-render the result in the right language when the site language flips
  onLangChange(recalc);

  return { recalc };
}
