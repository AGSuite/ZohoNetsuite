"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Database, TrendingUp, Share2, Layers, Zap, Lock,
  CheckCircle2, ArrowRight, BarChart3, Cloud, Network,
  Check, ChevronDown, GitBranch, Server
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

export default function AnalyticsWarehousePage() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { label: 'Data Sources', value: 100, suffix: '+', icon: GitBranch },
    { label: 'Query Performance', value: 10, suffix: 'x', icon: Zap },
    { label: 'Data Security', value: 100, suffix: '%', icon: Lock },
    { label: 'Uptime', value: 99, suffix: '%', icon: Cloud },
  ];

  const benefits = [
    { title: "Unified Data Repository", description: "Centralize all your business data from NetSuite and 40+ other sources.", image: "/images/lap/lap2.webp" },
    { title: "Pre-Built Connectors", description: "Seamlessly connect to Salesforce, Google Analytics, Shopify, and more.", image: "/images/people/group3.webp" },
    { title: "Advanced SQL Access", description: "Empower data analysts with full SQL access for complex querying.", image: "/images/lap/lap4.webp" },
    { title: "Visual Data Modeling", description: "Create relationships and semantic models without writing code.", image: "/images/Dashboard/netsuitedash2.webp" }
  ];

  const challenges = [
    { title: "Fragmented Data", description: "Stop struggling with data scattered across spreadsheets and multiple systems.", image: "/images/lap/lap1.webp" },
    { title: "Slow Query Speeds", description: "Eliminate performance bottlenecks with an optimized data warehouse.", image: "/images/people/laptopmen2.webp" },
    { title: "Security Risks", description: "Protect your sensitive data with enterprise-grade security and governance.", image: "/images/aboutus/integrity.webp" },
    { title: "High Maintenance", description: "Reduce IT overhead with a fully fully managed, cloud-native solution.", image: "/images/aboutus/value.webp" }
  ];

  const warehouseModules = [
    { title: "Unified Data Repository", description: "Centralize all your business data from NetSuite and external sources.", icon: Database },
    { title: "Pre-Built Connectors", description: "Connect to popular data sources with pre-configured integrations.", icon: Share2 },
    { title: "SQL Access", description: "Direct SQL query access for advanced analytics and reporting.", icon: Server },
    { title: "Data Modeling", description: "Create custom data models and relationships for complex analysis.", icon: Layers },
    { title: "BI Tool Integration", description: "Connect with Tableau, Power BI, and other visualization tools.", icon: BarChart3 },
    { title: "Automated Refresh", description: "Schedule automatic data refreshes to keep your warehouse current.", icon: Network },
  ];

  const pricingPlans = [
    { name: "Starter", description: "For small data needs", price: "Contact Us", features: ["100GB Storage", "5 Data Sources", "Daily Refresh", "SQL Access", "Email Support"] },
    { name: "Professional", description: "For growing data needs", price: "Contact Us", popular: true, features: ["Everything in Starter", "500GB Storage", "Unlimited Sources", "Hourly Refresh", "24/7 Support", "BI Tool Integration"] },
    { name: "Enterprise", description: "For large-scale analytics", price: "Contact Us", features: ["Everything in Professional", "Unlimited Storage", "Real-Time Refresh", "Advanced Security", "Dedicated Manager", "Custom SLA"] }
  ];

  const faqs = [
    { question: "What is NetSuite Analytics Warehouse?", answer: "NetSuite Analytics Warehouse is a cloud-based data warehouse that consolidates data from NetSuite and external sources into a single repository optimized for analytics and reporting." },
    { question: "What data sources can I connect?", answer: "You can connect to NetSuite data, third-party applications via pre-built connectors, databases, CSV files, and any system with API access. We support 100+ external data sources." },
    { question: "Can I use my own BI tools?", answer: "Yes! Analytics Warehouse provides JDBC/ODBC connectivity, allowing you to connect popular BI tools like Tableau, Power BI, Looker, and custom applications." },
    { question: "How often is data refreshed?", answer: "Data refresh frequency depends on your plan. Options include real-time, hourly, daily, or custom schedules. You can also trigger manual refreshes as needed." },
    { question: "Is my data secure?", answer: "Absolutely. Analytics Warehouse uses enterprise-grade encryption, role-based access controls, audit trails, and complies with SOC 2, GDPR, and other security standards." },
    { question: "Can I write custom SQL queries?", answer: "Yes, Analytics Warehouse provides full SQL access, allowing you to write custom queries, create views, and perform complex joins across all your data sources." }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* Full Screen Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lap/lap5.webp"
            alt="NetSuite Analytics Warehouse Background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent z-10" />

        <div className="relative z-20 flex-1 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 leading-[1.1] text-white"
              >
                NetSuite <span className="text-blue-600">Analytics Warehouse</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-1 bg-blue-700 mb-4 sm:mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light max-w-2xl"
              >
                Centralized data warehouse for advanced analytics and insights.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <Link
                  href="/netsuite/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 transition shadow-xl shadow-blue-900/40 text-center"
                >
                  Get Started
                </Link>
                <Link
                  href="#features"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/20 text-center"
                >
                  Explore Warehouse
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
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl sm:rounded-2xl group-hover:bg-blue-700/30 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-blue-500 text-2xl sm:text-3xl md:text-4xl">{stat.suffix}</span>
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
              <Image src="/images/lap/group3.webp" alt="What is Analytics Warehouse" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">About Analytics Warehouse</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">What is Analytics Warehouse?</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">NetSuite Analytics Warehouse is a cloud data warehouse that consolidates all your business data for advanced analytics.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Combine NetSuite data with external sources, run complex SQL queries, and connect your favorite BI tools for deeper insights.</p>
              <div className="pt-4">
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#000b21] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Advantages</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Why Analytics Warehouse?</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Unify your data strategy</p>
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
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Common Data Challenges</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Break down data silos</p>
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

      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Warehouse Capabilities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Powerful data warehousing for enterprise analytics</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {warehouseModules.map((module, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, background: "linear-gradient(to bottom right, #ffffff, #ffffff)", transition: { duration: 0.3, ease: "easeInOut" } }}
                style={{ background: "linear-gradient(to bottom right, #0a1f44, #1a2f5a, #0f2847)" }}
                className="border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group">
                <div className="p-3 bg-blue-600 rounded-xl w-fit mb-6 group-hover:bg-gray-900 transition-colors">
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-white group-hover:text-gray-900 mb-3 transition-colors duration-300">{module.title}</h4>
                <p className="text-blue-100 group-hover:text-gray-600 leading-relaxed text-sm transition-colors duration-300">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50/20 to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Flexible data warehouse solutions</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-blue-600 shadow-2xl shadow-blue-200 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-blue-600">{plan.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/netsuite/contact" className={`block text-center px-6 py-3 rounded-xl font-bold transition ${plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

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
              Everything you need to know about Analytics Warehouse
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
            <Image src="/images/aboutus/CTA2.webp" alt="Get Started with Analytics Warehouse" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="relative z-10 p-12 lg:p-24">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Unify Your Data?</h2>
                <p className="text-xl text-gray-300 mb-8">Discover how Analytics Warehouse can transform your data strategy.</p>
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Get Started <ArrowRight size={20} />
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
