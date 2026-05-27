"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Shield, Zap, BarChart3, ArrowRight,
  Check, Layers, TrendingUp, ChevronRight,
  CheckCircle2, Globe2, Coins, Languages,
  Scale, Network, Building2, Calendar,
  Landmark, Globe, Users
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

export default function GlobalBusinessPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: 'Countries Supported', value: 200, suffix: '+', icon: Globe2 },
    { label: 'Currencies', value: 190, suffix: '+', icon: Coins },
    { label: 'Languages', value: 27, suffix: '+', icon: Languages },
    { label: 'Tax Jurisdictions', value: 100, suffix: '+', icon: Landmark },
  ];

  const modules = [
    { title: "Multi-Subsidiary Management", description: "Manage multiple legal entities, business units, and subsidiaries from a single unified platform with real-time consolidated reporting.", image: "/images/modules/managging together module.webp", color: "#1e5e9e", rgb: "14,78,130" },
    { title: "Multi-Currency Support", description: "Transact in 190+ currencies with live exchange rate updates, automated revaluations, and consolidated cross-entity financial reporting.", image: "/images/modules/dashboard module.webp", color: "#1a7a55", rgb: "18,108,72" },
    { title: "Global Tax Management", description: "Stay compliant with local tax regulations across 100+ jurisdictions — VAT, GST, withholding tax — with automated calculation and filing-ready reports.", image: "/images/modules/sheet module.webp", color: "#8b3a6a", rgb: "125,42,88" },
    { title: "Localization & Compliance", description: "Built-in country-specific accounting standards, statutory reporting formats, and regulatory requirements for key global markets.", image: "/images/modules/working module.webp", color: "#a05a18", rgb: "145,75,18" },
    { title: "Global Consolidation", description: "Automate financial consolidation across all subsidiaries — eliminating intercompany eliminations, currency translations, and manual roll-ups.", image: "/images/modules/dashbord module.webp", color: "#3b5299", rgb: "40,65,145" },
    { title: "Intercompany Transactions", description: "Automatically create matched intercompany journal entries and elimination postings to ensure accurate group-level financial statements.", image: "/images/modules/account modules.webp", color: "#1a6545", rgb: "20,95,60" },
    { title: "Multi-GAAP Reporting", description: "Maintain multiple accounting books (IFRS, US GAAP, local GAAP) simultaneously for each entity and consolidate under a single group standard.", image: "/images/modules/module8.webp", color: "#4a3a8a", rgb: "65,45,130" },
    { title: "Global Financial Reporting", description: "Generate real-time consolidated P&L, balance sheets, and cash flows segmented by subsidiary, region, or business unit with one click.", image: "/images/modules/csm modules.webp", color: "#1a6080", rgb: "20,88,115" },
    { title: "NetSuite OneWorld", description: "The purpose-built solution for multinational companies — manage 200+ subsidiaries across 190+ currencies and 100+ tax jurisdictions from one system.", image: "/images/modules/any modules.webp", color: "#6a2575", rgb: "95,30,105" },
    { title: "Foreign Currency Revaluation", description: "Automate period-end foreign currency revaluation of open balances and report unrealised gains/losses in full compliance with IFRS and US GAAP.", image: "/images/modules/any module.webp", color: "#154e8a", rgb: "18,68,130" },
    { title: "Global Payroll Integration", description: "Connect NetSuite with leading global payroll providers — synchronise headcount, salary costs, and journal entries across 200+ countries.", image: "/images/modules/chatt mdoule.webp", color: "#8a2a3a", rgb: "130,35,48" },
    { title: "Subsidiary Quick-Launch", description: "Spin up a new legal entity in days — copy chart of accounts, tax rules, and workflows from a parent or sister subsidiary with zero re-implementation.", image: "/images/modules/mobile module.webp", color: "#0f4e8a", rgb: "12,68,130" },
  ];

  const benefits = [
    {
      title: "One Platform for All Subsidiaries",
      description: "Consolidate financials, operations, and reporting across every global entity from a single NetSuite environment — eliminating disconnected systems and manual roll-ups.",
      image: "/images/lap/lap1.webp",
      points: ["Real-time consolidated reporting", "Automated intercompany eliminations", "Single chart of accounts across all entities", "Drill-down from group to subsidiary to transaction"]
    },
    {
      title: "Multi-Currency & FX Management",
      description: "Operate in 190+ currencies with live exchange rates, automated revaluations, and reporting in any currency — so your global numbers are always accurate and audit-ready.",
      image: "/images/people/laptopgirl.webp",
      points: ["190+ currencies supported natively", "Automated period-end revaluation", "Realised & unrealised FX gain/loss reporting", "Dynamic exchange rate feeds"]
    },
    {
      title: "Local Compliance at Scale",
      description: "Stay audit-ready in every jurisdiction with built-in VAT/GST engines, country-specific chart-of-accounts templates, statutory report formats, and multi-GAAP support.",
      image: "/images/lap/lap3.webp",
      points: ["100+ tax jurisdiction support", "Multi-GAAP: IFRS, US GAAP, local GAAP", "Country statutory report templates", "SOX, SOC 1 & SOC 2 certified controls"]
    },
    {
      title: "Rapid Subsidiary Expansion",
      description: "Launch a new legal entity in days — copy configuration from an existing subsidiary, apply the appropriate localisation pack, and go live without a re-implementation.",
      image: "/images/people/laptopmen2.webp",
      points: ["New subsidiary in days, not months", "Pre-built localization packs for key markets", "Automated role and permission inheritance", "Template-driven chart of accounts setup"]
    },
    {
      title: "Global Financial Visibility",
      description: "Access real-time P&L, cash flow, and balance sheet data consolidated across all regions from any device — with drill-down to the individual transaction level.",
      image: "/images/lap/lap2.webp",
      points: ["CFO & group finance dashboards", "Segment reporting by region or business unit", "Live KPIs without manual data extracts", "Scheduled reports delivered to inboxes"]
    },
    {
      title: "Standardised Global Processes",
      description: "Enforce consistent financial controls, approval workflows, and period-close procedures across every subsidiary so every entity operates to the same standard.",
      image: "/images/people/fourteam.webp",
      points: ["Unified AP/AR and procurement workflows", "Role-based access with field-level security", "Standardised period-close checklists", "Global audit trail down to every transaction"]
    },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          {/* Breadcrumb */}
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
            <Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite Global Business Management</span>
          </motion.nav>
 
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">

            {/* LEFT */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>

              <motion.h1
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  NetSuite Global Business Management
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
                Manage multiple subsidiaries, currencies, and tax regulations from a single cloud platform — with real-time visibility across 200+ countries and 190+ currencies.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Go Global Now
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </a>
              </motion.div>
            </motion.div>

            {/* RIGHT — Image + floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              {/* Outer wrapper */}
              <div className="relative w-[88%] ml-auto">

                {/* Main image */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image
                    src="/images/lap/group2.webp"
                    alt="NetSuite Global Business Management"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                  {/* Bottom scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Bottom white card — inside image at bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                      <Globe2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">
                        Operate across 200+ countries
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                        Multi-currency · Multi-subsidiary · Local tax compliance built-in.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Top-left white card — peeking outside image */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0f4c81, #0ea5e9)' }}>
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">
                      NetSuite OneWorld
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      Subsidiaries · Currencies · Tax · Consolidation
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
            className="border-t border-white/15 pt-8 sm:pt-10"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[
              { label: "What is NetSuite Global Business Management?", href: "#what-is-global" },
              { label: "Modules", href: "#modules" },
              { label: "Benefits", href: "#benefits" },
              { label: "Services", href: "#services" },
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

      {/* ── What is Global Business Section ──────────────────────────────── */}
      <section id="what-is-global" className="pt-5 pb-14 bg-white scroll-mt-36">
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
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-indigo-100">
                  <Image
                    src="/images/Dashboard/global business managemnet dashboard.jpg"
                    alt="NetSuite Global Business Management OneWorld Dashboard"
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
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                  Scale Globally with NetSuite OneWorld.
                </h2>
              </div>
              <div className="space-y-2 my-auto pt-2 md:pt-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  NetSuite OneWorld is the industry standard for NetSuite Global Business Management, enabling multinational organizations to manage diverse legal entities and subsidiaries from a single platform. As a specialized NetSuite Global Business partner, we help you unify operations across 200+ countries with automated intercompany eliminations and consolidated financial reporting.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  With support for 190+ currencies and 100+ tax jurisdictions, OneWorld ensures local compliance while providing real-time global visibility. Eliminate fragmented systems and manual roll-ups, allowing your executive team to make data-driven decisions based on a single, unified version of the truth.
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)', color: '#ffffff' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#0a1f5c';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 25px -5px rgba(10, 31, 92, 0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Unlock Global Power</span>
                  <motion.span
                    className="flex items-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Global Business Modules Grid ─────────────────────────────────── */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-5xl font-medium text-gray-900 text-center">
            NetSuite Global Business Management Modules
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl text-center">
            12 fully integrated modules to manage every dimension of your global operations from one unified platform
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, boxShadow: `0 20px 40px -8px rgba(${mod.rgb}, 0.5)`, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer bg-white"
                  style={{ minHeight: 340 }}
                >
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover object-top" />
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
            .star-gb { position:absolute; border-radius:9999px; background:white; animation: twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
          `}</style>
          {[
            { w: 2, h: 2, top: '8%', left: '12%', dur: '2.5s', delay: '0s' }, { w: 1, h: 1, top: '20%', left: '35%', dur: '3.2s', delay: '0.5s' },
            { w: 3, h: 3, top: '15%', left: '60%', dur: '4s', delay: '1s' }, { w: 1, h: 1, top: '50%', left: '8%', dur: '2.8s', delay: '0.3s' },
            { w: 2, h: 2, top: '70%', left: '22%', dur: '3.5s', delay: '1.5s' }, { w: 1, h: 1, top: '42%', left: '80%', dur: '2.1s', delay: '0.7s' },
            { w: 2, h: 2, top: '80%', left: '55%', dur: '3.8s', delay: '0.2s' }, { w: 3, h: 3, top: '30%', left: '90%', dur: '4.2s', delay: '0.9s' },
          ].map((s, i) => (
            <div key={i} className="star-gb" style={{ width: `${s.w}px`, height: `${s.h}px`, top: s.top, left: s.left, '--tw-dur': s.dur, '--tw-delay': s.delay } as React.CSSProperties} />
          ))}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Key Business Benefits of NetSuite Global Business Management
            </h2>
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
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" />
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
                      {index === 0 && <Globe2 size={20} />}
                      {index === 1 && <Coins size={20} />}
                      {index === 2 && <Shield size={20} />}
                      {index === 3 && <Zap size={20} />}
                      {index === 4 && <BarChart3 size={20} />}
                      {index >= 5 && <Layers size={20} />}
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

      <NSServicesSection />

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
                  How Much Does NetSuite Global Business Management Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite Global Business Management pricing is tailored to your number of subsidiaries, countries, currencies, and user count. The annual subscription combines the NetSuite OneWorld platform, any add-on modules required, and a one-time implementation fee. Launch new subsidiaries or activate new markets at any time — no hardware, no upgrades, no downtime.
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
                  <Image src="/images/people/laptopgirl.webp" alt="NetSuite Global Business Pricing" fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ variant="netsuite-global-business" id="faq" />

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
                  Scale Your Global Business with NetSuite —{" "}
                  <span className="text-cyan-300">From One Unified Platform.</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Join 43,000+ businesses that run global operations on NetSuite. Manage every subsidiary, currency, and compliance requirement from a single cloud system — your global transformation starts with one conversation.
                </p>
              </div>
              <a
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Start Your NetSuite Global Business Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────────── */}
      <ContactFormDesign4 />

    </div>
  );
}
