import { Contribution } from './contribution';
import { Person } from './person';

export interface RawPostMetadata {
  created?: string;
  updated?: string;
  title?: string;
  image?: string;
  thumbnail?: string;
  description?: string;
  authors?: Person[];
  categories?: string[];
  contributions?: Contribution[];
  tags?: string[];
}

export interface CookedPostMetadata extends RawPostMetadata {
  created: string; // cooked metadata guarantees presence of a 'created' field
  date: string; // whichever is most recent, created or updated, in yy-mm-dd format
  description: string; // cooked metadata guarantees presence of a 'description' field
  title: string; // cooked metadata guarantees presence of a 'title' field
  slug: string;
  link: string;
}

export interface HookProps {
  link?: string;
}

export interface Post extends React.FunctionComponent {
  meta: RawPostMetadata;
  //  Body: React.FunctionComponent;
  Hook: React.FunctionComponent<HookProps>;
  Teaser: React.FunctionComponent;
  // Footnotes: React.FunctionComponent;
}
