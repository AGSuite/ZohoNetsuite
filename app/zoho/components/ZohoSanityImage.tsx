'use client'
import { urlForZohoImage } from '../../../sanity/lib/zohoImage'
import { CSSProperties } from 'react'

interface ZohoSanityImageProps {
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

export default function ZohoSanityImage({
    image,
    alt,
    fill = false,
    className = '',
    priority = false,
    fallback = '/images/placeholder.webp',
    style,
    width,
    height,
}: ZohoSanityImageProps) {
    const src = urlForZohoImage(image) || fallback

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
