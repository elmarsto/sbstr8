import urlJoin from 'url-join';
import { getSortedPost, defaultPostPath } from '@/utils/post';
import { Feed } from 'feed';
import { pick, map } from 'ramda';
import cfg, { defaultAuthor } from '@/../substrate-config';

const feedPerson = pick(['email', 'link', 'name']);
const feedPeople = map(feedPerson);

export function GET() {
  const items = getSortedPost();
  const feed = new Feed({
    copyright: cfg.copyright,
    description: cfg.description,
    favicon: cfg.icon,
    id: cfg.link,
    image: cfg.image,
    language: cfg.language,
    link: cfg.link,
    title: cfg.title,
  });
  (items || []).forEach((item) => {
    feed.addItem({
      author: feedPeople(item.authors || cfg.authors || [defaultAuthor]),
      contributor: feedPeople(item.contributors || cfg.contributors || []),
      date: new Date(item.updated || item.created || ''),
      description: item.description,
      image: item.image,
      link: urlJoin(cfg.link, cfg.postPath || defaultPostPath, item.slug),
      title: item.title,
    });
  });
  return new Response(feed.rss2(), {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' },
  });
}
