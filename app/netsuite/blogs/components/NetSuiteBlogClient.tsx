"use client";

import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, Tag, Clock, ChevronRight, ArrowLeft } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import dynamic from 'next/dynamic';

const ContactFormDesign4 = dynamic(() => import('../../components/ContactFormDesign4'), { ssr: false });

import { urlForImage } from '../../../../sanity/lib/image';

export default function NetSuiteBlogClient({ post, featuredImageUrl, mins }: any) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    });

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const bodyComponents = {
        types: {
            image: ({ value }: any) => {
                if (!value?.asset?._ref) return null
                const inlineImgUrl = urlForImage(value)
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
        },
        block: {
            h2: ({ children }: any) => (
                <div className="mt-16 mb-6">
                    <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.3em] block mb-2">— Section</span>
                    <h2 className="text-4xl font-black tracking-tight leading-tight" style={{ background: 'linear-gradient(90deg, #000814, #001f5c, #1e40af)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        {children}
                    </h2>
                </div>
            ),
            h3: ({ children }: any) => (
                <h3 className="text-2xl font-black text-[#001f5c] mt-12 mb-4 uppercase tracking-[0.08em] flex items-center gap-3">
                    <span className="w-8 h-[3px] bg-blue-500 inline-block flex-shrink-0" />
                    {children}
                </h3>
            ),
            h4: ({ children }: any) => (
                <h4 className="text-sm font-black text-blue-600 mt-8 mb-3 uppercase tracking-[0.25em]">
                    {children}
                </h4>
            ),
            blockquote: ({ children }: any) => (
                <blockquote className="my-12 py-10 px-10 rounded-3xl" style={{ background: 'linear-gradient(135deg, #000f22, #001f5c)' }}>
                    <p className="text-xl font-bold text-white leading-relaxed m-0">
                        {children}
                    </p>
                </blockquote>
            ),
            normal: ({ children }: any) => (
                <p className="text-slate-700 text-lg leading-[1.9] mb-8 font-medium">
                    {children}
                </p>
            ),
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

                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-32 sm:pt-36 sm:pb-48 flex flex-col items-center text-center">
                    <nav className="flex items-center justify-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] mb-8">
                        <Link href="/netsuite" className="text-blue-400 hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3 h-3 text-white/30" />
                        <Link href="/netsuite/blogs" className="text-blue-400 hover:text-white transition-colors">Blogs</Link>
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

                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight shadow-sm max-w-5xl leading-tight text-white pb-2 mb-6">
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
                <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-16 -mt-24 sm:-mt-36 mb-16 sm:mb-20">
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

            {/* ─── CONTENT WRAPPER WITH SCROLL ANIMATION ─── */}
            <div ref={containerRef} className="relative z-10 w-full">
                <motion.div
                    style={!isMobile ? {
                        borderRadius: cardRadius,
                        margin: cardMargin,
                        scale: cardScale,
                    } : {}}
                    className="bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative"
                >
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
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
                        <div className="prose max-w-none
                                [&_h1]:text-3xl sm:[&_h1]:text-5xl [&_h1]:font-black [&_h1]:tracking-tight [&_h1]:leading-tight [&_h1]:mb-6 sm:[&_h1]:mb-8 [&_h1]:mt-10 sm:[&_h1]:mt-16
                                [&_h1]:bg-gradient-to-r [&_h1]:from-[#000814] [&_h1]:via-[#001f5c] [&_h1]:to-[#1e40af]
                                [&_h1]:bg-clip-text [&_h1]:text-transparent
    
                                [&_h2]:text-2xl sm:[&_h2]:text-4xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:leading-tight [&_h2]:mb-4 sm:[&_h2]:mb-6 [&_h2]:mt-10 sm:[&_h2]:mt-16
                                [&_h2]:bg-gradient-to-r [&_h2]:from-[#000814] [&_h2]:via-[#001f5c] [&_h2]:to-[#1e40af]
                                [&_h2]:bg-clip-text [&_h2]:text-transparent
    
                                [&_h3]:text-xl sm:[&_h3]:text-2xl [&_h3]:font-black [&_h3]:text-[#001f5c] [&_h3]:mb-3 sm:[&_h3]:mb-4 [&_h3]:mt-8 sm:[&_h3]:mt-12
                                [&_h3]:uppercase [&_h3]:tracking-[0.1em]
    
                                [&_h4]:text-sm sm:[&_h4]:text-base [&_h4]:font-black [&_h4]:text-blue-600 [&_h4]:mb-2 sm:[&_h4]:mb-3 [&_h4]:mt-6 sm:[&_h4]:mt-8
                                [&_h4]:uppercase [&_h4]:tracking-[0.2em]
    
                                [&_p]:text-slate-700 [&_p]:text-base sm:[&_p]:text-lg [&_p]:leading-[1.7] sm:[&_p]:leading-[1.9] [&_p]:mb-6 sm:[&_p]:mb-8 [&_p]:font-medium
    
                                [&_strong]:text-slate-900 [&_strong]:font-black
                                [&_em]:text-blue-700 [&_em]:font-semibold
    
                                [&_a]:text-blue-600 [&_a]:font-bold [&_a]:underline [&_a]:underline-offset-4
                                [&_a:hover]:text-[#001f5c]
    
                                [&_ul]:list-none [&_ul]:pl-0 [&_ul]:mb-8 sm:[&_ul]:mb-10 [&_ul]:space-y-3
                                [&_ul_li]:flex [&_ul_li]:items-start [&_ul_li]:gap-3 [&_ul_li]:text-slate-700
                                [&_ul_li]:text-base sm:[&_ul_li]:text-lg [&_ul_li]:font-medium [&_ul_li]:leading-relaxed
                                [&_ul_li]:before:content-['→'] [&_ul_li]:before:text-blue-500
                                [&_ul_li]:before:font-black [&_ul_li]:before:mt-0.5
    
                                [&_ol]:list-decimal [&_ol]:pl-6 sm:[&_ol]:pl-8 [&_ol]:mb-8 sm:[&_ol]:mb-10 [&_ol]:space-y-3
                                [&_ol_li]:text-slate-700 [&_ol_li]:text-base sm:[&_ol_li]:text-lg [&_ol_li]:font-medium [&_ol_li]:leading-relaxed
    
                                [&_blockquote]:not-italic [&_blockquote]:my-8 sm:[&_blockquote]:my-12 [&_blockquote]:py-6 sm:[&_blockquote]:py-8 [&_blockquote]:px-6 sm:[&_blockquote]:px-10
                                [&_blockquote]:rounded-2xl sm:[&_blockquote]:rounded-3xl [&_blockquote]:border-0
                                [&_blockquote]:bg-gradient-to-br [&_blockquote]:from-blue-900 [&_blockquote]:to-[#001535]
                                [&_blockquote_p]:text-white [&_blockquote_p]:text-lg sm:[&_blockquote_p]:text-xl [&_blockquote_p]:font-bold
                                [&_blockquote_p]:leading-relaxed [&_blockquote_p]:mb-0
                        ">
                            <PortableText value={post.body} components={bodyComponents} />
                        </div>

                        {/* ── TAGS FOOTER ── */}
                        {post.categories && post.categories.length > 0 && (
                            <div className="mt-20 pt-10 border-t-2 border-slate-100">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-4">Filed Under</p>
                                <div className="flex flex-wrap gap-3">
                                    {post.categories.map((cat: string) => (
                                        <span key={cat} className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-700 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest hover:bg-blue-100 transition-colors cursor-default">
                                            <Tag className="w-3 h-3" /> {cat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* ── BACK LINK ── */}
                        <div className="mt-12">
                            <Link href="/netsuite/blogs" className="inline-flex items-center gap-3 text-[#001f5c] font-black uppercase tracking-widest text-xs hover:-translate-x-1 transition-all group">
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to All Articles
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ─── CTA PARALLAX SECTION ─── */}
            <div className="relative overflow-hidden w-full bg-slate-900 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/images/people/threeteam.webp')" }}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#000d2b]/80 to-[#001f5c]/70"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10 max-w-[1200px] mx-auto px-8 md:px-16 lg:px-24 py-24 md:py-32 flex flex-col md:flex-row md:items-center justify-between gap-12">
                    <div className="text-left max-w-2xl">
                        <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-medium tracking-widest uppercase text-xs backdrop-blur-sm mb-6 shadow-sm">
                            Ready to Transform?
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 tracking-tight text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #ffffff, #93c5fd, #60a5fa)' }}>
                            Let&apos;s Build Something Amazing Together
                        </h2>
                        <p className="text-blue-100/90 text-[19px] md:text-xl font-medium max-w-2xl leading-relaxed">
                            Connect with our NetSuite experts and discover how we can elevate your business operations to the next level.
                        </p>
                    </div>
                    <div className="shrink-0 flex md:block items-center justify-start">
                        <Link href="#contact" className="inline-flex items-center justify-center gap-3 bg-white text-[#001f5c] font-black uppercase tracking-widest text-[13px] px-10 py-5 rounded-2xl hover:bg-blue-50 transition-all shadow-2xl hover:shadow-white/10 hover:-translate-y-0.5 active:scale-95">
                            Get a Free Consultation <ChevronRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>

            <div id="contact">
                <ContactFormDesign4 />
            </div>
        </article>
    );
}




