// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tokyo: ['tokyo_dreamsregular', 'sans-serif'],
      },
      colors: {
        purple1: '#8038f4',
        purple2: '#9f6bff',
        purple3: '#be9cff',
        purple4: '#d4c2ff',
      },
    },
  },
  plugins: [],
};
