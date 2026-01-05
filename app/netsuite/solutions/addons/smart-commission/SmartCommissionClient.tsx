"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { DollarSign, Percent, Calculator, ArrowRight, CheckCircle2, ShieldCheck, Zap, BarChart3 } from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';

export default function SmartCommissionClient() {
  const features = [
    {
      title: "Complex Plan Management",
      description: "Automate intricate commission structures, including tiered rates, quotas, and accelerators, directly within NetSuite.",
      icon: Calculator,
      image: "/images/Solutions/commission-plans.webp"
    },
    {
      title: "Real-time Calculations",
      description: "Commission balances are calculated in real-time as sales orders are processed, giving sales reps instant visibility into their earnings.",
      icon: Zap,
      image: "/images/Solutions/real-time-sync.webp"
    },
    {
      title: "Clawback Automation",
      description: "Automatically handle commission adjustments and clawbacks for returned orders or credit memos, ensuring accurate payouts.",
      icon: ShieldCheck,
      image: "/images/aboutus/mission.webp"
    },
    {
        title: "Rep Performance Dashboards",
        description: "Provide your sales team with personalized dashboards to track their performance against quotas and estimated commissions.",
        icon: BarChart3,
        image: "/images/aboutus/visiongirl.webp"
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
                Sales Performance Management
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
                NetSuite <span className="text-blue-500">Smart</span> Commission
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                Take the complexity out of sales incentives. Our Smart Commission add-on automates calculations, eliminates spreadsheets, and motivates your sales team.
              </p>
              
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/netsuite/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl">
                  Automate Payouts
                </Link>
                <Link href="#features" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                  Explore Features
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
                  src="/images/lap/lap4.webp"
                  alt="Smart Commission"
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
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Automated Incentives</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Add-on Capabilities</h3>
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

      <FooterFormSection />
    </div>
  );
}
