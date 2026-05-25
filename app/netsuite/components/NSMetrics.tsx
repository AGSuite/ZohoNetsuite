"use client";

import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// pad: extra inner padding percentage (0–12) to visually balance logos with lots of whitespace or unusual aspect ratios
// unopt: true = skip Next.js image optimisation (for tiny/low-res PNGs that blur when resampled)
const logos = [
    // aspect ratios measured from actual files — pad tunes how much the logo shrinks inside the card
    // Card inner area (h-16 w-44 = 64×176px): inner_h = 64-(pad*4), inner_w = 176-(pad*6)
    { id: "affle", logo: "/images/assets/affle%20tech.webp", name: "Affle", link: "https://www.affle.com", pad: 4 },  // aspect 2.4
    { id: "tyfone", logo: "/images/assets/tyfone%20tech.webp", name: "Tyfone", link: "https://www.tyfone.com", pad: 4 },  // aspect 2.3
    { id: "airling", logo: "/images/assets/airling%20tech.webp", name: "Airling", link: "#", pad: 4 },
    { id: "videoverse", logo: "/images/netuite%20client%20images/videoverse.png", name: "VideoVerse", link: "https://www.videoverse.com", pad: 1, unopt: true },  // 318×159 low-res
    { id: "quickheal", logo: "/images/assets/quickheal%20tech.webp", name: "Quick Heal", link: "https://www.quickheal.com", pad: 7 },
    { id: "uniacco", logo: "/images/netuite%20client%20images/uniacco.png", name: "UniAcco", link: "https://www.uniacco.com", pad: 4 },  // aspect 4.27
    { id: "dlz", logo: "/images/assets/dlz%20service.webp", name: "DLZ", link: "#", pad: 4 },
    { id: "indovance", logo: "/images/netuite%20client%20images/Indovance-new-logo.webp", name: "Indovance", link: "https://www.indovance.com", pad: 5 },  // very wide thin text
    { id: "pace", logo: "/images/assets/pace%20services.webp", name: "Pace", link: "#", pad: 4 },
    { id: "aidash", logo: "/images/netuite%20client%20images/aidashlogo.png", name: "AiDash", link: "#", pad: 4, unopt: true },  // 200×100 low-res
    { id: "controlcase", logo: "/images/netuite%20client%20images/controlcase.png", name: "ControlCase", link: "#", pad: 4 },  // aspect 4.72
    { id: "escalent", logo: "/images/netuite%20client%20images/escalent.webp", name: "Escalent", link: "#", pad: 5 },  // aspect 3.5
    { id: "finn", logo: "/images/netuite%20client%20images/FINN-Logo(1).jpg", name: "Finn", link: "#", pad: 4 },  // aspect 2 — has whitespace
    { id: "flatworld", logo: "/images/netuite%20client%20images/flatworld.png", name: "Flatworld", link: "#", pad: 9 },  // aspect 3.51 — large orb icon
    { id: "coastal", logo: "/images/netuite%20client%20images/image%20(13).png", name: "Coastal", link: "#", pad: 4 },  // aspect 3.55
    { id: "kale", logo: "/images/netuite%20client%20images/kale.png", name: "Kale", link: "#", pad: 8 },  // aspect 3.11 — has tagline
    { id: "keycraft", logo: "/images/netuite%20client%20images/keycraft.png", name: "Keycraft", link: "#", pad: 8 },  // aspect 2.82 — tall & wide
    { id: "modaxo", logo: "/images/netuite%20client%20images/modaxo.png", name: "Modaxo", link: "#", pad: 5 },  // aspect 3.47
    { id: "prioritytire", logo: "/images/netuite%20client%20images/prioritytire.png", name: "Priority Tire", link: "#", pad: 5 },  // aspect 5.43
    { id: "signal", logo: "/images/netuite%20client%20images/signal.png", name: "Signal", link: "#", pad: 5, unopt: true },  // 244×58 low-res
    { id: "traxon", logo: "/images/netuite%20client%20images/traxon.png", name: "Traxon", link: "#", pad: 4 },  // aspect 3.96
    { id: "tsi", logo: "/images/netuite%20client%20images/tsi-logo.png", name: "TSI", link: "#", pad: 4 },  // aspect 6.48 — very wide
    { id: "loylogic", logo: "/images/netuite%20client%20images/loylogic.png", name: "LoyLogic", link: "#", pad: 2 },  // aspect 0.96 SQUARE — minimal pad
];


// Reusable fade-up variant
const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: "easeOut", delay },
    }),
};

