"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight } from 'lucide-react';

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
        image: "/images/lap/lap3.webp",
        link: "/netsuite/solutions"
    },
    {
        id: 2,
        title: "Real-Time Business Visibility",
        subline: "Make faster, smarter decisions",
        description: "Enterprise leaders gain live dashboards, reporting, and analytics to monitor performance and act quickly.",
        image: "/images/lap/lap7_11zon.webp",
        link: "/netsuite/solutions"
    },
    {
        id: 3,
        title: "End-to-End Business Management",
        subline: "One platform for all operations",
        description: "Finance, CRM, inventory, procurement, and HR are managed in a single unified system.",
        image: "/images/lap/lap9_11zon.webp",
        link: "/netsuite/solutions"
    },
    {
        id: 4,
        title: "Automation & Operational Efficiency",
        subline: "Reduce manual work",
        description: "Automate workflows like billing, approvals, reporting, and financial close processes.",
        image: "/images/lap/lap6_11zon.webp",
        link: "/netsuite/solutions"
    },
    {
        id: 5,
        title: "Global Business Ready",
        subline: "Expand confidently across regions",
        description: "Multi-currency, multi-tax, and multi-subsidiary management enables international growth.",
        image: "/images/people/global.webp",
        link: "/netsuite/solutions"
    }
];

const NSKeyCapabilities = () => {
    const [activeTab, setActiveTab] = useState(capabilities[0].id);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const activeCapability = capabilities.find(cap => cap.id === activeTab) || capabilities[0];

    return (
        <section
            className="relative pt-24 pb-0 overflow-hidden bg-white"
        >
            <div className="relative z-10 max-w-[1240px] mx-auto px-6">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 tracking-tight"                    >
                        See why high-growth enterprises<br />run on NetSuite
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-stretch">
                    {/* Left Side - Image with Content */}
                    <div className="order-2 lg:order-1 relative min-h-[500px] lg:min-h-[650px] rounded-3xl overflow-hidden shadow-xl">
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
                                    src={activeCapability.image}
                                    alt={activeCapability.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />

                                {/* Black Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent z-10" />

                                {/* Content inside Image */}
                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-12">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="space-y-6"
                                    >
                                        <p className="text-white/95 text-xl leading-relaxed font-normal max-w-lg">
                                            {activeCapability.description}
                                        </p>

                                        <Link
                                            href={activeCapability.link}
                                            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-slate-900 rounded-lg hover:bg-[#2563eb] hover:text-white transition-all font-semibold group/btn"
                                        >
                                            Learn More <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Side - Interactive Points */}
                    <div className="order-1 lg:order-2 flex flex-col h-full bg-white border-t border-slate-100">
                        {capabilities.map((capability) => (
                            <button
                                key={capability.id}
                                onClick={() => setActiveTab(capability.id)}
                                className={`group relative flex-1 flex items-center px-4 text-left transition-all border-b border-slate-100 last:border-b-0 outline-none ${activeTab === capability.id ? 'bg-slate-50/50' : 'hover:bg-slate-50/30'
                                    }`}
                            >
                                {/* Active Indicator Line */}
                                {activeTab === capability.id && (
                                    <motion.div
                                        layoutId="active-line"
                                        className="absolute top-0 left-0 w-full h-[3px] bg-[#2563eb]"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}

                                <span className={`text-xl md:text-2xl transition-all duration-300 ${activeTab === capability.id
                                    ? 'text-slate-900 font-bold translate-x-3'
                                    : 'text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1'
                                    }`}>
                                    {capability.title}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Full-width Edge-to-Edge CTA - Touches bottom */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-18 relative overflow-hidden bg-gradient-to-br from-[#002a8c] via-[#0044cc] to-[#0099a3] shadow-[0_20px_50px_-15px_rgba(0,51,173,0.3)]"
            >
                {/* Background Star Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {isMounted && [...Array(15)].map((_, i) => (
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

                <div className="max-w-[1240px] mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="relative z-10 text-left cursor-default">
                        <h3 className="text-3xl md:text-5xl font-black text-white mb-3 tracking-tight">Ready to Accelerate Your Business?</h3>
                        <p className="text-white/90 text-lg md:text-xl font-medium">Join 38,000+ businesses running on the world's #1 Cloud ERP.</p>
                    </div>
                    <Link
                        href="/netsuite/contact"
                        className="relative z-10 px-10 py-5 bg-white text-[#002a8c] hover:bg-blue-50 rounded-xl font-bold transition-all shadow-xl flex items-center gap-3 group text-xl whitespace-nowrap active:scale-95"
                    >
                        Get Started <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </section>
    );
};

export default NSKeyCapabilities;
