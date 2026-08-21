"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";

export default function CrmWhatIs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="what-is"
      ref={ref}
      aria-label="What is Zoho Customer Relationship Management"
      className="py-20 lg:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden font-['DM_Sans',sans-serif] scroll-mt-20 border-b border-slate-800"
    >
      {/* Background ambient radial glows */}
      <div className="absolute top-1/4 -left-36 w-[550px] h-[550px] bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -right-36 w-[550px] h-[550px] bg-gradient-to-tl from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Dashboard Preview Window with Full Visibility */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Ambient Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500/30 via-blue-500/20 to-teal-500/30 blur-xl opacity-75 pointer-events-none" />

            {/* Browser Frame */}
            <div className="relative w-full rounded-2xl sm:rounded-3xl border border-slate-700/80 bg-slate-900/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
              {/* Window Bar */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-slate-950/90 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/90" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/90" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/90" />
                  <span className="text-xs text-slate-400 ml-3 font-mono hidden sm:inline-block">
                    zoho-crm.agsuitetech.com
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
                  <TrendingUp className="w-3 h-3" />
                  Live 360° CRM
                </div>
              </div>

              {/* High-Resolution Dashboard Image Frame */}
              <div className="relative w-full h-[280px] sm:h-[380px] md:h-[430px] bg-slate-950 overflow-hidden">
                <Image
                  src="/images/zoho-dashboards/zoho-crm-updated-dashboard.png"
                  alt="What is Zoho CRM — Modern Cloud Customer Relationship Management"
                  fill
                  className="object-contain object-top p-1"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Bottom Partner Strip */}
              <div className="px-5 py-3 bg-slate-950/95 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-slate-300">
                    Authorized Zoho Premium Partner
                  </span>
                </div>
                <span className="text-xs font-bold text-orange-400">
                  Enterprise Ready
                </span>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="order-1 lg:order-2 flex flex-col justify-center space-y-6"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-300 text-xs font-bold uppercase tracking-wider w-fit">
              <Sparkles className="w-3.5 h-3.5 text-orange-400" />
              <span>What is Zoho CRM?</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight leading-[1.2]">
              The World’s Most Popular{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-rose-400">
                Customer Relationship Management
              </span>{" "}
              Platform
            </h2>

            {/* Paragraph 1 */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Zoho CRM is a robust, cloud-native customer relationship management solution designed to streamline and supercharge your organization&apos;s sales, marketing, and customer service operations. As an official specialized Zoho partner, AGSuite empowers organizations to unify disparate lead sources, automate sales workflows, and convert deals faster with intelligent predictive insights.
            </p>

            {/* Paragraph 2 */}
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed font-normal">
              By centralizing customer interactions and automating routine sales tasks, Zoho CRM enables your team to focus on high-impact relationship building rather than manual administrative tasks. Drive higher conversion rates and maximize customer lifetime value with a single, real-time source of truth.
            </p>

            {/* CTA Button */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToHero}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white bg-gradient-to-r from-orange-600 via-amber-600 to-rose-600 shadow-xl shadow-orange-600/30 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 cursor-pointer"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a
                href="#modules"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full font-bold text-sm text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-colors"
              >
                <span>Explore Modules</span>
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
