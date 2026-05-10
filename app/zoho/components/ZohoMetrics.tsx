"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const logos = [
    { id: "allwave", logo: "/images/zoho%20client%20images/all%20wave%20av.png", name: "All Wave AV", link: "#" },
    { id: "aurionpro", logo: "/images/zoho%20client%20images/aurionpro.png", name: "Aurionpro", link: "#" },
    { id: "avaso", logo: "/images/zoho%20client%20images/avaso.png", name: "Avaso", link: "#" },
    { id: "bettinelli", logo: "/images/zoho%20client%20images/Bettinelli.png", name: "Bettinelli", link: "#" },
    { id: "dahchi", logo: "/images/zoho%20client%20images/dahchi.png", name: "Dahchi", link: "#" },
    { id: "incuspaze", logo: "/images/zoho%20client%20images/incuspaze.png", name: "Incuspaze", link: "#" },
    { id: "indialand", logo: "/images/zoho%20client%20images/indialand.png", name: "IndiaLand", link: "#" },
    { id: "initium", logo: "/images/zoho%20client%20images/initium.png", name: "Initium", link: "#" },
    { id: "krishgen", logo: "/images/zoho%20client%20images/krishgen.png", name: "Krishgen", link: "#" },
    { id: "kta", logo: "/images/zoho%20client%20images/KTA.png", name: "KTA", link: "#" },
    { id: "rentopia", logo: "/images/zoho%20client%20images/rentopia.png", name: "Rentopia", link: "#" },
    { id: "samson", logo: "/images/zoho%20client%20images/samson.png", name: "Samson", link: "#" },
    { id: "shaurrya", logo: "/images/zoho%20client%20images/shaurrya.png", name: "Shaurrya", link: "#" },
    { id: "tardid", logo: "/images/zoho%20client%20images/tardid.png", name: "Tardid", link: "#" },
    { id: "vsn", logo: "/images/zoho%20client%20images/vsn.png", name: "VSN", link: "#" },
    { id: "waco", logo: "/images/zoho%20client%20images/Waco.png", name: "Waco", link: "#" },
    { id: "ziptrip", logo: "/images/zoho%20client%20images/ziptrip.png", name: "Ziptrip", link: "#" },
];

