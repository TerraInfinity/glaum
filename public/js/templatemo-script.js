// =============================================
// Template Background Script (Legacy)
// =============================================
// 
// Legacy script from the original template for background image management.
// Uses jQuery Backstretch plugin for full-page background images with transitions.
// 
// NOTE: This script may not be actively used in the current Next.js implementation.
// Kept for reference and potential future use if background image rotation is needed.
//
// Dependencies:
// - jQuery (jquery-3.4.1.min.js)
// - jQuery Backstretch plugin (jquery.backstretch.min.js)

/**
 * Initialize Background Images
 * 
 * Sets up a slideshow of background images using the Backstretch jQuery plugin.
 * Images fade between each other automatically if autoplay is enabled.
 * 
 * @param {boolean} autoplay - Whether to automatically cycle through images (default: true)
 * 
 * Image sequence:
 * - purple.jpg
 * - purple2.jpg
 * - purple3.jpg
 * 
 * Configuration:
 * - duration: 1 second between transitions
 * - fade: 5000ms (5 seconds) fade transition duration
 */
const initBg = (autoplay = true) => {
    // Array of background image filenames
    const bgImgsNames = ['purple.jpg', 'purple2.jpg', 'purple3.jpg'];
    
    // Map filenames to full paths in the img/ directory
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    // Initialize Backstretch with image array and transition settings
    // Backstretch creates a full-page background slideshow
    $.backstretch(bgImgs, {
        duration: 1,      // 1 second between image changes
        fade: 5000        // 5 second fade transition
    });

    // Pause autoplay if requested
    if(!autoplay) {
      $.backstretch('pause');  
    }    
}

/**
 * Set Specific Background Image
 * 
 * Shows a specific background image by index.
 * 
 * @param {number} id - The index of the image to show (0, 1, or 2)
 */
const setBg = id => {
    $.backstretch('show', id);
}

/**
 * Set Background Overlay
 * 
 * Creates a responsive overlay effect using CSS borders to create triangular shapes.
 * The overlay adapts to window size:
 * - Desktop (>768px): Creates a top border triangle
 * - Mobile (<=768px): Creates a left border triangle
 * 
 * This creates a decorative overlay effect over the background images.
 */
const setBgOverlay = () => {
    const windowWidth = window.innerWidth;
    const bgHeight = $('body').height();
    const tmBgLeft = $('.tm-bg-left');

    // Set background height to match body height
    $('.tm-bg').height(bgHeight);

    // Responsive overlay: different triangle direction based on viewport width
    if(windowWidth > 768) {
        // Desktop: Create triangle using top border
        // Transparent border creates a triangular cutout effect
        tmBgLeft.css('border-left', `0`)
                .css('border-top', `${bgHeight}px solid transparent`);                
    } else {
        // Mobile: Create triangle using left border
        tmBgLeft.css('border-left', `${windowWidth}px solid transparent`)
                .css('border-top', `0`);
    }
}

/**
 * Document Ready Handler
 * 
 * Initializes background functionality when DOM is ready.
 * Sets up event handlers for background controls and window resizing.
 */
$(document).ready(function () {
    // ========== Background Initialization ==========
    const autoplayBg = true; // Enable automatic background image rotation
    initBg(autoplayBg);      // Initialize background slideshow
    setBgOverlay();          // Set up responsive overlay

    // ========== Background Control Handlers ==========
    /**
     * Click handler for background control buttons.
     * 
     * When a control button is clicked:
     * 1. Remove 'active' class from all controls
     * 2. Add 'active' class to clicked control
     * 3. Show the corresponding background image
     */
    const bgControl = $('.tm-bg-control');            
    bgControl.click(function() {
        bgControl.removeClass('active');           // Remove active from all
        $(this).addClass('active');                // Add active to clicked
        const id = $(this).data('id');             // Get image index from data attribute
        setBg(id);                                 // Show that background image
    });

    // ========== Backstretch Event Handler ==========
    /**
     * Handler for Backstretch 'after' event.
     * 
     * Fires after each background image transition completes.
     * Updates the active control button to match the current background image.
     * 
     * @param {Event} e - jQuery event object
     * @param {Object} instance - Backstretch instance
     * @param {number} index - Index of the currently displayed image
     */
    $(window).on("backstretch.after", function (e, instance, index) {        
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');                                    // Remove active from all
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`); // Find control matching current image
        current.addClass('active');                                         // Mark it as active
    });

    // ========== Window Resize Handler ==========
    /**
     * Recalculate overlay on window resize.
     * 
     * Ensures the overlay triangle adapts correctly when viewport size changes,
     * switching between desktop and mobile overlay styles as needed.
     */
    $(window).resize(function() {
        setBgOverlay();
    });
});