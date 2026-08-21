"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  Clock,
  TrendingDown,
  UserX,
  Sparkles,
} from "lucide-react";

export default function CrmChallenges() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const challenges = [
    {
      id: "siloed-data",
      problemTitle: "Fragmented Customer Data & Silos",
      problemDesc: "Customer information scattered across spreadsheets, email inboxes, and disparate tools creates blind spots and duplicate data entries.",
      solutionTitle: "Unified 360° Customer Record",
      solutionDesc: "Centralize all contact interactions, deal histories, tickets, and financial transactions into a single real-time cloud dashboard.",
      icon: <Database className="w-6 h-6 text-rose-500" />,
    },
    {
      id: "slow-velocity",
      problemTitle: "Manual Tasks & Slow Deal Cycles",
      problemDesc: "Sales reps spend over 60% of their workday on manual data logging, email drafting, and follow-ups instead of closing high-value deals.",
      solutionTitle: "End-to-End Workflow Automation",
      solutionDesc: "Automate lead routing, follow-up sequences, quote creation, and task assignments to shorten deal cycles by up to 45%.",
      icon: <Clock className="w-6 h-6 text-amber-500" />,
    },
    {
      id: "inaccurate-forecasts",
      problemTitle: "Unreliable Sales Forecasting",
      problemDesc: "Lack of visibility into real-time pipeline stages leads to guesswork, missed sales targets, and inaccurate revenue projections.",
      solutionTitle: "AI-Powered Predictive Analytics",
      solutionDesc: "Gain crystal-clear pipeline visibility with AI deal scoring, win probability analysis, and automated quota tracking.",
      icon: <TrendingDown className="w-6 h-6 text-rose-500" />,
    },
    {
      id: "customer-churn",
      problemTitle: "Disconnected Support & High Churn",
      problemDesc: "Support teams without sales context provide disjointed customer service, resulting in frustration and lost account renewals.",
      solutionTitle: "Integrated Helpdesk & SLAs",
      solutionDesc: "Connect customer service tickets directly to sales history with automated SLA escalations to boost retention to 84%+.",
      icon: <UserX className="w-6 h-6 text-amber-500" />,
    },
  ];

  return (
    <section
      id="challenges"
      ref={ref}
      className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-20 font-['DM_Sans',sans-serif]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-widest mb-3.5 shadow-xs">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            Common Sales Roadblocks
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Overcoming the Top Challenges in Enterprise CRM
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 mt-4 font-normal leading-relaxed">
            See how AGSuite&apos;s tailored cloud CRM solutions transform common revenue hurdles into competitive growth advantages.
          </p>
        </motion.div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {challenges.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  {item.problemTitle}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
                {item.problemDesc}
              </p>

              {/* Solution Box */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-200/80">
                <div className="flex items-center gap-2 mb-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-sm font-bold text-blue-900">
                    AGSuite Solution: {item.solutionTitle}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {item.solutionDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
