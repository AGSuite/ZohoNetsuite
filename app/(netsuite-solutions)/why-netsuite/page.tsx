"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Cloud, Star, Globe, Users, Zap, ArrowRight, Check, ChevronRight, Layers,
  TrendingUp, CheckCircle2, Lock, ShieldCheck, RefreshCw, LineChart, BarChart3,
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

export default function WhyNetsuitePage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Customer Satisfaction", value: 93, suffix: "%", icon: Star },
    { label: "Countries Supported", value: 219, suffix: "+", icon: Globe },
    { label: "Years Cloud ERP", value: 25, suffix: "+", icon: Cloud },
    { label: "Companies Worldwide", value: 43, suffix: "k+", icon: Users },
  ];

  const modules = [
    { title: "Financial Management", description: "Real-time financials with multi-currency, multi-entity, and global reporting built in from day one.", image: "/images/modules/dashboard module.webp", color: "#1e3fa8", rgb: "30,63,168" },
    { title: "ERP & Operations", description: "Unified order management, procurement, manufacturing, and supply chain on one platform.", image: "/images/modules/working module.webp", color: "#3b5299", rgb: "59,82,153" },
    { title: "CRM & Sales", description: "Complete customer management from lead to cash with pipeline visibility and marketing automation.", image: "/images/modules/csm modules.webp", color: "#1a7a55", rgb: "26,122,85" },
    { title: "Ecommerce", description: "B2B and B2C storefronts natively connected to your ERP, inventory, and customer data.", image: "/images/modules/any module.webp", color: "#7b3a8a", rgb: "123,58,138" },
    { title: "Project Management", description: "End-to-end project delivery with resource planning, billing, and profitability tracking.", image: "/images/modules/managging together module.webp", color: "#a05a18", rgb: "160,90,24" },
    { title: "Analytics & BI", description: "Role-based dashboards and ad-hoc reports powered by real-time data across every module.", image: "/images/modules/dashbord module.webp", color: "#4a3a8a", rgb: "74,58,138" },
    { title: "HR & Payroll", description: "Manage your people from hire to retire with payroll, performance, and benefits management.", image: "/images/modules/sheet module.webp", color: "#1a6080", rgb: "26,96,128" },
    { title: "Planning & Budgeting", description: "Collaborative FP&A with rolling forecasts, scenario modeling, and live ERP actuals.", image: "/images/modules/account modules.webp", color: "#6a2575", rgb: "106,37,117" },
    { title: "Warehouse Management", description: "Optimize pick, pack, ship with advanced warehouse management and real-time inventory.", image: "/images/modules/working module.webp", color: "#154e8a", rgb: "21,78,138" },
    { title: "Manufacturing", description: "Demand-driven production planning, shop floor control, and material requirements planning.", image: "/images/modules/any modules.webp", color: "#1a6545", rgb: "26,101,69" },
    { title: "Global Business", description: "Multi-subsidiary management with consolidation, intercompany reporting, and local compliance.", image: "/images/modules/mobile module.webp", color: "#8a2a3a", rgb: "138,42,58" },
    { title: "AI & Automation", description: "Machine learning and AI embedded into every module — predict, automate, and detect smarter.", image: "/images/modules/module8.webp", color: "#0f4e8a", rgb: "15,78,138" },
  ];

  const benefits = [
    { title: "One Unified Platform", description: "Unlike disjointed software stacks, NetSuite unifies every business function — finance, operations, CRM, ecommerce, HR — in a single cloud suite with one source of truth and one login for everyone.", image: "/images/people/threeteam.webp", points: ["No integration overhead", "One login for every function", "Consistent UI across all modules", "Real-time data everywhere, always"] },
    { title: "Cloud-Native Since 1998", description: "NetSuite was born in the cloud in 1998 and has never looked back. There is no on-premise version — it is purpose-built for cloud scale, reliability, and continuous delivery from the ground up.", image: "/images/lap/lap2.webp", points: ["No hardware or servers to manage", "Built for cloud-native scalability", "Automatic bi-annual upgrades", "99.99% uptime on Oracle Cloud Infrastructure"] },
    { title: "Scales With Your Business", description: "NetSuite grows with you — from startup to enterprise — supporting new markets, entities, currencies, and business models without ever requiring a disruptive re-implementation.", image: "/images/lap/lap3.webp", points: ["Add new modules at any time", "Multi-entity and multi-subsidiary", "Multi-currency and multi-language", "Scales from 10 to 10,000+ users"] },
    { title: "Enterprise-Grade Security", description: "Your business data is protected by Oracle Cloud Infrastructure — the world's most secure enterprise cloud — with role-based access, data encryption, and complete audit trails on every action.", image: "/images/lap/lap4.webp", points: ["Oracle Cloud security architecture", "Role-based access control", "Encryption at rest and in transit", "Full audit trail on all changes"] },
    { title: "Industry-Specific Solutions", description: "SuiteSuccess industry editions deliver pre-configured NetSuite for your specific vertical — with the KPIs, workflows, and chart of accounts that your industry lives by, ready from day one.", image: "/images/people/laptopmen2.webp", points: ["30+ industry editions available", "Pre-built KPIs and dashboards", "Industry-specific chart of accounts", "Best-practice workflows built in"] },
    { title: "Largest ERP Partner Ecosystem", description: "With thousands of global implementation partners, SuiteApps in the marketplace, and a vast community of NetSuite professionals, you are never alone on your NetSuite journey.", image: "/images/people/fourteam.webp", points: ["1,000+ SuiteApps in the marketplace", "Global implementation partner network", "SuiteSuccess customer community", "NetSuite Professional Services"] },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#080414] via-[#0d0928] to-[#160840]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-yellow-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Why NetSuite</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-100 to-yellow-400">
                  Why NetSuite?
                </span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-yellow-500 to-blue-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                The world's most trusted cloud ERP — a single, unified platform that runs your entire business across finances, operations, customers, and more — in real time, everywhere.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-yellow-500 hover:border-yellow-400 hover:text-gray-900 transition-all duration-300 shadow-xl hover:scale-105">
                  Discover NetSuite
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/lap/lap6_11zon.webp" alt="Why NetSuite" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #b45309, #f59e0b)' }}>
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">#1 Cloud ERP for 25+ Years</p>
                      <p className="text-gray-500 text-xs mt-0.5">Finance · CRM · Ecommerce · HR · Planning · AI · WMS</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                    <Cloud className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite Cloud ERP Platform</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Unified · Scalable · Secure · Global · AI-Powered</p>
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
                    <div className="p-2 sm:p-3 bg-yellow-700/20 rounded-xl group-hover:bg-yellow-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span>
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
            {[{ label: "Why NetSuite?", href: "#what-is" }, { label: "Suite Overview", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Services", href: "#services" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-yellow-600 to-blue-500">{l.label}</span>
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
                <Image src="/images/Dashboard/NetsuiteDashboard.webp" alt="Why NetSuite Dashboard" width={900} height={600} className="w-full h-auto rounded-xl object-contain border-4 border-blue-200 shadow-2xl shadow-blue-900/20" />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col justify-center space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                The World's #1 Cloud ERP — Built for Every Business.
              </h3>
              <div className="flex items-center gap-5 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 my-2 shadow-sm">
                <div className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-700">77%</div>
                <div className="flex-1">
                  <p className="text-sm md:text-base text-gray-800 font-semibold leading-snug">
                    of companies in the Forbes Cloud 100 list are NetSuite customers.
                  </p>
                </div>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite is the world's most deployed cloud ERP — trusted by over 43,000 organizations across 219 countries. Born in the cloud in 1998, it is the most experienced cloud ERP platform on earth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlike fragmented point solutions, NetSuite brings finance, inventory, CRM, ecommerce, HR, planning, and more into a single platform — giving every team real-time visibility and one source of truth.
              </p>
              <div className="pt-4">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: '#ffffff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = '#1e3a8a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}>
                  <span>Explore NetSuite</span>
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">Everything Your Business Needs</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">
            12 integrated modules covering every business function — all on one cloud platform, all sharing one source of truth
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-yellow-400 to-blue-600" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #0a0614 0%, #130a2e 25%, #1a1040 55%, #0d0820 80%, #08050e 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(250,204,21,0.15) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-yellow-200">The NetSuite Advantage</h3>
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
                  className={`group w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-yellow-500' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-yellow-500' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <Layers size={20} />}{index === 1 && <Cloud size={20} />}{index === 2 && <TrendingUp size={20} />}
                      {index === 3 && <Lock size={20} />}{index === 4 && <BarChart3 size={20} />}{index >= 5 && <Users size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-yellow-500 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-yellow-500 mt-0.5 shrink-0" /> {pt}</li>
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
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#0a0614' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does NetSuite Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite is priced on a modular, per-user subscription model. Your total investment depends on the number of active users, the modules you activate, and any optional add-ons such as planning, advanced manufacturing, or analytics workbench. Because it is cloud-based, there is no hardware, infrastructure, or upgrade cost to factor in. Contact our team for a tailored investment analysis.
                </p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md">
                    Get a Pricing Estimate <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#130a2e]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#1e1060]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#2a1580]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl1.webp" alt="NetSuite Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about why businesses choose NetSuite — cloud ERP benefits, migration from legacy systems, and TCO."
        customFaqs={[
          { q: "What is the typical total cost of ownership (TCO) for NetSuite?", a: "NetSuite's subscription model eliminates the capital expenditure of on-premise ERP. Studies consistently show NetSuite's 5-year TCO is 50-65% lower than SAP or Oracle EBS when accounting for licence, implementation, infrastructure, and ongoing maintenance costs." },
          { q: "How long does a NetSuite implementation take?", a: "Using SuiteSuccess methodology, most NetSuite implementations take between 100 days and 6 months, depending on complexity and modules activated." },
          { q: "Is NetSuite easy to integrate with other business tools?", a: "Yes, NetSuite has an open API and ecosystem (SuiteTalk, SuiteScript) that allows for seamless integration with CRM, Ecommerce, Banking, and other business-critical tools." }
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#1d4ed8] to-[#f59e0b] shadow-2xl">
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
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Join 43,000+ Businesses Running on NetSuite — <span className="text-yellow-300">Start Today.</span></h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">Discover why organizations in 219 countries trust NetSuite as their cloud ERP — and how we can transform your business operations from day one.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-yellow-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95">
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
