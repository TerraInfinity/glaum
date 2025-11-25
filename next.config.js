// =============================================
// Next.js Configuration
// =============================================
// 
// Configuration file for Next.js build and runtime settings.
// Defines redirects, build options, and other framework configurations.

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * URL Redirects Configuration
   * 
   * Defines permanent redirects for URL aliases and legacy paths.
   * These redirects are handled at the server level for optimal performance.
   * 
   * Current redirects:
   * - /home -> / (homepage)
   *   Permanent redirect (301) for SEO and user convenience.
   *   Allows users to access homepage via /home URL.
   */
  async redirects() {
    return [
      {
        source: '/home',        // Source path to redirect from
        destination: '/',        // Destination path to redirect to
        permanent: true,         // 301 permanent redirect (better for SEO)
      },
    ]
  },
}

module.exports = nextConfig

