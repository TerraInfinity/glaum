// =============================================
// Web Vitals Component
// =============================================
// Client component that initializes Web Vitals tracking.
// Must be a client component because Web Vitals can only be measured in the browser.

'use client'

import { useEffect } from 'react'
import { reportWebVitals } from '@/lib/web-vitals'

/**
 * WebVitals Component
 * 
 * Initializes Web Vitals tracking when the component mounts.
 * This component should be included in the root layout to track
 * performance metrics across all pages.
 * 
 * Tracks:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay) / INP (Interaction to Next Paint)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 * 
 * Data is automatically sent to:
 * - Vercel Speed Insights
 * - Google Analytics 4 (if configured)
 */
export default function WebVitals() {
  useEffect(() => {
    // Initialize Web Vitals tracking
    reportWebVitals()
  }, [])

  // This component doesn't render anything
  return null
}

