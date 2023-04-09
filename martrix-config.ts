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
  url: 'https://localhost:3000',
  category: 'Storytelling/Journalism',
  language: 'en',
  copyright: '2023 All rights reserved.',
};

export default config;
