"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  BarChart3,
  Shield,
  Zap,
  Layers,
  TrendingUp,
  Check,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export default function CrmBenefits() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const benefits = [
    {
      title: "360° Customer Intelligence",
      description:
        "Zoho CRM provides a complete picture of every customer interaction across sales, marketing, and support — allowing your teams to deliver highly personalized experiences at every touchpoint.",
      image: "/images/zoho-crm-benefits/customer-intelligence.png",
      points: [
        "Unified customer timeline across all channels",
        "Seamless integration with finance and inventory",
        "Social media interaction tracking built-in",
        "No more siloed data between departments",
      ],
      icon: Calendar,
    },
    {
      title: "Unmatched Productivity",
      description:
        "Automate the busywork that slows down your sales team. From lead scoring to follow-up emails, Zoho CRM handles the routine tasks so your reps can focus on building relationships.",
      image: "/images/zoho-crm-benefits/productivity.png",
      points: [
        "Advanced lead scoring and assignment rules",
        "Automated email sequences and follow-up tasks",
        "Seamless calendar and meeting integration",
        "Real-time alerts for critical deal activities",
      ],
      icon: BarChart3,
    },
    {
      title: "Omnichannel Engagement",
      description:
        "Meet your customers where they are. Whether it's email, phone, live chat, or social media, Zoho CRM centralizes all communication so you never miss a beat.",
      image: "/images/zoho-crm-benefits/omnichannel.png",
      points: [
        "Integrated telephony and SMS capabilities",
        "Live chat triggered by lead behavior",
        "Social media monitoring and response",
        "Consolidated communication history per record",
      ],
      icon: Shield,
    },
    {
      title: "AI-Powered Insights (Zia)",
      description:
        "Leverage Zia, our AI assistant, to get smarter about your sales. Zia identifies patterns, predicts outcomes, and offers actionable suggestions to help you close more deals.",
      image: "/images/zoho-crm-benefits/ai-insights.png",
      points: [
        "Predictive lead and deal conversion scoring",
        "Best-time-to-contact recommendations",
        "Anomaly detection for sales activities",
        "Natural language processing for quick queries",
      ],
      icon: Zap,
    },
    {
      title: "Customizable & Scalable",
      description:
        "Your business is unique, and your CRM should be too. Zoho CRM's highly flexible architecture allows you to customize every aspect to fit your specific workflows.",
      image: "/images/zoho-crm-benefits/customizable.png",
      points: [
        "Custom modules, fields, and layouts",
        "Bespoke canvas design for unique UIs",
        "Extensive API and developer SDKs",
        "Conditional fields and dynamic layouts",
      ],
      icon: Layers,
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Protect your most valuable asset — your data. Zoho CRM comes with robust security features that give you complete control over who sees what.",
      image: "/images/zoho-crm-benefits/security.png",
      points: [
        "Role-based access and field-level security",
        "HIPAA and GDPR compliance built-in",
        "Audit logs and activity tracking",
        "Multi-factor authentication for all users",
      ],
      icon: TrendingUp,
    },
  ];

  return (
    <section
      id="benefits"
      ref={ref}
      className="py-24 relative overflow-hidden font-['DM_Sans',sans-serif] scroll-mt-20"
      style={{
        background:
          "linear-gradient(135deg, #060e1f 0%, #0a1e4a 25%, #0f2a57 55%, #091828 80%, #050d1a 100%)",
      }}
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-widest mb-3.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            ROI & Business Value
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight"
          >
            Key Business Benefits of Zoho CRM
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg mt-3 font-normal"
          >
            Empower every rep, automate pipeline operations, and elevate customer satisfaction with scalable cloud capabilities.
          </motion.p>
        </div>

        {/* 2-Column Accordion Layout */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
          
          {/* Left: Dynamic Benefit Image Frame */}
          <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/60">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeBenefit}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 h-full w-full"
              >
                <Image
                  src={benefits[activeBenefit].image}
                  alt={benefits[activeBenefit].title}
                  fill
                  className="object-cover object-center"
                  unoptimized={benefits[activeBenefit]?.image?.endsWith(".svg")}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Accordion Items */}
          <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5 flex flex-col gap-2.5 justify-center shadow-inner backdrop-blur-md">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeBenefit === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none cursor-pointer ${
                    isActive
                      ? "bg-white shadow-xl border-l-4 border-orange-500"
                      : "bg-white/5 border-l-4 border-transparent hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div
                      className={`shrink-0 transition-colors duration-300 ${
                        isActive ? "text-orange-600" : "text-gray-400 group-hover:text-gray-200"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <span
                      className={`text-base md:text-lg flex-1 font-bold transition-all duration-300 ${
                        isActive ? "text-slate-900" : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-orange-600 rotate-90"
                          : "text-gray-500 opacity-60 group-hover:opacity-100"
                      }`}
                    />
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pl-9"
                    >
                      <p className="text-slate-600 text-sm leading-relaxed mb-3 font-normal">
                        {item.description}
                      </p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                            <Check size={14} className="text-orange-600 mt-0.5 shrink-0" />
                            {pt}
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
  );
}
