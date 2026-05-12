"use client";

import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
    Trophy, Rocket, FolderCheck, Briefcase, Globe2, HeartHandshake,
    ArrowRight, CheckCircle2, ChevronRight, Activity, BookOpen,
    Calendar, MapPin, Clock, Users, ExternalLink, Zap, Star
} from 'lucide-react';
import dynamic from 'next/dynamic';

const FooterContactForm = dynamic(() => import('@/app/components/shared/FooterContactForm'), { ssr: false });
const ZohoCaseStudiesSlider = dynamic(() => import('../../components/ZohoCaseStudiesSlider'), { ssr: false });
const ZohoBlogsSlider = dynamic(() => import('../../components/ZohoBlogsSlider'), { ssr: false });

const InsightNav = () => (
    <div className="bg-[#000d2e] border-y border-white/10 sticky top-[72px] z-[40] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-4 md:gap-10 overflow-x-auto py-4 no-scrollbar">
                {[
                    { label: 'Blogs', href: '/zoho/blogs' },
                    { label: 'Case Studies', href: '/zoho/case-studies' },
                    { label: 'Events', id: '#events' },
                    { label: 'Get Started', id: '#contact' },
                ].map((item: any) => (
                    <Link
                        key={item.href || item.id}
                        href={item.href || item.id}
                        className="text-white/60 hover:text-white text-xs md:text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-colors hover:text-blue-300"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    </div>
);



function EventsSection() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="events">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-medium uppercase tracking-widest mb-6 border border-blue-100/50">
                        <Calendar className="w-3.5 h-3.5" />
                        Events & Culture
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 leading-snug tracking-tight mb-6">
                        Showcasing Innovation Across Every Stage
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Discover the vibrant culture and engaging events that make AGSuite a great place to work and connect.
                    </p>
                </motion.div>

                {/* Anniversary Row */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative h-80 lg:h-96 w-full rounded-3xl overflow-hidden shadow-xl">
                        <motion.div
                            className="flex gap-4 absolute h-full top-0 left-0 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                        >
                            {[
                                "/images/Events/5th aniversary/5thaniversary-1.jpg",
                                "/images/Events/5th aniversary/5thaniversary-2.jpg",
                                "/images/Events/5th aniversary/5thaniversary-3.jpg",
                                "/images/Events/5th aniversary/5thaniversary-4.jpg",
                                "/images/Events/5th aniversary/5thaniversary-5.jpg",
                                "/images/Events/5th aniversary/5thaniversary-6.jpg",
                                "/images/Events/5th aniversary/5thaniversary-1.jpg",
                                "/images/Events/5th aniversary/5thaniversary-2.jpg",
                                "/images/Events/5th aniversary/5thaniversary-3.jpg",
                            ].map((src, i) => (
                                <div key={i} className="relative h-full w-96 rounded-3xl overflow-hidden shrink-0 group">
                                    <Image src={src} alt="Anniversary" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="384px" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="flex flex-col">
                        <span className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
                            <Trophy size={16} /> Heartbeat of AGSuite
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
                            Celebrating Success, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Scaling Heights.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            We celebrate our journey of innovation and impact. Our milestones reflect the dedication of our diverse team and the trust of our global partners.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function Counter({ value }: { value: number }) {
    const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (v) => Math.round(v));
    useEffect(() => { if (inView) { spring.set(value); } else { spring.set(0); } }, [inView, spring, value]);
    return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function ZohoInsightsClient({ blogs }: { blogs: any[] }) {
    const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

    const stats = [
        { label: 'Projects Completed', value: 600, suffix: '+', icon: Briefcase },
        { label: 'Global Customers', value: 200, suffix: '+', icon: Globe2 },
        { label: 'Customer Retention', value: 84, suffix: '%', icon: HeartHandshake },
        { label: 'Years Experience', value: 15, suffix: '+', icon: Rocket },
    ];

    return (
        <div className="min-h-screen bg-white">
            <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
                <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-[120px] sm:pt-[136px] pb-8">
                    <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-[96px] sm:top-24 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
                        <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">Zoho Insights</span>
                    </motion.nav>
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: '500px' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">Knowledge, Expertise &amp; Digital Success</span>
                            </motion.h1>
                            <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
                            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                                Dive into our Zoho Resource Center. From expert-led blogs to deep-dive case studies, we provide the insights you need to scale your business with Zoho.
                            </motion.p>
                            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-3">
                                <Link href="/zoho/blogs" className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                                    Explore Blogs <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
                                </Link>
                                <Link href="#events" className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                                    View Events <Calendar className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center">
                            <div className="relative w-[88%] ml-auto">
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50 h-[390px]">
                                    <Image src="/images/people/fourteam.webp" alt="Zoho Insights" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-white/15 pt-8 sm:pt-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {stats.map((s, i) => (
                                <motion.div key={i} className="text-center group">
                                    <div className="flex justify-center mb-2 sm:mb-3"><div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors"><s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" /></div></div>
                                    <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1"><Counter value={s.value} /><span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span></div>
                                    <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            <InsightNav />

            <div id="blogs" className="scroll-mt-24">
                {blogs && blogs.length > 0 && <ZohoBlogsSlider blogs={blogs} variant="small" />}
            </div>

            <div id="case-studies" className="scroll-mt-24">
                <ZohoCaseStudiesSlider />
            </div>

            <div id="events" className="scroll-mt-24">
                <EventsSection />
            </div>



            <div id="contact" className="scroll-mt-24">
                <FooterContactForm platform="Zoho" />
            </div>
        </div>
    );
}




