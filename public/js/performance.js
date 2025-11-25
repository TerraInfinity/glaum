// =============================================
// Performance Monitoring Script
// =============================================
// 
// Tracks and logs performance metrics for the Glåüm homepage.
// Monitors page load times, DOM ready time, and image loading performance.
// 
// This script helps identify performance bottlenecks and optimize load times.
// Metrics are logged to console and optionally sent to Google Analytics if available.
//
// Usage:
// - Automatically tracks page load and DOM ready events
// - Call trackImageLoad(imageSrc, startTime) to track individual image loads
// - Access metrics via window.performanceMetrics

(function() {
  'use strict';
  
  // ========== Performance Metrics Object ==========
  /**
   * Metrics storage object that tracks all performance data.
   * 
   * Properties:
   * - pageLoadStart: Timestamp when script started (baseline for all measurements)
   * - imagesLoaded: Count of images that have finished loading
   * - totalImages: Total number of images expected to load
   * - loadTimes: Object mapping image sources to their load times in milliseconds
   * - domReady: Timestamp when DOMContentLoaded fired
   * - pageLoadComplete: Timestamp when window.load fired
   */
  const metrics = {
    pageLoadStart: performance.now(), // Baseline timestamp using high-resolution time API
    imagesLoaded: 0,
    totalImages: 0,
    loadTimes: {} // Key: image source URL, Value: load time in ms
  };
  
  // ========== DOM Ready Tracking ==========
  /**
   * Tracks when the DOM is fully parsed and ready (but resources may still be loading).
   * 
   * This event fires when HTML parsing is complete, which is typically faster than
   * the full page load event. Useful for measuring perceived performance.
   */
  document.addEventListener('DOMContentLoaded', function() {
    metrics.domReady = performance.now();
    const domReadyTime = Math.round(metrics.domReady - metrics.pageLoadStart);
    console.log('DOM ready in:', domReadyTime, 'ms');
  });
  
  // ========== Page Load Complete Tracking ==========
  /**
   * Tracks when all resources (images, stylesheets, scripts) have finished loading.
   * 
   * This is the final milestone for page load performance.
   * After this fires, we log a complete performance summary.
   */
  window.addEventListener('load', function() {
    metrics.pageLoadComplete = performance.now();
    const totalLoadTime = Math.round(metrics.pageLoadComplete - metrics.pageLoadStart);
    console.log('Page fully loaded in:', totalLoadTime, 'ms');
    
    // Log comprehensive performance summary
    logPerformanceSummary();
  });
  
  // ========== Image Loading Performance Tracking ==========
  /**
   * Tracks the load time of individual images.
   * 
   * This function is called by components that want to track specific image loads.
   * It creates a new Image object, measures load time, and updates metrics.
   * 
   * @param {string} imageSrc - The source URL of the image to track
   * @param {number} startTime - Timestamp when image loading began (from performance.now())
   * 
   * Example usage:
   *   const startTime = performance.now();
   *   const img = new Image();
   *   img.onload = () => trackImageLoad(img.src, startTime);
   *   img.src = '/path/to/image.jpg';
   */
  function trackImageLoad(imageSrc, startTime) {
    const img = new Image();
    
    /**
     * Image load success handler.
     * Calculates load time and updates metrics.
     */
    img.onload = function() {
      const loadTime = performance.now() - startTime;
      metrics.loadTimes[imageSrc] = loadTime;
      metrics.imagesLoaded++;
      
      console.log(`Image loaded: ${imageSrc} in ${Math.round(loadTime)}ms`);
      
      // Check if all expected images have loaded
      if (metrics.imagesLoaded === metrics.totalImages && metrics.totalImages > 0) {
        console.log('All images loaded!');
      }
    };
    
    /**
     * Image load error handler.
     * Logs warning but still increments counter to prevent infinite waiting.
     */
    img.onerror = function() {
      console.warn(`Failed to load image: ${imageSrc}`);
      metrics.imagesLoaded++; // Increment even on error to track completion
    };
    
    // Trigger image load by setting src
    img.src = imageSrc;
  }
  
  // ========== Performance Summary Logging ==========
  /**
   * Logs a comprehensive performance summary to the console.
   * 
   * Calculates and displays:
   * - Total page load time
   * - Image loading statistics
   * - Average image load time
   * - Individual image load times
   * 
   * Also sends metrics to Google Analytics if gtag is available.
   */
  function logPerformanceSummary() {
    const totalLoadTime = metrics.pageLoadComplete - metrics.pageLoadStart;
    
    // Calculate average image load time
    // Uses Object.values() to get array of load times, then reduces to sum
    const imageLoadTimes = Object.values(metrics.loadTimes);
    const avgImageLoadTime = imageLoadTimes.length > 0
      ? imageLoadTimes.reduce((a, b) => a + b, 0) / imageLoadTimes.length
      : 0;
    
    // Log summary to console
    console.log('=== Performance Summary ===');
    console.log('Total page load time:', Math.round(totalLoadTime), 'ms');
    console.log('Images loaded:', metrics.imagesLoaded, '/', metrics.totalImages);
    console.log('Average image load time:', Math.round(avgImageLoadTime), 'ms');
    console.log('Image load times:', metrics.loadTimes);
    
    // ========== Google Analytics Integration ==========
    /**
     * Send performance metrics to Google Analytics if available.
     * 
     * This allows tracking performance metrics in GA dashboards.
     * Only sends if gtag is defined (GA script loaded).
     */
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance', {
        'page_load_time': Math.round(totalLoadTime),
        'images_loaded': metrics.imagesLoaded,
        'avg_image_load_time': Math.round(avgImageLoadTime)
      });
    }
  }
  
  // ========== Global API Exposure ==========
  /**
   * Expose tracking function and metrics object globally.
   * 
   * This allows other scripts and components to:
   * - Track custom image loads: window.trackImageLoad(src, startTime)
   * - Access current metrics: window.performanceMetrics
   * 
   * Exposed on window object for easy access throughout the application.
   */
  window.trackImageLoad = trackImageLoad;
  window.performanceMetrics = metrics;
  
})();
