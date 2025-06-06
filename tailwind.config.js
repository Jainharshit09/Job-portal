/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mine-shaft': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#2d2d2d',
        },
        'bright-sun': {
          '50': '#fffbeb',
          '100': '#fff3c6',
          '200': '#ffe588',
          '300': '#ffd149',
          '400': '#ffbd20',
          '500': '#f99b07',
          '600': '#dd7302',
          '700': '#b75006',
          '800': '#943c0c',
          '900': '#7a330d',
          '950': '#461902',
        },
      },
      screens: {
        // Min-width breakpoints
        'xsm': '350px',
        'xs': '450px',
        'sx':'500px',
        'sm': '640px',
        'md': '768px',
        'bs': '900px',
        'lg': '1024px',
        'llg':'1101px',
        'xl': '1280px',
        '2xl': '1536px',

        // Max-width breakpoints
        '2xl-mx': { 'max': '1535px' },
        'xl-mx': { 'max': '1279px' },
        'lg-mx': { 'max': '1023px' },
        'llg-mx':{ 'max': '1100px' },
        'bs-mx': { 'max': '899px' },
        'md-mx': { 'max': '767px' },
        'sm-mx': { 'max': '639px' },
        'sx-mx': { 'max': '499px' },
        'xs-mx': { 'max': '449px' },
        'xsm-mx': { 'max': '349px' },
      },
      keyframes: {
        'option-animation': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'option-animation': 'option-animation 200ms ease forwards',
      },
    },
  },
  plugins: [],
};
