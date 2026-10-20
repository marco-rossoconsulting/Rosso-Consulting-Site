import { defineCollection, z, reference } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Essays: long-form pieces, English only, served at /writing/<slug>/.
 * The words are kept as published; only the presentation changed in 2026.
 */
const articles = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    deck: z.string(),
    category: z.string(),
    date: z.coerce.date(),
    readTime: z.number().int().min(1).max(60),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    seo: z
      .object({
        title: z.string().optional(),
        description: z.string().optional(),
        /** Social image (og:image / twitter:image), a path under public/, e.g. /uploads/essay.jpg. Falls back to /og-default.png. */
        image: z.string().optional(),
        /** Alt text for the social image; needed when `image` is set. */
        imageAlt: z.string().optional(),
      })
      .optional(),
    /** Other essays to show under "Related notes" (slugs). Falls back to the most recent other essays. */
    related: z.array(reference('articles')).optional(),
    /** The service page this essay leads to: `ai` (/ai-in-practice/) or `advisory` (/advisory/). */
    service: z.enum(['ai', 'advisory']).optional(),
  }),
});

/**
 * Field Notes: short notes from the Lab, served at /notes/<slug>/.
 * One thing tried and what it taught. Add a Markdown file to publish one;
 * see README.md for the template.
 */
const notes = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    number: z.number().int().min(1),
    date: z.coerce.date(),
    status: z.enum(['testing', 'live', 'venture', 'closed']).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles, notes };
