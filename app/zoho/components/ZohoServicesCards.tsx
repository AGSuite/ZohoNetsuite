"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Rocket, Layers, Wrench, Settings, GraduationCap, HeartHandshake, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Zoho Implementation",
    description: "Organizations can benefit from professional assistance in implementing Zoho solutions tailored to their specific business requirements.",
    icon: Rocket,
    href: "/zoho-implementation-and-integration",
  },
  {
    title: "Zoho Integration",
    description: "Expert support is available for seamlessly integrating Zoho applications with existing systems and third-party tools, enhancing operational efficiency.",
    icon: Layers,
    href: "/zoho-integration",
  },
  {
    title: "Zoho Customization",
    description: "Businesses can leverage custom development options to tailor Zoho applications to their unique workflows and operational needs.",
    icon: Wrench,
    href: "/zoho-customization",
  },
  {
    title: "Zoho Managed Support",
    description: "Ongoing support and maintenance services ensure the smooth functioning and optimal performance of Zoho solutions, providing peace of mind to organizations.",
    icon: Settings,
    href: "/zoho-support",
  },
  {
    title: "Zoho Training",
    description: "Comprehensive training programs are available to empower teams with the necessary knowledge and skills to effectively utilize Zoho applications, maximizing their potential for business growth.",
    icon: GraduationCap,
    href: "/zoho-training-services",
  },
  {
    title: "Zoho Consulting",
    description: "Strategic guidance from certified experts to maximise your Zoho ROI and business outcomes aligned with your industry requirements.",
    icon: HeartHandshake,
    href: "/zoho/consulting",
  },
];

const cardBgColors = [
  "bg-gradient-to-br from-white to-[#eef0ff]",
  "bg-gradient-to-br from-white to-[#eaf6ff]",
  "bg-gradient-to-br from-white to-[#e8ffef]",
  "bg-gradient-to-br from-white to-[#f9eaff]",
  "bg-gradient-to-br from-white to-[#ffece8]",
  "bg-gradient-to-br from-white to-[#eaf8ff]",
];

export default function ZohoServicesCards() {
  return (
    <section id="services" className="py-20 bg-gray-50 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="bg-red-600/10 text-red-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mt-6 mb-4">
            Zoho Services
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            End-to-end services to ensure your Zoho environment is
            perfectly aligned with your industry requirements.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { scale: 1 },
                  hover: {
                    scale: 1.04,
                    transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
                  },
                }}
                className={`relative group rounded-2xl p-7 border border-gray-200 transition-all duration-300 h-full shadow-xl hover:shadow-red-100 ${cardBgColors[index % cardBgColors.length]}`}
              >
                <motion.div
                  variants={{
                    initial: { rotate: 0, y: 0 },
                    hover: {
                      rotate: 360,
                      y: -6,
                      transition: {
                        duration: 0.8,
                        ease: [0.42, 0, 0.58, 1],
                      },
                    },
                  }}
                  className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5"
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">
                  {service.description}
                </p>
                <div className="mt-6 border-t border-gray-300 pt-3">
                  <Link
                    href={service.href}
                    suppressHydrationWarning
                    className="group/link inline-flex items-center gap-2 text-black hover:text-red-600 text-sm font-medium transition-all"
                  >
                    Learn More 
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}




