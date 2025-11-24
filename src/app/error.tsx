'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
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

