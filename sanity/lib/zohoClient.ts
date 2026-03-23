import { createClient } from 'next-sanity'
import { apiVersion, zohoDataset, zohoProjectId, useCdn } from '../env'

export const zohoClient = createClient({
    apiVersion,
    dataset: zohoDataset,
    projectId: zohoProjectId,
    useCdn,
})
