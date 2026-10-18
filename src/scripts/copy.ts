// Botón "copiar" con aviso accesible. Solo se muestra si el navegador permite copiar.
export function initCopyButtons(): void {
  if (!navigator.clipboard) return;

  document.querySelectorAll<HTMLElement>('[data-copy]').forEach((wrapper) => {
    const button = wrapper.querySelector<HTMLButtonElement>('button[data-copy-value]');
    const label = wrapper.querySelector<HTMLElement>('[data-copy-label]');
    const status = wrapper.querySelector<HTMLElement>('[data-copy-status]');
    if (!button || !label || button.dataset.copyReady) return;

    button.dataset.copyReady = 'true';
    button.hidden = false;
    const original = label.textContent ?? '';
    let timer: number | undefined;

    button.addEventListener('click', async () => {
      let message = button.dataset.copiedLabel ?? '';
      try {
        await navigator.clipboard.writeText(button.dataset.copyValue ?? '');
        button.dataset.state = 'copied';
      } catch {
        message = button.dataset.failedLabel ?? '';
        button.dataset.state = 'failed';
      }
      label.textContent = message;
      if (status) status.textContent = message;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        label.textContent = original;
        delete button.dataset.state;
        if (status) status.textContent = '';
      }, 2500);
    });
  });
}
