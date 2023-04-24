import { Config } from '@/types/config';
export const env = process.env.NODE_ENV;
export const isProd = env === 'production';
export const defaultAuthor = {
  name: 'You',
  email: 'you@somewhere',
  link: 'https://you.somewhere/',
  twitter: '@you',
};
export const config: Config = {
  title: 'sbstr8',
  description: 'A maximalist storytelling engine',
  link: isProd ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000',
  categories: ['Storytelling', 'Journalism'],
  keywords: ['storytelling', 'journalism', 'data', 'visualization'],
  language: 'en',
  copyright: '2023 All rights reserved.',
  owners: [exports.defaultAuthor],
};
export default config;
