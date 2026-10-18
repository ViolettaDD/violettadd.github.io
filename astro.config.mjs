// @ts-check
import { defineConfig, envField } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Sitio de usuario de GitHub Pages: se publica en la raíz, sin `base`.
export default defineConfig({
  site: 'https://violettadd.github.io',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  integrations: [
    mdx(),
    sitemap({
      // La guía de estilo es interna: fuera del sitemap.
      filter: (page) => !page.includes('/_styleguide'),
    }),
  ],
  env: {
    schema: {
      // false: oculta las secciones vacías en lugar de mostrar placeholders.
      PUBLIC_SHOW_PLACEHOLDERS: envField.boolean({
        context: 'client',
        access: 'public',
        default: true,
      }),
    },
  },
  image: {
    layout: 'constrained',
    responsiveStyles: true,
  },
  devToolbar: {
    enabled: false,
  },
});
