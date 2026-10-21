"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles, ShieldCheck, Headphones, Zap, TrendingUp, Users } from "lucide-react";

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
      {/* Background Soft Glow matching Violet & Red-Rose ambient highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[110%] bg-gradient-to-r from-purple-500/18 via-[#714B67]/20 to-rose-400/15 blur-[95px] rounded-full -z-10 pointer-events-none" />

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

        {/* ── 2. TOP-LEFT CARD: DEDICATED EXPERT TEAM ─────────────────────── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, x: -20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: "easeOut" }}
            className="absolute -top-3 sm:-top-5 -left-3 sm:-left-6 z-20 w-[190px] sm:w-[215px] bg-[#1a1226]/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-purple-400/30 shadow-[0_18px_40px_-8px_rgba(26,18,38,0.45)] text-white"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-[#714B67]/40 text-purple-200 border border-purple-300/20">
                  <Headphones className="w-4 h-4 text-purple-300" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">Live Support</h4>
                  <p className="text-[10px] text-purple-200/80">Certified Experts</p>
                </div>
              </div>
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-purple-100/90 font-medium">
              <span>Average response:</span>
              <span className="font-bold text-amber-300">&lt; 15 mins</span>
            </div>
          </motion.div>
        )}

        {/* ── 3. TOP-RIGHT CARD: LIVE ODOO PIPELINE & OPERATIONS METRIC ───── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, x: 20, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25, ease: "easeOut" }}
            className="absolute -top-3 sm:-top-5 -right-3 sm:-right-5 z-20 w-[190px] sm:w-[220px] bg-white/95 backdrop-blur-md p-3 sm:p-3.5 rounded-2xl border border-slate-200/90 shadow-[0_18px_40px_-8px_rgba(15,23,42,0.22)]"
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
              Real-time synchronization across CRM, Inventory & Finance
            </p>
          </motion.div>
        )}

        {/* ── 4. BOTTOM-LEFT CARD: ENTERPRISE SLA & UPTIME ────────────────── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}
            className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-4 z-20 w-[175px] sm:w-[200px] bg-gradient-to-br from-[#1e1b4b] via-[#312e81] to-[#4338ca] p-3 sm:p-3.5 rounded-2xl border border-indigo-400/30 shadow-[0_20px_40px_-8px_rgba(49,46,129,0.45)] text-white"
          >
            <div className="flex items-start justify-between">
              <div className="p-1.5 rounded-lg bg-white/10 text-white backdrop-blur-xs">
                <Zap className="w-4 h-4 text-amber-300" />
              </div>

              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">99.9%</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300 -mt-2" />
              </div>
            </div>

            <p className="mt-1.5 text-[10px] sm:text-[11px] font-medium text-indigo-100/90 leading-snug text-left pr-4">
              Uptime guarantee with enterprise-grade SLA resolution.
            </p>

            <div className="absolute right-2.5 bottom-2.5 w-5 h-5 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md">
              <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
            </div>
          </motion.div>
        )}

        {/* ── 5. BOTTOM-RIGHT CARD: ALL APPS CONNECTED / SYNCED PILL ─────── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
            className="absolute -bottom-3 sm:-bottom-5 -right-2 sm:-right-4 z-20 bg-white/95 backdrop-blur-md p-1 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-[0_15px_35px_-8px_rgba(15,23,42,0.2)] flex items-center gap-2"
          >
            <div className="flex items-center bg-white rounded-lg sm:rounded-xl border border-slate-200 px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2" />
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 whitespace-nowrap">
                Connected Systems
              </span>

              <div className="mx-2 h-4 w-[1px] bg-slate-200" />

              <div className="text-slate-500 pr-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 stroke-[2]" />
              </div>

              <div className="flex items-center justify-center bg-gradient-to-r from-[#714B67] to-[#8c577f] text-white px-2.5 py-1 rounded-md shadow-sm text-[10px] font-bold tracking-wide">
                Synced
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OdooSupportVisual;
