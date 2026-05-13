import imageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from '../env'

const imageBuilder = imageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
})

export const urlForImage = (source: any): string => {
    if (!source || !source.asset) return ''
    // Return plain URL without extra Sanity optimization params.
    // Next.js Image component handles its own optimization via /_next/image.
    return imageBuilder?.image(source).url() ?? ''
}
