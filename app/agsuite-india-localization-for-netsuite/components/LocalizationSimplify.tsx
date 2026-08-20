"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Zap,
  ArrowRight,
  Sparkles,
  Building2,
  Layers,
} from "lucide-react";

const IndiaComplianceCircle = dynamic(
  () => import("@/app/netsuite/solutions/addons/india-localization/components/IndiaComplianceCircle"),
  { ssr: false }
);

export default function LocalizationSimplify() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };



  return (
    <section
      id="simplify"
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white font-['DM_Sans',sans-serif]"
    >
      {/* Background Decorative Ambient Elements */}
      <div className="absolute -top-32 -right-32 w-[550px] h-[550px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[550px] h-[550px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Dark Grid */}
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: NetSuite India Localization Circular Diagram */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center items-center relative overflow-visible py-6"
          >
            {/* Ambient circular glow behind diagram */}
            <div className="absolute w-[360px] sm:w-[480px] h-[360px] sm:h-[480px] rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-3xl pointer-events-none" />
            
            <div className="scale-[0.62] xs:scale-[0.72] sm:scale-[0.88] md:scale-95 lg:scale-[0.92] xl:scale-100 origin-center">
              <IndiaComplianceCircle />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider shadow-xs backdrop-blur-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              Built for Oracle NetSuite
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.2]">
              Simplify Compliance with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                India Localization for NetSuite
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              India Localization for NetSuite simplifies the complexities of Indian tax regulations, providing a cloud-native solution for GST, TDS, and statutory compliance. As a specialized NetSuite India localization partner, we help businesses automate e-invoicing via IRP, e-way bills, and GSTR reporting within a single unified platform.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              By integrating seamlessly with your core ERP, our solution ensures accuracy in multi-state GSTIN management and TCS calculations. Stay ahead of regulatory changes with automated compliance reminders and audit-ready reports, allowing your finance team to focus on strategic growth.
            </p>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToHero}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-600/30 hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <span>Request Custom SuiteApp Demo</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Native SuiteCloud Architecture</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
