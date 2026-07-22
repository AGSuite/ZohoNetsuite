"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useScroll } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Trophy, Users, Globe2, Rocket, Briefcase, Layout, Database, Share2, Code, ShieldCheck,
  HeartHandshake, ArrowRight, CheckCircle2, BarChart3, ShoppingCart, Globe,
  TrendingUp, Package, Layers, DollarSign, BookOpen, Star, ChevronDown, ChevronRight, GraduationCap, Wrench, Settings, PieChart, Zap, Building2, Target
} from 'lucide-react';
import dynamic from 'next/dynamic';
import ZohoServices from '../../components/ZohoServices';

const FooterContactForm = dynamic(() => import('@/app/components/shared/FooterContactForm'), { ssr: false });
const FAQ = dynamic(() => import('@/app/components/home/FAQ').then(mod => mod.FAQ), { ssr: false });
const RotatingText = dynamic(() => import('./RotatingText'), { ssr: false });

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) { spring.set(value); } }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

type ParticleDatum = { width: number; height: number; top: string; left: string; duration: number; delay: number };

export default function ZohoSolutionsClient() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [rotatingIdx, setRotatingIdx] = useState(0);

  // Per-word accent colours (text · pill-bg · pill-border)
  const wordColors = [
    { text: '#ffffff', bg: '#5a21ff', border: '#4c17e6' },
    { text: '#ffffff', bg: '#5a21ff', border: '#4c17e6' },
    { text: '#ffffff', bg: '#5a21ff', border: '#4c17e6' },
    { text: '#ffffff', bg: '#5a21ff', border: '#4c17e6' },
  ];
  const currentColor = wordColors[rotatingIdx] ?? wordColors[0];

  const stats = [
    { label: 'Projects Completed', value: 600, suffix: '+', icon: Briefcase },
    { label: 'Global Customers', value: 200, suffix: '+', icon: Building2 },
    { label: 'Industry Expertise', value: 15, suffix: '+', icon: Target },
    { label: 'Customer Retention', value: 84, suffix: '%', icon: HeartHandshake },
    { label: 'Years Experience', value: 15, suffix: '+', icon: Rocket },
    { label: 'Countries Serving', value: 10, suffix: '+', icon: Globe2 },
  ];

  const solutions = [
    {
      category: "Sales",
      title: "Zoho CRM",
      subtitle: "The Core of Your Business Relationships",
      description: "Convert more leads and engage customers with the world's most versatile CRM. Automate your sales processes, track deals, and gain real-time visibility with AI-powered insights.",
      highlights: [
        "Lead & Deal management",
        "Zia AI Sales Assistant",
        "Omnichannel communication",
        "Advanced sales analytics",
      ],
      link: "/zoho/solutions/sales/zoho-crm",
      image: "/images/zoho-dashboards/zoho-crm.webp",
      icon: Database,
      tag: "Most Popular",
    },
    {
      category: "Finance",
      title: "Zoho Books",
      subtitle: "Intelligent Financial Management",
      description: "Streamline your accounting with GST-compliant software. Manage invoicing, expenses, and bank reconciliation while staying perfectly balanced for audits.",
      highlights: [
        "Automated GST billing",
        "Expense & inventory tracking",
        "Multi-currency support",
        "Instant financial reports",
      ],
      link: "/zoho/solutions/finance/zoho-books",
      image: "/images/zoho-dashboards/zoho-books.webp",
      icon: DollarSign,
      tag: "Finance",
    },
    {
      category: "Finance",
      title: "Zoho Finance Plus",
      subtitle: "Unified Back-Office Suite",
      description: "A complete suite to manage your entire back-office operations. Connect accounting, inventory, subscriptions, and expenses into one seamless flow.",
      highlights: [
        "Integrated inventory & orders",
        "Subscription billing management",
        "Unified expense reporting",
        "Consolidated financial view",
      ],
      link: "/zoho/solutions/finance/zoho-finance-plus",
      image: "/images/zoho-dashboards/zoho-finance-plus.webp",
      icon: BarChart3,
      tag: "Suite",
    },
    {
      category: "HR & People",
      title: "Zoho People",
      subtitle: "Modern HR Management",
      description: "Simplify your HR processes from onboarding to exit. Manage attendance, leave, performance, and employee data in a secure, central portal.",
      highlights: [
        "Attendance & Leave tracking",
        "Performance management",
        "Employee self-service",
        "HR process automation",
      ],
      link: "/zoho/solutions/hr/zoho-people",
      image: "/images/zoho-dashboards/zoho-people.webp",
      icon: Users,
      tag: "HR",
    },
    {
      category: "Projects",
      title: "Zoho Projects",
      subtitle: "Cloud-Based Project Tracking",
      description: "Plan, track, and collaborate on every project with ease. Use Gantt charts, task dependencies, and social features to deliver results on time.",
      highlights: [
        "Gantt charts & Milestones",
        "Task automation & billing",
        "Team collaboration tools",
        "Resource utilization",
      ],
      link: "/zoho/solutions/projects/zoho-projects",
      image: "/images/zoho-dashboards/zoho-projects.webp",
      icon: Rocket,
      tag: "Projects",
    },
    {
      category: "Service",
      title: "Zoho Desk",
      subtitle: "Omnichannel Customer Support",
      description: "Deliver world-class customer service across email, chat, phone, and social media. Empower your agents with context and AI-driven productivity.",
      highlights: [
        "Unified ticket management",
        "Self-service help center",
        "AI response suggestions",
        "SLA and performance tracking",
      ],
      link: "/zoho/solutions/service/zoho-desk",
      image: "/images/zoho-dashboards/zoho-desk.webp",
      icon: Globe,
      tag: "Support",
    },
    {
      category: "Marketing",
      title: "Zoho Social",
      subtitle: "Complete Social Media Management",
      description: "Manage all your social media presence from one dashboard. Schedule posts, monitor engagement, and analyze performance across all networks.",
      highlights: [
        "Multi-network scheduling",
        "Real-time social monitoring",
        "Collaboration workflows",
        "Engagement analytics",
      ],
      link: "/zoho/solutions/marketing/zoho-social",
      image: "/images/zoho-dashboards/zoho-social-dashboard.png",
      icon: Share2,
      tag: "Marketing",
    },
    {
      category: "Analytics",
      title: "Zoho Analytics",
      subtitle: "Self-Service Business Intelligence",
      description: "Turn raw data into actionable insights. Create stunning visualizations and dashboards across your entire business suite in minutes.",
      highlights: [
        "250+ data connectors",
        "Zia AI data assistant",
        "Collaborative dashboards",
        "Predictive forecasting",
      ],
      link: "/zoho/solutions/analytics/zoho-analytics",
      image: "/images/zoho-dashboards/zoho-analytics-dashboard.png",
      icon: PieChart,
      tag: "BI",
    },
    {
      category: "Suites",
      title: "Zoho One",
      subtitle: "The Operating System for Business",
      description: "Run your entire organization on one integrated platform. 45+ enterprise-grade apps for sales, marketing, finance, and operations.",
      highlights: [
        "Unified admin console",
        "Single sign-on for all apps",
        "Cross-app data flows",
        "Unbeatable enterprise value",
      ],
      link: "/zoho/solutions/it-management/zoho-one",
      image: "/images/zoho-dashboards/zoho-one.webp",
      icon: Zap,
      tag: "All-in-One",
    },
    {
      category: "Workspace",
      title: "Zoho Workplace",
      subtitle: "Integrated Productivity Suite",
      description: "Everything your team needs to collaborate—email, chat, documents, and meetings—all in one secure, privacy-first workspace.",
      highlights: [
        "Business email & chat",
        "Document & sheet editors",
        "Online meeting platform",
        "Centralized team storage",
      ],
      link: "/zoho/solutions/email-collab/zoho-workplace",
      image: "/images/zoho-dashboards/zoho-workplace-dashboard.png",
      icon: Globe2,
      tag: "Workplace",
    },
  ];


  const imageBgGradients = [
    'linear-gradient(135deg, #6e7175ff, #80848aff, #4b5563)', // Light Gray, White, Dark Gray
    'linear-gradient(135deg, #3e8698ff, #2b504fff)', // Pink
    'linear-gradient(135deg, #232222ff, #736f6fff)', // Red
    'linear-gradient(135deg, #3f628eff, #37353cff)', // Violet
    'linear-gradient(135deg, #eff1c4ff, #d39934ff)', // Emerald
    'linear-gradient(135deg, #3e8698ff, #2b504fff)', // Amber
    'linear-gradient(135deg, #eff1c4ff, #d39934ff)', // Sky
    'linear-gradient(135deg, #35a99dff, #4d58b8ff)', // Indigo
    'linear-gradient(135deg, #232222ff, #736f6fff)', // Rose
    'linear-gradient(135deg, #740d94ff, #252a29ff)', // Teal
  ];

  // Scroll animations removed for performance optimization

  return (
    <div className="min-h-screen bg-white">

      {/* ─────────────── HERO SECTION ─────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">Zoho Solutions</span>
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
                    texts={['Zoho CRM', 'Zoho Books', 'Zoho Projects', 'Zoho People']}
                    onNext={(idx) => setRotatingIdx(idx)}
                    mainClassName="text-2xl sm:text-3xl md:text-4xl font-extrabold"
                    splitBy="characters"
                    staggerDuration={0.03}
                    staggerFrom="first"
                    rotationInterval={2200}
                    transition={{ type: 'spring', damping: 22, stiffness: 280 }}
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: '-110%', opacity: 0 }}
                    style={{ color: '#ffffff' }}
                  />
                </motion.span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Comprehensive Zoho solutions tailored to your unique business needs. From core CRM to advanced analytics and automation — scale with confidence on the world&apos;s most versatile cloud business suite.
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
                  <Image src="/images/people/zoho_solutions_hero_person.png" alt="Zoho Business Solutions" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#003580,#0044cc)' }}><Database className="w-5 h-5 text-white" /></div>
                    <div><p className="text-gray-900 text-sm font-bold">Zoho One Platform</p><p className="text-gray-500 text-xs mt-0.5">Zoho ERP · Zoho CRM · Zoho Finance · Zoho HR · Zoho Analytics</p></div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8 }} className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#003580,#0044cc)' }}><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <div><p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">250,000+ Global Customers</p><p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Trusted · Scalable · Cloud-Native</p></div>
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
      <section className="pb-20 pt-0 bg-[#000d1a] overflow-hidden relative">
        {/* Background Designs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="relative z-10 bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border border-white/20 overflow-hidden rounded-[2.5rem] mx-4 sm:mx-8 lg:mx-12">
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
                <Image src="/images/zoho_suite_graphic.png" alt="Zoho Enterprise Platform" width={560} height={380} className="w-full h-auto rounded-xl object-contain border-2 border-indigo-100 shadow-xl" priority />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-6"
              >
                <h3 className="text-3xl md:text-4xl lg:text-4xl font-medium leading-[1.25] text-gray-900">
                  The Most Versatile Cloud Suite for Growing Businesses
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">Zoho is the world&apos;s most comprehensive business software suite with over 45+ integrated applications. Built from the ground up for the cloud, it provides a single unified platform to manage every aspect of your business — from CRM and finance to HR and automation.</p>
                <p className="text-lg text-gray-600 leading-relaxed">Every solution is purpose-built for cloud — running inside your Zoho account with real-time data, no silos, and unified reporting across every department.</p>
                <div className="pt-4">
                  <Link href="#solutions" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all shadow-lg hover:shadow-xl hover:scale-105" style={{ background: 'linear-gradient(135deg,#003580,#0044cc)' }}>
                    Deep Dive into Zoho <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity }}><ArrowRight size={17} /></motion.span>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── ALL SOLUTIONS — ALTERNATING ROWS ─────────────── */}
      <section id="solutions" className="py-12 lg:py-24 relative overflow-hidden bg-gradient-to-br from-[#000d1a] via-[#0f0720] to-[#1a0505]">
        {/* Background Designs - Cosmic/Nebula Style */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.05)_0%,transparent_50%)]" />

          {/* Simple Static Glows for performance */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-blue-600/5 rounded-full blur-[130px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-400 leading-tight">
              All Zoho Solutions
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive solutions to power every aspect of your business operations — all on one unified cloud platform.
            </p>
          </div>
        </div>

        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="bg-gradient-to-br from-blue-50 via-red-50 to-purple-50 shadow-[0_35px_80px_-15px_rgba(0,0,0,0.4)] border border-white/20 overflow-hidden relative rounded-[2.5rem] mx-4 sm:mx-8 lg:mx-12">
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
                          initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                          whileInView={{ opacity: 0.8, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ ease: "easeOut", duration: 0.8 }}
                          className="absolute inset-2 sm:inset-0 rounded-[2.5rem] shadow-lg border border-white/50"
                          style={{
                            background: currentGradient,
                            zIndex: 0
                          }}
                        />

                        <motion.div
                          initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-50px" }}
                          transition={{ ease: "easeOut", duration: 0.9, delay: 0.15 }}
                          className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl z-10 bg-white"
                        >
                          <Image
                            src={solution.image}
                            alt={solution.title}
                            fill
                            className="object-contain object-center p-4"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </motion.div>
                      </div>

                      {/* TEXT SIDE - Always second on mobile */}
                      <motion.div
                        initial={{ opacity: 0, y: isMobile ? 0 : 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ ease: "easeOut", duration: 0.5 }}
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
                        <p className="text-gray-500 text-base leading-relaxed mb-6 line-clamp-4">
                          {solution.description}
                        </p>
                        <ul className="space-y-2 mb-8 text-left">
                          {solution.highlights.map((h, hi) => (
                            <li key={hi} className="flex items-center gap-3 text-sm text-gray-600 leading-tight">
                              <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: accentColor }} />
                              {h}
                            </li>
                          ))}
                        </ul>
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

      <ZohoServices />

      {/* ─────────────── CTA SECTION ─────────────── */}
      <section className="py-20 overflow-hidden relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#000814] rounded-[3rem] p-10 lg:p-16 relative overflow-hidden"
          >
            <Image src="/images/lap/group2.webp" alt="Zoho Solutions" fill className="object-cover" sizes="(max-width: 1200px) 100vw, 1200px" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-transparent" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 max-w-2xl text-left">
              <h2 className="text-2xl md:text-4xl font-medium text-white mb-8 leading-tight drop-shadow-2xl">
                Scale your business with the <span className="text-blue-400">Zoho Ecosystem</span>. Ready to get started?
              </h2>
              <div className="flex justify-start">
                <Link href="/zoho/contact" className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-36">
        <FAQ variant="zoho" layout="sidebar" />
      </section>

      <FooterContactForm platform="Zoho" />
    </div>
  );
}




