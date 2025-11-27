# Glåüm

More than love.

A modern Next.js website for the Glåüm community, featuring spiritual unity, compassion, connection, and playful satire.

## Tech Stack

- **Next.js 16.0.4** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS framework
- **Vercel Analytics** - Error tracking and analytics
- **Vercel Speed Insights** - Performance monitoring

## Getting Started

### Prerequisites

- Node.js 20+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd glaum
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` and set the required variables (see [Environment Variables](#environment-variables) below).

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server (Turbopack)
- `npm run dev:webpack` - Start development server (Webpack)
- `npm run dev:turbo` - Start development server (Turbopack, explicit)
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

Create a `.env.local` file in the root directory (copy from `.env.example`):

### Required

- `NEXT_PUBLIC_SITE_URL` - The base URL of your website
  - **Primary domain (production)**: `https://glaum.ca` (recommended for SEO)
  - **Alternative subdomain**: `https://glaum.terrainfinity.ca` (may be used during production)
  - **Local development**: `http://localhost:3000`
  
  **Note**: Always set this to the primary domain (`glaum.ca`) for canonical URLs and SEO, even if the site is temporarily accessed via `glaum.terrainfinity.ca`. This prevents duplicate content issues in search engines.

### Optional

- `NEXT_PUBLIC_ERROR_TRACKING_ENDPOINT` - Custom error tracking service URL (if needed)

See `.env.example` for all available variables and documentation.

## Project Structure

```
glaum/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx    # Root layout with metadata
│   │   ├── page.tsx      # Homepage
│   │   ├── codex/        # Codex page
│   │   ├── structure/    # Structure page
│   │   ├── participate/  # Participate page
│   │   └── api/          # API routes (prepared for future use)
│   │       └── README.md # API documentation
│   ├── components/       # React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── StructuredData.tsx
│   │   ├── TenetFrame.tsx
│   │   ├── PolicyFrame.tsx
│   │   └── WebVitals.tsx
│   └── lib/              # Utility functions
│       ├── error-tracking.ts
│       ├── web-vitals.ts
│       ├── service-worker.ts
│       └── site-config.ts
├── public/               # Static assets
│   ├── img/             # Images
│   ├── images/          # Optimized images
│   ├── manifest.json    # PWA manifest
│   └── sw.js            # Service worker
├── .env.example         # Environment variables template
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## Features

- ✅ **SEO Optimized** - Complete metadata, OpenGraph, Twitter Cards, sitemap, robots.txt
- ✅ **Error Tracking** - Vercel Analytics with custom error tracking utility
- ✅ **Performance Monitoring** - Vercel Speed Insights for Core Web Vitals
- ✅ **Web Vitals Tracking** - Enhanced performance monitoring with web-vitals library
- ✅ **PWA Support** - Progressive Web App with offline functionality and installability
- ✅ **Security Headers** - Comprehensive security headers (CSP, HSTS, etc.)
- ✅ **Structured Data** - JSON-LD schema for better search engine understanding
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Type Safety** - Full TypeScript support
- ✅ **Modern Stack** - Next.js 16, React 19, latest dependencies
- ✅ **API Ready** - API routes structure prepared for future backend functionality

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

The site will be automatically deployed and optimized by Vercel.

## Development Notes

- The `old/` directory contains legacy code and is excluded from builds
- All pages use the App Router (Next.js 13+)
- Client components are marked with `'use client'`
- Server components are used by default for better performance

## License

Private project - All rights reserved

