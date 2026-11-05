/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'
import type { CSSProperties } from 'react'

import { urlForOdooImage } from '../../../sanity/lib/odooImage'

interface OdooSanityImageProps {
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

export default function OdooSanityImage({
    image,
    alt,
    fill = false,
    className = '',
    priority = false,
    sizes,
    fallback = '/images/placeholder.webp',
    style,
    width,
    height,
}: OdooSanityImageProps) {
    const src = urlForOdooImage(image) || fallback

    return (
        <Image
            src={src}
            alt={alt}
            fill={fill}
            width={!fill ? (width || 800) : undefined}
            height={!fill ? (height || 600) : undefined}
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            className={className}
            sizes={sizes || (fill ? '100vw' : undefined)}
            style={{ objectFit: fill ? 'cover' : undefined, ...style }}
        />
    )
}
