"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const logos = [
    { id: "affle", logo: "/images/assets/png-logos/affle-png.png", name: "Affle", link: "https://www.affle.com" },
    { id: "tyfone", logo: "/images/assets/png-logos/tyfone_tech-removebg-preview.png", name: "Tyfone", link: "https://www.tyfone.com" },
    { id: "airling", logo: "/images/assets/png-logos/airling_tech-removebg-preview.png", name: "Airling", link: "#" },
    { id: "videoverse", logo: "/images/assets/png-logos/video_verse_tech-removebg-preview.png", name: "VideoVerse", link: "https://www.videoverse.com" },
    { id: "quickheal", logo: "/images/assets/png-logos/quickheal-png.png", name: "Quick Heal", link: "https://www.quickheal.com" },
    { id: "controlservice", logo: "/images/assets/png-logos/control_service-removebg-preview.png", name: "Control Service", link: "#" },
    { id: "uniacco", logo: "/images/assets/png-logos/uniAcco-png.png", name: "UniAcco", link: "https://www.uniacco.com" },
    { id: "dlz", logo: "/images/assets/png-logos/dlz-png.png", name: "DLZ", link: "#" },
    { id: "indovance", logo: "/images/assets/png-logos/indovance_service-removebg-preview.png", name: "Indovance", link: "https://www.indovance.com" },
    { id: "pace", logo: "/images/assets/png-logos/pace_services-removebg-preview.png", name: "Pace", link: "#" },
];

