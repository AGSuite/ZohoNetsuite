"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Shield, Zap, BarChart3, ArrowRight,
  DollarSign, Check, Layers, TrendingUp, ChevronRight,
  FileText, Receipt, Wallet, PieChart, Percent, Building2,
  Calendar, CheckCircle2, Globe, Users, Landmark
} from 'lucide-react';
import { FAQ } from '@/app/components/home/FAQ';
import ContactFormDesign4 from '@/app/netsuite/components/ContactFormDesign4';
import NSServicesSection from '@/app/netsuite/components/NSServicesSection';

// Static CTA particles to avoid SSR mismatch
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
  { w: 1.6, h: 2.5, top: 85, left: 25, dur: 4.2, delay: 3.0 },
  { w: 2.2, h: 1.1, top: 22, left: 92, dur: 6.5, delay: 1.0 },
  { w: 1.8, h: 2.8, top: 50, left: 5, dur: 3.6, delay: 2.3 },
  { w: 2.5, h: 1.7, top: 95, left: 48, dur: 4.9, delay: 0.4 },
  { w: 1.3, h: 2.3, top: 38, left: 60, dur: 5.3, delay: 1.5 },
  { w: 2.7, h: 1.9, top: 67, left: 32, dur: 4.6, delay: 2.8 },
  { w: 1.1, h: 1.6, top: 10, left: 78, dur: 3.3, delay: 0.7 },
  { w: 2.4, h: 2.1, top: 75, left: 93, dur: 5.6, delay: 1.8 },
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

