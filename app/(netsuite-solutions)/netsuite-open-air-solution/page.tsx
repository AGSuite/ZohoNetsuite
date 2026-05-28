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
  Users,
  DollarSign,
  PieChart,
  ArrowRight,
  Shield,
  BarChart3,
  CheckCircle2,
  Check,
  ChevronRight,
  Layers,
  TrendingUp,
  Target,
  Globe,
  Workflow,
  Building2,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";
import NSServicesSection from '@/app/netsuite/components/NSServicesSection';

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView) { spring.set(value); }
    else { spring.set(0); }
  }, [inView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}


export default function SuiteProjectProPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Enterprise Users", value: 50000, suffix: "+", icon: Users },
    { label: "Revenue Growth", value: 35, suffix: "%", icon: TrendingUp },
    { label: "Global Availability", value: 99, suffix: "%", icon: Globe },
    { label: "Customer Satisfaction", value: 98, suffix: "%", icon: Target },
  ];

  const modules = [
    {
      title: "Advanced PSA",
      description:
        "Enterprise-grade professional services automation for complex, large-scale organizations with deep integrations.",
      image: "/images/netsuiteimages/ns_endtoend_management.png",
      color: "#1e8a9e",
      rgb: "14,108,130",
    },
    {
      title: "Portfolio Management",
      description:
        "Manage multiple projects and programs across your organization with full portfolio-level visibility.",
      image: "/images/modules/unified_platform.png",
      color: "#3b5299",
      rgb: "40,65,145",
    },
    {
      title: "Global Resource Management",
      description:
        "Optimize resources across global teams with AI-powered insights, skills matching, and real-time utilization.",
      image: "/images/people/global.webp",
      color: "#8b3a6a",
      rgb: "125,42,88",
    },
    {
      title: "Advanced Billing",
      description:
        "Support for the most complex billing scenarios including T&M, fixed-price, milestone, and outcome-based.",
      image: "/images/modules/order_management.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Revenue Recognition",
      description:
        "ASC 606 and IFRS 15 compliant revenue recognition with percentage-of-completion and milestone-based rules.",
      image: "/images/people/laptopmen1.jpg",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Workflow Automation",
      description:
        "Automate complex approval workflows and business processes across your entire services organization.",
      image: "/images/netsuiteimages/ns_automation_efficiency.png",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Project Accounting",
      description:
        "Connect project activities directly to financials for accurate cost tracking and real-time margin analysis.",
      image: "/images/lap/lap8_11zon.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Time & Expense",
      description:
        "Capture time and expenses from any device with smart rules for approval, policies, and project coding.",
      image: "/images/people/laptopgirl.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Capacity Planning",
      description:
        "Forecast future resource needs based on the sales pipeline and current project commitments globally.",
      image: "/images/netsuiteimages/ns_rapid_scaling.png",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Global Operations",
      description:
        "One system for all your entities, supporting multi-currency, multi-language, taxation, and local compliance.",
      image: "/images/netsuiteimages/ns_global_business.png",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Opportunity Management",
      description:
        "Link CRM opportunities to project delivery for early insight into upcoming resource needs and capacity.",
      image: "/images/modules/crm.png",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Project Dashboards",
      description:
        "Role-based dashboards for project managers, executives, and resources to monitor what matters most.",
      image: "/images/netsuiteimages/ns_realtime_visibility.png",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
  ];

  const benefits = [
    {
      title: "Global Resource Management",
      description: "Optimize resource utilization across global teams, skills, and time zones with AI-powered insights.",
      image: "/images/people/global.webp",
      points: ["AI-powered skill matching", "Cross-timezone visibility", "Real-time utilization tracking", "Global bench management"],
    },
    {
      title: "Complex Billing Automation",
      description: "Handle the most complex billing scenarios including outcome-based, recurring, and hybrid models.",
      image: "/images/modules/cost_efficiency.png",
      points: ["T&M, Fixed-Price, Hybrid billing", "Outcome-based models", "Automated invoice generation", "Client self-service portals"],
    },
    {
      title: "Advanced Revenue Recognition",
      description: "Automate revenue recognition compliant with ASC 606 and IFRS 15 for accurate financial forecasting.",
      image: "/images/people/laptopmen1.jpg",
      points: ["ASC 606 and IFRS 15 compliant", "Percentage-of-completion", "Milestone-based recognition", "Reduce audit risk"],
    },
    {
      title: "Global Operations",
      description: "Run a unified services organization across multiple countries, currencies, and tax jurisdictions.",
      image: "/images/netsuiteimages/ns_global_business.png",
      points: ["Multi-currency & multi-entity", "Local tax compliance", "Consolidated reporting", "100+ country support"],
    },
    {
      title: "Portfolio Management",
      description: "Gain executive-level visibility across hundreds of concurrent projects and programs.",
      image: "/images/lap/lap5.webp",
      points: ["Program-level dashboards", "Cross-project resource views", "Portfolio health indicators", "Risk & issue tracking"],
    },
    {
      title: "Enterprise Security",
      description: "Protect sensitive project and financial data with enterprise-grade security and role-based access.",
      image: "/images/netsuiteimages/data_accuracy_compliance_risk.png",
      points: ["Role-based access controls", "SOC 2 Type II certified", "Data encryption at rest & in transit", "Comprehensive audit trails"],
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
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
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
            <span className="text-white/80">NetSuite SuiteProject Pro</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">
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
                  NetSuite SuiteProject Pro
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
                Enterprise professional services automation built for global organizations — managing thousands of projects, resources, and complex billing scenarios with ease.
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
                  Get Started with NetSuite SuiteProject Pro
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

            {/* RIGHT — Accounting-style: image + floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              {/* Outer wrapper — leaves room for the top-left card to peek out */}
              <div className="relative w-[88%] ml-auto">

                {/* Main image — smaller, rounded */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image
                    src="/images/lap/lap9_11zon.webp"
                    alt="NetSuite SuiteProject Pro"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority
                  />
                  {/* Bottom scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Bottom white card — inside image at bottom */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                      <CheckCircle2 className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">
                        Manage 1,000s of projects globally
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                        Real-time PSA · Global Resources · ASC 606 Revenue Rec.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Top-left white card — peeking outside image on the left */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0f4c81, #0ea5e9)' }}>
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">
                      NetSuite SuiteProject Pro
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      PSA · Portfolio · Global Ops · Billing · Rev. Rec.
                    </p>
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </div>

          {/* Metrics Row */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-5 sm:pt-6 relative z-10"
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
              { label: "What is NetSuite SuiteProject Pro?", href: "#what-is-suiteproject-pro" },
              { label: "Modules", href: "#modules" },
              { label: "Benefits", href: "#benefits" },
              { label: "Services", href: "#services" },
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

      {/* ── What is SuiteProject Pro Section ─────────────────────────────────── */}
      <section id="what-is-suiteproject-pro" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* LEFT — Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden"
            >
              <div className="relative w-full h-full p-4 lg:p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-indigo-100">
                  <Image
                    src="/images/Dashboard/suiteproject dashboard 2.jpg"
                    alt="NetSuite SuiteProject Pro PSA Solution Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>

            {/* RIGHT — Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-between py-6 h-full"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                  Optimize Services with NetSuite SuiteProject Pro
                </h2>
              </div>
              <div className="space-y-2 my-auto pt-2 md:pt-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  NetSuite SuiteProject Pro is a specialized Professional Services Automation (PSA) platform designed for large-scale, global organizations. As a premier NetSuite SuiteProject Pro partner, we help businesses manage thousands of resources and complex multi-entity billing workflows within a single, high-performance system.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  By unifying project delivery with financial operations, NetSuite SuiteProject Pro provides deep visibility into global utilization and project margins. Eliminate manual data reconciliation and gain the real-time insights needed to optimize resource allocation and drive enterprise-wide profitability.
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)',
                    color: '#ffffff',
                  }}
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
                  <span>Empower Your Enterprise</span>
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

      {/* ── NetSuite SuiteProject Pro Modules Grid ─────────────────────────── */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">
            NetSuite SuiteProject Pro Modules
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">
            All integrated modules to manage enterprise project delivery and financial excellence in one unified platform
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                  style={{ minHeight: 380 }}
                >
                  {/* Top: Image Section with Color Overlay */}
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
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
                        Get Started <ArrowRight size={10} />
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
              Key Business Benefits of NetSuite SuiteProject Pro
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
                  <Image
                    src={benefits[activeBenefit].image}
                    alt={benefits[activeBenefit].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
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
                      {index === 0 && <Globe size={20} />}
                      {index === 1 && <DollarSign size={20} />}
                      {index === 2 && <PieChart size={20} />}
                      {index === 3 && <Layers size={20} />}
                      {index === 4 && <BarChart3 size={20} />}
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

      {/* ── Pricing Section ───────────────────────────────────────────────── */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#06303f' }}
          >
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does NetSuite SuiteProject Pro Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite SuiteProject Pro pricing is tailored to your business size and requirements. The annual subscription combines the core professional services automation platform, any additional modules you need, and your user count — plus a one-time implementation fee. As your business grows, activate new modules or add users instantly — no upgrades, no downtime, no infrastructure headaches.
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
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="absolute bottom-8 left-6 w-14 h-14 bg-blue-400/30 z-10" style={{ borderRadius: '40% 60% 50% 50% / 50% 40% 60% 50%', transform: 'rotate(20deg)' }} />
                <div className="absolute bottom-16 left-14 w-3 h-3 bg-cyan-400/60 rounded-full z-10" />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image
                    src="/images/people/laptopgirl3.webp"
                    alt="NetSuite SuiteProject Pro Pricing"
                    fill
                    sizes="(max-width: 768px) 100vw, 30vw"
                    className="object-cover object-top"
                  />
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
        customSubtitle="Everything you need to know about NetSuite SuiteProject Pro — PSA, project billing, resource management, and implementation timelines."
        customFaqs={[
          { q: "What is NetSuite SuiteProject Pro?", a: "NetSuite SuiteProject Pro is a purpose-built Professional Services Automation (PSA) platform for project-based businesses — covering project management, resource planning, time and expense tracking, project billing, and real-time utilisation analytics natively within NetSuite ERP." },
          { q: "What types of businesses benefit most from NetSuite SuiteProject Pro?", a: "SuiteProject Pro is designed for professional and managed services organisations — consulting firms, IT services companies, marketing agencies, engineering firms, staffing businesses, and any organisation that delivers projects, tracks billable hours, and invoices clients based on time, milestones, or fixed fees." },
          { q: "How does NetSuite SuiteProject Pro handle project billing?", a: "SuiteProject Pro supports all standard professional services billing models — time and materials (T&M), fixed fee, milestone-based, retainer, and hybrid. Approved timesheets feed directly into invoicing workflows, with project managers approving billable hours before invoices are generated. Revenue recognition rules are applied automatically based on contract type and delivery completion." },
          { q: "How does resource management work in NetSuite SuiteProject Pro?", a: "SuiteProject Pro provides a real-time resource capacity and demand view across all projects — showing which resources are available, overallocated, or underutilised. Project managers can search resources by skill, certification, location, and availability, then book them to projects directly. Utilisation targets and forecasts are tracked at individual, team, and department levels." },
          { q: "How does time and expense capture work for project teams?", a: "SuiteProject Pro provides a mobile-first timesheet and expense capture interface for project teams. Time is submitted against specific projects and tasks, with configurable approval workflows for manager review. Expense receipts are captured by photo on mobile devices, categorised, and routed for approval — then automatically processed into reimbursement and client billing." },
          { q: "Can NetSuite SuiteProject Pro integrate with NetSuite financials?", a: "Yes. NetSuite SuiteProject Pro integrates natively with NetSuite financials — approved project revenue, billing, and cost data sync automatically for financial reporting, revenue recognition, and cash collection. Project profitability is visible in real time." },
          { q: "Does NetSuite SuiteProject Pro support revenue recognition for long-term contracts?", a: "Yes. NetSuite SuiteProject Pro includes ASC 606 / IFRS 15 compliant revenue recognition — supporting percentage-of-completion, milestone, and straight-line recognition methods. Revenue schedules are generated automatically based on project delivery progress and contract terms, flowing into NetSuite for financial statement reporting." },
          { q: "How long does a NetSuite SuiteProject Pro implementation take?", a: "A standard NetSuite SuiteProject Pro implementation for a professional services firm — covering project setup, resource management, timesheet workflows, billing rules, and integration with financials — typically takes 8 to 14 weeks. Larger implementations with complex billing arrangements, multi-entity structures, or custom integrations may take 14 to 20 weeks." },
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
                  Transform Your Enterprise with NetSuite SuiteProject Pro —{" "}
                  <span className="text-cyan-300">Scale Globally.</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Join thousands of enterprise services organizations that traded complexity for the world&apos;s #1 cloud PSA solution.
                </p>
              </div>

              <Link
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Go Live with NetSuite SuiteProject Pro
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




