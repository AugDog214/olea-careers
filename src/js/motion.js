// Motion system — one signature (glass specular light-shift), everything
// else quiet. Slow weighty ease-out, zero bounce. Fully disabled under
// prefers-reduced-motion; all content works without JS.

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { strings, currentLang, onLangChange } from './i18n.js';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initMotion() {
  initIncludedInteraction({ useScroll: !reduced });
  if (reduced) return; // static glass, final values, no reveals — CSS handles the rest

  gsap.registerPlugin(ScrollTrigger);
  document.documentElement.classList.add('motion-on');

  // --- smooth scroll (Lenis driving ScrollTrigger) ---
  const lenis = new Lenis({ lerp: 0.12 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // --- ⭐ signature: draw the royal line under each section title ---
  document.querySelectorAll('.section-title').forEach((title) => {
    ScrollTrigger.create({
      trigger: title,
      start: 'top 82%',
      once: true,
      onEnter: () => title.classList.add('is-drawn'),
    });
  });

  // --- eXp-style Edge: staggered reveal + image wipe (no boxes) ---
  document.querySelectorAll('#edge [data-edge]').forEach((block, i) => {
    gsap.from(block.querySelector('.edge-copy'), {
      opacity: 0,
      y: 40,
      duration: 0.9,
      ease: 'power3.out',
      delay: i * 0.12,
      scrollTrigger: { trigger: block, start: 'top 80%', once: true },
    });
    ScrollTrigger.create({
      trigger: block,
      start: 'top 80%',
      once: true,
      onEnter: () => block.classList.add('is-revealed'),
    });
  });

  // --- ⭐ signature: specular light-shift across the glass chrome ---
  // A soft light band slides across the header / sticky CTA as you scroll,
  // like light moving over real glass. Cheap: one CSS var, no extra layers.
  const glassEls = document.querySelectorAll('.site-header, .sticky-cta');
  window.addEventListener(
    'scroll',
    () => {
      const p = window.scrollY / Math.max(1, document.body.scrollHeight - innerHeight);
      glassEls.forEach((el) => el.style.setProperty('--specular-x', `${p * 100}%`));
    },
    { passive: true }
  );

  // --- quiet supporting kit ---

  // fade/rise reveals on section furniture (Edge handled separately above)
  document.querySelectorAll('.section .eyebrow, .section-title, .pillar, .testimonial, .faq-item, .stats, .proof-lead').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 32,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
    });
  });

  // count-ups on production stats (only when real numbers exist —
  // values still showing '—' placeholders are left alone)
  document.querySelectorAll('.stat-value').forEach((el) => {
    const raw = el.textContent.trim();
    const num = parseFloat(raw.replace(/[^0-9.]/g, ''));
    if (!Number.isFinite(num)) return; // placeholder '—' → skip
    const prefix = raw.match(/^[^0-9]*/)[0];
    const suffix = raw.match(/[^0-9.]*$/)[0];
    const obj = { v: 0 };
    gsap.to(obj, {
      v: num,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true },
      onUpdate: () => {
        el.textContent = `${prefix}${Math.round(obj.v).toLocaleString()}${suffix}`;
      },
    });
  });

  // subtle parallax on the hero background
  gsap.to('.hero', {
    backgroundPosition: '50% 30%',
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });

  // --- v3 · culture: fade/rise copy + gentle photo parallax (one move) ---
  document.querySelectorAll('[data-culture]').forEach((row) => {
    gsap.from(row.querySelector('.culture-copy'), {
      opacity: 0,
      y: 36,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: row, start: 'top 82%', once: true },
    });
    gsap.fromTo(
      row.querySelector('.culture-photo'),
      { yPercent: -7 },
      {
        yPercent: 7,
        ease: 'none',
        scrollTrigger: { trigger: row, start: 'top bottom', end: 'bottom top', scrub: true },
      }
    );
  });

  // --- v3 · offer deck: desktop pinned layer-drop; mobile keeps the CSS
  //     sticky card-stack (no JS needed there) ---
  const deck = document.querySelector('[data-deck]');
  if (deck) {
    const mmDeck = gsap.matchMedia();
    mmDeck.add('(min-width: 1000px)', () => {
      const layers = [...deck.querySelectorAll('[data-deck-layer]')];
      deck.classList.add('is-deck-pinned');
      layers.forEach((l, i) => gsap.set(l, { zIndex: layers.length - i, yPercent: 0, opacity: 1 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: deck,
          start: 'top top+=104',
          end: () => `+=${(layers.length - 1) * 90}%`,
          pin: true,
          scrub: true,
          anticipatePin: 1,
        },
      });
      // each front layer drops down and away, exposing the next behind it
      layers.slice(0, -1).forEach((layer, i) => {
        tl.to(layer, { yPercent: 120, opacity: 0.35, ease: 'power1.in', duration: 1 }, i);
      });

      return () => {
        deck.classList.remove('is-deck-pinned');
        layers.forEach((l) => gsap.set(l, { clearProps: 'all' }));
      };
    });
  }

  // --- v3 · proof: eXp-style scroll-highlight quote (word scrub) ---
  const quoteEl = document.querySelector('[data-quote]');
  if (quoteEl) {
    let quoteTrigger = null;
    const buildQuote = () => {
      if (quoteTrigger) {
        quoteTrigger.kill();
        quoteTrigger = null;
      }
      const words = `“${strings['quote.q'][currentLang()]}”`.split(' ');
      quoteEl.innerHTML = words.map((w) => `<span class="qw">${w}</span>`).join(' ');
      const spans = quoteEl.querySelectorAll('.qw');
      gsap.set(spans, { opacity: 0.18 });
      const tween = gsap.to(spans, {
        opacity: 1,
        stagger: 0.6,
        ease: 'none',
        scrollTrigger: {
          trigger: quoteEl,
          start: 'top 78%',
          end: 'bottom 42%',
          scrub: true,
        },
      });
      quoteTrigger = tween.scrollTrigger;
    };
    buildQuote();
    onLangChange(() => {
      buildQuote();
      ScrollTrigger.refresh();
    });
  }

  // magnetic CTA — pointer devices only
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.btn-cta').forEach((btn) => {
      const strength = 14;
      btn.addEventListener('mousemove', (e) => {
        const r = btn.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * strength;
        const y = ((e.clientY - r.top) / r.height - 0.5) * strength;
        gsap.to(btn, { x, y, duration: 0.4, ease: 'power3.out' });
      });
      btn.addEventListener('mouseleave', () => {
        gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'power3.out' });
      });
    });
  }
}

