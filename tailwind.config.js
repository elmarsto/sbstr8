/** @type {import('tailwindcss').Config} */
const { Tokens } = require('./.mirrorful/theme_cjs');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: { colors: Tokens.colors },
  },
  plugins: [],
};
