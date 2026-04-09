"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck, HardDrive, RefreshCw, Lock, Zap, ArrowRight, Check, ChevronRight,
  BarChart3, Cloud, Database, History, CheckCircle2,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const pageFaqs = [
    { q: "Does NetSuite back up my data automatically?", a: "NetSuite provides platform-level disaster recovery but does NOT allow you to restore individual records you accidentally delete, scripts you overwrite, or data corrupted by a bad integration. Our solution fills that critical gap with granular, record-level backup and recovery." },
    { q: "What can I restore — individual records or entire environments?", a: "Both. You can restore a single accidentally-deleted customer record, an entire parent-child transaction hierarchy, or a full environment restore to a point in time. You can also restore your entire backup into a NetSuite Sandbox account for testing." },
    { q: "How often are backups taken?", a: "Backups are taken automatically every day. For Enterprise plans, near-real-time sync options are available. All backups run completely automatically — no scheduling or manual triggers required from your team." },
    { q: "Where is backup data stored?", a: "All backup data is stored in geographically separate, Tier-IV cloud infrastructure (AWS, Azure, or Google Cloud) — completely isolated from your NetSuite production environment with full encryption at rest and in transit." },
    { q: "Does the backup include SuiteScripts and custom configurations?", a: "Yes. Unlike basic data exports, our solution backs up your SuiteScript files, custom record types, saved searches, workflows, email templates, and all system configurations — not just transactional data." },
    { q: "Is the backup solution GDPR and HIPAA compliant?", a: "Yes. All backups use AES-256 encryption, GDPR-compliant data handling, HIPAA-ready access controls, and tamper-proof audit logs. Role-based access ensures only authorized users can view or initiate restores." },
    { q: "How does it protect against ransomware?", a: "Backup copies are stored as immutable, air-gapped snapshots completely separate from your production NetSuite environment. A ransomware attack on your systems cannot encrypt or delete these backup copies." },
    { q: "How quickly can I recover data after an incident?", a: "Small dataset recoveries (single records or small batches) typically complete within 15 minutes. Larger environment restores depend on data volume but are always significantly faster than manual reconstruction." },
  ];

  const stats = [
    { label: "Data Availability", value: 100, suffix: "%", icon: HardDrive },
    { label: "Uptime Guarantee", value: 99, suffix: ".9%", icon: Cloud },
    { label: "Recovery Time", value: 15, suffix: "min", icon: Zap },
    { label: "Encryption Level", value: 256, suffix: "bit", icon: Lock },
  ];

  const modules = [
    { title: "Automated Daily Backups", description: "Full environment snapshots captured every day without any manual intervention or scheduling.", image: "/images/modules/dashboard module.webp", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "Point-in-Time Recovery", description: "Restore your data to any exact moment in time — undo accidental deletions or bulk errors instantly.", image: "/images/modules/dashbord module.webp", color: "#065f46", rgb: "6,95,70" },
    { title: "Granular Restore", description: "Restore individual records or entire parent-child hierarchies without touching unaffected data.", image: "/images/modules/working module.webp", color: "#7c2d12", rgb: "124,45,18" },
    { title: "Ransomware Protection", description: "Immutable, air-gapped backups that safeguard your critical business records from external threats.", image: "/images/modules/any module.webp", color: "#4c1d95", rgb: "76,29,149" },
    { title: "Multi-Cloud Storage", description: "Choose storage on AWS, Azure, or Google Cloud with geographic redundancy for ultimate data safety.", image: "/images/modules/any modules.webp", color: "#0c4a6e", rgb: "12,74,110" },
    { title: "Off-Site Redundancy", description: "Maintain an independent copy of your NetSuite data in a secure, geographically separate cloud.", image: "/images/modules/module8.webp", color: "#713f12", rgb: "113,63,18" },
    { title: "Version History", description: "Maintain a deep history of record changes for historical analysis and regulatory audit purposes.", image: "/images/modules/sheet module.webp", color: "#134e4a", rgb: "19,78,74" },
    { title: "Audit Log Tracking", description: "Complete visibility into who accessed or restored what data, when, and from what IP address.", image: "/images/modules/csm modules.webp", color: "#831843", rgb: "131,24,67" },
    { title: "Sandbox Restore", description: "Restore production data into any of your NetSuite Sandbox accounts for testing or development.", image: "/images/modules/managging together module.webp", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "Statutory Reporting", description: "Export data in formats ready for legal discovery, regulatory audits, and compliance reporting.", image: "/images/modules/account modules.webp", color: "#064e3b", rgb: "6,78,59" },
    { title: "Script & Config Backup", description: "Back up all SuiteScript, custom records, and system configurations — not just transactional data.", image: "/images/modules/chatt mdoule.webp", color: "#78350f", rgb: "120,53,15" },
    { title: "Compliance Ready", description: "AES-256 encryption, GDPR and HIPAA controls, and complete audit trails for all major standards.", image: "/images/modules/mobile module.webp", color: "#3b0764", rgb: "59,7,100" },
  ];

  const benefits = [
    { title: "Point-in-Time Recovery", description: "NetSuite itself does not let you restore individual records you accidentally delete. Our backup solution gives you granular, record-level recovery to any point in time — in minutes, not days.", image: "/images/people/laptopmen2.webp", points: ["Restore any individual record", "Any point-in-time recovery", "Recover parent-child hierarchies", "15-minute restore for small datasets"] },
    { title: "Ransomware & Threat Protection", description: "Immutable backup copies that cannot be encrypted or deleted by ransomware — stored completely separately from your NetSuite production environment with zero access overlap.", image: "/images/lap/lap4.webp", points: ["Immutable backup storage", "Air-gapped copy from production", "Threat detection alerts", "Immediate incident response restore"] },
    { title: "Off-Site Redundancy", description: "All backups are stored in geographically separate cloud infrastructure — meaning a regional outage or disaster at one data center cannot affect your backup availability or recovery capability.", image: "/images/lap/lap3.webp", points: ["Multi-region backup storage", "Geographic disaster resilience", "Tier-IV data center hosting", "99.9% backup availability"] },
    { title: "Full Configuration Backup", description: "Unlike basic data exports, our solution also backs up your SuiteScript files, custom records, saved searches, workflows, and system configurations — the entire NetSuite environment.", image: "/images/lap/lap2.webp", points: ["SuiteScript and SuiteFlow", "Custom record types and fields", "Saved searches and reports", "Email templates and system settings"] },
    { title: "Audit & Compliance Ready", description: "Full encryption at rest and in transit, complete access logs, and data retention controls that meet GDPR, HIPAA, SOC 2, and major global compliance frameworks out of the box.", image: "/images/people/fourteam.webp", points: ["AES-256 encryption", "GDPR and HIPAA controls", "Role-based access to restores", "Tamper-proof audit logs"] },
    { title: "Zero-Effort Automation", description: "Backups run fully automatically every day — no scheduling, no manual triggers, no maintenance overhead. Your data is always protected without any action required from your team.", image: "/images/lap/lap5.webp", points: ["Daily automatic backups", "No manual scheduling", "Automated failure alerts", "Managed backup operations"] },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000f22] to-[#001535]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Add-Ons</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Data Backup</span>
          </motion.nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: 'calc(100vh - 150px)' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">NetSuite Data Backup</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Protect your business-critical NetSuite data with automated, off-site, encrypted backups — and recover any record in minutes when the unexpected happens.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl hover:scale-105">
                  Secure Your Data
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center"><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/lap/lap4.webp" alt="Data Backup" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                      <ShieldCheck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">Enterprise NetSuite Data Protection</p>
                      <p className="text-gray-500 text-xs mt-0.5">Backup · Recovery · Encryption · Compliance · Audit</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite Data Backup & Recovery</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">AES-256 · Off-Site · Granular · GDPR-Ready</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="border-t border-white/15 pt-5 sm:pt-6">
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

      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {[{ label: "What is Data Backup?", href: "#what-is" }, { label: "Capabilities", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="flex items-center justify-center rounded-2xl p-4 mt-15" style={{ minHeight: 340 }}>
              <Image src="/images/netsuiteimages/solutions/NetsuiteSRP.webp" alt="Data Backup" width={560} height={380} className="w-full h-auto rounded-xl object-contain" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6 mt-15">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                What NetSuite Doesn't Back Up — We Do.
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">NetSuite provides platform-level disaster recovery — but it does NOT let you restore individual records you accidentally delete, scripts you overwrite, or data corrupted by a bad integration. Our backup solution fills that gap completely.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Every day, automatically, your entire NetSuite environment is backed up off-site with AES-256 encryption — so you can recover anything, at any granularity, in minutes.</p>
              <div className="pt-4">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: '#ffffff' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff'; (e.currentTarget as HTMLAnchorElement).style.color = '#1e3a8a'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)'; (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}>
                  <span>Explore Data Backup</span>
                  <motion.span className="flex items-center" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}><ArrowRight size={17} strokeWidth={2.5} /></motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">Backup & Recovery Capabilities</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">12 enterprise-grade capabilities to protect every dimension of your NetSuite environment</motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }} whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white" style={{ minHeight: 340 }}>
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)` }} />
                  </div>
                  <div className="flex-1 p-5 pb-6 flex flex-col relative" style={{ backgroundColor: `rgb(${mod.rgb})` }}>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">{mod.title}</h4>
                      <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">{mod.description}</p>
                    </div>
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">Explore <ArrowRight size={10} /></span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Why Organizations Trust Our Backup Solution</h3>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button key={index} onClick={() => setActiveBenefit(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-blue-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <History size={20} />}{index === 1 && <ShieldCheck size={20} />}{index === 2 && <Cloud size={20} />}
                      {index === 3 && <Database size={20} />}{index === 4 && <CheckCircle2 size={20} />}{index >= 5 && <RefreshCw size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (<li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}</li>))}
                      </ul>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d1a' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-blue-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does Data Backup Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">NetSuite Data Backup is priced based on your NetSuite data volume and retention period requirements. We offer Safe, Secure, and Enterprise tiers — with 90-day to unlimited retention, standard or real-time sync, and optional dedicated success management. All plans include AES-256 encryption and off-site storage. Contact our team for a tailored quote.</p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-blue-400 hover:text-white transition-all duration-200 shadow-md">
                    Talk to a Security Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#001022]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#002040]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#003060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl1.webp" alt="Data Backup Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite Data Backup & Recovery — granular restore, encryption, compliance, and ransomware protection."
        customFaqs={[
          { q: "Does NetSuite back up my data automatically?", a: "NetSuite provides platform-level disaster recovery but does NOT allow you to restore individual records you accidentally delete, scripts you overwrite, or data corrupted by a bad integration. Our solution fills that critical gap with granular, record-level backup and recovery." },
          { q: "What can I restore — individual records or entire environments?", a: "Both. You can restore a single accidentally-deleted customer record, an entire parent-child transaction hierarchy, or a full environment restore to a point in time. You can also restore your entire backup into a NetSuite Sandbox account for testing." },
          { q: "How often are backups taken?", a: "Backups are taken automatically every day. For Enterprise plans, near-real-time sync options are available. All backups run completely automatically — no scheduling or manual triggers required from your team." },
          { q: "Where is backup data stored?", a: "All backup data is stored in geographically separate, Tier-IV cloud infrastructure (AWS, Azure, or Google Cloud) — completely isolated from your NetSuite production environment with full encryption at rest and in transit." },
          { q: "Does the backup include SuiteScripts and custom configurations?", a: "Yes. Unlike basic data exports, our solution backs up your SuiteScript files, custom record types, saved searches, workflows, email templates, and all system configurations — not just transactional data." },
          { q: "Is the backup solution GDPR and HIPAA compliant?", a: "Yes. All backups use AES-256 encryption, GDPR-compliant data handling, HIPAA-ready access controls, and tamper-proof audit logs. Role-based access ensures only authorized users can view or initiate restores." },
          { q: "How does it protect against ransomware?", a: "Backup copies are stored as immutable, air-gapped snapshots completely separate from your production NetSuite environment. A ransomware attack on your systems cannot encrypt or delete these backup copies." },
          { q: "How quickly can I recover data after an incident?", a: "Small dataset recoveries (single records or small batches) typically complete within 15 minutes. Larger environment restores depend on data volume but are always significantly faster than manual reconstruction." },
        ]}
      />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] via-[#2563eb] to-[#0891b2] shadow-2xl">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div key={i} className="absolute bg-white rounded-full" style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />
              ))}
            </div>
            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">Protect Your NetSuite Data — <span className="text-cyan-200">Start Today.</span></h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">Join organizations protecting their NetSuite environment with automated, encrypted, off-site backups — and recovering from incidents in minutes, not days.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95">
                Secure My Data <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
