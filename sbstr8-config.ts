import { Config } from '@/types/config';
export const env = process.env.NODE_ENV;
export const isProd = env === 'production';
export const defaultAuthor = {
  email: 'you@somewhere',
  link: 'https://you.somewhere/',
  name: 'You',
  twitter: '@you',
};
export const config: Config = {
  categories: ['Storytelling', 'Journalism'],
  copyright: '2023 All rights reserved.',
  description: 'A maximalist storytelling engine',
  keywords: ['storytelling', 'journalism', 'data', 'visualization'],
  language: 'en',
  link: isProd ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000',
  owners: [defaultAuthor],
  title: 'Sbstr8',
};
export default config;
