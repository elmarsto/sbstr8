import { Person } from './person';

export interface Config {
  owners: Person[];
  categories: string[];
  copyright: string;
  description: string;
  icon?: string;
  image?: string;
  language: string;
  link: string;
  postPath?: string; // URL segment, e.g. /post
  keywords: string[];
  title: string;
  updated: string;
}
