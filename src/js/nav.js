// Header navigation: the "MyOleaGroup.com" dropdown (desktop) and the
// mobile menu. Both close on outside-click, Escape, and link activation.

export function initNav() {
  // --- desktop dropdown(s) ---
  document.querySelectorAll('[data-dd]').forEach((dd) => {
    const btn = dd.querySelector('[data-dd-btn]');
    const panel = dd.querySelector('[data-dd-panel]');
    if (!btn || !panel) return;

    const setOpen = (open) => {
      btn.setAttribute('aria-expanded', String(open));
      panel.hidden = !open;
    };

    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setOpen(btn.getAttribute('aria-expanded') !== 'true');
    });
    document.addEventListener('click', (e) => {
      if (!dd.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  });

  // --- mobile menu ---
  const menuBtn = document.querySelector('[data-menu-btn]');
  const menu = document.querySelector('[data-mobile-menu]');
  if (menuBtn && menu) {
    const setOpen = (open) => {
      menuBtn.setAttribute('aria-expanded', String(open));
      menu.hidden = !open;
      menuBtn.classList.toggle('is-open', open);
      document.body.classList.toggle('menu-open', open);
    };

    menuBtn.addEventListener('click', () => {
      setOpen(menuBtn.getAttribute('aria-expanded') !== 'true');
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }
}
