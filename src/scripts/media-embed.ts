// Facade de embeds: el iframe de terceros se crea solo cuando la persona hace clic.

const ALLOW =
  'accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture';

const facades = new WeakMap<HTMLElement, Node[]>();

/** Reemplaza el póster de un contenedor [data-embed] por su iframe. */
export function loadEmbed(container: HTMLElement): HTMLIFrameElement | null {
  const src = container.dataset.embedSrc;
  if (!src || container.dataset.embedLoaded) return container.querySelector('iframe');

  facades.set(container, Array.from(container.childNodes));
  const iframe = document.createElement('iframe');
  iframe.src = src;
  iframe.title = container.dataset.embedTitle ?? '';
  iframe.allow = ALLOW;
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';

  container.replaceChildren(iframe);
  container.dataset.embedLoaded = 'true';
  iframe.focus();
  return iframe;
}

/** Quita el iframe (detiene la reproducción) y restaura el póster. */
export function resetEmbed(container: HTMLElement): void {
  const original = facades.get(container);
  if (!original) return;
  container.replaceChildren(...original);
  delete container.dataset.embedLoaded;
}

export function initMediaEmbeds(root: ParentNode = document): void {
  root.querySelectorAll<HTMLElement>('[data-embed]').forEach((container) => {
    if (container.dataset.embedReady) return;
    container.dataset.embedReady = 'true';
    container.querySelector('[data-embed-trigger]')?.addEventListener('click', (event) => {
      event.preventDefault();
      loadEmbed(container);
    });
  });
}