function initIncludedInteraction({ useScroll }) {
  const incLayout = document.querySelector('[data-inc]');
  if (!incLayout) return;

  const rows = [...incLayout.querySelectorAll('[data-inc-row]')];
  const background = incLayout.querySelector('[data-inc-bg]');
  const canHover = window.matchMedia('(hover: hover)').matches;
  let current = -1;

  const setActive = (index) => {
    if (index === current) return;
    current = index;
    const activeRow = rows[index];
    const photo = activeRow.dataset.incPhoto || incLayout.dataset.incDefaultPhoto;

    rows.forEach((row, rowIndex) => {
      const isActive = rowIndex === index;
      row.classList.toggle('is-active', isActive);
      row.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    incLayout.classList.add('has-active');
    incLayout.classList.toggle('has-photo', Boolean(photo));
    background.style.backgroundImage = photo ? `url("${photo}")` : '';
    background.style.backgroundPosition = activeRow.dataset.incPosition || '';
  };

  rows.forEach((row, index) => {
    row.tabIndex = 0;
    row.setAttribute('role', 'button');
    const activate = () => setActive(index);
    const onKeydown = (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      setActive(index);
    };

    if (canHover) row.addEventListener('pointerenter', activate);
    row.addEventListener('click', activate);
    row.addEventListener('focusin', activate);
    row.addEventListener('keydown', onKeydown);
  });

  if (useScroll) {
    gsap.registerPlugin(ScrollTrigger);
    rows.forEach((row, index) => {
      ScrollTrigger.create({
        trigger: row,
        start: 'top 58%',
        end: 'bottom 58%',
        onToggle: (self) => self.isActive && setActive(index),
      });
    });
  }

  setActive(0);
}
