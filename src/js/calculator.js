// Commission calculator — quiet, collapsed under the Offer.
// Self-generated proof: the agent's own numbers make the argument.

import { currentLang, onLangChange } from './i18n.js';

// ⚠️ CONFIRM #1: both exact amounts are pending from Heidy. Keep them null until
// confirmed so the calculator cannot publish invented savings.
export const FEE_MODEL = {
  monthlyAmount: null,
  perTransactionAmount: null,
  monthsPerYear: 12,
};

export function oleaCost(transactions) {
  if (!feeModelConfigured()) return null;
  return (FEE_MODEL.monthlyAmount * FEE_MODEL.monthsPerYear) + (FEE_MODEL.perTransactionAmount * transactions);
}

export function feeModelConfigured() {
  return Number.isFinite(FEE_MODEL.monthlyAmount) && Number.isFinite(FEE_MODEL.perTransactionAmount);
}

// EN/ES result strings live here (they need interpolation, so not in the flat map)
const resultCopy = {
  en: (paid, olea, kept, split) =>
    `At a${split.startsWith('8') ? 'n' : ''} ${split} split you paid <strong>${paid}</strong> to your broker last year. At The Olea Group you'd have paid <strong>${olea}</strong> — you keep <strong>${kept}</strong> more.`,
  es: (paid, olea, kept, split) =>
    `Con un split de ${split} le pagaste <strong>${paid}</strong> a tu broker el año pasado. En The Olea Group habrías pagado <strong>${olea}</strong> — te quedas con <strong>${kept}</strong> más.`,
};

const pendingFeeCopy = {
  en: (paid, split) =>
    `At a${split.startsWith('8') ? 'n' : ''} ${split} split you paid <strong>${paid}</strong> to your broker last year. The Olea Group uses a low monthly fee plus a flat transaction fee, with no caps. Ask Heidy for the exact amounts to finish the comparison.`,
  es: (paid, split) =>
    `Con un split de ${split} le pagaste <strong>${paid}</strong> a tu broker el año pasado. The Olea Group usa una cuota mensual baja más una tarifa fija por transacción, sin topes. Pregúntale a Heidy los montos exactos para completar la comparación.`,
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

    if (olea === null) {
      result.innerHTML = pendingFeeCopy[currentLang()](usd.format(paidToBroker), splitLabel);
      delete result.dataset.kept;
      cta.hidden = false;
      return;
    }

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
