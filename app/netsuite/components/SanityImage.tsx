'use client'
/**
 * SanityImage — Renders images from Sanity CDN bypassing Next.js image optimization.
 *
 * WHY: On networks using NAT64 (IPv4-mapped IPv6, prefix 64:ff9b::),
 * cdn.sanity.io resolves to an address Next.js treats as "private IP" and
 * blocks the request entirely as SSRF protection. Using a plain <img> tag
 * means the browser fetches the image directly from the CDN — no SSRF issue.
 *
 * Sanity's CDN (backed by Imgix) already handles its own image optimization so
 * no quality is lost by skipping Next.js optimization.
 */
import { urlForImage } from '../../../sanity/lib/image'
import { CSSProperties } from 'react'

interface SanityImageProps {
    image: any
    alt: string
    fill?: boolean
    className?: string
    priority?: boolean
    sizes?: string
    fallback?: string
    style?: CSSProperties
    width?: number
    height?: number
}

export default function SanityImage({
    image,
    alt,
    fill = false,
    className = '',
    priority = false,
    fallback = '/images/placeholder.webp',
    style,
    width,
    height,
}: SanityImageProps) {
    const src = urlForImage(image) || fallback

    if (fill) {
        return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
                src={src}
                alt={alt}
                loading={priority ? 'eager' : 'lazy'}
                className={`absolute inset-0 w-full h-full ${className}`}
                style={{ objectFit: 'cover', ...style }}
            />
        )
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            className={className}
            style={style}
        />
    )
}




