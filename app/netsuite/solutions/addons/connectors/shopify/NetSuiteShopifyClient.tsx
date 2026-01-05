"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, RefreshCw, Zap, ArrowRight, CheckCircle2, Globe, Database, ShieldCheck } from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';

export default function NetSuiteShopifyClient() {
  const features = [
    {
      title: "Real-time Inventory Sync",
      description: "Ensure your Shopify storefront always reflects accurate stock levels from NetSuite, preventing overselling and customer disappointment.",
      icon: RefreshCw,
      image: "/images/Solutions/inventory.webp"
    },
    {
      title: "Automated Order Processing",
      description: "Orders placed on Shopify are instantly pushed to NetSuite for fulfillment, credit checks, and financial processing without manual intervention.",
      icon: Zap,
      image: "/images/Solutions/order-sync.webp"
    },
    {
      title: "Unified Customer Data",
      description: "Maintain a 360-degree view of your customers by syncing profiles, addresses, and purchase history between both platforms.",
      icon: Database,
      image: "/images/aboutus/mission1.webp"
    },
    {
        title: "Refunds & Cancellations",
        description: "Handle complex post-purchase workflows by syncing refunds and cancellations bi-directionally between Shopify and NetSuite.",
        icon: ShieldCheck,
        image: "/images/Solutions/refunds.webp"
    }
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
                <Link href="#features" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                  View Features
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

      {/* Features Grid */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Automated Operations</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Sync Capabilities</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-[2.5rem] p-10 border border-gray-100 hover:shadow-2xl transition-all group"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-32 h-32 relative rounded-2xl overflow-hidden shrink-0">
                        {feature.image && (
                            <Image src={feature.image} alt={feature.title} fill className="object-cover" />
                        )}
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <feature.icon className="text-blue-600" size={24} />
                            <h4 className="text-2xl font-bold text-gray-900">{feature.title}</h4>
                        </div>
                        <p className="text-gray-600 leading-relaxed font-light">
                            {feature.description}
                        </p>
                    </div>
                </div>
              </motion.div>
            ))}
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
                 <Link href="/netsuite/contact" className="px-10 py-4 bg-blue-600 text-white font-bold rounded-2xl">
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
