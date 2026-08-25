"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight, CheckCircle2, Sparkles, Zap } from "lucide-react";

export default function CrmPricing() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const [billingCycle, setBillingCycle] = useState<"yearly" | "monthly">("yearly");

  const scrollToHero = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
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
      yearlyPrice: "₹800",
      monthlyPrice: "₹1,300",
      desc: "Automate and optimize your sales cycle",
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
      yearlyPrice: "₹1,400",
      monthlyPrice: "₹2,100",
      desc: "Improve customer acquisition and accelerate growth",
      features: [
        "Everything in Standard",
        "SalesSignals & Omnichannel Telephony",
        "Blueprint Process Automation",
        "Inventory & Quote Management",
      ],
      popular: false,
    },
    {
      name: "Enterprise",
      yearlyPrice: "₹2,400",
      monthlyPrice: "₹3,000",
      desc: "Manage global CX operations with the complete CRM",
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
      yearlyPrice: "₹2,600",
      monthlyPrice: "₹3,200",
      desc: "Scale exponentially with dedicated BI capabilities",
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
        <div className="text-center max-w-3xl mx-auto mb-12">
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

          {/* Billing Cycle Switcher with Buy & Save 25% Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex items-center justify-center"
          >
            <div className="inline-flex items-center bg-slate-900/90 p-1.5 rounded-full border border-slate-700/80 shadow-xl backdrop-blur-md">
              {/* Pay Yearly Tab */}
              <button
                type="button"
                onClick={() => setBillingCycle("yearly")}
                className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                  billingCycle === "yearly"
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <span>Pay Yearly</span>
                <span
                  className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full tracking-wider transition-colors ${
                    billingCycle === "yearly"
                      ? "bg-white/20 text-white"
                      : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                  }`}
                >
                  Buy & Save 25%
                </span>
              </button>

              {/* Pay Monthly Tab */}
              <button
                type="button"
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md shadow-orange-500/25"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Pay Monthly
              </button>
            </div>
          </motion.div>
        </div>

        {/* 4 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {plans.map((plan, index) => {
            const price = billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
            const period =
              billingCycle === "yearly"
                ? "/user/month billed annually"
                : "/user/month billed monthly";

            return (
              <motion.div
                key={plan.name}
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
                  <h3 className="text-xl font-bold mb-1 text-white">{plan.name}</h3>
                  <p className="text-xs mb-5 font-normal leading-relaxed text-slate-400 min-h-[32px]">
                    {plan.desc}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white tracking-tight">{price}</span>
                    </div>
                    <span className="text-[11px] block mt-1 font-medium text-slate-400">
                      {period}
                    </span>
                  </div>

                  <div className="space-y-3 mb-8">
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        plan.popular ? "text-orange-400" : "text-slate-300"
                      }`}
                    >
                      Key Highlights:
                    </p>
                    {plan.features.map((feat, fi) => (
                      <div key={fi} className="flex items-start gap-2 text-xs sm:text-sm">
                        <CheckCircle2
                          className={`w-4 h-4 shrink-0 mt-0.5 ${
                            plan.popular ? "text-orange-400" : "text-emerald-400"
                          }`}
                        />
                        <span className="text-slate-300">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={scrollToHero}
                  className={`w-full py-3.5 rounded-xl font-extrabold text-xs sm:text-sm tracking-wider uppercase text-center transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2 group ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:brightness-110 shadow-orange-500/25"
                      : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-slate-900"
                  }`}
                >
                  <span>START FREE TRIAL</span>
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner with Advisory Image & Custom Consultation */}
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
                  type="button"
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
