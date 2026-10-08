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
        image: z.string().optional(),
      })
      .optional(),
    related: z.array(reference('articles')).optional(),
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
