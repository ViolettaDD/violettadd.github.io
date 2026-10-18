import { es } from './es';

/*
 * Punto de entrada de i18n. Hoy solo existe español.
 * Para inglés: crear en.ts, agregarlo a `dictionaries` y elegir idioma por ruta.
 */
const dictionaries = { es } as const;

export type Lang = keyof typeof dictionaries;
export const defaultLang: Lang = 'es';

export function useTranslations(lang: Lang = defaultLang) {
  return dictionaries[lang];
}

/** Atajo para el idioma por defecto. */
export const t = useTranslations();
