// =============================================
// Tailwind CSS Configuration
// =============================================
// 
// Configuration for Tailwind CSS v4.
// Defines content paths for class purging and theme customization.
//
// Content paths tell Tailwind where to look for class names to include
// in the final CSS bundle. Only classes found in these files will be included.

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Content paths: Tailwind scans these files for class names to include in the CSS bundle
  // This keeps the final CSS bundle small by removing unused styles
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // Theme configuration: Extends Tailwind's default theme with custom values
  // Custom utilities are defined in globals.css using @utility directive (Tailwind v4)
  theme: {
    extend: {},
  },
  
  // Plugins: Array of Tailwind plugins to extend functionality
  plugins: [],
}

