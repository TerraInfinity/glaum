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
│   │   ├── Header.tsx          # Global navigation header
│   │   ├── Footer.tsx          # Global footer
│   │   ├── StructuredData.tsx  # JSON-LD structured data
│   │   ├── TenetFrame.tsx      # Reusable tenet display component
│   │   ├── PolicyFrame.tsx     # Reusable policy display component
│   │   ├── Section.tsx         # Reusable section container component
│   │   ├── PageContainer.tsx   # Reusable page container component
│   │   └── WebVitals.tsx       # Web Vitals tracking component
│   └── lib/              # Utility functions and constants
│       ├── constants.ts        # Centralized application constants
│       ├── error-tracking.ts   # Error tracking utility
│       ├── web-vitals.ts       # Web Vitals reporting
│       ├── service-worker.ts   # Service worker registration
│       └── site-config.ts      # Site domain configuration
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
- ✅ **Type Safety** - Full TypeScript support with strict type checking
- ✅ **Modern Stack** - Next.js 16, React 19, latest dependencies
- ✅ **API Ready** - API routes structure prepared for future backend functionality
- ✅ **Code Quality** - Centralized constants, reusable components, organized CSS classes
- ✅ **Maintainability** - Consistent patterns, reduced duplication, clear documentation

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on every push

The site will be automatically deployed and optimized by Vercel.

## Development Notes

### Code Organization

- **Constants**: All magic numbers and repeated values are centralized in `src/lib/constants.ts`
  - Layout constants (header height, content widths)
  - Responsive breakpoints (mobile, tablet, desktop)
  - Hero image calculations (width multipliers, aspect ratios)
  - Timing constants (debounce delays, transitions)
  - Typography and spacing constants
- **Reusable Components**: Common UI patterns are extracted into reusable components
  - `Section.tsx` - Consistent section containers with configurable variants
  - `PageContainer.tsx` - Full-width page containers with background images
  - `TenetFrame.tsx` - Ornate frame component for displaying tenets
  - `PolicyFrame.tsx` - Ornate frame component for displaying policies
- **CSS Classes**: Inline styles have been moved to CSS utility classes in `globals.css` for better maintainability
  - `.body-base` - Base body styles
  - `.hero-card-bg` - Hero card background
  - `.mobile-menu-overlay` - Mobile menu overlay
  - `.page-container-bg` - Page container with background image
  - `.section-bg-purple` - Purple section backgrounds
- **Type Safety**: Strict TypeScript configuration ensures type safety across the codebase

### Architecture

- The `old/` directory contains legacy code and is excluded from builds
- All pages use the App Router (Next.js 13+)
- Client components are marked with `'use client'`
- Server components are used by default for better performance

### Best Practices

- **Constants over Magic Numbers**: Use `src/lib/constants.ts` for all layout, breakpoint, and timing values
  ```typescript
  import { LAYOUT, BREAKPOINTS, HERO, TIMING } from '@/lib/constants'
  ```
- **Component Reusability**: Use `Section` and `PageContainer` components for consistent page structure
  ```tsx
  <Section id="about" variant="high-opacity" paddingTop="large">
    <h2>About</h2>
    <p>Content...</p>
  </Section>
  ```
- **CSS Classes over Inline Styles**: Prefer CSS utility classes defined in `globals.css`
  - Inline styles are only used for dynamic values (e.g., calculated dimensions, page-specific background images)
- **Type Safety**: All components and utilities are fully typed with TypeScript

## License

Private project - All rights reserved

