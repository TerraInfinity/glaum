'use client'

import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error:', error)
  }, [error])

  return (
    <html lang="en" className="seamless-gradient-wrapper">
      <body className="text-black leading-loose" style={{ fontFamily: "'Open Sans'", backgroundColor: 'transparent', backgroundImage: 'none' }}>
        <div className="min-h-screen flex flex-col items-center justify-center px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h1 
              className="text-6xl md:text-8xl font-bold mb-4"
              style={{ fontFamily: "'tokyo_dreamsregular'" }}
            >
              Error
            </h1>
            <h2 
              className="text-2xl md:text-4xl mb-6 opacity-70"
              style={{ fontFamily: "'tokyo_dreamsregular'" }}
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

