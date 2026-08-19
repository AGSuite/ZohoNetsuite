"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const modules = [
  {
    title: "Financial Management",
    description: "Real-time P&L, balance sheets, multi-currency, tax compliance, and automated financial close.",
    image: "/images/modules/financial_management.png",
    color: "#1e8a9e",
    rgb: "14,108,130",
  },
  {
    title: "CRM",
    description: "Unified 360° customer data, pipeline tracking, quote-to-order, and customer lifecycle management.",
    image: "/images/modules/crm.png",
    color: "#6a2575",
    rgb: "95,30,105",
  },
  {
    title: "Procurement",
    description: "Automate purchase orders, vendor evaluations, approvals, and contract management end-to-end.",
    image: "/images/modules/procurement.png",
    color: "#3b5299",
    rgb: "40,65,145",
  },
  {
    title: "Inventory Management",
    description: "Real-time multi-location inventory tracking with demand planning and automated reorder points.",
    image: "/images/modules/inventory_management.png",
    color: "#1a7a55",
    rgb: "18,108,72",
  },
  {
    title: "Warehouse Management",
    description: "Barcode-driven mobile receiving, wave pick/pack/ship, and intelligent bin location control.",
    image: "/images/modules/warehouse_management.png",
    color: "#4a3a8a",
    rgb: "65,45,130",
  },
  {
    title: "Order Management",
    description: "Streamline quote-to-cash with automated fulfillment, subscription billing, and revenue recognition.",
    image: "/images/modules/order_management.png",
    color: "#a05a18",
    rgb: "145,75,18",
  },
  {
    title: "Manufacturing",
    description: "Work orders, shop floor scheduling, multi-level BOMs, routing, and real-time production visibility.",
    image: "/images/modules/manufacturing.png",
    color: "#8b3a6a",
    rgb: "125,42,88",
  },
  {
    title: "Project Management",
    description: "Resource allocation, timesheet tracking, project accounting, milestone billing, and profitability metrics.",
    image: "/images/modules/project_management.png",
    color: "#154e8a",
    rgb: "18,68,130",
  },
  {
    title: "Workforce Management",
    description: "Resource scheduling, timesheets, payroll integration, field service enablement, and technician tracking.",
    image: "/images/modules/workforce_management.png",
    color: "#1a6545",
    rgb: "20,95,60",
  },
  {
    title: "E-commerce",
    description: "Connected B2B and B2C digital storefronts seamlessly unified with ERP inventory and orders.",
    image: "/images/modules/ecommerce.png",
    color: "#0f4e8a",
    rgb: "12,68,130",
  },
  {
    title: "Planning & Budgeting",
    description: "Company-wide financial modeling, driver-based forecasting, scenario analysis, and board reporting.",
    image: "/images/modules/budgeting_planning_custom.png",
    color: "#2b4a78",
    rgb: "35,65,110",
  },
  {
    title: "Business Intelligence",
    description: "Pre-built KPIs, interactive executive dashboards, real-time analytics, and visual reporting across all units.",
    image: "/images/modules/analytics_visual_analysis.png",
    color: "#0c637a",
    rgb: "12,99,122",
  },
];

export default function LandingUnifiedSolution() {
  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElem = document.getElementById("hero");
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section id="modules" className="py-20 md:py-28 bg-white relative overflow-hidden font-['DM_Sans',sans-serif]">
      {/* Background Subtle Dot Pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(15, 23, 42, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest mb-4">
              Complete Business Suite
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-slate-900 mb-5 leading-tight text-center">
              NetSuite ERP – Unified Cloud Solution for Complete Business Growth
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto text-center">
              NetSuite ERP is a powerful cloud platform that centralizes financials, CRM, HR, commerce, and supply chain into one system. It’s built to scale with your business, delivering automation, visibility, and efficiency at every level.
            </p>
          </motion.div>
        </div>

        {/* 12 Modules Cards Grid (Matching NetSuite Product Page Design) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {modules.map((mod, index) => (
            <Link
              key={index}
              href="#hero"
              onClick={scrollToHero}
              className="block h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: "easeOut" }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white h-full"
                style={{ minHeight: 380 }}
              >
                {/* Top: Image Section with Color Gradient Overlay */}
                <div className="relative h-52 shrink-0 overflow-hidden bg-slate-900">
                  <Image
                    src={mod.image}
                    alt={`Oracle NetSuite ${mod.title} Cloud ERP Suite Module`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 65%, rgba(${mod.rgb},1) 100%)`,
                    }}
                  />
                </div>

                {/* Bottom: Information Section */}
                <div
                  className="flex-1 p-5 pb-6 flex flex-col justify-between relative"
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

                  {/* Hover Reveal Button */}
                  <div className="pt-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 bg-white text-gray-900 font-bold uppercase tracking-widest text-[11px] px-3.5 py-1.5 rounded-full shadow-md group-hover:bg-yellow-400 transition-colors">
                      Learn More <ArrowRight size={11} />
                    </span>
                  </div>

                  {/* Multi-color Bottom Border */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
