// =============================================
// TenetFrame Component
// =============================================
// Reusable component for displaying Tenets of Glåüm in ornate frames.
// Extracted for better code organization and future scalability.

/**
 * TenetFrame Component
 * 
 * Displays a single tenet in an ornate decorative frame with:
 * - Ornate frame background image
 * - Title with responsive sizing
 * - Decorative divider (•••)
 * - Description text with responsive sizing
 * 
 * Supports two variants:
 * - 'default': Standard height frame (tenet-frame-wrapper)
 * - 'long': Extended height for longer content (tenet-frame-long)
 * 
 * @param {Object} props - Component props
 * @param {string | React.ReactNode} props.title - The tenet title (can include JSX for line breaks)
 * @param {string | React.ReactNode} props.description - The tenet description (can include JSX)
 * @param {'default' | 'long'} [props.variant='default'] - Frame variant for content length
 * @param {string} [props.id] - Optional ID for accessibility/linking
 * 
 * @returns {JSX.Element} Tenet frame with title and description
 * 
 * @example
 * <TenetFrame
 *   title="UNCONDITIONAL POSITIVE REGARD"
 *   description="The Many Hands of Glåüm recognize..."
 *   variant="default"
 * />
 */

import Image from 'next/image'
import { ReactNode } from 'react'

interface TenetFrameProps {
  title: string | ReactNode
  description: string | ReactNode
  variant?: 'default' | 'long'
  id?: string
}

export default function TenetFrame({
  title,
  description,
  variant = 'default',
  id,
}: TenetFrameProps) {
  // Determine wrapper class based on variant
  const wrapperClass =
    variant === 'long'
      ? 'relative mx-auto max-w-4xl tenet-frame-long'
      : 'relative mx-auto max-w-4xl tenet-frame-wrapper'

  return (
    <div className="my-16 px-4 md:my-32" id={id}>
      <div className={wrapperClass}>
        {/* Ornate frame background image */}
        <Image
          src="/images/tenent-frame-mobile.png"
          width={1000}
          height={750}
          className="w-full h-auto"
          sizes="(max-width: 896px) 100vw, 896px"
          alt="Tenet"
        />
        {/* Text overlay with responsive sizing */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
          {/* Tenet title with line break on mobile for better readability */}
          <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 tracking-wide leading-tight max-w-[75%] break-words">
            {title}
          </h3>
          {/* Decorative divider */}
          <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">
            •••
          </div>
          {/* Tenet description with extensive responsive sizing */}
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-2xl px-2 sm:px-4 break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

