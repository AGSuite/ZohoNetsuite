"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Rocket,
  Layers,
  Wrench,
  Settings,
  GraduationCap,
  HeartHandshake,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export default function CrmServices() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const hero = document.getElementById("home");
    if (hero) {
      hero.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const services = [
    {
      title: "Zoho CRM Implementation",
      description: "End-to-end architecture, process mapping, data migration, and go-live deployment tailored to your specific sales processes.",
      icon: Rocket,
      tag: "Turnkey Deployment",
      color: "from-blue-600 to-indigo-600",
    },
    {
      title: "Zoho CRM Integration",
      description: "Seamless bi-directional integration with ERPs (NetSuite, SAP), telephony, marketing automation, e-commerce, and custom APIs.",
      icon: Layers,
      tag: "API & Connectors",
      color: "from-indigo-600 to-purple-600",
    },
    {
      title: "Zoho Customization & Deluge",
      description: "Custom modules, advanced Deluge scripting, automated blueprints, and bespoke canvas layouts tailored to your team's workflow.",
      icon: Wrench,
      tag: "Custom Scripting",
      color: "from-emerald-600 to-teal-600",
    },
    {
      title: "Zoho Managed Support & SLAs",
      description: "Continuous 24/7 technical support, bug fixing, workflow optimization, and system health checks for ongoing peace of mind.",
      icon: Settings,
      tag: "Ongoing Support",
      color: "from-orange-600 to-amber-600",
    },
    {
      title: "Zoho User & Admin Training",
      description: "Role-based training bootcamps and SOP documentation to accelerate user adoption, CRM hygiene, and sales team efficiency.",
      icon: GraduationCap,
      tag: "Team Enablement",
      color: "from-rose-600 to-pink-600",
    },
    {
      title: "Zoho Strategic Consulting",
      description: "Strategic advisory from certified Zoho consultants to optimize sales pipelines, audit license tiers, and maximize your CRM ROI.",
      icon: HeartHandshake,
      tag: "Executive Advisory",
      color: "from-cyan-600 to-blue-600",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-24 bg-slate-50 relative overflow-hidden font-['DM_Sans',sans-serif] scroll-mt-20 border-b border-slate-100"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-orange-100/35 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold uppercase tracking-widest mb-3.5 shadow-xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            End-to-End Zoho Consulting Services
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight"
          >
            Expert Services Tailored for High-Growth Enterprises
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg mt-3 font-normal"
          >
            From strategic planning and custom development to seamless integrations and 24/7 managed support.
          </motion.p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onClick={scrollToHero}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.15)] hover:border-blue-300 transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar with Icon & Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-200 mb-3 leading-snug">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Footer Action */}
                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Speak to Service Expert</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
