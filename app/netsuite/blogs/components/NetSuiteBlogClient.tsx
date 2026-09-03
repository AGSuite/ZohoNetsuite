"use client";

import React from 'react';
import Link from 'next/link';
import { Calendar, User, Tag, Clock, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '../../../../sanity/lib/image';
import CodeBlock from '@/app/components/blog/CodeBlock';

export default function NetSuiteBlogClient({ post, featuredImageUrl, mins }: any) {

    const sanitizedBody = React.useMemo(() => {
        if (!Array.isArray(post?.body)) return post?.body;
        return post.body.filter((block: any) => {
            if (block._type !== 'block' || !block.children) return true;
            const text = block.children.map((c: any) => c.text || '').join(' ').toLowerCase();
            if (text.includes('ready to supercharge')) return false;
            if (text.includes('explore oracle netsuite with agsuite')) return false;
            if (text.includes('explore zoho commerce with agsuite')) return false;
            if (text.includes('agsuitetech.com/contact')) return false;
            return true;
        });
    }, [post?.body]);

    const bodyComponents = {
        types: {
            image: ({ value }: any) => {
                if (!value?.asset?._ref) return null
                const inlineImgUrl = urlForImage(value)
                if (!inlineImgUrl) return null
                return (
                    <div className="my-8 rounded-2xl overflow-hidden shadow-md border border-slate-200">
                        <img
                            src={inlineImgUrl}
                            alt={value.alt || "article illustration"}
                            className="w-full h-auto"
                            style={{ maxHeight: '460px', objectFit: 'cover', display: 'block' }}
                            loading="lazy"
                        />
                        {value.alt && (
                            <p className="text-center text-xs text-slate-500 font-medium py-2 bg-slate-50 border-t border-slate-100">{value.alt}</p>
                        )}
                    </div>
                )
            },
            codeBlock: ({ value }: any) => <CodeBlock value={value} />,
            code: ({ value }: any) => <CodeBlock value={value} />,
        },
        block: {
            h2: ({ children }: any) => (
                <div className="pt-8 mt-10 first:mt-0 first:pt-0 first:border-0 border-t border-slate-200/90 mb-4">
                    <h2 className="text-xl sm:text-2xl md:text-[26px] font-bold tracking-tight leading-snug bg-gradient-to-r from-[#000814] via-[#001f5c] to-[#1e40af] bg-clip-text text-transparent">
                        {children}
                    </h2>
                </div>
            ),
            h3: ({ children }: any) => (
                <h3 className="text-base sm:text-lg md:text-xl font-bold mt-6 mb-3 tracking-tight flex items-center gap-2.5">
                    <span className="w-3.5 h-[2px] bg-blue-600 rounded-full inline-block flex-shrink-0" />
                    <span className="bg-gradient-to-r from-[#000814] via-[#001f5c] to-[#1e40af] bg-clip-text text-transparent">
                        {children}
                    </span>
                </h3>
            ),
            h4: ({ children }: any) => (
                <h4 className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mt-5 mb-2 uppercase tracking-wider">
                    {children}
                </h4>
            ),
            blockquote: ({ children }: any) => (
                <blockquote className="my-6 py-4 px-5 rounded-xl bg-slate-50 border-l-4 border-blue-600 text-slate-700 italic text-[15px] leading-relaxed">
                    <p className="m-0 font-medium">{children}</p>
                </blockquote>
            ),
            normal: ({ value, children }: any) => {
                const rawText = value?.children?.map((c: any) => c.text || '').join('') || '';
                if (rawText.trim().startsWith('<') && (rawText.includes('</') || rawText.includes('/>') || rawText.includes('<table') || rawText.includes('<div') || rawText.includes('<article') || rawText.includes('<p') || rawText.includes('<h1') || rawText.includes('<h2'))) {
                    return (
                        <div
                            className="blog-html-content text-slate-600 text-[15px] sm:text-base leading-relaxed my-4"
                            dangerouslySetInnerHTML={{ __html: rawText }}
                        />
                    );
                }
                return (
                    <p className="text-slate-600 text-[15px] sm:text-base leading-relaxed mb-4 font-normal">
                        {children}
                    </p>
                );
            },
        },
        list: {
            bullet: ({ children }: any) => <ul className="list-disc pl-5 mb-4 space-y-1.5 text-slate-600 text-[15px] sm:text-base leading-relaxed">{children}</ul>,
            number: ({ children }: any) => <ol className="list-decimal pl-5 mb-4 space-y-1.5 text-slate-600 text-[15px] sm:text-base leading-relaxed">{children}</ol>,
        },
        listItem: {
            bullet: ({ children }: any) => <li className="pl-1">{children}</li>,
            number: ({ children }: any) => <li className="pl-1">{children}</li>,
        },
        marks: {
            link: ({ value, children }: any) => {
                let href = value?.href || ''
                if (href.includes('agsuitetech.com/contact') || href === '/contact' || href === '/contact/' || href === 'contact' || href === 'contact/') {
                    href = '/netsuite/contact'
                }
                const isInternal = href.startsWith('/') || href.startsWith('#')
                return (
                    <Link
                        href={href}
                        target={isInternal ? undefined : '_blank'}
                        rel={isInternal ? undefined : 'noindex nofollow'}
                        className="text-blue-600 hover:text-blue-800 underline underline-offset-2 font-medium"
                    >
                        {children}
                    </Link>
                )
            },
            strong: ({ children }: any) => <strong className="font-semibold text-slate-900">{children}</strong>,
            code: ({ children }: any) => (
                <code className="px-1.5 py-0.5 rounded bg-slate-100 border border-slate-200 text-pink-600 font-mono text-[13px] font-semibold">
                    {children}
                </code>
            ),
        }
    };

    return (
        <article className="min-h-screen relative font-['DM_Sans',sans-serif] bg-[#fafafa]">
            {/* ─── BACKGROUND DESIGN ─── */}
            <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    backgroundImage: `
                        repeating-radial-gradient(
                            circle at 0 0,
                            rgba(0,0,0,0.06) 0 0.7px,
                            transparent 0.7px 6px
                        ),
                        repeating-radial-gradient(
                            circle at 100% 100%,
                            rgba(0,0,0,0.03) 0 0.6px,
                            transparent 0.6px 5px
                        )
                    `,
                    mixBlendMode: "multiply",
                }}
            />

            {/* ─── HERO ─── */}
            <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #000814 0%, #001535 50%, #002a6b 100%)' }}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-28 sm:pt-28 sm:pb-36 flex flex-col items-center text-center">
                    <nav className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] mb-7">
                        <Link href="/netsuite" className="text-blue-400 hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-white/30" />
                        <Link href="/netsuite/blogs" className="text-blue-400 hover:text-white transition-colors">Blogs</Link>
                        <ChevronRight className="w-3 h-3 text-white/30" />
                        <span className="text-white/50 line-clamp-1 max-w-[200px]">{post.title}</span>
                    </nav>

                    {post.categories && post.categories.length > 0 && (
                        <div className="flex flex-wrap justify-center gap-2 mb-5">
                            {post.categories.map((cat: string) => (
                                <span key={cat} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white px-4 py-1.5 rounded-full text-[10px] font-medium uppercase tracking-widest backdrop-blur-sm">
                                    <Tag className="w-3 h-3" /> {cat}
                                </span>
                            ))}
                        </div>
                    )}

                    <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight shadow-sm max-w-4xl leading-tight text-white pb-2 mb-6">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-medium uppercase tracking-[0.2em]">
                        <span className="flex items-center gap-2 text-blue-100">
                            <Calendar className="w-4 h-4 text-blue-300" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </span>
                        {post.author && (
                            <span className="flex items-center gap-2 text-blue-100">
                                <User className="w-4 h-4 text-blue-300" /> {post.author}
                            </span>
                        )}
                        <span className="flex items-center gap-2 text-blue-100/70">
                            <Clock className="w-4 h-4 text-blue-300/70" /> {mins} min read
                        </span>
                    </div>
                </div>
            </div>

            {/* ─── BANNER IMAGE (centered, half overlapping) ─── */}
            {featuredImageUrl && (
                <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-28 mb-12 sm:mb-16">
                    <div className="w-full bg-slate-200 rounded-2xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-4 sm:border-8 border-white aspect-[16/9] sm:aspect-[16/7.5]">
                        <img
                            src={featuredImageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover object-center"
                            style={{ display: 'block' }}
                        />
                    </div>
                </div>
            )}

            {/* ─── CONTENT WRAPPER ─── */}
            <div className="relative z-10 w-full pb-14">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white shadow-sm border border-slate-200/80 rounded-2xl overflow-hidden p-6 sm:p-10 md:p-14">
                        {/* ── MAIN BODY CONTENT ── */}
                        <div className="text-slate-700">
                            <PortableText value={sanitizedBody} components={bodyComponents} />
                        </div>

                        {/* ── READY TO SUPERCHARGE CALLOUT CARD (DARK WITH BG IMAGE) ── */}
                        <div
                            className="my-10 relative overflow-hidden rounded-2xl sm:rounded-3xl border border-white/15 shadow-2xl p-8 sm:p-10 text-white bg-cover bg-center"
                            style={{ backgroundImage: "url('/images/people/threeteam.webp')" }}
                        >
                            {/* Dark gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#000814]/95 via-[#001535]/90 to-[#002a6b]/85 pointer-events-none" />
                            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/15 rounded-full blur-[80px] pointer-events-none" />

                            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                <div className="max-w-xl">
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white mb-2 leading-snug">
                                        Ready to Supercharge Your Operations?
                                    </h3>
                                    <p className="text-blue-100/85 text-sm sm:text-base leading-relaxed m-0 font-normal">
                                        Explore Oracle NetSuite with AGSuite
                                    </p>
                                </div>

                                <div className="shrink-0 flex items-center">
                                    <Link
                                        href="/netsuite/contact"
                                        className="inline-flex items-center justify-center gap-2.5 bg-slate-950/90 hover:bg-black text-white font-bold text-sm px-8 py-3.5 rounded-xl transition-all border border-white/20 shadow-xl hover:border-white/40 hover:-translate-y-0.5 active:scale-95"
                                    >
                                        Contact Us <ArrowRight className="w-4 h-4 text-blue-400" />
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* ── EXCERPT HIGHLIGHT BOX (BOTTOM SUMMARY) ── */}
                        {post.excerpt && (
                            <div className="relative mt-10 mb-8 rounded-xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-indigo-50/30 to-slate-50/50 p-5 sm:p-6">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="w-3 h-[2px] bg-blue-600 rounded-full inline-block" />
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">Quick Summary</span>
                                </div>
                                <p className="text-slate-700 text-sm sm:text-[15px] leading-relaxed italic m-0">
                                    &ldquo;{post.excerpt}&rdquo;
                                </p>
                            </div>
                        )}

                        {/* ── TAGS FOOTER ── */}
                        {post.categories && post.categories.length > 0 && (
                            <div className="mt-10 pt-6 border-t border-slate-200">
                                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3">Filed Under</p>
                                <div className="flex flex-wrap gap-2">
                                    {post.categories.map((cat: string) => (
                                        <span key={cat} className="inline-flex items-center gap-1 bg-slate-100 border border-slate-200 text-slate-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors cursor-default">
                                            <Tag className="w-3 h-3 text-slate-400" /> {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── BACK TO ALL ARTICLES BUTTON ── */}
                        <div className="mt-10 pt-6 border-t border-slate-100 flex items-center justify-between">
                            <Link
                                href="/netsuite/blogs"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-[#001f5c] font-semibold text-xs transition-all shadow-sm hover:shadow hover:-translate-x-0.5 active:scale-95"
                            >
                                <ArrowLeft className="w-4 h-4 text-slate-500" /> Back to All Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}




