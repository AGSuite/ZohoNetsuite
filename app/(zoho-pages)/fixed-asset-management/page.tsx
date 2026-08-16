"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  Zap,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  QrCode,
  Calendar,
  Layers,
  FileSpreadsheet,
  AlertTriangle,
  Clock,
  Building,
  RefreshCw,
  Cpu,
  Check,
  X,
  HelpCircle,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import FooterContactForm from "@/app/components/shared/FooterContactForm";

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [inView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function FixedAssetManagementPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeTab, setActiveTab] = useState(0);

  const stats = [
    { label: "Asset Visibility", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Audit Accuracy", value: 99, suffix: "%", icon: ShieldCheck },
    { label: "Depreciation Error Reduction", value: 95, suffix: "%", icon: Zap },
    { label: "Time Saved on Audits", value: 60, suffix: "hrs", icon: BarChart3 },
  ];

  const features = [
    {
      title: "Asset Lifecycle Management",
      description: "Govern assets seamlessly from procurement, assignment, and location transfer to maintenance, depreciation, and final disposal.",
      icon: Layers,
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Field Updates & Mobile Access",
      description: "Empower field technicians and custodians to log asset movements, condition reports, and service requests in real time via iOS and Android apps.",
      icon: RefreshCw,
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "Asset Categorization",
      description: "Structure assets into custom categories, sub-categories, blocks, and asset groups to ensure clear hierarchy and accurate financial tracking.",
      icon: Building,
      color: "from-purple-600 to-violet-600",
    },
    {
      title: "Compliance Report",
      description: "Generate statutory compliance reports pre-formatted strictly for The Companies Act and Income Tax Act guidelines with zero manual compilation.",
      icon: ShieldCheck,
      color: "from-rose-600 to-red-600",
    },
    {
      title: "Depreciation Management",
      description: "Dual depreciation engines calculate Written Down Value (WDV) and Straight Line Method (SLM) automatically based on configured asset life rules.",
      icon: FileSpreadsheet,
      color: "from-amber-600 to-orange-600",
    },
    {
      title: "Centralized Asset Register",
      description: "Maintain a single, searchable digital repository recording serial numbers, purchase invoices, custodian history, and asset valuation.",
      icon: Zap,
      color: "from-cyan-600 to-blue-600",
    },
    {
      title: "Audit Trails & Compliance",
      description: "Complete, tamper-proof event logging tracks every change, custodian transfer, and disposal approval for complete auditor transparency.",
      icon: CheckCircle2,
      color: "from-teal-600 to-emerald-600",
    },
    {
      title: "Asset Identification (Barcode / QR Code)",
      description: "Generate, print, and scan custom QR codes or barcodes using mobile camera devices for instant physical audit verification.",
      icon: QrCode,
      color: "from-indigo-600 to-blue-600",
    },
    {
      title: "Preventive Maintenance Scheduling",
      description: "Schedule automated service-due alerts, technician assignments, and repair history tracking to extend equipment operational life.",
      icon: Calendar,
      color: "from-orange-600 to-amber-600",
    },
    {
      title: "Advanced Global Search",
      description: "Instantly locate any asset across multiple plants, offices, or departments using multi-attribute search filters and tags.",
      icon: BarChart3,
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Integrations",
      description: "Connect seamlessly with Zoho Books, Zoho Inventory, custom ERPs, and third-party accounting systems via robust REST APIs.",
      icon: Layers,
      color: "from-violet-600 to-purple-600",
    },
    {
      title: "Custom Reports",
      description: "Create interactive visual dashboards, customized PDF exports, and department-wise asset allocation reports on demand.",
      icon: BarChart3,
      color: "from-rose-600 to-pink-600",
    },
    {
      title: "No-Code / Low-Code",
      description: "Built on Zoho Creator, allowing rapid customization of forms, approval workflows, fields, and notification triggers without deep coding.",
      icon: Cpu,
      color: "from-emerald-600 to-cyan-600",
    },
    {
      title: "Mobile-Based Application",
      description: "Native web and mobile synchronization ensures field teams can conduct audits, scan tags, and view asset history anywhere, online or offline.",
      icon: RefreshCw,
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const benefits = [
    {
      title: "Eliminate Ghost & Phantom Assets",
      description:
        "Maintain 100% accurate physical inventory records and eliminate payment of taxes or insurance on missing or unserviceable equipment.",
      points: [
        "Real-time physical asset verification",
        "Custodian & department allocation tracking",
        "Disposal & write-off approval workflows",
        "Complete historical chain of custody",
      ],
      image: "/images/Dashboard/fixed_asset_management_dashboard.png",
    },
    {
      title: "Statutory Tax & Regulatory Compliance",
      description:
        "Automatically compute asset depreciation according to prescribed rates under both Companies Act and Income Tax rules without manual spreadsheets.",
      points: [
        "Automated Straight Line & WDV calculations",
        "Companies Act vs Income Tax schedule generation",
        "Block of assets classification for tax reporting",
        "Audit-ready trail for external auditors",
      ],
      image: "/images/Dashboard/fixed_asset_management_dashboard.png",
    },
    {
      title: "Proactive Service & Preventive Maintenance",
      description:
        "Never miss a scheduled service date or warranty expiration. Keep industrial, IT, and office assets operating at peak efficiency.",
      points: [
        "Automated email & push alerts for service due dates",
        "Maintenance cost log & vendor tracking",
        "Warranty and insurance policy management",
        "Downtime reduction and equipment longevity",
      ],
      image: "/images/Dashboard/fixed_asset_management_dashboard.png",
    },
  ];

  const challenges = [
    {
      challenge: "Manual Spreadsheet Tracking",
      impact: "High error rates, missing asset records, and difficulty maintaining version history during audits.",
      solution: "Centralized Zoho Creator digital database with real-time web & mobile sync.",
    },
    {
      challenge: "Complex Statutory Depreciation Rules",
      impact: "Errors in calculating Companies Act vs Income Tax Act rates lead to tax penalties and misstated financials.",
      solution: "Built-in dual depreciation engine that automates WDV & SLM calculations instantly.",
    },
    {
      challenge: "Ghost Assets & Unclaimed Depreciation",
      impact: "Paying insurance premiums and taxes on lost, stolen, or scrapped assets still listed on books.",
      solution: "QR-code mobile audit scanner for real-time physical verification.",
    },
    {
      challenge: "Unplanned Asset Maintenance & Downtime",
      impact: "Missed service cycles cause unexpected machine breakdowns and expensive emergency repairs.",
      solution: "Automated status alerts, service-due triggers, and maintenance scheduling.",
    },
  ];

  const faqs = [
    {
      question: "What is Fixed Asset Management software?",
      answer:
        "Fixed Asset Management software is a centralized platform that tracks the entire lifecycle of an organization's physical assets—from purchase, tagging, location transfer, and maintenance to depreciation and final retirement.",
    },
    {
      question: "How does the tool handle Companies Act and Income Tax depreciation?",
      answer:
        "Our Fixed Asset Management tool built on Zoho Creator features integrated depreciation engines that simultaneously calculate Written Down Value (WDV) and Straight Line Method (SLM) depreciation in compliance with both The Companies Act and The Income Tax Act.",
    },
    {
      question: "Can we track assets using mobile phones and QR codes?",
      answer:
        "Yes! The solution provides native mobile synchronization allowing staff to scan QR codes or barcodes on assets to update location, assign custodians, log maintenance requests, and complete physical audit verification on the go.",
    },
    {
      question: "Can this solution be customized for our organization's branding and workflow?",
      answer:
        "Absolutely. Developed on Zoho Creator, the tool offers deep customization including custom fields, approval workflows, automated email notifications, theme personalization, and seamless integration with your existing ERP or accounting system.",
    },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* ── 1. HERO SECTION ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[90vh] overflow-hidden flex flex-col justify-center"
        style={{
          background:
            "linear-gradient(135deg, #000814 0%, #000d2e 25%, #001a4d 55%, #000d2e 80%, #000814 100%)",
        }}
      >
        {/* Ambient glows & grid */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-36 pb-16">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-2 text-sm font-medium mb-8"
          >
            <Link href="/zoho" className="text-blue-300 hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/zoho/solutions" className="text-blue-300 hover:text-white transition-colors">
              Zoho Add-Ons
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Fixed Asset Management</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4"
              >
                <Cpu className="w-4 h-4 text-blue-400" />
                Asset Management Software
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4 leading-[1.12] tracking-tight text-white"
              >
                Fixed Asset Management
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "90px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[4px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-6 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl mb-8"
              >
                Govern your entire asset lifecycle—from procurement and QR tagging to depreciation, maintenance, and disposal—with an intelligent tool built on Zoho Creator.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Get in Touch
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

            {/* Right Hero Image Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.3 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/60 border border-white/10 group">
                <Image
                  src="/images/lap/lap2.webp"
                  alt="Fixed Asset Management Software"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-10 mt-16"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center group">
                  <div className="flex justify-center mb-2">
                    <div className="p-3 bg-blue-700/20 rounded-2xl group-hover:bg-blue-700/30 transition-colors">
                      <stat.icon className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-blue-400">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. STICKY SUB-NAVBAR ─────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 py-3">
            {[
              { label: "What Is Fixed Asset Management?", href: "#what-is-fixed-asset-management" },
              { label: "Features", href: "#features" },
              { label: "Benefits", href: "#benefits" },
              { label: "Challenges", href: "#challenges" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-xs sm:text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── 3. THIRD SECTION: WHAT IS FIXED ASSET MANAGEMENT ───────────────── */}
      <section id="what-is-fixed-asset-management" className="py-20 bg-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white p-3"
            >
              <Image
                src="/images/Dashboard/fixed_asset_management_dashboard.png"
                alt="Zoho Creator Fixed Asset Management Dashboard"
                width={700}
                height={500}
                className="w-full h-auto rounded-xl object-cover"
              />
            </motion.div>

            {/* Content Paragraphs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-5"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight">
                Streamlining Fixed Asset Management with Zoho Creator
              </h2>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Our Fixed Asset Management Tool, developed on Zoho Creator, is a centralised digital ecosystem engineered to govern the entire asset lifecycle—from procurement and tagging to depreciation, maintenance, and ultimate disposal. Operating as a comprehensive Fixed Asset Management Software, it provides organisations with unparalleled visibility and precision over their entire asset portfolio.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                The solution serves as an intelligent Fixed Asset Management Tracker, offering seamless web and mobile synchronisation for real-time monitoring. By leveraging QR code-based identification and automated status alerts, the system streamlines asset handling across multiple locations, ensuring data integrity at every touchpoint.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                Engineered for regulatory excellence, the platform delivers compliance-ready reporting strictly aligned with The Companies Act and The Income Tax Act. Integrated depreciation engines, automated audit scheduling, and proactive service-due management work in tandem to optimise financial accuracy and mitigate operational risk.
              </p>

              <p className="text-base text-gray-700 leading-relaxed font-normal">
                This scalable Fixed Asset Management solution is further enhanced by automated notifications, native email integration, and deep customisation options—including theme personalisation—to align with specific brand identities. Ultimately, it empowers businesses to transform fragmented processes into a structured, transparent, and high-performance asset management strategy.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 4. FEATURES SECTION ────────────────────────────────────────────── */}
      <section id="features" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Comprehensive Features for Total Control
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Built natively on Zoho Creator to provide enterprise-grade capabilities without complex overhead.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-300 group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${feat.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <feat.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feat.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. BENEFITS SECTION ────────────────────────────────────────────── */}
      <section id="benefits" className="py-20 bg-gray-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Key Strategic & Operational Benefits
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Transform asset accounting from an administrative chore into a high-performance advantage.
            </p>
          </div>

          <div className="space-y-16">
            {benefits.map((b, i) => (
              <div
                key={i}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="inline-block px-3.5 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4">
                    Benefit 0{i + 1}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">
                    {b.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {b.description}
                  </p>
                  <ul className="space-y-3">
                    {b.points.map((pt, j) => (
                      <li key={j} className="flex items-center gap-3 text-gray-700 text-sm font-medium">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={i % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white p-3">
                    <Image
                      src={b.image}
                      alt={b.title}
                      width={650}
                      height={450}
                      className="w-full h-auto rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CHALLENGES SECTION ──────────────────────────────────────────── */}
      <section id="challenges" className="py-20 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Overcoming Traditional Asset Management Challenges
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              See how our Zoho Creator solution replaces manual pain points with structured digital automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((c, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-gray-200 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 text-red-600 rounded-lg">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{c.challenge}</h3>
                </div>
                <div className="space-y-3 pl-2 border-l-2 border-red-200 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-600">The Problem</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.impact}</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-4 h-4" />
                    Zoho Creator Solution
                  </div>
                  <p className="text-sm text-gray-800 font-medium">{c.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. FAQ SECTION ─────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 bg-gray-50 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600">
              Everything you need to know about our Fixed Asset Management tool.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  {f.question}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-8">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. ZOHO ADD-ONS CARD SECTION ────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 md:p-16 bg-gradient-to-r from-[#000814] via-[#001740] to-[#000814] shadow-2xl border border-blue-500/20 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-2xl text-center md:text-left">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-600 text-white text-xs font-extrabold uppercase tracking-widest shadow-md">
                ZOHO
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white">
                All the tools you need for sales, HR, operations &amp; automation.
              </h3>
            </div>

            <div className="relative z-10 shrink-0">
              <Link
                href="/zoho/solutions"
                className="group inline-flex items-center gap-3 px-8 py-4 text-base font-semibold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
              >
                Explore Zoho
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. CONTACT FORM SECTION ─────────────────────────────────────────── */}
      <div id="contact-form" className="scroll-mt-28">
        <FooterContactForm platform="Zoho" />
      </div>
    </div>
  );
}
