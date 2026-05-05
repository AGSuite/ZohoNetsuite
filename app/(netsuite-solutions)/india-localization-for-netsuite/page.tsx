"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  FileText, Globe, Zap, ArrowRight, Check, ChevronRight, Layers,
  TrendingUp, CheckCircle2, ShieldCheck, BarChart3, Calculator, IndianRupee,
  Clock, Calendar, Search, Building2, UserCheck, Smartphone, Truck, FileSpreadsheet,
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

export default function IndiaLocalizationPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "GST Compliance Achieved", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Accurate Tax Filings", value: 100, suffix: "%", icon: ShieldCheck },
    { label: "States & UTs Covered", value: 36, suffix: "+", icon: Globe },
  ];

  const modules = [
    { 
      title: "Efficient GST Management", 
      description: "Automates GST compliance through customized configuration of location, vendor, customer, and HSN code details. Handles GSTR1, 2, 3B filings.", 
      image: "/images/modules/dashboard module.webp", 
      color: "#e07820", 
      rgb: "224,120,32" 
    },
    { 
      title: "GST Advanced Features", 
      description: "GSTIN Validation and GSTR 2B Reconciliation within NetSuite to ensure data integrity and accurate tax credits.", 
      image: "/images/modules/mobile module.webp", 
      color: "#1e8a6e", 
      rgb: "30,138,110" 
    },
    { 
      title: "Streamlined TDS Compliance", 
      description: "Streamlines TDS management through customized setup of company, subsidiary and vendor details. Automates TDS calculations per government rules.", 
      image: "/images/modules/account modules.webp", 
      color: "#1a4fa8", 
      rgb: "26,79,168" 
    },
    { 
      title: "TDS Advanced Features", 
      description: "TDS on Vendor PrePayment, TDS Challan, TXT File Generation for eTDS Return, 194Q & 206(1H) compliance.", 
      image: "/images/modules/sheet module.webp", 
      color: "#7b3a8a", 
      rgb: "123,58,138" 
    },
    { 
      title: "Auto TCS Calculation", 
      description: "Automatic tax calculation of TCS based on government rules with automatic GL posting in specific TCS Accounts and Form 27EQ generation.", 
      image: "/images/modules/working module.webp", 
      color: "#8a2a20", 
      rgb: "138,42,32" 
    },
    { 
      title: "E-Invoicing", 
      description: "Integrates NetSuite with E-invoice Portal. IRN and QR Code is generated and received back stored into NetSuite automatically.", 
      image: "/images/modules/dashbord module.webp", 
      color: "#4a3a8a", 
      rgb: "74,58,138" 
    },
    { 
      title: "E-Way Bill", 
      description: "NetSuite Integration with E-Way Bill Portal. EBN Generation, store on the invoice record, and support for B2B, B2C, and Export.", 
      image: "/images/modules/module8.webp", 
      color: "#1a6080", 
      rgb: "26,96,128" 
    },
    { 
      title: "Vendor Statement", 
      description: "Easily generate detailed vendor statements, enabling clear visibility into outstanding balances, transaction history, and payment schedules.", 
      image: "/images/modules/managging together module.webp", 
      color: "#6a2575", 
      rgb: "106,37,117" 
    },
    { 
      title: "MSME Reporting", 
      description: "Access streamlined reporting tailored for MSME compliance, facilitating accurate tracking and timely submissions.", 
      image: "/images/modules/any module.webp", 
      color: "#154e8a", 
      rgb: "21,78,138" 
    },
    { 
      title: "Compliance Calendar and Reminders", 
      description: "Stay compliant effortlessly with an integrated calendar that schedules key deadlines, providing timely reminders.", 
      image: "/images/modules/chatt mdoule.webp", 
      color: "#1a6545", 
      rgb: "26,101,69" 
    },
    { 
      title: "Audit Related Reports", 
      description: "Generate audit-ready reports with ease, ensuring accuracy and completeness in financial documentation.", 
      image: "/images/modules/any modules.webp", 
      color: "#8a5010", 
      rgb: "138,80,16" 
    },
  ];

  const benefits = [
    { 
      title: "Enhanced Compliance", 
      description: "Automated GST, TDS, and TCS calculations ensure adherence to India’s tax regulations, minimizing compliance risks.", 
      image: "/images/lap/lap4.webp", 
      points: ["Automated Tax Calculations", "Regulatory Adherence", "Risk Minimization", "Statutory Updates"] 
    },
    { 
      title: "Streamlined Operations", 
      description: "E-invoicing, e-way bill management, and vendor statements simplify transaction processing and reduce administrative workload.", 
      image: "/images/lap/lap2.webp", 
      points: ["E-Invoicing Automation", "E-Way Bill Sync", "Reduced Admin Workload", "Fast Transaction Processing"] 
    },
    { 
      title: "Accurate Reporting", 
      description: "MSME reporting, audit-ready reports, and advanced tax features provide precise, real-time insights to support business decisions.", 
      image: "/images/people/laptopmen2.webp", 
      points: ["MSME Tracking", "Audit-Ready Docs", "Real-Time Insights", "Advanced Tax Features"] 
    },
    { 
      title: "Automated Reminders", 
      description: "Compliance calendar and timely reminders help your team stay on top of regulatory deadlines without manual tracking.", 
      image: "/images/people/fourteam.webp", 
      points: ["Deadline Scheduling", "Proactive Reminders", "No Manual Tracking", "Zero Missed Filings"] 
    },
    { 
      title: "Seamless Integration", 
      description: "The platform integrates smoothly with NetSuite, allowing your business to achieve efficient operations on a single, unified system.", 
      image: "/images/lap/lap3.webp", 
      points: ["Native NetSuite Sync", "Single Unified System", "Operational Efficiency", "Data Integrity"] 
    },
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
                  Streamlined Tax Management With AGSuite India Localization for NetSuite
                </span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-orange-500 to-amber-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Managing India’s GST, TDS, and regulatory requirements tailored specifically for Indian businesses. Effortlessly integrate with NetSuite to ensure smooth compliance.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-white hover:text-orange-950 hover:border-white transition-all duration-300 shadow-xl shadow-orange-900/20 hover:shadow-orange-600/30 hover:scale-105">
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
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-orange-900/50" style={{ height: 390 }}>
                  <Image src="/images/people/laptopgirl3.webp" alt="India Localization" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-5 sm:pt-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
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
            {[{ label: "What is India Localization?", href: "#what-is" }, { label: "Features", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Challenges", href: "#challenges" }, { label: "FAQ", href: "#faq" }].map(l => (
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
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex items-center justify-center rounded-2xl overflow-hidden" style={{ minHeight: 480 }}>
              <div className="relative w-full h-full">
                <Image src="/images/Dashboard/indian localization 2 dashboard.jpg" alt="India Localization Dashboard" width={900} height={600} className="w-full h-auto rounded-xl object-contain border-4 border-orange-200 shadow-2xl shadow-orange-900/20" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col justify-center space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-orange-500 leading-tight">
                What Is India Localization for NetSuite?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Managing India’s GST, TDS, and other regulatory requirements can be challenging, but AGSuite Technologies provides a comprehensive solution through our India Localization for NetSuite. Tailored specifically for Indian businesses, this cloud-based platform integrates effortlessly with NetSuite to ensure smooth compliance with tax regulations, all while reducing complexity.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                AGSuite’s India Localization for NetSuite equips your business with advanced GST and TDS management capabilities, automatic TCS calculations, seamless e-invoicing and e-way bill functionalities, vendor statement generation, and MSME reporting. The platform also offers a built-in compliance calendar with reminders and audit-ready reports, ensuring that regulatory adherence becomes a streamlined part of your daily operations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Tax Pillars - Alternating Layout with Darker Gradient */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {[
            { 
              title: "GST Management", 
              desc: "Automate GST compliance with built-in rules for GSTR1, GSTR2, and GSTR 3B. Configurable location and HSN-based tax triggers ensure 100% accuracy.", 
              image: "/images/Dashboard/indian localization 2 dashboard.jpg",
              icon: IndianRupee,
              color: "orange"
            },
            { 
              title: "TDS Compliance", 
              desc: "Streamline TDS management with automated calculations for vendors and subsidiaries. Generate TXT files for eTDS returns and handle 194Q & 206(1H) requirements.", 
              image: "/images/Dashboard/indian localization 2 dashboard.jpg",
              icon: ShieldCheck,
              color: "red"
            },
            { 
              title: "E-Invoicing & E-Way Bill", 
              desc: "Native integration with government portals for IRN and QR code generation. Automatically store EBN and IRN details back into NetSuite records.", 
              image: "/images/Dashboard/indian localization 2 dashboard.jpg",
              icon: Zap,
              color: "amber"
            },
          ].map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
              <div className="flex-1 space-y-6">
                <div className={`w-14 h-14 rounded-2xl bg-${item.color}-50 flex items-center justify-center`}>
                  <item.icon className={`w-7 h-7 text-${item.color}-600`} />
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{item.title}</h3>
                <div className={`w-16 h-1 bg-${item.color}-500 rounded-full`} />
                <p className="text-lg text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="pt-4">
                  <Link href="#contact-form" className="group inline-flex items-center gap-2 font-bold text-orange-600 hover:text-orange-700 transition-colors">
                    Explore {item.title} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
              <div className="flex-1 w-full relative">
                <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
                </div>
                <div className={`absolute -bottom-6 -${i % 2 === 1 ? 'left' : 'right'}-6 w-32 h-32 bg-${item.color}-500/10 rounded-full blur-3xl`} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="modules" className="py-24 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">Features</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <div key={index} className="group relative">
                <motion.div 
                  initial={{ opacity: 0, y: 40 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="relative flex flex-col rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl z-10 hover:z-20"
                  style={{ backgroundColor: `rgb(${mod.rgb})` }}
                >
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)` }} />
                  </div>
                  <div className="p-6 flex flex-col flex-1 transition-all duration-500">
                    <h4 className="text-white font-bold text-xl mb-3 tracking-wide">{mod.title}</h4>
                    <div className="relative overflow-hidden transition-all duration-500 max-h-[4.5rem] group-hover:max-h-[500px]">
                      <p className="text-white/90 text-sm leading-relaxed font-medium">
                        {mod.description}
                      </p>
                    </div>
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-md">
                        Learn More <ArrowRight size={12} />
                      </Link>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              </div>
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
            <h2 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-orange-200">
              Benefits
            </h2>
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
                      {index === 0 && <ShieldCheck size={20} />}{index === 1 && <Zap size={20} />}{index === 2 && <BarChart3 size={20} />}
                      {index === 3 && <Clock size={20} />}{index === 4 && <Layers size={20} />}
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

      {/* Challenges Section */}
      <section id="challenges" className="py-24 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium text-gray-900">Addressing Global Challenges</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { 
                title: "Compliance Complexity", 
                desc: "Simplifies compliance by providing a customizable solution tailored to meet specific GST and TDS requirements.", 
                image: "/images/people/laptopgirl3.webp",
                icon: ShieldCheck, 
                color: "orange" 
              },
              { 
                title: "Data Accuracy Risk", 
                desc: "Automates tax calculations and transaction identification, reducing the risk of inaccuracies.", 
                image: "/images/lap/lap4.webp",
                icon: Target, 
                color: "red" 
              },
              { 
                title: "Scalability and Adaptability", 
                desc: "Offers scalability to accommodate changing needs and new GST/TDS regulations without disruption.", 
                image: "/images/people/fourteam.webp",
                icon: TrendingUp, 
                color: "amber" 
              },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all">
                <div className="relative h-48 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#150800' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-orange-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">India Localization Pricing</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  Companies of every size, from pre-revenue startups to fast-growing businesses, have made the move to NetSuite. Looking for a better way to run your business but wondering about the cost?
                  <br /><br />
                  Our localization solution is available via subscription. Your package is tailored to your business scale, number of subsidiaries, and specific compliance modules (GST, TDS, E-Invoicing).
                </p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-orange-400 hover:text-white transition-all duration-200 shadow-md">
                    Talk to a Localization Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#1e0d00]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#2a1500]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#3a1a00]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl.webp" alt="India Localization Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA section - SuiteCommerce Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#f97316] via-[#ea580c] to-[#c2410c] shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div key={i} className="absolute bg-white rounded-full"
                  style={{ width: `${p.w * 5}px`, height: `${p.h * 5}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />
              ))}
            </div>
            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Ready to Simplify Your <span className="text-orange-200">India Compliance?</span></h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">Join thousands of businesses growing their revenue with AGSuite — localization that works as hard as your business.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-orange-800 hover:bg-orange-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95">
                Request a Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite India Localization."
        customFaqs={[
          { q: "How does India Localization for NetSuite simplify GST compliance for businesses?", a: "India Localization for NetSuite automates GST reporting, including GSTR1, GSTR2, and GSTR 3B, and provides configurable GST rules based on factors such as location, customer type, and transaction type." },
          { q: "Can India Localization for NetSuite integrate with existing accounting systems?", a: "Yes, India Localization for NetSuite can be seamlessly integrated with NetSuite, providing businesses with a comprehensive tax management solution." },
          { q: "How does India Localization for NetSuite mitigate the risk of TDS non-compliance?", a: "India Localization for NetSuite automates TDS calculations and reporting, including Income Tax Form 26Q, and provides support for threshold management and PAN rule compliance." },
        ]}
      />

      <ContactFormDesign4 />
    </div>
  );
}

const Target = ({ size, className }: { size?: number, className?: string }) => (
  <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
