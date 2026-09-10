import { strings, currentLang, onLangChange } from './i18n.js';

// Keep media steady. Only opacity changes between slides; never pan or zoom.
export function initHeroMedia() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const slides = [...hero.querySelectorAll('[data-hero-slide]')];
  const video = hero.querySelector('[data-hero-video]');
  const pause = hero.querySelector('[data-hero-pause]');
  const next = hero.querySelector('[data-hero-next]');
  const preference = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = preference.matches;
  let visible = true;
  let index = 0;
  let timer;

  const label = () => {
    pause.textContent = strings[paused ? 'hero.resume' : 'hero.pause'][currentLang()];
    pause.setAttribute('aria-pressed', String(paused));
  };
  const sync = () => {
    clearTimeout(timer);
    video.pause();
    label();
    if (paused || !visible || document.hidden) return;
    if (slides[index] === video) video.play().catch(() => {});
    // Also advance if autoplay is unavailable or the video stalls.
    timer = setTimeout(advance, slides[index] === video ? 38000 : 8000);
  };
  function advance() {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
    if (slides[index] === video) video.currentTime = 0;
    sync();
  }
  pause.addEventListener('click', () => { paused = !paused; sync(); });
  next.addEventListener('click', advance);
  video.addEventListener('ended', advance);
  document.addEventListener('visibilitychange', sync);
  preference.addEventListener('change', () => { paused = preference.matches; sync(); });
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  }).observe(hero);
  hero.querySelector('.hero-media-controls').hidden = false;
  onLangChange(label);
  sync();
}
