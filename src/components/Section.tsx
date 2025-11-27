// =============================================
// Section Component
// =============================================
// Reusable section container component for consistent page structure.
// Extracted to reduce repetition and improve maintainability.

import { ReactNode } from 'react'
import { SECTION } from '@/lib/constants'

interface SectionProps {
  id?: string
  children: ReactNode
  className?: string
  ariaLabelledby?: string
  variant?: 'default' | 'high-opacity'
  paddingTop?: 'standard' | 'large' | 'xlarge'
  paddingBottom?: 'standard' | 'large'
  contentWidth?: 'standard' | 'wide' | 'extra-wide'
}

/**
 * Section Component
 * 
 * A reusable section container that provides consistent styling and structure
 * across all page sections. Reduces code duplication and ensures visual consistency.
 * 
 * @param {Object} props - Component props
 * @param {string} [props.id] - Section ID for anchor linking
 * @param {ReactNode} props.children - Section content
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.ariaLabelledby] - ID of heading element for accessibility
 * @param {'default' | 'high-opacity'} [props.variant='default'] - Background opacity variant
 * @param {'standard' | 'large' | 'xlarge'} [props.paddingTop='standard'] - Top padding size
 * @param {'standard' | 'large'} [props.paddingBottom='standard'] - Bottom padding size
 * @param {'standard' | 'wide' | 'extra-wide'} [props.contentWidth='standard'] - Content wrapper width
 * 
 * @returns {JSX.Element} Section container with consistent styling
 * 
 * @example
 * <Section id="about" ariaLabelledby="about-heading" variant="high-opacity">
 *   <h2 id="about-heading">About</h2>
 *   <p>Content here...</p>
 * </Section>
 */
export default function Section({
  id,
  children,
  className = '',
  ariaLabelledby,
  variant = 'default',
  paddingTop = 'standard',
  paddingBottom = 'standard',
  contentWidth = 'standard',
}: SectionProps) {
  // Determine container classes based on variant
  const containerClass =
    variant === 'high-opacity'
      ? SECTION.CONTAINER_HIGH_OPACITY
      : SECTION.CONTAINER

  // Determine padding classes
  const paddingTopClass =
    paddingTop === 'xlarge'
      ? 'pt-48 sm:pt-48'
      : paddingTop === 'large'
        ? 'pt-16 sm:pt-16'
        : 'pt-8 sm:pt-8'

  const paddingBottomClass =
    paddingBottom === 'large'
      ? 'pb-12 xs:pb-16'
      : 'pb-8'

  // Determine content wrapper class
  const contentWrapperClass =
    contentWidth === 'extra-wide'
      ? 'max-w-5xl mx-4 sm:mx-auto'
      : contentWidth === 'wide'
        ? SECTION.CONTENT_WRAPPER_WIDE
        : SECTION.CONTENT_WRAPPER

  return (
    <section
      id={id}
      className={`${paddingTopClass} ${paddingBottomClass} ${containerClass} ${className}`}
      aria-labelledby={ariaLabelledby}
    >
      <div className={contentWrapperClass}>{children}</div>
    </section>
  )
}

