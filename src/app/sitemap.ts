import { getSortedPost } from '@/utils/post';
import cfg from '@/../martrix-config';

export default async function sitemap() {
  const items = await getSortedPost();
  const sitemap = (items || []).map(({ slug, date }) => ({
    url: `${cfg.link}/post/${slug}/`,
    lastModified: date,
  }));
  sitemap.push({ url: `${cfg.link}/`, lastModified: new Date().toISOString() });
  return sitemap;
}
