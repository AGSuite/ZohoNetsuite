"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck, HardDrive, RefreshCw, Lock, Zap, ArrowRight, Check, ChevronRight,
  Database, History, CheckCircle2, Server, Cpu, Layers, HelpCircle, CheckCircle, Scale
} from "lucide-react";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";

const CTA_PARTICLES = [
  { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 }, { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
  { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 }, { w: 1.7, h: 2.4, top: 62, left: 55, dur: 3.8, delay: 2.1 },
  { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 }, { w: 1.2, h: 1.5, top: 90, left: 85, dur: 4.7, delay: 1.9 },
  { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 }, { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 },
];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) { spring.set(value); } else { spring.set(0); } }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function DataBackupPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Data Accessibility", value: 100, suffix: "%", icon: HardDrive },
    { label: "Compliance Guarantee", value: 100, suffix: "%", icon: Scale },
    { label: "Sync Intervals Available", value: 24, suffix: "hrs", icon: RefreshCw },
    { label: "Encryption Protocol", value: 256, suffix: "bit", icon: Lock },
  ];

  const syncData = [
    {
      name: "Chart of Accounts",
      scope: "Sync account names, types, and details with NetSuite internal ID mapping."
    },
    {
      name: "Items & Inventory",
      scope: "Sync item master records (SKU, price, stock levels, categories, etc.)"
    },
    {
      name: "Customers & Vendors",
      scope: "Sync all entities with full contact details, subsidiaries, and NetSuite internal IDs."
    },
    {
      name: "Transactions",
      scope: "Sync vendor bills, customer invoices, payments, deposits, and journal entries."
    }
  ];

  const benefits = [
    {
      title: "MCA Rule 3 Compliance",
      description: "Retain your backups in original, unaltered formats stored on servers physically located inside India. Fulfill all statutory inspection and printing requirements seamlessly.",
      image: "/images/Dashboard/mca_compliance_illustration.png",
      points: [
        "Backups retained in native formats",
        "Data stored in Indian servers via Zoho Books",
        "Ready to display, retrieve and print documents as required"
      ]
    },
    {
      title: "Secure and Automated Daily Backup",
      description: "Ensure complete safety of your financials with fully automated daily schedules hosted on Zoho's enterprise-grade, secure cloud in India.",
      image: "/images/Dashboard/automated_daily_backup.png",
      points: [
        "Daily automated backups of NetSuite financials",
        "Secure storage on India-based cloud servers",
        "Industry-grade AES-256 encryption"
      ]
    },
    {
      title: "Seamless NetSuite-Zoho Integration",
      description: "Direct unidirectional data synchronization from NetSuite to Zoho Books. Minimize failure points and cost by eliminating third-party middleware.",
      image: "/images/Dashboard/netsuite_zoho_integration.png",
      points: [
        "Unidirectional sync prevents data duplication",
        "Zero dependency on external middleware",
        "Built completely inside NetSuite environment"
      ]
    }
  ];

  const checklistItems = [
    { req: "Data accessible in India", status: "Compliant", desc: "Access backups inside India at any time." },
    { req: "Daily backups in native format", status: "Compliant", desc: "Retained daily in official, compliant format." },
    { req: "Unaltered & legible digital records", status: "Compliant", desc: "Tamper-proof digital sync ensures full legibility." },
    { req: "Audit Trail & edit logs (post-April 2023 rule)", status: "Compliant", desc: "Detailed tracking of each entry and modified log." },
    { req: "Service provider & IP details", status: "Compliant", desc: "Maintains full logs of Zoho Books system and IP addresses." }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white text-gray-900">

      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000f22] to-[#001535]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions/addons" className="text-blue-300 hover:text-white transition-colors">Add-Ons</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Data Backup</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">NetSuite India Data Backup Solution</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Stay fully compliant with MCA Rule 3 by securely backing up your global NetSuite data to Indian servers daily.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                  Get Compliant Now
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center"><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-start justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto pb-8">
                {/* Image */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/lap/netsuite_person_using_automated_dashboard.png" alt="IT Manager using NetSuite Data Backup Dashboard" fill className="object-cover object-top" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                {/* Card — straddling the bottom edge, centered */}
                <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0 flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-2xl shadow-blue-900/20 border border-gray-100 w-max">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                    <ShieldCheck className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold leading-tight whitespace-nowrap">MCA Section 128 Compliant Backup</p>
                    <p className="text-gray-500 text-xs mt-0.5 whitespace-nowrap">Automated Daily Sync · Indian Servers · Full Audit Trail</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats Bar */}
          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="border-t border-white/15 pt-8 sm:pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Secondary Navigation */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[
              { label: "Why Data Backup is Critical?", href: "#critical" },
              { label: "Data Sync", href: "#data-sync" },
              { label: "Technical Architecture", href: "#architecture" },
              { label: "Data Security", href: "#security" },
              { label: "Benefits", href: "#benefits" },
              { label: "MCA Rule 3 Checklist", href: "#checklist" }
            ].map(l => (
              <a key={l.href} href={l.href} className="px-3 sm:px-4 py-2 text-sm sm:text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 1: Why Data Backup is Critical? */}
      <section id="critical" className="py-20 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="w-full flex items-center justify-center rounded-2xl p-1">
              <Image src="/images/Dashboard/netsuite data backup dashboard.jpg" alt="NetSuite Zoho Books backup dashboard mockup" width={1800} height={1100} sizes="(max-width: 768px) 100vw, 60vw" className="w-full h-auto rounded-2xl object-contain border-4 border-indigo-100 shadow-2xl shadow-indigo-900/15" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">

              <h2 className="text-2xl sm:text-3xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-slate-800 to-blue-600 leading-tight">
                Why Data Backup is Critical for Organizations Running on NetSuite and having Subsidiaries in India?
              </h2>
              <div className="h-[2px] bg-gradient-to-r from-blue-500 to-indigo-300 w-24 rounded-full" />
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                In today’s regulatory environment, companies operating in India must comply with MCA Rule 3 under Section 128 of the Companies Act, 2013, which mandates electronic records and backups to be stored within India. For NetSuite users—whose servers are located globally—this creates a data compliance challenge.              </p>
              <div className="p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-xl">
                <p className="text-gray-700 font-medium">
                  AGSuite Technologies provides a compliant, secure, and seamless backup solution by integrating NetSuite with Zoho Books, ensuring that your financial data is synced and backed up daily on secure Indian servers.
                </p>
              </div>
              <div className="pt-2">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-900 to-blue-700 text-white hover:from-blue-800 hover:to-blue-600">
                  <span>Speak with a Consultant</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Data Sync */}
      <section id="data-sync" className="py-20 bg-gradient-to-b from-gray-50 to-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center max-w-3xl mx-auto mb-16">

            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4 mb-4">What’s Included in the Data Sync?</h2>
            <p className="text-gray-600 text-base sm:text-lg">Our integration ensures that all critical financial metadata and active operations sync directly from your NetSuite ERP to Zoho Books servers in India.</p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-16 items-center">
            {/* Table */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Sync Entities</th>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase tracking-wider">Scope and Mapping Description</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {syncData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900 flex items-center gap-3">
                        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full shrink-0" />
                        {row.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 leading-normal">{row.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>

            {/* Illustration Image */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="relative flex items-center justify-center p-4">
              <div className="relative w-full h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image src="/images/zoho-dashboards/zoho-flow-dashboard.png" alt="NetSuite to Zoho Books sync structure mapping" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Architecture */}
      <section id="architecture" className="py-24 bg-gradient-to-br from-[#000814] via-[#000f22] to-[#001535] text-white scroll-mt-36 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left side Image */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
              <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10 border border-white/10">
                <Image src="/images/lap/netsuitelap2.png" alt="Technical Integration Architecture Screen" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </motion.div>

            {/* Right side Info */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">

              <h2 className="text-3xl sm:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-cyan-300 leading-tight">
                Technical Architecture
              </h2>
              <p className="text-gray-300 text-base sm:text-lg">
                Engineered with high performance and platform native integrity. Safe daily uploads ensure Zoho cloud infrastructure replicates and stores transaction records without touching your production speeds.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4">
                {[
                  { title: "Built entirely within NetSuite", desc: "Executes natively via SuiteScripts without external triggers.", icon: Layers },
                  { title: "Utilizes Zoho Books’ open API", desc: "Safe, secure REST API connectors for reliable transport.", icon: Cpu },
                  { title: "Real-time & scheduled updates", desc: "Fully configurable schedules based on transactional volumes.", icon: RefreshCw },
                  { title: "Designed to scale", desc: "Built to process millions of transactions without data mismatch.", icon: Server }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="shrink-0 p-2.5 bg-blue-900/40 rounded-xl border border-blue-700/30 self-start">
                      <item.icon className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm sm:text-base mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4: Data Security */}
      <section id="security" className="py-20 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Security Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="space-y-6">

              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight">
                Data Security & Compliance
              </h2>
              <div className="h-[2px] bg-gradient-to-r from-blue-600 to-indigo-400 w-24 rounded-full" />


              <div className="space-y-4 pt-2">
                <div className="bg-gray-50 border border-gray-100 p-5 rounded-2xl shadow-sm">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                    Our Integration Ensures:
                  </h4>
                  <ul className="space-y-2.5 pl-7 list-disc text-sm sm:text-base text-gray-600 font-medium">
                    <li><strong>End-to-end encryption</strong> in transit and storage</li>
                    <li><strong>Access-controlled sync</strong> with role-based policies</li>
                    <li><strong>Storage in India</strong> physical Zoho Books local servers</li>
                    <li><strong>Full audit trails</strong>, edit logs, and database version tracking</li>
                  </ul>
                </div>

                <div className="bg-blue-50/50 border border-blue-100/60 p-5 rounded-2xl">
                  <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                    <Scale className="w-5 h-5 text-blue-600" />
                    Regulatory Compliance Standards:
                  </h4>
                  <ul className="space-y-2.5 pl-7 list-disc text-sm sm:text-base text-blue-800 font-semibold">
                    <li>MCA Section 128, Rule 3 (1)-(6) compliance</li>
                    <li>IT Act, 2000 definitions of authentic electronic records</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Security Image */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="flex items-center justify-center">
              <div className="relative w-full h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image src="/images/lap/lap8_11zon.webp" alt="Data Security Shield Compliance Concept" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: Benefits */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium mt-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Key Benefits</h3>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            {/* Dynamic Image Side */}
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Interactive Buttons Side */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-3 justify-center backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button key={index} onClick={() => setActiveBenefit(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col justify-center px-6 py-5 text-left rounded-2xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-2xl border-l-4 border-blue-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 p-2.5 rounded-xl transition-all ${activeBenefit === index ? 'text-blue-600 bg-blue-50' : 'text-gray-400 bg-white/5 group-hover:text-gray-200 group-hover:bg-white/10'}`}>
                      {index === 0 && <Scale size={20} />}
                      {index === 1 && <HardDrive size={20} />}
                      {index === 2 && <RefreshCw size={20} />}
                    </div>
                    <span className={`text-base sm:text-lg flex-1 font-bold transition-all ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-4 pl-12">
                      <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-4">{item.description}</p>
                      <ul className="space-y-2">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-600">
                            <Check size={14} className="text-blue-600 mt-0.5 shrink-0" />
                            {pt}
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

      {/* Section 6: MCA Rule 3 Checklist */}
      <section id="checklist" className="py-20 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mt-4 mb-4">MCA Rule 3 Checklist (Compliant via Zoho Books)</h2>
            <p className="text-gray-600 text-base sm:text-lg">Review how our Zoho Books storage model guarantees direct alignment with every structural demand of MCA Rule 3.</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
            {/* Left side checklist visual */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex items-center justify-center">
              <div className="relative w-full h-[360px] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                <Image src="/images/lap/lap6_11zon.webp" alt="Auditable Financial Checklists Mockup Screen" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
            </motion.div>

            {/* Checklist Table */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="overflow-hidden rounded-2xl border border-gray-200 shadow-xl bg-white">
              <div className="bg-gradient-to-r from-blue-900 to-indigo-900 px-6 py-4 text-white">
                <h4 className="font-bold text-lg">Requirements Grid</h4>
              </div>
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="bg-white divide-y divide-gray-100">
                  {checklistItems.map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/50 transition-colors">
                      <td className="px-6 py-4 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <div>
                          <div className="text-sm font-bold text-gray-900">{item.req}</div>
                          <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0891b2] shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div key={i} className="absolute bg-white rounded-full opacity-30" style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />
              ))}
            </div>

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Ready to Stay Compliant?</h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">Connect with AGSuite today to implement your NetSuite Data Backup solution with minimal effort and full compliance!</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95">
                Connect with AGSuite <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <div id="contact-form">
        <ContactFormDesign4 />
      </div>
    </div>
  );
}
