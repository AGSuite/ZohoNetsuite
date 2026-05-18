"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Briefcase,
  Users,
  Clock,
  DollarSign,
  PieChart,
  ArrowRight,
  Shield,
  Zap,
  BarChart3,
  CheckCircle2,
  Check,
  ChevronRight,
  Layers,
  TrendingUp,
  Target,
  FileText,
  Globe,
  Settings,
} from "lucide-react";
import { SRPCircularDesign } from "@/app/netsuite/components/SRPCircularDesign";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";
import NSServicesSection from '@/app/netsuite/components/NSServicesSection';

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function NetSuiteSRPPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Utilization Increase", value: 30, suffix: "%", icon: TrendingUp },
    { label: "Margin Improvement", value: 25, suffix: "%", icon: DollarSign },
    { label: "Time Saved", value: 40, suffix: "%", icon: Clock },
    { label: "Project Success", value: 95, suffix: "%", icon: Target },
  ];

  const modules = [
    {
      title: "Project Management",
      description:
        "Manage projects from inception to completion with real-time visibility into status, budgets, and milestones.",
      image: "/images/modules/dashboard module.webp",
      color: "#1e8a9e",
      rgb: "14,108,130",
    },
    {
      title: "Resource Management",
      description:
        "Optimize utilization by assigning the right people to the right projects based on skills and availability.",
      image: "/images/modules/managging together module.webp",
      color: "#3b5299",
      rgb: "40,65,145",
    },
    {
      title: "Project Accounting",
      description:
        "Connect project activities directly to the financials for accurate cost tracking and margin analysis.",
      image: "/images/modules/sheet module.webp",
      color: "#8b3a6a",
      rgb: "125,42,88",
    },
    {
      title: "Billing & Invoicing",
      description:
        "Automate complex billing rules including fixed-bid, time-and-materials, and milestone-based invoicing.",
      image: "/images/modules/account modules.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Time & Expense",
      description:
        "Capture time and expenses easily from any device to ensure accurate project costing and billing.",
      image: "/images/modules/working module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Revenue Recognition",
      description:
        "Comply with ASC 606 and IFRS 15 standards with automated revenue schedules tied to project progress.",
      image: "/images/modules/dashbord module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Project Analytics",
      description:
        "Gain deep insights into project performance, resource capacity, and profitability with real-time reports.",
      image: "/images/modules/module8.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Collaboration Portals",
      description:
        "Empower clients and partners with secure portals to track project progress and approve time/milestones.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Capacity Planning",
      description:
        "Forecast future resource needs based on the sales pipeline and current project commitments.",
      image: "/images/modules/any module.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Global Projects",
      description:
        "Manage international projects with multi-currency and multi-language support in a single system.",
      image: "/images/modules/mobile module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Opportunity Management",
      description:
        "Link CRM opportunities directly to project delivery for early insight into upcoming resource needs.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Project Dashboards",
      description:
        "Role-based dashboards for project managers, executives, and resources to monitor what matters most.",
      image: "/images/modules/any modules.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
  ];

  const benefits = [
    {
      title: "Unified Platform",
      description: "Consolidate your entire services business on a single cloud platform, from opportunity to PSA to ERP.",
      image: "/images/lap/lap1.webp",
      points: ["One source of truth for projects and finance", "Eliminate siloed data between teams", "Real-time sync across all departments", "Single login for your entire organization"]
    },
    {
      title: "Resource Optimization",
      description: "Ensure the right people are working on the right projects based on skills, availability, and cost.",
      image: "/images/people/laptopgirl.webp",
      points: ["Visualize resource capacity in real-time", "Skill-based resource matching", "Reduced bench time and burnout", "Optimal resource load balancing"]
    },
    {
      title: "Project Visibility",
      description: "Access critical project metrics instantly with live dashboards and customizable reports.",
      image: "/images/lap/lap3.webp",
      points: ["Live project health indicators", "Budget vs. Actuals tracking", "Drill-down to transaction details", "Automated stakeholder reporting"]
    },
    {
      title: "Accurate Revenue Recognition",
      description: "Automate complex revenue recognition rules to ensure compliance and accurate financial forecasting.",
      image: "/images/people/laptopmen2.webp",
      points: ["ASC 606 and IFRS 15 compliant", "Automated revenue schedules", "Integration with project milestones", "Reduce audit risks and manual effort"]
    },
    {
      title: "Streamlined Billing",
      description: "Accelerate billing cycles with flexible, automated invoicing tied directly to project activity.",
      image: "/images/lap/lap2.webp",
      points: ["Support for T&M, Fixed-Price, and Hybrid", "Automated milestone billing", "Consolidated client invoices", "Faster collection and improved cash flow"]
    },
    {
      title: "Intelligent Automation",
      description: "Take humans out of the administrative loop for repetitive, rules-based tasks.",
      image: "/images/people/fourteam.webp",
      points: ["Automated time & expense approvals", "Workflow rules for project escalations", "AI-driven project demand forecasting", "Resource request and fulfillment automation"]
    },
  ];

  // Static particle data
  const CTA_PARTICLES = [
    { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 },
    { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
    { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 },
    { w: 1.7, h: 2.4, top: 62, left: 55, dur: 3.8, delay: 2.1 },
    { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 },
    { w: 1.2, h: 1.5, top: 90, left: 85, dur: 4.7, delay: 1.9 },
    { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 },
    { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 },
    { w: 2.4, h: 2.7, top: 55, left: 15, dur: 4.4, delay: 0.9 },
    { w: 1.5, h: 1.9, top: 70, left: 40, dur: 5.8, delay: 2.5 },
    { w: 2.0, h: 1.4, top: 18, left: 63, dur: 3.9, delay: 1.7 },
    { w: 2.9, h: 2.2, top: 42, left: 88, dur: 5.0, delay: 0.2 },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* ── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lap/lap10_11zon.webp"
            alt="NetSuite SRP Background"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent z-10" />

        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="relative z-20 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-36 pb-12">
          {/* Breadcrumb — absolutely positioned so it doesn't affect centering */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite Service Resource Planning (SRP)</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8">
            {/* LEFT — Headline + Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  NetSuite SRP — Services Resource Planning
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 mb-5 sm:mb-6 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
              >
                Scale your service business with the world&apos;s first cloud-native NetSuite Solution that unites projects, resources, and financials on a single platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Start Scaling Now
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT — SRP Cloud Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ height: 580 }}
            >
              <SRPCircularDesign />
            </motion.div>
          </div>

          {/* Metrics Row */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-8 sm:pt-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.12, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl sm:rounded-2xl group-hover:bg-blue-700/30 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base px-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Secondary Nav ─────────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {[
              { label: "What is NetSuite Service Resource Planning?", href: "#what-is-srp" },
              { label: "Modules", href: "#modules" },
              { label: "Benefits", href: "#benefits" },
              { label: "Services", href: "#services" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="what-is-srp" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl w-full"
            >
              <div className="relative w-full p-2 lg:p-4">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-indigo-100 transition-transform duration-500 hover:scale-[1.03]">
                  <Image
                    src="/images/Dashboard/suiteproject dashboard 2.jpg"
                    alt="NetSuite Service Resource Planning SRP Dashboard"
                    width={800}
                    height={500}
                    className="w-full h-auto object-contain rounded-xl block"
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
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                  NetSuite SRP: Unified Service Resource Planning for Profitable Project Excellence
                </h2>
              </div>
              <div className="space-y-2">
                <p className="text-base text-gray-600 leading-relaxed">
                  NetSuite SRP (Service Resource Planning) is a unified cloud solution designed to manage the entire services lifecycle—from initial opportunity and resource scheduling to project delivery and financial recognition. As a specialized NetSuite SRP partner, we help Professional Services organizations eliminate siloed data and bridge the gap between project teams and back-office finance.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  By centralizing Professional Services Automation (PSA) with core ERP financials, NetSuite SRP provides real-time visibility into project health, resource utilization, and billable margins. Optimize your talent pool and ensure project success with a scalable platform that grows alongside your firm&apos;s global ambitions.
                </p>
              </div>
              <div className="pt-4">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)', color: '#ffffff' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#0a1f5c';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 25px -5px rgba(10, 31, 92, 0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Empower Your Firm</span>
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

      {/* ── SRP Modules Grid ─────────────────────────────────────────────────── */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">
            NetSuite SRP Modules
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">
            All integrated modules to manage project delivery and financial excellence in one unified platform
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ scale: 1.03, boxShadow: `0 20px 40px -8px rgba(${mod.rgb}, 0.5)`, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg transition-all duration-300 cursor-pointer bg-white"
                  style={{ minHeight: 340 }}
                >
                  {/* Top: Image Section with Color Overlay */}
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)` }}
                    />
                  </div>

                  {/* Bottom: Information Section */}
                  <div
                    className="flex-1 p-5 pb-6 flex flex-col relative"
                    style={{ backgroundColor: `rgb(${mod.rgb})` }}
                  >
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">
                        {mod.title}
                      </h4>
                      <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">
                        {mod.description}
                      </p>
                    </div>

                    {/* Hover Reveal Button */}
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Explore <ArrowRight size={10} />
                      </span>
                    </div>

                    {/* Multi-color Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Section ─────────────────────────────────────────────── */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #060e1f 0%, #0a1e4a 25%, #0f2a57 55%, #091828 80%, #050d1a 100%)" }}
      >
        {/* Glow Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Key Business Benefits of NetSuite SRP
            </h2>
          </motion.div>

          {/* Benefit Content Grid */}
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            {/* Left Side: Image Display */}
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side: Interactive List */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index
                    ? 'bg-white shadow-xl border-l-4 border-blue-600'
                    : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'
                    }`}
                  suppressHydrationWarning
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors duration-300 ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <Layers size={20} />}
                      {index === 1 && <Users size={20} />}
                      {index === 2 && <PieChart size={20} />}
                      {index === 3 && <Zap size={20} />}
                      {index === 4 && <DollarSign size={20} />}
                      {index >= 5 && <Shield size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>
                      {item.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>

                  {activeBenefit === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pl-9"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}
                          </li>
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

      {/* ── Pricing Section ─────────────────────────────────────────────────── */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#06303f' }}
          >
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              {/* LEFT — Text + CTA */}
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does NetSuite SRP Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite SRP pricing is tailored to the size and complexity of your service organization. Your annual subscription includes the core platform, the SRP module (PSA), and user seats — along with a one-time implementation fee. As your firm grows, you can easily add users or activate additional modules for global management or advanced analytics without infrastructure downtime.
                </p>
                <div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Contact Us Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* RIGHT — Organic Blob Image */}
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div
                  className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl"
                  style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}
                >
                  <Image src="/images/people/laptopgirl.webp" alt="NetSuite SRP Pricing" fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ Section ──────────────────────────────────────────────────────── */}
      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite SRP — services resource planning, project costing, revenue recognition, and utilisation reporting."
        customFaqs={[
          { q: "What is NetSuite SRP (Services Resource Planning)?", a: "NetSuite SRP is NetSuite's native solution for professional services and project-based businesses — integrating project management, resource scheduling, time and expense capture, project billing, contract management, and real-time revenue recognition within the core NetSuite ERP. Unlike OpenAir (a separate product), SRP is fully embedded in NetSuite with no integration layer required." },
          { q: "How does SRP differ from NetSuite OpenAir?", a: "SRP is the project management module built natively into NetSuite ERP — ideal for businesses where project billing and financial management need to be tightly integrated without a separate system. OpenAir is a dedicated, more feature-rich PSA platform suited for large professional services organisations with complex resource management, multi-currency billing, and advanced project analytics needs." },
          { q: "How does SRP handle project budgets and cost tracking?", a: "SRP allows project managers to define detailed budgets by task, resource type, and cost category. Actual time and expense entries are tracked against budget in real time — with budget vs actual variance reports, cost overrun alerts, and project profitability dashboards visible to both project managers and finance teams." },
          { q: "What billing types does NetSuite SRP support?", a: "SRP supports time and materials (T&M), fixed fee, milestone billing, retainer, and hybrid billing models. Billing schedules are defined at project or task level. Approved timesheets automatically populate draft invoices, with project managers reviewing billable hours before invoices are released to accounts receivable." },
          { q: "How does SRP handle revenue recognition for services contracts?", a: "SRP includes ASC 606 / IFRS 15 compliant revenue recognition — supporting percentage of completion, milestone, and straight-line methods. Revenue schedules are generated automatically based on project delivery progress and contract terms, and post directly to the NetSuite general ledger for financial reporting." },
          { q: "Can SRP manage resource availability and utilisation targets?", a: "Yes. SRP provides a resource availability view across all active projects — showing current bookings, remaining capacity, and utilisation rates by resource, team, and department. Utilisation targets can be set at role or individual level, with variance reporting to identify under or over-allocated resources." },
          { q: "How does time and expense capture work for project teams using SRP?", a: "Team members submit weekly timesheets against specific projects and tasks through the NetSuite interface or mobile app. Expense reports with receipt capture are submitted similarly. Approval workflows route entries to project managers for billable time review, and to finance for expense reimbursement — all tracked in NetSuite." },
          { q: "How long does a NetSuite SRP implementation take?", a: "A standard NetSuite SRP implementation covering project setup, billing rules, resource management, timesheet workflows, and revenue recognition typically takes 6 to 10 weeks for a single-entity professional services organisation. Multi-entity or multi-currency implementations with complex revenue recognition rules may take 10 to 16 weeks." },
        ]}
      />

      {/* ── CTA Banner ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002a8c] via-[#0044cc] to-[#0099a3] shadow-2xl"
          >
            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                />
              ))}
            </div>

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Optimize Your Firm on NetSuite SRP —{" "}
                  <span className="text-cyan-300">Scale Globally.</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Join thousands of professional services firms that traded spreadsheets for the world&apos;s #1 cloud SRP solution.
                </p>
              </div>

              <Link
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Go Live on NetSuite SRP
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────────────── */}
      <ContactFormDesign4 />
    </div>
  );
}




