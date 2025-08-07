/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'Arial', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      colors: {
        gold: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d4af37',
          700: '#b8941f',
          800: '#9c7c1a',
        },
      },
      animation: {
        'scroll-news': 'scroll-news 60s linear infinite',
      },
    },
  },
  plugins: [],
};
