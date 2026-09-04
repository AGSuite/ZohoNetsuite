import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPostBySlug } from '../../../../sanity/lib/fetch'
import { urlForImage } from '../../../../sanity/lib/image'
import NetSuiteBlogClient from '../components/NetSuiteBlogClient'

type Props = {
    params: Promise<{ slug: string }>
}

// Specific SEO configurations by slug (can be added here or in Sanity CMS)
const customBlogSeoBySlug: Record<string, { title?: string; description?: string; keywords?: string[] }> = {
    'the-roi-of-accounting-automation-why-modern-enterprises-are-making-the-switch': {
        title: 'The Modern CFO’s Advantage: Why NetSuite Accounting Is the Future of Finance',
        description: 'Discover how NetSuite Accounting transforms modern finance operations, accelerates month-end closes, and turns financial data into strategic growth.',
        keywords: ['NetSuite Accounting', 'accounting automation', 'cloud ERP for CFOs', 'NetSuite finance ROI', 'financial automation'],
    },
    'sap-ecc-to-oracle-netsuite-migration': {
        title: 'SAP ECC to Oracle NetSuite Migration: Complete Guide',
        description: 'Explore the SAP ECC to Oracle NetSuite migration roadmap, data migration, finance transformation, cutover planning, and best practices.',
        keywords: ['SAP ECC to NetSuite migration', 'SAP ECC migration', 'Oracle NetSuite migration', 'ERP migration', 'SAP ECC replacement'],
    },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = await getPostBySlug(slug);
    if (!post) return { title: 'Post Not Found | AGSuite' };

    const customSeo = customBlogSeoBySlug[slug];
    const rawTitle = customSeo?.title || post.metaTitle || post.title;
    const title = rawTitle.includes('AGSuite') ? rawTitle : `${rawTitle} | AGSuite Technologies`;
    const description = customSeo?.description || post.metaDescription || post.excerpt || "Read the latest Oracle NetSuite insights from AGSuite Technologies.";
    const keywords = customSeo?.keywords || post.keywords || ['NetSuite', 'Oracle NetSuite', 'ERP', 'AGSuite Technologies'];
    const url = `https://www.agsuitetech.com/netsuite/blogs/${slug}`;
    const imageUrl = post.mainImage ? urlForImage(post.mainImage) : undefined;

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

// Estimate reading time
function readingTime(body: any[]): number {
    if (!body) return 1;
    const text = body.map((b: any) => b.children?.map((c: any) => c.text).join(' ')).join(' ');
    return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
}

export default async function BlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getPostBySlug(resolvedParams.slug);
    if (!post) notFound();

    const featuredImageUrl = urlForImage(post.mainImage);
    const mins = readingTime(post.body);
    const customSeo = customBlogSeoBySlug[resolvedParams.slug];
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
            "@id": `https://www.agsuitetech.com/netsuite/blogs/${resolvedParams.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <NetSuiteBlogClient
                post={post}
                featuredImageUrl={featuredImageUrl}
                mins={mins}
            />
        </>
    );
}