const NSMetrics = () => {
    const [isHovered, setIsHovered] = useState(false);

    // Each block gets its OWN inView ref so it fires when it scrolls into view
    const { ref: badgeRef, inView: badgeInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: headlineRef, inView: headlineInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: subtextRef, inView: subtextInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.15 });
    const { ref: dashboardRef, inView: dashboardInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const { ref: marqueeRef, inView: marqueeInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    // Split headline into words for animation
    const headlineText = "83 % of companies meet or exceed their";
    const highlightText = "ROI expectations";
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
                        ref={badgeRef}
                        initial={{ opacity: 0, y: 24 }}
                        animate={badgeInView ? { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut", delay: 0 } } : {}}
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
                        ref={headlineRef}
                        className="text-4xl md:text-6xl lg:text-5xl font-semibold text-white mb-6 tracking-tight leading-tight"
                    >
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 18 }}
                                animate={headlineInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
                                className="inline-block mr-[0.3em]"
                            >
                                {word}
                            </motion.span>
                        ))}
                        <motion.span
                            initial={{ opacity: 0, y: 18 }}
                            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.35, ease: "easeOut", delay: words.length * 0.07 }}
                            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
                        >
                            {highlightText}
                        </motion.span>
                    </motion.h2>

                    {/* Subtext */}
                    <motion.p
                        ref={subtextRef}
                        initial={{ opacity: 0, y: 18 }}
                        animate={subtextInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-medium leading-relaxed"
                    >
                        AGSuite Technologies empowers businesses to meet and exceed ROI expectations with Oracle NetSuite.
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
                            href="#contact-form"
                            className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-base transition-all shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-105 active:scale-100"
                            suppressHydrationWarning={true}
                        >
                            Get Free Consultation
                        </Link>
                        <Link
                            href="/netsuite/contact"
                            className="px-10 py-4 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-xl font-bold text-base transition-all backdrop-blur-sm hover:bg-white/10"
                            suppressHydrationWarning={true}
                        >
                            Get Demo
                        </Link>
                    </motion.div>

                    {/* Statistics Above Dashboard — each stat animates one by one on scroll */}
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
                                    <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                    </svg>
                                    <div>
                                        <div className="text-4xl font-bold text-white">{stat.value}</div>
                                        <div className="text-sm text-slate-300">{stat.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* NetSuite Dashboard Image with Side Images */}
                    <div ref={dashboardRef} className="relative">
                        {/* Glow Effect */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-cyan-500/10 blur-[100px] rounded-full -z-10" />

                        {/* Desktop / Tablet collage layout */}
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
                                        alt="Professional using NetSuite"
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
                                            src="/images/Dashboard/NetsuiteDashboard.webp"
                                            alt="NetSuite Dashboard"
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
                                        alt="NetSuite user"
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
                            initial={{ y: 30, opacity: 0, scale: 0.97 }}
                            animate={dashboardInView ? { y: 0, opacity: 1, scale: 1 } : { y: 30, opacity: 0, scale: 0.97 }}
                            transition={{ duration: 0.65, ease: "easeOut" }}
                        >
                            <div className="relative max-w-3xl mx-auto">
                                <Image
                                    src="/images/Dashboard/NetsuiteDashboard.webp"
                                    alt="NetSuite Dashboard"
                                    width={1200}
                                    height={600}
                                    className="w-full h-auto rounded-2xl shadow-2xl shadow-blue-500/30 border-2 border-white/20"
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
                        <p className="mb-8 text-center text-2xl font-medium uppercase text-gray-200 tracking-wide">
                            Trusted by industry leading brands
                        </p>

                        <div className="relative w-full overflow-hidden py-2">
                            <div className="animate-marquee whitespace-nowrap flex items-center">
                                {logos.concat(logos).map((logo, index) => {
                                    const p = logo.pad ?? 4;
                                    return (
                                        <div key={index} className="inline-flex px-4">
                                            <a
                                                href={logo.link || "#"}
                                                target={logo.link !== "#" ? "_blank" : undefined}
                                                rel={logo.link !== "#" ? "noopener noreferrer" : undefined}
                                                className="flex h-16 w-44 sm:h-20 sm:w-52 items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                                                style={{ padding: `${p * 2}px ${p * 3}px` }}
                                                aria-label={logo.name}
                                            >
                                                <div className="relative w-full h-full">
                                                    <Image
                                                        src={logo.logo}
                                                        alt={`${logo.name} logo`}
                                                        fill
                                                        sizes="(max-width: 640px) 176px, 208px"
                                                        className="object-contain transition-all duration-300"
                                                        unoptimized={logo.unopt === true}
                                                    />
                                                </div>
                                            </a>
                                        </div>
                                    );
                                })}
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

export default NSMetrics;




