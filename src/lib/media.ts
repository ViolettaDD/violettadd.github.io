import { z } from 'astro/zod';
import type { SchemaContext } from 'astro:content';
import { isPending } from './placeholders';

/*
 * Medios: tipo discriminado por `type`. Se usa en el frontmatter (`media`) y en el jukebox.
 * Videos largos NUNCA van al repo: YouTube (por defecto) o Vimeo.
 * mp4 local solo para clips cortos (< 10 MB) dentro de public/media/.
 */

type ImageFn = SchemaContext['image'];

export const mediaSchema = (image: ImageFn) => {
  const common = {
    /** Título accesible del video/juego (se anuncia en el botón de play) */
    title: z.string(),
    /** Imagen póster 16:9 (1280×720 recomendado). Opcional en YouTube. */
    poster: image().optional(),
    /** Texto alternativo del póster; vacío si es decorativo */
    alt: z.string().optional(),
  };

  return z.discriminatedUnion('type', [
    z.object({
      type: z.literal('youtube'),
      /** ID de 11 caracteres: youtube.com/watch?v=ESTE_ID */
      id: z.string(),
      /** Segundo de inicio opcional */
      start: z.number().int().nonnegative().optional(),
      ...common,
    }),
    z.object({
      type: z.literal('vimeo'),
      /** ID numérico: vimeo.com/ESTE_ID */
      id: z.string(),
      ...common,
    }),
    z.object({
      type: z.literal('itch'),
      /** URL del iframe del build HTML5 (itch.io → Edit game → Embed game) */
      url: z.string(),
      /** Página del juego en itch.io, para el enlace sin JavaScript */
      page: z.string().optional(),
      /** Proporción del build, p. ej. "16/9" o "960/600" */
      ratio: z.string().optional(),
      ...common,
    }),
    z.object({
      type: z.literal('mp4'),
      /** Ruta en public/, p. ej. "/media/plush-hour-loop.mp4" (< 10 MB, sin audio) */
      src: z.string(),
      ...common,
    }),
    z.object({
      type: z.literal('image'),
      src: image(),
      /** Obligatorio: describe la imagen */
      alt: z.string(),
      title: z.string().optional(),
    }),
  ]);
};

export type Media = z.infer<ReturnType<typeof mediaSchema>>;
export type MediaType = Media['type'];

/** true si el medio falta o su id/url sigue siendo un placeholder. */
export function isMediaPending(media: Media | undefined): boolean {
  if (!media) return true;
  switch (media.type) {
    case 'youtube':
    case 'vimeo':
      return isPending(media.id);
    case 'itch':
      return isPending(media.url);
    case 'mp4':
      return isPending(media.src);
    case 'image':
      return false;
  }
}

/** URL del iframe (al hacer clic) y URL pública (enlace sin JS). */
export function embedUrls(media: Media): { embed: string; external: string } | null {
  switch (media.type) {
    case 'youtube': {
      const start = media.start ? `&start=${media.start}` : '';
      return {
        embed: `https://www.youtube-nocookie.com/embed/${encodeURIComponent(media.id)}?autoplay=1&rel=0${start}`,
        external: `https://www.youtube.com/watch?v=${encodeURIComponent(media.id)}`,
      };
    }
    case 'vimeo':
      return {
        embed: `https://player.vimeo.com/video/${encodeURIComponent(media.id)}?autoplay=1&dnt=1`,
        external: `https://vimeo.com/${encodeURIComponent(media.id)}`,
      };
    case 'itch':
      return { embed: media.url, external: media.page ?? media.url };
    default:
      return null;
  }
}
