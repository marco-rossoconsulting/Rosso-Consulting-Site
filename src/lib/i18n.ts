// Locale path helpers. Essays at /writing/[slug]/ exist in EN only;
// IT/ES have writing index pages but no article translations.

import { LOCALES, type Lang } from './cms';

/** Strip leading /it or /es locale prefix. EN is unprefixed. */
export function stripLocalePrefix(pathname: string): string {
  const stripped = pathname.replace(/^\/(it|es)(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}

/**
 * Individual essays are EN-only (`src/pages/writing/[slug].astro`).
 * Writing index pages exist in all locales; article slugs do not.
 */
export function isEnOnlyEssayPath(pathname: string): boolean {
  const stripped = stripLocalePrefix(pathname);
  return /^\/writing\/[^/]+/.test(stripped);
}

/**
 * Equivalent path in `target` locale.
 * EN-only essays map IT/ES to the writing index (not a 404 slug).
 */
export function pathForLocale(pathname: string, target: Lang): string {
  if (isEnOnlyEssayPath(pathname) && target !== 'en') {
    return `/${target}/writing/`;
  }
  const stripped = stripLocalePrefix(pathname);
  if (target === 'en') return stripped;
  return stripped === '/' ? `/${target}/` : `/${target}${stripped}`;
}

/** Locales that have an equivalent page — used for hreflang / og:locale:alternate. */
export function hreflangLocales(pathname: string): readonly Lang[] {
  return isEnOnlyEssayPath(pathname) ? (['en'] as const) : LOCALES;
}
