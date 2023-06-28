import * as React from 'react';
import { faList, faRss, faHome } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import cfg from '@/../sbstr8.config';

export interface MenuItem {
  icon: IconDefinition;
  title: string;
  blurb?: React.ReactNode;
  href?: string;
  iconic?: boolean;
}

export const menuLinks = [
  {
    href: cfg.link,
    icon: faHome,
    title: 'Home',
  },
  {
    href: cfg.postPath,
    icon: faList,
    title: 'Posts',
  },
  {
    href: cfg.feedPath,
    icon: faRss,
    title: 'RSS Feed',
    iconic: true,
  },
];

export default menuLinks;
