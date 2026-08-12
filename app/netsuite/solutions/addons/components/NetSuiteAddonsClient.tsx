"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { Trophy, Users, Globe2, Rocket, Database, Share2, Code, ShieldCheck, HeartHandshake, ArrowRight, CheckCircle2, Zap, Settings } from 'lucide-react';
import ContactFormDesign4 from '@/app/netsuite/components/ContactFormDesign4';

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) { spring.set(value); } else { spring.set(0); } }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function NetSuiteAddonsClient() {

  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

  const heroStats = [
    { label: 'Certified Add-Ons', value: 25, suffix: '+', icon: CheckCircle2 },
    { label: 'Integrations Built', value: 150, suffix: '+', icon: Settings },
    { label: 'Years on SuiteCloud', value: 10, suffix: '+', icon: Trophy },
    { label: 'Support Uptime', value: 99, suffix: '%', icon: Zap },
  ];



  const services = [
    { title: "NetSuite Implementation", description: "Expert NetSuite implementation ensuring smooth transition and optimized processes.", icon: Database, href: "/netsuite/services/implementation" },
    { title: "NetSuite Integration", description: "Connect your apps and workflows seamlessly with API-led integrations.", icon: Share2, href: "/netsuite/services/integration-services" },
    { title: "NetSuite Customization", description: "Tailor NetSuite to your unique business needs with SuiteScript and SuiteCloud.", icon: Code, href: "/netsuite/services/suitecloud" },
    { title: "NetSuite Managed Support", description: "End-to-end support and optimization of your NetSuite environment.", icon: ShieldCheck, href: "/netsuite/services/managed-services" },
    { title: "NetSuite Training", description: "Comprehensive training programs to maximize system utilization.", icon: Users, href: "/netsuite/services/training-services" },
    { title: "NetSuite Consulting", description: "Strategic guidance to align NetSuite with your business goals.", icon: HeartHandshake, href: "/netsuite/services/consulting" },
  ];

  const [activeChallenge, setActiveChallenge] = useState(0);
  const [activeBenefit, setActiveBenefit] = useState(0);

  const challenges = [
    {
      title: "Data Disconnection",
      description: "Fragmented systems for sales and finance lead to data silos and manual errors.",
      image: "/images/lap/lap2.webp"
    },
    {
      title: "Compliance Hurdles",
      description: "Managing tax regulations like GST manually is time-consuming and carries audit risks.",
      image: "/images/lap/lap3.webp"
    },
    {
      title: "Scalability Roadblocks",
      description: "Entry-level tools often fail as volumes grow, causing system slowdowns and customer dissatisfaction.",
      image: "/images/lap/lap4.webp"
    },
    {
      title: "Integration Fragility",
      description: "Ad-hoc connectors often lack robust error handling, leading to frequent downtime and data loss.",
      image: "/images/lap/lap5.webp"
    },
    {
      title: "Security & Governance",
      description: "Unvetted extensions can introduce security vulnerabilities and compromise sensitive enterprise data.",
      image: "/images/aboutus/heroimg.webp"
    }
  ];

  const benefits = [
    {
      title: "Unified Ecosystem",
      description: "Connect all apps to NetSuite for a single source of truth across the enterprise.",
      image: "/images/aboutus/mission1.webp"
    },
    {
      title: "Automated Compliance",
      description: "Automatically handle GST, E-invoicing, and TDS, keeping your business audit-ready.",
      image: "/images/aboutus/niche1.webp"
    },
    {
      title: "Operational Efficiency",
      description: "Eliminate manual entry with real-time synchronization of orders, inventory, and payments.",
      image: "/images/aboutus/visiongirl.webp"
    },
    {
      title: "Real-time Synchronization",
      description: "Ensure instant data flow between platforms, preventing overselling and delayed shipments.",
      image: "/images/aboutus/heroimg1.webp"
    },
    {
      title: "Certified Reliability",
      description: "Add-ons built to SuiteCloud standards ensure stability through future NetSuite updates.",
      image: "/images/aboutus/mission.webp"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* Premium Hero Section — Smart Commission Style */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000f22] to-[#001535]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-[120px] sm:pt-[136px] pb-8">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">NetSuite Add-Ons &amp; Extensions</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Extend the core power of NetSuite with certified connectors and applications — built for high-growth businesses on SuiteCloud.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="/netsuite/contact" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                  Explore Add-Ons
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center"><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/people/fourteam.webp" alt="NetSuite Add-Ons" fill className="object-cover object-center" priority  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                      <Settings className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">SuiteCloud Extension Platform</p>
                      <p className="text-gray-500 text-xs mt-0.5">India Localization · Smart Commission · Shopify · More</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">25+ Certified Add-Ons</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Native · Reliable · Scalable</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="border-t border-white/15 pt-8 sm:pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {heroStats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>




      {/* Introduction */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-blue-600 font-bold uppercase tracking-wider text-sm"
                >
                  Enhancement
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                >
                  Maximize Your NetSuite ROI
                </motion.h3>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium"
              >
                While NetSuite provides a robust core, every business has unique requirements. Our add-ons and extensions are built to solve those specific "last mile" challenges—whether it's local tax compliance in India, complex commission structures, or high-volume e-commerce syncing.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium"
              >
                By leveraging our pre-built solutions and SuiteCloud expertise, you can avoid costly custom development and deploy industry-standard functionalities in a fraction of the time.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Consult with an Expert <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image
                src="/images/aboutus/niche1.webp"
                alt="NetSuite Extensions"
                fill
                className="object-cover"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why NetSuite Add-ons Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT SIDE - IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-xl overflow-hidden shadow-2xl border border-gray-200"
            >
              <Image
                src="/images/lap/group2.webp"
                alt="Why Choose NetSuite Add-ons for Business Growth"
                fill
                className="object-cover"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>

            {/* RIGHT SIDE - CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-blue-600 font-bold uppercase tracking-wider text-sm"
                >
                  Why Extend
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
                >
                  Why NetSuite Add-ons are Essential for Growth
                </motion.h3>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl text-gray-600 leading-relaxed font-medium"
              >
                While NetSuite delivers powerful core functionality, extending it with certified add-ons unlocks your true competitive advantage. From localized compliance to high-performance integrations, our extensions bridge the gap between out-of-the-box features and your unique business requirements—without the complexity of custom development.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="pt-4"
              >
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Explore Add-on Benefits <ArrowRight size={18} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Add-on Services Section */}
      <section id="services" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 text-center"
          >
            Suite Extension Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-700 text-lg sm:text-xl max-w-2xl text-center font-medium"
          >
            We don't just provide apps; we provide end-to-end expertise to ensure they work seamlessly with your specific configuration.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12">
            {services.map((service, index) => {
              const cardBgColors = [
                "bg-linear-to-br from-[#ffffff] to-[#eef0ff]",
                "bg-linear-to-br from-[#ffffff] to-[#eaf6ff]",
                "bg-linear-to-br from-[#ffffff] to-[#e8ffef]",
                "bg-linear-to-br from-[#ffffff] to-[#f9eaff]",
                "bg-linear-to-br from-[#ffffff] to-[#ffece8]",
                "bg-linear-to-br from-[#ffffff] to-[#eaf8ff]",
              ];

              return (
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
                      hover: {
                        scale: 1.04,
                        transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] }
                      }
                    }}
                    className={`
                      relative group rounded-xl p-7 border border-gray-200 
                      transition-all duration-300 h-full shadow-xl hover:shadow-blue-100
                      ${cardBgColors[index % cardBgColors.length]}
                    `}
                  >
                    <motion.div
                      variants={{
                        initial: { rotate: 0, y: 0 },
                        hover: {
                          rotate: 360,
                          y: -6,
                          transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] }
                        }
                      }}
                      className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5"
                    >
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h2 className="text-lg font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed mt-2 font-medium">
                      {service.description}
                    </p>

                    <div className="mt-6 border-t border-gray-300 pt-3">
                      <Link
                        href={service.href}
                        className="text-black hover:text-blue-600 text-sm font-bold transition-all"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">Benefits</span>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mt-6">Key Advantages of NetSuite Add-ons</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg sm:text-xl font-medium">Discover how extensions transform your NetSuite operations and drive growth</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-square"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={benefits[activeBenefit].image}
                    alt={benefits[activeBenefit].title}
                    fill
                    className="object-cover"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </motion.div>

            {/* RIGHT SIDE - BENEFITS LIST */}
            <div className="space-y-4">
              {benefits.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${activeBenefit === index
                    ? 'bg-white/10 border-blue-400/50 shadow-lg backdrop-blur-sm'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeBenefit === index
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                      : 'bg-white/10 text-blue-300'
                      }`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeBenefit === index ? 'text-white' : 'text-gray-300'
                      }`}>
                      {item.title}
                    </h4>
                  </div>
                  <AnimatePresence>
                    {activeBenefit === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-blue-100 mt-4 leading-relaxed pl-12 font-medium">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-24 bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-8">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl lg:text-5xl font-bold text-white mt-6">Common Business Challenges</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg sm:text-xl font-medium">Understanding the obstacles that NetSuite Add-ons help you overcome</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - CHALLENGES LIST */}
            <div className="space-y-4">
              {challenges.map((item, index) => (
                <motion.div
                  key={index}
                  onClick={() => setActiveChallenge(index)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl cursor-pointer transition-all duration-300 border ${activeChallenge === index
                    ? 'bg-white/10 border-blue-400/50 shadow-lg backdrop-blur-sm'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeChallenge === index
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50'
                      : 'bg-white/10 text-blue-300'
                      }`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeChallenge === index ? 'text-white' : 'text-gray-300'
                      }`}>
                      {item.title}
                    </h4>
                  </div>
                  <AnimatePresence>
                    {activeChallenge === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-blue-100 mt-4 leading-relaxed pl-12 font-medium">
                          {item.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* RIGHT SIDE - IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 aspect-square"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeChallenge}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <Image
                    src={challenges[activeChallenge].image}
                    alt={challenges[activeChallenge].title}
                    fill
                    className="object-cover"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-linear-to-t from-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="py-24 overflow-hidden relative bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-[2rem] p-12 lg:p-24 relative overflow-hidden"
          >
            {/* Background Image */}
            <Image
              src="/images/lap/group1.webp"
              alt="NetSuite Add-ons Background"
              fill
              className="object-cover"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />

            {/* Gradient Overlay - Dark left to transparent right */}
            <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-transparent" />

            {/* Decorative blur elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl -ml-32 -mb-32" />

            {/* Content - Left Aligned */}
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight text-left">
                Supercharge your NetSuite today. Ready to explore our apps?
              </h2>

              <div className="flex justify-start">
                <Link href="/netsuite/contact" className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition shadow-xl">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}




