"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  BarChart3,
  TrendingUp,
  Eye,
  Brain,
  Zap,
  Target,
  ArrowRight,
  PieChart,
  Activity,
  Check,
  ChevronRight,
  Shield,
  Layers,
  DollarSign,
  Users,
  CheckCircle2,
  Globe,
  LineChart,
  Gauge,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";
import NSServicesSection from '@/app/netsuite/components/NSServicesSection';

// Static CTA particles — avoids SSR mismatch
const CTA_PARTICLES = [
  { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 },
  { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
  { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 },
  { w: 1.7, h: 2.4, top: 62, left: 55, dur: 3.8, delay: 2.1 },
  { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 },
  { w: 1.2, h: 1.5, top: 90, left: 85, dur: 4.7, delay: 1.9 },
  { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 },
  { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 },
  { w: 2.4, h: 2.7, top: 55, left: 15, dur: 4.4, delay: 0.9 },
  { w: 1.5, h: 1.9, top: 70, left: 40, dur: 5.8, delay: 2.5 },
  { w: 2.0, h: 1.4, top: 18, left: 63, dur: 3.9, delay: 1.7 },
  { w: 2.9, h: 2.2, top: 42, left: 88, dur: 5.0, delay: 0.2 },
];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));
  useEffect(() => {
    if (inView) { spring.set(value); }
    else { spring.set(0); }
  }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function NetSuiteBIPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Faster Insights", value: 75, suffix: "%", icon: Zap },
    { label: "Better Decisions", value: 90, suffix: "%", icon: Brain },
    { label: "Real-Time Data", value: 100, suffix: "%", icon: Activity },
    { label: "User Adoption", value: 95, suffix: "%", icon: Target },
  ];

  const modules = [
    {
      title: "Real-Time Dashboards",
      description:
        "Fully customizable role-based dashboards with live KPI tiles, charts, and reminders — updated in real time without any manual refresh.",
      image: "/images/lap/lap1.webp",
      color: "#1e8a9e",
      rgb: "14,108,130",
    },
    {
      title: "Advanced Reporting",
      description:
        "Drag-and-drop report builder with 200+ pre-built financial, sales, and operational templates ready to use out of the box.",
      image: "/images/lap/lap2.webp",
      color: "#3b5299",
      rgb: "40,65,145",
    },
    {
      title: "SuiteAnalytics Workbench",
      description:
        "Explore and analyze data with an interactive pivot table engine, visual chart builder, and saved dataset queries.",
      image: "/images/lap/lap3.webp",
      color: "#8b3a6a",
      rgb: "125,42,88",
    },
    {
      title: "KPI Tracking",
      description:
        "Define and monitor key performance indicators with automated threshold alerts and color-coded scorecards for every team.",
      image: "/images/people/laptopgirl1.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Predictive Analytics",
      description:
        "AI-powered forecasting and trend analysis — anticipate revenue changes, inventory shortfalls, and cash flow requirements before they happen.",
      image: "/images/lap/lap4.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Financial Reporting",
      description:
        "Generate audit-ready P&L, balance sheet, and cash flow reports with multi-entity consolidation and drill-down capabilities.",
      image: "/images/lap/lap5.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Sales Analytics",
      description:
        "Track pipeline, quota attainment, and win rates by rep, region, or product with live CRM-connected analytics.",
      image: "/images/people/laptopmen2.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Mobile Analytics",
      description:
        "Access dashboards, reports, and KPI alerts on any iOS or Android device — stay connected to business performance from anywhere.",
      image: "/images/people/fourteam.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Inventory Analytics",
      description:
        "Monitor stock levels, reorder points, slow-movers, and carrying costs in real time across all warehouse locations.",
      image: "/images/lap/lap7_11zon.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Operational Reports",
      description:
        "Combine data from multiple NetSuite modules into a single operational view — projects, HR, purchasing, and logistics together.",
      image: "/images/people/threeteam.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Scheduled Reporting",
      description:
        "Schedule any report or snapshot to be automatically generated and emailed to stakeholders daily, weekly, or monthly.",
      image: "/images/lap/lap8_11zon.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Custom Visualizations",
      description:
        "Create bespoke bar, line, funnel, scatter, and heat-map charts — then embed them on any dashboard or report layout.",
      image: "/images/people/laptopgirl.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
  ];

  const benefits = [
    {
      title: "Real-Time Business Insights",
      description: "Monitor KPIs and financial metrics live — without waiting for batch reports or manual data pulls from disconnected systems.",
      image: "/images/lap/lap2.webp",
      points: ["Live KPI tile dashboards", "Instant drill-down to transactions", "Role-specific access for every team", "Scheduled report delivery to inbox"],
    },
    {
      title: "Self-Service Analytics",
      description: "Empower every business user to build their own reports and visualizations — no IT ticket required.",
      image: "/images/lap/lap3.webp",
      points: ["Drag-and-drop report builder", "200+ pre-built templates", "Pivot tables and chart builder", "Shareable saved views across teams"],
    },
    {
      title: "Predictive Intelligence",
      description: "Leverage AI and machine learning to forecast trends, surface anomalies, and identify opportunities before competitors do.",
      image: "/images/lap/lap4.webp",
      points: ["AI-driven revenue forecasting", "Cash flow projection models", "Anomaly detection in real time", "Trend-based demand planning"],
    },
    {
      title: "Unified Data Platform",
      description: "Eliminate data silos by connecting finance, sales, inventory, and HR in a single analytics source of truth.",
      image: "/images/lap/lap1.webp",
      points: ["Single source of truth across modules", "Cross-functional consolidated reports", "Eliminate manual spreadsheet merges", "Real-time sync — no data lag"],
    },
    {
      title: "Mobile & Remote Access",
      description: "Stay connected to business performance from any device — get notified when critical KPIs breach thresholds.",
      image: "/images/lap/lap5.webp",
      points: ["Full dashboard access on iOS & Android", "Push alerts for KPI thresholds", "Offline report caching", "Responsive design for all screens"],
    },
    {
      title: "Enterprise-Grade Security",
      description: "Control exactly who sees which reports and data with field-level permissions and comprehensive audit trails.",
      image: "/images/people/laptopmen2.webp",
      points: ["Role-based report access controls", "Field-level data security", "Full audit trails for report access", "SOC 2 certified platform infrastructure"],
    },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10">

          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors duration-200">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Business Intelligence</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: 'calc(100vh - 150px)' }}>

            {/* LEFT — Headline + CTA */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  NetSuite Business Intelligence & Analytics
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 mb-5 sm:mb-6 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
              >
                Turn your ERP data into a competitive advantage — real-time dashboards, AI-powered forecasting, and self-service analytics built directly into your NetSuite platform.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/30 hover:scale-105"
                >
                  Unlock Your Data
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — Accounting-style: image + floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              <div className="relative w-[88%] ml-auto">

                {/* Main image */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image
                    src="/images/lap/lap6_11zon.webp"
                    alt="NetSuite Business Intelligence Dashboard"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Bottom overlay card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">
                        Insights in seconds, not days
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                        Live dashboards · AI Forecasting · 200+ Reports · Mobile Access
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Top-left floating badge card */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0f4c81, #0ea5e9)' }}>
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">
                      NetSuite Business Intelligence
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      Dashboards · Analytics · AI · Reporting · KPIs
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-5 sm:pt-6 relative z-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.12, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl sm:rounded-2xl group-hover:bg-blue-700/30 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base px-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Nav ───────────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {[
              { label: "What is NetSuite BI?", href: "#what-is-bi" },
              { label: "Modules", href: "#modules" },
              { label: "Benefits", href: "#benefits" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── What is NetSuite BI ──────────────────────────────────────────── */}
      <section id="what-is-bi" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">

            {/* LEFT — Dashboard image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center rounded-2xl overflow-hidden p-4 mt-15"
              style={{ minHeight: 340 }}
            >
              <div className="relative w-full h-full">
                <Image
                  src="/images/netsuiteimages/solutions/NetsuiteSRP.webp"
                  alt="NetSuite BI Dashboard"
                  width={560}
                  height={380}
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </motion.div>

            {/* RIGHT — Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 mt-15"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                  Make Faster Decisions with NetSuite BI.
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite Business Intelligence provides comprehensive analytics and reporting capabilities built directly into your ERP — no separate BI tool required. Access real-time dashboards, advanced reports, and AI-powered forecasts from a single unified platform.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Eliminate data silos and manual spreadsheet consolidation. With NetSuite BI, your entire organization gains a single version of the truth, delivered instantly to every role through customizable, role-based dashboards and automated reporting.
              </p>
              <div className="pt-4">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)', color: '#ffffff' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#0a1f5c';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                  }}
                >
                  <span>Unlock Your Analytics</span>
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

      {/* ── BI Modules Grid ───────────────────────────────────────────────── */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-5xl font-medium text-gray-900 text-center"
          >
            NetSuite BI Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl text-center"
          >
            12 integrated analytics and reporting modules to turn every data point into a business advantage
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                  style={{ minHeight: 340 }}
                >
                  {/* Top: Image */}
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)` }}
                    />
                  </div>

                  {/* Bottom: Info */}
                  <div
                    className="flex-1 p-5 pb-6 flex flex-col relative"
                    style={{ backgroundColor: `rgb(${mod.rgb})` }}
                  >
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">{mod.title}</h4>
                      <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">{mod.description}</p>
                    </div>

                    {/* Hover reveal */}
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Explore <ArrowRight size={10} />
                      </span>
                    </div>

                    {/* Bottom accent bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Section ─────────────────────────────────────────────── */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #060e1f 0%, #0a1e4a 25%, #0f2a57 55%, #091828 80%, #050d1a 100%)" }}
      >
        {/* Glow orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Why Leaders Choose NetSuite BI
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">

            {/* Left: Image */}
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Interactive list */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index
                    ? 'bg-white shadow-xl border-l-4 border-blue-600'
                    : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'
                    }`}
                  suppressHydrationWarning
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors duration-300 ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <Activity size={20} />}
                      {index === 1 && <Eye size={20} />}
                      {index === 2 && <Brain size={20} />}
                      {index === 3 && <Layers size={20} />}
                      {index === 4 && <Globe size={20} />}
                      {index >= 5 && <Shield size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>
                      {item.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>

                  {activeBenefit === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pl-9"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}
                          </li>
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

      {/* ── Pricing Section ──────────────────────────────────────────────── */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#06303f' }}
          >
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">

              {/* LEFT — Text + CTA */}
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does NetSuite BI Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite Business Intelligence is included as a native capability within the NetSuite platform — meaning there&apos;s no separate BI license to purchase. Your investment covers the core NetSuite ERP subscription, user seats, and any advanced analytics add-ons like SuiteAnalytics Connect or the Analytics Workbench. As your organization grows, you can activate richer analytics capabilities without disrupting your existing setup or migrating data.
                </p>
                <div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Contact Us Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* RIGHT — Blob image */}
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div
                  className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl"
                  style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}
                >
                  <Image src="/images/people/laptopgirl1.webp" alt="NetSuite BI Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────── */}
      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite Business Intelligence — dashboards, SuiteAnalytics, reporting, and implementation."
        customFaqs={[
          { q: "What is NetSuite Business Intelligence (BI)?", a: "NetSuite BI is the embedded analytics and business intelligence layer within the NetSuite platform — powered by SuiteAnalytics. It provides real-time dashboards, saved searches, pivot reports, financial snapshots, and Analytics Workbench for advanced data exploration — all operating directly on live ERP data without any data export or BI tool sync." },
          { q: "How is NetSuite BI different from a separate BI tool like Power BI or Tableau?", a: "Unlike standalone BI tools, NetSuite BI accesses your live transaction data in real time — no ETL, no data warehouse refresh delays, no data duplication. Every dashboard reflects the current state of your business. For advanced cross-system analytics, NetSuite Analytics Workbench can ingest data from external sources while keeping NetSuite as the primary layer." },
          { q: "What is SuiteAnalytics and what can it do?", a: "SuiteAnalytics is NetSuite's native reporting and data exploration tool. It enables creation of custom saved searches, formula-based reports, pivot tables, charts, and scheduled report delivery by email — all configurable by business users without coding. It also powers the Report Builder and dashboard KPI tiles used across dashboards." },
          { q: "What is Analytics Workbench and who needs it?", a: "Analytics Workbench is NetSuite's premium data warehousing layer — a separate, high-performance analytics environment that stores full historical transaction data, supports joins across multiple record types, and allows complex SQL-style queries. It's designed for organisations with advanced reporting requirements or those needing to combine NetSuite data with external sources." },
          { q: "Can we build role-based dashboards for different users?", a: "Yes. NetSuite allows you to create unlimited custom dashboards with role-based access — so your CFO sees cash flow, AR aging, and FX exposure; your sales manager sees pipeline and quota attainment; and your warehouse team sees pick efficiency and stock levels. Each dashboard pulls live data specific to that user's permissions." },
          { q: "Does NetSuite BI support scheduling and automated report distribution?", a: "Yes. Saved searches and reports can be scheduled to run automatically and distributed by email to specific users, roles, or external recipients on hourly, daily, weekly, or monthly cadences — keeping stakeholders informed without manual effort." },
          { q: "Can NetSuite BI connect to data from outside NetSuite?", a: "With Analytics Workbench, NetSuite can ingest data from external sources such as Salesforce, Shopify, Google Analytics, databases, and flat files — allowing blended analytics that combine ERP financials with marketing, operations, and customer data in a unified view." },
          { q: "How long does a NetSuite BI implementation take?", a: "Core dashboard and saved search setup is typically done within the first 4 to 8 weeks of a NetSuite implementation. Analytics Workbench configuration for complex cross-system analytics takes an additional 4 to 6 weeks depending on the number of data sources and custom report requirements." },
        ]}
      />

      {/* ── CTA Banner ──────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002a8c] via-[#0044cc] to-[#0099a3] shadow-2xl"
          >
            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                />
              ))}
            </div>

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Transform Your Data into Decisions —{" "}
                  <span className="text-cyan-300">Start Today.</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Join thousands of businesses that replaced static spreadsheets with NetSuite&apos;s real-time, AI-powered Business Intelligence platform.
                </p>
              </div>

              <Link
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                See BI in Action
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────────── */}
      <NSServicesSection />
      <ContactFormDesign4 />
    </div>
  );
}
