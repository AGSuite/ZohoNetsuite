"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, TrendingUp } from 'lucide-react';

const RollingNumber = ({ value, suffix = "" }: { value: string, suffix?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Extract numeric part
    const numericValue = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;

    const springValue = useSpring(0, {
        stiffness: 40,
        damping: 20,
        mass: 1,
    });

    const displayValue = useTransform(springValue, (current) => {
        if (value.includes('.')) {
            return current.toFixed(1);
        }
        return Math.floor(current).toLocaleString();
    });

    useEffect(() => {
        if (isInView) {
            springValue.set(numericValue);
        }
    }, [isInView, numericValue, springValue]);

    return (
        <span ref={ref} className="tabular-nums">
            <motion.span>{displayValue}</motion.span>
            <span>{value.replace(/[0-9.]/g, '')}{suffix}</span>
        </span>
    );
};

const mainStats = [
    {
        id: 1,
        value: "2.5X",
        subline: "increase in average project delivery speed for global logistics teams",
        image: "/images/people/laptopgirl3.webp",
        brand: "logistics"
    },
    {
        id: 2,
        value: "31%",
        subline: "reduction in operational overhead for multi-national manufacturers",
        image: "/images/people/laptopmen.webp",
        brand: "manufacturing"
    },
    {
        id: 3,
        value: "129%",
        subline: "average ROI achieved by our retail customers within the first year",
        image: "/images/people/laptopmen2.webp",
        brand: "retail"
    }
];

const NSKeyCapabilities = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <section
            className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif]"
            style={{
                background: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(34, 197, 94, 0.05) 50%, rgba(239, 68, 68, 0.08) 100%)"
            }}
        >
            {/* Background decorative blurs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[150px] -mr-96 -mt-48" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-green-400/10 rounded-full blur-[120px] -ml-48 -mb-24" />

            <div className="relative z-10 max-w-[1400px] mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-950 via-slate-900 to-blue-700 tracking-tighter mb-4"
                    >
                        See why high-growth enterprises<br />run on NetSuite
                    </motion.h2>
                </div>

                {/* Top Interactive Flex Track - REDUCED HEIGHT */}
                <div className="flex flex-col md:flex-row gap-5 mb-12 h-[380px]">
                    {mainStats.map((stat) => {
                        const isHovered = hoveredId === stat.id;
                        return (
                            <motion.div
                                key={stat.id}
                                onMouseEnter={() => setHoveredId(stat.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                className="relative overflow-hidden cursor-pointer h-full"
                                animate={{
                                    flex: isHovered ? 2 : 1,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 250,
                                    damping: 30,
                                    mass: 1
                                }}
                            >
                                <div className="relative h-full w-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl shadow-slate-200/50">
                                    {/* Image */}
                                    <Image
                                        src={stat.image}
                                        alt={stat.brand}
                                        fill
                                        className={`object-cover transition-transform duration-700 ${isHovered ? "scale-105 brightness-[0.7]" : "scale-100 brightness-[0.5]"
                                            }`}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                    />

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-blue-600/20 mix-blend-overlay z-10" />
                                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                                    {/* Brand Badge */}
                                    <div className="absolute top-6 right-6 z-20">
                                        <div className="bg-gray-900/50 backdrop-blur-md px-5 py-2.5 rounded-xl border border-white/30 flex items-center gap-4 shadow-lg shadow-blue-900/20">
                                            <Image
                                                src="/images/logos/agsuite_logo.webp"
                                                alt="AGSuite"
                                                width={100}
                                                height={32}
                                                className="h-6 w-auto object-contain "
                                            />
                                            <div className="w-px h-5 bg-white/40" />
                                            <Image
                                                src="/images/netsuiteimages/netsuitelogos/netsuitepartner1.png"
                                                alt="NetSuite Partner"
                                                width={100}
                                                height={32}
                                                className="h-6 w-auto object-contain brightness-0 invert"
                                            />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute bottom-8 left-8 right-8 z-20">
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-1.5">
                                                <TrendingUp className="w-5 h-5 text-green-500 fill-green-500/20" />
                                            </div>
                                            <h3 className="text-5xl font-black text-white tracking-tighter">
                                                <RollingNumber value={stat.value} />
                                            </h3>
                                            <p className={`text-white/90 font-medium leading-tight max-w-[280px] transition-all duration-500 ${isHovered ? "text-base opacity-100 translate-y-0" : "text-sm opacity-90"
                                                }`}>
                                                {stat.subline}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Premium CTA Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 bg-gradient-to-br from-[#0033ad] via-[#0055ff] to-[#00c2cb] rounded-[2.5rem] shadow-[0_40px_80px_-15px_rgba(0,51,173,0.35)] gap-8"
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

                    <div className="relative z-10 max-w-2xl text-left">
                        <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Ready to scale?</h3>
                        <p className="text-white/90 text-lg font-medium">Join 38,000+ businesses running on the world's #1 Cloud ERP.</p>
                    </div>
                    <Link
                        href="/netsuite/contact"
                        className="relative z-10 px-10 py-4 bg-white text-blue-700 hover:bg-blue-50 rounded-2xl font-bold transition-all shadow-xl flex items-center gap-3 group text-lg whitespace-nowrap active:scale-95"
                    >
                        Get Started <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default NSKeyCapabilities;
