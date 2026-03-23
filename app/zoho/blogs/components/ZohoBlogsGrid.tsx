'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Calendar, User, ArrowRight, ChevronRight, BookOpen, Filter, Star } from 'lucide-react'
import ZohoSanityImage from '../../components/ZohoSanityImage'

import ZohoContactForm from '../../components/ZohoContactForm'

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

interface ZohoBlogsGridProps {
    blogs: Blog[]
}

function FeaturedPost({ blog }: { blog: Blog }) {
    return (
        <Link href={`/zoho/blogs/${blog.slug.current}`} className="group block h-full">
            <div className="relative h-full rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 group-hover:-translate-y-0.5">
                <div className="relative h-72 w-full overflow-hidden bg-gray-100">
                    {blog.mainImage ? (
                        <ZohoSanityImage image={blog.mainImage} alt={blog.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 60vw" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100"><BookOpen className="w-16 h-16 text-blue-300" /></div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {blog.categories && blog.categories.length > 0 && (
                        <span className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{blog.categories[0]}</span>
                    )}
                </div>
                <div className="p-6">
                    <div className="flex items-center gap-4 text-[11px] text-gray-400 font-medium mb-3">
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-blue-400" />{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        {blog.author && <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-blue-400" />{blog.author}</span>}
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug mb-3">{blog.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">{blog.excerpt || 'Read the full story to understand how Zoho can empower your digital environment...'}</p>
                    <span className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold group-hover:gap-3 transition-all">Read Article <ArrowRight className="w-4 h-4" /></span>
                </div>
            </div>
        </Link>
    )
}

function EditorPickCard({ blog }: { blog: Blog }) {
    return (
        <Link href={`/zoho/blogs/${blog.slug.current}`} className="group flex gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
            <div className="relative w-20 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                {blog.mainImage ? (
                    <ZohoSanityImage image={blog.mainImage} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="80px" />
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-blue-50"><BookOpen className="w-5 h-5 text-blue-300" /></div>
                )}
            </div>
            <div className="flex-1 min-w-0">
                {blog.categories && blog.categories.length > 0 && (
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">{blog.categories[0]}</span>
                )}
                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mt-0.5">{blog.title}</h4>
                <p className="text-[11px] text-gray-400 mt-1 flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
            </div>
        </Link>
    )
}

