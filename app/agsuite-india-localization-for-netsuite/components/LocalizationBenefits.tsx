"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  ShieldCheck,
  Zap,
  TrendingUp,
  BarChart3,
  Check,
  ChevronRight,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";

export default function LocalizationBenefits() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElem = document.getElementById("home");
    if (heroElem) {
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(heroElem, { offset: -80, duration: 0.9, lock: false });
      } else {
        const top = heroElem.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const CARD_BG =
    "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)";

  const benefits = [
    {
      title: "Enhanced Compliance",
      description:
        "Automated GST, TDS, and TCS calculations ensure adherence to India's tax regulations, minimizing compliance risks.",
      image: "/images/modules/benefit_compliance.png",
      points: [
        "100% GST Regulation compliance",
        "Real-time IRP integration",
        "Automated TDS/TCS calculation",
        "Minimize compliance risks",
      ],
      icon: ShieldCheck,
    },
    {
      title: "Streamlined Operations",
      description:
        "E-invoicing, e-way bill management, and vendor statements simplify transaction processing and reduce administrative workload.",
      image: "/images/modules/benefit_operations.png",
      points: [
        "Automated e-invoicing",
        "E-way bill management",
        "Simplified vendor statements",
        "Reduced administrative workload",
      ],
      icon: Zap,
    },
    {
      title: "Accurate Reporting",
      description:
        "MSME reporting, audit-ready reports, and advanced tax features provide precise, real-time insights to support business decisions.",
      image: "/images/modules/benefit_reporting.png",
      points: [
        "MSME compliance reporting",
        "Audit-ready financial reports",
        "Real-time business insights",
        "Precise data tracking",
      ],
      icon: TrendingUp,
    },
    {
      title: "Automated Reminders",
      description:
        "Compliance calendar and timely reminders help your team stay on top of regulatory deadlines without manual tracking.",
      image: "/images/modules/compliance_calendar.png",
      points: [
        "Integrated compliance calendar",
        "Automated deadline reminders",
        "Avoid missed filings",
        "No more manual tracking",
      ],
      icon: BarChart3,
    },
    {
      title: "Seamless Integration",
      description:
        "The platform integrates smoothly with NetSuite, allowing your business to achieve efficient operations on a single, unified system.",
      image: "/images/modules/unified_platform.png",
      points: [
        "Native NetSuite integration",
        "Single unified system",
        "Smooth data flow",
        "Optimized cloud operations",
      ],
      icon: Sparkles,
    },
  ];

  const localizationFaqs = [
    {
      q: "How does India Localization for NetSuite simplify GST compliance for businesses?",
      a: "India Localization for NetSuite automates GST reporting, including GSTR1, GSTR2, and GSTR 3B, and provides configurable GST rules based on factors such as location, customer type, and transaction type. This simplifies GST compliance by streamlining tax calculations and reporting processes.",
    },
    {
      q: "Can India Localization for NetSuite integrate with existing accounting systems?",
      a: "Yes, India Localization for NetSuite can be seamlessly integrated with NetSuite, providing businesses with a comprehensive tax management solution that integrates with their existing accounting systems. This integration ensures smooth data flow and eliminates the need for manual data entry.",
    },
    {
      q: "How does India Localization for NetSuite mitigate the risk of TDS non-compliance?",
      a: "India Localization for NetSuite automates TDS calculations and reporting, including Income Tax Form 26Q, and provides support for threshold management and PAN rule compliance. By automating TDS processes and ensuring accurate tax calculations, India Tax Solution helps businesses mitigate the risk of TDS non-compliance and avoid penalties.",
    },
    {
      q: "Does NetSuite support GST natively?",
      a: "NetSuite has basic tax capabilities, but Indian GST requires specific localization for CGST/SGST/IGST computation, HSN/SAC codes, RCM, ITC registers, and GSTR reports. Our India Localization Add-On extends NetSuite with all these capabilities natively, without any third-party middleware.",
    },
    {
      q: "Is e-invoicing mandatory for our business?",
      a: "E-invoicing is mandatory for GST-registered businesses with aggregate turnover above ₹5 crore (as of 2024). Our solution automatically determines which transactions require e-invoicing, generates the IRP-compliant JSON, submits to the Invoice Registration Portal, and embeds the IRN and QR code on your NetSuite invoice PDF.",
    },
    {
      q: "How does TDS automation work inside NetSuite?",
      a: "When a payment or expense is posted in NetSuite, the India Localization Add-On evaluates whether TDS applies based on the payment category, section, and cumulative threshold. The applicable rate is deducted automatically, a TDS ledger entry is posted, and Form 16/16A certificates and 26Q/27Q filing data are generated at quarter-end.",
    },
    {
      q: "Can we manage multiple GSTINs across different states?",
      a: "Yes. The solution supports unlimited GSTIN registrations within a single NetSuite account — each with its own GST ledger, ITC register, GSTR filing schedule, and inter-state transaction logic. Multi-state organisations can manage all compliance from one NetSuite environment.",
    },
    {
      q: "How are e-Way Bills generated?",
      a: "E-Way Bills are generated directly from NetSuite delivery orders and invoices via NIC API integration. Transporter details, vehicle number, and consignment value are pulled from the NetSuite transaction, and the e-Way Bill number is embedded back into the shipment record. Bulk generation is supported for high-volume dispatches.",
    },
    {
      q: "Does the solution handle Input Tax Credit (ITC) reconciliation?",
      a: "Yes. Our solution maintains a complete ITC register — tracking eligible credits, provisionally claimed credits, and credits to be reversed. Automatic reconciliation with GSTR-2B data identifies mismatches between your purchase register and what's reflected in GSTN records, helping you avoid ITC reversal penalties.",
    },
    {
      q: "What GSTR returns does the solution generate?",
      a: "The solution generates filing-ready data for GSTR-1 (outward supplies), GSTR-3B (monthly summary), GSTR-2A/2B (purchase reconciliation), and GSTR-9 (annual return). Reports are generated in the formats prescribed by GSTN, ready for upload to the GST portal or through a GST Suvidha Provider.",
    },
    {
      q: "How long does implementation take?",
      a: "A standard India Localization implementation takes 4–6 weeks for a single GSTIN entity — covering GST configuration, HSN/SAC code mapping, IRP credentials setup, TDS section configuration, and user training. Multi-GSTIN or multi-subsidiary implementations typically take 6–10 weeks.",
    },
  ];

  const PARTICLES = [
    { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 },
    { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
    { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 },
    { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 },
    { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 },
    { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 },
  ];

  return (
    <div className="font-['DM_Sans',sans-serif]">
      
      {/* ── BENEFITS SECTION (Matching NetSuite Solution Page) ── */}
      <section
        id="benefits"
        ref={ref}
        className="py-24 relative overflow-hidden scroll-mt-24"
        style={{ background: CARD_BG }}
      >
        <div
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-extrabold uppercase tracking-wider mb-4">
              Value ROI & Growth
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200 tracking-tight leading-tight">
              Key Benefits of India Localization for NetSuite
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            
            {/* Left Column: Image Preview with AnimatePresence */}
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/50">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={benefits[activeBenefit].image}
                    alt={benefits[activeBenefit].title}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Interactive Benefit Tabs */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5 flex flex-col gap-2.5 justify-center backdrop-blur-xs">
              {benefits.map((item, index) => {
                const IconComponent = item.icon;
                const isActive = activeBenefit === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveBenefit(index)}
                    className={`group w-full flex flex-col px-5 py-4 text-left rounded-2xl transition-all duration-300 outline-none cursor-pointer ${
                      isActive
                        ? "bg-white shadow-2xl border-l-4 border-blue-600 scale-[1.01]"
                        : "bg-white/5 border-l-4 border-transparent hover:bg-white/10 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className={`shrink-0 transition-colors ${
                          isActive
                            ? "text-blue-600"
                            : "text-gray-400 group-hover:text-gray-200"
                        }`}
                      >
                        <IconComponent size={22} />
                      </div>
                      
                      <span
                        className={`text-base md:text-lg flex-1 font-bold ${
                          isActive ? "text-gray-900" : "text-gray-200"
                        }`}
                      >
                        {item.title}
                      </span>
                      
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform duration-300 ${
                          isActive
                            ? "text-blue-600 rotate-90"
                            : "text-gray-500 opacity-60 group-hover:opacity-100"
                        }`}
                      />
                    </div>

                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-3 pl-9 pt-1"
                      >
                        <p className="text-gray-600 text-sm leading-relaxed mb-3 font-medium">
                          {item.description}
                        </p>
                        <ul className="space-y-2">
                          {item.points.map((pt, pi) => (
                            <li
                              key={pi}
                              className="flex items-start gap-2.5 text-sm text-gray-700 font-medium"
                            >
                              <Check
                                size={14}
                                className="text-blue-600 mt-1 shrink-0 font-extrabold"
                              />{" "}
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* ── FAQ COMPONENT (Matching NetSuite Solution Page) ── */}
      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite India Localization — GST, e-invoicing, TDS, e-Way Bills, and compliance timelines."
        customFaqs={localizationFaqs}
      />

      {/* ── CTA BANNER (Matching NetSuite Solution Page) ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl shadow-2xl bg-gray-950"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/netsuiteimages/background/netsuiteCTA.webp"
                alt="CTA Background"
                fill
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
              <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
              {PARTICLES.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: `${p.w}px`,
                    height: `${p.h}px`,
                    top: `${p.top}%`,
                    left: `${p.left}%`,
                  }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{
                    duration: p.dur,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: p.delay,
                  }}
                />
              ))}
            </div>

            <div className="relative z-20 px-8 py-14 sm:px-12 sm:py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
                  Stay GST Compliant —{" "}
                  <span className="text-cyan-200">
                    Automate India Tax in NetSuite.
                  </span>
                </h2>
                <p className="text-white/85 text-sm sm:text-base md:text-lg font-medium leading-relaxed">
                  End manual GST calculations, e-invoice filing, and TDS tracking.
                  Our India Localization Add-On keeps your NetSuite environment
                  fully compliant with every GSTN and Income Tax requirement.
                </p>
              </div>

              <a
                href="#home"
                onClick={scrollToHero}
                className="shrink-0 inline-flex items-center gap-3 bg-white text-blue-900 hover:bg-blue-50 font-extrabold text-sm sm:text-base px-8 py-4 rounded-xl shadow-xl transition-all group active:scale-95 cursor-pointer"
              >
                <span>Get India Compliance</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
