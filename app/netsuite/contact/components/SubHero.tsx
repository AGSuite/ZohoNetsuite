"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SubHeroProps {
    title: string;
    subtitle: string;
    breadcrumb: string;
    gradientText: string;
}

const PARTICLES = [
    { w: 2, h: 2, top: 10, left: 15, dur: 5, delay: 0.3 },
    { w: 1.5, h: 1.5, top: 25, left: 70, dur: 4.2, delay: 1.1 },
    { w: 3, h: 3, top: 55, left: 8, dur: 6, delay: 0.7 },
    { w: 2, h: 2, top: 75, left: 88, dur: 4.8, delay: 2.0 },
];

export default function SubHero({ title, subtitle, breadcrumb, gradientText }: SubHeroProps) {
    return (
        <section className="relative h-[50vh] min-h-[400px] overflow-hidden bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d] flex items-center pt-20">
            {/* Grid lines */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                    backgroundSize: "70px 70px",
                }}
            />

            {/* Glow blobs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/4 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/4 pointer-events-none" />

            {/* Floating particles */}
            {PARTICLES.map((p, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full bg-blue-400/40 pointer-events-none"
                    style={{ width: p.w, height: p.h, top: `${p.top}%`, left: `${p.left}%` }}
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
                    transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                />
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left">
                {/* Breadcrumb */}
                <motion.nav
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center lg:justify-start gap-2 text-sm font-medium mb-12"
                >
                    <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    <Link href="/netsuite/contact" className="text-blue-300 hover:text-white transition-colors">Contact</Link>
                    <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    <span className="text-white/60">{breadcrumb}</span>
                </motion.nav>

                <div className="max-w-3xl mx-auto lg:mx-0">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6"
                    >
                        {title}{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                            {gradientText}
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    >
                        {subtitle}
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
