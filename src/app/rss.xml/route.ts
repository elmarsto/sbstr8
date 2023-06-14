import urlJoin from 'url-join';
import {
  getSortedPost,
  getLastModified,
  defaultPostPath,
  Post,
} from '@/lib/post';
import { Feed } from 'feed';
import { pick, map, pluck } from 'ramda';

import cfg, { defaultAuthor } from '@/../sbstr8-config';

const feedPerson = pick(['link', 'name']);
const feedPeople = map(feedPerson);
const pluckContributors = pluck('contributors');
const currentDate = new Date();
export function GET() {
  const posts = getSortedPost();
  const updated = getLastModified(posts);
  const feed = new Feed({
    copyright: cfg.copyright,
    description: cfg.description,
    id: cfg.link,
    image: urlJoin(cfg.link, cfg.image || '/favicon.png'),
    favicon: cfg.icon,
    language: cfg.language,
    link: cfg.link,
    title: cfg.title,
    updated,
  });
  (posts || []).forEach(
    ({
      slug,
      authors,
      updated,
      created,
      image,
      contributions,
      description,
      title,
    }: Post) => {
      feed.addItem({
        author: feedPeople(authors || [defaultAuthor]),
        contributor: feedPeople(pluckContributors(contributions || [])),
        date: updated || created ? new Date(updated || created) : currentDate,
        description,
        image: image ? urlJoin(cfg.link, image) : undefined,
        link: urlJoin(cfg.link, defaultPostPath, slug),
        title,
      });
    },
  );
  return new Response(feed.rss2(), {
    status: 200,
    headers: { 'Content-Type': 'application/rss+xml' },
  });
}
