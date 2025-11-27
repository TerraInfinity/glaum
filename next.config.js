// =============================================
// Next.js Configuration
// =============================================
// 
// Configuration file for Next.js build and runtime settings.
// Defines redirects, build options, security headers, and other framework configurations.

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

  /**
   * Security Headers Configuration
   * 
   * Implements comprehensive security headers to protect against common web vulnerabilities:
   * - Content-Security-Policy (CSP): Prevents XSS attacks and unauthorized resource loading
   * - X-Frame-Options: Prevents clickjacking attacks
   * - X-Content-Type-Options: Prevents MIME type sniffing
   * - Referrer-Policy: Controls referrer information sharing
   * - Permissions-Policy: Controls browser features and APIs
   * - Strict-Transport-Security (HSTS): Enforces HTTPS connections
   * - X-XSS-Protection: Legacy XSS protection (for older browsers)
   * 
   * These headers are automatically added to all HTTP responses by Next.js.
   */
  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/:path*',
        headers: [
          /**
           * Content-Security-Policy (CSP)
           * 
           * Controls which resources the browser is allowed to load.
           * This helps prevent XSS attacks, data injection, and other security vulnerabilities.
           * 
           * Allowed sources:
           * - 'self': Same origin (glaum.ca)
           * - https://use.typekit.net: Adobe Typekit fonts
           * - https://www.googletagmanager.com: Google Analytics
           * - https://www.google-analytics.com: Google Analytics data collection
           * - https://w.soundcloud.com: SoundCloud player iframe
           * - https://api.soundcloud.com: SoundCloud API
           * - https://*.vercel.com: Vercel Analytics and Speed Insights
           * - https://vitals.vercel-insights.com: Vercel Speed Insights
           * - 'unsafe-inline' for styles: Required for Next.js and some third-party scripts
           * - 'unsafe-eval': Required for some Next.js features (minimal use)
           * - data: and blob: for images and media
           */
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://use.typekit.net https://www.googletagmanager.com https://*.vercel.com https://vitals.vercel-insights.com",
              "style-src 'self' 'unsafe-inline' https://use.typekit.net https://fonts.googleapis.com",
              "font-src 'self' data: https://use.typekit.net https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https://www.google-analytics.com https://*.vercel.com https://vitals.vercel-insights.com https://api.soundcloud.com",
              "frame-src 'self' https://w.soundcloud.com",
              "media-src 'self' https://w.soundcloud.com",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "frame-ancestors 'self'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
          /**
           * X-Frame-Options
           * 
           * Prevents the page from being embedded in frames (clickjacking protection).
           * Set to 'SAMEORIGIN' to allow embedding on same origin if needed,
           * or 'DENY' for maximum security (current setting).
           */
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          /**
           * X-Content-Type-Options
           * 
           * Prevents browsers from MIME-sniffing the response type.
           * Forces browsers to respect the Content-Type header.
           */
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          /**
           * Referrer-Policy
           * 
           * Controls how much referrer information is sent with requests.
           * 'strict-origin-when-cross-origin' sends full URL for same-origin,
           * origin only for cross-origin HTTPS, and nothing for HTTP.
           */
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          /**
           * Permissions-Policy (formerly Feature-Policy)
           * 
           * Controls which browser features and APIs can be used.
           * Restricts potentially dangerous features while allowing necessary ones.
           */
          {
            key: 'Permissions-Policy',
            value: [
              'camera=()',
              'microphone=()',
              'geolocation=()',
              'interest-cohort=()', // Disable FLoC
              'payment=()',
              'usb=()',
              'magnetometer=()',
              'gyroscope=()',
              'accelerometer=()',
            ].join(', '),
          },
          /**
           * Strict-Transport-Security (HSTS)
           * 
           * Forces browsers to use HTTPS for all future requests.
           * max-age: 31536000 = 1 year
           * includeSubDomains: Applies to all subdomains
           * preload: Allows inclusion in HSTS preload lists
           */
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          /**
           * X-XSS-Protection
           * 
           * Legacy header for older browsers that support XSS filtering.
           * Modern browsers use CSP instead, but this provides fallback protection.
           */
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig

