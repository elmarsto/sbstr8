"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultAuthor = void 0;
const env = process.env.NODE_ENV;
const isProd = env === 'production';
exports.defaultAuthor = {
  name: 'You',
  email: 'you@somewhere',
  link: 'https://you.somewhere/',
  twitter: '@you',
};
const config = {
  title: 'sbstr8',
  description: 'A maximalist storytelling engine',
  link: isProd ? 'http://127.0.0.1:3000' : 'http://127.0.0.1:3000',
  categories: ['Storytelling', 'Journalism'],
  keywords: ['storytelling', 'journalism', 'data', 'visualization'],
  language: 'en',
  copyright: '2023 All rights reserved.',
  owners: [exports.defaultAuthor],
};
exports.default = config;
