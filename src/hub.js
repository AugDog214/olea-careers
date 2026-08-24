import './styles/tokens.css';
import './styles/base.css';
import './styles/hubs.css';
import { initForm } from './js/form.js';

const calendarUrl = (import.meta.env.VITE_HEIDY_CALENDAR_URL || '').trim() || '/#contact';
document.querySelectorAll('[data-calendar-link]').forEach((link) => { link.href = calendarUrl; });

const langButton = document.querySelector('[data-hub-language]');
const setLanguage = (lang) => {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-en], [data-es]').forEach((el) => { el.hidden = !el.hasAttribute(`data-${lang}`); });
  if (langButton) langButton.textContent = lang === 'en' ? 'Español' : 'English';
};
let lang = new URLSearchParams(location.search).get('lang') === 'es' ? 'es' : 'en';
setLanguage(lang);
langButton?.addEventListener('click', () => { lang = lang === 'en' ? 'es' : 'en'; setLanguage(lang); history.replaceState({}, '', lang === 'es' ? '?lang=es' : location.pathname); });
initForm();
