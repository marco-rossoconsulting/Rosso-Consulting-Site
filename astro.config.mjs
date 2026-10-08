// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Languages are routed by src/pages/[...lang]/ (English at the root, /it/ and /es/).
// Copy lives in src/i18n/.
export default defineConfig({
  site: 'https://rossoconsulting.ch',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', it: 'it', es: 'es' },
      },
    }),
  ],
});
