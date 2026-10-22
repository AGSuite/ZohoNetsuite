"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Headphones, TrendingUp } from "lucide-react";

interface OdooSupportVisualProps {
  containerClassName?: string;
  showCards?: boolean;
}

export const OdooSupportVisual: React.FC<OdooSupportVisualProps> = ({
  containerClassName,
  showCards = true,
}) => {
  return (
    <div
      className={`relative select-none py-6 ${
        containerClassName || "w-full max-w-[650px] xl:max-w-[720px] mx-auto lg:mr-0 lg:ml-auto"
      }`}
    >
      {/* Background Soft Glow matching Violet & Warm ambient highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[110%] bg-gradient-to-r from-purple-500/18 via-[#714B67]/20 to-indigo-400/15 blur-[95px] rounded-full -z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full">
        {/* ── 1. MAIN CENTRAL IMAGE: PEOPLE ACTIVELY COLLABORATING WITH ODOO ─────── */}
        <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-[0_25px_65px_-12px_rgba(113,75,103,0.22)] overflow-visible">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 bg-slate-900 aspect-[16/9]">
            <Image
              src="/images/people/people_using_odoo.jpg"
              alt="Business team actively collaborating and using Odoo ERP"
              fill
              priority
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              quality={92}
            />
          </div>
        </div>

        {/* ── 2. TOP-RIGHT CARD: LIVE ODOO PIPELINE & OPERATIONS METRIC ───── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="absolute -top-3 sm:-top-5 -right-2 sm:-right-4 z-20 w-[185px] sm:w-[215px] bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-[0_16px_36px_-8px_rgba(15,23,42,0.18)]"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Live Operations
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                +28.4%
              </span>
            </div>

            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">$3.4M</span>
              <span className="text-[11px] font-medium text-slate-500">Pipeline Flow</span>
            </div>

            <p className="mt-1 text-[10px] text-slate-500 leading-tight">
              Real-time synchronization across CRM & Finance
            </p>
          </motion.div>
        )}

        {/* ── 3. BOTTOM-LEFT CARD: DEDICATED SUPPORT & 99.9% ENTERPRISE SLA ──── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
            className="absolute -bottom-3 sm:-bottom-5 -left-2 sm:-left-4 z-20 w-[180px] sm:w-[210px] bg-gradient-to-br from-[#1c122b]/95 via-[#2a1740]/95 to-[#1c122b]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-purple-400/30 shadow-[0_18px_38px_-8px_rgba(28,18,43,0.45)] text-white"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-1.5">
                <div className="p-1 rounded-lg bg-[#714B67]/50 text-purple-200">
                  <Headphones className="w-3.5 h-3.5 text-purple-300" />
                </div>
                <span className="text-[10px] text-purple-200 font-semibold">Live Support</span>
              </div>

              <div className="flex items-center gap-1">
                <span className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">99.9%</span>
                <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300 -mt-1" />
              </div>
            </div>

            <p className="mt-1.5 text-[10px] font-medium text-purple-100/90 leading-snug text-left">
              Uptime guarantee with &lt; 15 min SLA enterprise response.
            </p>

            <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between text-[9px] text-purple-200">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Certified Experts
              </span>
              <span className="font-bold text-amber-300">24/7 Active</span>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OdooSupportVisual;
