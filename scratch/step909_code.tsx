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
      image: "/images/Dashboard/data_backup_benefit_mca_compliance.png",
      points: [
        "Backups retained in native formats",
        "Data stored in Indian servers via Zoho Books",
        "Ready to display, retrieve and print documents as required"
      ]
    },
    {
      title: "Secure and Automated Daily Backup",
      description: "Ensure complete safety of your financials with fully automated daily schedules hosted on Zoho's enterprise-grade, secure cloud in India.",
      image: "/images/Dashboard/data_backup_benefit_daily_backup.png",
      points: [
        "Daily automated backups of NetSuite financials",
        "Secure storage on India-based cloud servers",
        "Industry-grade AES-256 encryption"
      ]
    },
    {
      title: "Seamless NetSuite-Zoho Integration",
      description: "Direct unidirectional data synchronization from NetSuite to Zoho Books. Minimize failure points and cost by eliminating third-party middleware.",
      image: "/images/Dashboard/data_backup_benefit_integration.png",
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
            <span className="text-white/80">NetSuite India Data Backup Solution</span>
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

      {/* Section 1: Overview / Why Data Backup is Critical */}
      <section id="critical" className="pt-20 pb-20 bg-white scroll-mt-36">
        <div className="max-w-[85rem] mx-auto px-8 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border border-gray-100 min-h-[400px]"
            >
              <Image
                src="/images/Dashboard/mca_rule_3_compliance_dashboard.png"
                alt="MCA Rule 3 Compliance Dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-between py-6 h-full"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-[38px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-600 leading-tight">
                  Why Data Backup is Critical for Organizations Running on NetSuite and having Subsidiaries in India?
                </h2>
              </div>

              <div className="space-y-6 pt-2 md:pt-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  In today’s regulatory environment, companies operating in India must comply with MCA Rule 3 under Section 128 of the Companies Act, 2013, which mandates electronic records and backups to be stored within India. For NetSuite users—whose servers are located globally—this creates a data compliance challenge.
                </p>
                <p className="text-base text-gray-600 leading-relaxed font-medium text-gray-800">
                  AGSuite Technologies provides a compliant, secure, and seamless backup solution by integrating NetSuite with Zoho Books, ensuring that your financial data is synced and backed up daily on secure Indian servers.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: '#ffffff' }}
                >
                  <span>Ensure Compliance</span>
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

      {/* Section 2: What’s Included in the Data Sync? */}
      <section id="data-sync" className="py-20 bg-gray-50 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">What’s Included in the Data Sync?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our integration ensures that all critical financial metadata and active operations sync directly from your NetSuite ERP to Zoho Books servers in India.
            </p>
          </motion.div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white text-base">
                    <th className="py-4 px-6 font-bold">Data Type</th>
                    <th className="py-4 px-6 font-bold">Scope of Sync</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {syncData.map((row, index) => (
                    <tr key={index} className="hover:bg-blue-50/50 transition-colors">
                      <td className="py-4 px-6 font-bold text-gray-900 whitespace-nowrap">{row.name}</td>
                      <td className="py-4 px-6">{row.scope}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Technical Architecture */}
      <section id="architecture" className="py-20 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Technical Architecture</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Engineered with high performance and platform native integrity. Safe daily uploads ensure Zoho cloud infrastructure replicates and stores transaction records without touching your production speeds.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Built entirely within NetSuite", desc: "Executes natively via SuiteScripts without external triggers.", icon: Code },
              { title: "Utilizes Zoho Books’ open API", desc: "Safe, secure REST API connectors for reliable transport.", icon: Server },
              { title: "Real-time & scheduled updates", desc: "Fully configurable schedules based on transactional volumes.", icon: RefreshCw },
              { title: "Designed to scale", desc: "Built to process millions of transactions without data mismatch.", icon: Cpu }
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Data Security & Compliance */}
      <section id="security" className="py-20 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 text-white relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 mb-4">
              Data Security & Compliance
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-blue-400 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-7 h-7" /> Our Integration Ensures:
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>End-to-end encryption in transit and storage</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Access-controlled sync with role-based policies</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Storage in India physical Zoho Books local servers</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <span>Full audit trails, edit logs, and database version tracking</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-indigo-400 mb-6 flex items-center gap-3">
                <Scale className="w-7 h-7" /> Regulatory Compliance Standards:
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>MCA Section 128, Rule 3 (1)-(6) compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                  <span>IT Act, 2000 definitions of authentic electronic records</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Key Benefits */}
      <section id="benefits" className="py-24 bg-gray-50 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">Key Benefits</h2>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 40vw" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl border border-gray-200 bg-white p-4 flex flex-col gap-2 justify-center shadow-lg">
              {benefits.map((item, index) => (
                <button key={index} onClick={() => setActiveBenefit(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-blue-50 shadow-md border-l-4 border-blue-600' : 'bg-transparent border-l-4 border-transparent hover:bg-gray-50'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <span className={`text-base md:text-lg flex-1 font-semibold ${activeBenefit === index ? 'text-blue-900' : 'text-gray-700'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-400 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3">
                      <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (<li key={pi} className="flex items-start gap-2 text-sm text-gray-700"><Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}</li>))}
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
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">MCA Rule 3 Checklist (Compliant via Zoho Books)</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Review how our Zoho Books storage model guarantees direct alignment with every structural demand of MCA Rule 3.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklistItems.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">{item.status}</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2">{item.req}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#000814] via-[#000f22] to-[#001535] p-10 lg:p-16 text-center text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to Stay Compliant?</h2>
            <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
              Connect with AGSuite today to implement your NetSuite Data Backup solution with minimal effort and full compliance!
            </p>
            <Link href="#contact-form" className="inline-flex items-center gap-3 bg-white text-blue-900 font-bold text-base px-8 py-4 rounded-full shadow-xl hover:bg-blue-50 transition-all hover:scale-105">
              <span>Contact Us Today</span>
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
