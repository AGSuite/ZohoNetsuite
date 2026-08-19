"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Zap, 
  BarChart3, 
  Globe2, 
  ShieldCheck, 
  Cpu, 
  RefreshCw, 
  ArrowRight 
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Unified Single Business Suite",
    desc: "Consolidate ERP, CRM, inventory, commerce, and financial management in one unified cloud system.",
    color: "from-blue-600 to-cyan-500"
  },
  {
    icon: BarChart3,
    title: "Real-Time BI & Dashboards",
    desc: "Role-based dashboards deliver instant visibility into key performance indicators across all departments.",
    color: "from-indigo-600 to-purple-600"
  },
  {
    icon: Globe2,
    title: "Multi-Subsidiary & Global Expansion",
    desc: "OneWorld handles multi-currency transactions, automated tax compliance, and multi-entity consolidation.",
    color: "from-cyan-600 to-blue-600"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security & Compliance",
    desc: "Bank-grade security, automatic upgrades, SOC 1/SOC 2 compliance, and 99.9% guaranteed uptime.",
    color: "from-emerald-600 to-teal-600"
  },
  {
    icon: Cpu,
    title: "Customizable SuiteFlex Engine",
    desc: "Custom SuiteScripts, automated workflows, and robust REST APIs tailor NetSuite directly to your operational workflow.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: RefreshCw,
    title: "Automated Order-to-Cash Cycle",
    desc: "Eliminate manual data re-entry with end-to-end automated quotes, billing, fulfillment, and revenue recognition.",
    color: "from-pink-600 to-rose-600"
  }
];

export default function LandingWhyNetSuite() {
  return (
    <section id="whyNetSuite" className="py-20 md:py-28 bg-slate-50 text-slate-900 relative font-['DM_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              Strategic Competitive Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Why Industry Leaders Choose Oracle NetSuite ERP
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Designed to eliminate operational silos, automate manual processes, and accelerate business growth on a single cloud foundation.
            </p>
          </motion.div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white border border-slate-200/80 hover:border-blue-400 p-8 rounded-3xl shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} p-3.5 mb-6 shadow-md flex items-center justify-center transition-transform group-hover:scale-110`}>
                  <item.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                <span>Learn Capability</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 border border-blue-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white">
              Ready to Upgrade Your Business ERP Infrastructure?
            </h4>
            <p className="text-sm text-slate-300">
              Get a customized NetSuite demonstration tailored to your industry workflows.
            </p>
          </div>
          <a
            href="#hero"
            className="px-6 py-3.5 rounded-xl font-bold text-slate-900 text-sm bg-white hover:bg-slate-100 transition-all shadow-md shrink-0 cursor-pointer"
          >
            Request Free ERP Demo
          </a>
        </div>

      </div>
    </section>
  );
}
