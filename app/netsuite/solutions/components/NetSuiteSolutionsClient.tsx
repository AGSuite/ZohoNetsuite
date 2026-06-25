"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Trophy, Users, Globe2, Rocket, Briefcase, Layout, Database, Share2, Code, ShieldCheck,
  HeartHandshake, ArrowRight, CheckCircle2, BarChart3, ShoppingCart, Globe,
  TrendingUp, Package, Layers, DollarSign, BookOpen, Star, ChevronDown, ChevronRight, GraduationCap, Wrench, Settings, Building2, Target
} from 'lucide-react';
import dynamic from 'next/dynamic';
import FooterContactForm from '@/app/components/shared/FooterContactForm';

const ScrollFloat = dynamic(() => import('./ScrollFloat'), { ssr: false }) as any;
const RotatingText = dynamic(() => import('./RotatingText'), { ssr: false }) as any;

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) { spring.set(value); } else { spring.set(0); } }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

type ParticleDatum = { width: number; height: number; top: string; left: string; duration: number; delay: number };

export default function NetSuiteSolutionsClient() {
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
    { label: "Projects Completed", value: 700, suffix: "+", icon: Briefcase },
    { label: "Global Customers", value: 250, suffix: "+", icon: Building2 },
    { label: "Industry Expertise", value: 15, suffix: "+", icon: Target },
    { label: "Customer Retention", value: 84, suffix: "%", icon: HeartHandshake },
    { label: "Years Experience", value: 15, suffix: "+", icon: Rocket },
    { label: "Countries Serving", value: 10, suffix: "+", icon: Globe2 },
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

  const solutionsRef = useRef<HTMLDivElement>(null);

  const solutions = [
    {
      category: "Core ERP",
      title: "NetSuite Enterprise Resource Planning (ERP)",
      subtitle: "The Foundation of Your Business",
      passage1: "NetSuite ERP is the world's #1 cloud-based business management solution, trusted by over 43,000 organisations across 219 countries. It unifies your entire business — financials, inventory, order management, manufacturing, HR, and supply chain — onto a single real-time platform, eliminating data silos and manual reconciliation forever.",
      passage2: "Whether you're a fast-growing startup or a global enterprise, NetSuite ERP scales with you, delivering the visibility and control you need to make faster, smarter decisions at every stage. By centralising your operations in the cloud, you can reduce IT costs, improve collaborative workflows, and focus on innovation rather than infrastructure.",
      link: "/netsuite/solutions/core-erp/erp",
      image: "/images/Dashboard/NetsuiteDashboard.webp",
      icon: Database,
      tag: "Most Popular",
    },
    {
      category: "Core ERP",
      title: "NetSuite Accounting Software",
      subtitle: "Intelligent Financial Management",
      passage1: "NetSuite's cloud-based accounting software transforms the way finance teams operate — replacing disconnected spreadsheets and legacy systems with a single, intelligent platform for managing every financial process from the general ledger to multi-entity consolidation. It provides real-time access to financial data, enabling teams to maintain transparency and accuracy across the entire organisation.",
      passage2: "Automate accounts payable, accounts receivable, bank reconciliations, multi-currency transactions, and tax compliance with built-in audit trails and real-time reporting. With NetSuite Accounting, your finance team can close the books faster, report with confidence, and focus on strategic analysis instead of manual data entry, ensuring long-term financial health.",
      link: "/netsuite/solutions/core-erp/accounting",
      image: "/images/Dashboard/accounting and planing dashboard.jpg",
      icon: DollarSign,
      tag: "Finance",
    },
    {
      category: "Core ERP",
      title: "NetSuite Global Business Management",
      subtitle: "Scale Without Borders",
      passage1: "NetSuite OneWorld is purpose-built for organisations operating across multiple countries, currencies, and legal entities — giving you a single, unified platform to manage your global business with local compliance in every market. It simplifies the complexity of international operations by providing a standardised framework for all subsidiaries.",
      passage2: "Consolidate financials across subsidiaries in real time, manage intercompany transactions with automatic eliminations, and produce local statutory reports while maintaining a single global view. From a two-entity group to a 200-country enterprise, NetSuite OneWorld grows with your international footprint without adding operational complexity or data fragmentation.",
      link: "/netsuite/solutions/core-erp/global-business",
      image: "/images/Dashboard/global business managemnet dashboard.jpg",
      icon: Globe,
      tag: "Global",
    },
    {
      category: "Customer Management",
      title: "NetSuite CRM",
      subtitle: "360° Customer Relationship Management",
      passage1: "NetSuite CRM is the only customer relationship management platform built natively inside your ERP — giving every sales, marketing, and service team a complete, real-time view of each customer including their financials, order history, support cases, and marketing interactions. This unified approach ensures that customer data is consistent across all touchpoints, leading to higher satisfaction and retention.",
      passage2: "Manage the full customer lifecycle from first lead to repeat purchase in a single system, eliminating the integration gaps and data inconsistencies that plague stand-alone CRM tools. Drive revenue growth with automated sales workflows, targeted campaign management, and AI-powered lead scoring — all without leaving the NetSuite environment you already trust.",
      link: "/netsuite/solutions/customer-management/crm",
      image: "/images/Dashboard/CRM Dashbaord 2_11zon.jpg",
      icon: Users,
      tag: "CRM",
    },
    {
      category: "Project Management",
      title: "NetSuite SRP",
      subtitle: "Services Resource Planning",
      passage1: "NetSuite SRP (Services Resource Planning) is an end-to-end cloud solution that connects every stage of the project lifecycle — from opportunity and resource planning through delivery, time capture, and project billing — in a single unified platform. It bridges the gap between sales and delivery, ensuring that resources are utilised effectively and projects stay on track.",
      passage2: "Eliminate revenue leakage by ensuring every billable hour is captured, every milestone is invoiced on time, and every project's profitability is visible in real time. Purpose-built for professional services firms, IT companies, and project-driven businesses, NetSuite SRP gives you the operational control to deliver projects profitably at scale while maintaining high quality standards.",
      link: "/netsuite/solutions/project-management/netsuite-srp",
      image: "/images/Dashboard/suiteproject dashboard 2.jpg",
      icon: Rocket,
      tag: "Professional Services",
    },
    {
      category: "Project Management",
      title: "NetSuite SuiteProject Pro",
      subtitle: "Enterprise PSA for Professional Services",
      passage1: "NetSuite SuiteProject Pro is the industry-leading Professional Services Automation (PSA) platform designed for complex, high-volume services organisations. It delivers sophisticated resource management, project accounting, revenue forecasting, and client collaboration capabilities that go beyond standard project tools, empowering services leaders with deep operational insight.",
      passage2: "Fully integrated with NetSuite ERP and CRM, NetSuite SuiteProject Pro eliminates the disconnect between services delivery and back-office finance, ensuring your revenue recognition is always current and compliant. By optimising resource allocation and improving project visibility, your organisation can maximise margin and accelerate growth in a competitive services market.",
      link: "/netsuite-open-air-solution",
      image: "/images/Dashboard/suiteproject dashboard 2.jpg",
      icon: Layers,
      tag: "PSA",
    },
    {
      category: "Analytics",
      title: "NetSuite Business Intelligence",
      subtitle: "Data-Driven Decision Making",
      passage1: "NetSuite SuiteAnalytics is a fully embedded business intelligence platform that transforms your ERP data into actionable insights — without exporting to spreadsheets or relying on a separate BI tool. Build role-based dashboards, create ad-hoc reports, and drill from high-level KPIs down to individual transactions in seconds, all within the same system your team uses every day.",
      passage2: "With real-time data across every NetSuite module and automated report delivery, SuiteAnalytics empowers your leadership, finance, and operations teams to make faster, more confident decisions. The platform provides a consistent view of the truth, allowing everyone in the organisation to align on the same metrics and drive performance toward common goals.",
      link: "/netsuite/solutions/analytics/bi",
      image: "/images/Dashboard/business intelligence 2.jpg",
      icon: BarChart3,
      tag: "Analytics",
    },
    {
      category: "Analytics",
      title: "NetSuite Analytics Warehouse",
      subtitle: "Enterprise Data Warehousing",
      passage1: "The NetSuite Analytics Warehouse is a purpose-built, cloud-native data warehousing solution that lets you analyse your NetSuite data alongside data from any other source — CRM, e-commerce, marketing, HR, and beyond — using the BI tools your teams already love. It centralises diverse data sets into a single high-performance repository for advanced historical analysis and trend discovery.",
      passage2: "Pre-built Oracle Analytics-powered workbooks and data models cover every NetSuite domain, reducing deployment time dramatically while delivering enterprise-scale analytical depth. For organisations that need to go beyond standard ERP reporting and build a true single source of truth across their entire business, the Analytics Warehouse is the definitive solution for large-scale data strategy.",
      link: "/netsuite/solutions/analytics/warehouse",
      image: "/images/Dashboard/analytic wharehouse 2.jpg",
      icon: Database,
      tag: "Data Warehouse",
    },
    {
      category: "Analytics",
      title: "NetSuite AI & Machine Learning",
      subtitle: "Intelligent Automation",
      passage1: "NetSuite's natively embedded AI and machine learning capabilities bring predictive intelligence directly into your day-to-day ERP workflows — no separate AI tool, no data export, no complex integration required. It leverages the vast amounts of data within your system to provide meaningful forecasts and identify patterns that human analysis might miss.",
      passage2: "From AI-driven cash flow forecasting and anomaly detection in accounts payable to intelligent dunning recommendations and demand sensing for inventory, NetSuite AI helps your team spot issues before they escalate. As the volume of data in your NetSuite grows, the AI models get smarter — continuously improving the accuracy of their predictions and the relevance of their recommendations.",
      link: "/netsuite/solutions/analytics/ai",
      image: "/images/Dashboard/Artifical Intelligence 2 dashboard.jpg",
      icon: Star,
      tag: "AI",
    },
    {
      category: "E-Commerce",
      title: "NetSuite SuiteCommerce",
      subtitle: "Unified Commerce for B2B & B2C",
      passage1: "NetSuite SuiteCommerce is the only e-commerce platform built natively inside your ERP — meaning your online store, inventory, pricing, orders, and financials are all managed in a single system with no integration lag or data inconsistency. It provides a seamless shopping experience for customers while simplifying the complex back-end operations of a modern digital business.",
      passage2: "Serve both B2B and B2C customers on one platform with real-time product availability, personalised pricing, self-service account portals, and seamless omnichannel fulfilment across all locations. As your commerce business grows, SuiteCommerce scales effortlessly — adding new channels and customer segments without the infrastructure overhead of traditional, disconnected platforms.",
      link: "/netsuite/solutions/ecommerce/main",
      image: "/images/Dashboard/suitecommerce_dashboard_new.png",
      icon: ShoppingCart,
      tag: "E-Commerce",
    },
    {
      category: "Planning",
      title: "NetSuite Planning & Budgeting",
      subtitle: "Smarter Financial Planning",
      passage1: "NetSuite Planning and Budgeting (PBCS) replaces the inefficiency of spreadsheet-based Financial Planning and Analysis with a purpose-built, cloud-native planning platform that connects directly to your NetSuite actuals in real time. It enables collaborative budgeting and rolling forecasts, ensuring that your financial plans are always grounded in the latest operational reality.",
      passage2: "Build sophisticated scenario models across every business unit with driver-based planning logic and workflow-managed approvals. By eliminating the version control chaos of Excel-based planning, PBCS lets your finance team spend less time building models and more time generating the strategic insights that drive business growth and long-term stability.",
      link: "/netsuite/solutions/planning/main",
      image: "/images/Dashboard/planing and budgeting 2 dashboard.jpg",
      icon: TrendingUp,
      tag: "Financial Planning and Analysis",
    },
    {
      category: "Specialised",
      title: "NetSuite SuiteSuccess",
      subtitle: "The Complete Cloud Business Suite",
      passage1: "NetSuite SuiteSuccess is Oracle's industry-optimised implementation methodology and preconfigured platform bundle — combining ERP, CRM, commerce, HR, and business intelligence in a single, ready-to-run cloud suite. It leverages years of leading-practice business processes to ensure your organisation gets up and running quickly with a system designed for your specific vertical.",
      passage2: "By leveraging hundreds of pre-built reports and thousands of hours of industry expertise, SuiteSuccess dramatically reduces implementation risk and time-to-value. Whether you're a startup scaling fast or an established business replacing legacy systems, SuiteSuccess gives you the confidence of a proven path to success with a comprehensive, unified business suite.",
      link: "/netsuite/solutions/specialized/suitesuccess",
      image: "/images/Dashboard/suitesuccess_dashboard_new.png",
      icon: Trophy,
      tag: "All-in-One",
    },
    {
      category: "Specialised",
      title: "India Localization for NetSuite",
      subtitle: "GST-Ready Cloud ERP",
      passage1: "AGSuite's India Localization for NetSuite is a certified, natively built compliance suite that embeds complete Indian statutory requirements directly into your NetSuite account — covering GST, TDS, e-invoicing, and all prescribed statutory reports. Every transaction automatically generates the correct tax treatment, ensuring that your compliance is always accurate and up-to-date.",
      passage2: "Every invoice is validated and submitted to the government portal in real time, keeping your business audit-ready and penalty-free at all times. Built for Indian businesses running NetSuite, our localization solution is continuously updated to reflect every GST council notification and legal requirement, allowing you to focus on growth while we handle the complexity of compliance.",
      link: "/netsuite/solutions/specialized/india-localization",
      image: "/images/Dashboard/indian localization 2 dashboard.jpg",
      icon: BookOpen,
      tag: "India",
    },
  ];

  const services = [
    { title: "NetSuite Implementation", description: "Go live with confidence using our structured, risk-free NetSuite implementation methodology.", icon: Rocket, href: "/netsuite/services/implementation" },
    { title: "NetSuite Integration", description: "Seamlessly connect NetSuite with your CRM, e-commerce, and third-party systems via robust APIs.", icon: Layers, href: "/netsuite/services/integration-services" },
    { title: "NetSuite Customization", description: "Tailor NetSuite to your exact workflows with custom SuiteApps, scripts, and UI extensions.", icon: Wrench, href: "/netsuite/services/customization" },
    { title: "NetSuite Managed Support", description: "Keep your NetSuite environment optimised with dedicated ongoing administration and support.", icon: Settings, href: "/netsuite/services/managed-services" },
    { title: "NetSuite Training", description: "Empower your team with role-based, hands-on NetSuite training for faster adoption.", icon: GraduationCap, href: "/netsuite/services/training-services" },
    { title: "NetSuite Consulting", description: "Strategic guidance from certified experts to maximise your NetSuite ROI and business outcomes.", icon: HeartHandshake, href: "/netsuite/services/consulting" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ─────────────── HERO SECTION ─────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">NetSuite Solutions</span>
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
                    texts={['NetSuite ERP', 'NetSuite CRM', 'NetSuite SRP', 'NetSuite PSA']}
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
                Comprehensive NetSuite solutions tailored to your unique business needs. From core ERP to specialized add-ons — scale with confidence on the world&apos;s #1 cloud platform.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#solutions" className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                  Explore All Solutions <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/netsuiteimages/netsuitemainpageheroimg.webp" alt="Oracle NetSuite Solutions" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><Database className="w-5 h-5 text-white" /></div>
                    <div><p className="text-gray-900 text-sm font-bold">Oracle NetSuite ERP Platform</p><p className="text-gray-500 text-xs mt-0.5">ERP · CRM · Analytics · E-Commerce · Planning</p></div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8 }} className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <div><p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">43,000+ Global Clients</p><p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Trusted · Scalable · Cloud-Native</p></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-white/15 pt-8 sm:pt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
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
      <section ref={introRef} className="pb-20 pt-0 bg-[#000d1a] overflow-hidden relative">
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
                transition={{ duration: 0.5 }}
                className="flex items-center justify-center rounded-2xl"
                style={{ minHeight: 340 }}
              >
                <Image src="/images/netsuiteimages/netsuitemainpage2ndsec.jpeg" alt="Oracle NetSuite Platform" width={560} height={380} className="w-full h-auto rounded-xl object-cover border-2 border-indigo-100 shadow-xl" priority />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <ScrollFloat
                  containerClassName="text-3xl md:text-4xl lg:text-4xl font-medium leading-[1.25]"
                  fromColor="#111827"
                  toColor="#2563eb"
                >
                  The #1 Cloud ERP for Growing   Businesses
                </ScrollFloat>
                <p className="text-lg text-gray-600 leading-relaxed">Oracle NetSuite is the world&apos;s most deployed cloud Enterprise Resource Planning (ERP) solution. Built from the ground up for the cloud, it provides a single, unified platform to manage every aspect of your business — from financials and CRM to inventory and e-commerce.</p>
                <p className="text-lg text-gray-600 leading-relaxed">Every solution is purpose-built for cloud — running inside your NetSuite account with real-time data, no silos, and unified reporting across every department.</p>
                <div className="pt-4">
                  <Link href="/netsuite/solutions/why-netsuite/main" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}>
                    Deep Dive into NetSuite <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight size={17} /></motion.span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─────────────── ALL SOLUTIONS — ALTERNATING ROWS ─────────────── */}
      <section id="solutions" className="py-12 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#000d1a] via-[#0f0720] to-[#1a0505]">
        {/* Background Designs - Cosmic/Nebula Style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05)_0%,transparent_50%)]" />

          {/* Moving Orbs */}
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
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 leading-tight">
              All NetSuite Solutions
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions to power every aspect of your business operations — all on one unified cloud platform.
            </p>
          </div>
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
                {solutions.map((solution, index) => {
                  const isEven = index % 2 === 0;
                  const currentGradient = imageBgGradients[index % imageBgGradients.length];
                  const accentColor = currentGradient.split(',')[2].trim().replace(')', '');

                  return (
                    <div
                      key={index}
                      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 lg:py-20 relative border-b border-indigo-100/50 last:border-0 lg:border-0`}
                    >
                      {/* IMAGE SIDE - Always first on mobile */}
                      <div className={`relative px-4 py-4 lg:px-6 lg:py-6 order-1 ${isEven ? '' : 'lg:order-2'}`}>
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

                        <motion.div
                          initial={{ opacity: 0, y: isMobile ? 0 : 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                          className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl z-10 transform transition-transform group-hover:scale-[1.02]"
                        >
                          <Image
                            src={solution.image}
                            alt={solution.title}
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
                          {solution.tag}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-gray-600 leading-tight mb-4">
                          {solution.title}
                        </h3>
                        <p className="text-gray-600 text-base leading-relaxed mb-4">
                          {solution.passage1}
                        </p>
                        <p className="text-gray-600 text-base leading-relaxed mb-7">
                          {solution.passage2}
                        </p>
                        <Link
                          href={solution.link}
                          className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                          style={{ background: currentGradient }}
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
      <section className="py-12 overflow-hidden relative bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
          >
            {/* Background Image */}
            <Image
              src="/images/Background/netsuite_solutions_cta_bg.png"
              alt="NetSuite Solutions CTA Background"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/20" />
            {/* Glow accents */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/15 blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/10 blur-2xl -ml-16 -mb-16 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-10 lg:px-14 lg:py-12">
              {/* Left: text */}
              <div className="flex-1 min-w-0">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                  <Rocket className="w-3 h-3" /> World&apos;s #1 Cloud ERP
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-2">
                  Scale your business with the world&apos;s #1 Cloud ERP.
                </h2>
                <p className="text-white/70 text-sm md:text-base">
                  Ready to get started? Our certified NetSuite experts are here to help.
                </p>
              </div>

              {/* Right: button */}
              <div className="shrink-0">
                <Link
                  href="/netsuite/contact"
                  className="group inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-sm px-7 py-3.5 rounded-xl shadow-xl transition-all active:scale-95"
                >
                  Talk to an Expert
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterContactForm platform="NetSuite" />
    </div>
  );
}




