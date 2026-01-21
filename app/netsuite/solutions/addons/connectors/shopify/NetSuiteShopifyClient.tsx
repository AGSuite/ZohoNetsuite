"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, RefreshCw, Zap, ArrowRight, CheckCircle2, Globe, Database, ShieldCheck, Share2, Code, HeartHandshake, Users } from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';

export default function NetSuiteShopifyClient() {
  const services = [
    { title: "NetSuite Implementation", description: "Expert NetSuite implementation ensuring smooth transition and optimized processes.", icon: Database, href: "/netsuite/services/implementation" },
    { title: "NetSuite Integration", description: "Connect your apps and workflows seamlessly with API-led integrations.", icon: Share2, href: "/netsuite/services/integration" },
    { title: "NetSuite Customization", description: "Tailor NetSuite to your unique business needs with SuiteScript and SuiteCloud.", icon: Code, href: "/netsuite/services/suitecloud" },
    { title: "NetSuite Managed Support", description: "End-to-end support and optimization of your NetSuite environment.", icon: ShieldCheck, href: "/netsuite/services/managed-services" },
    { title: "NetSuite Training", description: "Comprehensive training programs to maximize system utilization.", icon: Users, href: "/netsuite/services/training-services" },
    { title: "NetSuite Consulting", description: "Strategic guidance to align NetSuite with your business goals.", icon: HeartHandshake, href: "/netsuite/services/consulting" },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl"
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase py-2 px-4 rounded-full mb-6 text-blue-400 bg-blue-900/40 border border-blue-800">
                E-commerce Integration
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
                NetSuite <span className="text-blue-500">Shopify</span> Connector
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                Bridge the gap between world-class e-commerce and enterprise ERP. Our Shopify connector automates data flow, eliminates manual entry, and scales with your business.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/netsuite/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl">
                  Get Connected
                </Link>
                <Link href="#services" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                  View Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 relative aspect-square max-w-[500px]"
            >
              <div className="w-full h-full rounded-[3rem] bg-linear-to-br from-blue-600/20 to-indigo-900/20 overflow-hidden border border-white/10 relative">
                <Image
                  src="/images/lap/lap2.webp"
                  alt="Shopify Connector"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000b21]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-semibold text-gray-900 text-center">NetSuite Shopify Services</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto mt-4">Expert services to help you build and grow your Shopify-NetSuite ecosystem</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-8">
            {services.map((service, index) => {
              const cardBgColors = ["bg-linear-to-br from-[#ffffff] to-[#eef0ff]", "bg-linear-to-br from-[#ffffff] to-[#eaf6ff]", "bg-linear-to-br from-[#ffffff] to-[#e8ffef]",
                "bg-linear-to-br from-[#ffffff] to-[#f9eaff]", "bg-linear-to-br from-[#ffffff] to-[#ffece8]", "bg-linear-to-br from-[#ffffff] to-[#eaf8ff]"];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}>
                  <motion.div initial="initial" whileHover="hover" variants={{ initial: { scale: 1 }, hover: { scale: 1.04, transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] } } }}
                    className={`relative group rounded-2xl p-7 border border-gray-200 transition-all duration-300 h-full shadow-xl hover:shadow-blue-100 ${cardBgColors[index % cardBgColors.length]}`}>
                    <motion.div variants={{ initial: { rotate: 0, y: 0 }, hover: { rotate: 360, y: -6, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } } }}
                      className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5">
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-lg font-semibold text-gray-900 leading-tight">{service.title}</h2>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">{service.description}</p>
                    <div className="mt-6 border-t border-gray-300 pt-3">
                      <Link href={service.href} className="text-black hover:text-blue-600 text-sm font-medium transition-all">Learn More →</Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 bg-[#000b21]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-blue-600/10 border border-blue-500/20 rounded-[3rem] p-12 lg:p-24"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              Ready to scale your e-commerce with NetSuite?
            </h2>
            <div className="flex justify-center gap-6">
              <Link href="/netsuite/contact" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl transition hover:scale-105 active:scale-95">
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterFormSection />
    </div>
  );
}
