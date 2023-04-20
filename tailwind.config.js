/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins'],
      },
      colors: {
        'psclightblack': '#3B3B3B',
        'pscgrey': '#F7F7F7',
        'pscblack': '#232428',
        'pscdarkblue': '#2D3748',
        'pscteal': "#2E4F4F",
        'psclightteal': "#00AD7F"

      },
    },
  },
  plugins: [],
};
