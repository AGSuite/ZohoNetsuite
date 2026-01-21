"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Globe, ShieldCheck, Trophy, Users, TrendingUp, Zap, CheckCircle2, ArrowRight,
  BarChart3, Cloud, Server, Check, ChevronDown, Rocket, Layers, Database, Share2,
  Code, HeartHandshake
} from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function WhyNetSuitePage() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { label: 'Customers Globally', value: 40000, suffix: '+', icon: Users },
    { label: 'Years of Innovation', value: 25, suffix: '+', icon: Rocket },
    { label: 'Countries Supported', value: 217, suffix: '', icon: Globe },
    { label: 'Uptime Guarantee', value: 99, suffix: '%', icon: ShieldCheck },
  ];

  const benefits = [
    { title: "True Cloud Platform", description: "Born in the cloud, NetSuite eliminates the need for on-premise hardware and maintenance.", image: "/images/lap/lap4.webp" },
    { title: "Unified Data Model", description: "All your data in one database. No more silos between CRM, ERP, and Ecommerce.", image: "/images/lap/lap5.webp" },
    { title: "Scalability", description: "Grow from a startup to an enterprise without ever changing your ERP system.", image: "/images/lap/group1.webp" },
    { title: "Built-in Intelligence", description: "Real-time analytics and BI embedded in every process and dashboard.", image: "/images/lap/lap3.webp" }
  ];

  const challenges = [
    { title: "Fragmented Systems", description: "Stop juggling multiple disconnected systems and spreadsheets.", image: "/images/lap/lap1.webp" },
    { title: "Version Lock", description: "Never get stuck on an old version again. Everyone is always on the latest release.", image: "/images/people/laptopmen2.webp" },
    { title: "Global Expansion", description: "Expand easily with built-in multi-currency, multi-language, and tax compliance.", image: "/images/people/fourteam.webp" },
    { title: "IT Complexity", description: "Offload security, backups, and upgrades to NetSuite's world-class infrastructure.", image: "/images/people/fourteam.webp" }
  ];


  const services = [
    { title: "NetSuite Implementation", description: "Expert NetSuite implementation ensuring smooth transition and optimized processes.", icon: Database, href: "/netsuite/services/implementation" },
    { title: "NetSuite Integration", description: "Connect your apps and workflows seamlessly with API-led integrations.", icon: Share2, href: "/netsuite/services/integration" },
    { title: "NetSuite Customization", description: "Tailor NetSuite to your unique business needs with SuiteScript and SuiteCloud.", icon: Code, href: "/netsuite/services/suitecloud" },
    { title: "NetSuite Managed Support", description: "End-to-end support and optimization of your NetSuite environment.", icon: ShieldCheck, href: "/netsuite/services/managed-services" },
    { title: "NetSuite Training", description: "Comprehensive training programs to maximize system utilization.", icon: Users, href: "/netsuite/services/training-services" },
    { title: "NetSuite Consulting", description: "Strategic guidance to align NetSuite with your business goals.", icon: HeartHandshake, href: "/netsuite/services/consulting" },
  ];

  const faqs = [
    { question: "Why choose NetSuite over competitors?", answer: "NetSuite is the only true cloud ERP that provides a unified suite for financials, CRM, ecommerce, and more, offering unmatched scalability and real-time visibility compared to on-premise or fake cloud solutions." },
    { question: "Is NetSuite easy to use?", answer: "Yes, NetSuite features a modern, intuitive user interface that is role-based, ensuring users see exactly what they need to do their jobs efficiently." },
    { question: "Can it grow with my business?", answer: "Absolutely. NetSuite is designed to scale. You can start with basic financials and add modules for inventory, projects, or global consolidation as you grow." },
    { question: "How secure is my data?", answer: "NetSuite employs comprehensive security measures including 24/7 monitoring, encryption, role-based access, and redundant data centers to ensure your data is safe and always available." },
    { question: "What about upgrades?", answer: "NetSuite pushes two major upgrades per year automatically. All customizations carry over, so you are always on the latest version without the pain of traditional upgrades." },
    { question: "Do you support my industry?", answer: "NetSuite offers industry-specific editions (SuiteSuccess) with pre-defined roles, dashboards, and KPIs for dozens of verticals including software, manufacturing, retail, and services." }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* Full Screen Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lap/group2.webp"
            alt="Why NetSuite"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-black/80 to-transparent z-10" />

        <div className="relative z-20 flex-1 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-500/30 mb-6"
              >
                <Trophy className="w-4 h-4 text-blue-300" />
                <span className="text-blue-200 font-medium text-sm">Leader in Cloud ERP</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 leading-[1.1] text-white"
              >
                Why Choose <span className="text-blue-400">NetSuite?</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-1 bg-blue-500 mb-4 sm:mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light max-w-2xl"
              >
                The unified business management suite that grows with you, from startup to IPO and beyond.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <Link
                  href="/netsuite/contact"
                  className="px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold rounded-full transition-all bg-transparent border-2 border-white text-white hover:bg-gradient-to-r hover:from-blue-900 hover:to-indigo-900 hover:border-transparent shadow-xl shadow-blue-900/20 hover:shadow-2xl hover:scale-105"
                >
                  Join the Leaders
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Integrated Metrics Section */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="border-t border-white/20 pt-8 sm:pt-10 md:pt-12"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1 + (index * 0.15),
                    duration: 0.6,
                    ease: "easeOut"
                  }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-600/20 rounded-xl sm:rounded-2xl group-hover:bg-blue-600/30 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base px-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
              <ChevronDown className="w-6 h-6 text-white/60" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image src="/images/people/laptopgirl1.webp" alt="NetSuite Team and Success" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">The #1 Cloud ERP</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">One Unified Suite</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">NetSuite provides a single, integrated suite of applications for managing accounting, order processing, inventory management, production, supply chain, and warehouse operations.</p>
              <p className="text-lg text-gray-600 leading-relaxed">It gives companies clear visibility into their data and tighter control over their business, allowing them to make better decisions, faster.</p>
              <div className="pt-4">
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  View Success Stories <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#000b21] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Advantages</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Why Switch to NetSuite?</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Leave legacy systems behind</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[350px] lg:min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.5, ease: "easeOut" }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
            <div className="space-y-4">
              {benefits.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveBenefit(index)} className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeBenefit === index ? 'bg-white/10 border-blue-400/50 shadow-lg backdrop-blur-sm' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeBenefit === index ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50' : 'bg-white/10 text-blue-300'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeBenefit === index ? 'text-white' : 'text-gray-300'}`}>{item.title}</h4>
                  </div>
                  <AnimatePresence>
                    {activeBenefit === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-blue-100 mt-4 leading-relaxed pl-12">{item.description}</p>
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
      <section className="py-24 bg-gradient-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Pain Points</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Stop The Struggle</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">NetSuite solves the problems holding you back</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-4 flex flex-col justify-center">
              {challenges.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveChallenge(index)} className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeChallenge === index ? 'bg-white/10 border-blue-400/50 shadow-lg backdrop-blur-sm' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeChallenge === index ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/50' : 'bg-white/10 text-blue-300'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeChallenge === index ? 'text-white' : 'text-gray-300'}`}>{item.title}</h4>
                  </div>
                  <AnimatePresence>
                    {activeChallenge === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-blue-100 mt-4 leading-relaxed pl-12">{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 min-h-[350px] lg:min-h-[450px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeChallenge} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.5, ease: "easeOut" }} className="absolute inset-0">
                  <Image src={challenges[activeChallenge].image} alt={challenges[activeChallenge].title} fill className="object-cover" />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Services Section */}
      <section className="py-16 bg-linear-to-br from-indigo-50/40 via-white to-blue-50/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-semibold text-gray-900 text-center">
            NetSuite Services
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-700 text-lg max-w-2xl text-center">
            Partner with experts to maximize your NetSuite investment
          </motion.p>
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

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Common questions about NetSuite
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`group rounded-2xl border transition-all duration-300 ${openFAQ === index
                  ? 'bg-white border-blue-500/30 shadow-2xl shadow-blue-900/10 scale-[1.02] z-10'
                  : 'bg-white/80 border-white/50 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 hover:-translate-y-1 hover:bg-white'
                  }`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className={`text-left font-bold text-lg transition-colors ${openFAQ === index ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ml-4 ${openFAQ === index
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rotate-180 shadow-lg shadow-blue-500/30'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                    }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-8 pt-0">
                        <div className="h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent mb-6" />
                        <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative rounded-[3rem] overflow-hidden border border-gray-200">
            <Image src="/images/people/laptopgirl3.webp" alt="Get NetSuite" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="relative z-10 p-12 lg:p-24">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Grow?</h2>
                <p className="text-xl text-gray-300 mb-8">Take your business to the next level with NetSuite.</p>
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Get a Free Tour <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterFormSection />
    </div>
  );
}