export default function AccountingSoftwarePage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: 'Faster Close', value: 50, suffix: '%', icon: Calendar },
    { label: 'Reduced Errors', value: 90, suffix: '%', icon: CheckCircle2 },
    { label: 'Time Saved', value: 40, suffix: '%', icon: TrendingUp },
    { label: 'Cost Savings', value: 30, suffix: '%', icon: DollarSign },
  ];

  const modules = [
    { title: "General Ledger", description: "Real-time P&L, balance sheets, multi-dimensional chart of accounts, and automated journal entries for a single source of financial truth.", image: "/images/modules/sheet module.webp", color: "#1e8a9e", rgb: "14,108,130" },
    { title: "Accounts Payable", description: "Automate purchase invoices, vendor payments, and approval workflows — eliminating manual processing and reducing payment errors.", image: "/images/modules/account modules.webp", color: "#3b5299", rgb: "40,65,145" },
    { title: "Accounts Receivable", description: "Accelerate cash collection with automated billing, dunning, and payment matching from a single dashboard.", image: "/images/modules/dashbord module.webp", color: "#1a7a55", rgb: "18,108,72" },
    { title: "Fixed Asset Management", description: "Track asset lifecycle with automated depreciation schedules, revaluations, and disposal with full audit trails.", image: "/images/modules/working module.webp", color: "#8b3a6a", rgb: "125,42,88" },
    { title: "Tax Management", description: "Handle multi-jurisdiction tax automatically — VAT, GST, sales tax — with built-in compliance and filing-ready reports.", image: "/images/modules/csm modules.webp", color: "#a05a18", rgb: "145,75,18" },
    { title: "Financial Reporting", description: "Generate real-time P&L, cash flow, and balance sheet statements. Schedule reports to be delivered automatically to stakeholders.", image: "/images/modules/dashboard module.webp", color: "#4a3a8a", rgb: "65,45,130" },
    { title: "Bank Reconciliation", description: "Auto-match bank transactions with NetSuite records, flag discrepancies, and close the books faster every period.", image: "/images/modules/any module.webp", color: "#1a6080", rgb: "20,88,115" },
    { title: "Multi-Currency", description: "Transact in 190+ currencies with live exchange rates, automated revaluations, and consolidated multi-entity reporting.", image: "/images/modules/module8.webp", color: "#6a2575", rgb: "95,30,105" },
    { title: "Revenue Recognition", description: "Automate ASC 606 / IFRS 15 compliant revenue recognition schedules tied directly to contracts and delivery milestones.", image: "/images/modules/managging together module.webp", color: "#154e8a", rgb: "18,68,130" },
    { title: "Budgeting & Planning", description: "Build rolling forecasts, compare actuals vs. budget in real time, and drill into variances at any level of the organisation.", image: "/images/modules/any modules.webp", color: "#1a6545", rgb: "20,95,60" },
    { title: "Expense Management", description: "Capture, approve, and reimburse employee expenses with policy controls, receipt capture, and automatic GL coding.", image: "/images/modules/chatt mdoule.webp", color: "#8a2a3a", rgb: "130,35,48" },
    { title: "Period Close Checklist", description: "Standardise and automate month-end tasks with role-based checklists, status tracking, and one-click period locking.", image: "/images/modules/mobile module.webp", color: "#0f4e8a", rgb: "12,68,130" },
  ];

  const benefits = [
    {
      title: "Accelerated Period Close",
      description: "Reduce month-end close from weeks to days with automated reconciliations, journal templates, and parallel close workflows that eliminate bottlenecks.",
      image: "/images/lap/lap1.webp",
      points: ["Automated bank and intercompany reconciliation", "Parallel close across multiple entities", "Real-time close status dashboard", "Standardised checklists with sign-off controls"]
    },
    {
      title: "Real-Time Financial Visibility",
      description: "Access live P&L, balance sheet, and cash flow data from any device — no more waiting for batch reports or manual spreadsheet consolidation.",
      image: "/images/people/laptopgirl.webp",
      points: ["Configurable CFO & finance dashboards", "Live KPIs without manual data pulls", "Drill-down from summary to transaction", "Scheduled reports delivered to inboxes"]
    },
    {
      title: "Global Compliance & Tax",
      description: "Stay audit-ready across every jurisdiction with built-in VAT, GST, and sales-tax engines, and country-specific chart-of-accounts templates.",
      image: "/images/lap/lap3.webp",
      points: ["190+ currency support with auto revaluation", "Multi-GAAP reporting (IFRS, US GAAP, local)", "SOX, SOC 1 & SOC 2 certified controls", "Country-specific statutory reporting"]
    },
    {
      title: "Intelligent Automation",
      description: "Take humans out of the loop for repetitive, rules-based accounting tasks — freeing your finance team to focus on analysis and strategy.",
      image: "/images/people/laptopmen2.webp",
      points: ["Automated AP/AR matching and posting", "Rules-based journal entries and allocations", "Revenue recognition on auto-pilot (ASC 606)", "AI-driven anomaly detection in transactions"]
    },
    {
      title: "Scalable Chart of Accounts",
      description: "Start with your current structure and grow without limits — add subsidiaries, segments, and new dimensions in minutes without any re-implementation.",
      image: "/images/lap/lap2.webp",
      points: ["Unlimited segments and custom dimensions", "Multi-entity consolidation built-in", "Add new subsidiaries in minutes", "Handles millions of transactions seamlessly"]
    },
    {
      title: "Audit-Ready Security",
      description: "Protect financial data with enterprise-grade controls, detailed audit trails, and role-based access that ensure only the right people see the right numbers.",
      image: "/images/people/fourteam.webp",
      points: ["Full transaction-level audit trail", "Role-based access with field-level security", "Multi-factor authentication built-in", "Immutable period locks to prevent back-dating"]
    },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10">
          {/* Breadcrumb — absolutely positioned so it doesn't affect centering */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Accounting</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: 'calc(100vh - 150px)' }}>

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  NetSuite Cloud Accounting Software
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 mb-5 sm:mb-6 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
              >
                Close the books faster, eliminate manual errors, and gain real-time financial visibility — all from the world&apos;s #1 cloud accounting platform trusted by 43,000+ businesses.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/30 hover:scale-105"
                >
                  Get Started
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — Smaller image + two white cards (reference style) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              {/* Outer wrapper — leaves room for the top-left card to peek out */}
              <div className="relative w-[88%] ml-auto">

                {/* Main image — smaller, rounded */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image
                    src="/images/lap/lap2.webp"
                    alt="NetSuite Cloud Accounting Software"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Bottom scrim for card readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Bottom white card — inside image at bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3"
                  >
                    {/* Green check icon */}
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">
                        Close the books up to 50% faster
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                        Real-time GL, AR &amp; AP — always audit-ready, always accurate.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Top-left white card — peeking outside image on the left */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  {/* Landmark (bank) icon — teal-to-blue gradient */}
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0f4c81, #0ea5e9)' }}>
                    <Landmark className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">
                      NetSuite Cloud Accounting
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      GL · AR/AP · Tax · Fixed Assets · Reporting
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-5 sm:pt-6"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
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
              { label: "What is NetSuite Accounting?", href: "#what-is-accounting" },
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
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-blue-900">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── What is Accounting Section ───────────────────────────────────── */}
      <section id="what-is-accounting" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex items-center justify-center rounded-2xl overflow-hidden p-4 mt-15"
              style={{ minHeight: 340 }}
            >
              <Image
                src="/images/netsuiteimages/background/netsuiteaccounting.webp"
                alt="NetSuite Accounting"
                width={560}
                height={380}
                className="w-full h-auto rounded-xl object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 mt-15"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                Close the Books Faster with NetSuite Accounting.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite Cloud Accounting is a comprehensive financial management platform that unifies general ledger, AR, AP, fixed assets, tax, and reporting in a single cloud system — eliminating spreadsheets and disconnected tools.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With real-time visibility and a single source of truth, finance teams can close faster, stay compliant globally, and deliver the strategic insight leadership needs to grow with confidence.
              </p>
              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)', color: '#ffffff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = '#0a1f5c'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                >
                  <span>Unlock Accounting Power</span>
                  <motion.span className="flex items-center" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Accounting Modules Grid ──────────────────────────────────────── */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-5xl font-medium text-gray-900 text-center">
            NetSuite Accounting Modules
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl text-center">
            12 fully integrated modules to manage every dimension of your financial operations in one unified platform
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                  style={{ minHeight: 340 }}
                >
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
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Get Started <ArrowRight size={10} />
                      </span>
                    </div>
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
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <style>{`
            @keyframes twinkle { 0%,100%{opacity:0.1;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
            @keyframes drift { 0%{transform:translateY(0px) translateX(0px)} 50%{transform:translateY(-12px) translateX(6px)} 100%{transform:translateY(0px) translateX(0px)} }
            .star-acc { position:absolute; border-radius:9999px; background:white; animation: twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
          `}</style>
          {[
            { w: 2, h: 2, top: '8%', left: '12%', dur: '2.5s', delay: '0s' }, { w: 1, h: 1, top: '20%', left: '35%', dur: '3.2s', delay: '0.5s' },
            { w: 3, h: 3, top: '15%', left: '60%', dur: '4s', delay: '1s' }, { w: 1, h: 1, top: '50%', left: '8%', dur: '2.8s', delay: '0.3s' },
            { w: 2, h: 2, top: '70%', left: '22%', dur: '3.5s', delay: '1.5s' }, { w: 1, h: 1, top: '42%', left: '80%', dur: '2.1s', delay: '0.7s' },
            { w: 2, h: 2, top: '80%', left: '55%', dur: '3.8s', delay: '0.2s' }, { w: 3, h: 3, top: '30%', left: '90%', dur: '4.2s', delay: '0.9s' },
          ].map((s, i) => (
            <div key={i} className="star-acc" style={{ width: `${s.w}px`, height: `${s.h}px`, top: s.top, left: s.left, '--tw-dur': s.dur, '--tw-delay': s.delay } as React.CSSProperties} />
          ))}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Why Finance Teams Choose NetSuite Accounting
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            {/* Left image */}
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right accordion */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index
                    ? 'bg-white shadow-xl border-l-4 border-blue-600'
                    : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}
                  suppressHydrationWarning
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors duration-300 ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <Calendar size={20} />}
                      {index === 1 && <BarChart3 size={20} />}
                      {index === 2 && <Shield size={20} />}
                      {index === 3 && <Zap size={20} />}
                      {index === 4 && <Layers size={20} />}
                      {index >= 5 && <TrendingUp size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>
                      {item.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
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

      {/* ── Pricing Section ───────────────────────────────────────────────── */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#06303f' }}
          >
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              {/* Left */}
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does NetSuite Accounting Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite Accounting pricing is tailored to your business size and requirements. The annual subscription combines the core financial management platform, any additional modules you need, and your user count — plus a one-time implementation fee. As your business grows, activate new modules or add users instantly — no upgrades, no downtime, no infrastructure headaches.
                </p>
                <div>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Contact Us Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Right — organic image */}
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="absolute bottom-8 left-6 w-14 h-14 bg-[#1a8fa0]/60 z-10" style={{ borderRadius: '40% 60% 50% 50% / 50% 40% 60% 50%', transform: 'rotate(20deg)' }} />
                <div className="absolute bottom-16 left-14 w-3 h-3 bg-yellow-400/60 rounded-full z-10" />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl.webp" alt="NetSuite Accounting Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ variant="netsuite-accounting" id="faq" />

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002a8c] via-[#0044cc] to-[#0099a3] shadow-2xl"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div
                  key={i} className="absolute bg-white rounded-full"
                  style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                />
              ))}
            </div>
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Modernise Your Accounting —{" "}
                  <span className="text-cyan-300">Faster Than You Think.</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Join 43,000+ businesses that replaced spreadsheets and legacy finance tools with the world&apos;s #1 cloud accounting platform. Your transformation starts with one conversation.
                </p>
              </div>
              <a
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Start Your Accounting Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
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
