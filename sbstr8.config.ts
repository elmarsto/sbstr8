import { Config, SwitchboardOverride } from '@/sbstr8/lib/types/config';
export const env = process.env.NODE_ENV;
export const isProd = env === 'production';
export const defaultAuthor = {
  email: 'you@example.com',
  link: 'https://example.com/',
  name: 'Firstname Lastname',
};
export const config: Config = {
  categories: ['Blog'],
  copyright: 'All rights reserved.',
  description: 'Another sbstr8 blog',
  keywords: ['blog', 'sbstr8'],
  language: 'en',
  link: isProd ? 'https://example.com/' : 'http://127.0.0.1:3000',
  owners: [defaultAuthor],
  title: 'sbstr8 blog',
  postPath: '/posts',
  feedPath: '/feed',
  icon: '/image/sbstr8.svg',
  image: '/image/sbstr8.svg',
};
export default config;

export const override: SwitchboardOverride = {};
