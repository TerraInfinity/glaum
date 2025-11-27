// =============================================
// PageContainer Component
// =============================================
// Reusable page container component for consistent page layouts.
// Extracted to reduce repetition across codex, structure, and participate pages.

import { ReactNode } from 'react'
import { LAYOUT } from '@/lib/constants'

interface PageContainerProps {
  children: ReactNode
  className?: string
  backgroundImage?: string
  style?: React.CSSProperties
}

/**
 * PageContainer Component
 * 
 * A reusable container for pages that need a full-width background image
 * with a centered content area. Used in codex, structure, and participate pages.
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Page content
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.backgroundImage] - Background image URL
 * @param {React.CSSProperties} [props.style] - Additional inline styles
 * 
 * @returns {JSX.Element} Page container with background and content wrapper
 * 
 * @example
 * <PageContainer backgroundImage="/img/codex.png">
 *   <h1>Codex</h1>
 *   <p>Content here...</p>
 * </PageContainer>
 */
export default function PageContainer({
  children,
  className = '',
  backgroundImage,
  style,
}: PageContainerProps) {
  const containerStyle: React.CSSProperties = {
    maxWidth: `${LAYOUT.MAX_CONTENT_WIDTH}px`,
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      minHeight: '100vh',
    }),
    ...style,
  }

  return (
    <div className={`mx-auto px-4 ${className}`} style={containerStyle}>
      {children}
    </div>
  )
}

