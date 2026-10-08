import rss from '@astrojs/rss';
import { getEssays, getFieldNotes, essayHref, noteHref } from '../lib/notes';
import { smartQuotes } from '../lib/typography';

export async function GET(context) {
  const notes = await getFieldNotes();
  const essays = await getEssays();
  const items = [
    ...notes.map((n) => ({
      title: smartQuotes(n.data.title),
      description: smartQuotes(n.data.summary),
      pubDate: n.data.date,
      link: noteHref(n.id),
      categories: ['Field Notes'],
    })),
    ...essays.map((e) => ({
      title: smartQuotes(e.data.title),
      description: smartQuotes(e.data.deck),
      pubDate: e.data.date,
      link: essayHref(e.id),
      categories: [e.data.category],
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Rosso Consulting · Notes',
    description:
      'Field Notes from the Lab and essays by Marco Rosso: what I tried, what worked and what did not, in hospitality technology.',
    site: context.site,
    items,
    customData: '<language>en-gb</language>',
    trailingSlash: true,
  });
}
