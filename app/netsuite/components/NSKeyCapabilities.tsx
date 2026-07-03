"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Capability {
    id: number;
    title: string;
    subline: string;
    description: string;
    image: string;
    link: string;
}

const capabilities: Capability[] = [
    {
        id: 1,
        title: "Built for Rapid Scaling",
        subline: "Grow without system limitations",
        description: "NetSuite supports increasing transactions, users, subsidiaries, and global expansion without requiring costly system replacements.",
        image: "/images/netsuiteimages/ns_rapid_scaling.png",
        link: "/netsuite/solutions"
    },
    {
        id: 2,
        title: "Real-Time Business Visibility",
        subline: "Make faster, smarter decisions",
        description: "Enterprise leaders gain live dashboards, reporting, and analytics to monitor performance and act quickly.",
        image: "/images/netsuiteimages/ns_realtime_visibility.png",
        link: "/netsuite/solutions"
    },
    {
        id: 3,
        title: "End-to-End Business Management",
        subline: "One platform for all operations",
        description: "Finance, CRM, inventory, procurement, and HR are managed in a single unified system.",
        image: "/images/netsuiteimages/ns_endtoend_management.png",
        link: "/netsuite/solutions"
    },
    {
        id: 4,
        title: "Automation & Operational Efficiency",
        subline: "Reduce manual work",
        description: "Automate workflows like billing, approvals, reporting, and financial close processes.",
        image: "/images/netsuiteimages/ns_automation_efficiency.png",
        link: "/netsuite/solutions"
    },
    {
        id: 5,
        title: "Global Business Ready",
        subline: "Expand confidently across regions",
        description: "Multi-currency, multi-tax, and multi-subsidiary management enables international growth.",
        image: "/images/netsuiteimages/ns_global_business.png",
        link: "/netsuite/solutions"
    }
];

