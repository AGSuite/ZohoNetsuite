"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import FlipNumbers from 'react-flip-numbers';
import {
  Users, TrendingUp, Target, Mail, Phone, Calendar,
  CheckCircle2, ArrowRight, BarChart3, Heart, Briefcase,
  Check, ChevronDown, MessageSquare, UserCircle
} from 'lucide-react';
import FooterFormSection from '@/app/components/home/FooterFormSection';

export default function NetSuiteCRMPage() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { label: 'Sales Increase', value: 45, suffix: '%', icon: TrendingUp },
    { label: 'Customer Retention', value: 85, suffix: '%', icon: Heart },
    { label: 'Lead Conversion', value: 60, suffix: '%', icon: Target },
    { label: 'Time Saved', value: 40, suffix: '%', icon: Calendar },
  ];

  const crmModules = [
    { title: "Sales Force Automation", description: "Lead to opportunity to quote management with complete pipeline visibility.", icon: Target },
    { title: "Contact Management", description: "360-degree customer view with complete interaction history.", icon: UserCircle },
    { title: "Marketing Automation", description: "Create campaigns, track ROI, and nurture leads effectively.", icon: Mail },
    { title: "Customer Service", description: "Case management and knowledge base for superior support.", icon: MessageSquare },
    { title: "Partner Management", description: "Manage partner relationships and channel sales.", icon: Briefcase },
    { title: "Analytics & Reporting", description: "Real-time insights into sales performance and customer behavior.", icon: BarChart3 },
  ];

  const pricingPlans = [
    { name: "Starter", description: "For small sales teams", price: "Contact Us", features: ["Contact Management", "Lead Tracking", "Basic Reporting", "Up to 5 Users", "Email Support"] },
    { name: "Professional", description: "For growing teams", price: "Contact Us", popular: true, features: ["Everything in Starter", "Sales Automation", "Marketing Campaigns", "Unlimited Users", "24/7 Support", "API Access"] },
    { name: "Enterprise", description: "For large organizations", price: "Contact Us", features: ["Everything in Professional", "Advanced Analytics", "Custom Workflows", "Dedicated Manager", "Priority Support", "Custom SLA"] }
  ];

  const faqs = [
    { question: "What is NetSuite CRM?", answer: "NetSuite CRM is a comprehensive customer relationship management solution integrated with NetSuite ERP, providing complete visibility into your customer interactions, sales pipeline, and marketing campaigns." },
    { question: "How does NetSuite CRM integrate with ERP?", answer: "NetSuite CRM is built on the same platform as NetSuite ERP, ensuring real-time data synchronization between sales, customer service, and back-office operations without any integration complexity." },
    { question: "Can I track marketing campaigns?", answer: "Yes! NetSuite CRM includes marketing automation capabilities that allow you to create campaigns, track ROI, segment customers, and nurture leads through automated workflows." },
    { question: "Is mobile access available?", answer: "Absolutely. NetSuite CRM offers full-featured mobile apps for iOS and Android, allowing your sales team to access customer data, update opportunities, and view dashboards from anywhere." },
    { question: "What about customer support features?", answer: "NetSuite CRM includes comprehensive customer service capabilities with case management, knowledge base, self-service portals, and SLA tracking to ensure superior customer support." },
    { question: "How long does implementation take?", answer: "CRM implementation timeline typically ranges from 6-12 weeks depending on your requirements, customizations, and data migration needs. We work closely with you to ensure a smooth transition." }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      <section className="relative h-[550px] lg:h-[600px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/images/Dashboard/netsuitedash2.webp" alt="NetSuite CRM" fill priority className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent z-10" />

        <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl font-semibold mb-4 leading-[1.1] text-white">
              NetSuite <span className="text-blue-500">CRM</span>
            </motion.h1>
            <motion.div initial={{ width: 0 }} animate={{ width: "120px" }} transition={{ delay: 0.5, duration: 0.6 }} className="h-1 bg-blue-600 mb-6" />
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed font-light">
              360-degree customer view integrated with your ERP for complete business visibility.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
              <Link href="/netsuite/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition shadow-xl shadow-blue-900/40">Get Started</Link>
              <Link href="#features" className="px-8 py-4 bg-white/10 text-white font-bold rounded-2xl hover:bg-white/20 transition backdrop-blur-md border border-white/20">Explore CRM</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section ref={statsRef} className="py-20 bg-gradient-to-b from-[#000b21] to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600/20 rounded-2xl">
                    <stat.icon className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
                <div className="text-5xl font-bold text-white mb-2 flex items-center justify-center gap-1">
                  {statsInView && <FlipNumbers height={48} width={32} color="#ffffff" play perspective={1000} numbers={String(stat.value)} />}
                  <span className="text-blue-400">{stat.suffix}</span>
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-50/30 via-white to-indigo-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-stretch">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative min-h-[400px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image src="/images/Dashboard/NetsuiteDashboard.webp" alt="What is NetSuite CRM" fill className="object-cover" />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm">About NetSuite CRM</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">What is NetSuite CRM?</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">NetSuite CRM provides a complete view of your customers integrated with your financial and operational data.</p>
              <p className="text-lg text-gray-600 leading-relaxed">From lead to opportunity to customer, manage the entire customer lifecycle with powerful automation and real-time insights.</p>
              <div className="pt-4">
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">CRM Modules</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Complete customer relationship management</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {crmModules.map((module, index) => (
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
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Flexible CRM solutions for every business size</p>
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

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">Everything you need to know about NetSuite CRM</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border border-gray-200 rounded-2xl overflow-hidden">
                <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} className="w-full px-6 py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors">
                  <span className="text-left font-bold text-gray-900 text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-blue-600 transition-transform ${openFAQ === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
            <Image src="/images/aboutus/CTA1.webp" alt="Get Started with NetSuite CRM" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="relative z-10 p-12 lg:p-24">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Transform Your Sales?</h2>
                <p className="text-xl text-gray-300 mb-8">Let's discuss how NetSuite CRM can help you close more deals.</p>
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Schedule a Demo <ArrowRight size={20} />
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
