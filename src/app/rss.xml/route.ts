import urlJoin from 'url-join';
import { getSortedPost, getLastModified, defaultPostPath } from '@/lib/post';
import { Feed } from 'feed';
import { pick, map, pluck } from 'ramda';
import cfg, { defaultAuthor } from '@/../substrate-config';

const feedPerson = pick(['email', 'link', 'name']);
const feedPeople = map(feedPerson);
const pluckContributors = pluck('contributors');

export function GET() {
  const posts = getSortedPost();
  const updated = getLastModified(posts);
  const feed = new Feed({
    copyright: cfg.copyright,
    description: cfg.description,
    favicon: cfg.icon,
    id: cfg.link,
    image: cfg.image,
    language: cfg.language,
    link: cfg.link,
    title: cfg.title,
    updated,
  });
  (posts || []).forEach((post) => {
    feed.addItem({
      author: feedPeople(post.authors || [defaultAuthor]),
      contributor: feedPeople(pluckContributors(post.contributions || [])),
      date: new Date(post.updated || post.created || ''),
      description: post.description,
      image: post.image,
      link: urlJoin(cfg.link, cfg.postPath || defaultPostPath, post.slug),
      title: post.title,
    });
  });
  return new Response(feed.rss2(), {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' },
  });
}
