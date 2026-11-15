// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // Final public URL — used for canonical links, Open Graph tags and hreflang.
  site: 'https://www.chaitanyasangeetvidyalay.com',

  // English lives at "/", Marathi at "/mr/".
  i18n: {
    locales: ['en', 'mr'],
    defaultLocale: 'en',
    routing: { prefixDefaultLocale: false },
  },

  // Every page is built as  /page/index.html  — works out of the box on GitHub Pages.
  build: { format: 'directory' },

  vite: {
    plugins: [tailwindcss()],
  },
});
