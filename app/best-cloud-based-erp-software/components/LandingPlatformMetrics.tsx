"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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

const clientLogos = [
  { id: "affle", logo: "/images/assets/affle%20tech.webp", name: "Affle", link: "https://www.affle.com", pad: 4 },
  { id: "tyfone", logo: "/images/assets/tyfone%20tech.webp", name: "Tyfone", link: "https://www.tyfone.com", pad: 4 },
  { id: "airling", logo: "/images/assets/airling%20tech.webp", name: "Airling", link: "#", pad: 4 },
  { id: "videoverse", logo: "/images/netsuite-clients/videoverse.webp", name: "VideoVerse", link: "https://www.videoverse.com", pad: 1 },
  { id: "quickheal", logo: "/images/assets/quickheal%20tech.webp", name: "Quick Heal", link: "https://www.quickheal.com", pad: 7 },
  { id: "uniacco", logo: "/images/netsuite-clients/uniacco.webp", name: "UniAcco", link: "https://www.uniacco.com", pad: 4 },
  { id: "dlz", logo: "/images/assets/dlz%20service.webp", name: "DLZ", link: "#", pad: 4 },
  { id: "indovance", logo: "/images/netsuite-clients/indovance-new-logo.webp", name: "Indovance", link: "https://www.indovance.com", pad: 5 },
  { id: "pace", logo: "/images/assets/pace%20services.webp", name: "Pace", link: "#", pad: 4 },
  { id: "aidash", logo: "/images/netsuite-clients/aidashlogo.webp", name: "AiDash", link: "#", pad: 4 },
  { id: "controlcase", logo: "/images/netsuite-clients/controlcase.webp", name: "ControlCase", link: "#", pad: 4 },
  { id: "escalent", logo: "/images/netsuite-clients/escalent.webp", name: "Escalent", link: "#", pad: 5 },
  { id: "finn", logo: "/images/netsuite-clients/finn-logo1.webp", name: "Finn", link: "#", pad: 4 },
  { id: "flatworld", logo: "/images/netsuite-clients/flatworld.webp", name: "Flatworld", link: "#", pad: 9 },
  { id: "kale", logo: "/images/netsuite-clients/kale.webp", name: "Kale", link: "#", pad: 8 },
  { id: "keycraft", logo: "/images/netsuite-clients/keycraft.webp", name: "Keycraft", link: "#", pad: 8 },
  { id: "modaxo", logo: "/images/netsuite-clients/modaxo.webp", name: "Modaxo", link: "#", pad: 5 },
  { id: "prioritytire", logo: "/images/netsuite-clients/prioritytire.webp", name: "Priority Tire", link: "#", pad: 5 },
  { id: "signal", logo: "/images/netsuite-clients/signal.webp", name: "Signal", link: "#", pad: 5 },
  { id: "traxon", logo: "/images/netsuite-clients/traxon.webp", name: "Traxon", link: "#", pad: 4 },
  { id: "tsi", logo: "/images/netsuite-clients/tsi-logo.webp", name: "TSI", link: "#", pad: 4 },
  { id: "loylogic", logo: "/images/netsuite-clients/loylogic.webp", name: "LoyLogic", link: "#", pad: 2 },
];

