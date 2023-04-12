import { getSortedPost } from '@/utils/post';
import { Feed } from 'feed';
import cfg, { defaultAuthor } from '@/../martrix-config';

export function GET() {
  const items = getSortedPost();
  const feed = new Feed({
    title: cfg.title,
    description: cfg.description,
    id: cfg.link,
    link: cfg.link,
    language: cfg.language,
    image: cfg.image,
    favicon: cfg.favicon,
    copyright: cfg.copyright,
  });
  (items || []).forEach((item) => {
    feed.addItem({
      title: item.title,
      date: new Date(item.date || ''),
      id: `${cfg.link}/post/${item.slug}`,
      link: `${cfg.link}/post/${item.slug}`,
      description: item.description,
      image: item.image,
      author: item.authors || cfg.authors || [defaultAuthor],
      contributor: item.contributors,
    });
  });
  return new Response(feed.rss2(), {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' },
  });
}
