"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  ShoppingBag, RefreshCw, Layers, Users, TrendingUp, Zap,
  CheckCircle2, ArrowRight, BarChart3, Package, Truck,
  Check, ChevronDown, Repeat, Globe
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

export default function ShopifyConnectorPage() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { label: 'Faster Processing', value: 80, suffix: '%', icon: Zap },
    { label: 'Inventory Accuracy', value: 99, suffix: '%', icon: CheckCircle2 },
    { label: 'Orders Synced', value: 1000, suffix: 'k+', icon: ShoppingBag },
    { label: 'Manual Work Reduced', value: 90, suffix: '%', icon: TrendingUp },
  ];

  const benefits = [
    { title: "Real-Time Sync", description: "Sync orders, inventory, and customers between Shopify and NetSuite automatically.", image: "/images/lap/lap5.webp" },
    { title: "Inventory Management", description: "Avoid overselling with real-time inventory updates across all channels.", image: "/images/Dashboard/barcha.webp" },
    { title: "Automated Fulfillment", description: "Push tracking numbers and fulfillment status back to Shopify instantly.", image: "/images/people/laptopgirl3.webp" },
    { title: "Customer Insights", description: "Gain a 360-degree view of your customers and their buying habits.", image: "/images/people/group2.webp" }
  ];

  const challenges = [
    { title: "Overselling", description: "Eliminate the risk of selling out-of-stock items with live inventory sync.", image: "/images/aboutus/integrity.webp" },
    { title: "Manual Entry Errors", description: "Stop manually re-keying orders and minimize costly data entry mistakes.", image: "/images/people/man.webp" },
    { title: "Delayed Shipping", description: "Accelerate order processing and get products to customers faster.", image: "/images/people/laptopmen2.webp" },
    { title: "Data Silos", description: "Connect your front-end store with your back-office ERP seamlessly.", image: "/images/lap/lap1.webp" }
  ];

  const connectorFeatures = [
    { title: "Order Sync", description: "Automatically import Shopify orders into NetSuite as Sales Orders or Cash Sales.", icon: ShoppingBag },
    { title: "Product Sync", description: "Manage items in NetSuite and publish them to Shopify with one click.", icon: Package },
    { title: "Customer Sync", description: "Keep customer data consistent across both platforms.", icon: Users },
    { title: "Fulfillment Sync", description: "Update Shopify with tracking numbers and shipping status from NetSuite.", icon: Truck },
    { title: "Refund Management", description: "Process refunds and returns in NetSuite and update Shopify automatically.", icon: Repeat },
    { title: "Multi-Store Support", description: "Connect multiple Shopify stores to a single NetSuite account.", icon: Globe },
  ];

  const pricingPlans = [
    { name: "Standard", description: "For single store setups", price: "Contact Us", features: ["Order Sync", "Inventory Sync", "Customer Sync", "1 Shopify Store", "Email Support"] },
    { name: "Professional", description: "For growing brands", price: "Contact Us", popular: true, features: ["Everything in Standard", "Product Sync", "Fulfillment Sync", "Up to 3 Stores", "Priority Support", "Custom Mappings"] },
    { name: "Enterprise", description: "For high-volume merchants", price: "Contact Us", features: ["Everything in Professional", "Refund Sync", "Multi-Location Inventory", "Unlimited Stores", "Dedicated Manager", "Real-Time Sync"] }
  ];

  const faqs = [
    { question: "How does the connector work?", answer: "The connector uses the API of both NetSuite and Shopify to transfer data securely in real-time. It runs in the background, ensuring your systems are always synchronized." },
    { question: "Can I connect multiple Shopify stores?", answer: "Yes! Our connector supports multiple Shopify instances connecting to a single NetSuite account, allowing you to manage all your brands from one place." },
    { question: "Is it customizable?", answer: "Absolutely. We can map custom fields, handle specific business logic, and configure the sync to match your unique workflows and requirements." },
    { question: "How often does it sync?", answer: "Sync frequency can be configured based on your needs. Most critical data like orders and inventory usually sync in near real-time (every few minutes)." },
    { question: "Does it handle refunds?", answer: "Yes, the connector can sync refunds and cancellations from Shopify to NetSuite, ensuring your financial data is always accurate." },
    { question: "Do I need a developer?", answer: "No, our team handles the setup, configuration, and testing. We provide a fully managed solution so you can focus on growing your business." }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* Full Screen Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/lap/lap2.webp"
            alt="NetSuite Shopify Connector"
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
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#95BF47]/20 backdrop-blur-md rounded-full border border-[#95BF47]/30 mb-6"
              >
                <ShoppingBag className="w-4 h-4 text-[#95BF47]" />
                <span className="text-[#95BF47] font-medium text-sm">Official Partner Integration</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 leading-[1.1] text-white"
              >
                NetSuite <span className="text-[#95BF47]">Shopify Connector</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-1 bg-[#95BF47] mb-4 sm:mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light max-w-2xl"
              >
                Seamlessly sync orders, inventory, and customers between Shopify and NetSuite using the SuiteConnector.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <Link
                  href="/netsuite/contact"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-[#95BF47] text-black font-bold rounded-2xl hover:bg-[#a9d950] transition shadow-xl shadow-[#95BF47]/20 text-center"
                >
                  Connect Now
                </Link>
                <Link
                  href="#features"
                  className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/20 text-center"
                >
                  See How It Works
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
                    <div className="p-2 sm:p-3 bg-[#95BF47]/20 rounded-xl sm:rounded-2xl group-hover:bg-[#95BF47]/30 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-[#95BF47] group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-[#95BF47] text-2xl sm:text-3xl md:text-4xl">{stat.suffix}</span>
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
              <Image src="/images/lap/lap5.webp" alt="NetSuite and Shopify Integration" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-[#95BF47] font-bold uppercase tracking-wider text-sm">Seamless Integration</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Connect Shopify & NetSuite</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">Automate your e-commerce operations by connecting your Shopify store directly to NetSuite ERP.</p>
              <p className="text-lg text-gray-600 leading-relaxed">Eliminate manual data entry, reduce errors, and ensure your customers always see accurate inventory levels and order status.</p>
              <div className="pt-4">
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-[#95BF47] font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Get Integrated <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#000b21] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#95BF47]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-[#95BF47]/20 text-[#95BF47] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Advantages</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Why Connect?</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Streamline your e-commerce business</p>
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
                  onClick={() => setActiveBenefit(index)} className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeBenefit === index ? 'bg-white/10 border-[#95BF47]/50 shadow-lg backdrop-blur-sm' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeBenefit === index ? 'bg-[#95BF47] text-black shadow-lg shadow-[#95BF47]/50' : 'bg-white/10 text-[#95BF47]'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeBenefit === index ? 'text-white' : 'text-gray-300'}`}>{item.title}</h4>
                  </div>
                  <AnimatePresence>
                    {activeBenefit === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-gray-300 mt-4 leading-relaxed pl-12">{item.description}</p>
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#95BF47]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-[#95BF47]/20 text-[#95BF47] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Common E-commerce Hurdles</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">We solve these problems for you</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-4 flex flex-col justify-center">
              {challenges.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveChallenge(index)} className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeChallenge === index ? 'bg-white/10 border-[#95BF47]/50 shadow-lg backdrop-blur-sm' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeChallenge === index ? 'bg-[#95BF47] text-black shadow-lg shadow-[#95BF47]/50' : 'bg-white/10 text-[#95BF47]'}`}>
                      <CheckCircle2 size={20} />
                    </div>
                    <h4 className={`text-xl font-bold transition-colors ${activeChallenge === index ? 'text-white' : 'text-gray-300'}`}>{item.title}</h4>
                  </div>
                  <AnimatePresence>
                    {activeChallenge === index && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                        <p className="text-gray-300 mt-4 leading-relaxed pl-12">{item.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Connector Capabilities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Powerful sync features for your store</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connectorFeatures.map((module, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, background: "linear-gradient(to bottom right, #ffffff, #ffffff)", transition: { duration: 0.3, ease: "easeInOut" } }}
                style={{ background: "linear-gradient(to bottom right, #f0f7e6, #f7fcf0, #e6f0da)" }}
                className="border border-[#95BF47]/20 rounded-2xl p-8 hover:border-[#95BF47] hover:shadow-2xl transition-all duration-300 group">
                <div className="p-3 bg-[#95BF47] rounded-xl w-fit mb-6 group-hover:bg-black transition-colors">
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">{module.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 via-[#95BF47]/10 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-[#95BF47]/10 text-[#95BF47] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Scalable solutions for any size business</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-[#95BF47] shadow-2xl shadow-[#95BF47]/20 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-[#95BF47] text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-[#95BF47]">{plan.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#95BF47] shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/netsuite/contact" className={`block text-center px-6 py-3 rounded-xl font-bold transition ${plan.popular ? 'bg-[#95BF47] text-white hover:bg-[#a9d950]' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-[#95BF47]/5 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#95BF47]/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="bg-[#95BF47]/10 text-[#7a9e3a] px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Everything you need to know about the Shopify Connector
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
                    ? 'bg-white border-[#95BF47]/30 shadow-2xl shadow-[#95BF47]/10 scale-[1.02] z-10'
                    : 'bg-white/80 border-white/50 shadow-sm hover:shadow-xl hover:shadow-[#95BF47]/5 hover:border-[#95BF47]/20 hover:-translate-y-1 hover:bg-white'
                  }`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className={`text-left font-bold text-lg transition-colors ${openFAQ === index ? 'text-[#7a9e3a]' : 'text-slate-900 group-hover:text-[#95BF47]'
                    }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ml-4 ${openFAQ === index
                      ? 'bg-gradient-to-r from-[#95BF47] to-[#88ae40] text-white rotate-180 shadow-lg shadow-[#95BF47]/30'
                      : 'bg-gray-100 text-gray-500 group-hover:bg-[#95BF47]/20 group-hover:text-[#95BF47]'
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
            <Image src="/images/aboutus/CTA3.webp" alt="Get Connected" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="relative z-10 p-12 lg:p-24">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Automate?</h2>
                <p className="text-xl text-gray-300 mb-8">Start your seamless Shopify and NetSuite integration today.</p>
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#95BF47] hover:bg-[#a9d950] text-black font-bold rounded-2xl transition shadow-xl">
                  Get Connected <ArrowRight size={20} />
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
