"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Calculator, Target, Zap, ArrowRight, Check, ChevronRight,
  CheckCircle2, ShieldCheck, PieChart, Users, Eye, Settings,
  Search, FileText, BrainCircuit, TrendingUp, BarChart3,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";

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
    { label: "Increased visibility, control, and organizational alignment achieved.", value: 90, suffix: "%", icon: Eye },
    { label: "Improved efficiency, accuracy, and automation of manual processes.", value: 95, suffix: "%", icon: Zap },
    { label: "Tailored NetSuite maximizes potential to meet unique requirements.", value: 69, suffix: "%", icon: Settings },
  ];

  const modules = [
    {
      title: "Budgeting and Forecasting",
      description: "Automate tedious companywide and departmental budgeting processes. Prebuilt workflows that leverage best practices make it easy to closely track the progress of tasks, such as reviews and approvals.",
      image: "/images/modules/budgeting_planning_custom.png",
      color: "#0f6e8a",
      rgb: "15,110,138"
    },
    {
      title: "Scenario Planning and Modeling",
      description: "Perform scenario modeling and multidimensional planning with any number of dimensions, such as location, product, customer or expense. Easily model complex calculations.",
      image: "/images/netsuiteimages/ns_scaling_dash.png",
      color: "#3b5299",
      rgb: "59,82,153"
    },
    {
      title: "AI-Powered Predictive Planning",
      description: "Leveraging embedded AI, Intelligent Performance Management automates data analysis to improve and accelerate decision making. Prediction algorithms continually monitor and analyze plans.",
      image: "/images/modules/intelligent_automation.png",
      color: "#1a7a55",
      rgb: "26,122,85"
    },
    {
      title: "Revenue Planning",
      description: "Align revenue forecasts and sales plans with corporate objectives. Create driver-based revenue and sales forecasts for all business units in collaboration with teams.",
      image: "/images/modules/revenue_recognition_custom.png",
      color: "#7b3a8a",
      rgb: "123,58,138"
    },
    {
      title: "Operational Expense",
      description: "Enable flexible driver-based planning to connect your operational assumptions to financial outcomes. Support a hierarchical planning process encompassing finance and business lines.",
      image: "/images/modules/expense_management_custom.png",
      color: "#a05a18",
      rgb: "160,90,24"
    },
    {
      title: "Workforce Planning",
      description: "Simplify workforce planning, headcount, salary and compensation planning by aligning organizational needs with workforce priorities to ensure objectives are met.",
      image: "/images/modules/workforce_management.png",
      color: "#4a3a8a",
      rgb: "74,58,138"
    },
    {
      title: "Trended Financial Statements",
      description: "Fully integrated GAAP-compliant statements mean income, balance sheet and cash flow statements are connected with seamless actual-to-budget trending.",
      image: "/images/modules/financial_reporting_custom.png",
      color: "#1a6080",
      rgb: "26,96,128"
    },
    {
      title: "Data Synchronization",
      description: "Prebuilt data synchronization with NetSuite ERP ensures data accuracy. Up-to-date financial and operational data are automatically reflected in your plans.",
      image: "/images/netsuiteimages/ns_integration_services.png",
      color: "#6a2575",
      rgb: "106,37,117"
    },
    {
      title: "Dashboards",
      description: "Easily create dashboards in minutes that display budget and actuals data. Secure, collaborative, process-driven approach makes defining and authoring reports effortless.",
      image: "/images/netsuiteimages/ns_visibility_dash.png",
      color: "#154e8a",
      rgb: "21,78,138"
    },
    {
      title: "Microsoft Office Integration",
      description: "Smart View for Office enables integration with Outlook, Excel, Word and PowerPoint. Users can add what-if analyses in Excel for customers or items on the fly.",
      image: "/images/modules/general_ledger_custom.png",
      color: "#1a6545",
      rgb: "26,101,69"
    },
  ];

  const benefits = [
    {
      title: "Reduced Planning Cycle Times",
      description: "Templates and workflows make it easy to gather inputs and assumptions.",
      image: "/images/benefits/benefit_gbm_processes.png",
      points: ["Gather inputs easily", "Automated assumptions", "Streamlined templates", "Faster cycles"]
    },
    {
      title: "Accurate Information",
      description: "Pre-built synchronization with NetSuite ERP ensures real-time, accurate financial and operational data is used.",
      image: "/images/benefits/benefit_unified_platform.png",
      points: ["Real-time synchronization", "ERP data integration", "Eliminated discrepancies", "Reliable datasets"]
    },
    {
      title: "Align the Organization",
      description: "All stakeholders are connected in a single environment, eliminating emails and spreadsheets.",
      image: "/images/benefits/benefit_sc_b2b_b2c.png",
      points: ["Unified environment", "No disconnected spreadsheets", "Seamless collaboration", "Org-wide visibility"]
    },
    {
      title: "Increased Transparency",
      description: "Everyone is entering data consistently and using the same processes, so all changes are tracked.",
      image: "/images/benefits/benefit_compliance_security.png",
      points: ["Consistent data entry", "Unified processes", "Tracked changes", "Audit readiness"]
    },
    {
      title: "Improved Forecast Accuracy",
      description: "Regularly compare and analyze actual versus projected results to refine forecasts.",
      image: "/images/benefits/benefit_financial_visibility.png",
      points: ["Refined forecasting", "Variance analysis", "Actual vs Projected", "Data-driven decisions"]
    },
  ];

  return (
    <div className="min-h-screen selection:bg-teal-900 selection:text-white bg-white">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000a10] via-[#000f1a] to-[#001828]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-teal-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-teal-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite Planning and Budgeting</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-400">
                  NetSuite Planning and Budgeting
                </span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-teal-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Transform Financial Planning with NetSuite's Automated Budgeting System. Automate labor-intensive planning processes and gain strategic analysis focus.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Get in Touch
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
                  <Image src="/images/lap/lap3.webp" alt="NetSuite Planning" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0f766e, #14b8a6)' }}>
                      <BrainCircuit className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">Automated Budgeting System</p>
                      <p className="text-gray-500 text-xs mt-0.5">Budget · Forecast · Scenarios · AI Narratives</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* COMMENTED FOR NOW - Hero Stats Metrics */}
          {/* <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-8 sm:pt-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-teal-700/20 rounded-xl">
                      <s.icon className="w-6 h-6 text-teal-400" />
                    </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-teal-400">{s.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-4">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* Sticky Nav */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[{ label: "What is NetSuite Planning and Budgeting?", href: "#what-is-netsuite-planning-and-budgeting" }, { label: "Features", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-teal-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-cyan-600 to-teal-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* What is */}
      <section id="what-is-netsuite-planning-and-budgeting" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden"
            >
              <div className="relative w-full h-full p-4 lg:p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-teal-900/10 border-4 border-teal-100">
                  <Image
                    src="/images/Dashboard/planing and budgeting 2 dashboard.jpg"
                    alt="NetSuite Planning and Budgeting Solution Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-between py-6 h-full"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-teal-500 leading-tight">
                  Forecast Confidently with NetSuite Planning and Budgeting.
                </h2>
              </div>
              <div className="space-y-2 my-auto pt-2 md:pt-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  NetSuite Planning and Budgeting (NSPB) automates labor-intensive financial planning processes, enabling finance teams to produce accurate budgets and forecasts with ease. As a specialized NetSuite Planning partner, we help you leverage embedded AI to produce strategic what-if scenarios and data-driven narratives.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  By centralizing your financial data in one collaborative environment, NSPB eliminates the risks of manual spreadsheet maintenance. Shift your focus from data entry to high-impact analysis, ensuring your organization remains agile and responsive to changing market conditions.
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)',
                    color: '#ffffff',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#0f766e';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 25px -5px rgba(15, 118, 110, 0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Optimize Your Budgeting</span>
                  <motion.span
                    className="flex items-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Control, Collaboration, Visibility - Alternating Layout */}
      <section className="py-24 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000a10 0%, #001018 25%, #001822 55%, #000c14 80%, #000810 100%)" }}>
        {/* Ambient background glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 opacity-20" style={{ background: "radial-gradient(circle, #0f766e 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 opacity-10" style={{ background: "radial-gradient(circle, #0891b2 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 space-y-24 relative z-10">
          {[
            {
              title: "Control",
              desc: "Data synchronization with NetSuite ERP ensures automated, ongoing access to up-to-date financial and operational data. Reduced reliance on manual data input and reconciliations means better control.",
              image: "/images/lap/lap1.webp",
              icon: ShieldCheck,
              color: "teal"
            },
            {
              title: "Collaboration",
              desc: "All stakeholders are connected in a single environment, streamlining data collection. Accessibility boosts participation and accountability, making it easier for finance to get meaningful input.",
              image: "/images/people/fourteam.webp",
              icon: Users,
              color: "cyan"
            },
            {
              title: "Visibility",
              desc: "Data is entered in one centralized place, creating a single, agreed-upon version of information. Any changes made to numbers in the system are automatically reflected in reports and dashboards.",
              image: "/images/Dashboard/business intelligence 2.jpg",
              icon: Eye,
              color: "emerald"
            },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              <div className="flex-1 space-y-6">
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-900/30 border border-${item.color}-500/30 flex items-center justify-center backdrop-blur-sm`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-400`} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">{item.title}</h3>
                <div className={`w-16 h-1 bg-gradient-to-r from-${item.color}-500 to-transparent rounded-full`} />
                <p className="text-lg text-gray-300 leading-relaxed">{item.desc}</p>
                <div className="pt-4">
                  <Link href="#contact-form" className="group inline-flex items-center gap-2 font-bold text-teal-400 hover:text-teal-300 transition-colors">
                    Explore {item.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full relative group">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-transparent" />
                </div>
                <div className={`absolute -bottom-6 -${i % 2 === 1 ? 'left' : 'right'}-6 w-32 h-32 bg-${item.color}-500/20 rounded-full blur-3xl opacity-50`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="modules" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-medium text-gray-900 text-center">
            NetSuite Planning and Budgeting Features
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, boxShadow: `0 20px 40px -8px rgba(${mod.rgb}, 0.5)`, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer bg-white h-full"
                  style={{ minHeight: 380 }}
                >
                  {/* Top: Image Section with Color Overlay */}
                  <div className="relative h-56 shrink-0 overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)` }}
                    />
                  </div>

                  {/* Bottom: Information Section */}
                  <div
                    className="flex-1 p-5 pb-6 flex flex-col relative"
                    style={{ backgroundColor: `rgb(${mod.rgb})` }}
                  >
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">
                        {mod.title}
                      </h4>
                      <p className="text-white/90 text-sm leading-snug font-medium">
                        {mod.description}
                      </p>
                    </div>

                    {/* Hover Reveal Button */}
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Get Started <ArrowRight size={10} />
                      </span>
                    </div>

                    {/* Multi-color Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Slotted between Features and Challenges */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #000a10 0%, #001018 25%, #001822 55%, #000c14 80%, #000810 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(20,184,166,0.25) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">
              Key Benefits of NetSuite Planning and Budgeting
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" />
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
                      {index === 0 && <TrendingUp size={20} />}{index === 1 && <Target size={20} />}{index === 2 && <Users size={20} />}
                      {index === 3 && <Eye size={20} />}{index === 4 && <BarChart3 size={20} />}
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

      {/* Challenges Section with Updated Images */}
      <section id="challenges" className="py-24 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900">Addressing Global Challenges</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Manual Processes",
                desc: "Prebuilt integration with NetSuite financial data eliminates errors caused by manual transfers.",
                image: "/images/lap/lap8_11zon.webp",
                icon: Settings,
                color: "teal"
              },
              {
                title: "Lack of Collaboration",
                desc: "Users can enter comments and assumptions for collaborative planning, budgeting and forecasting.",
                image: "/images/people/threeteam.webp",
                icon: Users,
                color: "cyan"
              },
              {
                title: "Poor Decisions",
                desc: "Quickly compare budget with actuals to deliver insights more quickly and enable better decision-making.",
                image: "/images/Dashboard/analytic wharehouse 2.jpg",
                icon: Search,
                color: "emerald"
              },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className={`absolute top-4 left-4 p-3 bg-white rounded-xl shadow-lg`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing - SuiteCommerce Style */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d12' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-teal-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does NetSuite Planning and Budgeting Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  Companies of every size, from pre-revenue startups to fast-growing businesses, have made the move to NetSuite. Looking for a better way to run your business but wondering about the cost?
                  <br /><br />
                  Users subscribe to NetSuite for an annual license fee. Your license is made up of three main components: core platform, optional modules and the number of users. There is also a one-time implementation fee for the initial set up. As your business grows, you can easily activate new modules and add users — that's the beauty of cloud software.
                  <br /><br />
                  NetSuite Planning and Budgeting is available as add-on module.
                </p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-teal-400 hover:text-white transition-all duration-200 shadow-md">
                    Talk to an Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#001018]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#002030]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#003040]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl.webp" alt="NetSuite Planning Pricing" fill sizes="(max-width: 768px) 100vw, 30vw" className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section - Dark Teal Theme */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#00080d] via-[#00171f] to-[#004350] shadow-2xl">
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Optimize Your Finance on NetSuite Planning & Budgeting —{" "}
                  <span className="text-teal-300">Forecast Confidently.</span>
                </h2>
                <p className="text-white/80 text-base md:text-lg font-medium">
                  Join thousands of businesses growing their efficiency with NetSuite — unified planning that works as hard as your business.
                </p>
              </div>
              <Link
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#004350] hover:bg-teal-50 font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Common questions about NetSuite Planning and Budgeting."
        customFaqs={[
          { q: "What is NetSuite Planning and Budgeting?", a: "NetSuite Planning and Budgeting is a cloud-based solution that helps businesses streamline financial planning, budgeting, and forecasting. It allows teams to collaborate in real-time, automate manual processes, and make data-driven decisions by integrating financial data from across the organization." },
          { q: "How does NetSuite Planning and Budgeting improve forecasting accuracy?", a: "NetSuite enables businesses to create detailed, driver-based models that reflect real-world scenarios. Its powerful data integration capabilities provide accurate, up-to-date financial data, and the platform's built-in analytics help generate accurate forecasts based on historical trends and real-time data." },
          { q: "What level of customization does NetSuite Planning and Budgeting offer?", a: "NetSuite offers a high degree of customization, allowing users to tailor budgeting, forecasting, and reporting models to meet specific business needs. You can create custom dashboards, reports, and workflows to reflect your organization's unique financial structure and goals." },
          { q: "How does NetSuite Planning and Budgeting integrate with other systems?", a: "NetSuite seamlessly integrates with various ERP, CRM, and financial systems, including its own suite of applications, ensuring that all data is up-to-date and consistent. This integration eliminates the need for manual data entry, reduces errors, and ensures a unified view of your business's financial health." },
        ]}
      />

      <ContactFormDesign4 />
    </div>
  );
}
