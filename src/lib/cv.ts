import { site } from '@/data/site';

/** Mientras no haya PDF, el botón "CV" lleva a la versión en texto de Sobre mí. */
export const cvTextAnchor = '/sobre-mi/#cv';

export function cvLink(): { href: string; isPdf: boolean } {
  return site.cv.available ? { href: site.cv.href, isPdf: true } : { href: cvTextAnchor, isPdf: false };
}
