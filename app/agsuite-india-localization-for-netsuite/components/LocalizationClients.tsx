"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Sparkles, Users, TrendingUp, Award } from "lucide-react";

interface LogoItem {
  id: string;
  logo: string;
  name: string;
  link: string;
  pad?: number;
  unopt?: boolean;
}

// Exactly the same 11 client logos that were in the metrics section
const logos: LogoItem[] = [
  { id: "affle", logo: "/images/assets/affle%20tech.webp", name: "Affle", link: "https://www.affle.com", pad: 3 },
  { id: "videoverse", logo: "/images/netsuite-clients/videoverse.webp", name: "VideoVerse", link: "https://www.videoverse.com", pad: 2 },
  { id: "aidash", logo: "/images/netsuite-clients/aidashlogo.webp", name: "AiDash", link: "https://www.aidash.com", pad: 3 },
  { id: "finn", logo: "/images/netsuite-clients/finn-logo1.webp", name: "Finn Partners", link: "https://www.finnpartners.com", pad: 3 },
  { id: "traxon", logo: "/images/netsuite-clients/traxon.webp", name: "Traxon", link: "#", pad: 3 },
  { id: "uniacco", logo: "/images/netsuite-clients/uniacco.webp", name: "UniAcco", link: "https://www.uniacco.com", pad: 3 },
  { id: "veeam", logo: "/images/netsuite-clients/veeam.png", name: "Veeam", link: "https://www.veeam.com", pad: 2 },
  { id: "cfarer", logo: "/images/netsuite-clients/cfarer.png", name: "Cfarer (A DNV Company)", link: "https://www.cfarer.com", pad: 2 },
  { id: "konrad", logo: "/images/netsuite-clients/konrad.png", name: "Konrad", link: "https://www.konrad.com", pad: 2 },
  { id: "havas", logo: "/images/netsuite-clients/havas.png", name: "Havas", link: "https://www.havas.com", pad: 2 },
  { id: "colorifix", logo: "/images/netsuite-clients/colorifix.png", name: "Colorifix", link: "https://www.colorifix.com", pad: 2 },
];

export default function LocalizationClients() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={containerRef}
      id="clients"
      aria-label="Trusted Industry Leaders"
      className="relative py-14 sm:py-16 overflow-hidden bg-white border-y border-slate-100 scroll-mt-20"
    >
      {/* Background Soft Gradient Glows (Diagonal Red & Green Corners) */}
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        {/* Diagonal Corner 1 (Top-Left): Soft Light Red / Rose Glow */}
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] bg-gradient-to-br from-rose-200/40 via-red-100/25 to-transparent rounded-full blur-[130px]" />
        
        {/* Diagonal Corner 2 (Bottom-Right): Soft Light Green / Emerald Glow */}
        <div className="absolute -bottom-32 -right-32 w-[520px] h-[520px] bg-gradient-to-tl from-emerald-200/40 via-green-100/25 to-transparent rounded-full blur-[130px]" />
        
        {/* Diagonal Corner 3 (Top-Right): Very Soft Mint Green Tint */}
        <div className="absolute -top-36 -right-36 w-[420px] h-[420px] bg-gradient-to-bl from-green-100/20 via-emerald-50/10 to-transparent rounded-full blur-[110px]" />

        {/* Diagonal Corner 4 (Bottom-Left): Very Soft Rose Peach Tint */}
        <div className="absolute -bottom-36 -left-36 w-[420px] h-[420px] bg-gradient-to-tr from-rose-100/20 via-red-50/10 to-transparent rounded-full blur-[110px]" />
        
        {/* Dotted Square Grid Pattern */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          style={{
            maskImage: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 50%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.75) 50%, transparent 100%)",
          }}
        >
          <defs>
            <pattern id="clients-dotted-grid" width="44" height="44" patternUnits="userSpaceOnUse">
              <path
                d="M 44 0 L 0 0 0 44"
                fill="none"
                stroke="#2563eb"
                strokeWidth="1.2"
                strokeDasharray="2.5 3.5"
                strokeOpacity="0.2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#clients-dotted-grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center">
        {/* Top Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3.5 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Trusted by 250+ High-Growth Enterprises</span>
        </motion.div>

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 14 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight"
        >
          Trusted by Industry-Leading Brands Across India & Globally
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2, ease: "easeOut" }}
          className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium"
        >
          Leading enterprises rely on AGSuite for seamless Oracle NetSuite ERP implementations, 
          automated GST compliance, e-Invoicing, and statutory tax reporting.
        </motion.p>
      </div>

      {/* Marquee Container with Left/Right Fades */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Left & Right Gradient Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 z-10 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none" />

        <div className="animate-clients-marquee whitespace-nowrap flex items-center">
          {logos.concat(logos).map((logo, index) => {
            const p = logo.pad ?? 4;
            return (
              <div key={`${logo.id}-${index}`} className="inline-flex px-3 sm:px-4">
                <a
                  href={logo.link || "#"}
                  target={logo.link !== "#" ? "_blank" : undefined}
                  rel={logo.link !== "#" ? "noopener noreferrer" : undefined}
                  className="group flex h-16 w-44 sm:h-20 sm:w-52 items-center justify-center bg-white rounded-2xl border border-slate-100/90 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_25px_-5px_rgba(37,99,235,0.12)] hover:border-slate-200/80 hover:-translate-y-0.5 transition-all duration-300"
                  style={{ padding: `${p * 2}px ${p * 3}px` }}
                  aria-label={logo.name}
                >
                  <div className="relative w-full h-full transition-all duration-300 transform group-hover:scale-105">
                    <Image
                      src={logo.logo}
                      alt={`${logo.name} logo`}
                      fill
                      sizes="(max-width: 640px) 176px, 208px"
                      className="object-contain"
                      unoptimized={logo.unopt === true}
                    />
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Key Highlights Bar */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 mt-7">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10 py-3 px-6 rounded-2xl bg-gradient-to-r from-slate-50/90 via-blue-50/30 to-slate-50/90 border border-slate-100/90 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-600 shrink-0" />
            <span><strong className="text-slate-900 font-bold text-sm sm:text-base">250+</strong> Happy Clients</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
            <span><strong className="text-slate-900 font-bold text-sm sm:text-base">84%</strong> Customer Retention</span>
          </div>
          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500 shrink-0" />
            <span><strong className="text-slate-900 font-bold text-sm sm:text-base">15+</strong> Years of Experience</span>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes clientsMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .animate-clients-marquee {
          display: inline-flex;
          animation: clientsMarquee 40s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          perspective: 1000px;
          -webkit-perspective: 1000px;
          transform: translate3d(0, 0, 0);
        }
        .animate-clients-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
