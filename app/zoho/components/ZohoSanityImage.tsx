import Image from 'next/image'
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
    sizes,
    fallback = '/images/placeholder.webp',
    style,
    width,
    height,
}: ZohoSanityImageProps) {
    const src = urlForZohoImage(image) || fallback

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
            style={{ 
                objectFit: fill ? 'cover' : undefined,
                ...style 
            }}
        />
    )
}




