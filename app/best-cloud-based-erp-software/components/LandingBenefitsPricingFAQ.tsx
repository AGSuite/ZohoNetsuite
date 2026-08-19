"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  DollarSign, 
  ChevronDown, 
  Clock, 
  ArrowRight,
  Layers
} from "lucide-react";

const benefitsList = [
  {
    title: "Accelerated Financial Close",
    desc: "Reduce month-end financial closing cycles by up to 80% with automated consolidation and reconciliation.",
    metric: "80% Faster"
  },
  {
    title: "IT Overhead Reduction",
    desc: "Cut maintenance, server hardware, and legacy software costs by 50% with cloud-native infrastructure.",
    metric: "50% Savings"
  },
  {
    title: "Real-Time Decision Intelligence",
    desc: "Gain instant, role-based visibility into sales pipelines, inventory levels, cash flow, and profit margins.",
    metric: "100% Visibility"
  },
  {
    title: "Automated Global Compliance",
    desc: "Built-in support for statutory tax laws, GST, TDS, MCA Rule 3 compliance, and IFRS multi-GAAP standards.",
    metric: "100% Compliant"
  }
];

const faqData = [
  {
    question: "What makes Oracle NetSuite the #1 Cloud ERP software worldwide?",
    answer: "Oracle NetSuite is a single, unified cloud ERP platform trusted by over 43,000 organizations worldwide. Unlike traditional legacy ERP systems, NetSuite combines ERP, Financials, CRM, Commerce, and Inventory into one real-time cloud database, eliminating silos and reducing IT overhead."
  },
  {
    question: "How much does an Oracle NetSuite ERP implementation cost?",
    answer: "NetSuite ERP pricing is tailored based on your business size, required module suite (Financials, Supply Chain, SRP, CRM), user count, and implementation complexity. As a certified NetSuite Partner, AGSuite provides custom licensing discounts and structured SuiteSuccess implementation packages to fit your exact budget."
  },
  {
    question: "How long does a typical NetSuite ERP implementation project take?",
    answer: "Using NetSuite’s SuiteSuccess methodology and AGSuite's proven deployment frameworks, standard implementations typically range from 6 to 14 weeks depending on customized requirements, data migration scope, and third-party integrations."
  },
  {
    question: "Can NetSuite ERP integrate with our existing CRM, eCommerce, or 3PL software?",
    answer: "Yes! NetSuite features robust REST and SOAP APIs, SuiteTalk integration tools, and pre-built connectors for platforms like Salesforce, Shopify, Magento, Amazon, Zoho, and 3PL warehouse management systems."
  },
  {
    question: "Why choose AGSuite Technologies as your NetSuite Implementation Partner?",
    answer: "AGSuite Technologies is an award-winning Oracle NetSuite Solution Provider with 15+ years of experience, 700+ successful projects, 50+ certified consultants, and an 84% customer retention rate. We offer end-to-end consulting, customization, SuiteScript development, and 24/7 support."
  }
];

export default function LandingBenefitsPricingFAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="font-['DM_Sans',sans-serif]">
      {/* ── Section 1: NetSuite Benefits (#benefits) ── */}
      <section id="benefits" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-4">
                Measurable Business Impact
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                Core Benefits of Implementing Oracle NetSuite
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                Transform how your company operates with proven efficiency gains and measurable ROI across every department.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefitsList.map((b, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/80 p-6 rounded-3xl shadow-xs flex flex-col justify-between hover:border-emerald-500 hover:shadow-lg transition-all hover:-translate-y-1.5 group"
              >
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-extrabold mb-4">
                    {b.metric}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Proven Value</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Section 2: Pricing & Cost Overview (#ERPCost) ── */}
      <section id="ERPCost" className="py-20 md:py-28 bg-white text-slate-900 relative font-['DM_Sans',sans-serif]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold uppercase tracking-widest mb-4">
                Transparent Modular Investment
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
                How Much Does Oracle NetSuite ERP Cost?
              </h2>
              <p className="text-base sm:text-lg text-slate-600">
                NetSuite operates on a modular, scalable subscription model so you only pay for the modules and user licenses your business actually requires.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Component 1 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-purple-100 p-3 mb-6 text-purple-600">
                <Layers className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">1. Core Platform & Suite Modules</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Base annual license includes Core ERP, Financials, General Ledger, Accounts Payable/Receivable, and reporting modules. Additional suites (WMS, SRP, Fixed Assets, CRM) can be unlocked modularly as you scale.
              </p>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Modular Expansion</span>
            </div>

            {/* Component 2 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-100 p-3 mb-6 text-blue-600">
                <DollarSign className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2. User License Tier</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Flexible user licensing categorized into Full Access Users (finance, administration, management) and Employee Self-Service / Field Users (expense entry, time tracking, requisitions).
              </p>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Pay-Per-User Model</span>
            </div>

            {/* Component 3 */}
            <div className="bg-slate-50 border border-slate-200/80 p-8 rounded-3xl shadow-xs hover:shadow-md transition-all">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 p-3 mb-6 text-emerald-600">
                <Clock className="w-full h-full" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">3. Implementation & Services</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                One-time implementation fee based on data migration volume, custom SuiteScript requirements, system integrations, and user training packages.
              </p>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">SuiteSuccess Methodology</span>
            </div>
          </div>

          {/* Pricing Inquiry Card */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-blue-800 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl text-white">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Get an Instant NetSuite ERP Cost Estimate
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-8">
              Speak with our NetSuite Licensing Specialists to calculate your tailored license discount and implementation roadmap.
            </p>
            <a
              href="#hero"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-extrabold text-slate-900 uppercase tracking-wider text-sm bg-white hover:bg-slate-100 transition-all shadow-xl active:scale-98 cursor-pointer"
            >
              <span>Calculate Your ERP Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ── Section 3: NetSuite FAQ Accordion ── */}
      <section className="py-20 md:py-28 bg-slate-50 text-slate-900 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
              Frequently Asked Questions About NetSuite ERP
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Clear answers to help you navigate your cloud ERP implementation journey.
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 transition-transform duration-300 shrink-0 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
}
