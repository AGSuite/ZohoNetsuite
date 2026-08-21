"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle2, Zap, Sparkles } from "lucide-react";

export default function CrmPricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const plans = [
    {
      name: "Standard",
      price: "$14",
      period: "per user / month (billed annually)",
      desc: "Ideal for small teams requiring core sales tracking and automated workflows.",
      features: [
        "Automated Lead Scoring Rules",
        "Multiple Sales Pipelines",
        "Mass Email & Templates",
        "Custom Dashboards & Reports",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$23",
      period: "per user / month (billed annually)",
      desc: "For growing businesses needing omnichannel communication and inventory tools.",
      features: [
        "Everything in Standard",
        "Sales Signals & Omnichannel Telephony",
        "Blueprint Process Automation",
        "Inventory & Quote Management",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      price: "$40",
      period: "per user / month (billed annually)",
      desc: "Our most popular enterprise edition with conversational AI (Zia) and custom apps.",
      features: [
        "Everything in Professional",
        "Zia Conversational AI & Predictions",
        "Multi-User Portals & Canvas UI Builder",
        "Advanced Analytics & Auto Responders",
      ],
      popular: true,
    },
    {
      name: "Ultimate",
      price: "$52",
      period: "per user / month (billed annually)",
      desc: "For large organizations demanding dedicated bi-directional analytics and high storage.",
      features: [
        "Everything in Enterprise",
        "Advanced BI & Dedicated Analytics",
        "Enhanced Data Storage & Encryption",
        "Priority 24/7 Enterprise SLAs",
      ],
      popular: false,
    },
  ];

  return (
    <section
      id="pricing"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white relative overflow-hidden font-['DM_Sans',sans-serif] scroll-mt-20 border-b border-slate-800"
    >
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/10 via-teal-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-orange-500/10 via-amber-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-3.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            Transparent Licensing
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            How Much Does Zoho CRM Cost?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg mt-3 font-normal"
          >
            Transparent, scalable pricing tailored to your organizational scale. As a certified partner, AGSuite audits your workflows to deliver optimal licensing value.
          </motion.p>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-slate-900/95 border-2 border-orange-500 shadow-2xl shadow-orange-500/20 md:-translate-y-2"
                  : "bg-slate-900/60 border border-slate-800 shadow-lg hover:border-slate-700 hover:bg-slate-900/90 backdrop-blur-sm"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-[11px] font-extrabold uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold mb-1 text-white">
                  {plan.name}
                </h3>
                <p className="text-xs mb-5 font-normal leading-relaxed text-slate-400">
                  {plan.desc}
                </p>

                <div className="mb-6 pb-6 border-b border-slate-800">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-white tracking-tight">{plan.price}</span>
                  </div>
                  <span className="text-[11px] block mt-1 font-medium text-slate-400">
                    {plan.period}
                  </span>
                </div>

                <div className="space-y-3 mb-8">
                  <p className={`text-xs font-bold uppercase tracking-wider ${plan.popular ? "text-orange-400" : "text-slate-300"}`}>
                    Key Highlights:
                  </p>
                  {plan.features.map((feat, fi) => (
                    <div key={fi} className="flex items-start gap-2 text-xs sm:text-sm">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          plan.popular ? "text-orange-400" : "text-emerald-400"
                        }`}
                      />
                      <span className="text-slate-300">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={scrollToHero}
                className={`w-full py-3 rounded-xl font-bold text-sm text-center transition-all duration-200 cursor-pointer shadow-md ${
                  plan.popular
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:brightness-110"
                    : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-slate-900"
                }`}
              >
                Get Custom Quote
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Girl Image & Custom Calculation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-r from-[#041c26] via-[#06303f] to-[#041c26] border border-cyan-900/50 text-white"
        >
          <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
            
            {/* Left: Content */}
            <div className="py-10 px-8 sm:px-12 lg:px-14 flex flex-col justify-center">
              <div className="w-14 h-1 bg-amber-400 mb-5 rounded-full" />
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-4 leading-snug">
                Need Help Selecting the Right Zoho CRM License?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                Pricing is influenced by your user volume, feature requirements, and implementation scope. Our certified consultants will perform a free license audit to ensure you don&apos;t overpay for unused features and maximize ROI.
              </p>
              <div>
                <button
                  onClick={scrollToHero}
                  className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-sm bg-white text-slate-900 hover:bg-amber-400 hover:text-slate-900 transition-all duration-200 shadow-md cursor-pointer"
                >
                  <span>Request Free License Consultation</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Right: Organic Blob Image */}
            <div className="relative flex items-center justify-center min-h-[300px] overflow-hidden bg-[#03151d]">
              <div
                className="relative z-10 w-[240px] h-[280px] sm:w-[280px] sm:h-[310px] overflow-hidden shadow-2xl my-6"
                style={{ borderRadius: "50% 50% 46% 54% / 52% 48% 52% 48%" }}
              >
                <Image
                  src="/images/people/laptopgirl.webp"
                  alt="Zoho CRM Licensing & Pricing Consultation"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
