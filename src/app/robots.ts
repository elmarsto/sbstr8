import { MetadataRoute } from 'next';
import urlJoin from 'url-join';
import cfg from '@/../sbstr8.config';
import def from '@/sbstr8/lib/default';

export const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: '*',
    allow: '/',
    disallow: def.path.private,
  },
  sitemap: urlJoin(cfg.link, def.path.sitemap),
});
export default robots;
