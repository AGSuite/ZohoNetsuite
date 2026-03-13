"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Package, Zap, Globe, ArrowRight, Check, ChevronRight, BarChart3, ShieldCheck,
  DollarSign, CheckCircle2, Layers, Database, Star, Code, HeartHandshake,
  Users, TrendingUp, IndianRupee, WifiOff, ShoppingBag, ShoppingCart
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) spring.set(value); else spring.set(0); }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function AddonsPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    { label: "Native SuiteApps", value: 3, suffix: "+", icon: Package },
    { label: "Connectors Available", value: 3, suffix: "+", icon: Globe },
    { label: "Integration Accuracy", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Avg Time Saved", value: 40, suffix: "hrs/mo", icon: Zap },
  ];

  // All Add-Ons & Connectors with full detail
  const addons = [
    {
      category: "Native SuiteApp",
      title: "India Localization",
      subtitle: "GST-Ready Compliance for Indian Businesses",
      description: "Handle the full complexity of Indian taxation natively inside NetSuite. Our certified India Localization suite automates GST, TDS, e-invoicing with IRP integration, E-Way bill generation, and statutory reporting — keeping your business compliant and audit-ready at all times.",
      highlights: [
        "Automated GST & GSTR filings",
        "Real-time IRP e-invoicing (IRN + QR)",
        "TDS/TCS with certificate generation",
        "Multi-GSTIN & multi-state support",
      ],
      link: "/netsuite/solutions/addons/india-localization",
      image: "/images/people/threeteam.webp",
      icon: IndianRupee,
      tag: "Compliance",
      color: "blue",
    },
    {
      category: "Native SuiteApp",
      title: "Smart Commission",
      subtitle: "Automated Sales Commission Management",
      description: "Eliminate spreadsheets and manual commission calculations forever. Smart Commission automates multi-tier commission plans, quota tracking, clawback rules, manager approvals, and payroll export — all running 100% inside your NetSuite account with real-time visibility for reps and managers.",
      highlights: [
        "Multi-tier commission plan automation",
        "Quota tracking & attainment dashboards",
        "Clawback & adjustment rules",
        "Payroll export & manager approval workflow",
      ],
      link: "/netsuite/solutions/addons/smart-commission",
      image: "/images/people/laptopmen2.webp",
      icon: DollarSign,
      tag: "Revenue",
      color: "blue",
    },
    {
      category: "Native SuiteApp",
      title: "Data Backup & Recovery",
      subtitle: "Enterprise-Grade NetSuite Data Protection",
      description: "Protect your critical NetSuite data with automated, encrypted, off-site backups. Our Data Backup solution provides granular point-in-time record recovery, SuiteScript backup, and compliance-ready audit trails — so your data is always safe and recoverable no matter what happens.",
      highlights: [
        "Automated daily off-site backups",
        "AES-256 encrypted storage",
        "Point-in-time granular record recovery",
        "SuiteScript & configuration backup",
      ],
      link: "/netsuite/solutions/addons/data-backup",
      image: "/images/lap/lap4.webp",
      icon: ShieldCheck,
      tag: "Security",
      color: "blue",
    },
    {
      category: "E-Commerce Connector",
      title: "Amazon Connector",
      subtitle: "NetSuite ↔ Amazon Full Sync",
      description: "Eliminate manual Amazon order management with a bi-directional connector that syncs FBA and FBM orders, inventory, settlements, customers, and shipment tracking across all Amazon marketplaces directly into NetSuite — fully automated, with no middleware required.",
      highlights: [
        "FBA & FBM order sync",
        "Real-time inventory level updates",
        "Settlement reconciliation",
        "Multi-marketplace support",
      ],
      link: "/netsuite/solutions/addons/connectors/amazon",
      image: "/images/lap/lap2.webp",
      icon: ShoppingBag,
      tag: "Connector",
      color: "blue",
    },
    {
      category: "E-Commerce Connector",
      title: "Shopify Connector",
      subtitle: "NetSuite ↔ Shopify Bi-Directional Sync",
      description: "Connect your Shopify store and NetSuite ERP with a powerful bi-directional connector. Sync orders, products, inventory, fulfilments, and refunds in real time — with multi-store, multi-currency, and multi-location inventory support built in.",
      highlights: [
        "Bi-directional order & product sync",
        "Real-time inventory across locations",
        "Multi-store & multi-currency",
        "Refund & fulfilment automation",
      ],
      link: "/netsuite/solutions/addons/connectors/shopify",
      image: "/images/lap/lap1.webp",
      icon: ShoppingCart,
      tag: "Connector",
      color: "blue",
    },
    {
      category: "E-Commerce Connector",
      title: "Magento (Adobe Commerce) Connector",
      subtitle: "NetSuite ↔ Adobe Commerce Full Integration",
      description: "Bridge your Adobe Commerce (Magento) store with NetSuite for a unified B2B and B2C commerce operation. Sync orders, multi-source inventory, customer groups, tier pricing, and configurable products — with enterprise-grade reliability and real-time data flow.",
      highlights: [
        "B2B & B2C order management",
        "Multi-source inventory sync",
        "Tier & customer group pricing",
        "Configurable product sync",
      ],
      link: "/netsuite/solutions/addons/connectors/magento2",
      image: "/images/lap/lap3.webp",
      icon: Layers,
      tag: "Connector",
      color: "blue",
    },
    {
      category: "Custom Integration",
      title: "Custom Connectors & Integrations",
      subtitle: "Connect Any Platform to NetSuite",
      description: "Need a connector for a platform not listed? Our NetSuite-certified integration team builds custom connections for ERP systems, logistics providers, payment gateways, WMS platforms, and any API-enabled service — using NetSuite SuiteTalk, REST APIs, and SuiteScript.",
      highlights: [
        "Custom API & webhook integrations",
        "ERP, WMS & logistics connectors",
        "Payment gateway integrations",
        "SuiteTalk & REST API expertise",
      ],
      link: "/netsuite/contact",
      image: "/images/people/fourteam.webp",
      icon: Code,
      tag: "Custom",
      color: "blue",
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">NetSuite Add-Ons</span>
          </motion.nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">NetSuite Add-Ons & Connectors</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Extend NetSuite with purpose-built automation — commission management, data protection, and marketplace integrations that run natively inside your NetSuite account.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#addons" className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl hover:scale-105">
                  Explore All Add-Ons <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/people/fourteam.webp" alt="NetSuite Add-Ons" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><Layers className="w-5 h-5 text-white" /></div>
                    <div><p className="text-gray-900 text-sm font-bold">NetSuite Add-Ons & Connectors</p><p className="text-gray-500 text-xs mt-0.5">Commission · Backup · Amazon · Shopify · Magento</p></div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8 }} className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><Database className="w-5 h-5 text-white" /></div>
                  <div><p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">Native NetSuite Extensions</p><p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">SuiteCloud · No Middleware · Certified</p></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
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

      {/* ─────────────── INTRO ─────────────── */}
      <section className="pt-10 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex items-center justify-center rounded-2xl" style={{ minHeight: 340 }}>
              <Image src="/images/netsuiteimages/solutions/NetsuiteSRP.webp" alt="NetSuite Add-Ons" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">Supercharge NetSuite with Purpose-Built Add-Ons.</h3>
              <p className="text-lg text-gray-600 leading-relaxed">AGSuite's NetSuite Add-Ons and Connectors extend your NetSuite ERP with automation for the capabilities NetSuite doesn't include out of the box — commission management, disaster recovery, and multi-channel commerce integration.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Every Add-On is built as a native SuiteApp — running inside your NetSuite account with no middleware, no data lag, and no separate login required.</p>
              <div className="pt-4">
                <Link href="#addons" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}>
                  See All Add-Ons <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight size={17} /></motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── ALL ADD-ONS — ALTERNATING ROWS ─────────────── */}
      <section id="addons" className="py-16 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Add-Ons Portfolio</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-blue-600 to-black">All Add-Ons &amp; Connectors</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Native NetSuite extensions built for commissions, data protection, Indian compliance, and multi-channel commerce.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {addons.map((addon, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-16 ${index < addons.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  {/* IMAGE SIDE */}
                  <div className={`relative ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md">
                      <Image src={addon.image} alt={addon.title} fill className="object-cover" />
                    </div>
                  </div>

                  {/* TEXT SIDE */}
                  <div className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <h3 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black via-[#1e3a8a] to-blue-600 leading-tight mb-3">
                      {addon.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-5 line-clamp-4">
                      {addon.description}
                    </p>
                    <Link
                      href={addon.link}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                      style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; (e.currentTarget as HTMLAnchorElement).style.color = '#1e3a8a'; (e.currentTarget as HTMLAnchorElement).style.border = '1.5px solid #1e3a8a'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg,#1e3a8a,#2563eb)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.border = 'none'; }}
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── PRICING ─────────────── */}
      <section id="pricing" className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d1a' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-blue-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Are Add-Ons Priced?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">All AGSuite Add-Ons and Connectors are priced as monthly or annual SuiteApp subscriptions — with tiers based on usage volume, number of users, or connected stores. There are no per-transaction fees. Because every Add-On runs natively inside NetSuite, your existing NetSuite subscription provides the data foundation. Contact our team for a personalised quote.</p>
                <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-blue-400 hover:text-white transition-all shadow-md">
                  Get a Custom Quote <ArrowRight size={16} />
                </Link>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#001022]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#002040]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#003060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/people4.webp" alt="Add-Ons Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Common questions about NetSuite Add-Ons and Connectors — what they do, how they're priced, and how quickly you can go live."
        customFaqs={[
          { q: "Do the Add-Ons require any external middleware or separate login?", a: "No. All AGSuite Add-Ons are built as native NetSuite SuiteApps and run entirely inside your existing NetSuite account. There is no external system to log into, no middleware to manage, and no API polling delay — everything reads and writes directly from your live NetSuite data." },
          { q: "Can I use multiple Add-Ons together on the same NetSuite account?", a: "Yes. All Add-Ons are designed to coexist on the same NetSuite account and are compatible with each other. For example, you can run Smart Commission, Data Backup, and the Shopify Connector simultaneously with no conflicts." },
          { q: "Are the Add-Ons compatible with all NetSuite editions?", a: "Yes. All Add-Ons support NetSuite OneWorld (multi-subsidiary) and single-entity accounts. They are compatible with NetSuite SuiteSuccess industry editions and work with all standard and custom NetSuite modules." },
          { q: "What is included in the implementation?", a: "Every Add-On implementation includes full configuration by our NetSuite-certified team, integration testing, UAT support, and end-user training. You also receive dedicated project management and a structured go-live plan to minimize disruption." },
          { q: "Is ongoing support included after go-live?", a: "Yes. All Add-Ons include access to our NetSuite support team post-go-live for troubleshooting and questions. Professional and Enterprise plans include priority SLA, proactive monitoring, and quarterly optimization reviews." },
          { q: "How are Add-Ons priced?", a: "All Add-Ons are sold as monthly or annual SuiteApp subscriptions. Pricing is per-instance (not per-user) and is based on usage volume or store count depending on the product. Contact our team for a custom quote based on your requirements." },
          { q: "Can AGSuite build a custom connector for a platform not listed?", a: "Yes. In addition to the standard marketplace connectors (Amazon, Shopify, Magento), our team builds custom NetSuite integrations for ERP systems, logistics providers, payment gateways, WMS platforms, and any API-enabled service." },
          { q: "What is the typical timeline from purchase to go-live?", a: "Most Add-Ons go live within 3–6 weeks of project kickoff depending on complexity. Connector integrations with simple setups can go live in 3–4 weeks; enterprise-grade B2B implementations or multi-entity setups may take 6–8 weeks." },
        ]}
      />

      {/* ─────────────── CTA ─────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0891b2] shadow-2xl">
            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Extend NetSuite — <span className="text-cyan-200">Start with an Add-On Today.</span></h2>
                <p className="text-white/80 text-lg md:text-xl">Let our certified team help you automate commissions, protect your data, and connect your commerce channels — all inside NetSuite.</p>
              </div>
              <Link href="/netsuite/contact" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all group active:scale-95">
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
