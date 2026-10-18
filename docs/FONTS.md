# Fuentes

Todas las fuentes que se sirven en el sitio son libres (SIL Open Font License 1.1), self-hosted en
`public/fonts/` como `.woff2` con el subconjunto latin (incluye acentos, ñ, ¿ y ¡).

## En uso

| Rol | Fuente | Autor | Licencia | Archivo | URL |
|---|---|---|---|---|---|
| Lectura (`--font-body`) | Atkinson Hyperlegible Next | Braille Institute of America (diseño: Applied Design Works) | OFL 1.1 | `atkinson-hyperlegible-next-latin-wght.woff2`, `…-italic.woff2` (variable, pesos 200–800) | https://fonts.google.com/specimen/Atkinson+Hyperlegible+Next |
| Títulos (`--font-display`), provisional | Alfa Slab One | JM Solé | OFL 1.1 | `alfa-slab-one-latin-400.woff2` | https://fonts.google.com/specimen/Alfa+Slab+One |

## Candidatas para títulos (comparar en `/_styleguide`)

Solo se cargan en la guía de estilo, no en las páginas públicas.

| Fuente | Autor | Licencia | Archivo | URL |
|---|---|---|---|---|
| Alfa Slab One | JM Solé | OFL 1.1 | `alfa-slab-one-latin-400.woff2` | https://fonts.google.com/specimen/Alfa+Slab+One |
| Shrikhand | Jonny Pinhorn | OFL 1.1 | `shrikhand-latin-400.woff2` | https://fonts.google.com/specimen/Shrikhand |
| Bungee | David Jonathan Ross | OFL 1.1 | `bungee-latin-400.woff2` | https://fonts.google.com/specimen/Bungee |

## No servidas (solo referencia en `_legacy/fonts/`)

| Fuente | Autor | Licencia | Motivo |
|---|---|---|---|
| Rouge Vintage | Faristaputra Studio | "Personal Use" | El portafolio busca clientes: no es uso personal. |
| Vintage Rough (Demo) | Nirmana Visual | Demo | Licencia demo y no incluye números. |

## Cambiar la fuente de títulos

1. Copia el nuevo `.woff2` a `public/fonts/`.
2. En `src/styles/tokens.css`, cambia **solo** la línea `src` del `@font-face` de `'Vio Display'`.
3. Agrega la fuente a la tabla "En uso" de este archivo con su licencia.

Si compras una licencia **web** de Rouge Vintage, conviértela a `.woff2` y sigue estos mismos pasos.
