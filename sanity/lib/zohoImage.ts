import imageUrlBuilder from '@sanity/image-url'
import { zohoDataset, zohoProjectId } from '../env'

const imageBuilder = imageUrlBuilder({
    projectId: zohoProjectId || '',
    dataset: zohoDataset || '',
})

export const urlForZohoImage = (source: any): string => {
    if (!source || !source.asset) return ''
    return imageBuilder?.image(source).url() ?? ''
}
