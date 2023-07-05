import { faList, faRss, faHome } from '@fortawesome/free-solid-svg-icons';
// Defaults

const feedPath = '/feed';
const postsPath = '/posts';

export const defaults = {
  menu: [
    { href: '/', title: 'Home', icon: faHome },
    { href: feedPath, title: 'Feed', icon: faRss },
    { href: postsPath, title: 'Posts', icon: faList },
  ],
  path: {
    feed: feedPath,
    posts: postsPath,
    sitemap: '/sitemap.xml',
    private: '/private',
  },
  date: {
    created: 'Jan 01 2023',
  },
  dimension: {
    thumbnail: 256,
    primaryFeatureImageHeight: 512,
    secondaryFeatureImageHeight: 512,
    tertiaryFeatureImageHeight: 512,
    logo: 32,
  },
  image: {
    logo: '/media/sbstr8.svg',
  },
};
export default defaults;
