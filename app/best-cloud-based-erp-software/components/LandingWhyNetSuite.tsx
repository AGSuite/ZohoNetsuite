"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, TrendingUp, ShieldAlert, Award } from "lucide-react";

export default function LandingWhyNetSuite() {
  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElem = document.getElementById("hero");
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const columns = [
    {
      title: "NetSuite ERP Benefits",
      subtitle: "Experience streamlined operations and complete business visibility.",
      icon: TrendingUp,
      accent: "from-blue-600 to-cyan-500",
      badge: "Benefits",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      cardStyle: "bg-white border-slate-200 hover:border-blue-400 shadow-2xl shadow-black/40",
      topHighlight: "from-blue-500 via-cyan-400 to-indigo-500",
      checkColor: "text-blue-600",
      items: [
        "Automate Financial Processes",
        "Gain Inventory Visibility",
        "Supply Chain Optimization",
        "Flawless Order Management",
        "Increase Warehouse Efficiency",
      ],
    },
    {
      title: "Challenges NetSuite ERP Solves",
      subtitle: "Eliminate bottlenecks and solve critical business challenges.",
      icon: ShieldAlert,
      accent: "from-purple-600 to-indigo-600",
      badge: "Solutions",
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      cardStyle: "bg-white border-slate-200 hover:border-purple-400 shadow-2xl shadow-black/40",
      topHighlight: "from-purple-500 via-indigo-400 to-pink-500",
      checkColor: "text-purple-600",
      items: [
        "Manual Processes",
        "Data Accessibility",
        "Data Integrity",
        "Meeting Expectations",
        "Balancing Supply and Demand",
        "Inventory Insights",
      ],
    },
    {
      title: "ROI Experienced by Organizations",
      subtitle: "Achieve measurable results with NetSuite ERP.",
      icon: Award,
      accent: "from-emerald-600 to-teal-500",
      badge: "Proven ROI",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      cardStyle: "bg-white border-slate-200 hover:border-emerald-400 shadow-2xl shadow-black/40",
      topHighlight: "from-emerald-500 via-teal-400 to-cyan-500",
      checkColor: "text-emerald-600",
      items: [
        "Reduced IT costs by 50% or more",
        "Accelerated financial close by 20%-50%",
        "Cut order-to-cash cycle by more than 50%",
        "Reduced audit preparation time by 50%",
        "Reduced invoicing costs by 25%-75%",
        "Reduced days sales outstanding (DSO) by 10%-20%",
      ],
    },
  ];

  return (
    <section id="whyNetSuite" className="pt-20 md:pt-28 pb-0 bg-slate-950 text-white relative font-['DM_Sans',sans-serif] overflow-hidden">
      {/* Background Ambient Radial Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:28px_28px] opacity-25" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-xs">
              Why Choose NetSuite
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 leading-tight text-center">
              Transform Your Business Operations
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto text-center">
              Discover how Oracle NetSuite delivers strategic competitive advantages, solves complex challenges, and unlocks rapid return on investment.
            </p>
          </motion.div>
        </div>

        {/* 3 Columns Comparison Cards with Rich Gradients & Shadows */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {columns.map((col, idx) => {
            const IconComp = col.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -8 }}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between border overflow-hidden transition-all duration-300 group ${col.cardStyle}`}
              >
                {/* Top Accent Gradient Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${col.topHighlight}`} />

                <div className="relative z-10">
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${col.accent} flex items-center justify-center shadow-lg text-white group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-7 h-7" />
                    </div>
                    <span className={`px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${col.badgeColor}`}>
                      {col.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {col.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6 leading-relaxed font-medium">
                    {col.subtitle}
                  </p>

                  {/* Bullet Points */}
                  <ul className="space-y-3.5 pt-4 border-t border-slate-200/80">
                    {col.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-5 h-5 ${col.checkColor} shrink-0 mt-0.5`} />
                        <span className="text-sm font-semibold text-slate-800 leading-snug">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ── FULL-WIDTH CTA SECTION (Matching NetSuite Home CTA) ── */}
      <div className="relative w-full py-16 lg:py-20 overflow-hidden">
        {/* Background Image: NetSuite Home CTA */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/netsuiteimages/background/netsuiteCTA.webp"
            alt="NetSuite Business Growth CTA"
            fill
            className="object-cover object-center"
            quality={80}
            sizes="100vw"
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-extrabold uppercase tracking-widest mb-4 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-blue-300" />
                BUSINESS GROWS HERE!
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white leading-snug mb-6 drop-shadow-md">
                NetSuite is the first and last business system you’ll ever need to run your business
              </h2>

              <div>
                <Link
                  href="#hero"
                  onClick={scrollToHero}
                  className="inline-flex items-center gap-3 px-8 py-3.5 rounded-xl bg-white hover:bg-gray-100 text-slate-900 font-bold text-base shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Get Free Consultation</span>
                  <ArrowRight className="w-5 h-5 text-slate-900" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
