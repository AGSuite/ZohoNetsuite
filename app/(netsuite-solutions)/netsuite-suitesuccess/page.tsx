"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Rocket, Target, Users, TrendingUp, Zap, ArrowRight, Check, ChevronRight, Layers,
  CheckCircle2, Clock, Award, ShieldCheck, BarChart3, LineChart,
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

export default function SuiteSuccessPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Faster Implementation", value: 60, suffix: "%", icon: Rocket },
    { label: "Lower Total Cost", value: 18, suffix: "%", icon: TrendingUp },
    { label: "Pre-Built KPIs", value: 300, suffix: "+", icon: Target },
    { label: "Successful Go-Lives", value: 30, suffix: "k+", icon: CheckCircle2 },
  ];

  const modules = [
    { title: "Build", description: "Establish a solid foundation with core ERP, CRM, and financials tailored to your industry from day one.", image: "/images/modules/dashboard module.webp", color: "#1e6fa8", rgb: "30,111,168" },
    { title: "Engage", description: "Add ecommerce, customer portals, and marketing automation to grow your reach and revenue.", image: "/images/modules/csm modules.webp", color: "#3b5299", rgb: "59,82,153" },
    { title: "Consume", description: "Expand functionality with project management, warehouse, and industry-specific capabilities.", image: "/images/modules/working module.webp", color: "#1a7a55", rgb: "26,122,85" },
    { title: "Optimize", description: "Leverage advanced analytics, AI insights, and business intelligence for smarter decisions.", image: "/images/modules/dashbord module.webp", color: "#7b3a8a", rgb: "123,58,138" },
    { title: "Dominate", description: "Innovate and disrupt your market with a future-proof, continuously updated cloud platform.", image: "/images/modules/any module.webp", color: "#a05a18", rgb: "160,90,24" },
    { title: "Quick Implementation", description: "Pre-configured industry setups drastically reduce time-to-value and implementation risk.", image: "/images/modules/chatt mdoule.webp", color: "#4a3a8a", rgb: "74,58,138" },
    { title: "Role-Based Dashboards", description: "300+ pre-built KPIs and dashboards for every function — from CFO to warehouse manager.", image: "/images/modules/module8.webp", color: "#1a6080", rgb: "26,96,128" },
    { title: "Industry Best Practices", description: "Built-in workflows and processes based on thousands of successful global deployments.", image: "/images/modules/any modules.webp", color: "#6a2575", rgb: "106,37,117" },
    { title: "Continuous Updates", description: "Two automatic platform upgrades per year — with all your customizations preserved.", image: "/images/modules/account modules.webp", color: "#154e8a", rgb: "21,78,138" },
    { title: "Phased Approach", description: "A structured, agile methodology that delivers business value at every single stage.", image: "/images/modules/managging together module.webp", color: "#1a6545", rgb: "26,101,69" },
    { title: "Training & Adoption", description: "Built-in training pathways ensure rapid user adoption from the first day of go-live.", image: "/images/modules/sheet module.webp", color: "#8a2a3a", rgb: "138,42,58" },
    { title: "Ongoing Innovation", description: "NetSuite continuously innovates the SuiteSuccess editions based on real customer feedback and market trends.", image: "/images/modules/mobile module.webp", color: "#0f4e8a", rgb: "15,78,138" },
  ];

  const benefits = [
    { title: "Rapid 100-Day Go-Live", description: "SuiteSuccess enables go-live in as little as 100 days — compared to 12–18 months with traditional ERP — using pre-configured, industry-specific setups that drastically reduce risk.", image: "/images/people/people5_11zon.webp", points: ["100-day go-live methodology", "Industry-preset configurations", "Reduced project risk", "Faster time to value"] },
    { title: "Industry Best Practices Built In", description: "Built on the experience of thousands of global deployments — the KPIs, workflows, and dashboards that matter most in your industry are already configured and ready from day one.", image: "/images/lap/lap2.webp", points: ["300+ pre-built KPIs", "Industry-specific workflows", "Pre-defined chart of accounts", "Role-based dashboards for every function"] },
    { title: "Lower Implementation Cost", description: "Starting from an industry-matched baseline slashes implementation consulting hours, reducing total cost of ownership and avoiding expensive scope creep throughout the project.", image: "/images/lap/lap4.webp", points: ["18% average cost reduction", "Fixed-scope engagement model", "Fewer custom configurations needed", "Predictable implementation budget"] },
    { title: "Scalable Stairway to Growth", description: "Start with what you need now and scale on the same platform — the SuiteSuccess Stairway guides you from Build to Engage to Optimize in clear structured phases.", image: "/images/people/laptopmen2.webp", points: ["Phased adoption model", "No re-implementation ever", "Add modules as you scale", "Continuous platform improvement"] },
    { title: "Built-In Training & Adoption", description: "SuiteSuccess includes role-based training pathways for every functional user, dramatically accelerating adoption and reducing change management challenges from day one.", image: "/images/people/fourteam.webp", points: ["Role-specific training content", "Learning paths for every function", "In-app guidance and walkthroughs", "Rapid user proficiency from go-live"] },
    { title: "Continuous Platform Innovation", description: "Two automatic NetSuite upgrades per year — no re-implementation required, all your customizations are preserved, and you continuously benefit from new capabilities.", image: "/images/lap/lap3.webp", points: ["Bi-annual automatic upgrades", "Customizations preserved", "Early access to new features", "Ongoing access to NetSuite innovations"] },
  ];

  return (
    <div className="min-h-screen selection:bg-indigo-900 selection:text-white bg-white">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#080414] via-[#0d0928] to-[#160840]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite SuiteSuccess</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  NetSuite SuiteSuccess
                </span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Zero to cloud in 100 days. A proven, industry-engineered methodology that delivers NetSuite with best practices built right in — faster, cheaper, and with far less risk.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Start Your Journey
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
                  <Image src="/images/people/fourteam.webp" alt="NetSuite SuiteSuccess" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">Fastest Path to Cloud ERP</p>
                      <p className="text-gray-500 text-xs mt-0.5">100-Day Go-Live · Industry KPIs · Zero Re-Implementation · Lower Cost</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite SuiteSuccess</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Build · Engage · Consume · Optimize · Dominate</p>
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
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[{ label: "What is NetSuite SuiteSuccess?", href: "#what-is" }, { label: "Modules", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Services", href: "#services" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* What is */}
      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
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
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10 border-4 border-blue-100">
                  <Image
                    src="/images/Dashboard/suitesuccess 2 dashboard.jpg"
                    alt="NetSuite SuiteSuccess Solution Dashboard"
                    fill
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
              className="flex flex-col justify-center space-y-6 py-6"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                  NetSuite SuiteSuccess: Accelerated Cloud ERP Implementation for Faster Time-to-Value
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-base text-gray-600 leading-relaxed">
                  NetSuite SuiteSuccess is a purpose-built industry cloud solution designed for rapid deployment. As a leading NetSuite SuiteSuccess partner, we provide pre-configured workflows, role-based dashboards, and industry KPIs that allow you to go live in as little as 100 days.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  By leveraging thousands of successful global deployments, SuiteSuccess eliminates implementation risk and ensures your business follows industry best practices from day one. Scale your operations on a unified platform that evolves with your growth strategy.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: '#ffffff' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#1e3a8a';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 25px -5px rgba(30, 58, 138, 0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Explore SuiteSuccess</span>
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

      {/* Modules Grid */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">The Stairway to Success</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">
            A proven, phased path from implementation to complete business value — built on thousands of successful deployments
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
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Key Business Benefits of NetSuite SuiteSuccess</h2>
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
                  className={`group w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-blue-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <Rocket size={20} />}{index === 1 && <BarChart3 size={20} />}{index === 2 && <TrendingUp size={20} />}
                      {index === 3 && <Layers size={20} />}{index === 4 && <Users size={20} />}{index >= 5 && <Zap size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}</li>
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
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d1a' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-blue-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does NetSuite SuiteSuccess Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  SuiteSuccess editions are included within NetSuite subscription pricing — there is no additional fee for the SuiteSuccess methodology, pre-built KPIs, or industry configurations. Pricing is based on the specific SuiteSuccess edition, the number of users, and any additional modules you activate. Speak to our team for a tailored investment analysis.
                </p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-blue-400 hover:text-white transition-all duration-200 shadow-md">
                    Talk to a SuiteSuccess Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#1a0a3a]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#2d1060]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#3d1580]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl1.webp" alt="SuiteSuccess Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite SuiteSuccess — fast implementation, industry editions, pre-built KPIs, and go-live timelines."
        customFaqs={[
          { q: "What is NetSuite SuiteSuccess?", a: "SuiteSuccess is Oracle NetSuite's pre-configured implementation methodology and industry-edition programme. It bundles the core NetSuite ERP with industry-specific best practices, pre-built dashboards, workflows, KPIs, and a structured phased go-live approach — dramatically reducing implementation time and risk for businesses in Manufacturing, Retail, Professional Services, Software, and 10+ other sectors." },
          { q: "How fast can we go live with SuiteSuccess?", a: "SuiteSuccess implementations typically go live in 60 to 100 days for standard configurations — compared to 6 to 18 months for traditional ERP implementations. This speed is achieved through industry-specific pre-configuration, fixed-scope foundation phases, and AGSuite's certified delivery methodology." },
          { q: "Which industries does SuiteSuccess support?", a: "NetSuite offers SuiteSuccess industry editions for Software/SaaS, Manufacturing, Wholesale Distribution, Professional Services, Retail, Food & Beverage, Nonprofit, Healthcare, Financial Services, Advertising/Media, and Apparel. Each edition comes with pre-configured workflows, chart of accounts, and role-based dashboards specific to that industry." },
          { q: "What are the five stages of SuiteSuccess?", a: "SuiteSuccess follows a Build-Engage-Consume-Optimize-Dominate framework. Build establishes the financial and ERP foundation. Engage adds CRM and ecommerce. Consume expands with project management, WMS, and industry capabilities. Optimize leverages BI and AI. Dominate unlocks continuous innovation with each platform upgrade." },
          { q: "How many pre-built KPIs and dashboards does SuiteSuccess include?", a: "SuiteSuccess includes 300+ pre-built KPIs and role-based dashboards covering every business function — CFO cash flow dashboards, sales pipeline views, operations scoreboards, and HR analytics. All dashboards are configured for your industry from day one, eliminating months of BI configuration." },
          { q: "Can we customise SuiteSuccess for our specific business needs?", a: "Yes. SuiteSuccess provides the foundation, but every configuration, workflow, custom field, and report can be tailored to your specific processes. AGSuite's implementation team works within the SuiteSuccess framework while configuring NetSuite to your exact requirements." },
          { q: "How does SuiteSuccess handle platform upgrades?", a: "NetSuite releases two major platform upgrades per year. SuiteSuccess is designed so all customisations, workflows, and configurations are carried forward automatically during upgrades — eliminating the upgrade freeze and regression testing overhead typical of on-premise ERP systems." },
          { q: "What ongoing support does AGSuite provide for SuiteSuccess customers?", a: "AGSuite offers post-go-live managed services including quarterly health checks, user training, process optimisation workshops, new module implementations, report and dashboard development, and a dedicated support desk — ensuring your SuiteSuccess environment keeps pace with your business as it grows." },
        ]}
      />

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0891b2] shadow-2xl">
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
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Go Live with NetSuite in 100 Days — <span className="text-cyan-200">Start Today.</span></h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">Join thousands of businesses that chose SuiteSuccess for faster, lower-risk ERP implementations with industry best practices built right in.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95">
                Request a NetSuite SuiteSuccess Demo <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
