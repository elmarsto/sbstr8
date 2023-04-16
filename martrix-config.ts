import { Config, Person } from '@/types';

const env = process.env.NODE_ENV;
const isProd = env === 'production';

export const defaultAuthor: Person = {
  name: 'You',
  email: 'you@somewhere',
  link: 'https://you.somewhere/',
  twitter: '@you',
};

const config: Config = {
  title: 'The Martrix',
  updated: new Date().toISOString(),
  description: 'A maximalist storytelling engine',
  link: isProd ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000',
  categories: ['Storytelling', 'Journalism'],
  keywords: ['storytelling', 'journalism', 'data', 'visualization'],
  language: 'en',
  copyright: '2023 All rights reserved.',
  owners: [defaultAuthor],
};

export default config;
