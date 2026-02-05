"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import { Trophy, Users, Globe2, Rocket, Layout, Database, Share2, Code, ShieldCheck, HeartHandshake, ExternalLink, ArrowRight, Settings, Zap, CheckCircle2 } from 'lucide-react';
import ContactFormDesign4 from '@/app/netsuite/components/ContactFormDesign4';

export default function NetSuiteAddonsClient() {


  // Mouse tracking for hero section
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  const background = useMotionTemplate`radial-gradient(650px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(37, 99, 235, 0.15), transparent 80%)`;

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };



  const services = [
    { title: "NetSuite Implementation", description: "Expert NetSuite implementation ensuring smooth transition and optimized processes.", icon: Database, href: "/netsuite/services/implementation" },
    { title: "NetSuite Integration", description: "Connect your apps and workflows seamlessly with API-led integrations.", icon: Share2, href: "/netsuite/services/integration" },
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
    <div className="min-h-screen selection:bg-gray-900 selection:text-white bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a]">
      {/* Premium Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-48 lg:pb-32 overflow-hidden text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex-1 max-w-2xl"
            >

              <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-tight text-white">
                NetSuite <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">Add-Ons</span>
                <br />
                & Extensions
              </h1>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-gray-300">
                Extend the core power of NetSuite with our suite of tailor-made connectors and applications designed for high-growth businesses.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <motion.div
                  className="relative inline-flex group/btn-wrap"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Vibrant Gradient Background Glow */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-600 via-indigo-500 to-purple-600 opacity-40 blur-xl group-hover/btn-wrap:opacity-70 transition duration-1000" />

                  <Link
                    href="/netsuite/contact"
                    className="relative flex items-center gap-4 px-6 py-3 md:px-10 md:py-5 bg-white/10 backdrop-blur-md text-white font-bold rounded-2xl transition shadow-2xl overflow-hidden group/btn border border-white/20 hover:bg-linear-to-r hover:from-blue-600 hover:to-indigo-700 hover:border-transparent transition-all duration-500"
                  >
                    {/* Unique Moving Circle on Hover */}
                    <motion.div
                      className="absolute top-1/2 left-0 w-16 h-16 bg-white/20 rounded-full -translate-y-1/2 pointer-events-none blur-xl"
                      initial={{ x: "-100%", opacity: 0 }}
                      whileHover={{ x: "300%", opacity: 1 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />

                    {/* Shimmer Layers */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/btn:animate-[sweep_2s_ease-in-out_infinite]" />
                    </div>

                    <span className="relative z-10 text-sm md:text-lg uppercase tracking-wider">Get Started Now</span>

                    {/* Circle Wrapper for Arrow */}
                    <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 border border-white/20 transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-blue-600 group-hover/btn:scale-110">
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                    </div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex-1 relative w-full h-[450px] max-w-[550px] z-20 lg:-mt-16"
            >
              <div className="w-full h-full rounded-2xl bg-linear-to-br from-blue-600/20 to-indigo-900/20 overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative group">
                <Image
                  src="/images/lap/lap1.webp"
                  alt="NetSuite Add-Ons & Extensions"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#000b21]/60 to-transparent" />
              </div>

              {/* Top Right Floating Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-10 -right-6 lg:-right-12 bg-white/90 backdrop-blur-3xl border border-white/30 p-4 rounded-2xl shadow-2xl max-w-[200px] z-20 group/card"
              >
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover/card:scale-110 transition-transform">
                    <CheckCircle2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 leading-none">25+</h4>
                    <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">Certified Apps</p>
                  </div>
                </div>
              </motion.div>

              {/* Center Bottom Information Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white/95 backdrop-blur-xl py-6 px-10 rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] w-full max-w-[420px] z-30 border border-white/60 group/bottom-card"
              >
                <div className="flex items-center gap-5">
                  <div className="relative flex-shrink-0 scale-110">
                    <div className="absolute inset-0 bg-blue-600 blur-lg opacity-25 group-hover/bottom-card:opacity-40 transition-opacity" />
                    <div className="relative w-14 h-14 bg-linear-to-br from-blue-600 to-indigo-600 rounded-[2.5rem] flex items-center justify-center text-white shadow-xl">
                      <Rocket size={28} strokeWidth={2.5} />
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-gray-900 text-xl font-bold leading-tight tracking-tight">
                      Maximize Your ROI
                    </p>
                    <p className="text-blue-600 text-[11px] font-black uppercase tracking-[0.2em] mt-1.5 opacity-80">
                      Certified SuiteCloud Apps
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
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
              />
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
              />
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
          <div className="text-center mb-16">
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
                  />
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
          <div className="text-center mb-16">
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
                  />
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
            />

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