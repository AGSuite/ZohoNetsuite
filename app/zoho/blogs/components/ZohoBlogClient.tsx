"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, Tag, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import dynamic from 'next/dynamic';

const ZohoContactForm = dynamic(() => import('../../components/ZohoContactForm'), { ssr: false });

import { urlForZohoImage } from '../../../../sanity/lib/zohoImage';

export default function ZohoBlogClient({ post, featuredImageUrl, mins }: any) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    const bodyComponents = {
        block: {
            h2: ({ children }: any) => <h2 className="text-3xl font-black mt-16 mb-6 text-[#001f5c] border-l-4 border-blue-500 pl-4 uppercase tracking-snug">{children}</h2>,
            h3: ({ children }: any) => <h3 className="text-xl font-bold mt-12 mb-4 text-blue-900 border-l-2 border-blue-300 pl-3 uppercase">{children}</h3>,
            normal: ({ children }: any) => <p className="text-lg leading-[1.9] mb-8">{children}</p>,
        },
        types: {
            image: ({ value }: any) => {
                if (!value?.asset?._ref) return null
                const inlineImgUrl = urlForZohoImage(value)
                if (!inlineImgUrl) return null
                return (
                    <div className="my-16 -mx-6 md:-mx-20 rounded-3xl overflow-hidden shadow-2xl" style={{ border: '4px solid white' }}>
                        <img
                            src={inlineImgUrl}
                            alt={value.alt || "article illustration"}
                            className="w-full h-auto"
                            style={{ maxHeight: '500px', objectFit: 'cover', display: 'block' }}
                            loading="lazy"
                        />
                        {value.alt && (
                            <p className="text-center text-xs text-slate-400 font-bold uppercase tracking-widest py-3 bg-slate-50">{value.alt}</p>
                        )}
                    </div>
                )
            }
        }
    };

    const cardRadius = useTransform(scrollYProgress, [0.3, 0.95], ["0px", "72px"]);
    const cardMargin = useTransform(scrollYProgress, [0.3, 0.95], ["0px", "120px"]);
    const cardScale = useTransform(scrollYProgress, [0.3, 0.95], [1, 0.975]);

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

                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-36 pb-48 flex flex-col items-center text-center">
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
                <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-16 -mt-36 mb-16">
                    <div className="w-full bg-slate-200 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-[16/7.5]">
                        <img
                            src={featuredImageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover object-center"
                            style={{ display: 'block' }}
                        />
                    </div>
                </div>
            )}

            {/* ─── CONTENT WRAPPER WITH SCROLL ANIMATION ─── */}
            <div ref={containerRef} className="relative z-10 w-full">
                <motion.div
                    style={{
                        borderRadius: cardRadius,
                        margin: cardMargin,
                        scale: cardScale,
                    }}
                    className="bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative"
                >
                    <div className="max-w-5xl mx-auto px-6 py-16">
                        {/* ── EXCERPT HIGHLIGHT BOX ── */}
                        {post.excerpt && (
                            <div className="relative mb-16 rounded-3xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #eff6ff, #dbeafe, #e0f2fe)' }}>
                                <div className="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-3xl" style={{ background: 'linear-gradient(180deg, #1e3a8a, #2563eb, #0ea5e9)' }} />
                                <div className="px-8 py-8 pl-12">
                                    <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-3 flex items-center gap-2">
                                        <span className="w-8 h-[2px] bg-blue-600 inline-block" /> Quick Summary
                                    </p>
                                    <p className="text-slate-700 text-xl md:text-2xl leading-relaxed font-semibold italic">
                                        &ldquo;{post.excerpt}&rdquo;
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* ── MAIN BODY CONTENT ── */}
                        <div className="prose max-w-none text-slate-700 font-medium
                             [&_h2]:text-3xl [&_h2]:font-black [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:text-[#001f5c] [&_h2]:border-l-4 [&_h2]:border-blue-500 [&_h2]:pl-4 [&_h2]:uppercase [&_h2]:tracking-snug
                             [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:text-blue-900 [&_h3]:border-l-2 [&_h3]:border-blue-300 [&_h3]:pl-3 [&_h3]:uppercase
                             [&_p]:text-lg [&_p]:leading-[1.9] [&_p]:mb-8
                        ">
                            <PortableText value={post.body} components={bodyComponents} />
                        </div>

                        {/* ── BACK LINK ── */}
                        <div className="mt-12">
                            <Link href="/zoho/blogs" className="inline-flex items-center gap-3 text-[#001f5c] font-black uppercase tracking-widest text-xs hover:-translate-x-1 transition-all group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to All Articles
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <div id="contact" className="mt-20">
                    <ZohoContactForm />
                </div>
            </div>
        </article>
    );
}
