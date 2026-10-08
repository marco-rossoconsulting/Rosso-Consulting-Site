/**
 * Languages, routes and small text helpers.
 *
 * English lives at the root (/advisory/), Italian and Spanish under a prefix
 * (/it/advisory/, /es/advisory/). Slugs stay in English in every language,
 * like the offer names they carry.
 */
export const langs = ['en', 'it', 'es'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'en';

export const routes = {
  home: '',
  advisory: 'advisory',
  ai: 'ai-in-practice',
  lab: 'lab',
  notes: 'notes',
  about: 'about',
  contact: 'contact',
  privacy: 'privacy',
} as const;
export type RouteKey = keyof typeof routes;

/** Localised path for a route, always with a trailing slash. */
export function path(lang: Lang, key: RouteKey, hash = ''): string {
  const prefix = lang === defaultLang ? '' : `/${lang}`;
  const slug = routes[key];
  const p = slug ? `${prefix}/${slug}/` : `${prefix}/`;
  return hash ? `${p}#${hash}` : p;
}

/** The same page in another language, from the current pathname. */
export function switchLang(pathname: string, target: Lang): string {
  const stripped = pathname.replace(/^\/(it|es)(?=\/|$)/, '') || '/';
  // Essays and Field Notes are English-only: send other languages to their Notes page.
  if (target !== defaultLang && /^\/(writing|notes)\/[^/]+\/?$/.test(stripped)) {
    return path(target, 'notes');
  }
  if (target === defaultLang) return stripped;
  return `/${target}${stripped === '/' ? '/' : stripped}`;
}

/** getStaticPaths entries for a page that exists in every language. */
export function langStaticPaths() {
  return langs.map((lang) => ({
    params: { lang: lang === defaultLang ? undefined : lang },
    props: { lang },
  }));
}

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (langs as readonly string[]).includes(value);
}

const escapeMap: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};
export function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) => escapeMap[c]);
}

/**
 * Headlines mark their one italic phrase with asterisks: "Where ideas get *tried*."
 * Returns safe HTML with the phrase wrapped in <em>.
 */
export function em(s: string): string {
  return escapeHtml(s).replace(/\*([^*]+)\*/g, '<em>$1</em>');
}

/** Plain text version of a headline (for titles and aria labels). */
export function plain(s: string): string {
  return s.replace(/\*/g, '');
}

export function formatDate(date: Date, lang: Lang): string {
  const locale = { en: 'en-GB', it: 'it-CH', es: 'es-ES' }[lang];
  return new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
}
