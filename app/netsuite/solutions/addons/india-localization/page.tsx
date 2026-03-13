"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  FileText, ShieldCheck, Globe, BarChart3, Zap, Users, ArrowRight, Check,
  ChevronRight, CheckCircle2, TrendingUp, Layers, Receipt, Building2,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";

const PARTICLES = [{ w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 }, { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 }, { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 }, { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 }, { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 }, { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 }];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) spring.set(value); else spring.set(0); }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function IndiaLocalizationPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "GST Compliance Coverage", value: 100, suffix: "%", icon: ShieldCheck },
    { label: "E-Invoice Automation", value: 99, suffix: "%", icon: FileText },
    { label: "Tax Types Supported", value: 12, suffix: "+", icon: Receipt },
    { label: "Compliance Accuracy", value: 100, suffix: "%", icon: CheckCircle2 },
  ];

  const modules = [
    { title: "GST Computation", description: "Automatic CGST, SGST, IGST, and UTGST calculation on every transaction based on state and supply type.", image: "/images/lap/lap1.webp", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "E-Invoicing (IRP)", description: "Auto-generate and submit e-invoices to the Invoice Registration Portal with IRN and QR code generation.", image: "/images/lap/lap2.webp", color: "#065f46", rgb: "6,95,70" },
    { title: "E-Way Bill Generation", description: "Seamless e-Way Bill generation for goods movement above ₹50,000 directly from NetSuite transactions.", image: "/images/lap/lap3.webp", color: "#7c2d12", rgb: "124,45,18" },
    { title: "GSTR Filing Reports", description: "Ready-to-file GSTR-1, GSTR-2A, GSTR-2B, GSTR-3B, and annual GSTR-9 reports generated automatically.", image: "/images/lap/lap4.webp", color: "#4c1d95", rgb: "76,29,149" },
    { title: "TDS Management", description: "Automated Tax Deducted at Source calculation, deduction, certificate generation, and filing reports for all payments.", image: "/images/lap/lap5.webp", color: "#0c4a6e", rgb: "12,74,110" },
    { title: "TCS Management", description: "Tax Collected at Source tracking for e-commerce and specified transactions as per Income Tax Act requirements.", image: "/images/people/laptopgirl1.webp", color: "#713f12", rgb: "113,63,18" },
    { title: "HSN/SAC Codes", description: "Automated HSN code assignment for goods and SAC code assignment for services on all NetSuite transactions.", image: "/images/lap/lap7_11zon.webp", color: "#134e4a", rgb: "19,78,74" },
    { title: "Reverse Charge Mechanism", description: "RCM auto-identification and tax posting for specified categories of supply from unregistered vendors.", image: "/images/people/laptopmen2.webp", color: "#831843", rgb: "131,24,67" },
    { title: "Input Tax Credit", description: "Complete ITC register, reconciliation with GSTR-2B, and tracking of eligible vs ineligible credits.", image: "/images/people/threeteam.webp", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "Multi-State Compliance", description: "Manage operations across all 28 Indian states and 8 UTs with state-wise GST registration and compliance.", image: "/images/lap/lap8_11zon.webp", color: "#064e3b", rgb: "6,78,59" },
    { title: "Audit Trail & Reports", description: "Complete audit-ready tax ledger, reconciliation reports, and transaction logs for GST assessments.", image: "/images/people/fourteam.webp", color: "#78350f", rgb: "120,53,15" },
    { title: "Multi-Currency INR", description: "Full Indian Rupee support with FEMA-compliant foreign currency transaction handling for import/export.", image: "/images/people/laptopgirl.webp", color: "#3b0764", rgb: "59,7,100" },
  ];

  const benefits = [
    {
      title: "GST Automation End-to-End",
      description: "From transaction creation to GSTR filing — every GST step is automated inside NetSuite. CGST/SGST/IGST is calculated correctly on every invoice and credit note, ITC is tracked automatically, and GSTR reports are generated ready for filing without any manual data entry.",
      image: "/images/lap/lap4.webp",
      points: ["Auto CGST/SGST/IGST computation", "ITC ledger and reconciliation", "GSTR-1, 3B, 9 filing reports", "Real-time GST liability dashboard"],
    },
    {
      title: "E-Invoicing & IRP Compliance",
      description: "Stay ahead of GSTN's mandatory e-invoicing requirements. Our solution auto-generates the JSON payload, submits to the IRP, retrieves the signed e-invoice with IRN and QR code, and embeds it directly on your NetSuite PDF invoice — all in under 30 seconds.",
      image: "/images/lap/lap2.webp",
      points: ["IRP API integration", "IRN generation and embedding", "QR code on invoice PDF", "Cancellation and amendment support"],
    },
    {
      title: "TDS/TCS Automation",
      description: "Automate the complete TDS and TCS lifecycle — section-wise rate application, threshold tracking, deduction, certificate generation (Form 16/16A), and quarterly filing returns — eliminating the risk of non-compliance penalties.",
      image: "/images/people/laptopmen2.webp",
      points: ["Section-wise TDS rates", "Threshold-based deduction logic", "Form 16 & 16A generation", "26Q/27Q filing reports"],
    },
    {
      title: "E-Way Bill Management",
      description: "Generate e-Way Bills directly from NetSuite delivery orders and invoices. Our solution validates transporter details, calculates distance-based validity, supports Part-B updates, and provides bulk generation for high-volume dispatches.",
      image: "/images/lap/lap3.webp",
      points: ["Direct NIC portal integration", "Transporter detail sync", "Part-B update support", "Bulk e-Way Bill generation"],
    },
    {
      title: "Multi-State & Multi-GSTIN",
      description: "Manage multiple GSTIN registrations across different Indian states from a single NetSuite account. Each state entity maintains its own GST ledger, ITC register, and filing calendar — with consolidated group reporting at the holding company level.",
      image: "/images/people/fourteam.webp",
      points: ["Unlimited GSTIN registrations", "State-wise ITC separation", "Inter-state transaction handling", "Consolidated group compliance reports"],
    },
    {
      title: "Audit-Ready Documentation",
      description: "Every GST transaction creates a tamper-proof audit trail with full details of tax computation, applicable rate, HSN/SAC code, and the responsible user — giving you complete confidence during GST assessments, scrutiny notices, and annual audits.",
      image: "/images/lap/lap5.webp",
      points: ["Transaction-level audit trail", "HSN/SAC code validation", "Tax rate change history", "Notice response data export"],
    },
  ];

  const CARD_BG = "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)";

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions/addons" className="text-blue-300/70 hover:text-white transition-colors">Add-Ons</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">India Localization</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-semibold uppercase tracking-widest mb-5">
                <ShieldCheck className="w-3.5 h-3.5" /> GST · TDS · E-Invoice · E-Way Bill
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">NetSuite India Localization</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Full Indian tax compliance inside NetSuite — GST automation, e-invoicing with IRP, TDS/TCS management, e-Way Bills, and GSTR filing reports. Built for Indian businesses running on NetSuite.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
                <Link href="#contact-form" className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl hover:scale-105">
                  Get India Compliance <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/lap/lap5.webp" alt="NetSuite India Localization" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><FileText className="w-5 h-5 text-white" /></div>
                    <div><p className="text-gray-900 text-sm font-bold">India Tax Compliance Suite</p><p className="text-gray-500 text-xs mt-0.5">GST · TDS · E-Invoice · E-Way Bill · GSTR</p></div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8 }} className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><Building2 className="w-5 h-5 text-white" /></div>
                  <div><p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">Made for India · Built for NetSuite</p><p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">GST · GSTN · IRP · NIC · Income Tax</p></div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* STATS */}
          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-white/15 pt-5 sm:pt-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3"><div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors"><s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" /></div></div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1"><Counter value={s.value} /><span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span></div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* STICKY NAV */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto py-4">
            {[["What is it?", "#what-is"], ["Capabilities", "#modules"], ["Benefits", "#benefits"], ["Pricing", "#pricing"], ["FAQ", "#faq"]].map(([label, href]) => (
              <a key={href} href={href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* WHAT IS */}
      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex items-center justify-center rounded-2xl p-4 mt-15" style={{ minHeight: 340 }}>
              <Image src="/images/netsuiteimages/solutions/NetsuiteSRP.webp" alt="NetSuite India Localization" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6 mt-15">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">Full Indian Tax Compliance — Inside NetSuite.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">The NetSuite India Localization Add-On extends NetSuite ERP with complete Indian statutory compliance — GST computation, e-invoicing with IRP integration, TDS and TCS automation, e-Way Bill generation, and GSTR filing reports — all running natively inside your NetSuite account.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Whether you're a domestic Indian company, a subsidiary of a multinational, or an exporter, our India Localization solution ensures every transaction is GST-correct, audit-ready, and compliant with the latest GSTN and Income Tax regulations.</p>
              <div className="grid sm:grid-cols-2 gap-3 pt-2">
                {["Mandatory e-invoicing (IRP)", "GST registered multi-state", "TDS/TCS depletion cycles", "GSTR-1, 3B, 9 filing", "E-Way Bill generation", "RCM & ITC management"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-[15px] text-gray-700"><Check className="w-4 h-4 text-blue-600 shrink-0" />{feat}</div>
                ))}
              </div>
              <div className="pt-4">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}>
                  Get India Localization <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight size={17} /></motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MODULES GRID */}
      <section id="modules" className="py-16 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-5xl font-medium text-gray-900 text-center">India Compliance Capabilities</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-gray-600 text-lg max-w-2xl text-center">12 compliance modules covering GST, TDS, TCS, e-invoicing, and statutory reporting</motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, i) => (
              <Link key={i} href="#contact-form" className="block">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.06 }} whileHover={{ y: -10, transition: { duration: 0.3 } }} className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer" style={{ minHeight: 340 }}>
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom,transparent 0%,rgba(${mod.rgb},0.4) 70%,rgba(${mod.rgb},1) 100%)` }} />
                  </div>
                  <div className="flex-1 p-5 pb-6 flex flex-col relative" style={{ backgroundColor: `rgb(${mod.rgb})` }}>
                    <h4 className="text-white font-bold text-lg mb-2">{mod.title}</h4>
                    <p className="text-white/90 text-sm leading-snug line-clamp-3">{mod.description}</p>
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase text-[10px] px-3 py-1.5 rounded-full shadow-md">Explore <ArrowRight size={10} /></span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36" style={{ background: CARD_BG }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle,rgba(37,99,235,0.25) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Why Businesses Choose Our India Localization</h3>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center">
              {benefits.map((item, index) => (
                <button key={index} onClick={() => setActiveBenefit(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-blue-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 ? <FileText size={20} /> : index === 1 ? <ShieldCheck size={20} /> : index === 2 ? <Receipt size={20} /> : index === 3 ? <Layers size={20} /> : index === 4 ? <Globe size={20} /> : <BarChart3 size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">{item.points.map((pt, pi) => (<li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}</li>))}</ul>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-12 bg-gray-50 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d1a' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-blue-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Is India Localization Priced?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">NetSuite India Localization is available as a monthly or annual SuiteApp subscription — Standard for single-entity GST compliance, Professional for multi-GSTIN and e-invoicing, and Enterprise for large-scale operations with multiple subsidiaries, custom statutory reports, and dedicated compliance support. Pricing is per NetSuite environment (not per user). Contact our team for a tailored quote based on your transaction volume, number of GSTINs, and compliance scope.</p>
                <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-blue-400 hover:text-white transition-all shadow-md">
                  Get a Custom Quote <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#001022]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#002040]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#003060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/people6_11zon.webp" alt="India Localization Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite India Localization — GST, e-invoicing, TDS, e-Way Bills, and compliance timelines."
        customFaqs={[
          { q: "Does NetSuite support GST natively?", a: "NetSuite has basic tax capabilities, but Indian GST requires specific localization for CGST/SGST/IGST computation, HSN/SAC codes, RCM, ITC registers, and GSTR reports. Our India Localization Add-On extends NetSuite with all these capabilities natively, without any third-party middleware." },
          { q: "Is e-invoicing mandatory for our business?", a: "E-invoicing is mandatory for GST-registered businesses with aggregate turnover above ₹5 crore (as of 2024). Our solution automatically determines which transactions require e-invoicing, generates the IRP-compliant JSON, submits to the Invoice Registration Portal, and embeds the IRN and QR code on your NetSuite invoice PDF." },
          { q: "How does TDS automation work inside NetSuite?", a: "When a payment or expense is posted in NetSuite, the India Localization Add-On evaluates whether TDS applies based on the payment category, section, and cumulative threshold. The applicable rate is deducted automatically, a TDS ledger entry is posted, and Form 16/16A certificates and 26Q/27Q filing data are generated at quarter-end." },
          { q: "Can we manage multiple GSTINs across different states?", a: "Yes. The solution supports unlimited GSTIN registrations within a single NetSuite account — each with its own GST ledger, ITC register, GSTR filing schedule, and inter-state transaction logic. Multi-state organisations can manage all compliance from one NetSuite environment." },
          { q: "How are e-Way Bills generated?", a: "E-Way Bills are generated directly from NetSuite delivery orders and invoices via NIC API integration. Transporter details, vehicle number, and consignment value are pulled from the NetSuite transaction, and the e-Way Bill number is embedded back into the shipment record. Bulk generation is supported for high-volume dispatches." },
          { q: "Does the solution handle Input Tax Credit (ITC) reconciliation?", a: "Yes. Our solution maintains a complete ITC register — tracking eligible credits, provisionally claimed credits, and credits to be reversed. Automatic reconciliation with GSTR-2B data identifies mismatches between your purchase register and what's reflected in GSTN records, helping you avoid ITC reversal penalties." },
          { q: "What GSTR returns does the solution generate?", a: "The solution generates filing-ready data for GSTR-1 (outward supplies), GSTR-3B (monthly summary), GSTR-2A/2B (purchase reconciliation), and GSTR-9 (annual return). Reports are generated in the formats prescribed by GSTN, ready for upload to the GST portal or through a GST Suvidha Provider." },
          { q: "How long does implementation take?", a: "A standard India Localization implementation takes 4–6 weeks for a single GSTIN entity — covering GST configuration, HSN/SAC code mapping, IRP credentials setup, TDS section configuration, and user training. Multi-GSTIN or multi-subsidiary implementations typically take 6–10 weeks." },
        ]}
      />

      {/* CTA BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0891b2] shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {PARTICLES.map((p, i) => (<motion.div key={i} className="absolute bg-white rounded-full" style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }} animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />))}
            </div>
            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Stay GST Compliant — <span className="text-cyan-200">Automate India Tax in NetSuite.</span></h2>
                <p className="text-white/80 text-lg md:text-xl">End manual GST calculations, e-invoice filing, and TDS tracking. Our India Localization Add-On keeps your NetSuite environment fully compliant with every GSTN and Income Tax requirement.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all group active:scale-95">
                Get India Compliance <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
