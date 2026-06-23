import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

// ============================================================
// CONTENT COLLECTIONS — Sveltia CMS multiple_folders i18n layout
// ============================================================
// All localized content lives under <collection>/<locale>/<name>.json.
// Astro's glob loader picks up the locale from the folder path,
// matching Sveltia's i18n.structure: multiple_folders config.
// ============================================================

const localeSchema = z.enum(['en', 'it', 'es']);

// ============================================================
// SITE SETTINGS — per locale (en/site.json, it/site.json, es/site.json)
// Most fields are `i18n: duplicate` in Sveltia, so values stay in sync
// across locales unless explicitly translated (e.g. tagline, jobTitle).
// ============================================================
const siteSettings = defineCollection({
  loader: glob({ pattern: '*/site.json', base: './src/content/settings' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    url: z.string().url(),
    favicon: z.string(),
    defaultOgImage: z.string(),
    logoMark: z.string(),
    contact: z.object({
      email: z.string().email(),
      linkedin: z.string().url(),
      location: z.string(),
    }),
    social: z.object({
      twitter: z.string().optional(),
    }),
    principal: z.object({
      fullName: z.string(),
      givenName: z.string(),
      familyName: z.string(),
      jobTitle: z.string(),
      alumniOf: z.array(z.string()),
      knowsLanguage: z.array(z.string()),
    }),
    founding: z.object({
      addressLocality: z.string(),
      addressRegion: z.string(),
      addressCountry: z.string(),
    }),
  }),
});

// ============================================================
// NAVIGATION — per locale
// ============================================================
const navItem = z.object({
  label: z.string(),
  href: z.string(),
  page: z.string().optional(),
  external: z.boolean().optional(),
});

const navigation = defineCollection({
  loader: glob({ pattern: '*/navigation.json', base: './src/content/settings' }),
  schema: z.object({
    brand: z.string(),
    header: z.object({
      items: z.array(navItem),
      cta: navItem,
    }),
    footer: z.object({
      tagline: z.string(),
      columns: z.array(z.object({
        heading: z.string(),
        links: z.array(navItem),
      })),
      copyright: z.string(),
      bottom: z.string(),
    }),
  }),
});

// ============================================================
// UI STRINGS — per locale
// ============================================================
const ui = defineCollection({
  loader: glob({ pattern: '*/ui.json', base: './src/content/settings' }),
  schema: z.object({
    article: z.object({
      minRead: z.string(),
      relatedWriting: z.string(),
      readArticle: z.string(),
    }),
    common: z.object({
      languageLabel: z.string(),
      currentRoleLabel: z.string(),
    }),
    seo: z.object({
      siteName: z.string(),
      defaultDescription: z.string(),
    }),
  }),
});

// ============================================================
// PAGE CONTENT — per page per locale: pages/<locale>/<page>.json
// ============================================================
const seoSchema = z.object({
  title: z.string(),
  description: z.string(),
  ogImage: z.string().optional().default(''),
});
const metaItem = z.object({ label: z.string(), value: z.string() });
const heroSchema = z.object({
  eyebrowNum: z.string(),
  eyebrowLabel: z.string(),
  headline: z.string(),
  sub: z.string(),
  meta: z.array(metaItem).optional(),
  imgSrc: z.string().optional(),
  imgAlt: z.string().optional(),
});
const ctaSchema = z.object({
  label: z.string(),
  headline: z.string(),
  sub: z.string(),
  accent: z.string().default(''),
  buttonLabel: z.string(),
  buttonHref: z.string(),
});

const homePages = defineCollection({
  loader: glob({ pattern: '*/home.json', base: './src/content/pages' }),
  schema: z.object({
    seo: seoSchema,
    hero: heroSchema,
    practice: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      lanes: z.array(z.object({
        num: z.string(), title: z.string(), body: z.string(), formats: z.array(z.string()),
      })),
      ctaLabel: z.string(), ctaHref: z.string(),
    }),
    audiences: z.object({
      num: z.string(), title: z.string(),
      items: z.array(z.object({ heading: z.string(), body: z.string() })),
    }),
    active: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      ctaLabel: z.string(), ctaHref: z.string(),
    }),
    operatingNow: z.object({
      num: z.string(), title: z.string(),
      roleLabel: z.string(), roleTitle: z.string(), company: z.string(),
      whyMattersLabel: z.string(), whyMattersBody: z.string(),
    }),
    cta: ctaSchema,
  }),
});

const practicePages = defineCollection({
  loader: glob({ pattern: '*/practice.json', base: './src/content/pages' }),
  schema: z.object({
    seo: seoSchema, hero: heroSchema,
    methodology: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      principles: z.array(z.object({ n: z.string(), h: z.string(), p: z.string() })),
    }),
    formats: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      items: z.array(z.object({ n: z.string(), h: z.string(), p: z.string() })),
    }),
    pullquote: z.string().optional(),
    techApproach: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      blocks: z.array(z.object({ label: z.string(), h: z.string(), p: z.string() })),
      vendorIndependence: z.object({ label: z.string(), body: z.string() }),
    }),
    lifecycle: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      phases: z.array(z.object({ y: z.string(), h: z.string(), p: z.string() })),
    }),
    cta: ctaSchema,
  }),
});

