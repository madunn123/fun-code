/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-colors': '#FFF3DA',
        'secondary-colors': '#DFCCFB',
        'thirdy-colors': '#D0BFFF',
        'fourty-colors': '#BEADFA',
      },
    },
  },
  plugins: [],
};
