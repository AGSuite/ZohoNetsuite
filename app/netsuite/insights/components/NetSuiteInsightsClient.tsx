"use client";

import React, { useEffect } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
    Trophy, Rocket, FolderCheck,
    ArrowRight, CheckCircle2, ChevronRight, Activity, BookOpen,
    Calendar, MapPin, Clock, Users, ExternalLink, Zap, Star
} from 'lucide-react';
import ContactFormDesign4 from '../../components/ContactFormDesign4';
import NSCaseStudiesSlider from '../../components/NSCaseStudiesSlider';
import NSBlogsSlider from '../../components/NSBlogsSlider';
import NetSuitePricingCalculator from '../../components/NetSuitePricingCalculator';

const InsightNav = () => (
    <div className="bg-slate-900 border-y border-white/10 sticky top-[72px] z-[40] backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-center gap-4 md:gap-10 overflow-x-auto py-4 no-scrollbar">
                {[
                    { label: 'Blogs', href: '/netsuite/blogs' },
                    { label: 'Case Studies', href: '/netsuite/case-studies' },
                    { label: 'Events', id: '#events' },
                    { label: 'Pricing Calculator', id: '#pricing-calculator' },
                    { label: 'Awards', id: '#awards' },
                    { label: 'Get Started', id: '#contact' },
                ].map((item: any) => (
                    <Link
                        key={item.href || item.id}
                        href={item.href || item.id}
                        className="text-white/60 hover:text-white text-xs md:text-sm font-medium uppercase tracking-widest whitespace-nowrap transition-colors hover:text-purple-300"
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    </div>
);

function AwardsAndRecognitionSection() {
    return (
        <section className="relative pt-20 pb-16 bg-white overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-xl"
                    >
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-snug tracking-tight">
                            Recognized Excellence in NetSuite Solutions
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-row items-center justify-center gap-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Image
                                src="/images/awards/Partner of the Year.png"
                                alt="NetSuite Partner of the Year Award"
                                width={280}
                                height={280}
                                className="w-64 h-64 object-contain"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function EventsSection() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 flex flex-col gap-24">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-4"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-medium uppercase tracking-widest mb-6 border border-blue-100/50">
                        <Calendar className="w-3.5 h-3.5" />
                        Events & Culture
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-snug tracking-tight mb-6">
                        Showcasing Innovation Across Every Stage
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Discover the vibrant culture and engaging events that make AGSuite a great place to work and connect.
                    </p>
                </motion.div>

                {/* Row 1: 5th Anniversary */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Horizontal Marquee (No white card) */}
                    <div className="relative h-80 lg:h-96 w-full rounded-3xl overflow-hidden">
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
                                "/images/Events/5th aniversary/5thaniversary-4.jpg",
                                "/images/Events/5th aniversary/5thaniversary-5.jpg",
                                "/images/Events/5th aniversary/5thaniversary-6.jpg",
                            ].map((src, i) => (
                                <div key={i} className="relative h-full w-96 rounded-3xl overflow-hidden shrink-0 group">
                                    <Image
                                        src={src}
                                        alt="5th Anniversary"
                                        fill
                                        sizes="384px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side: Text & Value Propositions */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                    >
                        <span className="text-blue-600 font-medium tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
                            <Trophy size={16} /> Heartbeat of AGSuite
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
                            5th Anniversary, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Celebrating Success.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            We celebrated five years of innovation, collaboration, and driving real impact for our clients. Our 5th Anniversary was a remarkable milestone recognizing the dedication of our diverse team and the trust of our partners.
                        </p>
                    </motion.div>
                </div>

                {/* Row 2: NetSuite Event */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Text & Value Propositions */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col order-2 lg:order-1"
                    >
                        <span className="text-indigo-600 font-medium tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
                            <Zap size={16} /> Empowering Connectivity
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
                            NetSuite Events, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Global Presence.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Showcasing our proprietary solutions and expanding our footprint. We actively participate in NetSuite events to collaborate with the ecosystem, share insights, and connect with forward-thinking businesses.
                        </p>
                    </motion.div>

                    {/* Right Side: Horizontal Marquee (No white card) */}
                    <div className="order-1 lg:order-2 relative h-80 lg:h-96 w-full rounded-3xl overflow-hidden">
                        <motion.div
                            className="flex gap-4 absolute h-full top-0 left-0 w-max"
                            animate={{ x: ["-50%", "0%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                        >
                            {[
                                "/images/Events/Netsuite-event/1773125723452.jpg",
                                "/images/Events/Netsuite-event/1773125723553.jpg",
                                "/images/Events/Netsuite-event/1773125723811.jpg",
                                "/images/Events/Netsuite-event/1773125724814.jpg",
                                "/images/Events/Netsuite-event/1773125725136.jpg",
                                "/images/Events/Netsuite-event/1773125725296.jpg",
                                "/images/Events/Netsuite-event/1773125725321.jpg",
                                "/images/Events/Netsuite-event/1773125735436.jpg",
                                "/images/Events/Netsuite-event/1773125723452.jpg",
                                "/images/Events/Netsuite-event/1773125723553.jpg",
                                "/images/Events/Netsuite-event/1773125723811.jpg",
                                "/images/Events/Netsuite-event/1773125724814.jpg",
                                "/images/Events/Netsuite-event/1773125725136.jpg",
                                "/images/Events/Netsuite-event/1773125725296.jpg",
                                "/images/Events/Netsuite-event/1773125725321.jpg",
                                "/images/Events/Netsuite-event/1773125735436.jpg",
                            ].map((src, i) => (
                                <div key={i} className="relative h-full w-96 rounded-3xl overflow-hidden shrink-0 group">
                                    <Image
                                        src={src}
                                        alt="NetSuite Event"
                                        fill
                                        sizes="384px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Row 3: Indian Taxation */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Side: Horizontal Marquee (No white card) */}
                    <div className="relative h-80 lg:h-96 w-full rounded-3xl overflow-hidden">
                        <motion.div
                            className="flex gap-4 absolute h-full top-0 left-0 w-max"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
                        >
                            {[
                                "/images/Events/indian taxation/india-taxation-summit-2023-1-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-2-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-3-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-4-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-5-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-6-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-7-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-8-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-1-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-2-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-3-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-4-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-5-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-6-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-7-600x400.jpg",
                                "/images/Events/indian taxation/india-taxation-summit-2023-8-600x400.jpg",
                            ].map((src, i) => (
                                <div key={i} className="relative h-full w-96 rounded-3xl overflow-hidden shrink-0 group">
                                    <Image
                                        src={src}
                                        alt="Indian Taxation Summit"
                                        fill
                                        sizes="384px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Right Side: Text & Value Propositions */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col"
                    >
                        <span className="text-purple-600 font-medium tracking-widest text-sm uppercase mb-3 flex items-center gap-2">
                            <Star size={16} /> Knowledge & Compliance
                        </span>
                        <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6 leading-tight">
                            Indian Taxation <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Summit.</span>
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            At the Indian Taxation Summit, our experts engaged deep into local compliance, sharing our knowledge on how modern cloud ERP effortlessly solves complex Indian tax localization and empowers businesses.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}



// ─── PRICING CALCULATOR WRAPPER ─────────────────────────────────────────────
function PricingCalculatorSection() {
    return (
        <section className="relative py-20 bg-white overflow-hidden">
            <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(99,102,241,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(59,130,246,0.06) 0%, transparent 60%)' }} />
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium uppercase tracking-widest mb-5">
                        ROI Calculator
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-snug tracking-tight mb-4">
                        Calculate Your NetSuite ROI
                    </h2>
                    <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
                        Get a personalised estimate of your NetSuite investment and expected return in minutes.
                    </p>
                </motion.div>

                <NetSuitePricingCalculator />
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

export default function NetSuiteInsightsClient({ blogs }: { blogs: any[] }) {
    const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

    const stats = [
        { label: 'Resources Available', value: 200, suffix: '+', icon: BookOpen },
        { label: 'Success Stories', value: 120, suffix: '+', icon: FolderCheck },
        { label: 'Industry Awards', value: 20, suffix: '+', icon: Trophy },
        { label: 'Years Experience', value: 15, suffix: '+', icon: Rocket },
    ];

    return (
        <div className="min-h-screen bg-white">

            {/* HERO SECTION */}
            <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
                <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
                <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
                <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-[120px] sm:pt-[136px] pb-8">
                    <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-[100px] sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
                        <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
                        <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">Insights Center</span>
                    </motion.nav>
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: '500px' }}>
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]">
                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">Knowledge, News &amp; Success Stories</span>
                            </motion.h1>
                            <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
                            <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                                Explore our hub of resources designed to help you make informed decisions. Discover real success stories and stay updated with the latest NetSuite news.
                            </motion.p>
                            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-3">
                                <Link href="/netsuite/blogs" className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                                    Explore Blogs <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
                                </Link>
                                <Link href="#events" className="inline-flex items-center gap-3 px-7 py-3.5 text-sm font-medium rounded-full bg-purple-600/20 backdrop-blur-md border border-purple-400/30 text-purple-200 hover:bg-purple-600 hover:border-purple-500 transition-all duration-300 shadow-xl hover:scale-105">
                                    View Events <Calendar className="w-4 h-4" />
                                </Link>
                            </motion.div>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
                            <div className="relative w-[88%] ml-auto">
                                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                                    <Image src="/images/people/fourteam.webp" alt="NetSuite Insights" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-center" priority />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><Activity className="w-5 h-5 text-white" /></div>
                                        <div><p className="text-gray-900 text-sm font-medium">Empowering Knowledge</p><p className="text-gray-500 text-xs mt-0.5">Blogs · Case Studies · ROI Tools · Events</p></div>
                                    </motion.div>
                                </div>
                                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8 }} className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                                    <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><CheckCircle2 className="w-5 h-5 text-white" /></div>
                                    <div><p className="text-gray-900 text-[13px] font-medium whitespace-nowrap">Proven Success</p><p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Trusted by 180+ enterprises</p></div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                    <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-white/15 pt-8 sm:pt-10">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
                            {stats.map((s, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
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

            {/* BLOGS */}
            <div id="blogs" className="scroll-mt-24">
                {blogs && blogs.length > 0 && <NSBlogsSlider blogs={blogs} variant="small" />}
            </div>

            {/* CASE STUDIES */}
            <div id="case-studies" className="scroll-mt-24">
                <NSCaseStudiesSlider />
            </div>

            {/* EVENTS */}
            <div id="events" className="scroll-mt-24">
                <EventsSection />
            </div>

            {/* PRICING CALCULATOR */}
            <div id="pricing-calculator" className="scroll-mt-24">
                <PricingCalculatorSection />
            </div>

            {/* AWARDS */}
            <div id="awards" className="scroll-mt-24">
                <AwardsAndRecognitionSection />
            </div>



            <div id="contact" className="scroll-mt-24">
                <ContactFormDesign4 />
            </div>
        </div>
    );
}




