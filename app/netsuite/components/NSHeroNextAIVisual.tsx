"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, ArrowUpRight, Megaphone, Sparkles, MessageSquare } from "lucide-react";

interface NSHeroNextAIVisualProps {
  containerClassName?: string;
  showCards?: boolean;
}

export const NSHeroNextAIVisual: React.FC<NSHeroNextAIVisualProps> = ({
  containerClassName,
  showCards = true,
}) => {
  return (
    <div className={`relative select-none py-4 sm:py-6 ${containerClassName || "w-[112%] sm:w-[118%] lg:w-[128%] xl:w-[134%] max-w-none -ml-[5%] lg:-ml-[8%] xl:-ml-[12%]"}`}>
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[120%] bg-gradient-to-r from-blue-400/20 via-cyan-400/15 to-blue-300/10 blur-[100px] rounded-full -z-10" />

      {/* Main Container */}
      <div className="relative w-full">

        {/* ── 1. MAIN CENTRAL DASHBOARD IMAGE WINDOW (CRISP 4K HIGH-RES) ─────── */}
        <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-3 bg-white/85 backdrop-blur-xl border border-slate-200/90 shadow-[0_25px_65px_-12px_rgba(59,130,246,0.25)] overflow-visible">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white">
            <Image
              src="/images/lap/Next AI Dashboard.webp"
              alt="Oracle NetSuite Next AI Command Dashboard"
              width={2752}
              height={1536}
              priority
              unoptimized={true}
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 70vw"
              quality={100}
            />
          </div>
        </div>

        {/* ── 2. LEFT FLOATING CODING CARD ("The #1 AI Cloud ERP") ─────────── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, x: -30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="absolute -left-3 sm:-left-8 lg:-left-10 top-[24%] z-20 w-[145px] sm:w-[165px] bg-white/80 backdrop-blur-md p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-slate-200/50 shadow-[0_12px_28px_-8px_rgba(15,23,42,0.14)]"
          >
            {/* Icon + "The #1" side by side */}
            <div className="flex items-center gap-2 mb-1">
              <div className="inline-flex p-1.5 rounded-lg bg-blue-50 border border-blue-100/70 shrink-0">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-none">The #1</h4>
            </div>

            {/* "AI Cloud ERP" below */}
            <h4 className="text-sm font-bold text-slate-800 leading-tight mb-2">AI Cloud ERP</h4>

            <div className="h-[1px] w-full bg-slate-200/60 mb-2" />

            <p className="text-[10px] font-medium text-slate-500 leading-snug text-left">
              AI-powered visibility, automation, and control — all in one platform.
            </p>
          </motion.div>
        )}

        {/* ── 3. TOP-RIGHT PURE DARK BLUE 79% CODING CARD ─────────────────── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="absolute -right-2 sm:-right-6 lg:-right-8 -top-3 sm:-top-5 z-20 w-[195px] sm:w-[225px] bg-gradient-to-br from-[#0b2447] via-[#081c38] to-[#051329] p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-blue-900/60 shadow-[0_20px_40px_-8px_rgba(11,36,71,0.5)]"
          >
            <div className="flex items-start justify-between">
              <div className="p-1.5 rounded-lg bg-white/10 text-white backdrop-blur-xs">
                <Megaphone className="w-4 h-4 text-white" />
              </div>

              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">79%</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400 -mt-2" />
              </div>
            </div>

            <p className="mt-2 text-[10px] sm:text-[11px] font-medium text-slate-300 leading-snug text-left pr-5">
              of surveyed finance leaders have reduced month-end close time since switching to NetSuite.
            </p>

            {/* Floating Top-Right ↗ Arrow Circle Button */}
            <div className="absolute right-2.5 bottom-2.5 w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md hover:scale-110 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </motion.div>
        )}

        {/* ── 4. BOTTOM-RIGHT FLOATING "SEARCH OR ASK ORACLE" PILL CODING CARD ─ */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute -right-1 sm:-right-4 lg:-right-6 -bottom-4 sm:-bottom-6 z-20 bg-white/95 backdrop-blur-md p-1 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-[0_15px_35px_-8px_rgba(15,23,42,0.25)] flex items-center gap-2"
          >
            {/* Inner Pill Box */}
            <div className="flex items-center bg-white rounded-lg sm:rounded-xl border border-slate-200 px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-inner">
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 whitespace-nowrap">
                Search or Ask Oracle
              </span>

              {/* Vertical Divider */}
              <div className="mx-2 h-4 w-[1px] bg-slate-200" />

              {/* Chat Bubble Icon */}
              <div className="text-slate-500 hover:text-slate-800 transition-colors pr-1.5">
                <MessageSquare className="w-3.5 h-3.5 stroke-[2]" />
              </div>

              {/* Red Oracle Badge Icon Button */}
              <div className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-700 text-white px-2 py-1 rounded-md shadow-sm">
                <div className="w-3.5 h-2 rounded-full border-[1.8px] border-white" />
              </div>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};

export default NSHeroNextAIVisual;
