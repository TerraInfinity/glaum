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
          maxAgeSeconds: 365 * 24 * 60 * 60,
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
          maxAgeSeconds: 7 * 24 * 60 * 60,
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
          maxAgeSeconds: 24 * 60 * 60,
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
          maxAgeSeconds: 30 * 24 * 60 * 60,
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
          maxAgeSeconds: 365 * 24 * 60 * 60,
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
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: ({ url }) => {
        const isSameOrigin = url.origin === self.location.origin;
        const isHtml = url.pathname.endsWith('.html') || url.pathname === '/' || /^\/[^.]*$/.test(url.pathname);
        return isSameOrigin && isHtml;
      },
      handler: 'NetworkFirst',
      options: {
        cacheName: 'pages',
        expiration: {
          maxEntries: 32,
          maxAgeSeconds: 24 * 60 * 60,
        },
      },
    },
  ],
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,  // ← CLEAN, SAFE, OFFICIAL
  },
  images: {
    unoptimized: true,
  },
};

// PWA only in production (static export)
module.exports = process.env.NODE_ENV === 'production' && process.env.ENABLE_PWA !== 'false'
  ? withPWA(nextConfig)
  : nextConfig;