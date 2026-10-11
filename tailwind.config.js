/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#D8D0C5',
          900: '#E9E4DC',
          800: '#FFFFFF',
        },
        sand: {
          DEFAULT: '#D8D0C5',
          light: '#E9E4DC',
        },
        ink: '#0A0A0A',
        gold: {
          DEFAULT: '#0A0A0A',
          light: '#3A3A3A',
          dark: '#000000',
        },
        accent: {
          DEFAULT: '#0A0A0A',
          hover: '#2A2A2A',
        },
      },
    },
  },
  plugins: [],
};
