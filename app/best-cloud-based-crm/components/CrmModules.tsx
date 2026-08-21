"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Sparkles,
  ArrowRight,
  Target,
  Workflow,
  Bot,
  Headphones,
  Mail,
  FileCheck2,
  BarChart3,
  Users2,
  PhoneCall,
  Layers,
} from "lucide-react";

export default function CrmModules() {
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
      id: "lead-management",
      title: "Lead & Opportunity Management",
      desc: "Automatically capture leads from websites, ads, and emails. Score leads based on behavior, detect duplicate records, and route prospects instantly to the right sales reps for rapid conversion.",
      tag: "Lead Capture & Scoring",
      icon: <Target className="w-8 h-8" />,
    },
    {
      id: "pipeline-automation",
      title: "Visual Sales Pipeline & Deals",
      desc: "Track multiple sales pipelines in real-time with drag-and-drop Kanban boards. Automate task creation, stage-progression alerts, and follow-up emails to shorten deal closing cycles.",
      tag: "Pipeline Velocity",
      icon: <Workflow className="w-8 h-8" />,
    },
    {
      id: "omnichannel-telephony",
      title: "Omnichannel Communications",
      desc: "Engage prospects across Email, WhatsApp, SMS, Live Chat, and Cloud Telephony with one-click dialling and automatic call recording mapped directly to customer contact cards.",
      tag: "Customer Touchpoints",
      icon: <PhoneCall className="w-8 h-8" />,
    },
    {
      id: "ai-sales-intelligence",
      title: "AI Sales Intelligence & Forecasting",
      desc: "Leverage intelligent AI assistants (Zia / NetSuite AI) to predict win probabilities, suggest optimal times to contact prospects, and generate accurate quarterly revenue forecasts.",
      tag: "Predictive AI",
      icon: <Bot className="w-8 h-8" />,
    },
    {
      id: "marketing-automation",
      title: "Marketing Automation & Campaigns",
      desc: "Design targeted email campaigns, automated drip sequences, and multi-channel nurture flows. Measure marketing ROI and bridge the gap between marketing and sales pipeline.",
      tag: "Campaign ROI",
      icon: <Mail className="w-8 h-8" />,
    },
    {
      id: "customer-support",
      title: "Customer Service & Helpdesk",
      desc: "Resolve customer inquiries faster with integrated ticketing, automated SLA escalations, knowledge base, and complete historical visibility into every client relationship.",
      tag: "Helpdesk & SLAs",
      icon: <Headphones className="w-8 h-8" />,
    },
    {
      id: "quote-cpq-erp",
      title: "Quote, CPQ & ERP Integration",
      desc: "Generate error-free price quotes, proposals, and invoices with a single click. Sync seamlessly with Oracle NetSuite ERP or Zoho Books for automated billing and fulfillment.",
      tag: "CPQ & Accounting Sync",
      icon: <FileCheck2 className="w-8 h-8" />,
    },
    {
      id: "custom-dashboards",
      title: "Custom Dashboards & Analytics",
      desc: "Build customized executive dashboards and KPI reports. Monitor sales rep performance, win/loss ratios, lead velocity, and customer lifetime value (LTV) in real time.",
      tag: "Executive Analytics",
      icon: <BarChart3 className="w-8 h-8" />,
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-3.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            Core Platform Capabilities
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight"
          >
            Comprehensive Cloud CRM Modules Designed for Growth
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg mt-4 font-normal leading-relaxed"
          >
            Everything your revenue teams need to find, win, and retain customers on a unified cloud architecture.
          </motion.p>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod, idx) => (
            <motion.div
              key={mod.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              onMouseEnter={() => setActiveIdx(idx)}
              onMouseLeave={() => setActiveIdx(-1)}
              className="group relative flex flex-col justify-between bg-white rounded-2xl p-6 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.18)] hover:border-blue-300 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Tag & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-13 h-13 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                    {mod.icon}
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-600 bg-blue-50/90 border border-blue-100 px-2.5 py-1 rounded-full">
                    {mod.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 leading-snug mb-3">
                  {mod.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {mod.desc}
                </p>
              </div>

              {/* Bottom Action Link */}
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span onClick={scrollToHero} className="cursor-pointer hover:underline">
                  Learn More in Demo
                </span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-black">
              Need a Custom CRM Solution for Your Business?
            </h3>
            <p className="text-sm text-blue-200 font-normal">
              Our certified CRM architects will evaluate your sales workflows and recommend the optimal setup.
            </p>
          </div>
          <button
            onClick={scrollToHero}
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-sm bg-white text-slate-900 hover:bg-blue-50 shadow-md transition-all duration-200 cursor-pointer"
          >
            Talk to a CRM Specialist
          </button>
        </motion.div>

      </div>
    </section>
  );
}
