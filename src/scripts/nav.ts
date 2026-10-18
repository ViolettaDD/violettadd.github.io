// Menú móvil (patrón disclosure). Sin JS, la navegación queda siempre visible.
export function initNav(): void {
  const header = document.querySelector<HTMLElement>('[data-site-header]');
  const toggle = header?.querySelector<HTMLButtonElement>('[data-nav-toggle]');
  if (!header || !toggle) return;

  toggle.hidden = false;

  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    header.toggleAttribute('data-open', open);
  };
  const isOpen = () => toggle.getAttribute('aria-expanded') === 'true';

  toggle.addEventListener('click', () => setOpen(!isOpen()));

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  header.addEventListener('focusout', (event) => {
    const next = event.relatedTarget as Node | null;
    if (next && !header.contains(next)) setOpen(false);
  });

  document.addEventListener('click', (event) => {
    if (isOpen() && !header.contains(event.target as Node)) setOpen(false);
  });

  window.matchMedia('(min-width: 48em)').addEventListener('change', () => setOpen(false));
}
