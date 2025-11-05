'use client'

import { useState, useEffect } from 'react'

interface SwatchProps {
  name: string
  color: string
  hex?: string
  className?: string
}

/**
 * Displays an individual color swatch and exposes click-to-copy behavior for
 * quick theme exploration.
 */
function ColorSwatch({ name, color, hex, className = '' }: SwatchProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={`p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 ${className}`}>
      <div
        className="w-full h-24 rounded-md mb-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
        style={{ backgroundColor: color }}
        onClick={() => handleCopy(color)}
        title="Click to copy color value"
      />
      <div className="space-y-1">
        <div className="font-semibold text-sm">{name}</div>
        {hex && (
          <div className="text-xs text-gray-600 dark:text-gray-400 font-mono">
            {hex}
          </div>
        )}
        <div className="text-xs text-gray-500 dark:text-gray-500 font-mono">
          {color}
        </div>
        {copied && (
          <div className="text-xs text-green-600 dark:text-green-400 animate-pulse">
            ✓ Copied!
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Provides a reusable snippet for copying curated Tailwind class strings.
 */
function ClassCopier({ classes, label }: { classes: string; label: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(classes)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center justify-between mb-2">
        <div className="font-semibold text-sm">{label}</div>
        <button
          onClick={handleCopy}
          className="px-3 py-1 text-xs bg-purple1 text-white rounded hover:bg-purple2 transition-colors"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <div className="text-xs text-gray-600 dark:text-gray-400 font-mono bg-gray-50 dark:bg-gray-900 p-2 rounded break-all">
        {classes}
      </div>
    </div>
  )
}

/**
 * Interactive Glåüm design system reference with live Tailwind swatches and
 * copy-to-clipboard helpers for consistent styling.
 */
export default function StyleGuide() {
  // Ensure the playground stays out of search engine indexes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const metaRobots = document.querySelector('meta[name="robots"]')
      if (metaRobots) {
        metaRobots.setAttribute('content', 'noindex, nofollow')
      } else {
        const meta = document.createElement('meta')
        meta.name = 'robots'
        meta.content = 'noindex, nofollow'
        document.head.appendChild(meta)
      }
    }
  }, [])

  const purpleColors = [
    { name: 'Purple 1', color: 'var(--color-purple1)', hex: '#8038f4', tailwind: 'purple1' },
    { name: 'Purple 2', color: 'var(--color-purple2)', hex: '#ac63f4', tailwind: 'purple2' },
    { name: 'Purple 3', color: 'var(--color-purple3)', hex: '#884389', tailwind: 'purple3' },
    { name: 'Purple 4', color: 'var(--color-purple4)', hex: '#7862c3', tailwind: 'purple4' },
  ]

  const exampleClasses = [
    {
      label: 'Background Colors',
      classes: 'bg-purple1 bg-purple2 bg-purple3 bg-purple4',
    },
    {
      label: 'Text Colors',
      classes: 'text-purple1 text-purple2 text-purple3 text-purple4',
    },
    {
      label: 'Border Colors',
      classes: 'border-purple1 border-purple2 border-purple3 border-purple4',
    },
    {
      label: 'Tokyo Dreams Font',
      classes: 'font-TokyoDreams',
    },
    {
      label: 'Gradient Example',
      classes: 'bg-gradient-to-br from-purple1 via-purple2 via-purple3 to-purple4',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="font-TokyoDreams text-5xl md:text-6xl text-purple1 mb-4">
            Tailwind Style Guide
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Live color swatches and class reference for Glåüm design system
          </p>
        </div>

        {/* Purple Color Swatches */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Purple Palette
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {purpleColors.map((color) => (
              <ColorSwatch
                key={color.name}
                name={color.name}
                color={color.color}
                hex={color.hex}
              />
            ))}
          </div>
        </section>

        {/* Tokyo Dreams Font */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Tokyo Dreams Font
          </h2>
          <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Class:</div>
                <div className="font-mono text-sm bg-gray-50 dark:bg-gray-900 p-2 rounded">
                  font-TokyoDreams
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Example:</div>
                <div className="font-TokyoDreams text-4xl text-purple1">
                  Glåüm
                </div>
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Usage:</div>
                <div className="text-base text-gray-700 dark:text-gray-300">
                  Use this font for headers, titles, and special emphasis. It provides a distinctive,
                  playful character to the Glåüm brand.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Class Copier Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Common Tailwind Classes
          </h2>
          <div className="space-y-4">
            {exampleClasses.map((example, index) => (
              <ClassCopier key={index} classes={example.classes} label={example.label} />
            ))}
          </div>
        </section>

        {/* Live Examples */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Live Examples
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Gradient Example */}
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Gradient Background</h3>
              <div className="bg-gradient-to-br from-purple1 via-purple2 via-purple3 to-purple4 h-32 rounded-md flex items-center justify-center">
                <span className="font-TokyoDreams text-white text-xl">Glåüm</span>
              </div>
              <ClassCopier
                classes="bg-gradient-to-br from-purple1 via-purple2 via-purple3 to-purple4"
                label="Classes"
              />
            </div>

            {/* Text Examples */}
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Text Colors</h3>
              <div className="space-y-2">
                <div className="text-purple1 font-semibold">Text Purple 1</div>
                <div className="text-purple2 font-semibold">Text Purple 2</div>
                <div className="text-purple3 font-semibold">Text Purple 3</div>
                <div className="text-purple4 font-semibold">Text Purple 4</div>
              </div>
            </div>

            {/* Button Examples */}
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Button Styles</h3>
              <div className="space-y-3">
                <button className="px-4 py-2 bg-purple1 text-white rounded hover:bg-purple2 transition-colors">
                  Purple 1 Button
                </button>
                <button className="px-4 py-2 bg-purple2 text-white rounded hover:bg-purple3 transition-colors">
                  Purple 2 Button
                </button>
                <button className="px-4 py-2 border-2 border-purple1 text-purple1 rounded hover:bg-purple1 hover:text-white transition-colors">
                  Outline Button
                </button>
              </div>
            </div>

            {/* Typography Example */}
            <div className="p-6 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <h3 className="font-semibold mb-4">Typography with Tokyo Dreams</h3>
              <div className="space-y-2">
                <div className="font-TokyoDreams text-3xl text-purple1">Large Heading</div>
                <div className="font-TokyoDreams text-xl text-purple2">Medium Heading</div>
                <div className="font-TokyoDreams text-base text-purple3">Regular Text</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-200">
            Quick Reference
          </h2>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-sm">
              <div>
                <div className="font-semibold mb-2">Colors:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>bg-purple1, text-purple1, border-purple1</div>
                  <div>bg-purple2, text-purple2, border-purple2</div>
                  <div>bg-purple3, text-purple3, border-purple3</div>
                  <div>bg-purple4, text-purple4, border-purple4</div>
                </div>
              </div>
              <div>
                <div className="font-semibold mb-2">Font:</div>
                <div className="space-y-1 text-gray-700 dark:text-gray-300">
                  <div>font-TokyoDreams</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

