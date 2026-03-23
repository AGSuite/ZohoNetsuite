import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { Calendar, User, ArrowLeft, Tag, Clock, ChevronRight } from 'lucide-react'

import { getZohoPostBySlug } from '../../../../sanity/lib/zohoFetch'
import { urlForZohoImage } from '../../../../sanity/lib/zohoImage'
import ZohoContactForm from '../../components/ZohoContactForm'

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
        <article className="min-h-screen bg-slate-50 font-['DM_Sans',sans-serif]">
            <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000814 0%, #001535 50%, #002a6b 100%)' }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-40 flex flex-col items-center text-center">
                    <nav className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] mb-8">
                        <Link href="/zoho" className="text-blue-400 hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-white/30" />
                        <Link href="/zoho/blogs" className="text-blue-400 hover:text-white transition-colors">Blogs</Link>
                        <ChevronRight className="w-3 h-3 text-white/30" />
                        <span className="text-white/50 line-clamp-1 max-w-[200px]">{post.title}</span>
                    </nav>
                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 mb-6">
                            {post.categories.map((cat: string) => (
                                <span key={cat} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white px-5 py-2 rounded-full text-[10px] font-medium uppercase tracking-widest backdrop-blur-sm">
                                    <Tag className="w-3 h-3" /> {cat}
                                </span>
                            ))}
                        </div>
                    )}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight shadow-sm max-w-5xl leading-tight text-white pb-2 mb-6">
                        {post.title}
                    </h1>
                    <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-medium uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-2 text-blue-100"><Calendar className="w-4 h-4 text-blue-300" />{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        {post.author && <span className="flex items-center gap-2 text-blue-100"><User className="w-4 h-4 text-blue-300" /> {post.author}</span>}
                        <span className="flex items-center gap-2 text-blue-100/70"><Clock className="w-4 h-4 text-blue-300/70" /> {mins} min read</span>
                    </div>
                </div>
            </div>

            {featuredImageUrl && (
                <div className="relative z-20 max-w-5xl mx-auto px-6 -mt-32 mb-16">
                    <div className="w-full bg-slate-200 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[21/9]">
                        <img src={featuredImageUrl} alt={post.title} className="w-full h-full object-cover object-center" style={{ display: 'block' }} />
                    </div>
                </div>
            )}

            <div className="relative">
                <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-blue-50/60 to-transparent pointer-events-none" />
                <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">
                    {post.excerpt && (
                        <div className="relative mb-16 rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe, #e0f2fe)' }}>
                            <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: 'linear-gradient(180deg, #1e3a8a, #2563eb, #0ea5e9)' }} />
                            <div className="px-8 py-8 pl-12">
                                <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-3 flex items-center gap-2"><span className="w-8 h-[2px] bg-blue-600 inline-block" /> Quick Summary</p>
                                <p className="text-slate-700 text-xl md:text-2xl leading-relaxed font-semibold italic">&ldquo;{post.excerpt}&rdquo;</p>
                            </div>
                        </div>
                    )}

                    <div className="prose max-w-none text-slate-700 font-medium">
                        <PortableText value={post.body} components={{
                            block: {
                                h2: ({ children }) => <h2 className="text-3xl font-black mt-16 mb-6 text-[#001f5c] border-l-4 border-blue-500 pl-4 uppercase tracking-snug">{children}</h2>,
                                h3: ({ children }) => <h3 className="text-xl font-bold mt-12 mb-4 text-blue-900 border-l-2 border-blue-300 pl-3 uppercase">{children}</h3>,
                                normal: ({ children }) => <p className="text-lg leading-[1.9] mb-8">{children}</p>,
                            },
                        }} />
                    </div>

                    <div className="mt-12"><Link href="/zoho/blogs" className="inline-flex items-center gap-3 text-[#001f5c] font-black uppercase tracking-widest text-xs hover:-translate-x-1 transition-all group"><ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to All Articles</Link></div>
                </div>
                <div id="contact"><ZohoContactForm /></div>
            </div>
        </article>
    )
}
