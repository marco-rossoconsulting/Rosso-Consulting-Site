/**
 * Structured data (schema.org JSON-LD) shared by every page.
 *
 * One connected graph per page: the WebSite (gives Google the site name),
 * the organisation, Marco as a Person, the page itself and its breadcrumb.
 * Pages add their own nodes (Article on essays). Facts come from the
 * Business Foundation; nothing here should claim more than the pages say.
 */
import { getCopy, type Lang } from '../i18n';
import { site } from '../data/site';

export type PageType = 'WebPage' | 'AboutPage' | 'ProfilePage' | 'ContactPage' | 'CollectionPage';
export interface Crumb {
  name: string;
  url: string;
}

export const ids = {
  website: `${site.url}/#website`,
  org: `${site.url}/#rosso-consulting`,
  person: `${site.url}/#marco-rosso`,
};

const knowsAbout = [
  'Hospitality technology',
  'Hotel distribution',
  'Revenue management',
  'Go-to-market strategy',
  'Hotel operations',
  'Artificial intelligence in hospitality',
  'Brand strategy',
];

function organisation() {
  const en = getCopy('en');
  const offers = en.home.offers.filter((o) => o.key !== 'lab');
  return {
    '@type': 'ProfessionalService',
    '@id': ids.org,
    name: site.name,
    alternateName: 'Marco Rosso Consulting',
    url: `${site.url}/`,
    logo: { '@type': 'ImageObject', url: `${site.url}/brand/rosso-consulting-full.png`, width: 1200, height: 521 },
    image: `${site.url}/og-default.png`,
    email: site.email,
    slogan: 'Tried before advised.',
    description: en.home.seo.description,
    founder: { '@id': ids.person },
    knowsAbout,
    knowsLanguage: site.person.knowsLanguage,
    areaServed: [
      { '@type': 'Place', name: 'Europe, Middle East and Africa' },
      { '@type': 'Country', name: 'Switzerland' },
      { '@type': 'Country', name: 'Italy' },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: site.locality,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: site.email,
      url: `${site.url}/contact/`,
      availableLanguage: ['English', 'Italian', 'Spanish'],
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Rosso Consulting services',
      itemListElement: offers.map((o) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: o.name,
          description: o.text,
          audience: { '@type': 'Audience', audienceType: o.audience.replace(/^For /, '') },
          url: `${site.url}/${o.key === 'ai' ? 'ai-in-practice' : o.key}/`,
          provider: { '@id': ids.org },
        },
      })),
    },
    sameAs: [site.linkedin],
  };
}

function person() {
  return {
    '@type': 'Person',
    '@id': ids.person,
    name: site.person.fullName,
    givenName: site.person.givenName,
    familyName: site.person.familyName,
    jobTitle: site.person.jobTitle,
    description: getCopy('en').about.story[0],
    url: `${site.url}/about/`,
    image: `${site.url}/brand/marco-rosso.png`,
    email: site.email,
    worksFor: [{ '@id': ids.org }, { '@type': 'Organization', name: 'Planhotel Hospitality Group' }],
    founder: [{ '@id': ids.org }, { '@type': 'Organization', name: 'Astia Web', url: site.astiaUrl }],
    alumniOf: site.person.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
    knowsAbout,
    knowsLanguage: site.person.knowsLanguage,
    homeLocation: { '@type': 'Place', name: 'Lugano, Switzerland' },
    sameAs: [site.linkedin],
  };
}

function website() {
  return {
    '@type': 'WebSite',
    '@id': ids.website,
    url: `${site.url}/`,
    name: site.name,
    alternateName: ['Marco Rosso Consulting', 'rossoconsulting.ch'],
    inLanguage: ['en', 'it', 'es'],
    publisher: { '@id': ids.org },
  };
}

export function buildGraph(opts: {
  lang: Lang;
  url: string;
  title: string;
  description: string;
  pageType: PageType;
  crumbs: Crumb[];
  extra: Record<string, unknown>[];
}) {
  const pageId = `${opts.url}#webpage`;
  const page: Record<string, unknown> = {
    '@type': opts.pageType,
    '@id': pageId,
    url: opts.url,
    name: opts.title,
    description: opts.description,
    inLanguage: opts.lang,
    isPartOf: { '@id': ids.website },
    about: { '@id': ids.org },
    publisher: { '@id': ids.org },
  };
  if (opts.pageType === 'ProfilePage') page.mainEntity = { '@id': ids.person };

  const graph: Record<string, unknown>[] = [website(), organisation(), person(), page];

  if (opts.crumbs.length > 1) {
    const breadcrumbId = `${opts.url}#breadcrumb`;
    page.breadcrumb = { '@id': breadcrumbId };
    graph.push({
      '@type': 'BreadcrumbList',
      '@id': breadcrumbId,
      itemListElement: opts.crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.url,
      })),
    });
  }
  return [...graph, ...opts.extra];
}
