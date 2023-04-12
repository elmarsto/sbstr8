import { Person } from '@/utils/post';

const env = process.env.NODE_ENV;
const isProd = env === 'production';

export interface MartrixConfig {
  title: string;
  description: string;
  link: string;
  category: string;
  language: string;
  copyright: string;
  keywords: string[];
  authors: Person[];
  image?: string;
  favicon?: string;
}

export const defaultAuthor: Person = {
  name: 'You',
  email: 'you@somewhere',
  link: 'https://you.somewhere/',
  twitter: '@you',
};

const config: MartrixConfig = {
  title: 'The Martrix',
  description: 'A maximalist storytelling engine',
  link: isProd ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000',
  category: 'Storytelling/Journalism',
  keywords: ['storytelling', 'journalism', 'data', 'visualization'],
  language: 'en',
  copyright: '2023 All rights reserved.',
  authors: [defaultAuthor],
};

export default config;
