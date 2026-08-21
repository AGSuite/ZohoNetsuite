"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, ArrowRight } from "lucide-react";

export default function CrmModules() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 });

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
      title: "Lead Management",
      description: "Capture, nurture, and convert leads from multiple sources with automated workflows and scoring.",
      image: "/images/modules/project_management.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Sales Automation",
      description: "Automate repetitive tasks, follow-ups, and sales processes to close deals faster and more efficiently.",
      image: "/images/modules/analytics_visual_analysis.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Contact Management",
      description: "Get a 360-degree view of your contacts, including interaction history, notes, and social media updates.",
      image: "/images/modules/unified_platform.png",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Deal Management",
      description: "Track your sales pipeline, manage stages, and gain visibility into potential revenue and win rates.",
      image: "/images/modules/intelligent_automation.png",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Workflow Automation",
      description: "Design and implement complex business processes without writing a single line of code.",
      image: "/images/modules/workforce_management.png",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Mobile CRM",
      description: "Access your CRM data on-the-go with native mobile apps for iOS and Android, keeping you connected always.",
      image: "/images/modules/analytics_mobile_bi.png",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Sales Analytics",
      description: "Gain deep insights into your sales performance with customizable dashboards and over 75+ reports.",
      image: "/images/modules/audit_reports.png",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Omnichannel Communication",
      description: "Connect with customers via email, phone, social media, and live chat within a single interface.",
      image: "/images/modules/analytics_collab.png",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "AI Sales Assistant (Zia)",
      description: "Let Zia predict lead conversion, identify anomalies, and suggest the best time to contact customers.",
      image: "/images/modules/crm.png",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Inventory Management",
      description: "Monitor stock levels, manage orders, and sync invoices directly with your sales process.",
      image: "/images/modules/general_ledger_custom.png",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Marketing Attribution",
      description: "Track the journey of every lead from click to close and understand which campaigns drive the most ROI.",
      image: "/images/modules/real_time_visibility.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Sales Forecasting",
      description: "Predict future revenue based on real-time data and historical performance for better business planning.",
      image: "/images/modules/compliance_calendar.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  return (
    <section
      id="modules"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden font-['DM_Sans',sans-serif] scroll-mt-20 border-b border-slate-100"
    >
      {/* Decorative Corner Glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-blue-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-orange-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center gap-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Zoho CRM Modules
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            A Comprehensive Suite of Integrated CRM Modules
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed"
          >
            Unify your entire customer journey from first touch to loyal advocate with fully modular, customizable Zoho capabilities.
          </motion.p>
        </div>

        {/* Modules 12-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
          {modules.map((mod, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              onClick={scrollToHero}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white border border-slate-100"
              style={{ minHeight: 340 }}
            >
              {/* Image Banner */}
              <div className="relative h-44 shrink-0 overflow-hidden bg-slate-900">
                <Image
                  src={mod.image}
                  alt={mod.title}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                  unoptimized={mod.image?.endsWith(".svg")}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)`,
                  }}
                />
              </div>

              {/* Text Card with Module Color */}
              <div
                className="flex-1 p-5 pb-6 flex flex-col relative justify-between"
                style={{ backgroundColor: `rgb(${mod.rgb})` }}
              >
                <div>
                  <h4 className="text-white font-bold text-lg mb-2 tracking-wide">
                    {mod.title}
                  </h4>
                  <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">
                    {mod.description}
                  </p>
                </div>
                
                <div className="mt-4 pt-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 bg-white/95 text-slate-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-sm group-hover:bg-white group-hover:scale-105 transition-all">
                    Get Started <ArrowRight size={11} />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 via-orange-500 to-rose-500" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
