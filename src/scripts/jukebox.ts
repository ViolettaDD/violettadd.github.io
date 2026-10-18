import { loadEmbed, resetEmbed } from './media-embed';

// Mejora progresiva del jukebox: sin JS funciona con enlaces #ancla y :target.
export function initJukeboxes(): void {
  document.querySelectorAll<HTMLElement>('[data-jukebox]').forEach((root) => {
    if (root.dataset.enhanced) return;

    const tracks = Array.from(root.querySelectorAll<HTMLAnchorElement>('[data-jukebox-track]'));
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[data-jukebox-panel]'));
    const now = root.querySelector<HTMLElement>('[data-jukebox-now]');
    const controls = root.querySelector<HTMLElement>('[data-jukebox-controls]');
    const play = root.querySelector<HTMLButtonElement>('[data-jukebox-play]');
    if (tracks.length === 0 || panels.length !== tracks.length) return;

    let active = Math.max(
      0,
      panels.findIndex((panel) => `#${panel.id}` === window.location.hash),
    );

    const stop = (panel: HTMLElement) => {
      panel.querySelectorAll<HTMLElement>('[data-embed-loaded]').forEach(resetEmbed);
      panel.querySelectorAll('video').forEach((video) => video.pause());
    };

    const select = (index: number, announce = true) => {
      const next = (index + panels.length) % panels.length;
      if (next !== active) stop(panels[active]);
      active = next;
      panels.forEach((panel, i) => (panel.hidden = i !== active));
      tracks.forEach((track, i) => {
        if (i === active) track.setAttribute('aria-current', 'true');
        else track.removeAttribute('aria-current');
      });
      if (now && announce) now.textContent = tracks[active].dataset.title ?? '';
      if (play) play.disabled = panels[active].dataset.pending === 'true';
    };

    tracks.forEach((track, i) => {
      track.addEventListener('click', (event) => {
        event.preventDefault();
        select(i);
      });
    });

    root.querySelector('[data-jukebox-prev]')?.addEventListener('click', () => select(active - 1));
    root.querySelector('[data-jukebox-next]')?.addEventListener('click', () => select(active + 1));
    play?.addEventListener('click', () => {
      const panel = panels[active];
      const embed = panel.querySelector<HTMLElement>('[data-embed]');
      if (embed) {
        loadEmbed(embed);
        return;
      }
      panel.querySelector('video')?.play();
    });

    root.dataset.enhanced = 'true';
    if (controls) controls.hidden = false;
    select(active, false);
  });
}
