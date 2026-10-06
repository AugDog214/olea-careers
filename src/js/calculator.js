import { currentLang, onLangChange } from './i18n.js';
import '../styles/calculator.css';

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const copy = {
  en: {
    eyebrow: 'YOUR NEXT CHAPTER, IN NUMBERS', title: 'Same production. More possibility.',
    intro: 'Compare your current split with the Olea 100% commission plan using the costs you personally pay.',
    open: 'Explore your numbers +', close: 'Close calculator −', inputs: 'Make it your own',
    gci: 'Annual gross commission', tx: 'Closings per year', split: 'Your current split · agent / brokerage',
    fees: 'Your Olea fee quote', disclosure: 'Enter the fees quoted by the Managing Broker. No guesswork, no assumed savings.',
    feeContact: 'Monthly fee: $131.84. Transaction and file review pricing is detailed in the fact sheets below.',
    monthly: 'Monthly fee', transaction: 'Fee per transaction', summary: 'YOUR ANNUAL COMPARISON',
    traditional: 'Paid to your current brokerage', olea: 'Olea monthly + transaction fees', difference: 'Potential annual difference',
    empty: 'Let’s fill in the picture', pending: 'Enter your fee quote',
    hint: 'Add both Olea fees to see your estimated difference.',
    note: 'This comparison uses the 100% plan, not the introductory 70/30 plan. Enter only transaction costs you personally pay; buyer/seller-paid charges are separate. Optional services and business expenses are excluded. Traditional split assumes no cap.',
    cta: 'Get your fee quote →', ready: 'Your production, compared side by side.',
  },
  es: {
    eyebrow: 'TU PRÓXIMA ETAPA, EN NÚMEROS', title: 'La misma producción. Más posibilidades.',
    intro: 'Compara tu reparto actual con el plan de 100% de Olea usando los costos que pagas personalmente.',
    open: 'Explora tus números +', close: 'Cerrar calculadora −', inputs: 'Personaliza tu comparación',
    gci: 'Comisión bruta anual', tx: 'Cierres por año', split: 'Tu reparto actual · agente / agencia',
    fees: 'Tu cotización de Olea', disclosure: 'Ingresa las tarifas cotizadas por la Broker Administradora. Sin suposiciones sobre tus ahorros.',
    feeContact: 'Cuota mensual: $131.84. Las tarifas de transacción y revisión se detallan en las fichas abajo.',
    monthly: 'Cuota mensual', transaction: 'Tarifa por transacción', summary: 'TU COMPARACIÓN ANUAL',
    traditional: 'Pagado a tu agencia actual', olea: 'Cuotas y tarifas anuales de Olea', difference: 'Posible diferencia anual',
    empty: 'Completemos el panorama', pending: 'Ingresa tus tarifas',
    hint: 'Agrega ambas tarifas de Olea para ver la diferencia estimada.',
    note: 'Compara el plan de 100%, no el plan inicial 70/30. Ingresa solo costos de transacción que pagas personalmente; los cargos pagados por compradores/vendedores son independientes. Excluye servicios opcionales y gastos del negocio. El reparto tradicional supone que no hay tope.',
    cta: 'Solicita tu cotización →', ready: 'Tu producción, comparada lado a lado.',
  },
};

export function initCalculator() {
  const toggle = document.getElementById('calc-toggle');
  const panel = document.getElementById('calc-panel');
  if (!toggle || !panel) return;
  const slot = toggle.parentElement;
  const header = document.createElement('div');
  header.className = 'calc-header';
  header.innerHTML = `<div class="calc-intro"><p class="calc-eyebrow" data-calc-copy="eyebrow"></p><h2 data-calc-copy="title"></h2><p data-calc-copy="intro"></p></div>`;
  slot.prepend(header);
  header.append(toggle);
  toggle.removeAttribute('data-i18n');
  panel.innerHTML = `
    <div class="calc-inputs">
      <h3 data-calc-copy="inputs"></h3>
      <div class="calc-fields">
        <label class="calc-range" for="c-gci"><span data-calc-copy="gci"></span><output id="c-gci-output" for="c-gci"></output><input id="c-gci" type="range" min="50000" max="1000000" step="25000" value="250000" /></label>
        <label class="calc-range" for="c-tx"><span data-calc-copy="tx"></span><output id="c-tx-output" for="c-tx"></output><input id="c-tx" type="range" min="1" max="50" value="12" /></label>
        <fieldset class="calc-split"><legend data-calc-copy="split"></legend><label><input type="radio" name="split" value="0.30" checked />70 / 30</label><label><input type="radio" name="split" value="0.20" />80 / 20</label></fieldset>
      </div>
      <div class="calc-fee-section"><h3 data-calc-copy="fees"></h3><p class="calc-disclosure" data-calc-copy="disclosure"></p>
      <p class="calc-disclosure"><strong data-calc-copy="feeContact"></strong></p>
      <div class="calc-fees"><label for="c-monthly"><span data-calc-copy="monthly"></span><input id="c-monthly" type="number" min="0" step="0.01" inputmode="decimal" placeholder="0.00" /></label><label for="c-transaction"><span data-calc-copy="transaction"></span><input id="c-transaction" type="number" min="0" step="0.01" inputmode="decimal" placeholder="0.00" /></label></div></div>
    </div>
    <div class="calc-summary">
      <p class="calc-eyebrow" data-calc-copy="summary"></p>
      <div class="calc-results" aria-live="polite" aria-atomic="true">
        <div><span data-calc-copy="traditional"></span><strong id="c-split-cost"></strong></div>
        <div><span data-calc-copy="olea"></span><strong id="c-olea-cost"></strong></div>
        <div class="calc-difference"><span data-calc-copy="difference"></span><strong id="c-savings"></strong></div>
      </div>
      <p class="calc-result" id="c-result"></p>
      <a class="calc-cta" href="#contact" data-calc-copy="cta"></a>
      <p class="calc-assumptions" data-calc-copy="note"></p>
    </div>`;
  const $ = (selector) => panel.querySelector(selector);
  const parse = (value) => value.trim() === '' || !Number.isFinite(Number(value)) || Number(value) < 0 ? null : Number(value);
  function recalc() {
    const text = copy[currentLang()];
    const gci = Number($('#c-gci').value), tx = Number($('#c-tx').value);
    const split = gci * Number($('input[name="split"]:checked').value);
    const monthly = parse($('#c-monthly').value), fee = parse($('#c-transaction').value);
    $('#c-gci-output').textContent = usd.format(gci);
    $('#c-tx-output').textContent = String(tx);
    $('#c-split-cost').textContent = usd.format(split);
    const ready = monthly !== null && fee !== null;
    panel.classList.toggle('has-estimate', ready);
    $('#c-olea-cost').textContent = ready ? usd.format(monthly * 12 + fee * tx) : text.pending;
    $('#c-savings').textContent = ready ? usd.format(split - monthly * 12 - fee * tx) : text.empty;
    $('#c-result').textContent = ready ? text.ready : text.hint;
  }
  function translate() {
    const text = copy[currentLang()];
    slot.querySelectorAll('[data-calc-copy]').forEach(el => { el.textContent = text[el.dataset.calcCopy]; });
    toggle.textContent = text[toggle.getAttribute('aria-expanded') === 'true' ? 'close' : 'open'];
    recalc();
  }
  panel.addEventListener('input', recalc);
  panel.addEventListener('change', recalc);
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    panel.hidden = !open;
    panel.classList.toggle('is-open', open);
    translate();
    // Notify existing scroll effects about this section's new height.
    window.dispatchEvent(new Event('resize'));
  });
  onLangChange(translate);
  translate();
}
