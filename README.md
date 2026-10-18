# Vio — portafolio de Violetta Delle-Donne

Portafolio de diseño de videojuegos con identidad retro-diner ("Vio Diner").
Sitio estático hecho con [Astro](https://astro.build), CSS plano y JavaScript vanilla mínimo.

> Estado: **fundaciones**. La estructura y el estilo están listos; el contenido está marcado con
> `[POR COMPLETAR]`. Ver [CONTENT_GUIDE.md](CONTENT_GUIDE.md) para saber qué va en cada lugar.

## Correr el proyecto en local

Requisitos: Node 22.22 o superior (recomendado Node 24, ver `.nvmrc`) y npm.

```bash
nvm use            # opcional, si usas nvm
npm install
npm run dev        # http://localhost:4321 con recarga en vivo
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Revisa tipos (`astro check`) y genera `dist/` |
| `npm run preview` | Sirve `dist/` tal como quedará publicado |
| `npm run check` | Solo la revisión de tipos y del schema de contenido |

Para ocultar los placeholders y ver el sitio "como quedaría", crea un archivo `.env` con
`PUBLIC_SHOW_PLACEHOLDERS=false` (ver `.env.example`).

## Estructura de carpetas

```
.
├─ _legacy/              Sitio anterior (HTML/CSS, img, fonts, capturas). Solo referencia, no se publica.
├─ .cursor/rules/        Reglas persistentes para el agente (stack, convenciones, tokens, a11y, contenido)
├─ .github/workflows/    Despliegue a GitHub Pages
├─ docs/FONTS.md         Fuentes usadas y sus licencias
├─ public/               Archivos que se copian tal cual (fuentes, favicon, CV, imagen OG, robots.txt)
└─ src/
   ├─ assets/            Imágenes fuente: astro:assets las convierte a AVIF/WebP en varios tamaños
   ├─ components/        Componentes reutilizables (.astro, con props documentadas)
   ├─ content/           Proyectos (MDX) y logros
   ├─ data/              site.ts (datos del sitio), navegación y otros datos
   ├─ i18n/              Textos de interfaz (es.ts)
   ├─ layouts/           Plantillas de página
   ├─ lib/               Utilidades
   ├─ pages/             Rutas del sitio
   ├─ scripts/           JavaScript de cliente (menú, copiar correo, filtros, jukebox)
   └─ styles/            tokens.css (sistema de diseño), base.css, surfaces.css
```

## Cambiar colores y fuentes

- **Colores, espaciado, sombras, tipografía:** todo está en `src/styles/tokens.css`. Cambia el valor de
  la variable y se actualiza en todo el sitio. Revisa la tabla de contraste en `/_styleguide`
  (abre `http://localhost:4321/_styleguide` con `npm run dev`).
- **Fuente de títulos:** cambia solo la línea `src` del `@font-face` de `'Vio Display'` en `tokens.css`.
  Detalles y licencias en [docs/FONTS.md](docs/FONTS.md).
- **Fuente de lectura:** `--font-body` en `tokens.css`.

## Guía de estilo

`/_styleguide` muestra todos los tokens, superficies, componentes y las fuentes candidatas.
No se indexa y no aparece en el sitemap.
