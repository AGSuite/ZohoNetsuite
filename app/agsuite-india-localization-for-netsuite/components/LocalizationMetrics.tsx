"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Sparkles, ShieldCheck } from "lucide-react";

// ─────────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────────
const stats = [
  { value: "700+", label: "Projects Completed" },
  { value: "250+", label: "Customers Worldwide" },
  { value: "84%", label: "Customer Retention" },
  { value: "50+", label: "NetSuite Experts" },
  { value: "10+", label: "Countries Serving" },
  { value: "15+", label: "Years of Experience" },
  { value: "40+", label: "Global Roll-Outs" },
  { value: "15+", label: "Industry Expertise" },
];

const logos = [
  { id: "affle", logo: "/images/assets/affle%20tech.webp", name: "Affle", link: "https://www.affle.com", pad: 4 },
  { id: "tyfone", logo: "/images/assets/tyfone%20tech.webp", name: "Tyfone", link: "https://www.tyfone.com", pad: 4 },
  { id: "airling", logo: "/images/assets/airling%20tech.webp", name: "Airling", link: "#", pad: 4 },
  { id: "videoverse", logo: "/images/netuite%20client%20images/videoverse.png", name: "VideoVerse", link: "https://www.videoverse.com", pad: 1, unopt: true },
  { id: "quickheal", logo: "/images/assets/quickheal%20tech.webp", name: "Quick Heal", link: "https://www.quickheal.com", pad: 7 },
  { id: "uniacco", logo: "/images/netuite%20client%20images/uniacco.png", name: "UniAcco", link: "https://www.uniacco.com", pad: 4 },
  { id: "dlz", logo: "/images/assets/dlz%20service.webp", name: "DLZ", link: "#", pad: 4 },
  { id: "indovance", logo: "/images/netuite%20client%20images/Indovance-new-logo.webp", name: "Indovance", link: "https://www.indovance.com", pad: 5 },
  { id: "pace", logo: "/images/assets/pace%20services.webp", name: "Pace", link: "#", pad: 4 },
  { id: "aidash", logo: "/images/netuite%20client%20images/aidashlogo.png", name: "AiDash", link: "#", pad: 4, unopt: true },
  { id: "controlcase", logo: "/images/netuite%20client%20images/controlcase.png", name: "ControlCase", link: "#", pad: 4 },
  { id: "escalent", logo: "/images/netuite%20client%20images/escalent.webp", name: "Escalent", link: "#", pad: 5 },
  { id: "finn", logo: "/images/netuite%20client%20images/FINN-Logo(1).jpg", name: "Finn", link: "#", pad: 4 },
  { id: "flatworld", logo: "/images/netuite%20client%20images/flatworld.png", name: "Flatworld", link: "#", pad: 9 },
  { id: "coastal", logo: "/images/netuite%20client%20images/image%20(13).png", name: "Coastal", link: "#", pad: 4 },
  { id: "kale", logo: "/images/netuite%20client%20images/kale.png", name: "Kale", link: "#", pad: 8 },
  { id: "keycraft", logo: "/images/netuite%20client%20images/keycraft.png", name: "Keycraft", link: "#", pad: 8 },
  { id: "modaxo", logo: "/images/netuite%20client%20images/modaxo.png", name: "Modaxo", link: "#", pad: 5 },
  { id: "prioritytire", logo: "/images/netuite%20client%20images/prioritytire.png", name: "Priority Tire", link: "#", pad: 5 },
  { id: "signal", logo: "/images/netuite%20client%20images/signal.png", name: "Signal", link: "#", pad: 5, unopt: true },
  { id: "traxon", logo: "/images/netuite%20client%20images/traxon.png", name: "Traxon", link: "#", pad: 4 },
  { id: "tsi", logo: "/images/netuite%20client%20images/tsi-logo.png", name: "TSI", link: "#", pad: 4 },
  { id: "loylogic", logo: "/images/netuite%20client%20images/loylogic.png", name: "LoyLogic", link: "#", pad: 2 },
];

// ─────────────────────────────────────────────────────────────────
// Animated counter
// ─────────────────────────────────────────────────────────────────
function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <span>{value}</span>;

  const targetNumber = parseInt(match[1], 10);
  const suffix = match[2];

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => setDisplayValue(v));
    return () => unsub();
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      animate(count, targetNumber, { duration: 2.0, ease: "easeOut" });
    }
  }, [inView, targetNumber, count]);

  return <span>{displayValue}{suffix}</span>;
}

