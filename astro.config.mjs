// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import fs from 'node:fs';
import path from 'node:path';

// Languages are routed by src/pages/[...lang]/ (English at the root, /it/ and /es/).
// Copy lives in src/i18n/.

/**
 * Real "last modified" dates for the sitemap, read from each essay's and
 * Field Note's front matter (`updated` if present, otherwise `date`).
 * Pages without a trustworthy date get none: Google ignores sitemaps whose
 * dates are always "now".
 */
function contentDates() {
  const dates = new Map();
  for (const [dir, prefix] of [
    ['src/content/articles', '/writing/'],
    ['src/content/notes', '/notes/'],
  ]) {
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      if (!file.endsWith('.md') || file.startsWith('_')) continue;
      const head = fs.readFileSync(path.join(dir, file), 'utf8').split('---')[1] ?? '';
      if (/^draft:\s*true/m.test(head)) continue;
      const m = head.match(/^updated:\s*["']?([\d-]+)/m) ?? head.match(/^date:\s*["']?([\d-]+)/m);
      if (m) dates.set(`https://rossoconsulting.ch${prefix}${file.replace(/\.md$/, '')}/`, new Date(m[1]).toISOString());
    }
  }
  return dates;
}
const lastmods = contentDates();

export default defineConfig({
  site: 'https://rossoconsulting.ch',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'always', // no render-blocking CSS requests; the CSS is small
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', it: 'it', es: 'es' },
      },
      serialize(item) {
        const lastmod = lastmods.get(item.url);
        return lastmod ? { ...item, lastmod } : item;
      },
    }),
  ],
});
