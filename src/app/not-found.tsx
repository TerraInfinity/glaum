import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4" style={{ paddingTop: '100px' }}>
      <div className="text-center max-w-2xl mx-auto">
        <h1 
          className="text-6xl md:text-8xl font-bold mb-4"
          style={{ fontFamily: "'tokyo_dreamsregular'" }}
        >
          404
        </h1>
        <h2 
          className="text-2xl md:text-4xl mb-6 opacity-70"
          style={{ fontFamily: "'tokyo_dreamsregular'" }}
        >
          Page Not Found
        </h2>
        <p className="text-lg mb-8 opacity-80">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block square-btn square-btn--md bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}

