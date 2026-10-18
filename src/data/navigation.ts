import { t } from '@/i18n';

export interface NavItem {
  href: string;
  label: string;
}

/** Navegación principal. El logo lleva al inicio; el CV es un botón aparte. */
export const mainNav: NavItem[] = [
  { href: '/proyectos/', label: t.nav.projects },
  { href: '/sobre-mi/', label: t.nav.about },
  { href: '/contacto/', label: t.nav.contact },
];

/** true si `href` corresponde a la página actual o a una de sus hijas. */
export function isCurrent(pathname: string, href: string): boolean {
  const normalize = (p: string) => (p.endsWith('/') ? p : `${p}/`);
  const path = normalize(pathname);
  return href === '/' ? path === '/' : path.startsWith(normalize(href));
}
