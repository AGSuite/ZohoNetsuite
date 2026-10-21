"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  ChevronRight,
  Headphones,
  Layers3,
  RefreshCw,
  Wrench,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Implementation",
    description: "Translate business requirements into a phased Odoo setup with clear ownership, validation, and adoption milestones.",
    image: "/images/odoo-services/odoo-implementation-dashboard.png",
    icon: Layers3,
    points: ["Process discovery and solution design", "Phased configuration and data migration", "Testing, training, and launch support"],
  },
  {
    title: "Customization",
    description: "Configure workflows, permissions, screens, and reports around the way your teams actually work.",
    image: "/images/odoo-services/odoo-customization-dashboard.png",
    icon: Wrench,
    points: ["Role-based screens and permissions", "Tailored workflows and approvals", "Custom reports and operational views"],
  },
  {
    title: "Integration",
    description: "Connect Odoo with the systems that need to remain part of your operating landscape.",
    image: "/images/odoo-services/odoo-integration-dashboard.png",
    icon: RefreshCw,
    points: ["API and third-party integrations", "Reliable cross-platform data flows", "Connected finance, sales, and operations"],
  },
  {
    title: "Managed support",
    description: "Keep the platform dependable with user support, improvements, monitoring, and structured releases.",
    image: "/images/odoo-services/odoo-managed-support-dashboard.png",
    icon: Headphones,
    points: ["Responsive functional support", "Platform monitoring and maintenance", "Continuous improvement releases"],
  },
];

export default function OdooServicesBenefits() {
  const [activeService, setActiveService] = useState(0);
  const selectedService = services[activeService];

  return (
    <section
      id="services"
      className="relative scroll-mt-28 overflow-hidden bg-gradient-to-br from-white via-[#f8f5ff] to-[#eef5ff] px-6 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(100,59,159,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(100,59,159,0.08)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,transparent,black_18%,black_82%,transparent)]" />
      <div className="pointer-events-none absolute -left-40 bottom-[-12rem] h-[32rem] w-[32rem] rounded-full bg-[#a78bfa]/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#60a5fa]/20 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <h2 className="whitespace-nowrap bg-gradient-to-r from-[#3f245f] via-[#643b9f] to-[#2563eb] bg-clip-text text-[clamp(0.875rem,4vw,3rem)] font-medium leading-tight tracking-tight text-transparent">
            Odoo Services Built Around Your Business
          </h2>
        </motion.div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[2fr_3fr] lg:gap-10">
          <div className="order-2 relative min-h-[380px] overflow-hidden rounded-3xl border border-white shadow-2xl shadow-[#643b9f]/15 lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0"
              >
                <Image
                  src={selectedService.image}
                  alt={`${selectedService.title} services`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d1034]/55 via-transparent to-white/5" />
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/50 bg-white/75 p-5 shadow-lg backdrop-blur-md">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#643b9f]">Odoo service</p>
                  <p className="mt-1 text-2xl font-semibold text-slate-950">{selectedService.title}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="order-1 flex flex-col justify-center gap-2 rounded-3xl border border-white/20 bg-gradient-to-br from-[#332442] via-[#3d2855] to-[#273452] p-4 shadow-xl shadow-[#643b9f]/20 backdrop-blur-md sm:p-5">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService === index;

              return (
                <button
                  key={service.title}
                  type="button"
                  onClick={() => setActiveService(index)}
                  className={`group relative w-full rounded-xl border-l-4 px-5 py-4 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#7048c8] bg-white shadow-xl"
                      : "border-transparent bg-white/[0.055] hover:bg-white/[0.1]"
                  }`}
                  aria-expanded={isActive}
                >
                  <div className="flex w-full items-center gap-4">
                    <Icon size={21} className={`shrink-0 transition-colors ${isActive ? "text-[#643b9f]" : "text-slate-400 group-hover:text-white"}`} />
                    <span className={`flex-1 text-base font-semibold transition-colors sm:text-lg ${isActive ? "text-slate-950" : "text-slate-300 group-hover:text-white"}`}>
                      {service.title}
                    </span>
                    <ChevronRight size={18} className={`shrink-0 transition-all duration-300 ${isActive ? "rotate-90 text-[#643b9f]" : "text-slate-500 group-hover:text-slate-300"}`} />
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pl-9"
                      >
                        <p className="mb-3 mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
                        <ul className="space-y-1.5">
                          {service.points.map((point) => (
                            <li key={point} className="flex items-start gap-2 text-sm text-slate-600">
                              <Check size={14} className="mt-0.5 shrink-0 text-[#643b9f]" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