const NSKeyCapabilities = () => {
    const [activeTab, setActiveTab] = useState(capabilities[0].id);
    const [isMounted, setIsMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const activeIndex = capabilities.findIndex(cap => cap.id === activeTab);
    const activeCapability = capabilities[activeIndex] || capabilities[0];

    const goPrev = () => {
        const prevIndex = (activeIndex - 1 + capabilities.length) % capabilities.length;
        setActiveTab(capabilities[prevIndex].id);
    };

    const goNext = () => {
        const nextIndex = (activeIndex + 1) % capabilities.length;
        setActiveTab(capabilities[nextIndex].id);
    };

    return (
        <section className="relative pt-16 pb-0 overflow-hidden bg-white">
            <div className="relative z-10 max-w-[1240px] mx-auto px-4 md:px-6">

                {/* Heading */}
                <div className="text-center mb-10 md:mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500"
                    >
                        See why high-growth enterprises<br className="hidden sm:block" />{" "}
                        <span className="sm:hidden"> </span>run on NetSuite
                    </motion.h2>
                </div>

                {/* ── DESKTOP LAYOUT (lg+) ── */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-stretch">
                    {/* Left — Image */}
                    <div className="order-2 lg:order-1 relative min-h-[500px] rounded-3xl overflow-hidden shadow-xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0 h-full w-full"
                            >
                                <Image
                                    key={activeCapability.title}
                                    src={activeCapability.image}
                                    alt={activeCapability.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="space-y-4"
                                    >
                                        <p className="text-white/95 text-lg leading-relaxed font-normal max-w-lg">
                                            {activeCapability.description}
                                        </p>
                                        <Link
                                            href={activeCapability.link}
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-lg hover:bg-[#2563eb] hover:text-white transition-all font-semibold group/btn text-sm"
                                        >
                                            Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right — Tab list */}
                    <div className="order-1 lg:order-2 flex flex-col h-full bg-white border-t border-slate-100">
                        {capabilities.map((capability) => (
                            <button
                                key={capability.id}
                                onClick={() => setActiveTab(capability.id)}
                                className={`group relative flex-1 flex items-center px-4 text-left transition-all border-b border-slate-100 last:border-b-0 outline-none ${activeTab === capability.id ? 'bg-slate-50/50' : 'hover:bg-slate-50/30'}`}
                                suppressHydrationWarning
                            >
                                {activeTab === capability.id && (
                                    <motion.div
                                        layoutId="active-line-desktop"
                                        className="absolute top-0 left-0 w-full h-[3px] bg-[#2563eb]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className={`text-lg md:text-xl transition-all duration-300 ${activeTab === capability.id
                                    ? 'text-slate-900 font-bold translate-x-3'
                                    : 'text-slate-500 group-hover:text-slate-700 group-hover:translate-x-1'
                                    }`}>
                                    {capability.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── MOBILE / TABLET LAYOUT (below lg) ── */}
                <div className="lg:hidden flex flex-col gap-4">

                    {/* Image card */}
                    <div className="relative w-full h-[55vw] min-h-[240px] max-h-[380px] rounded-2xl overflow-hidden shadow-xl">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.35 }}
                                className="absolute inset-0 h-full w-full"
                            >
                                <Image
                                    key={activeCapability.title}
                                    src={activeCapability.image}
                                    alt={activeCapability.title}
                                    fill
                                    className="object-cover"
                                    sizes="100vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-5">
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.15 }}
                                        className="space-y-3"
                                    >
                                        <p className="text-white/95 text-sm leading-relaxed">
                                            {activeCapability.description}
                                        </p>
                                        <Link
                                            href={activeCapability.link}
                                            className="inline-flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-lg hover:bg-[#2563eb] hover:text-white transition-all font-semibold text-xs"
                                        >
                                            Learn More <ChevronRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Title + Prev/Next nav */}
                    <div className="flex items-center justify-between gap-3 px-1">
                        {/* Prev button */}
                        <button
                            onClick={goPrev}
                            aria-label="Previous capability"
                            className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 hover:bg-[#2563eb] hover:text-white text-slate-600 flex items-center justify-center transition-all active:scale-95"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Active title + dots */}
                        <div className="flex-1 text-center">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.2 }}
                                    className="text-sm font-bold text-slate-800 leading-snug"
                                >
                                    {activeCapability.title}
                                </motion.p>
                            </AnimatePresence>
                            {/* Dot indicators */}
                            <div className="flex items-center justify-center gap-1.5 mt-2">
                                {capabilities.map((cap) => (
                                    <button
                                        key={cap.id}
                                        onClick={() => setActiveTab(cap.id)}
                                        aria-label={`Go to ${cap.title}`}
                                        className="w-12 h-12 flex items-center justify-center focus:outline-none"
                                    >
                                        <span className={`rounded-full transition-all duration-300 ${activeTab === cap.id
                                            ? 'w-5 h-2 bg-[#2563eb]'
                                            : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                                            }`} />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Next button */}
                        <button
                            onClick={goNext}
                            aria-label="Next capability"
                            className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-100 hover:bg-[#2563eb] hover:text-white text-slate-600 flex items-center justify-center transition-all active:scale-95"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Scrollable tab pills */}
                    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none snap-x snap-mandatory px-1">
                        {capabilities.map((cap) => (
                            <button
                                key={cap.id}
                                onClick={() => setActiveTab(cap.id)}
                                className={`snap-start flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold border transition-all whitespace-nowrap ${activeTab === cap.id
                                    ? 'bg-[#2563eb] text-white border-[#2563eb]'
                                    : 'bg-white text-slate-500 border-slate-200 hover:border-[#2563eb] hover:text-[#2563eb]'
                                    }`}
                            >
                                {cap.title}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* Full-width CTA — Edge-to-Edge */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-16 relative overflow-hidden bg-gradient-to-br from-[#002a8c] via-[#0044cc] to-[#0099a3] shadow-[0_20px_50px_-15px_rgba(0,51,173,0.3)]"
            >
                {/* Background particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {isMounted && !isMobile && [...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute bg-white rounded-full"
                            style={{
                                width: Math.random() * 2 + 1 + 'px',
                                height: Math.random() * 2 + 1 + 'px',
                                top: Math.random() * 100 + '%',
                                left: Math.random() * 100 + '%',
                            }}
                            animate={{
                                y: [0, -30, 0],
                                x: [0, Math.random() * 20 - 10, 0],
                                opacity: [0.2, 0.8, 0.2],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>

                <div className="max-w-[1240px] mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 text-center md:text-left">
                    <div className="relative z-10 cursor-default">
                        <h3 className="text-2xl md:text-5xl font-black text-white mb-2 md:mb-3 tracking-tight">Ready to Accelerate Your Business?</h3>
                        <p className="text-white/90 text-base md:text-xl font-medium">Join 43,000+ businesses running on the world&#39;s #1 Cloud ERP.</p>
                    </div>
                    <Link
                        href="#contact-form"
                        className="relative z-10 px-8 md:px-10 py-4 md:py-5 bg-white text-[#002a8c] hover:bg-blue-50 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 group text-lg md:text-xl whitespace-nowrap active:scale-95"
                    >
                        Get Started <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default NSKeyCapabilities;




