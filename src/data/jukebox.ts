import type { Media } from '@/lib/media';

/*
 * Canciones del jukebox del inicio. Cada canción es un video: el showreel completo o un clip
 * de un proyecto. Ver CONTENT_GUIDE.md → "Jukebox / showreel".
 */

export interface JukeboxTrack {
  /** Nombre visible de la canción */
  title: string;
  /** Línea secundaria corta (duración, tipo) */
  note?: string;
  /** Enlace al estudio de caso relacionado */
  href?: string;
  /** Video de la canción. Mientras el id sea [POR COMPLETAR] se muestra un placeholder. */
  media?: Media;
}

export const jukeboxTracks: JukeboxTrack[] = [
  {
    title: 'Showreel',
    // TODO(vio): duración del showreel, p. ej. "1:15".
    note: '[POR COMPLETAR] Duración',
    media: {
      type: 'youtube',
      // TODO(vio): sube el showreel (60–90 s) a YouTube y pega aquí solo el ID (11 caracteres).
      id: '[POR COMPLETAR] ID de YouTube del showreel (60–90 s)',
      title: 'Showreel de Violetta Delle-Donne',
    },
  },
  {
    title: 'Plush Hour',
    href: '/proyectos/plush-hour/',
    // TODO(vio): clip corto del juego (YouTube o mp4 < 10 MB en public/media/).
    media: { type: 'youtube', id: '[POR COMPLETAR] ID de YouTube', title: 'Plush Hour: clip' },
  },
  {
    title: 'Motion Graphics',
    href: '/proyectos/motion-graphics/',
    media: { type: 'youtube', id: '[POR COMPLETAR] ID de YouTube', title: 'Motion Graphics: clip' },
  },
  {
    title: 'Empire Ants',
    href: '/proyectos/empire-ants/',
    media: { type: 'youtube', id: '[POR COMPLETAR] ID de YouTube', title: 'Empire Ants: clip' },
  },
  {
    title: 'Processing',
    href: '/proyectos/processing/',
    media: { type: 'youtube', id: '[POR COMPLETAR] ID de YouTube', title: 'Processing: clip' },
  },
  {
    title: 'Animación',
    href: '/proyectos/animacion/',
    media: { type: 'youtube', id: '[POR COMPLETAR] ID de YouTube', title: 'Animación: clip' },
  },
];
