"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  ChevronDown,
  ArrowRight,
  TrendingUp,
  Clock,
  Users,
  ShieldCheck,
  CheckCircle2,
  Phone,
  Mail,
  Zap,
} from "lucide-react";

export default function CrmBenefits() {
  const { ref: benefitsRef, inView: benefitsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElem = document.getElementById("home");
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const metrics = [
    {
      value: "300%",
      label: "Average Pipeline Growth",
      desc: "More qualified opportunities generated through automated omnichannel lead nurturing.",
      icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    },
    {
      value: "45%",
      label: "Faster Deal Closure",
      desc: "Shorter sales cycle duration through automated quote generation and instant follow-ups.",
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
    },
    {
      value: "84%",
      label: "Customer Retention Rate",
      desc: "Higher account lifetime value powered by 360° visibility and proactive SLA management.",
      icon: <Users className="w-6 h-6 text-indigo-600" />,
    },
    {
      value: "65%",
      label: "Admin Time Saved",
      desc: "Elimination of repetitive manual data entry and spreadsheet maintenance for sales reps.",
      icon: <Zap className="w-6 h-6 text-amber-500" />,
    },
  ];

  const faqs = [
    {
      q: "What makes a cloud-based CRM superior to legacy on-premise software?",
      a: "A cloud-based CRM provides 24/7 access from any device or mobile app, automatic software updates, enterprise-grade data security, and seamless integrations with external apps (like WhatsApp, ERP, email, and cloud telephony) without requiring expensive on-premise server maintenance.",
    },
    {
      q: "Does AGSuite implement both Zoho CRM and Oracle NetSuite CRM?",
      a: "Yes. AGSuite is an authorized Oracle NetSuite Solution Provider and Zoho Premium Partner. Our certified CRM architects help you evaluate, implement, customize, and integrate the CRM platform that best fits your company's scale, budget, and business requirements.",
    },
    {
      q: "How long does a typical cloud CRM implementation take?",
      a: "A standard CRM implementation typically takes between 2 to 4 weeks depending on the complexity of your custom workflows, data migration volume, and third-party integrations. We follow an agile implementation methodology to ensure quick time-to-value with zero business disruption.",
    },
    {
      q: "Can we integrate our ERP, email, WhatsApp, and telephony with the CRM?",
      a: "Absolutely. We specialize in end-to-end integrations. Your cloud CRM can be seamlessly connected to your ERP (NetSuite, Zoho Books, SAP), email clients (Gmail, Outlook), VoIP telephony providers, and messaging platforms like WhatsApp for a single unified customer communication hub.",
    },
    {
      q: "How does AI enhance sales team productivity in the CRM?",
      a: "Built-in AI engines (such as Zia in Zoho and NetSuite AI) analyze historical deal outcomes, score incoming leads based on buying intent, recommend the best time to contact each prospect, detect sentiment in customer emails, and generate accurate sales forecasts for executives.",
    },
    {
      q: "What training and ongoing support does AGSuite provide?",
      a: "We provide comprehensive user and administrator training, recorded onboarding sessions, standard operating documentation, and dedicated post-go-live managed support to ensure 100% user adoption across your sales, marketing, and support teams.",
    },
  ];

  return (
    <div className="font-['DM_Sans',sans-serif]">
      
      {/* ── SECTION 1: ROI BENEFITS & IMPACT ── */}
      <section
        id="benefits"
        ref={benefitsRef}
        className="py-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 relative overflow-hidden scroll-mt-20"
      >
        {/* Soft Ambient Corner Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/40 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3.5 shadow-xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Proven ROI & Measurable Impact
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
            >
              Accelerate Revenue Growth & Rep Productivity
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed"
            >
              Organizations that deploy modern cloud CRM solutions with AGSuite experience faster deal velocity and higher customer lifetime value.
            </motion.p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 25 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-lg hover:border-blue-300 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {m.icon}
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                  {m.value}
                </div>
                <div className="text-base font-bold text-blue-900 mb-2">
                  {m.label}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── SECTION 2: FREQUENTLY ASKED QUESTIONS ── */}
      <section id="faq" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-widest mb-3">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Cloud CRM
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Everything you need to know about CRM implementation, pricing, integrations, and timelines.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/50 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-slate-900 text-base sm:text-lg hover:text-blue-600 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/40">
                          {faq.a}
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

      {/* ── SECTION 3: HIGH-IMPACT CTA BANNER ── */}
      <section className="py-16 bg-slate-950 text-white relative overflow-hidden">
        {/* Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            Empower Your Sales Team Today
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Accelerate Your Sales with the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">
              Best Cloud-Based CRM?
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed font-normal">
            Schedule a personalized live demo with our certified CRM specialists and discover how to automate your pipelines and close more deals.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={scrollToHero}
              className="px-8 py-4 rounded-xl font-extrabold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-blue-600/40 hover:shadow-blue-600/60 transition-all duration-200 cursor-pointer flex items-center gap-2.5"
            >
              <span>Get Free 1-on-1 CRM Demo</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 font-semibold">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No Obligation Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Tailored Workflow Assessment</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Certified CRM Solution Architects</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
