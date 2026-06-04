import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const articles = (await getCollection('articles', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: 'Rosso Consulting · Writing',
    description: 'Essays on hospitality distribution, AI deployment, channel economics, and the operator-buyer interface. Written by Marco Rosso.',
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.date,
      description: article.data.deck,
      link: `/writing/${article.id}`,
      categories: [article.data.category],
      author: 'marco@rossoconsulting.ch (Marco Rosso)',
    })),
    customData: `<language>en-us</language>
      <copyright>© ${new Date().getFullYear()} Rosso Consulting. Lugano, Switzerland.</copyright>
      <managingEditor>marco@rossoconsulting.ch (Marco Rosso)</managingEditor>
      <webMaster>marco@rossoconsulting.ch (Marco Rosso)</webMaster>`,
    stylesheet: false,
  });
}
