/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Fulgate', 'Arial', 'sans-serif'],
      },
      colors: {
        amber: {
          700: '#b45309',
          800: '#92400e',
        },
        teal: {
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        green: {
          800: '#166534',
        },
      },
    },
  },
  plugins: [],
};
