/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jsYellow: '#F7DF1E',
        jsBlack: '#000000',
        jsGray: '#323330',
      },
      fontFamily: {
        iranYekan: ['IranYekan', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