// ─────────────────────────────────────────────────────────────────
// Animated counter (counts up from 0 on scroll into view)
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
// Component
// ─────────────────────────────────────────────────────────────────
export default function LandingPlatformMetrics() {
  const [isHovered, setIsHovered] = useState(false);

  const { ref: badgeRef, inView: badgeInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: headlineRef, inView: headlineInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: subtextRef, inView: subtextInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: dashboardRef, inView: dashboardInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: marqueeRef, inView: marqueeInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  // Word-by-word headline animation (same as NSMetrics)
  const headlineText = "AGSuite Tech — Certified Oracle NetSuite Solution Provider with";
  const highlightText = "15+ years of enterprise ERP excellence";
  const words = headlineText.split(" ");

  return (
    <section
      id="platform"
      className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif] text-white"
      style={{
        background:
          "radial-gradient(at 0% 82.5%, #4a055c 0px, transparent 50%), radial-gradient(at 97.5% 84%, #10011f 0px, transparent 50%), radial-gradient(at 10% 10%, #000000 0px, transparent 50%), radial-gradient(at 48% 89%, #1000ed 0px, transparent 50%), #021526"
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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center">

          {/* Badge */}
          <motion.div
            ref={badgeRef}
            initial={{ opacity: 0, y: 24 }}
            animate={badgeInView ? { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } } : {}}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-xs"
          >
            Trusted NetSuite Solution Provider
          </motion.div>

          {/* Headline */}
          <motion.h2
            ref={headlineRef}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-5 tracking-tight leading-tight"
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 18 }}
                animate={headlineInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.08 }}
                className="inline-block mr-[0.3em]"
              >
                {word}
              </motion.span>
            ))}
            {/* Highlight pill */}
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={headlineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, ease: "easeOut", delay: words.length * 0.08 }}
              className="relative inline-flex items-center justify-center mx-1 my-1 group/pill align-middle cursor-pointer"
            >
              <span className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-rose-300 via-purple-300 to-sky-300 blur-md opacity-0 group-hover/pill:opacity-100 transition duration-300" />
              <span className="relative inline-flex items-center justify-center p-[1.5px] rounded-2xl overflow-hidden transition-all duration-300">
                <span className="absolute inset-0 bg-gradient-to-r from-rose-300/40 via-purple-300/40 to-sky-300/40 group-hover/pill:from-rose-400 group-hover/pill:via-purple-400 group-hover/pill:to-sky-400 rounded-2xl transition-all duration-300" />
                <span className="relative px-3.5 py-1 bg-white/10 group-hover/pill:bg-white backdrop-blur-md rounded-[14px] block transition-colors duration-300">
                  <span className="text-white group-hover/pill:text-black font-medium transition-colors duration-300">
                    {highlightText}
                  </span>
                </span>
              </span>
            </motion.span>
          </motion.h2>

          {/* Subtext */}
          <motion.p
            ref={subtextRef}
            initial={{ opacity: 0, y: 18 }}
            animate={subtextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Empowering global enterprises with end-to-end Oracle NetSuite cloud transformations, custom integrations, and managed support.
          </motion.p>

          {/* Stats — NO border, just arrow + number + label, larger size */}
          <div ref={statsRef} className="mt-12 mb-8">
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto px-2">
              {stats.map((stat, index) => (
                <motion.div
                  key={`${stat.label}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={statsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.1 }}
                  className="flex items-center gap-2.5 sm:gap-3 shrink-0"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                  <div className="text-left">
                    <div className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                      <AnimatedCounter value={stat.value} inView={statsInView} />
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300 whitespace-nowrap font-medium mt-0.5">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dashboard — centered, full-width, with border + window chrome */}
          <div ref={dashboardRef} className="relative mt-6">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-cyan-500/10 blur-[100px] rounded-full -z-10" />

            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.97 }}
              animate={dashboardInView ? { y: 0, opacity: 1, scale: 1 } : { y: 40, opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative max-w-5xl mx-auto"
            >
              {/* Browser-style chrome frame */}
              <div className="rounded-3xl border-2 border-white/20 bg-gradient-to-b from-white/10 via-white/5 to-transparent shadow-[0_30px_80px_-20px_rgba(99,102,241,0.4)] overflow-hidden backdrop-blur-xl">
                {/* Window bar */}
                <div className="flex items-center gap-2 px-5 py-3.5 bg-slate-900/90 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs text-slate-400 ml-4 font-mono tracking-wide">Oracle NetSuite ERP — AGSuite Technologies Solution Provider Partner</span>
                </div>

                {/* Dashboard image */}
                <motion.div
                  animate={{ scale: isHovered ? 1.03 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative w-full h-[280px] sm:h-[420px] lg:h-[560px] overflow-hidden"
                >
                  <Image
                    src="/images/dashboard/netsuite_erp_dashboard_hd.webp"
                    alt="Oracle NetSuite ERP Executive Home Dashboard — AGSuite Technologies"
                    fill
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
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
            className="w-full border-t border-white/10 pt-8 mt-10"
          >
            <p className="mb-8 text-center text-2xl font-medium uppercase text-gray-200 tracking-wide">
              Trusted by industry leading brands
            </p>

            <div className="relative w-full overflow-hidden py-2">
              <div className="animate-marquee whitespace-nowrap flex items-center">
                {clientLogos.concat(clientLogos).map((client, index) => {
                  const p = client.pad ?? 4;
                  return (
                    <div key={index} className="inline-flex px-4">
                      <a
                        href={client.link || "#"}
                        target={client.link && client.link !== "#" ? "_blank" : undefined}
                        rel={client.link && client.link !== "#" ? "noopener noreferrer" : undefined}
                        className="flex h-16 w-44 sm:h-20 sm:w-52 items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                        style={{ padding: `${p * 2}px ${p * 3}px` }}
                        aria-label={client.name}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={client.logo}
                            alt={`${client.name} logo`}
                            fill
                            sizes="(max-width: 640px) 176px, 208px"
                            className="object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0"
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
