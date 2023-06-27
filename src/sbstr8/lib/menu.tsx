import * as React from 'react';
import { faPaperPlane, faList, faRss } from '@fortawesome/free-solid-svg-icons';
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
    href: '/contact',
    icon: faPaperPlane,
    title: 'Contact',
  },
  {
    href: '/atom.xml',
    icon: faRss,
    title: 'RSS',
    iconic: true,
  },
];
