import {
  defaultPostPath,
  getSortedPost,
  getLastModified,
} from '@/sbstr8/lib/post';
import cfg from '@/../sbstr8.config';
import urlJoin from 'url-join';
import { menu, MenuItem } from '@/sbstr8/lib/menu';

export default function sitemap() {
  const posts = getSortedPost();
  const lastModified = getLastModified(posts).toISOString();
  const sitemap = (posts || []).map(({ slug, updated, created }) => ({
    url: urlJoin(cfg.link, cfg.postPath || defaultPostPath, slug),
    lastModified: updated || created || new Date().toISOString(),
  }));
  sitemap.push({ url: cfg.link, lastModified });
  menu.map((ml: MenuItem) => {
    if (/^(http|mailto).*$/.test(ml.href || '')) {
      return;
    }
    sitemap.push({ url: urlJoin(cfg.link, ml.href || ''), lastModified });
  });
  return sitemap;
}
