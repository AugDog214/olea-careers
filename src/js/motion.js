// Motion system — one signature (glass specular light-shift), everything
// else quiet. Slow weighty ease-out, zero bounce. Fully disabled under
// prefers-reduced-motion; all content works without JS.

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export function initMotion() {
  if (reduced) return; // static glass, final values, no reveals — CSS handles the rest

  gsap.registerPlugin(ScrollTrigger);

  // --- smooth scroll (Lenis driving ScrollTrigger) ---
  const lenis = new Lenis({ lerp: 0.12 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

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

  // fade/rise reveals on section furniture
  document.querySelectorAll('.section .eyebrow, .section-title, .pillar, .edge-block, .testimonial, .included-row, .faq-item, .stats').forEach((el) => {
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