const principalPages = defineCollection({
  loader: glob({ pattern: '*/principal.json', base: './src/content/pages' }),
  schema: z.object({
    seo: seoSchema, hero: heroSchema,
    careerArc: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      careerBars: z.array(z.object({
        company: z.string(), years: z.string(),
        heightPct: z.number(), current: z.boolean().optional(),
      })),
      note: z.string(),
    }),
    background: z.object({
      num: z.string(), title: z.string(),
      leadParagraph: z.string(), paragraphs: z.array(z.string()), pullquote: z.string().optional(),
    }),
    experience: z.object({
      num: z.string(), title: z.string(),
      entries: z.array(z.object({
        year: z.string(), role: z.string(), detail: z.string(), current: z.boolean().optional(),
      })),
    }),
    education: z.object({
      num: z.string(), title: z.string(),
      entries: z.array(z.object({ years: z.string(), school: z.string(), detail: z.string() })),
    }),
    fluencies: z.object({
      num: z.string(), title: z.string(),
      items: z.array(z.object({ label: z.string(), p: z.string() })),
    }),
    cta: ctaSchema,
  }),
});

const advisoryPages = defineCollection({
  loader: glob({ pattern: '*/advisory.json', base: './src/content/pages' }),
  schema: z.object({
    seo: seoSchema, hero: heroSchema,
    roles: z.object({ num: z.string(), title: z.string(), intro: z.string() }),
    advisoryOverrides: z.record(z.string(), z.object({
      fullDescription: z.string(),
      formats: z.array(z.string()),
    })).optional(),
    expertNetwork: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      cards: z.array(z.object({ label: z.string(), h: z.string(), p: z.string() })),
    }),
    independence: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      items: z.array(z.object({ label: z.string(), h: z.string(), p: z.string() })),
    }),
    cta: ctaSchema,
  }),
});

const venturesPages = defineCollection({
  loader: glob({ pattern: '*/ventures.json', base: './src/content/pages' }),
  schema: z.object({
    seo: seoSchema, hero: heroSchema,
    currentVenture: z.object({
      num: z.string(), title: z.string(),
      label: z.string(), name: z.string(), description: z.string(),
      buttonLabel: z.string(), buttonHref: z.string(),
      whyExistsLabel: z.string(), whyExistsParagraphs: z.array(z.string()),
      stats: z.array(z.object({ label: z.string(), value: z.string() })),
    }),
    spinoutLogic: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      conditions: z.array(z.object({ n: z.string(), h: z.string(), p: z.string() })),
    }),
    parentSpinout: z.object({
      num: z.string(), title: z.string(), intro: z.string(),
      commitments: z.array(z.object({ label: z.string(), h: z.string(), p: z.string() })),
    }),
    futureVentures: z.object({
      num: z.string(), title: z.string(),
      lead: z.string(), paragraph: z.string(), pullquote: z.string().optional(),
    }),
    cta: ctaSchema,
  }),
});

const contactPages = defineCollection({
  loader: glob({ pattern: '*/contact.json', base: './src/content/pages' }),
  schema: z.object({
    seo: seoSchema, hero: heroSchema,
    direct: z.object({
      num: z.string(), title: z.string(),
      cards: z.array(z.object({
        kind: z.enum(['email', 'linkedin']),
        label: z.string(), displayValue: z.string(),
        href: z.string(), description: z.string(),
      })),
    }),
    coordinates: z.object({
      num: z.string(), title: z.string(),
      items: z.array(z.object({ label: z.string(), h: z.string(), p: z.string() })),
    }),
    whatToInclude: z.object({
      num: z.string(), title: z.string(), lead: z.string(),
      items: z.array(z.object({ n: z.string(), h: z.string(), p: z.string() })),
      referencesNote: z.string(),
    }),
  }),
});

const writingPages = defineCollection({
  loader: glob({ pattern: '*/writing.json', base: './src/content/pages' }),
  schema: z.object({
    seo: seoSchema, hero: heroSchema,
    footerNote: z.object({
      main: z.string(),
      subscribeLead: z.string(), rssLabel: z.string(), rssHref: z.string(),
      linkedinLead: z.string(), linkedinLabel: z.string(), linkedinHref: z.string(),
    }),
    cta: ctaSchema,
  }),
});

// ============================================================
// ARTICLES — English-only essays (folder collection, no i18n)
// ============================================================
const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    deck: z.string(),
    category: z.enum([
      'Distribution', 'Direct', 'AI', 'AI · Luxury',
      'Channels', 'Operations', 'Commercial', 'Strategy',
    ]),
    date: z.coerce.date(),
    readTime: z.number().int().min(1).max(60),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
    related: z.array(reference('articles')).optional(),
  }),
});

// ============================================================
// ADVISORY PORTFOLIO — language-neutral data; locale-specific
// description/formats live on pages/<locale>/advisory.json
// ============================================================
const advisory = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/advisory' }),
  schema: z.object({
    name: z.string(),
    role: z.enum([
      'Advisory Board', 'GTM Strategic Advisor', 'Strategic Advisor',
      'Board Observer', 'Founding Advisor',
    ]),
    stage: z.enum([
      'Pre-seed', 'Seed', 'Series A', 'Series B', 'Series C', 'Series D',
      'Growth Stage', 'Public', 'Other',
    ]),
    description: z.string(),
    fullDescription: z.string(),
    formats: z.array(z.string()).optional(),
    logo: z.string().optional(),
    url: z.string().url(),
    order: z.number().int().min(1).max(99),
    active: z.boolean().default(true),
    featured: z.boolean().default(true),
  }),
});

export const collections = {
  siteSettings, navigation, ui,
  homePages, practicePages, principalPages, advisoryPages,
  venturesPages, contactPages, writingPages,
  articles, advisory,
};
