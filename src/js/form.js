// Lead form → n8n webhook → Gmail + Lofty (source-tagged "Agent Recruiting").
// 🧑 HUMAN: set VITE_N8N_WEBHOOK_URL, then configure n8n to email every valid
// submission to theoleagroup@gmail.com and create the source-tagged Lofty contact.
const FORM_ENDPOINT = (import.meta.env.VITE_N8N_WEBHOOK_URL || '').trim();

/*
Payload schema (n8n side expects exactly this shape):
{
  name: string,
  phone: string,
  email: string,
  currentBrokerage: string,   // optional, '' if blank
  reason: string,             // optional, '' if blank
  source: 'Agent Recruiting',
  utm_source: string,         // '' if absent from the landing URL
  utm_campaign: string,
  utm_content: string,
  pageUrl: string,
  submittedAt: string         // ISO 8601
}
*/

import { currentLang } from './i18n.js';

// UTM params are captured once at page load so attribution survives
// in-page navigation and the language toggle.
const landingParams = new URLSearchParams(window.location.search);
const utm = {
  utm_source: landingParams.get('utm_source') || '',
  utm_campaign: landingParams.get('utm_campaign') || '',
  utm_content: landingParams.get('utm_content') || '',
};

const copy = {
  invalid: {
    en: 'Please fill in your name, phone, and a valid email.',
    es: 'Por favor completa tu nombre, teléfono y un correo válido.',
  },
  error: {
    en: "Something went wrong sending your info — nothing was lost. Try again, or call (239) 318-4689.",
    es: 'Algo falló al enviar tu información — no se perdió nada. Intenta de nuevo o llama al (239) 318-4689.',
  },
  notConfigured: {
    en: 'Online delivery is being connected. Please call (239) 318-4689 for a confidential conversation.',
    es: 'La entrega en línea se está conectando. Llama al (239) 318-4689 para una conversación confidencial.',
  },
  success: {
    en: "Done. Heidy will reach out personally — and your current broker never hears about it.",
    es: 'Listo. Heidy te contactará personalmente — y tu broker actual nunca se entera.',
  },
  sending: { en: 'Sending…', es: 'Enviando…' },
};

export function initForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;

  // honeypot: invisible to humans, tempting to bots
  const honeypot = document.createElement('input');
  honeypot.type = 'text';
  honeypot.name = 'website';
  honeypot.tabIndex = -1;
  honeypot.autocomplete = 'off';
  honeypot.setAttribute('aria-hidden', 'true');
  honeypot.style.cssText = 'position:absolute;left:-9999px;height:0;width:0;opacity:0;';
  form.appendChild(honeypot);

  const status = document.createElement('p');
  status.className = 'form-status';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  form.appendChild(status);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const lang = currentLang();

    if (honeypot.value) return; // bot — drop silently

    const data = Object.fromEntries(new FormData(form).entries());
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || '');
    if (!data.name?.trim() || !data.phone?.trim() || !emailOk) {
      status.textContent = copy.invalid[lang];
      status.dataset.state = 'invalid';
      return;
    }

    const payload = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim(),
      currentBrokerage: (data.currentBrokerage || '').trim(),
      reason: (data.reason || '').trim(),
      source: 'Agent Recruiting',
      ...utm,
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    const submitBtn = form.querySelector('.form-submit');

    if (!FORM_ENDPOINT) {
      status.textContent = copy.notConfigured[lang];
      status.dataset.state = 'error';
      return;
    }

    status.textContent = copy.sending[lang];
    status.dataset.state = 'sending';
    submitBtn.disabled = true;

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      status.textContent = copy.success[lang];
      status.dataset.state = 'success';
      form.reset(); // success only — errors keep the user's input
    } catch {
      status.textContent = copy.error[lang];
      status.dataset.state = 'error';
    } finally {
      submitBtn.disabled = false;
    }
  });
}
