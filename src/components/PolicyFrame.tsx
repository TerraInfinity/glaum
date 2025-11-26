// =============================================
// PolicyFrame Component
// =============================================
// Reusable component for displaying Policies of the ManyHands in ornate frames.
// Extracted for better code organization and future scalability.

/**
 * PolicyFrame Component
 * 
 * Displays a single policy in an ornate decorative frame with:
 * - Ornate frame background image
 * - Title with responsive sizing
 * - Decorative divider (•••)
 * - Description text with responsive sizing
 * 
 * Supports two variants:
 * - 'default': Standard height frame (policy-frame-wrapper)
 * - 'long': Extended height for longer content (policy-frame-long)
 * 
 * @param {Object} props - Component props
 * @param {string | React.ReactNode} props.title - The policy title (can include JSX for line breaks)
 * @param {string | React.ReactNode} props.description - The policy description (can include JSX)
 * @param {'default' | 'long'} [props.variant='default'] - Frame variant for content length
 * @param {string} [props.id] - Optional ID for accessibility/linking
 * 
 * @returns {JSX.Element} Policy frame with title and description
 * 
 * @example
 * <PolicyFrame
 *   title="ALL FEELINGS ARE WELCOME"
 *   description="In Glåüm, anger, sadness..."
 *   variant="default"
 * />
 */

import Image from 'next/image'
import { ReactNode } from 'react'

interface PolicyFrameProps {
  title: string | ReactNode
  description: string | ReactNode
  variant?: 'default' | 'long'
  id?: string
}

export default function PolicyFrame({
  title,
  description,
  variant = 'default',
  id,
}: PolicyFrameProps) {
  // Determine wrapper class based on variant
  const wrapperClass =
    variant === 'long'
      ? 'relative mx-auto max-w-5xl policy-frame-long policy-frame-wrapper'
      : 'relative mx-auto max-w-5xl policy-frame-wrapper'

  return (
    <div className="my-16 px-4 md:my-32" id={id}>
      <div className={wrapperClass}>
        {/* Ornate frame background image */}
        <Image
          src="/images/policies-frame.webp"
          width={1400}
          height={900}
          className="w-full h-auto"
          sizes="(max-width: 1024px) 100vw, 1024px"
          alt="Policy"
        />
        {/* Text overlay with responsive sizing */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 lg:px-14 text-center py-4 sm:py-6 md:py-8">
          {/* Policy title */}
          <h3 className="text-sm xs:text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase text-black mb-1 md:mb-2 leading-tight max-w-[75%] break-words">
            {title}
          </h3>
          {/* Decorative divider */}
          <div className="text-lg sm:text-xl md:text-2xl text-amber-700 mb-1 md:mb-2">
            •••
          </div>
          {/* Policy description */}
          <p className="text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg text-black leading-normal max-w-[75%] sm:max-w-md md:max-w-xl lg:max-w-3xl px-2 sm:px-4 break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

