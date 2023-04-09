const env = process.env.NODE_ENV;
const isProd = env === 'production';

interface MartrixConfig {
  title: string;
  description: string;
  url: string;
  category: string;
  language: string;
  image?: string;
  copyright: string;
}

const config: MartrixConfig = {
  title: 'The Martrix',
  description: 'A maximalist storytelling engine',
  url: isProd ? 'https://localhost:3000' : 'https://localhost:3000',
  category: 'Storytelling/Journalism',
  language: 'en',
  copyright: '2023 All rights reserved.',
};

export default config;
