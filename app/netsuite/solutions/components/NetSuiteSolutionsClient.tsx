"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Trophy, Users, Globe2, Rocket, Briefcase, Database, HeartHandshake, ArrowRight, CheckCircle2, BarChart3, ShoppingCart, Globe,
  TrendingUp, Layers, DollarSign, BookOpen, Star, ChevronRight, GraduationCap, Wrench, Settings, Building2, Target
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
    'linear-gradient(135deg, #1e3a8aff, #2563ebff, #1e40af)',
    'linear-gradient(135deg, #3e8698ff, #2b504fff)',
    'linear-gradient(135deg, #232222ff, #736f6fff)',
    'linear-gradient(135deg, #3f628eff, #37353cff)',
    'linear-gradient(135deg, #eff1c4ff, #d39934ff)',
    'linear-gradient(135deg, #3e8698ff, #2b504fff)',
    'linear-gradient(135deg, #eff1c4ff, #d39934ff)',
    'linear-gradient(135deg, #35a99dff, #4d58b8ff)',
    'linear-gradient(135deg, #232222ff, #736f6fff)',
    'linear-gradient(135deg, #740d94ff, #252a29ff)',
    'linear-gradient(135deg, #35a99dff, #4d58b8ff)',
    'linear-gradient(135deg, #1e3a8aff, #2563ebff)',
    'linear-gradient(135deg, #eff1c4ff, #d39934ff)',
  ];

  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introScrollProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end start"]
  });

  const introRadius = useTransform(introScrollProgress, [0, 0.3], ["0px", "48px"]);
  const introMargin = useTransform(introScrollProgress, [0, 0.3], ["0px", "32px"]);
  const introScale = useTransform(introScrollProgress, [0, 0.3], [1, 0.99]);

  const solutions = [
    {
      category: "Core ERP",
      title: "NetSuite ERP",
      subtitle: "AI-Powered ERP for Smarter Business Operations",
      passage1: "Oracle NetSuite ERP unifies finance, inventory, procurement, manufacturing, supply chain, HR, and business operations into one intelligent cloud platform. Trusted by 43,000+ organizations worldwide, NetSuite helps businesses eliminate data silos, automate workflows, and gain real-time visibility across the enterprise.",
      passage2: "Built for growing and enterprise-scale businesses, NetSuite ERP combines automation, AI-driven insights, and real-time analytics to help organizations improve efficiency, accelerate decision-making, and scale with confidence.",
      highlights: [
        "Unified cloud platform for end-to-end business operations",
        "AI-driven analytics and real-time reporting"
      ],
      link: "/netsuite-erp-solution",
      image: "/images/Dashboard/NetsuiteDashboard.webp",
      icon: Database,
      tag: "Most Popular",
    },
    {
      category: "Core ERP",
      title: "NetSuite Cloud Accounting Software",
      subtitle: "Intelligent Cloud Accounting for Modern Finance Teams",
      passage1: "Oracle NetSuite Accounting Software streamlines and automates core financial operations through a unified cloud platform. From general ledger and accounts payable to tax compliance and multi-entity consolidation, NetSuite helps finance teams improve accuracy, gain real-time financial visibility, and eliminate manual processes.",
      passage2: "With AI-driven reporting, automated reconciliations, and real-time dashboards, businesses can accelerate financial close cycles, enhance compliance, and make faster, data-driven financial decisions.",
      highlights: [
        "Unified cloud-based financial management",
        "Automated accounts payable & receivable workflows"
      ],
      link: "/netsuite-accounting-services",
      image: "/images/Dashboard/accounting and planing dashboard.jpg",
      icon: DollarSign,
      tag: "Finance",
    },
    {
      category: "Core ERP",
      title: "NetSuite Global Business Management",
      subtitle: "Unified Global Operations with Intelligent Multi-Entity Management",
      passage1: "Oracle NetSuite OneWorld enables businesses to efficiently manage multiple subsidiaries, currencies, tax regulations, and international operations from a single cloud platform. Designed for global enterprises, it provides real-time visibility across entities while ensuring local compliance and operational consistency in every region.",
      passage2: "With automated financial consolidation, intercompany transaction management, and AI-driven reporting, NetSuite OneWorld helps organizations simplify global operations, improve decision-making, and scale internationally with confidence.",
      highlights: [
        "Centralized management of global subsidiaries and operations",
        "Real-time multi-entity financial consolidation"
      ],
      link: "/global-business-management",
      image: "/images/Dashboard/global business managemnet dashboard.jpg",
      icon: Globe,
      tag: "Global",
    },
    {
      category: "Customer Management",
      title: "NetSuite CRM",
      subtitle: "AI-Driven CRM for Connected Customer Experiences",
      passage1: "Oracle NetSuite CRM unifies sales, marketing, customer support, and business data within a single intelligent platform, giving teams a complete real-time view of every customer interaction. Built natively within the NetSuite ecosystem, it eliminates data silos and enables seamless collaboration across departments.",
      passage2: "From lead generation and opportunity management to customer support and retention, NetSuite CRM helps businesses automate engagement, improve sales productivity, and deliver personalized customer experiences powered by AI-driven insights and real-time analytics.",
      highlights: [
        "Unified customer data across sales, marketing, and support",
        "AI-powered lead scoring and sales insights"
      ],
      link: "/netsuite-crm-solutions",
      image: "/images/Dashboard/CRM Dashbaord 2_11zon.jpg",
      icon: Users,
      tag: "CRM",
    },
    {
      category: "Project Management",
      title: "NetSuite SRP (Services Resource Planning)",
      subtitle: "Intelligent Project & Resource Management for Service-Driven Businesses",
      passage1: "Oracle NetSuite SRP streamlines the entire project lifecycle by connecting resource planning, project execution, time tracking, billing, and financial management within a single cloud platform. Designed for professional services, IT, consulting, and project-based organizations, it helps businesses improve resource utilization, project visibility, and profitability.",
      passage2: "With real-time project analytics, automated billing workflows, and AI-driven operational insights, NetSuite SRP enables teams to deliver projects efficiently, reduce revenue leakage, and maintain complete control over project performance and delivery timelines.",
      highlights: [
        "End-to-end project and resource management",
        "Real-time project profitability and performance tracking"
      ],
      link: "/service-resource-planning",
      image: "/images/Dashboard/suiteproject dashboard 2.jpg",
      icon: Rocket,
      tag: "Professional Services",
    },
    {
      category: "Project Management",
      title: "NetSuite SuiteProject Pro (OpenAir)",
      subtitle: "Advanced PSA Solution for High-Performance Service Organizations",
      passage1: "Oracle NetSuite SuiteProject Pro is a powerful Professional Services Automation (PSA) platform built for complex, project-driven organizations. It helps businesses streamline resource management, project accounting, revenue forecasting, and service delivery through a unified cloud-based system.",
      passage2: "Fully integrated with NetSuite ERP and CRM, SuiteProject Pro provides real-time operational visibility, improves resource utilization, and enables accurate financial tracking across projects. With AI-driven insights and automated workflows, organizations can enhance project profitability, improve client collaboration, and scale service operations efficiently.",
      highlights: [
        "Advanced professional services automation (PSA) platform",
        "Intelligent resource planning and allocation"
      ],
      link: "/netsuite-open-air-solution",
      image: "/images/Dashboard/suiteproject dashboard 2.jpg",
      icon: Layers,
      tag: "PSA",
    },
    {
      category: "Analytics",
      title: "NetSuite Business Intelligence",
      subtitle: "AI-Powered Analytics for Smarter Business Decisions",
      passage1: "Oracle NetSuite SuiteAnalytics transforms real-time business data into actionable insights through an intelligent, fully integrated analytics platform. Built directly within NetSuite, it enables organizations to create interactive dashboards, customized reports, and real-time KPI tracking without relying on disconnected reporting tools or spreadsheets.",
      passage2: "With AI-driven analytics, automated reporting, and enterprise-wide visibility, SuiteAnalytics helps leadership, finance, and operations teams make faster, data-driven decisions while improving overall business performance and strategic planning.",
      highlights: [
        "Real-time dashboards and KPI monitoring",
        "AI-powered business insights and analytics"
      ],
      link: "/netsuite-business-intelligence",
      image: "/images/Dashboard/business intelligence 2.jpg",
      icon: BarChart3,
      tag: "Analytics",
    },
    {
      category: "Analytics",
      title: "NetSuite Analytics Warehouse",
      subtitle: "Enterprise Data Intelligence Powered by Advanced Analytics",
      passage1: "Oracle NetSuite Analytics Warehouse is a cloud-native data and analytics platform designed to unify NetSuite data with information from CRM, eCommerce, HR, marketing, and third-party business systems. It enables organizations to create a centralized, enterprise-wide source of truth for advanced reporting, trend analysis, and strategic decision-making.",
      passage2: "Powered by Oracle Analytics, the platform delivers AI-driven insights, prebuilt data models, and high-performance analytics capabilities that help businesses uncover deeper operational trends, improve forecasting, and drive data-backed growth strategies.",
      highlights: [
        "Centralized data warehouse for enterprise-wide analytics",
        "AI-powered analytics and predictive insights"
      ],
      link: "/netsuite-analytics-warehouse",
      image: "/images/Dashboard/analytic wharehouse 2.jpg",
      icon: Database,
      tag: "Data Warehouse",
    },
    {
      category: "Analytics",
      title: "NetSuite Next (NetSuite AI)",
      subtitle: "AI-Driven Intelligence Built Directly into NetSuite",
      passage1: "Oracle NetSuite Next AI brings intelligent automation, predictive insights, and real-time decision-making capabilities directly into your NetSuite environment. Natively embedded across the platform, NetSuite AI helps businesses streamline operations, improve forecasting accuracy, and automate repetitive processes without the need for additional tools or complex integrations.",
      passage2: "From financial forecasting and anomaly detection to intelligent reporting and operational recommendations, NetSuite AI empowers organizations to work smarter, respond faster, and make data-driven decisions with greater confidence.",
      highlights: [
        "AI-powered forecasting and business insights",
        "Intelligent workflow automation across departments"
      ],
      link: "/netsuite/next-ai",
      image: "/images/Dashboard/Artifical Intelligence 2 dashboard.jpg",
      icon: Star,
      tag: "AI",
    },
    {
      category: "E-Commerce",
      title: "NetSuite SuiteCommerce",
      subtitle: "Unified AI-Driven Commerce for Modern Businesses",
      passage1: "Oracle NetSuite SuiteCommerce connects eCommerce, inventory, order management, CRM, and financials within a single cloud platform, enabling businesses to deliver seamless digital commerce experiences across B2B and B2C channels.",
      passage2: "Built natively within NetSuite, SuiteCommerce eliminates disconnected systems and provides real-time visibility into products, pricing, inventory, and customer data. With intelligent automation, personalized experiences, and omnichannel capabilities, businesses can streamline operations, improve customer engagement, and scale their online commerce ecosystem with confidence.",
      highlights: [
        "Unified eCommerce and ERP platform",
        "Real-time inventory, pricing, and order visibility"
      ],
      link: "/netsuite-suite-commerce-site-builder",
      image: "/images/Dashboard/suitecommerce_dashboard_new.png",
      icon: ShoppingCart,
      tag: "E-Commerce",
    },
    {
      category: "Planning",
      title: "NetSuite Planning & Budgeting",
      subtitle: "Intelligent Financial Planning for Agile Decision-Making",
      passage1: "Oracle NetSuite Planning & Budgeting streamlines financial planning, forecasting, budgeting, and scenario analysis through a unified cloud-based platform fully connected with your NetSuite financial data. It helps finance teams move beyond spreadsheet-driven planning by enabling real-time collaboration, automated workflows, and data-driven forecasting.",
      passage2: "With intelligent modeling, rolling forecasts, and AI-powered financial insights, organizations can improve planning accuracy, accelerate decision-making, and respond faster to changing business conditions.",
      highlights: [
        "Unified cloud-based planning and budgeting platform",
        "Collaborative budgeting and rolling forecasts"
      ],
      link: "/netsuite-planning-and-budgeting",
      image: "/images/Dashboard/planing and budgeting 2 dashboard.jpg",
      icon: TrendingUp,
      tag: "FP&A",
    },
    {
      category: "Specialised",
      title: "NetSuite SuiteSuccess",
      subtitle: "Accelerated ERP Implementation with Industry Best Practices",
      passage1: "Oracle NetSuite SuiteSuccess is a proven implementation methodology and preconfigured business solution designed to help organizations deploy NetSuite faster, reduce implementation risk, and achieve rapid business value. Combining ERP, CRM, commerce, analytics, and industry-specific best practices into a unified cloud platform, SuiteSuccess enables businesses to streamline digital transformation with greater efficiency and predictability.",
      passage2: "Built on real-world industry experience, SuiteSuccess delivers ready-to-use workflows, dashboards, KPIs, and reporting tools tailored to your business model, helping organizations accelerate adoption, improve operational visibility, and scale with confidence.",
      highlights: [
        "Faster and structured NetSuite implementation approach",
        "Industry-specific best practices and preconfigured KPIs"
      ],
      link: "/netsuite-suitesuccess",
      image: "/images/Dashboard/suitesuccess_dashboard_new.png",
      icon: Trophy,
      tag: "SuiteSuccess",
    },
    {
      category: "Specialised",
      title: "India Localization for NetSuite",
      subtitle: "Simplified Indian Compliance Built Natively into NetSuite",
      passage1: "AGSuite’s India Localization for Oracle NetSuite is a comprehensive compliance solution designed to help businesses manage Indian statutory requirements seamlessly within their NetSuite environment. Built natively on NetSuite, the solution automates GST, TDS, e-invoicing, tax calculations, and statutory reporting while ensuring compliance with evolving Indian regulatory standards.",
      passage2: "With real-time validation, automated tax processing, and government-compliant reporting, businesses can reduce manual effort, improve financial accuracy, and stay audit-ready while focusing on operational growth.",
      highlights: [
        "Native India localization solution for Oracle NetSuite",
        "Automated GST, TDS, and e-invoicing compliance"
      ],
      link: "/india-localization-for-netsuite",
      image: "/images/Dashboard/indian localization 2 dashboard.jpg",
      icon: BookOpen,
      tag: "India Compliance",
    },
  ];

  const services = [
    { title: "NetSuite Implementation", description: "Go live with confidence using our structured, risk-free NetSuite implementation methodology.", icon: Rocket, href: "/netsuite-erp-and-crm-implementation" },
    { title: "NetSuite Integration", description: "Seamlessly connect NetSuite with your CRM, e-commerce, and third-party systems via robust APIs.", icon: Layers, href: "/netsuite-integration" },
    { title: "NetSuite Customization", description: "Tailor NetSuite to your exact workflows with custom SuiteApps, scripts, and UI extensions.", icon: Wrench, href: "/netsuite-customization" },
    { title: "NetSuite Managed Support", description: "Keep your NetSuite environment optimised with dedicated ongoing administration and support.", icon: Settings, href: "/netsuite-managed-support" },
    { title: "NetSuite Training", description: "Empower your team with role-based, hands-on NetSuite training for faster adoption.", icon: GraduationCap, href: "/netsuite/training-services" },
    { title: "NetSuite Consulting", description: "Strategic guidance from certified experts to maximise your NetSuite ROI and business outcomes.", icon: HeartHandshake, href: "/netsuite-consulting" },
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
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400 mb-2">Transform Business Operations with<br />Oracle NetSuite &{' '}</span>

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
                    texts={['AI-Driven Automation', 'NetSuite ERP', 'NetSuite OneWorld', 'SuiteAnalytics']}
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
          {/* COMMENTED FOR NOW - Hero Stats Metrics */}
          {/* <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-white/15 pt-8 sm:pt-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3"><div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors"><s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" /></div></div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1"><Counter value={s.value} /><span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span></div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </section>

      {/* ─────────────── INTRO SECTION ─────────────── */}
      <section ref={introRef} className="pb-20 pt-0 bg-[#000d1a] overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
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
                  Intelligent NetSuite Solutions Built for Modern Businesses
                </ScrollFloat>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Modern enterprises need more than traditional ERP systems. They need connected, intelligent platforms capable of automating workflows, predicting business trends, and enabling real-time decision-making.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  As a trusted Oracle NetSuite Solution Provider and NetSuite Implementation Partner, AGSuite Technologies delivers tailored NetSuite solutions that combine cloud ERP capabilities with AI-powered business intelligence, automation, and seamless integrations.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  From finance and procurement to manufacturing, CRM, inventory, and eCommerce, we help organizations create a future-ready digital ecosystem with scalable NetSuite solutions designed to streamline operations, improve efficiency, and drive sustainable growth.
                </p>
                <div className="pt-4">
                  <Link href="/why-netsuite" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ background: 'linear-gradient(135deg,#1e3a8a,#2563eb)' }}>
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
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05)_0%,transparent_50%)]" />

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
              End-to-End NetSuite Solutions for Every Business Function
            </h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
              Streamline operations, eliminate data silos, and unlock enterprise-wide visibility with scalable NetSuite solutions tailored to your business model and growth objectives.
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
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
              <div className="flex flex-col">
                {solutions.map((solution, index) => {
                  const isEven = index % 2 === 0;
                  const currentGradient = imageBgGradients[index % imageBgGradients.length];
                  const accentColor = currentGradient.split(',')[2].trim().replace(')', '');

                  return (
                    <div
                      key={index}
                      className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-10 lg:py-16 relative border-b border-indigo-100/60 last:border-0`}
                    >
                      {/* IMAGE SIDE - Compact fixed height */}
                      <div className={`relative px-4 py-4 lg:px-6 lg:py-6 order-1 ${isEven ? '' : 'lg:order-2'}`}>
                        <motion.div
                          initial={{ opacity: 0, scale: isMobile ? 1 : 0.95 }}
                          whileInView={{ opacity: 0.8, scale: 1 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-2 sm:inset-0 rounded-[2.5rem] shadow-lg"
                          style={{
                            background: currentGradient,
                            zIndex: 0
                          }}
                        />

                        <motion.div
                          initial={{ opacity: 0, y: isMobile ? 0 : 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-100px" }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="relative h-72 sm:h-80 lg:h-[350px] rounded-2xl overflow-hidden shadow-2xl z-10 transform transition-transform hover:scale-[1.02]"
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

                      {/* TEXT SIDE */}
                      <motion.div
                        initial={{ opacity: 0, x: isMobile ? 0 : (isEven ? 40 : -40) }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className={`relative z-10 flex flex-col justify-center order-2 ${isEven ? '' : 'lg:order-1'}`}
                      >
                        <span
                          className="inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 leading-tight shadow-sm w-max"
                          style={{
                            backgroundColor: `${accentColor}15`,
                            color: accentColor,
                            border: `1px solid ${accentColor}30`
                          }}
                        >
                          {solution.tag}
                        </span>
                        <h3 className="text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 leading-tight mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-blue-700 font-semibold text-sm lg:text-base mb-4 leading-snug">
                          {solution.subtitle}
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-3">
                          {solution.passage1}
                        </p>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-5">
                          {solution.passage2}
                        </p>

                        {/* Key Highlights list - Exactly 2 key points */}
                        {solution.highlights && solution.highlights.length > 0 && (
                          <div className="mb-6 pt-3 border-t border-gray-200/80">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900 mb-2.5">
                              Key Highlights
                            </h4>
                            <div className="grid sm:grid-cols-2 gap-2.5">
                              {solution.highlights.slice(0, 2).map((h: string, hIdx: number) => (
                                <div key={hIdx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700 font-medium">
                                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                  <span>{h}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div>
                          <Link
                            href={solution.link}
                            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                            style={{ background: currentGradient }}
                          >
                            View Details
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
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
            <Image
              src="/images/Background/netsuite_solutions_cta_bg.png"
              alt="NetSuite Solutions CTA Background"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/20" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/15 blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-cyan-500/10 blur-2xl -ml-16 -mb-16 pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-10 lg:px-14 lg:py-12">
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
