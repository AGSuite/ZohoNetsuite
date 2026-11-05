/* eslint-disable @typescript-eslint/no-explicit-any */
import { createImageUrlBuilder } from '@sanity/image-url'

import { odooDataset, odooProjectId } from '../env'

const imageBuilder = createImageUrlBuilder({
    projectId: odooProjectId,
    dataset: odooDataset,
})

export const urlForOdooImage = (source: any): string => {
    if (!source?.asset) return ''
    return imageBuilder.image(source).url()
}
