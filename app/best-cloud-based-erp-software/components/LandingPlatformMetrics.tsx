"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const metricsData = [
  { value: "700+", label: "PROJECTS COMPLETED" },
  { value: "15+", label: "YEARS OF EXPERIENCE" },
  { value: "250+", label: "CUSTOMERS WORLDWIDE" },
  { value: "50+", label: "NETSUITE EXPERTS" },
  { value: "10+ Countries", label: "SERVING CUSTOMERS" },
  { value: "40+", label: "GLOBAL ROLL-OUTS" },
  { value: "15+", label: "INDUSTRY EXPERTISE" },
  { value: "84%", label: "CUSTOMER RETENTION" },
];

const clientLogos = [
  { name: "FINN", logo: "/images/netuite client images/FINN-Logo(1).jpg", pad: 4 },
  { name: "Indovance", logo: "/images/netuite client images/Indovance-new-logo.webp", pad: 5 },
  { name: "AiDash", logo: "/images/netuite client images/aidashlogo.png", pad: 4, unopt: true },
  { name: "ControlCase", logo: "/images/netuite client images/controlcase.png", pad: 4 },
  { name: "Escalent", logo: "/images/netuite client images/escalent.webp", pad: 5 },
  { name: "Flatworld", logo: "/images/netuite client images/flatworld.png", pad: 9 },
  { name: "Kale Logistics", logo: "/images/netuite client images/kale.png", pad: 8 },
  { name: "Keycraft", logo: "/images/netuite client images/keycraft.png", pad: 8 },
  { name: "Loylogic", logo: "/images/netuite client images/loylogic.png", pad: 2 },
  { name: "Modaxo", logo: "/images/netuite client images/modaxo.png", pad: 5 },
  { name: "Priority Tire", logo: "/images/netuite client images/prioritytire.png", pad: 5 },
  { name: "Signal", logo: "/images/netuite client images/signal.png", pad: 5, unopt: true },
  { name: "Traxon", logo: "/images/netuite client images/traxon.png", pad: 4 },
  { name: "TSI", logo: "/images/netuite client images/tsi-logo.png", pad: 4 },
  { name: "UniAcco", logo: "/images/netuite client images/uniacco.png", pad: 4 },
  { name: "VideoVerse", logo: "/images/netuite client images/videoverse.png", pad: 1, unopt: true },
];

function AnimatedCounter({ value, inView }: { value: string; inView: boolean }) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <span>{value}</span>;

  const targetNumber = parseInt(match[1], 10);
  const suffix = match[2];

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      animate(count, targetNumber, {
        duration: 2.0,
        ease: "easeOut",
      });
    }
  }, [inView, targetNumber, count]);

  return (
    <span>
      {displayValue}
      {suffix}
    </span>
  );
}

export default function LandingPlatformMetrics() {
  const [isHovered, setIsHovered] = useState(false);

  const { ref: badgeRef, inView: badgeInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: headlineRef, inView: headlineInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: dashboardRef, inView: dashboardInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: marqueeRef, inView: marqueeInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="platform"
      className="relative py-24 overflow-hidden font-['DM_Sans',sans-serif] text-white"
      style={{
        background:
          "radial-gradient(at 0% 82.5%, #4a055c 0px, transparent 50%), radial-gradient(at 97.5% 84%, #10011f 0px, transparent 50%), radial-gradient(at 10% 10%, #000000 0px, transparent 50%), radial-gradient(at 48% 89%, #1000ed 0px, transparent 50%), #021526"
      }}
    >
      {/* Square Grid Pattern Overlay */}
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge & Headline */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <motion.div
            ref={badgeRef}
            initial={{ opacity: 0, y: 24 }}
            animate={badgeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-6 backdrop-blur-xl"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-[11px] font-bold text-white uppercase tracking-[0.2em]">
              NetSuite Platform Excellence
            </span>
          </motion.div>

          <motion.h2
            ref={headlineRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headlineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6"
          >
            AGSuite Tech - Certified{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Oracle NetSuite Solution Provider
            </span>
          </motion.h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed">
            Empowering global enterprises with end-to-end Oracle NetSuite cloud transformations, custom integrations, and managed support.
          </p>
        </div>

        {/* Small Horizontal Stats Row with Animated Number Counters */}
        <div ref={statsRef} className="mt-8 mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-5 max-w-7xl mx-auto px-2">
            {metricsData.map((stat, index) => (
              <motion.div
                key={`${stat.label}-${index}`}
                initial={{ opacity: 0, y: 15 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.06 }}
                className="flex items-center gap-2.5 shrink-0 bg-white/5 border border-white/10 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl backdrop-blur-md hover:border-cyan-400/40 transition-all hover:-translate-y-0.5"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <div className="text-left">
                  <div className="text-lg sm:text-2xl font-bold text-white leading-tight">
                    <AnimatedCounter value={stat.value} inView={statsInView} />
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-semibold uppercase tracking-wider whitespace-nowrap mt-0.5">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Central NetSuite Dashboard Showcase */}
        <motion.div
          ref={dashboardRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={dashboardInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-r from-blue-500/20 via-purple-500/15 to-cyan-500/10 blur-[100px] rounded-full -z-10" />

          <div className="relative rounded-3xl p-3 bg-gradient-to-b from-white/15 via-white/5 to-transparent border border-white/20 shadow-2xl overflow-hidden backdrop-blur-2xl">
            {/* Top Window Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-900/80 rounded-t-2xl border-b border-white/10">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 ml-4 font-mono">Oracle NetSuite ERP Real-Time Control Center</span>
            </div>

            {/* Dashboard Image */}
            <div className="relative w-full h-[320px] sm:h-[480px] lg:h-[580px] rounded-b-2xl overflow-hidden">
              <Image
                src="/images/Dashboard/netsuite_erp_dashboard_realistic.png"
                alt="Oracle NetSuite ERP Central Dashboard"
                fill
                className={`object-cover object-top transition-transform duration-700 ${isHovered ? "scale-105" : "scale-100"}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Client Logos Marquee Section (Matching Homepage Marquee) */}
        <motion.div
          ref={marqueeRef}
          initial={{ opacity: 0, y: 30 }}
          animate={marqueeInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full border-t border-white/10 pt-10"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Trusted by 250+ Industry Leaders Worldwide
            </span>
          </div>

          <div className="relative w-full overflow-hidden py-2">
            <div className="animate-marquee whitespace-nowrap flex items-center">
              {clientLogos.concat(clientLogos).map((client, index) => {
                const p = client.pad ?? 4;
                return (
                  <div key={index} className="inline-flex px-3 sm:px-4">
                    <div
                      className="flex h-16 w-40 sm:h-20 sm:w-48 items-center justify-center bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
                      style={{ padding: `${p * 2}px ${p * 3}px` }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={client.logo}
                          alt={`${client.name} logo`}
                          fill
                          sizes="(max-width: 640px) 160px, 192px"
                          className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                          unoptimized={client.unopt === true}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 50s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
