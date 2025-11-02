const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'google-fonts',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
    {
      urlPattern: /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-font-assets',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
      },
    },
    {
      urlPattern: /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'static-image-assets',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
    {
      urlPattern: /\/img\/optimized\/cover(-mobile)?\.(jpg|webp)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'hero-image',
        expiration: {
          maxEntries: 4,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days - cache hero image aggressively for offline support
        },
      },
    },
    {
      urlPattern: /\/_next\/static\/.*/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'next-static',
        expiration: {
          maxEntries: 64,
          maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
        },
      },
    },
    {
      urlPattern: /^https:\/\/use\.typekit\.net\/.*/i,
      handler: 'StaleWhileRevalidate',
      options: {
        cacheName: 'typekit-fonts',
        expiration: {
          maxEntries: 2,
          maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
        },
      },
    },
    {
      urlPattern: ({ url }) => {
        const isSameOrigin = url.origin === self.location.origin
        const isHtml = url.pathname.endsWith('.html') || url.pathname === '/' || url.pathname.match(/^\/[^.]*$/)
        return isSameOrigin && isHtml
      },
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pages',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60, // 24 hours
        },
      },
    },
  ],
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

// For static export, we need to conditionally apply PWA
// Since next-pwa may not fully support static export, we'll apply it conditionally
module.exports = process.env.NODE_ENV === 'production' && process.env.ENABLE_PWA !== 'false'
  ? withPWA(nextConfig)
  : nextConfig

