import { defaultPostPath, getSortedPost } from '@/utils/post';
import { Post } from '@/types';
import cfg from '@/../substrate-config';
import urlJoin from 'url-join';

export default function sitemap() {
  const items: Post[] = getSortedPost();
  const sitemap = (items || []).map(({ slug, updated, created }) => ({
    url: urlJoin(cfg.link, cfg.postPath || defaultPostPath, slug),
    lastModified: updated || created || new Date().toISOString(),
  }));
  sitemap.push({ url: cfg.link, lastModified: cfg.updated });
  return sitemap;
}
