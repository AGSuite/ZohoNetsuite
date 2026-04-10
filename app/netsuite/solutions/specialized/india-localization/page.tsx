"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  FileText, Globe, Zap, ArrowRight, Check, ChevronRight, Layers,
  TrendingUp, CheckCircle2, ShieldCheck, BarChart3, LineChart, Calculator, IndianRupee,
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

export default function IndiaLocalizationPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "GST Compliance", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Reporting Faster", value: 50, suffix: "%", icon: Zap },
    { label: "States Covered", value: 29, suffix: "+", icon: Globe },
    { label: "Audit Risk Reduced", value: 90, suffix: "%", icon: ShieldCheck },
  ];

  const modules = [
    { title: "GST Management", description: "End-to-end GST engine for tax calculation, return preparation, and seamless reconciliation across entities.", image: "/images/modules/dashboard module.webp", color: "#e07820", rgb: "224,120,32" },
    { title: "E-Invoicing (IRP)", description: "Direct integration with the Invoice Registration Portal for real-time IRN generation and signed QR codes.", image: "/images/modules/mobile module.webp", color: "#1e8a6e", rgb: "30,138,110" },
    { title: "TDS Management", description: "Automated tax deduction at source with Form 16A generation, threshold tracking, and audit reports.", image: "/images/modules/account modules.webp", color: "#1a4fa8", rgb: "26,79,168" },
    { title: "TCS Compliance", description: "Tax collected at source on applicable sales transactions with full statutory compliance and reporting.", image: "/images/modules/sheet module.webp", color: "#7b3a8a", rgb: "123,58,138" },
    { title: "E-Way Bill", description: "Generate E-Way bills automatically from NetSuite invoices and delivery orders — no manual data entry.", image: "/images/modules/working module.webp", color: "#8a2a20", rgb: "138,42,32" },
    { title: "GSTR Filing", description: "Automated GSTR-1, GSTR-3B, and GSTR-9 preparation with built-in validation and reconciliation.", image: "/images/modules/dashbord module.webp", color: "#4a3a8a", rgb: "74,58,138" },
    { title: "Statutory Reporting", description: "Local tax reports and financial statements formatted per Indian statutory requirements.", image: "/images/modules/module8.webp", color: "#1a6080", rgb: "26,96,128" },
    { title: "Multi-GSTIN", description: "Manage multiple GSTINs and state registrations within a single NetSuite account seamlessly.", image: "/images/modules/managging together module.webp", color: "#6a2575", rgb: "106,37,117" },
    { title: "Banking Integration", description: "Automated payments and bank statement reconciliation with major Indian banks.", image: "/images/modules/any module.webp", color: "#154e8a", rgb: "21,78,138" },
    { title: "Payroll Compliance", description: "PF, ESI, and professional tax calculations fully aligned with Indian labour law requirements.", image: "/images/modules/chatt mdoule.webp", color: "#1a6545", rgb: "26,101,69" },
    { title: "Audit Trail", description: "Complete, traceable financial records ensuring you are audit-ready at every point in time.", image: "/images/modules/any modules.webp", color: "#8a5010", rgb: "138,80,16" },
    { title: "GSTIN Validation", description: "Real-time vendor and customer GSTIN validation to prevent errors before they reach your returns.", image: "/images/modules/csm modules.webp", color: "#0f4e8a", rgb: "15,78,138" },
  ];

  const benefits = [
    { title: "Full GST Compliance", description: "NetSuite's India Localization automates the entire GST lifecycle — from tax calculation on transactions to GSTR return preparation and e-invoicing — keeping you always compliant.", image: "/images/modules/dashboard module.webp", points: ["Auto GST calculation on all transactions", "GSTR-1, GSTR-3B, and GSTR-9 ready", "E-invoicing with IRP integration", "Real-time GSTIN validation"] },
    { title: "Effortless TDS & TCS", description: "Automate Tax Deducted at Source and Tax Collected at Source based on vendor sections, payment thresholds, and transaction types — with zero manual calculation required.", image: "/images/modules/sheet module.webp", points: ["Auto TDS deduction on payments", "Form 16A and Form 27 generation", "Lower deduction certificate support", "Full tax audit trail and reports"] },
    { title: "Instant E-Way Bills", description: "Generate E-Way bills directly from NetSuite invoices and delivery orders, eliminating manual data entry and reducing compliance delays at logistics checkpoints.", image: "/images/modules/working module.webp", points: ["Auto E-Way bill from invoice", "Bulk E-Way bill generation", "Sync with GSTIN e-way portal", "Expiry alerts and extensions"] },
    { title: "Multi-Location & Multi-GSTIN", description: "Manage businesses with multiple branches, states, and GSTINs from a single NetSuite account — with entity-level separation and fully consolidated group reporting.", image: "/images/modules/managging together module.webp", points: ["Multiple GSTINs in one account", "State-wise tax reporting", "Inter-company and branch transfers", "Consolidated India-wide view"] },
    { title: "Automated Statutory Reporting", description: "Generate all required statutory reports — from profit & loss in Indian formats to tax audit schedules — directly from NetSuite with no manual data extraction.", image: "/images/modules/module8.webp", points: ["Schedule III financial statements", "Tax audit annexure reports", "Form 3CD and 3CEB support", "Director and board reporting formats"] },
    { title: "Always Updated for Compliance", description: "NetSuite India Localization is updated whenever GST Council changes rates, slabs, or filing formats — so you always remain compliant without any manual effort.", image: "/images/modules/dashbord module.webp", points: ["Tax rate changes applied automatically", "New filing-format updates included", "GST Council notifications tracked", "Proactive compliance alerts"] },
  ];

  return (
    <div className="min-h-screen selection:bg-orange-900 selection:text-white bg-white">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#150800] via-[#1e0d00] to-[#2a1500]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-orange-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-orange-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">India Localization</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-100 to-orange-400">
                  NetSuite India Localization
                </span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-orange-500 to-amber-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Complete compliance solution for Indian businesses — automate GST, TDS, e-invoicing, E-Way bills, and statutory reporting all within your cloud ERP.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-orange-600 hover:border-orange-500 transition-all duration-300 shadow-xl hover:scale-105">
                  Get Compliant Today
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/50" style={{ height: 390 }}>
                  <Image src="/images/people/fourteam.webp" alt="India Localization" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #c2410c, #f97316)' }}>
                      <IndianRupee className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">India-Ready Cloud ERP</p>
                      <p className="text-gray-500 text-xs mt-0.5">GST · TDS · E-Invoicing · E-Way Bill · Statutory Reports</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #c2410c, #f97316)' }}>
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite India Localization</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">GST · TDS · TCS · Multi-GSTIN · Payroll</p>
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
                    <div className="p-2 sm:p-3 bg-orange-700/20 rounded-xl group-hover:bg-orange-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-orange-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span>
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
            {[{ label: "What is India Localization?", href: "#what-is" }, { label: "Features", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Services", href: "#services" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-orange-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-700 via-red-600 to-amber-500">{l.label}</span>
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
              <Image src="/images/netsuiteimages/solutions/NetsuiteSRP.webp" alt="India Localization" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6 mt-15">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-500 leading-tight">
                Run a Compliant, Efficient Business in India — Automatically.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite India Localization brings global ERP power with India-specific compliance built right in — so your finance team spends less time on manual tax work and more time driving the business forward.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From GST return filing and e-invoicing to TDS deductions and E-Way bill generation, every statutory requirement is automated within your cloud ERP — keeping you audit-ready at all times.
              </p>
              <div className="pt-4">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #c2410c 0%, #f97316 100%)', color: '#ffffff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = '#c2410c'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #c2410c 0%, #f97316 100%)'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}>
                  <span>Explore India Localization</span>
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">India Compliance Capabilities</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">
            12 India-specific compliance capabilities built directly into your NetSuite ERP — no plugins, no manual workarounds
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-amber-500 to-red-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #150800 0%, #1e0d00 25%, #2a1500 55%, #180a00 80%, #0f0500 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">Why Indian Businesses Choose NetSuite</h3>
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
                  className={`group w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-orange-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-orange-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <CheckCircle2 size={20} />}{index === 1 && <Calculator size={20} />}{index === 2 && <FileText size={20} />}
                      {index === 3 && <Globe size={20} />}{index === 4 && <BarChart3 size={20} />}{index >= 5 && <ShieldCheck size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-orange-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-orange-600 mt-0.5 shrink-0" /> {pt}</li>
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
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#120600' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-orange-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does India Localization Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite India Localization is delivered as a SuiteApp — a native extension that runs within your NetSuite environment. Pricing is based on your overall NetSuite licence tier and user count. The core GST, TDS, and e-invoicing capabilities are included as part of the standard India SuiteApp; advanced configurations for multi-GSTIN, payroll, or banking integrations may carry an additional investment.
                </p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-orange-400 hover:text-white transition-all duration-200 shadow-md">
                    Talk to a Compliance Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#1e0800]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#3d1200]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#5a1a00]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopmen2.webp" alt="India Localization Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite India Localization — GST compliance, e-invoicing, TDS, multi-state operations, and statutory reporting."
        customFaqs={[
          { q: "What Indian tax requirements does NetSuite India Localization cover?", a: "NetSuite India Localization covers the full spectrum of Indian statutory compliance — GST computation (CGST, SGST, IGST, UTGST), e-invoicing with IRP integration, e-Way Bill generation, TDS management by section, TCS for specified transactions, RCM for unregistered vendor purchases, HSN/SAC code assignment, ITC register, and GSTR-1, 3B, 9 filing reports." },
          { q: "Is e-invoicing mandatory and does NetSuite support IRP integration?", a: "E-invoicing is mandatory for GST-registered businesses with aggregate turnover above ₹5 crore. NetSuite India Localization integrates directly with the Invoice Registration Portal (IRP) API — auto-generating the required JSON, submitting to IRP, receiving the signed IRN and QR code, and embedding these on the NetSuite invoice PDF automatically." },
          { q: "How does GST computation work in NetSuite?", a: "During transaction creation in NetSuite, the India Localization module determines the applicable GST type (CGST/SGST for intra-state, IGST for inter-state, UTGST for union territories) based on the ship-from and ship-to state, item HSN code, and supply type. Tax amounts are calculated and posted automatically to the correct GL accounts." },
          { q: "Can NetSuite manage multiple GSTINs for different states?", a: "Yes. NetSuite India Localization supports unlimited GSTIN registrations — each state entity maintains its own GST ledger, ITC register, and filing schedule. Inter-company and inter-state transactions are handled correctly with automatic IGST determination and corresponding ITC entries." },
          { q: "How does TDS automation work for Indian operations?", a: "The India Localization module evaluates TDS applicability for each payment based on the Income Tax section, cumulative threshold, and vendor PAN. TDS is deducted automatically at the applicable rate, posted to the TDS payable ledger, and tracked for Form 16/16A generation and 26Q/27Q quarterly filing." },
          { q: "Does the solution support e-Way Bill generation for goods movement?", a: "Yes. E-Way Bills are generated directly from NetSuite delivery orders and invoices via the NIC (National Informatics Centre) API. Transporter details, GSTIN, vehicle number, and consignment value are pulled from the NetSuite transaction — and the e-Way Bill number is recorded back in the shipment record." },
          { q: "Which GSTR returns does the India Localization solution produce?", a: "The solution generates filing-ready reports for GSTR-1 (outward supplies), GSTR-3B (monthly summary return), GSTR-2A/2B (purchase reconciliation), and GSTR-9 (annual return) — all in GSTN-prescribed formats ready for upload to the GST portal or submission through a GST Suvidha Provider." },
          { q: "How long does it take to implement NetSuite India Localization?", a: "A standard implementation for a single GSTIN entity — covering GST configuration, IRP credentials, TDS section setup, HSN code mapping, and GSTR report testing — typically takes 4 to 6 weeks. Multi-state or multi-subsidiary implementations with multiple GSTINs take 6 to 10 weeks depending on complexity." },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#c2410c] via-[#f97316] to-[#fbbf24] shadow-2xl">
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
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Stay Compliant in India — <span className="text-amber-200">Automatically.</span></h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">Join Indian businesses using NetSuite to automate GST, TDS, e-invoicing, and statutory reporting — and stay audit-ready 365 days a year.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-orange-800 hover:bg-orange-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95">
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
