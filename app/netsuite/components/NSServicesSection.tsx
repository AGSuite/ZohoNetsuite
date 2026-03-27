"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Rocket, Layers, Wrench, Settings, GraduationCap, HeartHandshake } from 'lucide-react';

const services = [
  {
    title: "NetSuite Implementation",
    description: "Go live with confidence using our structured, risk-free NetSuite implementation methodology.",
    icon: Rocket,
    href: "/netsuite/services/implementation",
    color: "from-white to-[#eef0ff]",
  },
  {
    title: "NetSuite Integration",
    description: "Seamlessly connect NetSuite with your CRM, e-commerce, and third-party systems via robust APIs.",
    icon: Layers,
    href: "/netsuite/services/integration-services",
    color: "from-white to-[#eaf6ff]",
  },
  {
    title: "NetSuite Customization",
    description: "Tailor NetSuite to your exact workflows with custom SuiteApps, scripts, and UI extensions.",
    icon: Wrench,
    href: "/netsuite/services/customization",
    color: "from-white to-[#e8ffef]",
  },
  {
    title: "NetSuite Managed Support",
    description: "Keep your NetSuite environment optimised with dedicated ongoing administration and support.",
    icon: Settings,
    href: "/netsuite/services/managed-services",
    color: "from-white to-[#f9eaff]",
  },
  {
    title: "NetSuite Training",
    description: "Empower your team with role-based, hands-on NetSuite training for faster adoption.",
    icon: GraduationCap,
    href: "/netsuite/services/training-services",
    color: "from-white to-[#ffece8]",
  },
  {
    title: "NetSuite Consulting",
    description: "Strategic guidance from certified experts to maximise your NetSuite ROI and business outcomes.",
    icon: HeartHandshake,
    href: "/netsuite/services/consulting",
    color: "from-white to-[#eaf8ff]",
  },
];

export default function NSServicesSection() {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">NetSuite Services</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            End-to-end services to ensure your NetSuite environment is perfectly aligned with your business needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
            >
              <motion.div
                initial="initial"
                whileHover="hover"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.04, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } },
                }}
                className={`relative group rounded-2xl p-7 border border-gray-200 transition-all duration-300 h-full shadow-xl hover:shadow-blue-100 bg-gradient-to-br ${service.color}`}
              >
                <motion.div
                  variants={{
                    initial: { rotate: 0, y: 0 },
                    hover: { rotate: 360, y: -6, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } },
                  }}
                  className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5"
                >
                  <service.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mt-2">{service.description}</p>
                <div className="mt-6 border-t border-gray-300 pt-3">
                  <Link href={service.href} className="text-black hover:text-blue-600 text-sm font-medium transition-all">
                    Learn More →
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
