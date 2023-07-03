import { faList, faRss, faHome } from '@fortawesome/free-solid-svg-icons';
// Defaults

export const defaults = {
  menu: [
    { href: '/', title: 'Home', icon: faHome },
    { href: '/feed', title: 'Feed', icon: faRss },
    { href: '/posts', title: 'Posts', icon: faList },
  ],
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
