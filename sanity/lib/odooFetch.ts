import { odooDataset, odooProjectId } from '../env'
import { odooClient } from './odooClient'
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from './queries'

export async function getOdooPosts() {
    if (!odooClient || !odooProjectId || !odooDataset) return []

    return odooClient.fetch(POSTS_QUERY, {}, {
        next: { revalidate: 3600 },
    })
}

export async function getOdooPostBySlug(slug: string) {
    if (!odooClient || !odooProjectId || !odooDataset) return null

    return odooClient.fetch(POST_BY_SLUG_QUERY, { slug }, {
        next: { revalidate: 3600 },
    })
}
