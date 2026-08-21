"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  FileSpreadsheet,
  Layers,
  FileCheck2,
  QrCode,
  Building2,
  Landmark,
  FileText,
  Percent,
  CalendarCheck,
} from "lucide-react";

export default function LocalizationModules() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeIdx, setActiveIdx] = useState<number>(-1);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElem = document.getElementById("home");
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const modules = [
    {
      id: "multi-book",
      title: "Multi-Book Accounting Support",
      desc: "Enable concurrent accounting under multiple books (such as Indian GAAP and US GAAP / IFRS) to satisfy local statutory compliance and corporate group standards simultaneously, automating separate tax treatment mapping and GL entry posting.",
      image: "/images/modules/gbm multi gaap.png",
      tag: "Statutory Accounting",
      icon: <Layers className="w-8 h-8" />,
    },
    {
      id: "multi-gstin",
      title: "Multi Entity / Multi GSTIN Management",
      desc: "Manage multiple GST registration numbers (GSTINs) across different states within a single NetSuite instance. Automatically associate transactions with correct GSTINs, compute state-specific taxes, and generate consolidated reports.",
      image: "/images/modules/gbm multi subsidiary.png",
      tag: "Multi-State GST",
      icon: <Building2 className="w-8 h-8" />,
    },
    {
      id: "gst-compliance",
      title: "GST Compliance",
      desc: "Automate tax calculation and filing preparation for GSTR-1, GSTR-3B, and GSTR-9. Configures tax codes for CGST, SGST, IGST, and UTGST based on transaction origin/destination, customer type, and HSN/SAC codes.",
      image: "/images/modules/gst management.png",
      tag: "GSTR Returns",
      icon: <FileSpreadsheet className="w-8 h-8" />,
    },
    {
      id: "gstr-2b",
      title: "GSTR-2B Reconciliation within NetSuite",
      desc: "Reconcile purchases and input tax credits (ITC) automatically by matching NetSuite purchase records with monthly GSTR-2B reports downloaded from the GST portal, preventing incorrect ITC claims and identifying vendor mismatches.",
      image: "/images/modules/gst validation.png",
      tag: "ITC Reconciliation",
      icon: <FileCheck2 className="w-8 h-8" />,
    },
    {
      id: "isd-management",
      title: "ISD Management",
      desc: "Streamline Input Service Distributor (ISD) requirements by tracking common input tax credits on services and distributing them to other operating units or branches across states according to statutory formulas.",
      image: "/images/modules/tax management custom.png",
      tag: "Credit Distribution",
      icon: <Layers className="w-8 h-8" />,
    },
    {
      id: "einvoice-eway",
      title: "E-Invoicing & E-Way Bill Integration",
      desc: "Automate JSON generation and API exchange with the Government's IRP/NIC portals. Generate, register, and embed IRN and QR codes onto NetSuite invoices, and generate E-Way Bills for shipments with direct print capabilities.",
      image: "/images/modules/e invoicing.png",
      tag: "IRP / NIC API Sync",
      icon: <QrCode className="w-8 h-8" />,
    },
    {
      id: "msme-reporting",
      title: "MSME & Related Party Reporting",
      desc: "Track and report transactions with MSME vendors and related parties. Monitor credit terms, track aging, and ensure compliance with statutory payment timelines (such as the 45-day MSME payment rule) within NetSuite.",
      image: "/images/modules/msme reporting.png",
      tag: "MSME 45-Day Rule",
      icon: <ShieldCheck className="w-8 h-8" />,
    },
    {
      id: "vendor-msme-confirmation",
      title: "Vendor Balance & MSME Confirmation",
      desc: "Automate vendor balance confirmation cycles and capture MSME status declarations. Provide vendors with digital self-service confirmations, reconciling account statements directly within the NetSuite environment.",
      image: "/images/modules/bank reconciliation custom.png",
      tag: "Vendor Portal",
      icon: <Landmark className="w-8 h-8" />,
    },
    {
      id: "vendor-statement",
      title: "Vendor Statement",
      desc: "Generate detailed, itemized statements of accounts for suppliers. Tracks invoices, credit memos, payments, adjustments, and outstanding balances to facilitate clear communication and reconciliation.",
      image: "/images/modules/vendor statement.png",
      tag: "Payables & Ledger",
      icon: <FileText className="w-8 h-8" />,
    },
    {
      id: "tds-tcs",
      title: "TDS & TCS Compliance",
      desc: "Compute tax deducted at source (TDS) and tax collected at source (TCS) dynamically during transaction entry. Supports section threshold limits, PAN validation, Challan entry, and exports ready-to-file Form 26Q/27EQ data.",
      image: "/images/modules/tds compliance.png",
      tag: "Direct Tax Withholding",
      icon: <Percent className="w-8 h-8" />,
    },
    {
      id: "compliance-calendar",
      title: "Compliance Calendar with Automated Reminders",
      desc: "Never miss a statutory deadline. The system maps all GST, TDS, TCS, and corporate filing schedules, sending automated email and dashboard reminders to key personnel to avoid penalties and interest.",
      image: "/images/modules/compliance calendar.png",
      tag: "Zero-Penalty System",
      icon: <CalendarCheck className="w-8 h-8" />,
    },
  ];

  return (
    <section
      id="modules"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden font-['DM_Sans',sans-serif] scroll-mt-20"
    >
      {/* Decorative Corner Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-indigo-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Comprehensive Functional SuiteApp
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5"
          >
            India Localization for NetSuite{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Compliance Modules
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium"
          >
            A complete suite of 11 native modules designed specifically for Indian tax laws, regulatory filings, automated reconciliations, and audit compliance within Oracle NetSuite.
          </motion.p>
        </div>

        {/* 11 Modules Interactive Flip Cards Grid (Matching Best ERP Page Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.05 }}
              className={`relative h-[440px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl cursor-pointer transition-all duration-500 ${
                activeIdx === index ? "scale-[1.02] z-30" : "scale-100"
              }`}
              onMouseEnter={() => setActiveIdx(index)}
              onMouseLeave={() => setActiveIdx(-1)}
            >
              {/* Background Image Container */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 z-0 ${
                  activeIdx === index ? "opacity-0" : "opacity-100"
                }`}
              >
                <Image
                  src={module.image}
                  alt={module.title}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  quality={85}
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
                
                {/* Category Tag on Top */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold bg-white/15 text-white border border-white/25 backdrop-blur-md">
                    {module.tag}
                  </span>
                </div>
              </div>

              {/* Default State — Bottom Aligned Content */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 z-10 p-6 flex flex-col justify-end ${
                  activeIdx === index ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <div className="space-y-3">
                  <div className="text-blue-400">{module.icon}</div>
                  <h3 className="text-xl font-bold text-white leading-snug">
                    {module.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {module.desc}
                  </p>
                </div>
              </div>

              {/* Hover / Active State — White Card with Full Description (Best ERP Pattern) */}
              <div
                className={`absolute inset-0 bg-white transition-opacity duration-500 z-20 p-6 flex flex-col justify-between border-2 border-blue-500/20 ${
                  activeIdx === index ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <div className="text-blue-600">{module.icon}</div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-blue-50 text-blue-700 border border-blue-200">
                      {module.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-900 leading-snug">
                    {module.title}
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                    {module.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={scrollToHero}
                    className="w-full py-2.5 px-4 bg-slate-900 hover:bg-blue-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors duration-300 shadow-sm cursor-pointer"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
