/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'TokyoDreams': ['tokyo_dreamsregular', 'sans-serif'],
      },
      colors: {
        'purple1': 'var(--color-purple1)',
        'purple2': 'var(--color-purple2)',
        'purple3': 'var(--color-purple3)',
        'purple4': 'var(--color-purple4)',
      },
    },
  },
  plugins: [],
}