const ZohoMetrics = () => {
    const [isHovered, setIsHovered] = useState(false);

    const { ref: badgeRef, inView: badgeInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: headlineRef, inView: headlineInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: subtextRef, inView: subtextInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.15 });
    const { ref: dashboardRef, inView: dashboardInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: marqueeRef, inView: marqueeInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const headlineText = "87% of businesses improve their";
    const highlightText = "operational efficiency";
    const words = headlineText.split(" ");

    const stats = [
        { value: "600+", label: "Projects Completed" },
        { value: "15+", label: "Industry Expertise" },
        { value: "10+", label: "Countries Serving" },
        { value: "15+", label: "Years Experience" },
    ];

    return (
        <section
            className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif]"
            style={{
                background: "radial-gradient(at 0% 82.58333206176758%, #880e4f 0px, transparent 50%), radial-gradient(at 97.58620673212512% 84.0833330154419%, #311b92 0px, transparent 50%), radial-gradient(at 10.73275845626305% 10.12499968210856%, #1a1a1a 0px, transparent 50%), radial-gradient(at 48.66379293902167% 89.91666634877524%, #b71c1c 0px, transparent 50%), #0d000d"
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
                        ref={badgeRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={badgeInView ? { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay: 0 } } : {}}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-xl"
                    >
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} className="w-3 h-3 text-rose-500 fill-rose-500" />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">
                            4.9/5 · Zoho Premium Partner 2025
                        </span>
                    </motion.div>

                    {/* Headline with Simpler Animation */}
                    <motion.h2
                        ref={headlineRef}
                        initial={{ opacity: 0, y: 18 }}
                        animate={headlineInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="text-4xl md:text-6xl lg:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight"
                        style={{ willChange: 'transform, opacity' }}
                    >
                        {headlineText}{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-pink-400 to-red-400">
                            {highlightText}
                        </span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        ref={subtextRef}
                        initial={{ opacity: 0, y: 18 }}
                        animate={subtextInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-rose-100 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
                    >
                        AGSuite Technologies helps organizations transform their operations and maximize growth with the Zoho software suite.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        ref={ctaRef}
                        initial={{ opacity: 0, y: 18 }}
                        animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex flex-wrap items-center justify-center gap-4"
                    >
                        <Link
                            href="/zoho/contact/free-consultation"
                            className="px-10 py-4 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-rose-600/30 hover:shadow-xl hover:shadow-rose-600/40 hover:scale-105 active:scale-100"
                        >
                            Get Free Consultation
                        </Link>
                        <Link
                            href="/zoho/contact"
                            className="px-10 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-base transition-all backdrop-blur-sm hover:bg-white/10"
                        >
                            Get Demo
                        </Link>
                    </motion.div>

                    {/* Statistics Above Dashboard */}
                    <div ref={statsRef} className="mt-16 mb-8">
                        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto px-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={`${stat.label}-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={statsInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.18 }}
                                    className="flex items-center gap-3"
                                >
                                    <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    <div>
                                        <div className="text-4xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-rose-200">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Zoho Dashboard Image with Side Images */}
                    <div ref={dashboardRef} className="relative">
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-rose-500/20 via-pink-500/15 to-purple-500/10 blur-[100px] rounded-full -z-10" />

                        <div className="hidden items-center justify-center md:flex">
                            {/* Left images */}
                            <motion.div
                                className="hidden lg:block -mr-2"
                                initial={{ x: 60, opacity: 0 }}
                                animate={dashboardInView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
                                transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
                            >
                                <div className="relative h-40 w-32 overflow-hidden rounded-2xl shadow-lg lg:h-44 lg:w-36 xl:h-72 xl:w-30 translate-y-6">
                                    <Image
                                        src="/images/people/laptopgirl3.webp"
                                        alt="Professional using Zoho"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1280px) 150px, 120px"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="hidden md:block -mr-3"
                                initial={{ x: 60, opacity: 0 }}
                                animate={dashboardInView ? { x: 0, opacity: 1 } : { x: 60, opacity: 0 }}
                                transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 }}
                            >
                                <div className="relative h-52 w-40 overflow-hidden rounded-2xl shadow-lg lg:h-60 lg:w-48 xl:h-94 xl:w-42 translate-y-2">
                                    <Image
                                        src="/images/people/laptopmen.webp"
                                        alt="Business analyst with Zoho"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1280px) 200px, 160px"
                                    />
                                </div>
                            </motion.div>

                            {/* Main Dashboard with Hover Zoom */}
                            <motion.div
                                className="relative z-20 shrink-0"
                                initial={{ y: 40, opacity: 0, scale: 0.95 }}
                                animate={dashboardInView ? { y: 0, opacity: 1, scale: 1 } : { y: 40, opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.65, ease: "easeOut", delay: 0 }}
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
                                            src="/images/Dashboard/zohodash.webp"
                                            alt="Zoho Dashboard"
                                            fill
                                            sizes="(min-width: 1280px) 680px, (min-width: 1024px) 520px, 420px"
                                            className="object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* Right images */}
                            <motion.div
                                className="hidden md:block -ml-3"
                                initial={{ x: -60, opacity: 0 }}
                                animate={dashboardInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
                                transition={{ duration: 0.65, ease: "easeOut", delay: 0.3 }}
                            >
                                <div className="relative h-52 w-40 overflow-hidden rounded-2xl shadow-lg lg:h-60 lg:w-48 xl:h-94 xl:w-42 translate-y-2">
                                    <Image
                                        src="/images/people/laptopmen2.webp"
                                        alt="Zoho user"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1280px) 200px, 160px"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                className="hidden lg:block -ml-2"
                                initial={{ x: -60, opacity: 0 }}
                                animate={dashboardInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }}
                                transition={{ duration: 0.65, ease: "easeOut", delay: 0.15 }}
                            >
                                <div className="relative h-40 w-32 overflow-hidden rounded-2xl shadow-lg lg:h-44 lg:w-36 xl:h-72 xl:w-30 translate-y-6">
                                    <Image
                                        src="/images/people/laptopgirl.webp"
                                        alt="Professional working with Zoho"
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
                            initial={{ y: 30, opacity: 0, scale: 0.97 }}
                            animate={dashboardInView ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                        >
                            <div className="relative max-w-3xl mx-auto">
                                <Image
                                    src="/images/Dashboard/zohodash.webp"
                                    alt="Zoho Dashboard"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto rounded-2xl shadow-2xl shadow-rose-500/30 border-2 border-white/20"
                                    priority
                                    sizes="100vw"
                                />
                            </div>
                        </motion.div>
                    </div>

                    {/* TRUSTED PARTNERS MARQUEE */}
                    <motion.div
                        ref={marqueeRef}
                        initial={{ opacity: 0, y: 30 }}
                        animate={marqueeInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="w-full border-t border-white/10 pt-8 mt-10"
                    >
                        <p className="mb-8 text-center text-2xl font-medium uppercase text-rose-100 tracking-wide">
                            Trusted by industry leading brands
                        </p>

                        <div className="relative w-full overflow-hidden py-10">
                            <div className="animate-marquee whitespace-nowrap flex items-center" style={{ willChange: 'transform' }}>
                                {logos.concat(logos).map((logo, index) => (
                                    <div key={index} className="inline-flex px-4">
                                        <a
                                            href={logo.link || "#"}
                                            target={logo.link !== "#" ? "_blank" : undefined}
                                            rel={logo.link !== "#" ? "noopener noreferrer" : undefined}
                                            className="flex h-16 w-36 sm:h-18 sm:w-44 items-center justify-center bg-white rounded-2xl shadow-sm transition-all duration-300 p-2"
                                            aria-label={logo.name}
                                        >
                                            <Image
                                                src={logo.logo}
                                                alt={`${logo.name} logo`}
                                                width={200}
                                                height={65}
                                                sizes="200px"
                                                className={`max-h-full w-auto object-contain transition-all duration-300 ${logo.id === 'quickheal' ? 'px-4' : 'px-2'}`}
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
                100% { transform: translateX(-50%); }
                }
                .animate-marquee {
                display: inline-flex;
                animation: marquee 60s linear infinite;
                will-change: transform;
                }
                .animate-marquee:hover {
                animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default ZohoMetrics;
