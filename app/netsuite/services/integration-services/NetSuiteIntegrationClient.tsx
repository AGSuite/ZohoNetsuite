"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Share2, Link as LinkIcon, Database, Zap, Cpu, Layers, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';
import ContactFormDesign4 from '@/app/netsuite/components/ContactFormDesign4';
import FlipNumbers from 'react-flip-numbers';

export default function NetSuiteIntegrationClient() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const stats = [
    { label: 'Integrations Built', value: 120, suffix: '+', icon: Share2 },
    { label: 'Orders Processed', value: 5, suffix: 'M+', icon: LinkIcon },
    { label: 'Data Accuracy', value: 100, suffix: '%', icon: Database },
    { label: 'Uptime', value: 99, suffix: '.9%', icon: Zap },
  ];

  const integrationTypes = [
    {
      title: "E-Commerce Connectors",
      description: "Seamlessly syncing orders, inventory, and customer data between NetSuite and platforms like Shopify, Amazon, and Magento.",
      icon: Globe,
      link: "/netsuite/contact"
    },
    {
      title: "Middleware Orchestration",
      description: "Implementing and managing middleware solutions like Celigo or Dell Boomi for complex, multi-point enterprise integrations.",
      icon: Layers,
      link: "/netsuite/contact"
    },
    {
      title: "Custom API Services",
      description: "Building bespoke REST/SOAP APIs to bridge NetSuite with unique business systems and legacy applications.",
      icon: Cpu,
      link: "/netsuite/contact"
    }
  ];

  const challenges = [
    {
      title: "Eliminating Data Silos",
      description: "Disconnected systems lead to redundant work and inaccurate reporting. Our integrations break down these walls by ensuring a single source of truth.",
      image: "/images/lap/lap1.webp"
    },
    {
      title: "Resilient Architectures",
      description: "Fragile integrations that break frequently cause operational chaos. We build resilient solutions that handle errors gracefully and auto-recover.",
      image: "/images/lap/lap4.webp"
    }
  ];

  const [activeChallenge, setActiveChallenge] = useState(0);

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a]">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 max-w-2xl"
            >
              <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase py-2 px-4 rounded-full mb-6 text-blue-400 bg-blue-900/40 border border-blue-800">
                Connected Enterprise
              </span>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-[1.05] tracking-tight">
                NetSuite <span className="text-blue-500">Integration</span> Services
              </h1>
              <p className="text-xl leading-relaxed font-light text-gray-300">
                Unify your business ecosystem. We bridge the gap between NetSuite and your e-commerce stores, CRMs, and third-party apps for seamless, real-time data flow.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/netsuite/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-900/40">
                  Talk to an Architect
                </Link>
                <Link href="#solutions" className="px-8 py-4 bg-white/5 text-white font-bold rounded-2xl hover:bg-white/10 transition backdrop-blur-md border border-white/10">
                  View Connectors
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex-1 relative aspect-square max-w-[550px] z-20"
            >
              <div className="w-full h-full rounded-[3rem] bg-linear-to-br from-blue-600/20 to-indigo-900/20 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
                <Image
                  src="/images/lap/lap3.webp"
                  alt="NetSuite Integration"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000b21]/60 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-12 relative z-20 -translate-y-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 p-10 rounded-[3rem] border border-blue-500/20 backdrop-blur-xl bg-blue-600/5 shadow-2xl shadow-blue-900/20">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                  <stat.icon size={24} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-4xl md:text-5xl font-black text-white flex items-center">
                    <FlipNumbers
                      height={48}
                      width={32}
                      color="white"
                      play={statsInView}
                      numbers={stat.value.toString()}
                      duration={2}
                    />
                    {stat.suffix && <span className="ml-1 -translate-y-1">{stat.suffix}</span>}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mt-2 text-gray-400">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Connectivity Options</h2>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900">Custom Integration Solutions</h3>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {integrationTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-2xl transition-all group"
              >
                <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white">
                  <type.icon size={28} />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4">{type.title}</h4>
                <p className="text-gray-600 leading-relaxed font-light mb-8">
                  {type.description}
                </p>
                <Link href={type.link} className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                Overcoming Scaling Challenges
              </h3>
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveChallenge(index)}
                    className={`p-6 rounded-2xl cursor-pointer transition-all border ${activeChallenge === index ? 'bg-white border-blue-200 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                  >
                    <h4 className={`text-xl font-bold ${activeChallenge === index ? 'text-gray-900' : 'text-gray-500'}`}>{item.title}</h4>
                    {activeChallenge === index && (
                      <p className="text-gray-600 mt-2 text-sm leading-relaxed">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChallenge}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0"
                >
                  <Image src={challenges[activeChallenge].image} alt="Challenges" fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
