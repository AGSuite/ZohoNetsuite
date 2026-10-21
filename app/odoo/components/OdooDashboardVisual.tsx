"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, ArrowUpRight, Sparkles, MessageSquare, TrendingUp } from "lucide-react";

interface OdooDashboardVisualProps {
  containerClassName?: string;
  showCards?: boolean;
}

export const OdooDashboardVisual: React.FC<OdooDashboardVisualProps> = ({
  containerClassName,
  showCards = true,
}) => {
  return (
    <div
      className={`relative select-none py-6 ${
        containerClassName || "w-full max-w-[650px] xl:max-w-[720px] mx-auto lg:mr-0 lg:ml-auto"
      }`}
    >
      {/* Background Soft Glow matching Odoo colors */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[110%] bg-gradient-to-r from-purple-500/20 via-[#714B67]/15 to-blue-400/10 blur-[90px] rounded-full -z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="relative w-full">
        {/* ── 1. MAIN CENTRAL ODOO DASHBOARD IMAGE WINDOW ─────── */}
        <div className="relative rounded-2xl sm:rounded-3xl p-2 sm:p-2.5 bg-white/90 backdrop-blur-xl border border-slate-200/90 shadow-[0_25px_65px_-12px_rgba(113,75,103,0.25)] overflow-visible">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white">
            <Image
              src="/images/Dashboard/odoo_command_dashboard.webp"
              alt="Odoo Unified ERP Command Dashboard"
              width={1024}
              height={576}
              priority
              unoptimized={true}
              className="w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.01]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              quality={95}
            />
          </div>
        </div>

        {/* ── 2. LEFT FLOATING CARD ("30+ Apps Connected") ─────────── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, x: -20, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-[24%] z-20 w-[145px] sm:w-[165px] bg-white/90 backdrop-blur-md p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-purple-100/90 shadow-[0_14px_30px_-8px_rgba(56,36,52,0.2)]"
          >
            {/* Icon + Badge */}
            <div className="flex items-center gap-2 mb-1">
              <div className="inline-flex p-1.5 rounded-lg bg-purple-50 border border-purple-100 shrink-0">
                <Layers className="w-4 h-4 sm:w-5 sm:h-5 text-[#714B67]" />
              </div>
              <h4 className="text-base sm:text-lg font-extrabold text-slate-900 leading-none">30+ Apps</h4>
            </div>

            {/* Title */}
            <h4 className="text-xs sm:text-sm font-bold text-slate-800 leading-tight mb-2">Connected ERP</h4>

            <div className="h-[1px] w-full bg-slate-200/60 mb-2" />

            <p className="text-[10px] font-medium text-slate-500 leading-snug text-left">
              CRM, Inventory, Manufacturing & Finance in real time.
            </p>
          </motion.div>
        )}

        {/* ── 3. TOP-RIGHT SIGNATURE ODOO PLUM GRADIENT STAT CARD (+18.4%) ── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="absolute -right-2 sm:-right-4 lg:-right-4 -top-3 sm:-top-5 z-20 w-[190px] sm:w-[215px] bg-gradient-to-br from-[#3e1f37] via-[#56294e] to-[#714B67] p-3 sm:p-3.5 rounded-xl sm:rounded-2xl border border-purple-400/30 shadow-[0_20px_40px_-8px_rgba(86,41,78,0.45)] text-white"
          >
            <div className="flex items-start justify-between">
              <div className="p-1.5 rounded-lg bg-white/10 text-white backdrop-blur-xs">
                <TrendingUp className="w-4 h-4 text-purple-200" />
              </div>

              <div className="flex items-center gap-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">+18.4%</span>
                <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300 -mt-2" />
              </div>
            </div>

            <p className="mt-2 text-[10px] sm:text-[11px] font-medium text-purple-100/90 leading-snug text-left pr-5">
              revenue and productivity growth achieved with real-time Odoo workflows.
            </p>

            {/* Floating Top-Right ↗ Arrow Circle Button */}
            <div className="absolute right-2.5 bottom-2.5 w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md hover:scale-110 transition-transform">
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
          </motion.div>
        )}

        {/* ── 4. BOTTOM-RIGHT FLOATING "SEARCH OR RUN ODOO" PILL CARD ──────── */}
        {showCards && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
            className="absolute right-1 sm:right-2 lg:right-1 -bottom-3 sm:-bottom-4 z-20 bg-white/95 backdrop-blur-md p-1 rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-[0_15px_35px_-8px_rgba(15,23,42,0.2)] flex items-center gap-2"
          >
            {/* Inner Pill Box */}
            <div className="flex items-center bg-white rounded-lg sm:rounded-xl border border-slate-200 px-2.5 sm:px-3 py-1.5 sm:py-2 shadow-inner">
              <span className="text-[11px] sm:text-xs font-semibold text-slate-700 whitespace-nowrap">
                Search Odoo Apps & Records
              </span>

              {/* Vertical Divider */}
              <div className="mx-2 h-4 w-[1px] bg-slate-200" />

              {/* Chat Bubble Icon */}
              <div className="text-slate-500 hover:text-slate-800 transition-colors pr-1.5">
                <MessageSquare className="w-3.5 h-3.5 stroke-[2]" />
              </div>

              {/* Odoo Purple Badge */}
              <div className="flex items-center justify-center bg-gradient-to-r from-[#714B67] to-[#56294e] text-white px-2.5 py-1 rounded-md shadow-sm text-[10px] font-bold tracking-wide">
                Odoo 18
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default OdooDashboardVisual;
