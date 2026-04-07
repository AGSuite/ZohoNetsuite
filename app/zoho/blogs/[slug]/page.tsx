import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getZohoPostBySlug } from '../../../../sanity/lib/zohoFetch'
import { urlForZohoImage } from '../../../../sanity/lib/zohoImage'
import ZohoBlogClient from '../components/ZohoBlogClient'

type Props = {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getZohoPostBySlug(resolvedParams.slug)
    if (!post) return { title: 'Post Not Found | AGSuite' }
    return {
        title: `${post.title} | AGSuite Technologies`,
        description: post.excerpt || "Read the latest Zoho insights from AGSuite Technologies.",
    }
}

function readingTime(body: any[]): number {
    if (!body) return 1;
    const text = body.map((b: any) => b.children?.map((c: any) => c.text).join(' ')).join(' ');
    return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

export default async function ZohoBlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getZohoPostBySlug(resolvedParams.slug)
    if (!post) notFound()

    const featuredImageUrl = urlForZohoImage(post.mainImage)
    const mins = readingTime(post.body)

    return (
        <ZohoBlogClient
            post={post}
            featuredImageUrl={featuredImageUrl}
            mins={mins}
        />
    )
}
