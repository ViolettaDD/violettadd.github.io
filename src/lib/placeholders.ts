import { PUBLIC_SHOW_PLACEHOLDERS } from 'astro:env/client';

/** Marca única para todo contenido pendiente. El deploy falla si queda en el HTML. */
export const PLACEHOLDER_MARK = '[POR COMPLETAR]';

/** Si es false, las secciones sin contenido se ocultan en lugar de mostrar placeholders. */
export const showPlaceholders: boolean = PUBLIC_SHOW_PLACEHOLDERS;

/** true si el valor falta, está vacío o todavía contiene la marca [POR COMPLETAR]. */
export function isPending(value: unknown): boolean {
  if (value === null || value === undefined) return true;
  if (typeof value === 'string') return value.trim() === '' || value.includes(PLACEHOLDER_MARK);
  if (Array.isArray(value)) return value.length === 0 || value.every(isPending);
  return false;
}

/** Texto de ayuda de un valor pendiente, sin la marca. */
export function pendingHint(value: unknown): string {
  return typeof value === 'string' ? value.replace(PLACEHOLDER_MARK, '').trim() : '';
}
