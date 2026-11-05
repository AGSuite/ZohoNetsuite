import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

import { odooDataset, odooProjectId } from './sanity/env'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
    name: 'odoo-studio',
    title: 'Odoo CMS',
    basePath: '/odoo/studio',
    projectId: odooProjectId,
    dataset: odooDataset,
    schema,
    plugins: [structureTool()],
})
