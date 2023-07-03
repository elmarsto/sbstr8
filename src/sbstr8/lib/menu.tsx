import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import defaults from '@/sbstr8/lib/default';
import { override } from '@/../sbstr8.config';

export interface MenuItem {
  icon: IconDefinition;
  title: string;
  blurb?: React.ReactNode;
  href?: string;
  iconic?: boolean;
}

export const menu = override
  ? override.get(defaults.menu) || defaults.menu
  : defaults.menu;

export default menu;
