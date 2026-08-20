"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  QrCode,
  Percent,
  ShieldCheck,
  CheckCircle,
  ArrowRight,
  Zap,
  Building,
  Scale,
  Clock,
  Layers,
} from "lucide-react";

export default function LocalizationCompliance() {
  const [activeTab, setActiveTab] = useState(0);

  const compliancePillars = [
    {
      id: "gst",
      title: "Goods & Services Tax (GST)",
      badge: "Full GSTR Coverage",
      icon: FileText,
      color: "from-blue-600 to-cyan-600",
      lightBg: "bg-blue-50/70 border-blue-100",
      accentText: "text-blue-600",
      desc: "Complete multi-state GST tax determination, automatic tax code calculation (CGST, SGST, IGST, UTGST), and 1-click filing data preparation for all GSTR returns.",
      features: [
        "Multi-State GSTIN Management with state-wise tax ledger tracking",
        "Automated GSTR-1, GSTR-3B, and annual GSTR-9 data export format",
        "GSTR-2B Input Tax Credit (ITC) reconciliation & mismatch detection",
        "Reverse Charge Mechanism (RCM) automated accounting entries",
        "Export under LUT, Bond, and SEZ zero-rated sales compliance",
        "Automated HSN / SAC classification and validation at line-item level",
      ],
      tagline: "Never miss a GST deadline or miscalculate an inter-state tax rate.",
    },
    {
      id: "einvoice",
      title: "e-Invoicing & e-Way Bill",
      badge: "Real-Time IRP API",
      icon: QrCode,
      color: "from-indigo-600 to-blue-600",
      lightBg: "bg-indigo-50/70 border-indigo-100",
      accentText: "text-indigo-600",
      desc: "Native real-time integration with authorized Invoice Registration Portals (IRP) for instant 1-click IRN and digital signature QR code generation on all tax invoices.",
      features: [
        "1-Click automated IRN (Invoice Reference Number) generation on approval",
        "Instant Signed QR Code embed directly on standard NetSuite invoice PDFs",
        "Automated Part-A and Part-B e-Way Bill generation directly from transactions",
        "Bulk e-Way Bill generation & consolidated vehicle number updates",
        "Automated e-Invoice cancellation and credit/debit note linking",
        "99.99% high-availability API connection via accredited GSPs",
      ],
      tagline: "Zero manual data entry on government portals; 100% automated in NetSuite.",
    },
    {
      id: "tds",
      title: "Direct Tax & TDS / TCS",
      badge: "Sections 194Q & 206C",
      icon: Percent,
      color: "from-purple-600 to-indigo-600",
      lightBg: "bg-purple-50/70 border-purple-100",
      accentText: "text-purple-600",
      desc: "Comprehensive Tax Deducted at Source (TDS) and Tax Collected at Source (TCS) engine with automated threshold tracking, Challan mapping, and Form 26Q return generation.",
      features: [
        "Pre-configured statutory tax rules for Sections 194C, 194J, 194I, 194H, etc.",
        "Dynamic ₹50 Lakh threshold monitoring for Section 194Q and Section 206C(1H)",
        "Automated PAN validation & higher rate deduction for non-PAN vendors (Sec 206AA)",
        "Quarterly Form 26Q & 27Q e-filing text file creation with Challan mappings",
        "Automated Form 16A generation and vendor certificate dispatch",
        "Lower deduction certificate management with validity and amount capping",
      ],
      tagline: "Eliminate TDS calculation errors and quarterly e-TDS return rejection risks.",
    },
    {
      id: "mca",
      title: "MCA Audit Trail & Schedule III",
      badge: "Companies Act Rule 3(1)",
      icon: Scale,
      color: "from-emerald-600 to-teal-600",
      lightBg: "bg-emerald-50/70 border-emerald-100",
      accentText: "text-emerald-600",
      desc: "Strict compliance with Ministry of Corporate Affairs (MCA) mandate for edit logs on every financial transaction, plus automated Schedule III Financial Statements.",
      features: [
        "Immutable Audit Trail recording user ID, exact timestamp, and modified values",
        "Non-tamperable transaction logs complying with Section 134(5) of Companies Act",
        "Automated Schedule III Balance Sheet and Profit & Loss statement formats",
        "Companies Auditor's Report Order (CARO) statutory reporting schedules",
        "Dual Depreciation Book: Companies Act (Useful Life) vs Income Tax Act (WDV)",
        "Auditor-ready compliance reports ready for internal and statutory audit teams",
      ],
      tagline: "Fully compliant with Indian statutory audit trail regulations out of the box.",
    },
  ];

  return (
    <section
      id="compliance"
      className="py-20 md:py-28 bg-white relative overflow-hidden font-['DM_Sans',sans-serif]"
    >
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs sm:text-sm font-bold uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            Statutory & Regulatory Pillars
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-5"
          >
            End-to-End{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              India Statutory Compliance
            </span>{" "}
            in Oracle NetSuite
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed"
          >
            AGSuite India Localization SuiteApp provides a native, pre-configured framework ensuring your Indian operations are 100% aligned with evolving statutory, direct, and indirect tax mandates.
          </motion.p>
        </div>

        {/* Tab Navigation (Desktop & Mobile) */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {compliancePillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 px-5 py-3.5 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-300 cursor-pointer ${
                  isActive
                    ? `bg-slate-900 text-white shadow-xl shadow-slate-900/20 scale-[1.02]`
                    : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content Card */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-[0_20px_50px_-15px_rgba(0,13,46,0.08)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Description & Tagline */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-blue-800 text-xs font-extrabold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-blue-600" />
                {compliancePillars[activeTab].badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {compliancePillars[activeTab].title}
              </h3>

              <p className="text-slate-700 text-base leading-relaxed font-medium">
                {compliancePillars[activeTab].desc}
              </p>

              <div className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                  Why It Matters
                </div>
                <div className="text-sm font-bold text-slate-900 italic">
                  &ldquo;{compliancePillars[activeTab].tagline}&rdquo;
                </div>
              </div>

              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-blue-600 text-white text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Request {compliancePillars[activeTab].title} Walkthrough</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right Column: Key Feature Checklist Grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {compliancePillars[activeTab].features.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:border-blue-300 hover:shadow-md transition-all duration-300 flex items-start gap-3.5"
                  >
                    <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </motion.div>

        {/* 4 Pillars Mini Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {compliancePillars.map((pillar, pIdx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(pIdx)}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeTab === pIdx
                    ? "bg-blue-50/80 border-blue-400 shadow-md scale-[1.02]"
                    : "bg-white border-slate-200/80 hover:border-blue-200 hover:shadow-md"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{pillar.title}</h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {pillar.desc}
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-blue-600">
                  <span>Explore features</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
