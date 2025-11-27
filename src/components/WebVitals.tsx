// =============================================
// Web Vitals Component
// =============================================
// Client component that initializes Web Vitals tracking and Service Worker registration.
// Must be a client component because Web Vitals and Service Workers can only be used in the browser.

'use client'

import { useEffect } from 'react'
import { reportWebVitals } from '@/lib/web-vitals'
import { registerServiceWorker } from '@/lib/service-worker'

/**
 * WebVitals Component
 * 
 * Initializes Web Vitals tracking and Service Worker registration when the component mounts.
 * This component should be included in the root layout to track
 * performance metrics across all pages and enable PWA functionality.
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
 * 
 * Also registers Service Worker for:
 * - Offline functionality
 * - Asset caching
 * - Improved performance
 */
export default function WebVitals() {
  useEffect(() => {
    // Initialize Web Vitals tracking
    reportWebVitals()
    
    // Register Service Worker for PWA functionality
    registerServiceWorker()
  }, [])

  // This component doesn't render anything
  return null
}

