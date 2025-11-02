'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function PerformanceMonitor() {
  const pathname = usePathname()
  
  useEffect(() => {
    // Skip if pathname includes _deprecated
    if (pathname?.includes('_deprecated')) {
      return
    }

    // Performance metrics
    const metrics: {
      pageLoadStart: number
      imagesLoaded: number
      totalImages: number
      loadTimes: Record<string, number>
      videosLoaded: number
      totalVideos: number
      videoLoadTimes: Record<string, number>
      domReady?: number
      pageLoadComplete?: number
    } = {
      pageLoadStart: performance.now(),
      imagesLoaded: 0,
      totalImages: 0,
      loadTimes: {},
      videosLoaded: 0,
      totalVideos: 0,
      videoLoadTimes: {}
    }

    // Track when DOM is ready
    const domReadyHandler = () => {
      metrics.domReady = performance.now()
      console.log('DOM ready in:', Math.round(metrics.domReady - metrics.pageLoadStart), 'ms')
    }

    // Track when page is fully loaded
    const loadHandler = () => {
      metrics.pageLoadComplete = performance.now()
      console.log('Page fully loaded in:', Math.round(metrics.pageLoadComplete - metrics.pageLoadStart), 'ms')
      
      // Log performance summary
      logPerformanceSummary()
    }

    // Track image loading performance
    function trackImageLoad(imageSrc: string, startTime: number) {
      const img = new Image()
      img.onload = function() {
        const loadTime = performance.now() - startTime
        metrics.loadTimes[imageSrc] = loadTime
        metrics.imagesLoaded++
        
        console.log(`Image loaded: ${imageSrc} in ${Math.round(loadTime)}ms`)
        
        if (metrics.imagesLoaded === metrics.totalImages) {
          console.log('All images loaded!')
        }
      }
      img.onerror = function() {
        console.warn(`Failed to load image: ${imageSrc}`)
        metrics.imagesLoaded++
      }
      img.src = imageSrc
    }

    // Track video loading performance
    function trackVideoLoad(videoSrc: string, startTime: number) {
      metrics.totalVideos++
      const video = document.createElement('video')
      video.onloadeddata = function() {
        const loadTime = performance.now() - startTime
        metrics.videoLoadTimes[videoSrc] = loadTime
        metrics.videosLoaded++
        
        console.log(`Video loaded: ${videoSrc} in ${Math.round(loadTime)}ms`)
        
        if (metrics.videosLoaded === metrics.totalVideos) {
          console.log('All videos loaded!')
        }
      }
      video.onerror = function() {
        console.warn(`Failed to load video: ${videoSrc}`)
        metrics.videosLoaded++
      }
      video.src = videoSrc
    }

    // IntersectionObserver for lazy video loading
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement
            const videoSrc = video.src || video.currentSrc
            if (videoSrc && !metrics.videoLoadTimes[videoSrc]) {
              const startTime = performance.now()
              trackVideoLoad(videoSrc, startTime)
            }
            videoObserver.unobserve(video)
          }
        })
      },
      { rootMargin: '50px' }
    )

    // Observe all videos on the page
    const videos = document.querySelectorAll('video[data-lazy]')
    videos.forEach((video) => {
      videoObserver.observe(video)
    })

    // Log performance summary
    function logPerformanceSummary() {
      if (!metrics.pageLoadComplete) return
      const totalLoadTime = metrics.pageLoadComplete - metrics.pageLoadStart
      const avgImageLoadTime = Object.values(metrics.loadTimes).reduce((a, b) => a + b, 0) / Object.keys(metrics.loadTimes).length || 0
      const avgVideoLoadTime = Object.values(metrics.videoLoadTimes).reduce((a, b) => a + b, 0) / Object.keys(metrics.videoLoadTimes).length || 0
      
      console.log('=== Performance Summary ===')
      console.log('Total page load time:', Math.round(totalLoadTime), 'ms')
      console.log('Images loaded:', metrics.imagesLoaded, '/', metrics.totalImages)
      console.log('Average image load time:', Math.round(avgImageLoadTime), 'ms')
      console.log('Image load times:', metrics.loadTimes)
      console.log('Videos loaded:', metrics.videosLoaded, '/', metrics.totalVideos)
      console.log('Average video load time:', Math.round(avgVideoLoadTime), 'ms')
      console.log('Video load times:', metrics.videoLoadTimes)
      
      // Send to analytics if available
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'performance', {
          'page_load_time': Math.round(totalLoadTime),
          'images_loaded': metrics.imagesLoaded,
          'avg_image_load_time': Math.round(avgImageLoadTime),
          'videos_loaded': metrics.videosLoaded,
          'avg_video_load_time': Math.round(avgVideoLoadTime)
        })
      }
    }

    // Set up event listeners
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', domReadyHandler)
    } else {
      domReadyHandler()
    }

    if (document.readyState === 'complete') {
      loadHandler()
    } else {
      window.addEventListener('load', loadHandler)
    }

    // Expose tracking functions globally
    if (typeof window !== 'undefined') {
      (window as any).trackImageLoad = trackImageLoad
      ;(window as any).trackVideoLoad = trackVideoLoad
      ;(window as any).performanceMetrics = metrics
    }

    // Cleanup
    return () => {
      document.removeEventListener('DOMContentLoaded', domReadyHandler)
      window.removeEventListener('load', loadHandler)
      videoObserver.disconnect()
    }
  }, [pathname])

  return null
}

