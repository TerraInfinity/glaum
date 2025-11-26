// =============================================
// Error Tracking Utility
// =============================================
// 
// Centralized error tracking for the application.
// Currently uses Vercel Analytics, but can be extended to support
// additional services like Sentry, LogRocket, etc.
//
// Usage:
//   import { trackError } from '@/lib/error-tracking'
//   trackError(error, { context: 'ComponentName', userId: 'user123' })

/**
 * Error tracking context information
 */
export interface ErrorContext {
  /** Component or module where error occurred */
  component?: string
  /** User ID if available */
  userId?: string
  /** Additional context data */
  [key: string]: unknown
}

/**
 * Tracks an error to monitoring services
 * 
 * Currently sends errors to:
 * - Vercel Analytics (automatic via @vercel/analytics)
 * - Console (development)
 * 
 * Can be extended to send to:
 * - Sentry
 * - LogRocket
 * - Custom error tracking service
 * 
 * @param error - The error object to track
 * @param context - Optional context information about where/why the error occurred
 */
export function trackError(error: Error, context?: ErrorContext): void {
  // In development, log to console with full details
  if (process.env.NODE_ENV === 'development') {
    console.error('Error tracked:', {
      message: error.message,
      stack: error.stack,
      name: error.name,
      context,
    })
  }

  // In production, Vercel Analytics automatically captures errors
  // when using @vercel/analytics. Additional services can be added here:
  
  // Example: Send to Sentry (if configured)
  // if (typeof window !== 'undefined' && window.Sentry) {
  //   window.Sentry.captureException(error, { contexts: { custom: context } })
  // }

  // Example: Send to custom error tracking service
  // if (process.env.NEXT_PUBLIC_ERROR_TRACKING_ENDPOINT) {
  //   fetch(process.env.NEXT_PUBLIC_ERROR_TRACKING_ENDPOINT, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ error, context }),
  //   }).catch(() => {
  //     // Silently fail if error tracking service is unavailable
  //   })
  // }
}

/**
 * Tracks a non-error event (warning, info, etc.)
 * 
 * @param message - The message to track
 * @param level - Severity level (info, warning, error)
 * @param context - Optional context information
 */
export function trackEvent(
  message: string,
  level: 'info' | 'warning' | 'error' = 'info',
  context?: ErrorContext
): void {
  if (process.env.NODE_ENV === 'development') {
    console[level === 'error' ? 'error' : level === 'warning' ? 'warn' : 'log'](
      `[${level.toUpperCase()}] ${message}`,
      context
    )
  }

  // Can be extended to send to analytics services
  // Example: Vercel Analytics custom events
  // if (typeof window !== 'undefined' && window.va) {
  //   window.va('track', message, { level, ...context })
  // }
}

