import { defaultPostPath, getSortedPost } from '@/utils/post';
import cfg from '@/../substrate-config';
import urlJoin from 'url-join';

export default function sitemap() {
  const { lastModified, posts } = getSortedPost();
  const sitemap = (posts || []).map(({ slug, updated, created }) => ({
    url: urlJoin(cfg.link, cfg.postPath || defaultPostPath, slug),
    lastModified: updated || created || new Date().toISOString(),
  }));
  sitemap.push({ url: cfg.link, lastModified: lastModified.toISOString() });
  return sitemap;
}
