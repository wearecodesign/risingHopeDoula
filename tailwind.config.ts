import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      colors: {
        sage: {
          50: '#f4f6f4',
          100: '#e4e9e3',
          200: '#cbd4c9',
          300: '#a8b6a5',
          400: '#7f937c',
          500: '#5f7560',
          600: '#4a5d4b',
          700: '#3d4c3e',
          800: '#343f35',
          900: '#2c352d',
        },
        blush: {
          50: '#fdf4f4',
          100: '#fce8e8',
          200: '#f9d5d5',
          300: '#f4b4b4',
          400: '#ec8686',
          500: '#e05c5c',
        },
      },
    },
  },
  plugins: [],
};
export default config;