// ─────────────────────────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────────────────────────
export default function LocalizationMetrics() {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = React.useRef<HTMLElement>(null);

  const { ref: badgeRef, inView: badgeInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: headlineRef, inView: headlineInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: subtextRef, inView: subtextInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: dashboardRef, inView: dashboardInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: marqueeRef, inView: marqueeInView } = useInView({ triggerOnce: true, threshold: 0.1 });


  const headlineText = "Trusted Oracle NetSuite Solution Provider with";
  const highlightText = "15+ years of enterprise ERP excellence";
  const words = headlineText.split(" ");

  return (
    <section
      ref={containerRef}
      id="platform"
      className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif] bg-gradient-to-b from-white via-slate-50 to-blue-50/50 text-slate-900"
    >
      {/* Dotted Square Grid Pattern — Soft & Light behind center text, defined outwards */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        style={{
          maskImage: "radial-gradient(ellipse at 50% 28%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.85) 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 28%, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.4) 30%, rgba(0,0,0,0.85) 60%, transparent 100%)",
        }}
      >
        <defs>
          <pattern id="metrics-dotted-grid" width="44" height="44" patternUnits="userSpaceOnUse">
            <path
              d="M 44 0 L 0 0 0 44"
              fill="none"
              stroke="#2563eb"
              strokeWidth="1.5"
              strokeDasharray="2.5 3.5"
              strokeOpacity="0.32"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#metrics-dotted-grid)" />
      </svg>

      {/* Soft Center Text Backdrop Glow */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-white/70 rounded-full blur-[80px] pointer-events-none -z-0" />

      {/* 4 Light Corner Gradient Orbs */}
      <div className="absolute -top-28 -left-28 w-[650px] h-[650px] bg-gradient-to-br from-blue-300/40 via-cyan-200/30 to-indigo-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[650px] h-[650px] bg-gradient-to-bl from-purple-300/40 via-pink-200/25 to-sky-200/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] bg-gradient-to-tr from-sky-300/40 via-blue-200/30 to-purple-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-28 -right-20 w-[600px] h-[600px] bg-gradient-to-tl from-purple-300/40 via-indigo-200/30 to-blue-200/20 rounded-full blur-[130px] pointer-events-none" />

      {/* Visible Floating Dotted Orbital Rings */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-12 -left-12 w-[520px] h-[520px] rounded-full border-2 border-blue-500/30 border-dotted"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-16 -right-16 w-[580px] h-[580px] rounded-full border-2 border-purple-500/30 border-dotted"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] rounded-full border border-indigo-400/20 border-dashed pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">

          {/* Badge with Smooth Rise */}
          <motion.div
            ref={badgeRef}
            initial={{ opacity: 0, y: 24 }}
            animate={badgeInView ? { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } : {}}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-4 shadow-sm backdrop-blur-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            AGSuite Technologies
          </motion.div>

          {/* Headline with Word-by-Word Scroll Loading Animation */}
          <motion.h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={headlineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.07 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
            {/* Highlight Pill with Shimmer & Entrance */}
            <motion.span
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={headlineInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: words.length * 0.07 }}
              className="relative inline-flex items-center justify-center mx-1 my-1 align-middle"
            >
              <span className="relative inline-flex items-center justify-center p-[1.5px] rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-md">
                <span className="relative px-3.5 py-1 bg-white rounded-[14px] block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 font-extrabold">
                    {highlightText}
                  </span>
                </span>
              </span>
            </motion.span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            ref={subtextRef}
            initial={{ opacity: 0, y: 20 }}
            animate={subtextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
          >
            Empowering 250+ Indian enterprises and multinational subsidiaries with seamless tax automation, 100% statutory compliance, and dedicated NetSuite SuiteApp support.
          </motion.p>

          {/* Stats Roll Counter — Clean borderless layout with stagger animation */}
          <div ref={statsRef} className="mt-8 mb-14">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto px-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={`${stat.label}-${index}`}
                  initial={{ opacity: 0, y: 24, scale: 0.95 }}
                  animate={statsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.08 }}
                  className="flex items-center gap-2.5 sm:gap-3 shrink-0 group cursor-default"
                >
                  <motion.div
                    animate={statsInView ? { scale: [1, 1.25, 1] } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.08 }}
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-600 shrink-0 group-hover:translate-y-[-2px] transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                    </svg>
                  </motion.div>
                  <div className="text-left">
                    <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                      <AnimatedCounter value={stat.value} inView={statsInView} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-600 whitespace-nowrap font-bold mt-0.5">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dashboard Frame (Oracle NetSuite India Localization Dashboard with 3D Tilt Scroll Entrance) */}
          <div ref={dashboardRef} className="relative mt-10 perspective-[1200px]">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] bg-gradient-to-r from-blue-400/20 via-indigo-400/15 to-purple-400/15 blur-[90px] rounded-full -z-10" />

            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.94, rotateX: 12 }}
              animate={dashboardInView ? { y: 0, opacity: 1, scale: 1, rotateX: 0 } : { y: 50, opacity: 0, scale: 0.94, rotateX: 12 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative max-w-5xl mx-auto transform-gpu"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Browser-style chrome frame with distinct border */}
              <div className="rounded-3xl border-2 border-slate-300/90 ring-1 ring-blue-500/30 bg-white shadow-[0_30px_90px_-20px_rgba(30,58,138,0.28)] overflow-hidden transition-all duration-300">
                {/* Window bar */}
                <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 text-white border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                    <span className="text-xs text-slate-300 ml-4 font-mono tracking-wide hidden sm:inline-block">
                      Oracle NetSuite — India Localization SuiteApp Dashboard
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-blue-300 bg-white/10 px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    100% Tax Compliant
                  </div>
                </div>

                {/* Dashboard Image */}
                <motion.div
                  animate={{ scale: isHovered ? 1.02 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-[320px] sm:h-[480px] lg:h-[620px] overflow-hidden bg-slate-50"
                >
                  <Image
                    src="/images/Dashboard/indian localization 2 dashboard.webp"
                    alt="Oracle NetSuite India Localization SuiteApp Dashboard — AGSuite Technologies"
                    fill
                    sizes="(min-width: 1024px) 1000px, 100vw"
                    className="object-contain object-top"
                    priority
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Client Logos Marquee */}
          <motion.div
            ref={marqueeRef}
            initial={{ opacity: 0, y: 30 }}
            animate={marqueeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full border-t border-slate-200/80 pt-12 mt-16"
          >
            <p className="mb-8 text-center text-sm sm:text-base font-bold uppercase text-slate-500 tracking-wider">
              Trusted by 250+ Industry-Leading Brands Across India & Globally
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
                        className="flex h-16 w-44 sm:h-20 sm:w-52 items-center justify-center bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300"
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
          0%   { transform: translateX(0); }
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
}
