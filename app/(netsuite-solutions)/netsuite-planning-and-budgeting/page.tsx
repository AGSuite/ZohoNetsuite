"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Calculator, Target, TrendingUp, Zap, ArrowRight, Check, ChevronRight, Layers,
  CheckCircle2, BarChart3, LineChart, ShieldCheck, Database, PieChart, DollarSign,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";
import NSServicesSection from '@/app/netsuite/components/NSServicesSection';

const CTA_PARTICLES = [
  { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 },
  { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
  { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 },
  { w: 1.7, h: 2.4, top: 62, left: 55, dur: 3.8, delay: 2.1 },
  { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 },
  { w: 1.2, h: 1.5, top: 90, left: 85, dur: 4.7, delay: 1.9 },
  { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 },
  { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 },
];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => {
    if (inView) { spring.set(value); }
    else { spring.set(0); }
  }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function PlanningPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Faster Planning Cycle", value: 40, suffix: "%", icon: Zap },
    { label: "Forecast Accuracy", value: 92, suffix: "%", icon: Target },
    { label: "Data Sources Unified", value: 50, suffix: "+", icon: Database },
    { label: "Budget Variance Reduced", value: 30, suffix: "%", icon: TrendingUp },
  ];

  const modules = [
    { title: "Financial Budgeting", description: "Collaborative, driver-based budgeting that aligns finance and department heads in real time.", image: "/images/modules/dashboard module.webp", color: "#0f6e8a", rgb: "15,110,138" },
    { title: "Revenue Planning", description: "Model revenue scenarios from pipeline, bookings, and renewal data for accurate top-line forecasts.", image: "/images/modules/account modules.webp", color: "#3b5299", rgb: "59,82,153" },
    { title: "Workforce Planning", description: "Plan headcount, costs, and productivity across departments with forward-looking workforce models.", image: "/images/modules/managging together module.webp", color: "#1a7a55", rgb: "26,122,85" },
    { title: "Capital Planning", description: "Track and forecast capex, project spend, and asset investments across the entire enterprise.", image: "/images/modules/sheet module.webp", color: "#7b3a8a", rgb: "123,58,138" },
    { title: "Rolling Forecasts", description: "Replace static annual budgets with dynamic rolling forecasts updated throughout the year.", image: "/images/modules/dashbord module.webp", color: "#a05a18", rgb: "160,90,24" },
    { title: "Scenario Modeling", description: "Run best-case, worst-case, and base-case what-if scenarios to evaluate strategic alternatives.", image: "/images/modules/any module.webp", color: "#4a3a8a", rgb: "74,58,138" },
    { title: "Cash Flow Planning", description: "Project cash position, timing of inflows and outflows, and liquidity across all entities.", image: "/images/modules/working module.webp", color: "#1a6080", rgb: "26,96,128" },
    { title: "Reporting & Analytics", description: "Pre-built dashboards and ad-hoc reports for variance analysis and management reporting.", image: "/images/modules/module8.webp", color: "#6a2575", rgb: "106,37,117" },
    { title: "Multi-Entity Consolidation", description: "Automatically consolidate financial plans from multiple entities with currency translation.", image: "/images/modules/any modules.webp", color: "#154e8a", rgb: "21,78,138" },
    { title: "KPI Scorecards", description: "Monitor plan vs actual with automated KPI scorecards pushed to the right stakeholders.", image: "/images/modules/chatt mdoule.webp", color: "#1a6545", rgb: "26,101,69" },
    { title: "Version Control", description: "Maintain versioned budget histories so you can compare plans and understand every change.", image: "/images/modules/mobile module.webp", color: "#8a2a3a", rgb: "138,42,58" },
    { title: "ERP Actuals Integration", description: "Live actuals from NetSuite ERP flow automatically into plans — no manual exports ever.", image: "/images/modules/csm modules.webp", color: "#0f4e8a", rgb: "15,78,138" },
  ];

  const benefits = [
    { title: "Driver-Based Planning", description: "Move beyond spreadsheets to driver-based models that automatically recalculate plans when assumptions change — saving hours of manual re-work and eliminating version confusion.", image: "/images/lap/lap3.webp", points: ["Automatic plan recalculation", "Business driver templates", "Integrated assumptions library", "Scenario comparison tools"] },
    { title: "Real-Time Actuals from ERP", description: "Because NetSuite Planning & Budgeting is connected to core ERP, you see live actuals against your plan the moment a transaction is entered — no waiting for month-end exports.", image: "/images/people/laptopmen2.webp", points: ["Live ERP actuals feed", "Instant variance reporting", "Auto-updated dashboards", "Period-close acceleration"] },
    { title: "Collaborative Workflow", description: "Route budget forms to department heads, track submission status, and consolidate contributions from across the organization — all in one platform with complete audit trails.", image: "/images/people/fourteam.webp", points: ["Budget submission workflows", "Manager approval routing", "Submission status dashboards", "Version and audit history"] },
    { title: "Multi-Entity Consolidation", description: "Automatically consolidate financials and plans from multiple subsidiaries with currency translation, intercompany eliminations, and entity-specific rules for group reporting.", image: "/images/lap/lap4.webp", points: ["Multi-currency consolidation", "Intercompany eliminations", "Entity-level segmentation", "Group-level reporting"] },
    { title: "Advanced Scenario Modeling", description: "Run unlimited what-if scenarios side-by-side — best case, downside, and mid case — so you can stress-test your financial plans and prepare for every eventuality in advance.", image: "/images/lap/lap2.webp", points: ["Unlimited scenario creation", "Side-by-side comparison", "Waterfall and bridge charts", "Key assumption sensitivity analysis"] },
    { title: "Finance as a Strategic Partner", description: "NSPB gives your finance team the tools to move beyond backward-looking reporting to forward-looking business partnership — from budget cop to strategic co-pilot.", image: "/images/lap/lap5.webp", points: ["Forward-looking management packs", "Board-ready financial presentations", "Integrated narrative and commentary", "Self-service reporting for all managers"] },
  ];

  return (
    <div className="min-h-screen selection:bg-teal-900 selection:text-white bg-white">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000a10] via-[#000f1a] to-[#001828]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-teal-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Planning & Budgeting</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-400">
                  NetSuite Planning & Budgeting
                </span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-teal-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Unified Financial Planning and Analysis connected to your ERP — collaborate on budgets, build rolling forecasts, and analyze performance against live actuals in a single cloud platform.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-teal-600 hover:border-teal-500 transition-all duration-300 shadow-xl hover:scale-105">
                  Transform Your Planning
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/50" style={{ height: 390 }}>
                  <Image src="/images/lap/lap3.webp" alt="NetSuite Planning" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0f766e, #14b8a6)' }}>
                      <BarChart3 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">Connected Financial Planning and Analysis Platform</p>
                      <p className="text-gray-500 text-xs mt-0.5">Budgeting · Forecasting · Actuals · Scenarios · Consolidation</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0f766e, #14b8a6)' }}>
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite Planning & Budgeting</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Budget · Forecast · Model · Consolidate · Report</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-5 sm:pt-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-teal-700/20 rounded-xl group-hover:bg-teal-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-teal-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-teal-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Nav */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {[{ label: "What is Planning?", href: "#what-is" }, { label: "Capabilities", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Services", href: "#services" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-teal-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-cyan-600 to-teal-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* What is */}
      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex items-center justify-center rounded-2xl p-4 mt-15" style={{ minHeight: 340 }}>
              <Image src="/images/netsuiteimages/solutions/NetsuiteSRP.webp" alt="NetSuite Planning" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6 mt-15">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-teal-500 leading-tight">
                Replace Spreadsheets with Intelligent, Connected Financial Planning and Analysis.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite Planning & Budgeting (NSPB) is a cloud-based financial planning and analysis platform that enables finance teams to build budgets, produce rolling forecasts, and analyze performance — all with live actuals flowing in automatically from NetSuite ERP.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Say goodbye to error-prone spreadsheets, version confusion, and manual data exports. NSPB brings your entire planning process into one collaborative, connected, and always-current platform.
              </p>
              <div className="pt-4">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)', color: '#ffffff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = '#0f766e'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}>
                  <span>Explore NetSuite Planning</span>
                  <motion.span className="flex items-center" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">Planning & Budgeting Modules</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">
            12 Financial Planning and Analysis capabilities natively connected to your NetSuite ERP — covering every dimension of financial management
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }} whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white" style={{ minHeight: 340 }}>
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)` }} />
                  </div>
                  <div className="flex-1 p-5 pb-6 flex flex-col relative" style={{ backgroundColor: `rgb(${mod.rgb})` }}>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">{mod.title}</h4>
                      <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">{mod.description}</p>
                    </div>
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">Explore <ArrowRight size={10} /></span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-teal-600" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #000a10 0%, #001018 25%, #001822 55%, #000c14 80%, #000810 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">Why Finance Teams Choose NetSuite Planning</h3>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button key={index} onClick={() => setActiveBenefit(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-teal-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-teal-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <Calculator size={20} />}{index === 1 && <LineChart size={20} />}{index === 2 && <TrendingUp size={20} />}
                      {index === 3 && <Layers size={20} />}{index === 4 && <PieChart size={20} />}{index >= 5 && <BarChart3 size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-teal-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-teal-600 mt-0.5 shrink-0" /> {pt}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NSServicesSection />

      {/* Pricing */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d12' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-teal-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does NetSuite Planning Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite Planning & Budgeting is licensed as an add-on to the core NetSuite platform. Pricing is based on the number of planning users and the volume of data entities (subsidiaries, departments, cost centers) in your planning model. Because NSPB is native to NetSuite, there is no additional integration cost and your live ERP data is available from day one.
                </p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-teal-400 hover:text-white transition-all duration-200 shadow-md">
                    Talk to a Financial Planning and Analysis Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#001018]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#002030]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#003040]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl.webp" alt="NSPB Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite Planning & Budgeting — NSPB, scenario modeling, driver-based forecasting, and implementation."
        customFaqs={[
          { q: "What is NetSuite Planning & Budgeting (NSPB)?", a: "NetSuite Planning & Budgeting (NSPB) is a cloud-native Financial Planning and Analysis module embedded in NetSuite, built on Oracle's Hyperion planning technology. It enables finance teams to build detailed budgets, rolling forecasts, and scenario models — all connected to live NetSuite actuals without spreadsheet exports or manual reconciliation." },
          { q: "How is NSPB different from budgeting in Excel?", a: "NSPB replaces error-prone, version-controlled Excel budget models with a centralised, multi-user planning environment. Multiple contributors input data simultaneously, approvals follow a structured workflow, version history is maintained automatically, and actuals from NetSuite reconcile instantly — eliminating consolidation errors and month-end delays." },
          { q: "What types of planning does NSPB support?", a: "NSPB supports driver-based financial planning, headcount planning, capital expenditure planning, project-level budgeting, revenue planning by product or region, and rolling forecasts. Planning models can be built at any level of granularity — from consolidated group to department, cost centre, or individual project." },
          { q: "How does NSPB connect to NetSuite actuals?", a: "NSPB is embedded within your NetSuite account and syncs actuals automatically — there is no manual export or import required. Your finance team compares budget versus actual in real time, with drill-through capability to the underlying NetSuite transactions supporting any variance." },
          { q: "Can we model multiple financial scenarios in NSPB?", a: "Yes. NSPB supports unlimited plan versions — base case, upside, downside, and custom scenarios — all built from the same driver-based model. Scenario comparison reports allow finance and executive teams to evaluate the impact of different assumptions on P&L, cash flow, and balance sheet simultaneously." },
          { q: "Does NSPB support consolidation for multi-entity organisations?", a: "Yes. NSPB natively supports multi-subsidiary consolidation including intercompany eliminations, currency translation, and minority interest — producing consolidated financial plans and forecasts at group level while maintaining entity-level detail for local management reporting." },
          { q: "Who can use NSPB — is it just for finance?", a: "NSPB supports distributed planning across the organisation. Finance controls the model and approval workflow, while department managers, cost centre owners, and business unit leaders input their plans through a guided interface with validation rules — ensuring data quality without requiring Financial Planning and Analysis expertise." },
          { q: "How long does a NetSuite Planning & Budgeting implementation take?", a: "A standard NSPB implementation covering annual budget, one rolling forecast model, and management reporting packs typically takes 6 to 10 weeks. Implementations with headcount planning, multi-entity consolidation, or custom driver models take 10 to 16 weeks depending on complexity and data quality." },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f766e] via-[#14b8a6] to-[#0891b2] shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div key={i} className="absolute bg-white rounded-full"
                  style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />
              ))}
            </div>
            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Replace Spreadsheets with Intelligent Financial Planning and Analysis — <span className="text-cyan-200">Start Today.</span></h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">Join finance teams worldwide using NetSuite Planning & Budgeting to forecast faster, plan smarter, and partner more strategically with the business.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-teal-800 hover:bg-teal-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95">
                Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
