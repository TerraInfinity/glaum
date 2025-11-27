// =============================================
// Global Error Boundary Component
// =============================================
// 
// Next.js global error boundary for handling errors in the root layout.
// This is the top-level error handler that catches errors that occur
// in the root layout.tsx file itself.
//
// Unlike the route-level error.tsx, this component must include
// <html> and <body> tags since it replaces the entire page.

'use client'

import { useEffect } from 'react'
import { trackError } from '@/lib/error-tracking'

/**
 * GlobalError Component Props
 * 
 * @param {Error & { digest?: string }} error - The error object that was thrown
 * @param {() => void} reset - Function to reset the error boundary and retry rendering
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  /**
   * Effect hook to track global errors for debugging and monitoring.
   * 
   * Global errors are more critical than route-level errors as they
   * indicate issues with the root layout or critical infrastructure.
   * Errors are automatically tracked by Vercel Analytics.
   */
  useEffect(() => {
    // Track critical global error with high priority context
    trackError(error, {
      component: 'GlobalErrorBoundary',
      digest: error.digest,
      severity: 'critical',
      pathname: typeof window !== 'undefined' ? window.location.pathname : 'unknown',
    })
  }, [error])

  return (
    <html lang="en" className="seamless-gradient-wrapper">
      <body className="text-black leading-loose body-base">
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 
              className="text-6xl md:text-8xl font-bold mb-4"
            >
              Error
            </h1>
            <h2 
              className="text-2xl md:text-4xl mb-6 opacity-70"
            >
              A critical error occurred
            </h2>
            <p className="text-lg mb-8 opacity-80">
              Something went wrong with the application. Please refresh the page.
            </p>
            <button
              onClick={reset}
              className="square-btn square-btn--md bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}

