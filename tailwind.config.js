/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Montserrat', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#0A0A0A',
          900: '#121212',
          800: '#1E1E1E',
        },
        gold: {
          DEFAULT: '#0C86EA',
          light: '#3DA0F0',
          dark: '#0967B2',
        },
        accent: {
          DEFAULT: '#0C86EA',
          hover: '#0967B2',
        },
      },
    },
  },
  plugins: [],
};
