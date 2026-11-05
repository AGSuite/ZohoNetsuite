'use client'

import { NextStudio } from 'next-sanity/studio'

import config from '../../../../sanity.odoo.config'

export default function OdooStudioPage() {
    return <NextStudio config={config} />
}
