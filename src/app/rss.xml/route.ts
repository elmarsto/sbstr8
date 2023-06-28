import urlJoin from 'url-join';
import cfg from '@/../sbstr8.config';
export const GET = () =>
  Response.redirect(urlJoin(cfg.link, cfg.feedPath || '/feed'), 301);
