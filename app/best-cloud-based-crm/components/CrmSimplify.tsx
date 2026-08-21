"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  ArrowRight,
  Target,
  BarChart3,
  Users2,
  Headphones,
  Bot,
  Layers,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export default function CrmSimplify() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    }
  };

  const crmNodes = [
    { title: "Lead Generation", icon: <Target className="w-5 h-5 text-blue-400" />, angle: 0 },
    { title: "Pipeline Automation", icon: <Workflow className="w-5 h-5 text-cyan-400" />, angle: 60 },
    { title: "AI Sales Insights", icon: <Bot className="w-5 h-5 text-purple-400" />, angle: 120 },
    { title: "Omnichannel Support", icon: <Headphones className="w-5 h-5 text-emerald-400" />, angle: 180 },
    { title: "Customer 360°", icon: <Users2 className="w-5 h-5 text-amber-400" />, angle: 240 },
    { title: "Revenue Analytics", icon: <BarChart3 className="w-5 h-5 text-rose-400" />, angle: 300 },
  ];

  return (
    <section
      id="simplify"
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white font-['DM_Sans',sans-serif] scroll-mt-20"
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
          
          {/* Left Column: 360° CRM Orbital Circle Graphic */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center items-center relative overflow-visible py-8"
          >
            {/* Ambient circular glow */}
            <div className="absolute w-[360px] sm:w-[460px] h-[360px] sm:h-[460px] rounded-full bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-3xl pointer-events-none" />
            
            {/* Interactive Orbital System */}
            <div className="relative w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] flex items-center justify-center">
              
              {/* Outer Dashed Orbit Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 border-dashed animate-[spin_60s_linear_infinite]" />
              
              {/* Inner Solid Orbit Ring */}
              <div className="absolute inset-8 rounded-full border border-indigo-400/20" />
              
              {/* Center Core Hub */}
              <div className="relative z-20 w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 p-1 shadow-[0_0_50px_rgba(37,99,235,0.4)] flex flex-col items-center justify-center text-center">
                <div className="w-full h-full rounded-full bg-slate-950/90 flex flex-col items-center justify-center p-2">
                  <Layers className="w-7 h-7 text-blue-400 mb-1" />
                  <span className="text-xs sm:text-sm font-extrabold text-white leading-tight">360° Unified</span>
                  <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider">Cloud CRM</span>
                </div>
              </div>

              {/* Orbiting Satellite Nodes */}
              {crmNodes.map((node, i) => {
                const rad = (node.angle * Math.PI) / 180;
                const radius = 155; // Distance from center
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <motion.div
                    key={node.title}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className="absolute z-30 group cursor-default"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-900/90 border border-blue-400/40 shadow-lg shadow-blue-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-400 transition-all duration-300 backdrop-blur-md">
                        {node.icon}
                      </div>
                      <span className="mt-1.5 px-2 py-0.5 rounded-md bg-slate-900/80 border border-slate-700 text-[10px] sm:text-xs font-bold text-slate-200 whitespace-nowrap shadow-xs">
                        {node.title}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
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
              Unified Sales & Service Platform
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-white tracking-tight leading-[1.2]">
              Simplify Sales & Growth with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">
                Cloud-Based CRM Solutions
              </span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Modern enterprises need more than a basic contact book. AGSuite delivers enterprise cloud-based CRM systems that consolidate leads, sales pipelines, communication logs, and customer support tickets into a single unified dashboard.
            </p>

            {/* Paragraph 2 */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Empower your sales reps with automated pipeline tracking, AI deal predictions, and one-click quote generation. Eliminate departmental silos so marketing, sales, and service teams collaborate in real time to increase deal velocity and boost customer retention.
            </p>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Real-Time Pipeline Tracking</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Omnichannel Customer Sync</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>AI Revenue & Win Forecasting</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Automated SLA & Helpdesk</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToHero}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-md shadow-blue-600/30 hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <span>Get Free CRM Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
