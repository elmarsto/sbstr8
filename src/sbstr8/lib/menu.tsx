import * as React from 'react';
import { faList, faRss } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface MenuItem {
  icon: IconDefinition;
  title: string;
  blurb?: React.ReactNode;
  href?: string;
  iconic?: boolean;
}

export const menuLinks = [
  {
    href: '/post',
    icon: faList,
    title: 'Posts',
  },
  {
    href: '/feed',
    icon: faRss,
    title: 'RSS Feed',
    iconic: true,
  },
];

export default menuLinks;
