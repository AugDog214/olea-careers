export function initFaq() {
  const faq = document.querySelector('[data-faq]');
  if (!faq) return;

  const tabs = [...faq.querySelectorAll('[data-faq-tab]')];
  const panels = [...faq.querySelectorAll('[data-faq-panel]')];
  if (!tabs.length || !panels.length) return;

  const activate = (id, moveFocus = false) => {
    tabs.forEach((tab) => {
      const active = tab.dataset.faqTab === id;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active && moveFocus) tab.focus();
    });
    panels.forEach((panel) => { panel.hidden = panel.dataset.faqPanel !== id; });
  };

  faq.classList.add('faq-tabs-on');
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(tab.dataset.faqTab));
    tab.addEventListener('keydown', (event) => {
      let next = index;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(tabs[next].dataset.faqTab, true);
    });
  });

  faq.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (!item.open) return;
      item.closest('.faq-panel').querySelectorAll('.faq-item[open]').forEach((other) => {
        if (other !== item) other.open = false;
      });
    });
  });

  activate(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true')?.dataset.faqTab || tabs[0].dataset.faqTab);
}
