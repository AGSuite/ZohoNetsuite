/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getOdooPostBySlug } from '../../../../sanity/lib/odooFetch'
import { urlForOdooImage } from '../../../../sanity/lib/odooImage'
import OdooBlogClient from '../components/OdooBlogClient'

type Props = {
    params: Promise<{ slug: string }>
}

// Specific SEO configurations for Odoo blogs by slug (can also be configured via Sanity CMS)
const customOdooBlogSeoBySlug: Record<string, { title?: string; description?: string; keywords?: string[] }> = {};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;
    const post = await getOdooPostBySlug(slug);
    if (!post) return { title: 'Post Not Found | AGSuite' };

    const customSeo = customOdooBlogSeoBySlug[slug];
    const rawTitle = customSeo?.title || post.metaTitle || post.title;
    const title = rawTitle.includes('AGSuite') ? rawTitle : `${rawTitle} | AGSuite Technologies`;
    const description = customSeo?.description || post.metaDescription || post.excerpt || "Read the latest Odoo insights from AGSuite Technologies.";
    const keywords = customSeo?.keywords || post.keywords || ['Odoo', 'Odoo CRM', 'Odoo ERP', 'Odoo Partner', 'AGSuite Technologies'];
    const url = `https://www.agsuitetech.com/odoo/blogs/${slug}`;
    const imageUrl = post.mainImage ? urlForOdooImage(post.mainImage) : undefined;

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

export default async function OdooBlogPostPage({ params }: Props) {
    const resolvedParams = await params;
    const post = await getOdooPostBySlug(resolvedParams.slug);
    if (!post) notFound();

    const featuredImageUrl = urlForOdooImage(post.mainImage);
    const mins = readingTime(post.body);
    const customSeo = customOdooBlogSeoBySlug[resolvedParams.slug];
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
            "@id": `https://www.agsuitetech.com/odoo/blogs/${resolvedParams.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <OdooBlogClient
                post={post}
                featuredImageUrl={featuredImageUrl}
                mins={mins}
            />
        </>
    );
}
