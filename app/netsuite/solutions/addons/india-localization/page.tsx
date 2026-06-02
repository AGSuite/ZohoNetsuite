"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  FileText, ShieldCheck, Globe, BarChart3, Zap, Users, ArrowRight, Check,
  ChevronRight, CheckCircle2, TrendingUp, Layers, Receipt, Building2,
  ChevronDown, Calculator, IndianRupee, Clock, Calendar, Search,
  UserCheck, Smartphone, Truck, FileSpreadsheet, Briefcase
} from "lucide-react";
import dynamic from "next/dynamic";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";

const IndiaComplianceCircle = dynamic(() => import("./components/IndiaComplianceCircle"), {
  ssr: false,
});

const PARTICLES = [
  { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 },
  { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
  { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 },
  { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 },
  { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 },
  { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 }
];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) spring.set(value); else spring.set(0); }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function IndiaLocalizationPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "GST Compliance Coverage", value: 100, suffix: "%", icon: ShieldCheck },
    { label: "E-Invoice Automation", value: 99, suffix: "%", icon: FileText },
    { label: "Tax Types Supported", value: 12, suffix: "+", icon: Receipt },
    { label: "Compliance Accuracy", value: 100, suffix: "%", icon: CheckCircle2 },
  ];

  const modules = [
    {
      title: "Efficient GST Management",
      description: "Our platform automates GST compliance through customized configuration of location, vendor, customer, and HSN code details. It handles tax calculations and filing for GSTR1, 2, 3B filings, and identifies transaction types. Additionally, the platform also provides separate CGST and SGST accounts to streamline organizational tax management.",
      image: "/images/modules/gst_management.png",
      rgb: "30,58,138"
    },
    {
      title: "GST Advanced Features",
      description: "GSTIN Validation and GSTR 2B Reconciliation within NetSuite. Ensure your tax filings are accurate and your vendors are compliant with real-time validation and automated reconciliation tools.",
      image: "/images/modules/gst_validation.png",
      rgb: "6,95,70"
    },
    {
      title: "Streamlined TDS Compliance",
      description: "Our platform streamlines TDS management through customized setup of company, subsidiary and vendor details. It automates TDS calculations per government rules and vendor types for accuracy and compliance. The platform manages threshold limits and PAN rules, generates Form 26Q, and enables automatic GL posting to designated accounts.",
      image: "/images/modules/tds_compliance.png",
      rgb: "124,45,18"
    },
    {
      title: "TDS Advanced Features",
      description: "TDS on Vendor PrePayment, TDS Challan, TXT File Generation for eTDS Return, 194Q & 206(1H). Handle complex TDS scenarios with automated processes for prepayments and statutory file generation.",
      image: "/images/modules/tds_advanced.png",
      rgb: "76,29,149"
    },
    {
      title: "Auto TCS Calculation",
      description: "TCS details setup on company/subsidiary, TCS detail setup on Customer records. Automatic tax calculation of TCS based on government rules, automatic GL posting in specific TCS Accounts. TCS Report: Form 27EQ.",
      image: "/images/modules/tcs_calculation.png",
      rgb: "12,74,110"
    },
    {
      title: "E-Invoicing",
      description: "Integrates NetSuite with E-invoice Portal via our GSP Partner. Invoices created in NetSuite are validated and sent to E-invoice Portal in JSON Format via APIs. IRN and QR Code is generated and received back to NetSuite automatically. QR code is printed on existing invoice PDF.",
      image: "/images/modules/e_invoicing.png",
      rgb: "113,63,18"
    },
    {
      title: "E-Way Bill",
      description: "NetSuite Integration with E-Way Bill Portal. E-Way Bill Registration, EBN Generation, receipt and store on the invoice record in NetSuite. Print E-Way Bill PDF, support B2B, B2C, Export, Error Handling and detailed Reports.",
      image: "/images/modules/eway_bill.png",
      rgb: "19,78,74"
    },
    {
      title: "Vendor Statement",
      description: "Easily generate detailed vendor statements, enabling clear visibility into outstanding balances, transaction history, and payment schedules, enhancing transparency and vendor relations.",
      image: "/images/modules/vendor_statement.png",
      rgb: "131,24,67"
    },
    {
      title: "MSME Reporting",
      description: "Access streamlined reporting tailored for MSME compliance, facilitating accurate tracking and timely submissions in accordance with regulatory standards for small and medium-sized enterprises.",
      image: "/images/modules/msme_reporting.png",
      rgb: "30,58,138"
    },
    {
      title: "Compliance Calendar and Reminders",
      description: "Stay compliant effortlessly with an integrated calendar that schedules key deadlines, providing timely reminders to avoid missed filings and penalties.",
      image: "/images/modules/compliance_calendar.png",
      rgb: "6,78,59"
    },
    {
      title: "Audit Related Reports",
      description: "Generate audit-ready reports with ease, ensuring accuracy and completeness in financial documentation, simplifying the audit process and fostering regulatory compliance.",
      image: "/images/modules/audit_reports.png",
      rgb: "120,53,15"
    },
  ];

  const benefits = [
    {
      title: "Enhanced Compliance",
      description: "Automated GST, TDS, and TCS calculations ensure adherence to India’s tax regulations, minimizing compliance risks.",
      image: "/images/modules/benefit_compliance.png",
      points: ["100% GST Regulation compliance", "Real-time IRP integration", "Automated TDS/TCS calculation", "Minimize compliance risks"],
    },
    {
      title: "Streamlined Operations",
      description: "E-invoicing, e-way bill management, and vendor statements simplify transaction processing and reduce administrative workload.",
      image: "/images/modules/benefit_operations.png",
      points: ["Automated e-invoicing", "E-way bill management", "Simplified vendor statements", "Reduced administrative workload"],
    },
    {
      title: "Accurate Reporting",
      description: "MSME reporting, audit-ready reports, and advanced tax features provide precise, real-time insights to support business decisions.",
      image: "/images/modules/benefit_reporting.png",
      points: ["MSME compliance reporting", "Audit-ready financial reports", "Real-time business insights", "Precise data tracking"],
    },
    {
      title: "Automated Reminders",
      description: "Compliance calendar and timely reminders help your team stay on top of regulatory deadlines without manual tracking.",
      image: "/images/modules/compliance_calendar.png",
      points: ["Integrated compliance calendar", "Automated deadline reminders", "Avoid missed filings", "No more manual tracking"],
    },
    {
      title: "Seamless Integration",
      description: "The platform integrates smoothly with NetSuite, allowing your business to achieve efficient operations on a single, unified system.",
      image: "/images/modules/unified_platform.png",
      points: ["Native NetSuite integration", "Single unified system", "Smooth data flow", "Optimized cloud operations"],
    },
  ];

  const challenges = [
    {
      title: "Compliance Complexity",
      description: "India Localization for NetSuite simplifies compliance by providing a customizable, cloud-based solution tailored to meet the specific GST and TDS requirements of Indian businesses.",
      image: "/images/netsuiteimages/india_tax_compliance_complexity.png"
    },
    {
      title: "Data Accuracy and Compliance Risk",
      description: "India Localization for NetSuite automates tax calculations and transaction identification, reducing the risk of inaccuracies and ensuring compliance with regulatory requirements.",
      image: "/images/netsuiteimages/data_accuracy_compliance_risk.png"
    },
    {
      title: "Scalability and Adaptability",
      description: "India Localization for NetSuite offers scalability and flexibility to accommodate the changing needs of businesses, allowing them to seamlessly adjust to new GST and TDS regulations and scale their operations without disruption.",
      image: "/images/netsuiteimages/scalability_and_adaptability.png"
    }
  ];

  const CARD_BG = "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)";

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex flex-col" style={{ background: "linear-gradient(135deg,#000814,#000f22,#001535)" }}>
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">

          {/* Breadcrumb — absolutely positioned so it doesn't affect centering */}
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions/addons" className="text-blue-300 hover:text-white transition-colors">Add-Ons</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">India Localization</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6" style={{ minHeight: '500px' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  Streamlined Tax Management With AGSuite India Localization for NetSuite
                </span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8">
                Full Indian tax compliance inside NetSuite — GST automation, e-invoicing with IRP, TDS/TCS management, e-Way Bills, and GSTR filing reports. Built for Indian businesses running on NetSuite.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                  Get in Touch
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center">
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Right — India Compliance Circular Diagram */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              <IndiaComplianceCircle />
            </motion.div>
          </div>

          {/* STATS */}
          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="border-t border-white/15 pt-8 sm:pt-10">
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

      {/* STICKY NAV */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[
              ["What is India Localization for NetSuite?", "#what-is"],
              ["Modules", "#modules"],
              ["Benefits", "#benefits"],
              ["Challenges", "#challenges"],
              ["FAQ", "#faq"]
            ].map(([label, href]) => (
              <a key={href} href={href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* WHAT IS */}
      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
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
                    src="/images/Dashboard/indian localization 2 dashboard.jpg"
                    alt="NetSuite India Localization Solution Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-between py-6 h-full"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                  Simplify Compliance with India Localization for NetSuite.
                </h2>
              </div>
              <div className="space-y-2 my-auto pt-2 md:pt-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  India Localization for NetSuite simplifies the complexities of Indian tax regulations, providing a cloud-native solution for GST, TDS, and statutory compliance. As a specialized India Localization for NetSuite partner, we help businesses automate e-invoicing via IRP, e-way bills, and GSTR reporting within a single unified platform.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  By integrating seamlessly with your core ERP, our solution ensures accuracy in multi-state GSTIN management and TCS calculations. Stay ahead of regulatory changes with automated compliance reminders and audit-ready reports, allowing your finance team to focus on strategic growth.
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: '#ffffff' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#1e3a8a';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 25px -5px rgba(30, 58, 138, 0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Get India Localization for NetSuite</span>
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

      {/* MODULES GRID */}
      <section id="modules" className="py-16 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-medium text-gray-900 text-center">India Localization for NetSuite Compliance Modules</motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8 items-start">
            {modules.map((mod, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative flex flex-col rounded-2xl shadow-lg transition-all duration-300 z-10 hover:z-20 min-h-[380px]"
                style={{ backgroundColor: `rgb(${mod.rgb})` }}
              >
                <div className="flex flex-col h-full w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out">
                  <div className="relative h-56 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom,transparent 0%,rgba(${mod.rgb},0.4) 70%,rgba(${mod.rgb},1) 100%)` }} />
                  </div>
                  <div className="flex-1 p-5 flex flex-col relative transition-all duration-500">
                    <h4 className="text-white font-bold text-lg mb-2 line-clamp-2">{mod.title}</h4>
                    <div className={`relative overflow-hidden transition-all duration-500 group-hover:max-h-[500px] ${mod.title.length > 22 ? 'max-h-[6rem]' : 'max-h-[7.5rem]'}`}>
                      <p className={`text-white/90 text-sm leading-snug group-hover:line-clamp-none transition-all duration-500 ${mod.title.length > 22 ? 'line-clamp-4' : 'line-clamp-5'}`}>
                        {mod.description}
                      </p>
                    </div>
                    <div className="mt-auto opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 overflow-hidden max-h-0 group-hover:max-h-[100px]">
                      <div className="pt-4">
                        <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase text-[10px] px-3 py-1.5 rounded-full shadow-md hover:bg-blue-50 transition-colors">
                          Learn More <ArrowRight size={10} />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHALLENGES AND SOLUTIONS */}
      <section id="challenges" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <span className="bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Global Hurdles</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mt-6 mb-4">Addressing Global Challenges</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">How our India Localization for NetSuite solution solves critical compliance hurdles for growing enterprises.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {challenges.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group flex flex-col rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <h4 className="text-white font-bold text-xl">{item.title}</h4>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36" style={{ background: CARD_BG }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle,rgba(37,99,235,0.25) 0%,transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-8">
            <h3 className="text-3xl md:text-5xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Key Benefits of India Localization for NetSuite
            </h3>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill priority className="object-cover object-center" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center">
              {benefits.map((item, index) => (
                <button key={index} onClick={() => setActiveBenefit(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-blue-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 ? <ShieldCheck size={20} /> : index === 1 ? <Zap size={20} /> : index === 2 ? <TrendingUp size={20} /> : <BarChart3 size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">{item.points.map((pt, pi) => (<li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}</li>))}</ul>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* FAQ */}
      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite India Localization — GST, e-invoicing, TDS, e-Way Bills, and compliance timelines."
        customFaqs={[
          { q: "How does India Localization for NetSuite simplify GST compliance for businesses?", a: "India Localization for NetSuite automates GST reporting, including GSTR1, GSTR2, and GSTR 3B, and provides configurable GST rules based on factors such as location, customer type, and transaction type. This simplifies GST compliance by streamlining tax calculations and reporting processes." },
          { q: "Can India Localization for NetSuite integrate with existing accounting systems?", a: "Yes, India Localization for NetSuite can be seamlessly integrated with NetSuite, providing businesses with a comprehensive tax management solution that integrates with their existing accounting systems. This integration ensures smooth data flow and eliminates the need for manual data entry." },
          { q: "How does India Localization for NetSuite mitigate the risk of TDS non-compliance?", a: "India Localization for NetSuite automates TDS calculations and reporting, including Income Tax Form 26Q, and provides support for threshold management and PAN rule compliance. By automating TDS processes and ensuring accurate tax calculations, India Tax Solution helps businesses mitigate the risk of TDS non-compliance and avoid penalties." },
          { q: "Does NetSuite support GST natively?", a: "NetSuite has basic tax capabilities, but Indian GST requires specific localization for CGST/SGST/IGST computation, HSN/SAC codes, RCM, ITC registers, and GSTR reports. Our India Localization Add-On extends NetSuite with all these capabilities natively, without any third-party middleware." },
          { q: "Is e-invoicing mandatory for our business?", a: "E-invoicing is mandatory for GST-registered businesses with aggregate turnover above ₹5 crore (as of 2024). Our solution automatically determines which transactions require e-invoicing, generates the IRP-compliant JSON, submits to the Invoice Registration Portal, and embeds the IRN and QR code on your NetSuite invoice PDF." },
          { q: "How does TDS automation work inside NetSuite?", a: "When a payment or expense is posted in NetSuite, the India Localization Add-On evaluates whether TDS applies based on the payment category, section, and cumulative threshold. The applicable rate is deducted automatically, a TDS ledger entry is posted, and Form 16/16A certificates and 26Q/27Q filing data are generated at quarter-end." },
          { q: "Can we manage multiple GSTINs across different states?", a: "Yes. The solution supports unlimited GSTIN registrations within a single NetSuite account — each with its own GST ledger, ITC register, GSTR filing schedule, and inter-state transaction logic. Multi-state organisations can manage all compliance from one NetSuite environment." },
          { q: "How are e-Way Bills generated?", a: "E-Way Bills are generated directly from NetSuite delivery orders and invoices via NIC API integration. Transporter details, vehicle number, and consignment value are pulled from the NetSuite transaction, and the e-Way Bill number is embedded back into the shipment record. Bulk generation is supported for high-volume dispatches." },
          { q: "Does the solution handle Input Tax Credit (ITC) reconciliation?", a: "Yes. Our solution maintains a complete ITC register — tracking eligible credits, provisionally claimed credits, and credits to be reversed. Automatic reconciliation with GSTR-2B data identifies mismatches between your purchase register and what's reflected in GSTN records, helping you avoid ITC reversal penalties." },
          { q: "What GSTR returns does the solution generate?", a: "The solution generates filing-ready data for GSTR-1 (outward supplies), GSTR-3B (monthly summary), GSTR-2A/2B (purchase reconciliation), and GSTR-9 (annual return). Reports are generated in the formats prescribed by GSTN, ready for upload to the GST portal or through a GST Suvidha Provider." },
          { q: "How long does implementation take?", a: "A standard India Localization implementation takes 4–6 weeks for a single GSTIN entity — covering GST configuration, HSN/SAC code mapping, IRP credentials setup, TDS section configuration, and user training. Multi-GSTIN or multi-subsidiary implementations typically take 6–10 weeks." },
        ]}
      />

      {/* CTA BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-950">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/netsuiteimages/background/netsuiteCTA.webp"
                alt="CTA Background Image"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              {/* Dark Opacity Layer */}
              <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
              {PARTICLES.map((p, i) => (<motion.div key={i} className="absolute bg-white rounded-full" style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }} animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }} transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }} />))}
            </div>

            <div className="relative z-20 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">Stay GST Compliant — <span className="text-cyan-200">Automate India Tax in NetSuite.</span></h2>
                <p className="text-white/80 text-base md:text-lg">End manual GST calculations, e-invoice filing, and TDS tracking. Our India Localization Add-On keeps your NetSuite environment fully compliant with every GSTN and Income Tax requirement.</p>
              </div>
              <Link href="#contact-form" className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all group active:scale-95">
                Get India Compliance <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}





