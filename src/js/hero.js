import { strings, currentLang, onLangChange } from './i18n.js';

// Keep media steady. Only opacity changes between slides; never pan or zoom.
export function initHeroMedia() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  const slides = [...hero.querySelectorAll('[data-hero-slide]')];
  const videos = [...hero.querySelectorAll('[data-hero-video]')];
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
    videos.forEach(video => video.pause());
    label();
    if (paused || !visible || document.hidden) return;
    const active = slides[index];
    const isVideo = active instanceof HTMLVideoElement;
    if (isVideo) active.play().catch(() => {});
    // Also advance if autoplay is unavailable or the video stalls.
    const remaining = isVideo && Number.isFinite(active.duration) ? Math.max(1, active.duration - active.currentTime) + 3 : 40;
    timer = setTimeout(advance, isVideo ? remaining * 1000 : 8000);
  };
  function advance() {
    slides[index].classList.remove('is-active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('is-active');
    if (slides[index] instanceof HTMLVideoElement) slides[index].currentTime = 0;
    sync();
  }
  pause.addEventListener('click', () => { paused = !paused; sync(); });
  next.addEventListener('click', advance);
  videos.forEach(video => video.addEventListener('ended', () => {
    if (slides[index] === video && !paused) advance();
  }));
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
