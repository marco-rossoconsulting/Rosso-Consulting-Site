// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rossoconsulting.ch',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'it', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', it: 'it', es: 'es' },
      },
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.links?.length) {
          const defaultLink =
            item.links.find((link) => link.lang === 'en' || link.hreflang === 'en') ??
            item.links[0];
          const hasXDefault = item.links.some(
            (link) => link.lang === 'x-default' || link.hreflang === 'x-default',
          );
          if (!hasXDefault) {
            item.links.push({ url: defaultLink.url, lang: 'x-default' });
          }
        }
        return item;
      },
    }),
  ],
});
