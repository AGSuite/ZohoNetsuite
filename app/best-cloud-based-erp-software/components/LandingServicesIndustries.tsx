"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Briefcase, 
  Code, 
  Network, 
  Headphones, 
  Globe, 
  Database,
  Factory,
  ShoppingBag,
  Truck,
  Laptop,
  Building2,
  Coins
} from "lucide-react";

const services = [
  {
    icon: Briefcase,
    title: "NetSuite Implementation",
    desc: "End-to-end implementation following NetSuite SuiteSuccess methodology for fast time-to-value and low risk."
  },
  {
    icon: Code,
    title: "Customization & SuiteScript",
    desc: "Tailored business logic, custom Suitelets, workflows, and automated approval chains using SuiteScript 2.1."
  },
  {
    icon: Network,
    title: "System Integration",
    desc: "Seamlessly connect NetSuite with Salesforce, Shopify, Magento, Amazon, 3PL logistics, and custom web portals."
  },
  {
    icon: Headphones,
    title: "Managed Support & Training",
    desc: "24/7 dedicated administrator support, post-go-live optimization, user training, and release management."
  },
  {
    icon: Globe,
    title: "India Localization & MCA Compliance",
    desc: "Fully GST-compliant invoices, E-way bill generation, TDS calculation, and MCA Rule 3 audit trail compliance."
  },
  {
    icon: Database,
    title: "Data Backup & Recovery",
    desc: "Automated, encrypted daily backup solutions ensuring complete regulatory compliance and data security."
  }
];

const industries = [
  { icon: Factory, name: "Manufacturing", desc: "Production planning, BOM management, shop floor control, and supply chain tracking." },
  { icon: ShoppingBag, name: "Retail & E-Commerce", desc: "Omnichannel inventory sync, order management, point-of-sale, and customer insights." },
  { icon: Truck, name: "Wholesale & Distribution", desc: "Multi-warehouse logistics, demand forecasting, fulfillment, and vendor management." },
  { icon: Laptop, name: "Software & Technology", desc: "Subscription billing, ASC 606 revenue recognition, recurring billing, and SaaS metrics." },
  { icon: Building2, name: "IT & Professional Services", desc: "Resource allocation, project billing, time tracking, and SRP profitability analytics." },
  { icon: Coins, name: "Financial Services", desc: "Multi-entity consolidation, automated currency conversion, and global financial controls." }
];

export default function LandingServicesIndustries() {
  const [activeTab, setActiveTab] = useState<"services" | "industries">("services");

  return (
    <section id="businessGrow" className="py-20 md:py-28 bg-white text-slate-900 relative font-['DM_Sans',sans-serif]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              Tailored Solutions & Deep Domain Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
              Grow Your Business with AGSuite NetSuite Solutions
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Explore our full spectrum of NetSuite ERP services and specialized industry solutions tailored for scalable operations.
            </p>
          </motion.div>

          {/* Toggle Switch */}
          <div className="flex justify-center mt-8">
            <div className="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab("services")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === "services"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                NetSuite Services
              </button>
              <button
                onClick={() => setActiveTab("industries")}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  activeTab === "industries"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-slate-600 hover:text-blue-600"
                }`}
              >
                Industry Solutions
              </button>
            </div>
          </div>
        </div>

        {/* Tab 1: NetSuite Services */}
        {activeTab === "services" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 hover:border-blue-400 p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-100/70 border border-blue-200 p-3 mb-5 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <item.icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 2: Industry Expertise */}
        {activeTab === "industries" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {industries.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/80 hover:border-indigo-400 p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-100/70 border border-indigo-200 p-3 mb-5 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  <item.icon className="w-full h-full" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
