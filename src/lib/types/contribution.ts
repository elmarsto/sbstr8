import { Person } from './person';

export interface Contribution {
  contributors: Person[];
  description: string;
}
