import { createClient } from 'next-sanity'

import { apiVersion, odooDataset, odooProjectId, useCdn } from '../env'

export const odooClient = createClient({
    apiVersion,
    dataset: odooDataset,
    projectId: odooProjectId,
    useCdn,
})
