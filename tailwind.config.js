/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#0A0E1A',
          900: '#0F1424',
          800: '#161C30',
        },
        gold: {
          DEFAULT: '#C8A14E',
          light: '#DDBF6B',
          dark: '#A8853E',
        },
      },
    },
  },
  plugins: [],
};
