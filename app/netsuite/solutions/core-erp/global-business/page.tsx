"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Globe2,
  Building,
  Languages,
  Coins,
  Shield,
  Network,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Scale,
  Landmark,
  Check,
  ChevronDown
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

export default function GlobalBusinessPage() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { label: 'Countries Supported', value: 200, suffix: '+', icon: Globe2 },
    { label: 'Currencies', value: 190, suffix: '+', icon: Coins },
    { label: 'Languages', value: 27, suffix: '+', icon: Languages },
    { label: 'Tax Jurisdictions', value: 100, suffix: '+', icon: Landmark },
  ];

  const capabilities = [
    {
      title: "Multi-Subsidiary Management",
      description: "Manage multiple legal entities globally from a single platform with consolidated reporting.",
      icon: Building,
    },
    {
      title: "Multi-Currency Support",
      description: "Handle transactions in 190+ currencies with automatic exchange rate updates.",
      icon: Coins,
    },
    {
      title: "Global Tax Management",
      description: "Stay compliant with local tax regulations across 100+ jurisdictions.",
      icon: Scale,
    },
    {
      title: "Localization",
      description: "Built-in support for local accounting standards and regulatory requirements.",
      icon: Languages,
    },
    {
      title: "Global Consolidation",
      description: "Automatic consolidation of financial results across all subsidiaries.",
      icon: Network,
    },
    {
      title: "Compliance Management",
      description: "Ensure regulatory compliance with automated controls and audit trails.",
      icon: Shield,
    }
  ];

  const features = [
    {
      title: "Real-Time Consolidation",
      description: "Instant visibility across all global entities",
      icon: Network
    },
    {
      title: "Multi-Currency",
      description: "Support for 190+ currencies worldwide",
      icon: Coins
    },
    {
      title: "Tax Compliance",
      description: "Automated tax management for 100+ countries",
      icon: Scale
    },
    {
      title: "Local Compliance",
      description: "Built-in support for local regulations",
      icon: Shield
    }
  ];

  const benefits = [
    { title: "One View", description: "Consolidated real-time visibility across all global operations.", image: "/images/lap/lap1.webp" },
    { title: "Local Compliance", description: "Automated tax and reporting compliance for every jurisdiction.", image: "/images/aboutus/mission1.webp" },
    { title: "Multi-Currency", description: "Seamless management of 190+ currencies with automated rate updates.", image: "/images/aboutus/vision.webp" },
    { title: "Standardization", description: "Unified processes and data across all subsidiaries.", image: "/images/aboutus/niche1.webp" }
  ];

  const challenges = [
    { title: "Fragmented Data", description: "Stop struggling with disconnected systems and manual consolidation.", image: "/images/lap/lap3.webp" },
    { title: "Regulatory Risks", description: "Mitigate risks of non-compliance in foreign markets.", image: "/images/lap/lap4.webp" },
    { title: "FX Exposure", description: "Manage currency fluctuation risks with real-time tools.", image: "/images/lap/lap5.webp" },
    { title: "Slow Expansion", description: "Launch new subsidiaries in weeks, not months.", image: "/images/aboutus/integrity.webp" }
  ];

  const pricingPlans = [
    {
      name: "Regional",
      description: "For businesses in 2-5 countries",
      price: "Contact Us",
      features: [
        "Multi-Subsidiary Support",
        "5 Currencies",
        "Basic Tax Management",
        "Standard Reporting",
        "Email Support"
      ]
    },
    {
      name: "Global",
      description: "For multinational enterprises",
      price: "Contact Us",
      popular: true,
      features: [
        "Everything in Regional",
        "Unlimited Currencies",
        "Advanced Tax Management",
        "Global Consolidation",
        "24/7 Support",
        "Dedicated Manager"
      ]
    },
    {
      name: "Enterprise",
      description: "For complex global operations",
      price: "Contact Us",
      features: [
        "Everything in Global",
        "Custom Localization",
        "Advanced Compliance",
        "Inter-company Management",
        "Priority Support",
        "Custom SLA"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is Global Business Management in NetSuite?",
      answer: "NetSuite Global Business Management enables you to manage multiple subsidiaries, currencies, and tax regulations from a single cloud solution, ensuring standardized processes globally while maintaining local compliance requirements."
    },
    {
      question: "How many currencies does NetSuite support?",
      answer: "NetSuite supports 190+ currencies with automatic exchange rate updates. The system handles multi-currency transactions, currency revaluation, and consolidation seamlessly across all your global operations."
    },
    {
      question: "Can NetSuite handle different accounting standards?",
      answer: "Yes! NetSuite supports multiple accounting standards including IFRS, US GAAP, and local GAAP requirements. You can maintain different accounting treatments for different entities while consolidating results according to your group reporting standard."
    },
    {
      question: "How does inter-company transaction management work?",
      answer: "NetSuite automatically tracks and manages inter-company transactions between subsidiaries. The system creates matching entries and handles elimination entries during consolidation, ensuring accurate group-level reporting."
    },
    {
      question: "What about tax compliance in different countries?",
      answer: "NetSuite provides built-in tax management for 100+ jurisdictions with automated tax calculations, VAT/GST compliance, nexus management, and local tax reporting capabilities to ensure you stay compliant globally."
    },
    {
      question: "How long does it take to add a new subsidiary?",
      answer: "With NetSuite's pre-configured localization for key regions, you can typically set up a new subsidiary in days rather than months. The exact timeline depends on local requirements and complexity."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* Full Screen Hero Section with Integrated Metrics */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/aboutus/mission3.webp"
            alt="Global Business Management Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Gradient Overlay - Left to Right */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/80 to-transparent z-10" />

        {/* Main Content Container */}
        <div className="relative z-20 flex-1 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 w-full pt-32 sm:pt-40 md:pt-48 pb-12 sm:pb-16">
          {/* Hero Content */}
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
                Manage Your <span className="text-blue-600">Global Operations</span>
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
                Manage multiple subsidiaries, currencies, and tax regulations from a single cloud solution.
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
                  Go Global Now
                </Link>
                <Link
                  href="#capabilities"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/20 text-center"
                >
                  Explore Capabilities
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

          {/* Scroll Indicator */}
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

      {/* What is Global Business Management Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image
                src="/images/aboutus/mission2.webp"
                alt="Global Business Management"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Global Management</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  What is Global Business Management?
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite Global Business Management enables multinational organizations to manage all their subsidiaries, currencies, and compliance requirements from a single unified platform.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Gain real-time visibility across your global operations while maintaining local compliance and standardizing processes worldwide.
              </p>
              <div className="pt-4">
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Capabilities */}
      <section id="capabilities" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Global Capabilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Everything you need for global operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{
                  scale: 1.05,
                  background: "linear-gradient(to bottom right, #ffffff, #ffffff)",
                  transition: { duration: 0.3, ease: "easeInOut" }
                }}
                style={{
                  background: "linear-gradient(to bottom right, #0a1f44, #1a2f5a, #0f2847)"
                }}
                className="border border-blue-500/20 rounded-2xl p-8 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 ease-in-out group"
              >
                <div className="p-3 bg-blue-600 rounded-xl w-fit mb-6 group-hover:bg-gray-900 transition-colors">
                  <capability.icon className="w-6 h-6 text-white" />
                </div>

                <h4 className="text-xl font-bold text-white group-hover:text-gray-900 mb-3 transition-colors duration-300 ease-in-out">
                  {capability.title}
                </h4>

                <p className="text-blue-100 group-hover:text-gray-600 leading-relaxed text-sm transition-colors duration-300 ease-in-out">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful global management capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  background: "linear-gradient(to bottom right, #ffffff, #f8fafc)",
                  transition: { duration: 0.3 }
                }}
                style={{
                  background: "linear-gradient(to bottom right, #1e40af, #3b82f6)"
                }}
                className="rounded-2xl p-8 border border-blue-400/30 hover:border-gray-300 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-3 bg-white/20 group-hover:bg-blue-600 rounded-xl w-fit mb-4 transition-colors">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-gray-900 mb-2 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-blue-100 group-hover:text-gray-600 text-sm leading-relaxed transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#000b21] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Benefits</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Global Advantages</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Why leaders choose NetSuite for global business</p>
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
      <section className="py-24 bg-linear-to-b from-[#000b21] via-[#000b21] to-[#0a0a0a] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-blue-600/20 text-blue-300 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Global Complexities Solved</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Overcome obstacles to international growth</p>
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

      {/* Pricing Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Pricing
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Scalable solutions for global expansion
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 border-2 ${plan.popular
                  ? 'border-blue-600 shadow-2xl shadow-blue-200 relative'
                  : 'border-gray-200'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">
                      Most Popular
                    </span>
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
                      <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/netsuite/contact"
                  className={`block text-center px-6 py-3 rounded-xl font-bold transition ${plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
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
              Everything you need to know about Global Business Management
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
                  <span className={`text-left font-bold text-lg transition-colors ${openFAQ === index ? 'text-blue-700' : 'text-gray-900 group-hover:text-blue-600'
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
                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
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

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden border border-gray-200"
          >
            <Image
              src="/images/aboutus/CTA2.webp"
              alt="Expand Globally with NetSuite"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />

            <div className="relative z-10 p-12 lg:p-24">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Scale Globally?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how NetSuite can help you manage global operations.
                </p>
                <Link
                  href="/netsuite/contact"
                  className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl"
                >
                  Talk to a Global Expert
                  <ArrowRight size={20} />
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
