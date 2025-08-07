/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fulgate', 'Arial', 'sans-serif'],
      },
      colors: {
        gold: {
          500: '#f59e0b',
          600: '#d4af37',
          700: '#b8941f',
          800: '#9c7c1a',
        },
        navy: {
          600: '#1e3a8a',
          700: '#1e40af',
          800: '#1e293b',
          900: '#0f172a',
        },
        brown: {
          600: '#92400e',
          700: '#78350f',
          800: '#451a03',
          900: '#292524',
        },
        charcoal: {
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};
