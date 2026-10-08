import { getCollection, type CollectionEntry } from 'astro:content';

export type Essay = CollectionEntry<'articles'>;
export type FieldNote = CollectionEntry<'notes'>;

/** Drafts are visible in `astro dev`, never in a production build. */
const visible = (draft: boolean) => import.meta.env.DEV || !draft;

export async function getEssays(): Promise<Essay[]> {
  const all = await getCollection('articles', ({ data }) => visible(data.draft));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getFieldNotes(): Promise<FieldNote[]> {
  // Files starting with an underscore (the template) are never listed.
  const all = await getCollection('notes', ({ id, data }) => !id.startsWith('_') && visible(data.draft));
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const essayHref = (id: string) => `/writing/${id}/`;
export const noteHref = (id: string) => `/notes/${id}/`;
