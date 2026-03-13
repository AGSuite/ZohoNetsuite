import { client } from './client'
import { POSTS_QUERY, POST_BY_SLUG_QUERY } from './queries'
import { projectId, dataset } from '../env'

export async function getPosts() {
    if (!projectId || !dataset) {
        return []
    }
    return client.fetch(POSTS_QUERY)
}

export async function getPostBySlug(slug: string) {
    if (!projectId || !dataset) {
        return null
    }
    return client.fetch(POST_BY_SLUG_QUERY, { slug })
}
