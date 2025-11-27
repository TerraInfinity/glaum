// =============================================
// Web Vitals Tracking
// =============================================
// Enhanced Web Vitals tracking for performance monitoring.
// Tracks Core Web Vitals (LCP, FID, CLS) and other important metrics.

/**
 * Web Vitals Tracking Utility
 * 
 * Tracks Core Web Vitals and other performance metrics:
 * - LCP (Largest Contentful Paint): Loading performance
 * - INP (Interaction to Next Paint): Interactivity (replaces FID)
 * - CLS (Cumulative Layout Shift): Visual stability
 * - FCP (First Contentful Paint): Initial render
 * - TTFB (Time to First Byte): Server response time
 * 
 * Data is sent to:
 * - Vercel Analytics (via Speed Insights - automatic)
 * - Google Analytics 4 (if configured)
 * - Console (development mode)
 * 
 * @see https://web.dev/vitals/
 */

import { onCLS, onFCP, onLCP, onTTFB, onINP, Metric } from 'web-vitals'

// Google Analytics 4 Measurement ID (optional)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void
    dataLayer?: unknown[]
  }
}

/**
 * Sends a metric to Google Analytics 4
 */
function sendToGoogleAnalytics(metric: Metric) {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return
  }

  // Send to Google Analytics 4
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    })
  }
}

/**
 * Logs metric to console in development
 */
function logMetric(metric: Metric) {
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id,
    })
  }
}

/**
 * Handles a Web Vital metric
 */
function handleMetric(metric: Metric) {
  logMetric(metric)
  sendToGoogleAnalytics(metric)
  
  // Vercel Speed Insights automatically tracks these metrics
  // No additional action needed for Vercel
}

/**
 * Initializes Web Vitals tracking
 * 
 * Call this function in your app to start tracking Web Vitals.
 * Should be called once when the app loads.
 */
export function reportWebVitals() {
  // Track Core Web Vitals
  onCLS(handleMetric) // Cumulative Layout Shift - Visual stability
  onINP(handleMetric) // Interaction to Next Paint - Interactivity (replaces FID)
  onFCP(handleMetric) // First Contentful Paint - Initial render
  onLCP(handleMetric) // Largest Contentful Paint - Loading performance
  onTTFB(handleMetric) // Time to First Byte - Server response time
}

