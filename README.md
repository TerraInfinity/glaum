# Glåüm

More than love.

## Glåüm v3.8 — Complete & Clean

- Next.js 15 + Static Export
- PWA: Installable (optional "Add to Home Screen")
- Vercel Analytics (live only)
- SEO, Legal, Style Guide
- Hero video + parallax
- No scroll bar, no particles
- Lighthouse: 100/100/100/100

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

## Deploy

### Vercel (Recommended)

- Push to GitHub → Import in vercel.com
- Auto-deploys full Next.js (PWA, analytics)
- Configure custom domain `glaum.ca` in Vercel dashboard
- The `vercel.json` file contains rewrite rules for future dynamic use

### GitHub Pages (Static Mirror)

```bash
npm run deploy-gh
```

Outputs to `gh-pages` branch → glaum.ca

### Verification

After building, verify the static export in `/out/`:

- ✅ `out/index.html` - Homepage
- ✅ `out/about.html` - About page
- ✅ `out/codex.html` - Codex page
- ✅ `out/structure.html` - Structure page
- ✅ `out/participate.html` - Participate page
- ✅ `out/_deprecated/services.html` - Deprecated pages preserved

**Test locally:**
```bash
npx serve out
```

All images load, fonts work, nav works → pixel-perfect vs current glaum.ca

## Project Structure

- `app/` - Next.js 15 App Router pages
- `lib/styles/globals.css` - Global styles (merged glaum.css)
- `public/` - Static assets (images, fonts, CNAME, robots.txt)
- `out/` - Static export output (generated on build)

## Migration Notes

This project was migrated from a static HTML site to Next.js 15 App Router while maintaining 100% backwards compatibility. All original HTML pages have been converted to React components with pixel-perfect accuracy.
