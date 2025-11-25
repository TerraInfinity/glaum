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
  /**
   * Content Paths
   * 
   * Array of glob patterns specifying where Tailwind should look for class names.
   * Tailwind scans these files and only includes CSS for classes that are actually used.
   * This keeps the final CSS bundle small by removing unused styles.
   * 
   * Patterns:
   * - ./src/pages/**/*.{js,ts,jsx,tsx,mdx} - Next.js pages directory
   * - ./src/components/**/*.{js,ts,jsx,tsx,mdx} - React components
   * - ./src/app/**/*.{js,ts,jsx,tsx,mdx} - Next.js App Router pages
   */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  /**
   * Theme Configuration
   * 
   * Extends Tailwind's default theme with custom values.
   * Currently empty, but can be used to customize:
   * - Colors (beyond default palette)
   * - Font families
   * - Spacing scale
   * - Breakpoints
   * - Border radius
   * - etc.
   * 
   * Note: Custom utilities are defined in globals.css using @utility directive
   * (Tailwind v4 feature) rather than here.
   */
  theme: {
    extend: {},
  },
  
  /**
   * Plugins
   * 
   * Array of Tailwind plugins to extend functionality.
   * Currently empty, but plugins can add:
   * - New utility classes
   * - Component classes
   * - Custom variants
   * - etc.
   */
  plugins: [],
}

