'use client'

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.zoho.config'

export default function StudioPage() {
    return <NextStudio config={config} />
}
