"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useSpring, useTransform, useScroll } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Package, Zap, Globe, ArrowRight, Check, ChevronRight, BarChart3, ShieldCheck,
  DollarSign, CheckCircle2, Layers, Database, Star, Code, HeartHandshake,
  Users, TrendingUp, IndianRupee, WifiOff, ShoppingBag, ShoppingCart
} from "lucide-react";
import dynamic from 'next/dynamic';
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";

const ScrollFloat = dynamic(() => import('../components/ScrollFloat'), { ssr: false }) as any;
const RotatingText = dynamic(() => import('../components/RotatingText'), { ssr: false }) as any;

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) spring.set(value); else spring.set(0); }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

type ParticleDatum = { width: number; height: number; top: string; left: string; duration: number; delay: number };

export default function AddonsPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [introParticles, setIntroParticles] = useState<ParticleDatum[]>([]);
  const [sectionStars, setSectionStars] = useState<ParticleDatum[]>([]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Generate particle data client-side only to avoid SSR hydration mismatch
    setIntroParticles(
      Array.from({ length: 20 }, () => ({
        width: Math.random() * 4 + 2,
        height: Math.random() * 4 + 2,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
      }))
    );
    setSectionStars(
      Array.from({ length: 50 }, () => ({
        width: Math.random() * 2 + 1,
        height: Math.random() * 2 + 1,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      }))
    );
  }, []);

  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [rotatingIdx, setRotatingIdx] = useState(0);

  // Per-word accent colours (text · pill-bg · pill-border)
  const wordColors = [
    { text: '#ffffff', bg: '#1e3a8a', border: '#1e40af' },
    { text: '#ffffff', bg: '#1e3a8a', border: '#1e40af' },
    { text: '#ffffff', bg: '#1e3a8a', border: '#1e40af' },
    { text: '#ffffff', bg: '#1e3a8a', border: '#1e40af' },
  ];
  const currentColor = wordColors[rotatingIdx] ?? wordColors[0];

  const stats = [
    { label: "Native SuiteApps", value: 3, suffix: "+", icon: Package },
    { label: "Connectors Available", value: 3, suffix: "+", icon: Globe },
    { label: "Integration Accuracy", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Avg Time Saved", value: 40, suffix: "hrs/mo", icon: Zap },
  ];

  const imageBgGradients = [
    'linear-gradient(135deg, #1e3a8aff, #2563ebff, #1e40af)', // Blue
    'linear-gradient(135deg, #3e8698ff, #2b504fff)', // Teal
    'linear-gradient(135deg, #232222ff, #736f6fff)', // Gray/Dark
    'linear-gradient(135deg, #3f628eff, #37353cff)', // Indigo/Dark
    'linear-gradient(135deg, #eff1c4ff, #d39934ff)', // Gold/Amber
    'linear-gradient(135deg, #3e8698ff, #2b504fff)', // Teal
    'linear-gradient(135deg, #eff1c4ff, #d39934ff)', // Amber
    'linear-gradient(135deg, #35a99dff, #4d58b8ff)', // Indigo/Cyan
    'linear-gradient(135deg, #232222ff, #736f6fff)', // Rose
    'linear-gradient(135deg, #740d94ff, #252a29ff)', // Purple
  ];

  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introScrollProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"]
  });

  const introRadius = useTransform(introScrollProgress, [0, 0.3], ["0px", "48px"]);
  const introMargin = useTransform(introScrollProgress, [0, 0.3], ["0px", "32px"]);
  const introScale = useTransform(introScrollProgress, [0, 0.3], [1, 0.99]);

  // All Add-Ons & Connectors with full detail
  const addons = [
    {
      category: "Native SuiteApp",
      title: "India Localization for NetSuite",
      subtitle: "GST-Ready Compliance for Indian Businesses",
      description: "Handle the full complexity of Indian taxation natively inside NetSuite. Our certified India Localization suite automates GST, TDS, e-invoicing with IRP integration, E-Way bill generation, and statutory reporting — keeping your business compliant and audit-ready at all times.",
      description2: "Built specifically to mirror the latest compliance mandates, it minimizes manual entry overhead and ensures total alignment with Indian tax laws directly from your unified cloud ERP.",
      highlights: [
        "Automated GST & GSTR filings",
        "Real-time IRP e-invoicing (IRN + QR)",
        "TDS/TCS with certificate generation",
        "Multi-GSTIN & multi-state support",
      ],
      link: "/netsuite/solutions/addons/india-localization",
      image: "/images/Dashboard/indian localization 2 dashboard.jpg",
      icon: IndianRupee,
      tag: "Compliance",
      color: "blue",
    },
    {
      category: "Native SuiteApp",
      title: "Smart Commission",
      subtitle: "Automated Sales Commission Management",
      description: "Eliminate spreadsheets and manual commission calculations forever. Smart Commission automates multi-tier commission plans, quota tracking, clawback rules, manager approvals, and payroll export — all running 100% inside your NetSuite account with real-time visibility for reps and managers.",
      description2: "Enhance your sales motivation securely with transparent, error-free automated payout structures that can be tailored precisely to match the unique compensation plans of your global teams.",
      highlights: [
        "Multi-tier commission plan automation",
        "Quota tracking & attainment dashboards",
        "Clawback & adjustment rules",
        "Payroll export & manager approval workflow",
      ],
      link: "/netsuite/solutions/addons/smart-commission",
      image: "/images/Dashboard/smart commision dashboard.jpg",
      icon: DollarSign,
      tag: "Revenue",
      color: "blue",
    },
    {
      category: "Native SuiteApp",
      title: "Data Backup & Recovery",
      subtitle: "Enterprise-Grade NetSuite Data Protection",
      description: "Protect your critical NetSuite data with automated, encrypted, off-site backups. Our Data Backup solution provides granular point-in-time record recovery, SuiteScript backup, and compliance-ready audit trails — so your data is always safe and recoverable no matter what happens.",
      description2: "Maintain complete peace of mind knowing your enterprise financial records are continuously secured against accidental deletion, malicious attacks, or unforeseen system interruptions without sacrificing performance.",
      highlights: [
        "Automated daily off-site backups",
        "AES-256 encrypted storage",
        "Point-in-time granular record recovery",
        "SuiteScript & configuration backup",
      ],
      link: "/netsuite/solutions/addons/data-backup",
      image: "/images/Dashboard/netsuite data backup dashboard.jpg",
      icon: ShieldCheck,
      tag: "Security",
      color: "blue",
    },
    {
      category: "E-Commerce Connector",
      title: "Amazon Connector",
      subtitle: "NetSuite ↔ Amazon Full Sync",
      description: "Eliminate manual Amazon order management with a bi-directional connector that syncs FBA and FBM orders, inventory, settlements, customers, and shipment tracking across all Amazon marketplaces directly into NetSuite — fully automated, with no middleware required.",
      description2: "Streamline your multi-channel retail operations by effortlessly managing massive enterprise order volumes without the burdensome risk of manual data entry errors or missed reconciliation targets.",
      highlights: [
        "FBA & FBM order sync",
        "Real-time inventory level updates",
        "Settlement reconciliation",
        "Multi-marketplace support",
      ],
      link: "/netsuite/solutions/addons/connectors/amazon",
      image: "/images/Dashboard/Amazon netsuite connector dashboard.jpg",
      icon: ShoppingBag,
      tag: "Connector",
      color: "blue",
    },
    {
      category: "E-Commerce Connector",
      title: "Shopify Connector",
      subtitle: "NetSuite ↔ Shopify Bi-Directional Sync",
      description: "Connect your Shopify store and NetSuite ERP with a powerful bi-directional connector. Sync orders, products, inventory, fulfilments, and refunds in real time — with multi-store, multi-currency, and multi-location inventory support built in.",
      description2: "Deliver a flawlessly responsive customer experience by guaranteeing that your front-end web storefront always remains in perfect synchronization with your back-office fulfilment and financial ledgers.",
      highlights: [
        "Bi-directional order & product sync",
        "Real-time inventory across locations",
        "Multi-store & multi-currency",
        "Refund & fulfilment automation",
      ],
      link: "/netsuite/solutions/addons/connectors/shopify",
      image: "/images/Dashboard/shopify connector dashboard.jpg",
      icon: ShoppingCart,
      tag: "Connector",
      color: "blue",
    },
    {
      category: "E-Commerce Connector",
      title: "Magento (Adobe Commerce) Connector",
      subtitle: "NetSuite ↔ Adobe Commerce Full Integration",
      description: "Bridge your Adobe Commerce (Magento) store with NetSuite for a unified B2B and B2C commerce operation. Sync orders, multi-source inventory, customer groups, tier pricing, and configurable products — with enterprise-grade reliability and real-time data flow.",
      description2: "Unify your complex omnichannel growth strategies with a brilliantly robust backend architecture explicitly designed to handle high-frequency transaction throughput flawlessly across modern storefronts.",
      highlights: [
        "B2B & B2C order management",
        "Multi-source inventory sync",
        "Tier & customer group pricing",
        "Configurable product sync",
      ],
      link: "/netsuite/solutions/addons/connectors/magento2",
      image: "/images/Dashboard/Magento Connector Dashboard.jpg",
      icon: Layers,
      tag: "Connector",
      color: "blue",
    },
    {
      category: "Custom Integration",
      title: "Custom Connectors & Integrations",
      subtitle: "Connect Any Platform to NetSuite",
      description: "Need a connector for a platform not listed? Our NetSuite-certified integration team builds custom connections for ERP systems, logistics providers, payment gateways, WMS platforms, and any API-enabled service — using NetSuite SuiteTalk, REST APIs, and SuiteScript.",
      description2: "Unlock true digital agility and transformation by seamlessly linking your entire enterprise technology stack, ensuring smooth data continuity, and eliminating operational friction across all specialized departments.",
      highlights: [
        "Custom API & webhook integrations",
        "ERP, WMS & logistics connectors",
        "Payment gateway integrations",
        "SuiteTalk & REST API expertise",
      ],
      link: "/netsuite/contact",
      image: "/images/Dashboard/netsuite_erp_dashboard_realistic.png",
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
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">NetSuite Add-Ons</span>
          </motion.nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: '500px' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.3]">
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400 mb-2">Experience a smarter<br /> way to manage your{' '}</span>

                {/* Pill card — bg + border animate with each word */}
                <motion.span
                  className="inline-flex items-center align-middle rounded-2xl px-3 py-1 ml-1"
                  style={{
                    background: currentColor.bg,
                    border: `1.5px solid ${currentColor.border}`,
                    color: currentColor.text,
                    transition: 'background 0.5s ease, border-color 0.5s ease',
                  }}
                >
                  <RotatingText
                    texts={['Localization', 'Commission', 'Backup', 'Connectors']}
                    onNext={(idx: number) => setRotatingIdx(idx)}
                    mainClassName="text-2xl sm:text-3xl md:text-4xl font-extrabold"
                    splitBy="characters"
                    staggerDuration={0.03}
                    staggerFrom="first"
                    rotationInterval={2200}
                    transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    style={{ color: '#ffffff' }}
                  />
                </motion.span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Extend NetSuite with purpose-built automation — commission management, data protection, and marketplace integrations that run natively inside your NetSuite account.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#addons" className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                  Explore All Add-Ons <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/netsuiteimages/Netsuiteaddonheroimg.jpeg" alt="NetSuite Add-Ons" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-white/15 pt-8 sm:pt-10">
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

      {/* ─────────────── STICKY NAV ─────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[{ label: "What is NetSuite Add-Ons?", href: "#what-is" }, { label: "Add-Ons", href: "#addons" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─────────────── INTRO ─────────────── */}
      <section id="what-is" ref={introRef} className="pb-20 pt-0 bg-[#000d1a] overflow-hidden relative scroll-mt-36">
        {/* Background Designs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
          {/* Particles - client-side only to avoid SSR mismatch */}
          {introParticles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{ width: p.width, height: p.height, top: p.top, left: p.left }}
              animate={!isMobile ? { y: [0, -30, 0], opacity: [0.1, 0.3, 0.1] } : { opacity: 0.1 }}
              transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}
        </div>

        <motion.div
          style={!isMobile ? {
            borderRadius: introRadius,
            margin: introMargin,
            scale: introScale,
          } : {}}
          className="relative z-10 bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 transition-all duration-500 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16 lg:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, scale: isMobile ? 1 : 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center rounded-2xl"
                style={{ minHeight: 340 }}
              >
                <Image src="/images/netsuiteimages/netsuiteaddonsecondsec.jpeg" alt="NetSuite Add-Ons" width={1400} height={900} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw" className="w-full h-auto rounded-xl object-contain border-4 border-indigo-200 shadow-2xl shadow-indigo-900/20" priority />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                <ScrollFloat
                  containerClassName="text-3xl md:text-4xl lg:text-4xl font-medium leading-[1.25]"
                  fromColor="#111827"
                  toColor="#2563eb"
                >
                  Supercharge NetSuite with         Purpose-Built Add-Ons.
                </ScrollFloat>
                <p className="text-lg text-gray-600 leading-relaxed">AGSuite's NetSuite Add-Ons and Connectors extend your NetSuite ERP with automation for the capabilities NetSuite doesn't include out of the box — commission management, disaster recovery, and multi-channel commerce integration.</p>
                <p className="text-lg text-gray-600 leading-relaxed">Every Add-On is built as a native SuiteApp — running inside your NetSuite account with no middleware, no data lag, and no separate login required.</p>
                <div className="pt-4">
                  <Link href="#addons" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}>
                    See All Add-Ons <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight size={17} /></motion.span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="addons" className="py-24 relative overflow-hidden bg-gradient-to-br from-[#000d1a] via-[#0f0720] to-[#1a0505]">
        {/* Background Designs - Cosmic/Nebula Style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05)_0%,transparent_50%)]" />

          {/* Moving Orbs - disabled on mobile for performance */}
          {!isMobile && (
            <>
              <motion.div
                animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]"
              />
              <motion.div
                animate={{ x: [0, -150, 0], y: [0, 100, 0] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[130px]"
              />
              <motion.div
                animate={{ x: [0, 50, 0], y: [0, -100, 0] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[110px]"
              />
            </>
          )}

          {/* Twinkling Stars - client-side only to avoid SSR mismatch */}
          {sectionStars.map((s, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{ width: s.width, height: s.height, top: s.top, left: s.left }}
              animate={!isMobile ? { opacity: [0.2, 0.8, 0.2], scale: [1, 1.5, 1] } : { opacity: 0.4 }}
              transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
            />
          ))}

          {/* Moving Shooting Stars or Designs */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={`shooting-${i}`}
              className="absolute h-px w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent"
              style={{
                top: `${20 + i * 25}%`,
                left: '-10%',
                rotate: '-25deg',
              }}
              animate={{
                left: ['-10%', '110%'],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 7,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 leading-tight">
              All Add-Ons & Connectors
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Native NetSuite extensions built for commissions, data protection, Indian compliance, and multi-channel commerce.
            </p>
          </motion.div>
        </div>

        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div
            style={!isMobile ? {
              borderRadius: "48px",
              margin: "32px",
            } : { borderRadius: "16px" }}
            className="bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.4)] border border-white/20 overflow-hidden relative"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
              <div className="flex flex-col">
                {addons.map((addon, index) => {
                  const isEven = index % 2 === 0;
                  const currentGradient = imageBgGradients[index % imageBgGradients.length];
                  // Extract a base color for accents
                  const accentColor = currentGradient.split(',')[2].trim().replace(')', '');

                  return (
                    <div
                      key={index}
                      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-16 lg:py-20 relative`}
                    >
                      {/* IMAGE SIDE - Always first on mobile */}
                      <div className={`relative px-4 py-4 lg:px-6 lg:py-6 order-1 ${isEven ? '' : 'lg:order-2'}`}>
                        {/* Background Card */}
                        <motion.div
                          initial={{ opacity: 0, y: isMobile ? 0 : 40, scale: isMobile ? 1 : 0.95 }}
                          whileInView={{ opacity: 0.8, y: 0, scale: 1 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, ease: "easeOut" }}
                          className="absolute inset-2 sm:inset-0 rounded-[2.5rem] shadow-lg"
                          style={{
                            background: currentGradient,
                            zIndex: 0
                          }}
                        />

                        {/* Image Container */}
                        <motion.div
                          initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                          className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl z-10 transform transition-transform group-hover:scale-[1.02]"
                        >
                          <Image
                            src={addon.image}
                            alt={addon.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </motion.div>
                      </div>

                      {/* TEXT SIDE - Always second on mobile */}
                      <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : (isEven ? 40 : -40) }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                        className={`relative z-10 order-2 ${isEven ? '' : 'lg:order-1'}`}
                      >
                        <span
                          className="inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 leading-tight shadow-sm"
                          style={{
                            backgroundColor: `${accentColor}15`,
                            color: accentColor,
                            border: `1px solid ${accentColor}30`
                          }}
                        >
                          {addon.tag}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-gray-600 leading-tight mb-4">
                          {addon.title}
                        </h3>
                        <p className="text-gray-500 text-base leading-relaxed mb-4">
                          {addon.description}
                        </p>
                        <p className="text-gray-500 text-base leading-relaxed mb-7">
                          {addon.description2}
                        </p>
                        <Link
                          href={addon.link}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                          style={{ background: currentGradient }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.1)';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 10px 25px -5px ${accentColor}40`;
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLAnchorElement).style.filter = 'none';
                            (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                          }}
                        >
                          View Details
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
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
      <section className="py-24 overflow-hidden relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
          >
            <Image src="/images/netsuiteimages/background/netsuiteCTA.webp" alt="NetSuite Add-Ons CTA" fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl -ml-32 -mb-32" />

            <div className="relative z-10 text-left max-w-2xl">
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">Extend NetSuite — <span className="text-cyan-200">Start with an <br></br>Add-On Today.</span></h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed">
                Natively automate commissions, secure critical data, and sync your commerce channels inside NetSuite with our certified team.
              </p>
            </div>
            <div className="relative z-10 shrink-0">
              <Link href="/netsuite/contact" className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-5 rounded-2xl shadow-xl transition-all group active:scale-95">
                Let’s Connect! <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}





