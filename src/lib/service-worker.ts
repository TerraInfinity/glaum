// =============================================
// Service Worker Registration
// =============================================
// Registers the service worker for PWA functionality.
// Provides offline support and improved performance through caching.

/**
 * Registers the service worker for PWA functionality
 * 
 * This function should be called when the app loads to enable:
 * - Offline functionality
 * - Asset caching for faster load times
 * - Improved performance on repeat visits
 * 
 * The service worker is only registered in production builds
 * and when the browser supports service workers.
 */
export function registerServiceWorker() {
  // Only register in production and if service workers are supported
  if (
    typeof window !== 'undefined' &&
    'serviceWorker' in navigator &&
    process.env.NODE_ENV === 'production'
  ) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered successfully:', registration.scope)
          
          // Check for updates periodically
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available, user can refresh to update
                  console.log('New service worker available. Refresh to update.')
                }
              })
            }
          })
        })
        .catch((error) => {
          console.log('Service Worker registration failed:', error)
        })
    })
  }
}

/**
 * Unregisters the service worker (useful for development)
 */
export function unregisterServiceWorker() {
  if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.unregister().then((success) => {
        if (success) {
          console.log('Service Worker unregistered')
        }
      })
    })
  }
}

