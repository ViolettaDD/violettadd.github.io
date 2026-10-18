/*
 * Datos del sitio en un solo lugar. Todo lo que diga [POR COMPLETAR] se muestra como
 * placeholder (o se oculta si PUBLIC_SHOW_PLACEHOLDERS=false) hasta que lo reemplaces.
 * Ver CONTENT_GUIDE.md → "Datos del sitio".
 */

export type SocialId = 'linkedin' | 'itch' | 'github' | 'instagram' | 'x';

export interface SocialLink {
  id: SocialId;
  /** Nombre visible de la red */
  label: string;
  /** URL completa de TU perfil (no la portada de la red) */
  url: string;
  /** Usuario visible, por ejemplo "@vio" */
  handle: string;
  /** Para qué usas esa red, una línea (se muestra en el recibo de contacto) */
  purpose: string;
}

export type AvailabilityStatus = 'open' | 'closed';

export const site = {
  name: 'Violetta Delle-Donne',
  shortName: 'Vio',
  url: 'https://violettadd.github.io',
  locale: 'es',

  // TODO(vio): título de rol, 2–5 palabras. Aparece en el hero, el <title> y el JSON-LD.
  role: '[POR COMPLETAR] Título de rol (2–5 palabras)',

  // TODO(vio): frase de posicionamiento, 1 frase de máx. ~20 palabras. Va bajo el título del hero.
  tagline: '[POR COMPLETAR] Frase de posicionamiento (1 frase, máx. ~20 palabras)',

  // TODO(vio): descripción para buscadores y redes (150–160 caracteres).
  description: '[POR COMPLETAR] Descripción del sitio para buscadores (150–160 caracteres)',

  // TODO(vio): confirma que este es el correo profesional que quieres mostrar (viene del sitio anterior).
  email: 'violettaddm7@gmail.com',

  // Estudios: dato tomado del pie del sitio anterior.
  school: 'Universidad San Francisco de Quito',

  /*
   * Disponibilidad: controla el letrero "We're open" del inicio y del pie.
   * status: 'open' (letrero encendido) o 'closed' (letrero apagado).
   */
  availability: {
    status: 'open' as AvailabilityStatus,
    // Texto del letrero (corto, 1–3 palabras).
    sign: { open: 'We’re open', closed: 'Closed' },
    // TODO(vio): una línea, por ejemplo para qué tipo de trabajo y desde cuándo.
    message: '[POR COMPLETAR] Disponibilidad: tipo de trabajo y desde cuándo (1 línea)',
  },

  /*
   * CV en PDF. Coloca el archivo en public/cv/ con este nombre y cambia `available` a true.
   */
  cv: {
    // TODO(vio): sube tu CV a public/cv/violetta-delle-donne-cv.pdf (A4/Carta, ≤ 1 MB).
    href: '/cv/violetta-delle-donne-cv.pdf',
    available: false,
  },

  // TODO(vio): reemplaza cada URL por la de TU perfil. Si no usas una red, bórrala de la lista.
  socials: [
    {
      id: 'linkedin',
      label: 'LinkedIn',
      url: '[POR COMPLETAR] https://www.linkedin.com/in/tu-usuario',
      handle: '[POR COMPLETAR] usuario',
      purpose: '[POR COMPLETAR] Para qué usas esta red',
    },
    {
      id: 'itch',
      label: 'itch.io',
      url: '[POR COMPLETAR] https://tu-usuario.itch.io',
      handle: '[POR COMPLETAR] usuario',
      purpose: '[POR COMPLETAR] Para qué usas esta red',
    },
    {
      id: 'github',
      label: 'GitHub',
      url: '[POR COMPLETAR] https://github.com/tu-usuario',
      handle: '[POR COMPLETAR] usuario',
      purpose: '[POR COMPLETAR] Para qué usas esta red',
    },
    {
      id: 'instagram',
      label: 'Instagram',
      url: '[POR COMPLETAR] https://www.instagram.com/tu-usuario',
      handle: '[POR COMPLETAR] usuario',
      purpose: '[POR COMPLETAR] Para qué usas esta red',
    },
    {
      id: 'x',
      label: 'X',
      url: '[POR COMPLETAR] https://x.com/tu-usuario',
      handle: '[POR COMPLETAR] usuario',
      purpose: '[POR COMPLETAR] Para qué usas esta red',
    },
  ] satisfies SocialLink[],
} as const;

export type Site = typeof site;
