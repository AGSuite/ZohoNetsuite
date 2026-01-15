"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  PieChart, 
  Receipt, 
  Wallet, 
  Building2,
  CheckCircle2,
  ArrowRight,
  Calendar,
  DollarSign,
  Percent,
  Settings,
  Check,
  ChevronDown,
  BarChart3
} from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';

export default function AccountingSoftwarePage() {
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { label: 'Faster Close', value: 50, suffix: '%', icon: Calendar },
    { label: 'Reduced Errors', value: 90, suffix: '%', icon: CheckCircle2 },
    { label: 'Time Saved', value: 40, suffix: '%', icon: TrendingUp },
    { label: 'Cost Savings', value: 30, suffix: '%', icon: DollarSign },
  ];

  const accountingFeatures = [
    {
      title: "General Ledger",
      description: "Complete financial management with real-time visibility and multi-dimensional chart of accounts.",
      icon: FileText,
    },
    {
      title: "Accounts Payable",
      description: "Streamline vendor management and invoice processing with automation.",
      icon: Receipt,
    },
    {
      title: "Accounts Receivable",
      description: "Accelerate cash collection with automated billing and payment processing.",
      icon: Wallet,
    },
    {
      title: "Fixed Asset Management",
      description: "Track assets with automated depreciation calculations.",
      icon: Building2,
    },
    {
      title: "Tax Management",
      description: "Handle complex tax scenarios with automated calculations.",
      icon: Percent,
    },
    {
      title: "Financial Reporting",
      description: "Generate real-time financial statements and custom reports.",
      icon: PieChart,
    }
  ];

  const features = [
    {
      title: "Real-Time Dashboards",
      description: "Instant visibility into financial metrics",
      icon: BarChart3
    },
    {
      title: "Automated Workflows",
      description: "Streamline approval and reconciliation",
      icon: Settings
    },
    {
      title: "Multi-Currency",
      description: "Support for global transactions",
      icon: DollarSign
    },
    {
      title: "Compliance Ready",
      description: "Built-in controls and audit trails",
      icon: CheckCircle2
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      description: "For small businesses",
      price: "Contact Us",
      features: [
        "General Ledger",
        "AR & AP",
        "Bank Reconciliation",
        "Basic Reports",
        "Email Support"
      ]
    },
    {
      name: "Advanced",
      description: "For growing companies",
      price: "Contact Us",
      popular: true,
      features: [
        "Everything in Basic",
        "Fixed Assets",
        "Tax Management",
        "Advanced Reporting",
        "Multi-Currency",
        "24/7 Support"
      ]
    },
    {
      name: "Premium",
      description: "For enterprises",
      price: "Contact Us",
      features: [
        "Everything in Advanced",
        "Global Consolidation",
        "Custom Workflows",
        "Dedicated Manager",
        "Priority Support",
        "Custom SLA"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is NetSuite Accounting Software?",
      answer: "NetSuite Accounting Software is a complete cloud-based financial management solution that includes general ledger, AR/AP, fixed assets, tax management, and comprehensive financial reporting - all in one unified platform."
    },
    {
      question: "How does NetSuite handle multi-currency accounting?",
      answer: "NetSuite supports 190+ currencies with automatic exchange rate updates. The system handles multi-currency transactions, revaluations, and consolidated reporting across all currencies seamlessly."
    },
    {
      question: "Can NetSuite automate month-end close?",
      answer: "Yes! NetSuite provides automated reconciliation, period closing controls, and standardized checklists that can reduce your month-end close time by up to 50%."
    },
    {
      question: "Is NetSuite compliant with accounting standards?",
      answer: "NetSuite supports multiple accounting standards including US GAAP, IFRS, and local GAAP. The system includes built-in controls for SOX compliance, audit trails, and regulatory reporting."
    },
    {
      question: "How does NetSuite integrate with other systems?",
      answer: "NetSuite offers robust integration capabilities through APIs, pre-built connectors for popular applications, and custom integration options to connect with your existing systems."
    },
    {
      question: "What training is provided?",
      answer: "We provide comprehensive training including administrator certification, end-user training, and ongoing support resources. Training can be conducted on-site or remotely based on your needs."
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* Unique Hero Section */}
      <section className="relative h-[550px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Dashboard/netsuitedash2.webp"
            alt="NetSuite Accounting Software Background"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-48 bg-blue-600 z-20" />

        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm border border-blue-400/30">
                Accounting Software
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-semibold mb-4 leading-[1.1] text-white"
            >
              Cloud
              <span className="block text-blue-500">Accounting Software</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="h-1 bg-blue-600 mb-6"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light"
            >
              Transform general ledger management, optimize AR/AP processes, and streamline tax compliance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                href="/netsuite/contact" 
                className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-900/40"
              >
                Start Free Trial
              </Link>
              <Link 
                href="#features" 
                className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/20"
              >
                View Features
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gradient-to-b from-[#000b21] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-2xl">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center gap-1">
                  {statsInView && (
                    <FlipNumbers
                      height={48}
                      width={32}
                      color="#ffffff"
                      play
                      perspective={1000}
                      numbers={String(stat.value)}
                    />
                  )}
                  <span className="text-blue-400">{stat.suffix}</span>
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is Accounting Software Section */}
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
                src="/images/Dashboard/NetsuiteDashboard.webp" 
                alt="NetSuite Accounting Software" 
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
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">Financial Management</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                  What is NetSuite Accounting?
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite Accounting is a comprehensive cloud financial management system that provides complete visibility into your business finances with real-time reporting and automated processes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From general ledger to AR/AP, tax management, and reporting, everything you need to manage your accounting is in one place.
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

      {/* Accounting Features */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Accounting Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Complete financial management capabilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accountingFeatures.map((feature, index) => (
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
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-white group-hover:text-gray-900 mb-3 transition-colors duration-300 ease-in-out">
                  {feature.title}
                </h4>
                
                <p className="text-blue-100 group-hover:text-gray-600 leading-relaxed text-sm transition-colors duration-300 ease-in-out">
                  {feature.description}
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
              Key Capabilities
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful features for modern accounting
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
              Flexible accounting solutions for businesses of all sizes
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
                className={`bg-white rounded-2xl p-8 border-2 ${
                  plan.popular 
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
                  className={`block text-center px-6 py-3 rounded-xl font-bold transition ${
                    plan.popular
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
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 text-lg">
              Everything you need to know about NetSuite Accounting
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="text-left font-bold text-gray-900 text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-600 transition-transform ${
                      openFAQ === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
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
              src="/images/aboutus/CTA3.webp"
              alt="Get Started with NetSuite Accounting"
              fill
              className="object-cover"
            />
            
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            
            <div className="relative z-10 p-12 lg:p-24">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Modernize Your Accounting?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Discover how NetSuite Accounting can transform your financial operations.
                </p>
                <Link 
                  href="/netsuite/contact" 
                  className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl"
                >
                  Request a Demo
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
