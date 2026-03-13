"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Trophy, Users, Globe2, Rocket, Layout, Database, Share2, Code, ShieldCheck,
  HeartHandshake, ArrowRight, CheckCircle2, BarChart3, ShoppingCart, Globe,
  TrendingUp, Package, Layers, DollarSign, BookOpen, Star, ChevronDown, ChevronRight, GraduationCap, Wrench, Settings
} from 'lucide-react';
import ContactFormDesign4 from '../../components/ContactFormDesign4';

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) { spring.set(value); } else { spring.set(0); } }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function NetSuiteSolutionsClient() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    { label: 'Enterprises Served', value: 180, suffix: '+', icon: Trophy },
    { label: 'NetSuite Experts', value: 50, suffix: '+', icon: Users },
    { label: 'Global Roll-outs', value: 50, suffix: '+', icon: Globe2 },
    { label: 'Years Experience', value: 15, suffix: '+', icon: Rocket },
  ];

  // All NetSuite Solutions with full detail
  const solutions = [
    {
      category: "Core ERP",
      title: "Enterprise Resource Planning (ERP)",
      subtitle: "The Foundation of Your Business",
      description: "NetSuite ERP is the world's #1 cloud-based business management solution. Automate core processes — from financials and order management to supply chain and warehousing — and gain real-time visibility across your entire organization in a single unified platform.",
      highlights: [
        "End-to-end financial management",
        "Real-time operational dashboards",
        "Order-to-cash automation",
        "Global multi-subsidiary support",
      ],
      link: "/netsuite/solutions/core-erp/erp",
      image: "/images/netsuiteimages/solutions/NetsuiteERP.webp",
      icon: Database,
      tag: "Most Popular",
    },
    {
      category: "Core ERP",
      title: "NetSuite Accounting Software",
      subtitle: "Intelligent Financial Management",
      description: "Transform your accounting operations with NetSuite's powerful cloud-based accounting software. Automate your general ledger, AR/AP, tax management, and multi-currency financial close — all with built-in compliance and audit trails.",
      highlights: [
        "Automated accounts payable & receivable",
        "Multi-currency & multi-tax compliance",
        "Real-time financial reporting",
        "One-click financial close",
      ],
      link: "/netsuite/solutions/core-erp/accounting",
      image: "/images/netsuiteimages/solutions/netsuiteaccounting.webp",
      icon: DollarSign,
      tag: "Finance",
    },
    {
      category: "Core ERP",
      title: "Global Business Management",
      subtitle: "Scale Without Borders",
      description: "Manage your entire global enterprise from a single platform. NetSuite OneWorld supports multi-subsidiary, multi-currency, and multi-language operations — giving you consolidated visibility and standardised processes across every region.",
      highlights: [
        "Multi-subsidiary consolidation",
        "190+ currency support",
        "Local compliance per country",
        "Real-time intercompany eliminations",
      ],
      link: "/netsuite/solutions/core-erp/global-business",
      image: "/images/netsuiteimages/solutions/NetsuiteGlobal.webp",
      icon: Globe,
      tag: "Global",
    },
    {
      category: "Customer Management",
      title: "NetSuite CRM",
      subtitle: "360° Customer Relationship Management",
      description: "Replace disconnected tools with a single CRM built on top of your ERP. Manage leads, opportunities, cases, and marketing campaigns — all with complete visibility into customer financials, orders, and support history in one place.",
      highlights: [
        "Lead-to-quote-to-cash in one system",
        "Sales force automation",
        "Marketing campaign management",
        "360° customer view with financials",
      ],
      link: "/netsuite/solutions/customer-management/crm",
      image: "/images/netsuiteimages/solutions/NetsuiteCRM.webp",
      icon: Users,
      tag: "CRM",
    },
    {
      category: "Project Management",
      title: "NetSuite SRP",
      subtitle: "Services Resource Planning",
      description: "Improve cash flow and eliminate revenue leakage by completing projects on time and within budget. NetSuite SRP connects project management, resource scheduling, time and expense tracking, and project billing in one seamless cloud solution.",
      highlights: [
        "Project-based billing & revenue recognition",
        "Resource utilization tracking",
        "Real-time project profitability",
        "Integrated time & expense capture",
      ],
      link: "/netsuite/solutions/project-management/netsuite-srp",
      image: "/images/netsuiteimages/solutions/NetsuiteSRP.webp",
      icon: Rocket,
      tag: "Professional Services",
    },
    {
      category: "Project Management",
      title: "NetSuite OpenAir (SuiteProject Pro)",
      subtitle: "Enterprise PSA for Professional Services",
      description: "The leading cloud-based PSA solution for services organizations. OpenAir ensures timely project delivery through enhanced resource utilization, sophisticated project accounting, and revenue forecasting — purpose-built for services-led businesses.",
      highlights: [
        "Advanced resource management",
        "Sophisticated project accounting",
        "Revenue & utilization forecasting",
        "Client portal for collaboration",
      ],
      link: "/netsuite/solutions/project-management/openair",
      image: "/images/lap/lap9_11zon.webp",
      icon: Layers,
      tag: "PSA",
    },
    {
      category: "Analytics",
      title: "NetSuite Business Intelligence",
      subtitle: "Data-Driven Decision Making",
      description: "Transform raw business data into powerful, actionable insights. SuiteAnalytics provides built-in reporting, dashboards, and ad-hoc analysis across every NetSuite module — empowering every team to drive performance with real-time data.",
      highlights: [
        "Pre-built KPI dashboards",
        "Ad-hoc reporting & analysis",
        "Cross-module data exploration",
        "Scheduled automated reports",
      ],
      link: "/netsuite/solutions/analytics/bi",
      image: "/images/lap/lap8_11zon.webp",
      icon: BarChart3,
      tag: "Analytics",
    },
    {
      category: "Analytics",
      title: "NetSuite Analytics Warehouse",
      subtitle: "Enterprise Data Warehousing",
      description: "Unlock the full power of your NetSuite data with the dedicated Analytics Warehouse. Connect NetSuite data with external sources for deep, enterprise-scale analysis — with pre-built connectors to Tableau, Power BI, and leading BI platforms.",
      highlights: [
        "Pre-built data models for NetSuite",
        "Connect external data sources",
        "Power BI & Tableau connectors",
        "Historical trend analysis",
      ],
      link: "/netsuite/solutions/analytics/warehouse",
      image: "/images/lap/lap7_11zon.webp",
      icon: Database,
      tag: "Data Warehouse",
    },
    {
      category: "Analytics",
      title: "NetSuite AI & Machine Learning",
      subtitle: "Intelligent Automation",
      description: "Harness the power of AI built natively into NetSuite. From intelligent forecasting to anomaly detection and process recommendations — NetSuite's AI capabilities help you predict, automate, and optimise across every business function.",
      highlights: [
        "AI-driven cash flow forecasting",
        "Anomaly detection for AP/AR",
        "Intelligent process recommendations",
        "Predictive analytics dashboards",
      ],
      link: "/netsuite/solutions/analytics/ai",
      image: "/images/lap/lap10_11zon.webp",
      icon: Star,
      tag: "AI",
    },
    {
      category: "E-Commerce",
      title: "NetSuite SuiteCommerce",
      subtitle: "Unified Commerce for B2B & B2C",
      description: "Power your entire commerce experience from a single platform. SuiteCommerce unifies your online store with inventory, orders, and financials — providing real-time product availability, personalised shopping, and seamless omnichannel fulfilment.",
      highlights: [
        "B2B & B2C on one platform",
        "Real-time inventory & pricing",
        "Seamless omnichannel fulfilment",
        "Built-in SEO & mobile-first design",
      ],
      link: "/netsuite/solutions/ecommerce/main",
      image: "/images/lap/lap6_11zon.webp",
      icon: ShoppingCart,
      tag: "E-Commerce",
    },
    {
      category: "Planning",
      title: "NetSuite Planning & Budgeting",
      subtitle: "Smarter Financial Planning",
      description: "Ditch spreadsheets and plan with confidence. NetSuite PBCS provides FP&A teams with collaborative budgeting, rolling forecasts, scenario modelling, and driver-based planning — all connected live to your NetSuite actuals.",
      highlights: [
        "Driver-based budgeting & forecasting",
        "Scenario modelling",
        "Collaborative planning workflows",
        "Live connection to actuals",
      ],
      link: "/netsuite/solutions/planning/main",
      image: "/images/lap/lap5.webp",
      icon: TrendingUp,
      tag: "FP&A",
    },
    {
      category: "Specialised",
      title: "NetSuite SuiteSuccess",
      subtitle: "The Complete Cloud Business Suite",
      description: "SuiteSuccess is Oracle NetSuite's industry-optimized implementation methodology. It combines preconfigured ERP, CRM, PSA, Commerce, HR, and BI on a single platform — with built-in leading practices for rapid deployment and measurable business outcomes.",
      highlights: [
        "Pre-configured for your industry",
        "Faster time-to-value",
        "Unified ERP + CRM + BI + HR",
        "Continuous improvement framework",
      ],
      link: "/netsuite/solutions/specialized/suitesuccess",
      image: "/images/lap/lap4.webp",
      icon: Trophy,
      tag: "All-in-One",
    },
    {
      category: "Specialised",
      title: "NetSuite India Localization",
      subtitle: "GST-Ready Cloud ERP",
      description: "Complete compliance for Indian businesses built natively in NetSuite. Manage GST, TDS, e-invoicing, E-Way bills, and statutory reporting — all automated, accurate, and audit-ready within your NetSuite account.",
      highlights: [
        "Automated GST & e-invoicing",
        "TDS & TCS management",
        "Multi-GSTIN support",
        "Statutory report generation",
      ],
      link: "/netsuite/solutions/specialized/india-localization",
      image: "/images/lap/lap3.webp",
      icon: BookOpen,
      tag: "India",
    },
  ];

  const services = [
    { title: "Digital Transformation", description: "Modernize your business for the digital age.", icon: Rocket, href: "/netsuite/services/digital-transformation" },
    { title: "Integration Services", description: "Seamlessly connect your systems.", icon: Layers, href: "/netsuite/services/integration-services" },
    { title: "Training Services", description: "Upskill your team with expert-led training.", icon: GraduationCap, href: "/netsuite/services/training-services" },
    { title: "Low-Code Development", description: "Build apps faster with minimal coding.", icon: Wrench, href: "/netsuite/services/low-code" },
    { title: "Managed Services", description: "End-to-end IT management & support.", icon: Settings, href: "/netsuite/services/managed-services" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ─────────────── HERO SECTION ─────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">NetSuite Solutions</span>
          </motion.nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">Oracle NetSuite Business Solutions</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Comprehensive NetSuite solutions tailored to your unique business needs. From core ERP to specialized add-ons — scale with confidence on the world&apos;s #1 cloud platform.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#solutions" className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl hover:scale-105">
                  Explore All Solutions <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/people/fourteam.webp" alt="Oracle NetSuite Solutions" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><Database className="w-5 h-5 text-white" /></div>
                    <div><p className="text-gray-900 text-sm font-bold">Oracle NetSuite ERP Platform</p><p className="text-gray-500 text-xs mt-0.5">ERP · CRM · Analytics · E-Commerce · Planning</p></div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8 }} className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <div><p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">38,000+ Global Clients</p><p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Trusted · Scalable · Cloud-Native</p></div>
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

      {/* ─────────────── INTRO SECTION ─────────────── */}
      <section className="pt-10 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="flex items-center justify-center rounded-2xl" style={{ minHeight: 340 }}>
              <Image src="/images/lap/group1.webp" alt="Oracle NetSuite Platform" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">The #1 Cloud ERP for Growing Businesses</h3>
              <p className="text-lg text-gray-600 leading-relaxed">Oracle NetSuite is the world&apos;s most deployed cloud Enterprise Resource Planning (ERP) solution. Built from the ground up for the cloud, it provides a single, unified platform to manage every aspect of your business — from financials and CRM to inventory and e-commerce.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Every solution is purpose-built for cloud — running inside your NetSuite account with real-time data, no silos, and unified reporting across every department.</p>
              <div className="pt-4">
                <Link href="/netsuite/solutions/why-netsuite/main" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}>
                  Deep Dive into NetSuite <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight size={17} /></motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────── ALL SOLUTIONS — ALTERNATING ROWS ─────────────── */}
      <section id="solutions" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f4f9ff] via-white to-[#f5f8ff]">
        {/* Decorative Background Orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-100/30 rounded-full blur-[80px] translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Solutions Portfolio</span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-blue-600 to-black">All NetSuite Solutions</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive solutions to power every aspect of your business operations — all on one unified cloud platform.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {solutions.map((solution, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-16 ${index < solutions.length - 1 ? 'border-b border-gray-200' : ''}`}
                >
                  {/* IMAGE SIDE */}
                  <div className={`relative ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  {/* TEXT SIDE */}
                  <div className={`${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <h3 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black via-[#1e3a8a] to-blue-600 leading-tight mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-5 line-clamp-4">
                      {solution.description}
                    </p>
                    <Link
                      href={solution.link}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                      style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; (e.currentTarget as HTMLAnchorElement).style.color = '#1e3a8a'; (e.currentTarget as HTMLAnchorElement).style.border = '1.5px solid #1e3a8a'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg,#1e3a8a,#2563eb)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.border = 'none'; }}
                    >
                      View Details
                      <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── SERVICES SECTION ─────────────── */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">NetSuite Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end services to ensure your NetSuite environment is perfectly aligned with your business needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
            {services.map((service, index) => {
              const cardBgColors = [
                "bg-gradient-to-br from-white to-[#eef0ff]",
                "bg-gradient-to-br from-white to-[#eaf6ff]",
                "bg-gradient-to-br from-white to-[#e8ffef]",
                "bg-gradient-to-br from-white to-[#f9eaff]",
                "bg-gradient-to-br from-white to-[#ffece8]",
                "bg-gradient-to-br from-white to-[#eaf8ff]",
              ];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}>
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    variants={{ initial: { scale: 1 }, hover: { scale: 1.04, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } } }}
                    className={`relative group rounded-2xl p-7 border border-gray-200 transition-all duration-300 h-full shadow-xl hover:shadow-blue-100 ${cardBgColors[index % cardBgColors.length]}`}
                  >
                    <motion.div
                      variants={{ initial: { rotate: 0, y: 0 }, hover: { rotate: 360, y: -6, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } } }}
                      className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5"
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-lg font-bold text-gray-900 leading-tight">{service.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">{service.description}</p>
                    <div className="mt-6 border-t border-gray-300 pt-3">
                      <Link href={service.href} className="text-black hover:text-blue-600 text-sm font-medium transition-all">Learn More →</Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA SECTION ─────────────── */}
      <section className="py-24 overflow-hidden relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
          >
            <Image src="/images/lap/group1.webp" alt="NetSuite Solutions" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Scale your business with the world's #1 Cloud ERP. Ready to get started?
              </h2>
              <div className="flex justify-start">
                <Link href="/netsuite/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
