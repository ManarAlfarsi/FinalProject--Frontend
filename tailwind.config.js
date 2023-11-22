/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
 theme: {
    extend: {
      colors: {
        // Warm Yellow
        'candle-yellow': '#ffdc66',

        // Soft Orange
        'candle-orange': '#ffa54f',

        // Deep Orange/Red
        'candle-red-orange': '#ff5722',

        // Warm Red
        'candle-warm-red': '#d63031',
      },
    },
  },  plugins: [],
}
