// =============================================
// Application Constants
// =============================================
// Centralized constants to replace magic numbers and improve maintainability.
// These values are used throughout the application for consistency.
//
// This file was created as part of code quality improvements to:
// - Eliminate magic numbers from the codebase
// - Centralize configuration values for easy updates
// - Improve code readability and maintainability
// - Ensure consistency across components
//
// Usage:
//   import { LAYOUT, BREAKPOINTS, HERO, TIMING } from '@/lib/constants'

/**
 * Layout Constants
 */
export const LAYOUT = {
  /** Fixed header height in pixels */
  HEADER_HEIGHT: 80,
  
  /** Maximum content width for page containers */
  MAX_CONTENT_WIDTH: 1200,
  
  /** Standard content max width (3xl) */
  CONTENT_MAX_WIDTH: 'max-w-3xl',
  
  /** Wide content max width (4xl) */
  WIDE_CONTENT_MAX_WIDTH: 'max-w-4xl',
  
  /** Extra wide content max width (5xl) */
  EXTRA_WIDE_CONTENT_MAX_WIDTH: 'max-w-5xl',
} as const

/**
 * Responsive Breakpoints
 */
export const BREAKPOINTS = {
  /** Mobile breakpoint in pixels */
  MOBILE: 768,
  
  /** Tablet breakpoint in pixels */
  TABLET: 1024,
  
  /** Desktop breakpoint in pixels */
  DESKTOP: 1280,
} as const

/**
 * Hero Image Constants
 */
export const HERO = {
  /** Desktop viewport width multiplier (80% of viewport) */
  DESKTOP_WIDTH_MULTIPLIER: 0.80,
  
  /** Mobile viewport width multiplier (98% of viewport) */
  MOBILE_WIDTH_MULTIPLIER: 0.98,
  
  /** Height reduction multiplier for visual breathing room */
  HEIGHT_REDUCTION_MULTIPLIER: 0.85,
  
  /** Default aspect ratio (4:3) */
  DEFAULT_ASPECT_RATIO: 4 / 3,
  
  /** Side padding in pixels (16px each side = 32px total) */
  SIDE_PADDING: 32,
} as const

/**
 * Animation & Timing Constants
 */
export const TIMING = {
  /** Resize debounce delay in milliseconds */
  RESIZE_DEBOUNCE: 250,
  
  /** Transition duration for smooth animations */
  TRANSITION_DURATION: 300,
} as const

/**
 * Spacing Constants
 */
export const SPACING = {
  /** Standard section padding top (mobile) */
  SECTION_PADDING_TOP_MOBILE: 'pt-8',
  
  /** Standard section padding top (desktop) */
  SECTION_PADDING_TOP_DESKTOP: 'pt-12',
  
  /** Large section padding top */
  SECTION_PADDING_TOP_LARGE: 'pt-16',
  
  /** Extra large section padding top */
  SECTION_PADDING_TOP_XLARGE: 'pt-48',
  
  /** Standard section padding bottom (mobile) */
  SECTION_PADDING_BOTTOM_MOBILE: 'pb-12',
  
  /** Standard section padding bottom (desktop) */
  SECTION_PADDING_BOTTOM_DESKTOP: 'pb-16',
} as const

/**
 * Typography Constants
 */
export const TYPOGRAPHY = {
  /** Main heading size classes */
  HEADING_SIZE_LARGE: 'text-5xl lg:text-7xl',
  
  /** Medium heading size classes */
  HEADING_SIZE_MEDIUM: 'text-xl sm:text-5xl',
  
  /** Standard heading margin bottom */
  HEADING_MARGIN_BOTTOM: 'mb-2 pb-2',
  
  /** Large heading margin bottom */
  HEADING_MARGIN_BOTTOM_LARGE: 'mb-8',
} as const

/**
 * Section Container Classes
 */
export const SECTION = {
  /** Standard section container classes */
  CONTAINER: 'mx-auto bg-white bg-opacity-10 w-full section-bg-purple-opacity',
  
  /** Section with higher opacity background */
  CONTAINER_HIGH_OPACITY: 'mx-auto bg-white bg-opacity-20 w-full about-section section-bg-purple',
  
  /** Standard content wrapper */
  CONTENT_WRAPPER: 'max-w-3xl mx-4 sm:mx-auto',
  
  /** Wide content wrapper */
  CONTENT_WRAPPER_WIDE: 'max-w-4xl mx-4 sm:mx-auto',
} as const

