"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { ShoppingBag, Package, Truck, Globe, DollarSign, Users, Zap, ArrowRight, Check, ChevronRight, BarChart3, RefreshCw, CheckCircle2, Layers, TrendingUp } from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";
import NSServicesSection from '@/app/netsuite/components/NSServicesSection';

const CTA_PARTICLES = [
  { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 }, { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
  { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 }, { w: 1.7, h: 2.4, top: 62, left: 55, dur: 3.8, delay: 2.1 },
  { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 }, { w: 1.2, h: 1.5, top: 90, left: 85, dur: 4.7, delay: 1.9 },
  { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 }, { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 },
];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) { spring.set(value); } else { spring.set(0); } }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function AmazonConnectorPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Settlement Accuracy", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Orders Processed", value: 1, suffix: "M+", icon: ShoppingBag },
    { label: "Time Saved Monthly", value: 40, suffix: "hrs", icon: Zap },
    { label: "FBA/FBM Sync", value: 100, suffix: "%", icon: Layers },
  ];

  const modules = [
    { title: "FBA Order Sync", description: "Automatic import of Fulfillment by Amazon orders into NetSuite as Sales Orders.", image: "/images/modules/dashboard module.webp", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "FBM Order Sync", description: "Manage Fulfillment by Merchant orders from NetSuite with push-to-Amazon tracking.", image: "/images/modules/dashbord module.webp", color: "#065f46", rgb: "6,95,70" },
    { title: "Settlement Reconciliation", description: "Automated parsing of Amazon Settlement Reports — fees, commissions, refunds posted to NetSuite.", image: "/images/modules/working module.webp", color: "#7c2d12", rgb: "124,45,18" },
    { title: "Inventory Sync", description: "Keep FBM inventory in sync with NetSuite to prevent overselling across all channels.", image: "/images/modules/any module.webp", color: "#4c1d95", rgb: "76,29,149" },
    { title: "Customer Sync", description: "Create or update customer records in NetSuite based on each Amazon order automatically.", image: "/images/modules/any modules.webp", color: "#0c4a6e", rgb: "12,74,110" },
    { title: "Shipment Tracking", description: "Push tracking numbers from NetSuite to Amazon automatically when FBM orders ship.", image: "/images/modules/module8.webp", color: "#713f12", rgb: "113,63,18" },
    { title: "Multi-Marketplace", description: "Connect Amazon US, UK, EU, and JP marketplaces to a single NetSuite account.", image: "/images/modules/sheet module.webp", color: "#134e4a", rgb: "19,78,74" },
    { title: "Multi-Currency", description: "Automatic currency conversion for international marketplace settlements and orders.", image: "/images/modules/csm modules.webp", color: "#831843", rgb: "131,24,67" },
    { title: "Amazon Business (B2B)", description: "Supports Amazon Business orders with B2B customer mapping in NetSuite.", image: "/images/modules/managging together module.webp", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "Refund Processing", description: "Automatic refund and return creation in NetSuite when Amazon processes returns.", image: "/images/modules/account modules.webp", color: "#064e3b", rgb: "6,78,59" },
    { title: "Prime Order Flagging", description: "Flag Prime orders in NetSuite so your warehouse team prioritizes them for shipping.", image: "/images/modules/chatt mdoule.webp", color: "#78350f", rgb: "120,53,15" },
    { title: "FBA Fee Tracking", description: "Capture all FBA storage, referral, and fulfillment fees as expense lines in NetSuite.", image: "/images/modules/mobile module.webp", color: "#3b0764", rgb: "59,7,100" },
  ];

  const benefits = [
    { title: "End Settlement Reconciliation Pain", description: "Amazon Settlement Reports are complex — containing fees, refunds, commissions, and currency conversions. Our connector parses every line and posts clean, consolidated entries into NetSuite automatically.", image: "/images/lap/lap1.webp", points: ["Automated settlement parsing", "Fee line-item separation", "Consolidated GL journal posting", "Bi-weekly settlement auto-import"] },
    { title: "Eliminate Inventory Overselling", description: "When FBM inventory falls out of sync between Amazon and NetSuite, you risk selling items you cannot fulfill. Our real-time inventory sync eliminates that risk completely.", image: "/images/lap/lap3.webp", points: ["Real-time FBM inventory sync", "Buffer stock rules supported", "Multi-warehouse inventory", "Automatic listing suppression"] },
    { title: "Multi-Region in One Account", description: "Connect Amazon US, UK, Germany, Japan, and more to a single NetSuite account — with currency translation, entity separation, and consolidated financial reporting all handled automatically.", image: "/images/people/fourteam.webp", points: ["All major Amazon regions", "Automatic currency conversion", "Separate P&L per marketplace", "Consolidated group reporting"] },
    { title: "FBA & FBM in One Flow", description: "Whether Amazon fulfills the order or your warehouse does, our connector handles both workflows in one integration — with different logic for each order type based on your rules.", image: "/images/people/laptopmen2.webp", points: ["FBA: inventory tracking only", "FBM: full order-to-ship flow", "Mixed fulfillment per SKU", "Automatic routing by order type"] },
    { title: "Amazon Business & B2B Support", description: "Amazon Business orders require customer account mapping, purchase order references, and different tax handling — all of which our connector supports natively without custom development.", image: "/images/lap/lap2.webp", points: ["B2B customer mapping", "PO reference import", "Tax-exempt flagging", "Corporate account creation"] },
    { title: "Faster Month-End Close", description: "With commissions, fees, refunds, and orders all automatically posted to NetSuite as they happen, your finance team's Amazon-related month-end work is dramatically reduced.", image: "/images/lap/lap4.webp", points: ["Always-current Amazon P&L", "No manual settlement imports", "Real-time fee accruals", "Faster reconciliation & close"] },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000f22] to-[#001535]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite Amazon Connector</span>
          </motion.nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">NetSuite Amazon Connector</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Automate your entire Amazon business inside NetSuite — sync FBA and FBM orders, inventory, settlements, and customers without a single manual export.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                  Connect Amazon Now
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center"><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/lap/lap2.webp" alt="Amazon Connector" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                      <ShoppingBag className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">Amazon ↔ NetSuite Integration</p>
                      <p className="text-gray-500 text-xs mt-0.5">FBA · FBM · Settlements · Inventory · Multi-Region</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite Amazon Connector</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">US · UK · EU · JP · Multi-Currency</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* COMMENTED FOR NOW - Hero Stats Metrics */}
          {/* <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="border-t border-white/15 pt-8 sm:pt-10">
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
          </motion.div> */}
        </div>
      </section>

      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[{ label: "What is NetSuite Amazon Connector?", href: "#what-is" }, { label: "Modules", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Services", href: "#services" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden min-h-[420px] lg:min-h-[480px]"
            >
              <div className="relative w-full h-full p-2 lg:p-4">
                <div className="relative w-full h-full min-h-[380px] lg:min-h-[440px] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/15 border-4 border-indigo-100">
                  <Image
                    src="/images/Dashboard/Amazon netsuite connector dashboard.jpg"
                    alt="Amazon Connector Dashboard"
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
              className="flex flex-col justify-between py-6 h-full space-y-6"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                Run Your Entire Amazon Business Inside NetSuite.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">The NetSuite Amazon Connector eliminates the manual work of running an Amazon business — syncing orders, inventory, customers, and settlement reports directly into NetSuite without any manual exports or imports.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Whether you sell via FBA, FBM, or a mix of both, across one marketplace or ten, our connector handles every scenario with proven, production-tested logic.</p>
              <div className="pt-4">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: '#ffffff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = '#1e3a8a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}>
                  <span>Explore Amazon Connector</span>
                  <motion.span className="flex items-center" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}><ArrowRight size={17} strokeWidth={2.5} /></motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">Amazon Integration Capabilities</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">12 sync capabilities that automate every data flow between Amazon and NetSuite</motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }} whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white" style={{ minHeight: 340 }}>
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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

      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Why Amazon Sellers Choose Our Connector</h3>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
                      {index === 0 && <DollarSign size={20} />}{index === 1 && <Package size={20} />}{index === 2 && <Globe size={20} />}
                      {index === 3 && <Truck size={20} />}{index === 4 && <Users size={20} />}{index >= 5 && <BarChart3 size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (<li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}</li>))}
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

      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d1a' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-blue-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does the Amazon Connector Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">The NetSuite Amazon Connector is priced on a tier-based monthly or annual subscription — Starter for single-marketplace sellers, Growth for multi-region with up to 3 marketplaces, and Enterprise for unlimited marketplaces and high-volume API. All plans include full FBA and FBM support, settlement reconciliation, and standard mappings. Contact our team for a tailored quote based on your order volume.</p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-blue-400 hover:text-white transition-all duration-200 shadow-md">
                    Talk to an Integration Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#001022]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#002040]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#003060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/threeteam.webp" alt="Amazon Connector Pricing" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about the NetSuite Amazon Connector — FBA, FBM, settlement reconciliation, and multi-marketplace sync."
        customFaqs={[
          { q: "Does the connector support both FBA and FBM orders?", a: "Yes. The connector handles both Fulfillment by Amazon (FBA) and Fulfillment by Merchant (FBM) in a single integration — with different processing logic for each order type. FBA orders track financials and settlements; FBM orders trigger the full order-to-ship flow in NetSuite." },
          { q: "How does Amazon Settlement reconciliation work?", a: "Amazon Settlement Reports are automatically downloaded, parsed, and posted into NetSuite as consolidated journal entries. Each settlement includes FBA fees, referral fees, refunds, and currency adjustments — all separated into the correct NetSuite accounts without manual work." },
          { q: "Which Amazon marketplaces are supported?", a: "We support Amazon US, UK, Germany, France, Italy, Spain, Canada, Japan, Australia, UAE, and more. Each marketplace can be connected as a separate entity or consolidated, with automatic currency conversion per marketplace." },
          { q: "How does inventory sync work for FBM sellers?", a: "FBM inventory in NetSuite is pushed to Amazon in real time whenever stock levels change. You can configure buffer stock rules to reserve safety stock and prevent overselling. Inventory sync also supports multi-warehouse NetSuite setups." },
          { q: "Does it support Amazon Business (B2B) orders?", a: "Yes. Amazon Business orders are handled with B2B-specific logic — purchase order references imported to NetSuite, corporate account mapping, tax-exempt flagging, and separate B2B pricing where applicable." },
          { q: "What happens when a customer returns an item on Amazon?", a: "When Amazon processes a return or refund, the connector automatically creates the corresponding return authorization and credit memo in NetSuite, reverses inventory (for FBM), and reconciles the refund amount against the original settlement." },
          { q: "Is there a transaction volume limit?", a: "No. Our Enterprise tier supports unlimited order and settlement transaction volumes. High-volume peak season (Prime Day, Black Friday) traffic is handled automatically with batch processing and retry logic." },
          { q: "How long does the Amazon Connector setup take?", a: "Standard single-marketplace setups take 3–5 weeks including Amazon SP-API connection, NetSuite field mapping, settlement reconciliation testing, and user training. Multi-marketplace Enterprise setups may take 6–8 weeks." },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-950">
            <div className="absolute inset-0 z-0">
              <Image src="/images/netsuiteimages/background/netsuiteCTA.webp" alt="CTA Background Image" fill className="object-cover" sizes="(max-width: 1280px) 100vw, 1280px" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
            </div>

            <div className="relative z-20 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">Scale on Amazon with NetSuite — <span className="text-cyan-200">Start Today.</span></h2>
                <p className="text-white/80 text-base md:text-lg">Join Amazon sellers using our connector to automate FBA/FBM orders, eliminate settlement reconciliation work, and grow across global marketplaces.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all group active:scale-95">
                Connect Amazon <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
