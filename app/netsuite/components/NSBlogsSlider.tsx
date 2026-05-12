'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, BookOpen } from 'lucide-react'
import SanityImage from './SanityImage'

interface Blog {
    _id: string
    title: string
    slug: { current: string }
    publishedAt: string
    mainImage: any
    excerpt: string
    author: string
    categories: string[]
}

interface NSBlogsSliderProps {
    blogs: Blog[];
    variant?: 'default' | 'small';
}

export default function NSBlogsSlider({ blogs, variant = 'default' }: NSBlogsSliderProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: variant === 'small' ? -360 : -460, behavior: 'smooth' })
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: variant === 'small' ? 360 : 460, behavior: 'smooth' })
        }
    }

    if (!blogs || blogs.length === 0) {
        return null
    }

    return (
        <section id="blogs" className={`${variant === 'small' ? 'py-16 md:py-20' : 'py-20 md:py-28'} bg-white text-slate-900 relative overflow-hidden font-['DM_Sans',sans-serif]`}>
            {/* Subtle background blobs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none" />

            <div className={`${variant === 'small' ? 'max-w-7xl' : 'max-w-[1440px]'} mx-auto px-6 lg:px-16 relative z-10`}>

                {/* ── HEADER ── */}
                <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 ${variant === 'small' ? 'mb-10' : 'mb-14'}`}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-snug tracking-tight">
                        Latest NetSuite Insights &amp; Blogs
                    </h2>
                    <Link
                        href="/netsuite/blogs"
                        className={`shrink-0 group inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 ${variant === 'small' ? 'px-5 py-2.5 rounded-xl text-sm' : 'px-7 py-3.5 rounded-2xl'} font-semibold transition-all shadow-sm hover:shadow-md`}
                    >
                        View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* ── SLIDER ── */}
                <div className="relative group/slider">
                    <div
                        ref={scrollContainerRef}
                        className={`flex ${variant === 'small' ? 'gap-5 md:gap-6' : 'gap-7 md:gap-8'} overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 w-full`}
                        style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                    >
                        {blogs.map((blog) => (
                            <div
                                key={blog._id}
                                className={`snap-start shrink-0 ${variant === 'small' ? 'w-[280px] md:w-[320px]' : 'w-[340px] md:w-[390px]'} group/item flex flex-col`}
                            >
                                <Link href={`/netsuite/blogs/${blog.slug.current}`} className="flex flex-col h-full">

                                    {/* ── CARD ── */}
                                    <div className="flex flex-col h-full bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group-hover/item:-translate-y-2">

                                        {/* Image */}
                                        <div className={`relative ${variant === 'small' ? 'h-48 md:h-56' : 'h-56 md:h-64'} w-full overflow-hidden bg-gray-100 flex-shrink-0`}>
                                            {blog.mainImage ? (
                                                <SanityImage
                                                    image={blog.mainImage}
                                                    alt={blog.title}
                                                    fill
                                                    className="object-cover transition-transform duration-700 group-hover/item:scale-105"
                                                    sizes="(max-width: 768px) 320px, 390px"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-100 to-blue-50">
                                                    <BookOpen className="w-10 h-10 text-gray-300" />
                                                    <span className="text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Article</span>
                                                </div>
                                            )}

                                            {/* Bottom image fade to card bg */}
                                            <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-gray-50/80 to-transparent pointer-events-none" />

                                            {/* Category badge */}
                                            {blog.categories && blog.categories.length > 0 && (
                                                <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                                                    {blog.categories[0]}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="flex flex-col flex-1 p-5 md:p-6 bg-white">
                                            {/* Author + Date */}
                                            <div className="flex items-center gap-3 mb-3 text-[11px] text-gray-400 font-medium">
                                                {blog.author && (
                                                    <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] border-l-2 border-blue-600 pl-2">
                                                        {blog.author}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3.5 h-3.5" />
                                                    {new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </span>
                                            </div>

                                            {/* Title */}
                                            <h3 className={`${variant === 'small' ? 'text-base md:text-lg' : 'text-lg md:text-xl'} font-bold text-gray-900 group-hover/item:text-blue-600 transition-colors leading-snug mb-3 line-clamp-2`}>
                                                {blog.title}
                                            </h3>

                                            {/* Excerpt */}
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1 mb-5">
                                                {blog.excerpt || 'Read the full insights to understand how NetSuite can empower your business operations...'}
                                            </p>

                                            {/* CTA text link — same style as case studies */}
                                            <button suppressHydrationWarning className="mt-auto flex items-center font-medium text-gray-900 group-hover/item:text-blue-600 transition-colors bg-transparent border-none p-0 cursor-pointer text-sm">
                                                <span className="border-b-2 border-transparent group-hover/item:border-blue-600 pb-0.5 transition-all">
                                                    Read Full Blog
                                                </span>
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover/item:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </div>

                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Left arrow */}
                    <div className="absolute -left-5 md:-left-8 top-[40%] -translate-y-1/2 z-20 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 pointer-events-none hidden md:block">
                        <button
                            onClick={scrollLeft}
                            className={`${variant === 'small' ? 'w-11 h-11' : 'w-14 h-14'} bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all hover:scale-110 active:scale-95 pointer-events-auto`}
                            aria-label="Scroll left"
                            suppressHydrationWarning
                        >
                            <ChevronLeft className={`${variant === 'small' ? 'w-5 h-5' : 'w-6 h-6'}`} />
                        </button>
                    </div>
                    {/* Right arrow */}
                    <div className="absolute -right-5 md:-right-8 top-[40%] -translate-y-1/2 z-20 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 pointer-events-none hidden md:block">
                        <button
                            onClick={scrollRight}
                            className={`${variant === 'small' ? 'w-11 h-11' : 'w-14 h-14'} bg-white rounded-full shadow-xl flex items-center justify-center border border-gray-200 text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all hover:scale-110 active:scale-95 pointer-events-auto`}
                            aria-label="Scroll right"
                            suppressHydrationWarning
                        >
                            <ChevronRight className={`${variant === 'small' ? 'w-5 h-5' : 'w-6 h-6'}`} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}




