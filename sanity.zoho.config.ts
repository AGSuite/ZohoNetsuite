import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { apiVersion, zohoDataset, zohoProjectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
    name: 'zoho-studio',
    title: 'Zoho CMS',
    basePath: '/zoho/studio',
    projectId: zohoProjectId,
    dataset: zohoDataset,
    schema,
    plugins: [
        structureTool(),
    ],
})
