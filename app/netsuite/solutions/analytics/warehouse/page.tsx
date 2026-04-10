"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Database, Zap, ArrowRight, Check, ChevronRight, Layers,
  TrendingUp, CheckCircle2, Globe, Shield, Lock, Cloud,
  GitBranch, BarChart3, Share2, Server, Network,
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

export default function AnalyticsWarehousePage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Data Sources", value: 100, suffix: "+", icon: GitBranch },
    { label: "Query Performance", value: 10, suffix: "x", icon: Zap },
    { label: "Data Security", value: 100, suffix: "%", icon: Lock },
    { label: "Uptime", value: 99, suffix: "%", icon: Cloud },
  ];

  const modules = [
    { title: "Unified Data Repository", description: "Centralise all your NetSuite ERP data alongside 100+ external sources into one cloud-native analytics warehouse.", image: "/images/modules/dashboard module.webp", color: "#1e8a9e", rgb: "14,108,130" },
    { title: "Pre-Built Connectors", description: "Connect Salesforce, Shopify, Google Analytics, HubSpot, and 40+ popular platforms with zero-code connectors.", image: "/images/modules/any module.webp", color: "#3b5299", rgb: "40,65,145" },
    { title: "SQL Access & Querying", description: "Full SQL query access for data analysts — write custom queries, create views, and perform complex joins across all data.", image: "/images/modules/sheet module.webp", color: "#1a7a55", rgb: "18,108,72" },
    { title: "Visual Data Modelling", description: "Create semantic data models, define relationships, and build reusable datasets — no coding required.", image: "/images/modules/dashbord module.webp", color: "#8b3a6a", rgb: "125,42,88" },
    { title: "BI Tool Integration", description: "Connect Tableau, Power BI, Looker, and any JDBC/ODBC-compatible tool directly to your NetSuite data warehouse.", image: "/images/modules/module8.webp", color: "#a05a18", rgb: "145,75,18" },
    { title: "Automated Data Refresh", description: "Schedule data refreshes at any frequency — real-time, hourly, or daily — to keep your warehouse always current.", image: "/images/modules/working module.webp", color: "#4a3a8a", rgb: "65,45,130" },
    { title: "Multi-Source Consolidation", description: "Merge ERP, CRM, marketing, and operational data into a single trusted dataset for cross-functional analytics.", image: "/images/modules/managging together module.webp", color: "#1a6080", rgb: "20,88,115" },
    { title: "Data Governance", description: "Define data ownership, access controls, lineage tracking, and quality rules to ensure trusted, compliant analytics.", image: "/images/modules/any modules.webp", color: "#6a2575", rgb: "95,30,105" },
    { title: "Advanced Calculations", description: "Write complex business logic, KPI definitions, and aggregations once — reuse across every report and dashboard.", image: "/images/modules/account modules.webp", color: "#154e8a", rgb: "18,68,130" },
    { title: "Historical Data Archiving", description: "Retain unlimited historical data for trend analysis, audit compliance, and long-term forecasting with no ERP storage impact.", image: "/images/modules/mobile module.webp", color: "#1a6545", rgb: "20,95,60" },
    { title: "Cloud-Native Architecture", description: "Built on an enterprise-grade cloud data warehouse — scales automatically with your data volume and query concurrency.", image: "/images/modules/chatt mdoule.webp", color: "#8a2a3a", rgb: "130,35,48" },
    { title: "Real-Time Streaming", description: "Stream transaction-level events from NetSuite into your warehouse in real time for operational analytics with zero lag.", image: "/images/modules/csm modules.webp", color: "#0f4e8a", rgb: "12,68,130" },
  ];

  const benefits = [
    { title: "Unified Single Source of Truth", description: "Stop juggling data from multiple systems. Consolidate NetSuite ERP and 100+ external sources into one governed, trusted analytics layer.", image: "/images/lap/lap2.webp", points: ["100+ pre-built external data connectors", "Single dataset across ERP + CRM + Marketing", "No manual data merges or export jobs", "Consistent, governed metrics across all reports"] },
    { title: "Full SQL Access for Data Teams", description: "Give your data analysts the freedom to write custom queries, build views, and explore data at any granularity — no restrictions.", image: "/images/lap/lap3.webp", points: ["Full ANSI SQL support", "Create custom views and materialized queries", "Complex joins across all data sources", "JDBC/ODBC connectivity for BI tools"] },
    { title: "10x Faster Query Performance", description: "NetSuite Analytics Warehouse is built on a columnar, cloud-native architecture optimised for analytics — not transactional ERP queries.", image: "/images/lap/lap4.webp", points: ["Columnar storage for analytics workloads", "Massively parallel query execution", "Sub-second dashboard load times", "Zero performance impact on ERP operations"] },
    { title: "Enterprise Data Governance", description: "Ensure every metric, report, and dashboard is built on trusted, governed data — with full lineage, access control, and quality tracking.", image: "/images/lap/lap1.webp", points: ["Field-level data access controls", "Full data lineage and audit trails", "Data quality rules and alerting", "SOC 2 and GDPR compliant processing"] },
    { title: "Connect Your Entire BI Ecosystem", description: "Use your existing BI investments — Tableau, Power BI, Looker — connected directly to NetSuite data without ETL pipelines.", image: "/images/people/laptopgirl1.webp", points: ["JDBC/ODBC connections for any BI tool", "Live and import connection modes", "Pre-certified Tableau and Power BI connectors", "REST API access for custom applications"] },
    { title: "Scalable & Always Available", description: "A fully managed, cloud-native warehouse that scales automatically — no infrastructure to manage and 99% SLA-backed uptime.", image: "/images/lap/lap5.webp", points: ["Auto-scaling compute and storage", "99% uptime SLA guarantee", "Zero maintenance or patching required", "Global data residency options"] },
  ];

  return (
    <div className="min-h-screen selection:bg-teal-900 selection:text-white bg-white">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#001028] to-[#001a20]">
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
            <span className="text-white/80">Analytics Warehouse</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-teal-100 to-teal-400">
                  NetSuite Analytics Warehouse
                </span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-teal-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Centralise data from NetSuite and 100+ external sources in a cloud-native analytics warehouse — then query, model, and visualise with enterprise BI tools at 10x the performance.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-teal-600 hover:border-teal-500 transition-all duration-300 shadow-xl hover:scale-105">
                  Explore the Warehouse
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
                  <Image src="/images/lap/lap10_11zon.webp" alt="NetSuite Analytics Warehouse" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6)' }}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">10x faster analytics queries</p>
                      <p className="text-gray-500 text-xs mt-0.5">100+ Connectors · SQL Access · BI Ready · 99% Uptime</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #134e4a, #0d9488)' }}>
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite Analytics Warehouse</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Unify · Query · Model · Connect · Govern</p>
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
            {[{ label: "What is Analytics Warehouse?", href: "#what-is-warehouse" }, { label: "Modules", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Services", href: "#services" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-teal-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-700 via-cyan-600 to-blue-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* What is Analytics Warehouse */}
      <section id="what-is-warehouse" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex items-center justify-center rounded-2xl p-4 mt-15" style={{ minHeight: 340 }}>
              <Image src="/images/netsuiteimages/solutions/NetsuiteSRP.webp" alt="NetSuite Analytics Warehouse" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6 mt-15">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-teal-500 leading-tight">
                One Warehouse for All Your Business Data.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite Analytics Warehouse is a cloud-native data warehouse that consolidates all your ERP, CRM, marketing, and operational data into a single governed repository — purpose-built for analytics at enterprise scale.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Connect 100+ external data sources, run full SQL queries, plug in your favourite BI tools, and build the analytics models your business needs — all without separate ETL infrastructure or data engineering overhead.
              </p>
              <div className="pt-4">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)', color: '#ffffff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = '#134e4a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #134e4a 0%, #0d9488 100%)'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}>
                  <span>Unify Your Data</span>
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">Analytics Warehouse Modules</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">
            12 powerful capabilities to ingest, model, govern, and analyse data at enterprise scale
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #060e0f 0%, #091e20 25%, #0f2a2d 55%, #071820 80%, #050d10 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(13,148,136,0.25) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-teal-200">Why Enterprises Choose Analytics Warehouse</h3>
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
                      {index === 0 && <Database size={20} />}{index === 1 && <Server size={20} />}{index === 2 && <Zap size={20} />}
                      {index === 3 && <Shield size={20} />}{index === 4 && <BarChart3 size={20} />}{index >= 5 && <Cloud size={20} />}
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

      <div id="services">
        <NSServicesSection />
      </div>

      {/* Pricing */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#062520' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-teal-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does Analytics Warehouse Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite Analytics Warehouse is priced based on your data volumes, the number of external connectors, user seats, and refresh frequency. It is licensed separately from the core NetSuite ERP platform. As your data strategy grows, you can add more connectors, increase storage, or activate real-time streaming without any infrastructure changes.
                </p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-teal-400 hover:text-white transition-all duration-200 shadow-md">
                    Get Warehouse Pricing <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052820]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#0a4038]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0d5048]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopmen.webp" alt="NetSuite Analytics Warehouse Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite Analytics Workbench — data consolidation, query performance, external connectors, and go-live timelines."
        customFaqs={[
          { q: "What is NetSuite Analytics Workbench?", a: "NetSuite Analytics Workbench is a cloud-native data warehouse and analytics platform built on Oracle Autonomous Data Warehouse and Oracle Analytics Cloud — embedded within your NetSuite account. It stores your complete historical NetSuite transaction data plus external source data, enabling high-performance analytics that go far beyond standard SuiteAnalytics reporting." },
          { q: "How is Workbench different from standard NetSuite reporting?", a: "Standard SuiteAnalytics reporting queries live NetSuite records in real time, which can have performance limits with complex joins or large datasets. Workbench stores a pre-processed copy of all your data in a high-performance columnar data warehouse — enabling sub-second queries across billions of records, complex multi-table analysis, and advanced visualizations." },
          { q: "Can we bring data from outside NetSuite into Workbench?", a: "Yes. Workbench supports data ingestion from 100+ external sources including Salesforce, Shopify, Google Analytics, HubSpot, databases, CSV files, and REST APIs. External data is blended with NetSuite financials and operational data — creating a unified analytics environment with a single version of truth." },
          { q: "What reporting and visualization tools does Workbench provide?", a: "Workbench is built on Oracle Analytics Cloud, providing enterprise-grade visualization including interactive dashboards, drill-through reports, heat maps, geospatial analytics, and natural language queries. Pre-built NetSuite content packs provide 50+ ready-to-use dashboards for Finance, Sales, Operations, and Supply Chain from day one." },
          { q: "How does Workbench handle data security and access control?", a: "Workbench inherits NetSuite's role-based access control — users only see data they are authorized to view in NetSuite. Additional row-level security and data masking can be configured for sensitive financial or HR data. All data in Workbench is encrypted at rest and in transit using Oracle's enterprise security infrastructure." },
          { q: "Does Workbench require a separate data engineering team to maintain?", a: "No. All data pipelines from NetSuite to Workbench run automatically with no manual orchestration. The pre-built content packs and data models are maintained by Oracle. For custom data sources, AGSuite configures the connectors and data mappings at implementation — ongoing maintenance is minimal." },
          { q: "Is Analytics Workbench a separate purchase from NetSuite?", a: "Yes. Analytics Workbench is available as a premium add-on to your NetSuite subscription, priced based on data volume and the number of users accessing advanced analytics features. Contact AGSuite for a customised pricing proposal based on your data sources and user count." },
          { q: "How long does Analytics Workbench implementation take?", a: "A standard implementation covering the core NetSuite data feeds and pre-built dashboards typically takes 4 to 6 weeks. Implementations with multiple external data sources, custom data models, or row-level security requirements typically take 8 to 12 weeks depending on source complexity." },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#062520] via-[#0d4f40] to-[#0099a3] shadow-2xl">
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
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Unify Your Data Strategy — <span className="text-teal-300">Start Today.</span></h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">Stop managing data silos. Connect all your business data in one governed warehouse and give every team the analytics power they need.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-[#062520] hover:bg-teal-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95">
                See Warehouse Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
