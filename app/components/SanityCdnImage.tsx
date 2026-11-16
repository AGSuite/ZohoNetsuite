/* eslint-disable @next/next/no-img-element */

import type { CSSProperties } from 'react'

const DEFAULT_WIDTHS = [160, 320, 480, 640, 800, 960, 1200, 1600, 1920]

interface SanityCdnImageProps {
    src: string
    alt: string
    fill?: boolean
    className?: string
    priority?: boolean
    sizes?: string
    style?: CSSProperties
    width?: number
    height?: number
    quality?: number
    widths?: number[]
}

function isSanityImageUrl(src: string): boolean {
    try {
        return new URL(src).hostname === 'cdn.sanity.io'
    } catch {
        return false
    }
}

function transformedSanityUrl(src: string, width: number, quality: number): string {
    if (!isSanityImageUrl(src)) return src

    const url = new URL(src)
    url.searchParams.set('w', String(Math.round(width)))
    url.searchParams.set('q', String(Math.round(quality)))
    url.searchParams.set('fit', 'max')
    url.searchParams.set('auto', 'format')
    return url.toString()
}

export default function SanityCdnImage({
    src,
    alt,
    fill = false,
    className = '',
    priority = false,
    sizes,
    style,
    width,
    height,
    quality = 85,
    widths = DEFAULT_WIDTHS,
}: SanityCdnImageProps) {
    const responsiveWidths = Array.from(new Set(widths))
        .filter((candidate) => Number.isInteger(candidate) && candidate > 0)
        .sort((a, b) => a - b)
    const fallbackWidth = responsiveWidths.at(-1) ?? 1200
    const isSanityImage = isSanityImageUrl(src)

    return (
        <img
            src={isSanityImage ? transformedSanityUrl(src, fallbackWidth, quality) : src}
            srcSet={isSanityImage
                ? responsiveWidths
                    .map((candidate) => `${transformedSanityUrl(src, candidate, quality)} ${candidate}w`)
                    .join(', ')
                : undefined}
            sizes={isSanityImage ? (sizes || (fill ? '100vw' : undefined)) : undefined}
            alt={alt}
            width={!fill ? width : undefined}
            height={!fill ? height : undefined}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            decoding="async"
            className={`${fill ? 'absolute inset-0 h-full w-full' : ''} ${className}`.trim()}
            style={style}
        />
    )
}
