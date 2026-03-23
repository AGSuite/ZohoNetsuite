"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Trophy, Users, Globe2, Rocket, Layout, Database, Share2, Code, ShieldCheck,
  HeartHandshake, ArrowRight, CheckCircle2, BarChart3, ShoppingCart, Globe,
  TrendingUp, Package, Layers, DollarSign, BookOpen, Star, ChevronDown, ChevronRight, GraduationCap, Wrench, Settings, PieChart, Zap
} from 'lucide-react';
import ContactFormDesign4 from '../../../netsuite/components/ContactFormDesign4';
import { FAQ } from '@/app/components/home/FAQ';

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) { spring.set(value); } else { spring.set(0); } }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function ZohoSolutionsClient() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    { label: 'Happy Clients', value: 250, suffix: '+', icon: Trophy },
    { label: 'Zoho Experts', value: 30, suffix: '+', icon: Users },
    { label: 'Global Roll-outs', value: 50, suffix: '+', icon: Globe2 },
    { label: 'Years Experience', value: 15, suffix: '+', icon: Rocket },
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
      image: "/images/people/laptopgirl.webp",
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
      image: "/images/lap/lap4.webp",
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
      image: "/images/lap/lap2.webp",
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
      image: "/images/lap/lap3.webp",
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
      image: "/images/lap/lap1.webp",
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
      image: "/images/lap/lap4.webp",
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
      image: "/images/lap/lap5.webp",
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
      image: "/images/lap/lap8_11zon.webp",
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
      image: "/images/lap/lap6_11zon.webp",
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
      image: "/images/lap/lap10_11zon.webp",
      icon: Globe2,
      tag: "Workplace",
    },
  ];

  const services = [
    { title: "Digital Transformation", description: "Modernize your business for the digital age with Zoho.", icon: Rocket, href: "/zoho/services/digital-transformation" },
    { title: "Integration Services", description: "Seamlessly connect Zoho with your existing systems.", icon: Layers, href: "/zoho/services/integration-services" },
    { title: "Training Services", description: "Upskill your team with expert-led Zoho training.", icon: GraduationCap, href: "/zoho/services/training-services" },
    { title: "Low-Code Development", description: "Build apps faster with Zoho Creator.", icon: Wrench, href: "/zoho/services/low-code" },
    { title: "Managed Services", description: "End-to-end Zoho management & support.", icon: Settings, href: "/zoho/services/managed-services" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ─────────────── HERO SECTION ─────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" /><span className="text-white/80">Zoho Solutions</span>
          </motion.nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">Zoho Business Solutions</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Comprehensive Zoho solutions tailored to your unique business needs. From core CRM to advanced analytics and automation — scale with confidence on the world&apos;s most versatile cloud business suite.
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
                  <Image src="/images/people/fourteam.webp" alt="Zoho Business Solutions" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#003580,#0044cc)' }}><Database className="w-5 h-5 text-white" /></div>
                    <div><p className="text-gray-900 text-sm font-bold">Zoho One Platform</p><p className="text-gray-500 text-xs mt-0.5">ERP · CRM · Finance · HR · Analytics</p></div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8 }} className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg,#003580,#0044cc)' }}><CheckCircle2 className="w-5 h-5 text-white" /></div>
                  <div><p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">250,000+ Global Customers</p><p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Trusted · Scalable · Cloud-Native</p></div>
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
              <Image src="/images/lap/group1.webp" alt="Zoho Platform" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="space-y-6">
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 leading-tight">The Most Versatile Cloud Suite for Growing Businesses</h3>
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
      </section>

      {/* ─────────────── ALL SOLUTIONS — ALTERNATING ROWS ─────────────── */}
      <section id="solutions" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-white to-[#f5faff]">
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
            <h2 className="text-4xl lg:text-5xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#003580] via-blue-600 to-black leading-tight">All Zoho Solutions</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
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
                    <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
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
                    <span className="inline-block bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 leading-tight">{solution.tag}</span>
                    <h3 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black via-[#003580] to-blue-600 leading-tight mb-3">
                      {solution.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-5 line-clamp-4">
                      {solution.description}
                    </p>
                    <ul className="space-y-1.5 mb-6 text-left">
                      {solution.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-center gap-2 text-sm text-gray-600 leading-tight">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={solution.link}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
                      style={{ background: 'linear-gradient(135deg,#003580,#0044cc)' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#fff'; (e.currentTarget as HTMLAnchorElement).style.color = '#003580'; (e.currentTarget as HTMLAnchorElement).style.border = '1.5px solid #003580'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg,#003580,#0044cc)'; (e.currentTarget as HTMLAnchorElement).style.color = '#fff'; (e.currentTarget as HTMLAnchorElement).style.border = 'none'; }}
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

      {/* ─────────────── SERVICES SECTION ─────────────── */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Our Services</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">Zoho Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end services to ensure your Zoho environment is perfectly aligned with your business needs.
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
              ];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}>
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    variants={{ initial: { scale: 1 }, hover: { scale: 1.04, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } } }}
                    className={`relative group rounded-3xl p-7 border border-gray-200 transition-all duration-300 h-full shadow-xl hover:shadow-blue-100 ${cardBgColors[index % cardBgColors.length]}`}
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
            <Image src="/images/lap/group1.webp" alt="Zoho Solutions" fill className="object-cover opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Scale your business with the <span className="text-blue-600">Zoho Ecosystem</span>. Ready to get started?
              </h2>
              <div className="flex justify-start">
                <Link href="/zoho/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-36">
        <FAQ variant="zoho" layout="centered" />
      </section>

      <ContactFormDesign4 />
    </div>
  );
}