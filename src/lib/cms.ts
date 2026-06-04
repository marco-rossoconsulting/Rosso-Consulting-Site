// CMS helpers — read locale-specific entries from content collections.
// Files live at src/content/<collection>/<locale>/<name>.json — Astro's
// glob loader produces IDs like 'en/site', 'it/home', 'es/practice'.

import { getEntry, getCollection } from 'astro:content';

export type Lang = 'en' | 'it' | 'es';
export const LOCALES: readonly Lang[] = ['en', 'it', 'es'] as const;

export function isLang(value: string): value is Lang {
  return (LOCALES as readonly string[]).includes(value);
}

// Per-locale site settings
export async function getSite(lang: Lang) {
  const entry = await getEntry('siteSettings', `${lang}/site`);
  if (!entry) throw new Error(`Missing settings/${lang}/site.json`);
  return entry.data;
}

// Per-locale navigation
export async function getNavigation(lang: Lang) {
  const entry = await getEntry('navigation', `${lang}/navigation`);
  if (!entry) throw new Error(`Missing settings/${lang}/navigation.json`);
  return entry.data;
}

// Per-locale UI strings
export async function getUi(lang: Lang) {
  const entry = await getEntry('ui', `${lang}/ui`);
  if (!entry) throw new Error(`Missing settings/${lang}/ui.json`);
  return entry.data;
}

// Page content getters — all return locale-specific entry
async function getPage<T extends 'homePages' | 'practicePages' | 'principalPages' | 'advisoryPages' | 'venturesPages' | 'contactPages' | 'writingPages'>(
  collection: T,
  basename: string,
  lang: Lang,
) {
  const entry = await getEntry(collection, `${lang}/${basename}`);
  if (!entry) throw new Error(`Missing pages/${lang}/${basename}.json`);
  return entry.data;
}

export const getHomePage = (lang: Lang) => getPage('homePages', 'home', lang);
export const getPracticePage = (lang: Lang) => getPage('practicePages', 'practice', lang);
export const getPrincipalPage = (lang: Lang) => getPage('principalPages', 'principal', lang);
export const getAdvisoryPage = (lang: Lang) => getPage('advisoryPages', 'advisory', lang);
export const getVenturesPage = (lang: Lang) => getPage('venturesPages', 'ventures', lang);
export const getContactPage = (lang: Lang) => getPage('contactPages', 'contact', lang);
export const getWritingPage = (lang: Lang) => getPage('writingPages', 'writing', lang);

// Advisory entries — language-neutral data; active, sorted
export async function getAdvisoryEntries(opts: { featuredOnly?: boolean } = {}) {
  const all = await getCollection('advisory', ({ data }) => data.active && (!opts.featuredOnly || data.featured));
  return all.sort((a, b) => a.data.order - b.data.order);
}

// Published articles
export async function getPublishedArticles() {
  const all = await getCollection('articles', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
