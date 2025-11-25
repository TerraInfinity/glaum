// =============================================
// Error Boundary Component (Route-Level)
// =============================================
// 
// Next.js error boundary for handling errors in route segments.
// This component catches errors that occur during rendering, in lifecycle methods,
// and in constructors of the component tree below it.
//
// Note: This is a route-level error boundary. For app-level errors, see global-error.tsx.

'use client'

import { useEffect } from 'react'
import Link from 'next/link'

/**
 * Error Component Props
 * 
 * @param {Error & { digest?: string }} error - The error object that was thrown
 * @param {() => void} reset - Function to reset the error boundary and retry rendering
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  /**
   * Effect hook to log errors for debugging and monitoring.
   * 
   * In production, this could send errors to an error tracking service
   * like Sentry, LogRocket, or similar.
   */
  useEffect(() => {
    // Log the error to console (in production, send to error reporting service)
    console.error('Error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ paddingTop: '100px' }}>
      <div className="text-center max-w-2xl mx-auto">
        <h1 
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{ fontFamily: "'tokyo_dreamsregular'" }}
        >
          Oops!
        </h1>
        <h2 
          className="text-2xl md:text-4xl mb-6 opacity-70"
          style={{ fontFamily: "'tokyo_dreamsregular'" }}
        >
          Something went wrong
        </h2>
        <p className="text-lg mb-8 opacity-80">
          We encountered an unexpected error. Please try again.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="square-btn square-btn--md bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="square-btn square-btn--md square-btn--purple-outline text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}