const NSMetrics = () => {
    const { ref: sectionRef, inView: sectionInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [isHovered, setIsHovered] = useState(false);

    // Split headline into words for animation
    const headlineText = "83 % of companies meet or exceed their";
    const highlightText = "ROI expectations";
    const words = headlineText.split(" ");

    return (
        <section
            ref={sectionRef}
            className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif]"
            style={{
                background: "radial-gradient(at 0% 82.58333206176758%, #4a055c 0px, transparent 50%), radial-gradient(at 97.58620673212512% 84.0833330154419%, #10011f 0px, transparent 50%), radial-gradient(at 10.73275845626305% 10.12499968210856%, #000000 0px, transparent 50%), radial-gradient(at 48.66379293902167% 89.91666634877524%, #1000ed 0px, transparent 50%), #021526"
            }}
        >
            {/* Square Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    maskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,1) 60%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,1) 60%)"
                }}
            />

            <div className="relative z-10 max-w-5xl mx-auto px-6">
                <div className="text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-xl"
                    >
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                            4.9/5 · Top Rated NetSuite Partner 2025
                        </span>
                    </motion.div>

                    {/* Headline with Word-by-Word Animation */}
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight"
                    >
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                                className="inline-block mr-[0.3em]"
                            >
                                {word}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: 0.1 + words.length * 0.1 }}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                        >
                            {highlightText}
                        </motion.span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 + words.length * 0.1 }}
                        className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
                    >
                        AGSuite Technologies empowers businesses to meet and exceed ROI expectations with Oracle NetSuite.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 + words.length * 0.1 }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <button
                            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 active:scale-100"
                            suppressHydrationWarning={true}
                        >
                            Start For Free
                        </button>
                        <button
                            className="px-10 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-base transition-all backdrop-blur-sm hover:bg-white/10"
                            suppressHydrationWarning={true}
                        >
                            Get Demo
                        </button>
                    </motion.div>

                    {/* Statistics Above Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 + words.length * 0.1 }}
                        className="mt-16 mb-8"
                    >
                        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto px-6">
                            {/* Stat 1 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 1.0 + words.length * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <div>
                                    <div className="text-4xl font-bold text-white">2.5X</div>
                                    <div className="text-sm text-slate-300">Average lift in productivity</div>
                                </div>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 1.3 + words.length * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <div>
                                    <div className="text-4xl font-bold text-white">31%</div>
                                    <div className="text-sm text-slate-300">Average cost reduction</div>
                                </div>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 1.6 + words.length * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <div>
                                    <div className="text-4xl font-bold text-white">25%</div>
                                    <div className="text-sm text-slate-300">Revenue growth rate</div>
                                </div>
                            </motion.div>

                            {/* Stat 4 */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 1.9 + words.length * 0.1 }}
                                className="flex items-center gap-3"
                            >
                                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                </svg>
                                <div>
                                    <div className="text-4xl font-bold text-white">129%</div>
                                    <div className="text-sm text-slate-300">Average ROI increase</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* NetSuite Dashboard Image with Side Images */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 1, delay: 0.5 + words.length * 0.1, ease: "easeOut" }}
                        className="relative"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-cyan-500/10 blur-[100px] rounded-full -z-10" />

                        {/* Desktop / Tablet collage layout */}
                        <div className="hidden items-center justify-center md:flex">
                            {/* Left images (come from right) */}
                            <motion.div
                                className="hidden lg:block -mr-2"
                                initial={{ x: 80, opacity: 0 }}
                                animate={sectionInView ? { x: 0, opacity: 1 } : { x: 80, opacity: 0 }}
                                transition={{ duration: 0.9, delay: 2.2 + words.length * 0.1, ease: "easeOut" }}
                            >
                                <div className="relative h-40 w-32 overflow-hidden rounded-2xl shadow-lg lg:h-44 lg:w-36 xl:h-72 xl:w-30 translate-y-6">
                                    <Image
                                        src="/images/people/laptopgirl3.webp"
                                        alt="Professional using NetSuite"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1280px) 150px, 120px"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="hidden md:block -mr-3"
                                initial={{ x: 90, opacity: 0 }}
                                animate={sectionInView ? { x: 0, opacity: 1 } : { x: 90, opacity: 0 }}
                                transition={{ duration: 0.9, delay: 2.4 + words.length * 0.1, ease: "easeOut" }}
                            >
                                <div className="relative h-52 w-40 overflow-hidden rounded-2xl shadow-lg lg:h-60 lg:w-48 xl:h-94 xl:w-42 translate-y-2">
                                    <Image
                                        src="/images/people/laptopmen.webp"
                                        alt="Business analyst with NetSuite"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1280px) 200px, 160px"
                                    />
                                </div>
                            </motion.div>

                            {/* Main Dashboard with Hover Zoom */}
                            <motion.div
                                className="relative z-20 shrink-0"
                                initial={{ y: 60, opacity: 0, scale: 0.9 }}
                                animate={sectionInView ? { y: 0, opacity: 1, scale: 1 } : { y: 60, opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.9, delay: 2.0 + words.length * 0.1, ease: "easeOut" }}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <motion.div
                                    animate={{ scale: isHovered ? 1.05 : 1 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="relative"
                                >
                                    <div className="relative h-72 w-[420px] overflow-hidden rounded-3xl shadow-2xl bg-white lg:h-80 lg:w-[520px] xl:h-[420px] xl:w-[680px] border-2 border-white/20 hover:border-white/40 transition-all duration-300">
                                        <Image
                                            src="/images/Dashboard/NetsuiteDashboard.webp"
                                            alt="NetSuite Dashboard"
                                            fill
                                            sizes="(min-width: 1280px) 680px, (min-width: 1024px) 520px, 420px"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right images (come from left) */}
                            <motion.div
                                className="hidden md:block -ml-3"
                                initial={{ x: -90, opacity: 0 }}
                                animate={sectionInView ? { x: 0, opacity: 1 } : { x: -90, opacity: 0 }}
                                transition={{ duration: 0.9, delay: 2.6 + words.length * 0.1, ease: "easeOut" }}
                            >
                                <div className="relative h-52 w-40 overflow-hidden rounded-2xl shadow-lg lg:h-60 lg:w-48 xl:h-94 xl:w-42 translate-y-2">
                                    <Image
                                        src="/images/people/laptopmen2.webp"
                                        alt="NetSuite user"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1280px) 200px, 160px"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="hidden lg:block -ml-2"
                                initial={{ x: -80, opacity: 0 }}
                                animate={sectionInView ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
                                transition={{ duration: 0.9, delay: 2.8 + words.length * 0.1, ease: "easeOut" }}
                            >
                                <div className="relative h-40 w-32 overflow-hidden rounded-2xl shadow-lg lg:h-44 lg:w-36 xl:h-72 xl:w-30 translate-y-6">
                                    <Image
                                        src="/images/people/laptopgirl.webp"
                                        alt="Professional working with NetSuite"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1280px) 150px, 120px"
                                    />
                                </div>
                            </motion.div>
                        </div>

                        {/* Mobile: just the center dashboard */}
                        <motion.div
                            className="block md:hidden"
                            initial={{ y: 40, opacity: 0, scale: 0.95 }}
                            animate={sectionInView ? { y: 0, opacity: 1, scale: 1 } : { y: 40, opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.9, delay: 2.0 + words.length * 0.1, ease: "easeOut" }}
                        >
                            <div className="relative max-w-3xl mx-auto">
                                <Image
                                    src="/images/Dashboard/NetsuiteDashboard.webp"
                                    alt="NetSuite Dashboard"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto rounded-2xl shadow-2xl shadow-blue-500/30 border-2 border-white/20"
                                    priority
                                />
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* TRUSTED PARTNERS MARQUEE */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 3.0 + words.length * 0.1 }}
                        className="w-full border-t border-white/10 pt-8 mt-10"
                    >
                        <p className="mb-8 text-center text-2xl font-medium uppercase text-gray-200 tracking-wide">
                            Trusted by industry leading brands
                        </p>

                        <div className="relative w-full overflow-hidden py-2">
                            <div className="animate-marquee whitespace-nowrap flex items-center gap-5">
                                {logos.concat(logos).map((logo, index) => (
                                    <div key={index} className="inline-flex">
                                        <a
                                            href={logo.link || "#"}
                                            target={logo.link !== "#" ? "_blank" : undefined}
                                            rel={logo.link !== "#" ? "noopener noreferrer" : undefined}
                                            className="flex h-12 w-40 sm:h-16 sm:w-44 items-center justify-center transition-all duration-300"
                                            aria-label={logo.name}
                                        >
                                            <Image
                                                src={logo.logo}
                                                alt={`${logo.name} logo`}
                                                width={190}
                                                height={60}
                                                className="h-15 sm:h-26 w-auto object-contain brightness-0 invert opacity-100 hover:opacity-100 hover:brightness-100 hover:invert-0 transition-all duration-300"
                                            />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <style jsx global>{`
                @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50.5%); }
                }
                .animate-marquee {
                display: inline-flex;
                animation: marquee 30s linear infinite;
                will-change: transform;
                }
                .animate-marquee:hover {
                animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default NSMetrics;
