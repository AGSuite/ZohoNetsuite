import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getZohoPostBySlug } from '../../../../sanity/lib/zohoFetch'
import { urlForZohoImage } from '../../../../sanity/lib/zohoImage'
import ZohoBlogClient from '../components/ZohoBlogClient'

type Props = {
    params: Promise<{ slug: string }>
}

// Specific SEO configurations for Zoho blogs by slug (can also be configured via Sanity CMS)
const customZohoBlogSeoBySlug: Record<string, { title?: string; description?: string; keywords?: string[] }> = {};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = await getZohoPostBySlug(slug);
    if (!post) return { title: 'Post Not Found | AGSuite' };

    const customSeo = customZohoBlogSeoBySlug[slug];
    const rawTitle = customSeo?.title || post.metaTitle || post.title;
    const title = rawTitle.includes('AGSuite') ? rawTitle : `${rawTitle} | AGSuite Technologies`;
    const description = customSeo?.description || post.metaDescription || post.excerpt || "Read the latest Zoho insights from AGSuite Technologies.";
    const keywords = customSeo?.keywords || post.keywords || ['Zoho', 'Zoho CRM', 'Zoho ERP', 'Zoho Partner', 'AGSuite Technologies'];
    const url = `https://www.agsuitetech.com/zoho/blogs/${slug}`;
    const imageUrl = post.mainImage ? urlForZohoImage(post.mainImage) : undefined;

    return {
        title,
        description,
        keywords: keywords.length > 0 ? keywords : undefined,
        alternates: {
            canonical: url,
        },
        openGraph: {
            title,
            description,
            url,
            siteName: 'AGSuite Technologies',
            type: 'article',
            publishedTime: post.publishedAt,
            authors: post.author ? [post.author] : undefined,
            images: imageUrl ? [{ url: imageUrl, alt: title }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: imageUrl ? [imageUrl] : undefined,
        },
    };
}

function readingTime(body: any[]): number {
    if (!body) return 1;
    const text = body.map((b: any) => b.children?.map((c: any) => c.text).join(' ')).join(' ');
    return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

export default async function ZohoBlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getZohoPostBySlug(resolvedParams.slug);
    if (!post) notFound();

    const featuredImageUrl = urlForZohoImage(post.mainImage);
    const mins = readingTime(post.body);
    const customSeo = customZohoBlogSeoBySlug[resolvedParams.slug];
    const title = customSeo?.title || post.metaTitle || post.title;
    const description = customSeo?.description || post.metaDescription || post.excerpt;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": title,
        "description": description,
        "image": featuredImageUrl ? [featuredImageUrl] : undefined,
        "datePublished": post.publishedAt || post._createdAt,
        "dateModified": post._updatedAt || post.publishedAt || post._createdAt,
        "author": {
            "@type": "Person",
            "name": post.author || "AGSuite Technologies"
        },
        "publisher": {
            "@type": "Organization",
            "name": "AGSuite Technologies",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.agsuitetech.com/logo.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://www.agsuitetech.com/zoho/blogs/${resolvedParams.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ZohoBlogClient
                post={post}
                featuredImageUrl={featuredImageUrl}
                mins={mins}
            />
        </>
    );
}
