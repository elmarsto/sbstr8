import { Contribution } from './contribution';
import { Person } from './person';

export interface Post {
  authors?: Person[];
  categories?: string[];
  contributions?: Contribution[];
  updated?: string;
  created: string;
  description: string;
  image?: string;
  paragraphs?: string[]; // TODO: extract text from mdx or tsx or jsx or whatever
  slug: string;
  tags?: string[];
  title: string;
  link: string;
}

export interface HookProps {
  link?: string;
}
