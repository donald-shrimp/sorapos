/** @type {import('tailwindcss').Config} */

const customColors = {
  sora: {
    50: '#080B6A',
    100: '#0C2883',
    200: '#114F9B',
    300: '#167EB2',
    400: '#1CB3C8',
    500: '#38D2C8',
    600: '#54DBB9',
    700: '#72E3B2',
    800: '#90EBB2',
    900: '#AFF1BB',
    DEFAULT: '#CEF7CE'
  }
}

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sora: customColors.sora,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
