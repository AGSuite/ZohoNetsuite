import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '../../../../sanity/lib/fetch'
import { urlForImage } from '../../../../sanity/lib/image'
import NetSuiteBlogClient from '../components/NetSuiteBlogClient'

type Props = {
    params: Promise<{ slug: string }>
}

const customTitleBySlug: Record<string, string> = {
    'the-roi-of-accounting-automation-why-modern-enterprises-are-making-the-switch':
        'The Modern CFO’s Advantage: Why NetSuite Accounting Is the Future of Finance',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug)
    if (!post) return { title: 'Post Not Found | AGSuite' }
    const title = customTitleBySlug[resolvedParams.slug] || post.title;
    return {
        title: `${title} | AGSuite Technologies`,
        description: post.excerpt || "Read the latest insights from AGSuite Technologies.",
    }
}

// Estimate reading time
function readingTime(body: any[]): number {
    if (!body) return 1;
    const text = body.map((b: any) => b.children?.map((c: any) => c.text).join(' ')).join(' ');
    return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug)
    if (!post) notFound()

    const featuredImageUrl = urlForImage(post.mainImage)
    const mins = readingTime(post.body)

    return (
        <NetSuiteBlogClient
            post={post}
            featuredImageUrl={featuredImageUrl}
            mins={mins}
        />
    )
}
