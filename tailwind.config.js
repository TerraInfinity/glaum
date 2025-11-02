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
        purple1: 'var(--color-purple1)',
        purple2: 'var(--color-purple2)',
        purple3: 'var(--color-purple3)',
        purple4: 'var(--color-purple4)',
      },
    },
  },
  plugins: [],
};
