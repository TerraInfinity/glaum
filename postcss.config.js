// =============================================
// PostCSS Configuration
// =============================================
// 
// Configuration for PostCSS, which processes CSS before it's sent to the browser.
// PostCSS applies transformations like Tailwind compilation and vendor prefixing.
//
// This file tells PostCSS which plugins to use and in what order.

module.exports = {
  /**
   * PostCSS Plugins
   * 
   * Plugins are applied in order (top to bottom).
   * 
   * Plugin order:
   * 1. @tailwindcss/postcss - Tailwind CSS v4 plugin
   *    Compiles Tailwind utility classes and custom utilities into CSS.
   *    Must run first to process @tailwindcss directives and @utility definitions.
   * 
   * 2. autoprefixer - Vendor prefixing
   *    Automatically adds vendor prefixes (-webkit-, -moz-, etc.) for browser compatibility.
   *    Runs after Tailwind to prefix the generated CSS.
   *    Optional but recommended for better cross-browser support.
   */
  plugins: {
    '@tailwindcss/postcss': {},  // Tailwind CSS v4 plugin - processes @tailwindcss and @utility
    autoprefixer: {},            // Adds vendor prefixes for browser compatibility
  },
};