function BlogCard({ blog, index }: { blog: Blog; index: number }) {
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.4, delay: index * 0.04 }} className="group">
            <Link href={`/zoho/blogs/${blog.slug.current}`} className="block h-full">
                <div className="flex flex-col h-full rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-0.5">
                    <div className="relative h-48 w-full overflow-hidden bg-gray-50 flex-shrink-0">
                        {blog.mainImage ? (
                            <ZohoSanityImage image={blog.mainImage} alt={blog.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gray-50"><BookOpen className="w-10 h-10 text-gray-300" /></div>
                        )}
                        {blog.categories && blog.categories.length > 0 && (
                            <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-700 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border border-blue-100 shadow-sm">{blog.categories[0]}</span>
                        )}
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="flex items-center gap-1 text-[11px] text-gray-400"><Calendar className="w-3 h-3" />{new Date(blog.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            {blog.author && <span className="text-[11px] text-gray-400 truncate">· {blog.author}</span>}
                        </div>
                        <h3 className="text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-snug line-clamp-2 mb-2 flex-1">{blog.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-4">{blog.excerpt || 'Read the latest insights and news from the Zoho cloud ecosystem...'}</p>
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100"><span className="text-xs font-semibold text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight className="w-3.5 h-3.5" /></span></div>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}

export default function ZohoBlogsGrid({ blogs }: ZohoBlogsGridProps) {
    const [searchQuery, setSearchQuery] = useState('')
    const [activeCategory, setActiveCategory] = useState('All')

    const categories = useMemo(() => {
        const all = blogs.flatMap(b => b.categories || [])
        return ['All', ...Array.from(new Set(all))]
    }, [blogs])

    const filteredBlogs = useMemo(() => {
        return blogs.filter(blog => {
            const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) || (blog.excerpt || '').toLowerCase().includes(searchQuery.toLowerCase())
            const matchCat = activeCategory === 'All' || (blog.categories || []).includes(activeCategory)
            return matchSearch && matchCat
        })
    }, [blogs, searchQuery, activeCategory])

    const featuredPost = blogs[0]
    const editorPicks = blogs.slice(1, 4)
    const gridBlogs = filteredBlogs.filter(b => b._id !== featuredPost?._id)
    const showHero = !searchQuery && activeCategory === 'All'

    return (
        <div className="min-h-screen bg-white">
            <section className="relative w-full flex flex-col justify-center bg-gradient-to-br from-[#0a1f5c] via-[#000d2e] to-[#001f5c] text-white py-40 overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/people/threeteam.webp')] bg-cover bg-center mix-blend-luminosity" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
                <div className="relative z-10 max-w-4xl w-full mx-auto px-6 text-center flex flex-col items-center">
                    <nav className="flex items-center gap-2 text-xs text-blue-300/70 mb-7 font-medium">
                        <Link href="/zoho" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/60">Blog</span>
                    </nav>
                    <span className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium tracking-widest uppercase text-xs md:text-sm mb-6 backdrop-blur-sm">Zoho Insights &amp; Updates</span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight mb-6">AGSuite <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-400">Zoho Blog</span></h1>
                    <p className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto leading-relaxed">Expert strategies, technical guides, and transformation news for the modern Zoho enterprise.</p>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 py-10">
                {showHero && featuredPost && (
                    <div className="grid lg:grid-cols-[3fr_2fr] gap-6 mb-12">
                        <div>
                            <div className="flex items-center gap-2 mb-4"><div className="w-1 h-5 rounded-full bg-blue-600" /><span className="text-xs font-bold uppercase tracking-widest text-gray-500">Latest Post</span></div>
                            <FeaturedPost blog={featuredPost} />
                        </div>
                        <div>
                            <div className="flex items-center gap-2 mb-4"><Star className="w-4 h-4 text-amber-400 fill-amber-400" /><span className="text-xs font-bold uppercase tracking-widest text-gray-500">Editor&apos;s Picks</span></div>
                            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
                                {editorPicks.map(blog => <div key={blog._id} className="px-1 py-1"><EditorPickCard blog={blog} /></div>)}
                            </div>
                        </div>
                    </div>
                )}

                <div className="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 p-6 mb-10">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
                        <div className="w-full flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
                            <div className="flex items-center gap-2 text-slate-500 font-bold uppercase tracking-wider text-xs mr-2 shrink-0"><Filter className="w-4 h-4" /> Filter by:</div>
                            {categories.map(cat => (
                                <button key={cat} onClick={() => setActiveCategory(cat)} className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-[#001f5c] text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}>{cat}</button>
                            ))}
                        </div>
                        <div className="relative w-full lg:w-80"><Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" /><input type="text" placeholder="Search articles..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500" /></div>
                    </div>
                </div>

                <AnimatePresence mode="popLayout">
                    {filteredBlogs.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {(showHero ? gridBlogs : filteredBlogs).map((blog, i) => <BlogCard key={blog._id} blog={blog} index={i} />)}
                        </div>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="py-24 text-center"><h3 className="text-xl font-bold text-gray-900 mb-2">No results found</h3><p className="text-gray-500 text-sm max-w-md mx-auto mb-6">Try a different keyword or clear your filters.</p><button onClick={() => { setSearchQuery(''); setActiveCategory('All') }} className="px-6 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold">Clear Filters</button></motion.div>
                    )}
                </AnimatePresence>
            </div>
            <div id="contact"><ZohoContactForm /></div>
        </div>
    )
}
