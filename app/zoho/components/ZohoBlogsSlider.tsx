'use client'

import React, { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Calendar, BookOpen } from 'lucide-react'
import ZohoSanityImage from './ZohoSanityImage'


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

interface ZohoBlogsSliderProps {
    blogs: Blog[];
    variant?: 'default' | 'small';
}

export default function ZohoBlogsSlider({ blogs, variant = 'default' }: ZohoBlogsSliderProps) {
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
        <section id="blogs" className={`${variant === 'small' ? 'py-16 md:py-20' : 'py-20 md:py-28'} bg-white text-slate-900 relative overflow-hidden`}>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[120px] pointer-events-none" />
            
            <div className={`${variant === 'small' ? 'max-w-7xl' : 'max-w-[1440px]'} mx-auto px-6 lg:px-16 relative z-10`}>
                <div className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 ${variant === 'small' ? 'mb-10' : 'mb-14'}`}>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 leading-snug tracking-tight">
                        Latest Zoho Insights &amp; Blogs
                    </h2>
                    <Link
                        href="/zoho/blogs"
                        className={`shrink-0 group inline-flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 ${variant === 'small' ? 'px-5 py-2.5 rounded-xl text-sm' : 'px-7 py-3.5 rounded-2xl'} font-semibold transition-all shadow-sm hover:shadow-md`}
                    >
                        View All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

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
                                <Link href={`/zoho/blogs/${blog.slug.current}`} className="flex flex-col h-full">
                                    <div className="flex flex-col h-full bg-gray-50 rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group-hover/item:-translate-y-2">
                                        <div className={`relative ${variant === 'small' ? 'h-48 md:h-56' : 'h-56 md:h-64'} w-full overflow-hidden bg-gray-100 flex-shrink-0`}>
                                            {blog.mainImage ? (
                                                <ZohoSanityImage
                                                    image={blog.mainImage}
 alt={blog.title} fill className="object-cover transition-transform duration-700 group-hover/item:scale-105" sizes="(max-width: 768px) 320px, 390px" />
                                            ) : (
                                                <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-gray-100 to-blue-50">
                                                    <BookOpen className="w-10 h-10 text-gray-300" />
                                                    <span className="text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Article</span>
                                                </div>
                                            )}
                                            {blog.categories && blog.categories.length > 0 && (
                                                <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                                                    {blog.categories[0]}
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col flex-1 p-5 md:p-6 bg-white">
                                            <div className="flex items-center gap-3 mb-3 text-[11px] text-gray-400 font-medium">
                                                {blog.author && <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] border-l-2 border-blue-600 pl-2">{blog.author}</span>}
                                                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            <h3 className={`${variant === 'small' ? 'text-sm md:text-base font-bold' : 'text-base md:text-lg font-bold'} text-gray-900 group-hover/item:text-blue-600 transition-colors leading-snug line-clamp-2`}>{blog.title}</h3>
                                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">{blog.excerpt || 'Read the full story to understand how Zoho can benefit your enterprise...'}</p>
                                            <div className="mt-auto flex items-center font-bold text-gray-900 text-xs">Read Full Blog <ArrowRight className="w-3.5 h-3.5 ml-1" /></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
