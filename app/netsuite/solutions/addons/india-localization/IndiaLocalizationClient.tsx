"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  ShieldCheck, FileText, Zap, Globe, BarChart3,
  CheckCircle2, ArrowRight, Stamp, Building2,
  Check, ChevronDown, Calculator, Briefcase,
  Database, Share2, Code, HeartHandshake, Users
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

export default function IndiaLocalizationClient() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeChallenge, setActiveChallenge] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { label: 'Compliance Rate', value: 100, suffix: '%', icon: ShieldCheck },
    { label: 'E-Invoice Speed', value: 0.5, suffix: 'sec', icon: Zap },
    { label: 'Reports Available', value: 50, suffix: '+', icon: FileText },
    { label: 'Tax Accuracy', value: 100, suffix: '%', icon: Calculator },
  ];

  const benefits = [
    { title: "GST & GSTR Automation", description: "Automate GSTR-1, 3B filings and GST calculations directly from your NetSuite transactions.", image: "/images/Solutions/statutory.webp" },
    { title: "E-Invoicing Excellence", description: "Direct API integration with the IRP portal for real-time IRN and QR code generation.", image: "/images/Solutions/einvoicing-addon.webp" },
    { title: "TDS/TCS Management", description: "Automated Tax Deducted at Source calculations and instant certificate generation.", image: "/images/Solutions/india-addon.webp" },
    { title: "Statutory Reporting", description: "Generate Ind-AS compliant financial statements and statutory audit reports with one click.", image: "/images/Solutions/reporting.webp" }
  ];

  const challenges = [
    { title: "GST Complexity", description: "Navigating the ever-changing landscape of Indian GST laws is a manual nightmare.", image: "/images/people/man.webp" },
    { title: "Filing Errors", description: "Manual data entry into government portals leads to costly mismatch errors and penalties.", image: "/images/lap/lap1.webp" },
    { title: "Compliance Lag", description: "Delayed reporting can lead to blocked E-way bills and disrupted logistics.", image: "/images/aboutus/mission.webp" },
    { title: "Audit Anxiety", description: "Lacking localized audit trails makes Indian statutory audits stressful and slow.", image: "/images/Dashboard/netsuitedash3.webp" }
  ];

  const localizationFeatures = [
    { title: "GSTR 1, 2, 3B Reports", description: "Generate ready-to-file JSON and excel reports for all GST requirements.", icon: FileText },
    { title: "Instant IRN Generation", description: "Click-of-a-button E-invoicing with direct government portal sync.", icon: Zap },
    { title: "TDS Certificate Prep", description: "Automate Form 16A and Form 27EQ generation for vendors.", icon: Stamp },
    { title: "E-Way Bill Integration", description: "Seamlessly generate E-way bills for your outbound logistics.", icon: Briefcase },
    { title: "Ind-AS Financials", description: "Localized Balance Sheets and P&L statements per Indian standards.", icon: Building2 },
    { title: "Voucher Numbering", description: "India-specific sequence numbering for diverse transaction types.", icon: Calculator },
  ];

  const services = [
    { title: "NetSuite Implementation", description: "Expert NetSuite implementation ensuring smooth transition and optimized processes.", icon: Database, href: "/netsuite/services/implementation" },
    { title: "NetSuite Integration", description: "Connect your apps and workflows seamlessly with API-led integrations.", icon: Share2, href: "/netsuite/services/integration" },
    { title: "NetSuite Customization", description: "Tailor NetSuite to your unique business needs with SuiteScript and SuiteCloud.", icon: Code, href: "/netsuite/services/suitecloud" },
    { title: "NetSuite Managed Support", description: "End-to-end support and optimization of your NetSuite environment.", icon: ShieldCheck, href: "/netsuite/services/managed-services" },
    { title: "NetSuite Training", description: "Comprehensive training programs to maximize system utilization.", icon: Users, href: "/netsuite/services/training-services" },
    { title: "NetSuite Consulting", description: "Strategic guidance to align NetSuite with your business goals.", icon: HeartHandshake, href: "/netsuite/services/consulting" },
  ];

  const pricingPlans = [
    { name: "Compliance", description: "For GST & TDS basics", price: "Contact Us", features: ["GST Calculations", "GSTR Reports", "TDS Management", "Statutory Reports", "Email Support"] },
    { name: "Accelerator", description: "For high-volume E-Invoicing", price: "Contact Us", popular: true, features: ["Everything in Compliance", "E-Invoicing API", "E-Way Bill API", "HSN/SAC Validation", "Priority Portal Support", "Custom Mapping"] },
    { name: "Enterprise", description: "Multi-Entity/Localization", price: "Contact Us", features: ["Everything in Accelerator", "Multi-GSTIN Support", "Advanced Audit Trails", "Dedicated Tax Expert", "Custom Statutory Formats", "Quarterly Compliance Audit"] }
  ];

  const faqs = [
    { question: "Is this an official NetSuite bundle?", answer: "Our India Localization is a proprietary AGSuite solution built on the NetSuite platform, designed to extend and enhance the standard localization capabilities for complex Indian business needs." },
    { question: "Does it support multiple GSTINs?", answer: "Yes, our solution is built to handle multi-subsidiary and multi-location setups with different GST registration numbers in one account." },
    { question: "How does E-Invoicing integration work?", answer: "We use a direct API connection (GSP/ASP) to communicate with the IRP portal. When you approve an invoice in NetSuite, it automatically fetches the IRN and QR code." },
    { question: "Can we handle TDS on advance payments?", answer: "Absolutely. The system handles TDS calculations for both advance payments and final invoices, ensuring accurate reconciliation." },
    { question: "Do you provide support for GST law updates?", answer: "Yes, our localization bundle is updated regularly to stay in sync with the latest notifications from the CBIC and GST Council." },
    { question: "Can I generate my Balance Sheet in Ind-AS format?", answer: "Yes, we providing localized report templates that automatically format your NetSuite chart of accounts into India-specific statutory formats." }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* Full Screen Hero Section */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/people/threeteam.webp"
            alt="NetSuite India Localization"
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
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 backdrop-blur-md rounded-full border border-indigo-600/30 mb-6"
              >
                <Globe className="w-4 h-4 text-indigo-400" />
                <span className="text-indigo-400 font-medium text-sm">Strategic India Compliance</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 leading-[1.1] text-white"
              >
                NetSuite <span className="text-indigo-500">India Localization</span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "120px" }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="h-1 bg-indigo-500 mb-4 sm:mb-6"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light max-w-2xl"
              >
                Master the complexities of Indian taxation. A robust, automated localization suite built for GST, E-Invoicing, and statutory reporting.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
              >
                <Link
                  href="/netsuite/contact"
                  className="px-5 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold rounded-full transition-all bg-transparent border-2 border-white text-white hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-700 hover:border-transparent shadow-xl shadow-indigo-900/20 hover:shadow-2xl hover:scale-105"
                >
                  Get Compliance Ready
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
                    <div className="p-2 sm:p-3 bg-indigo-600/20 rounded-xl sm:rounded-2xl group-hover:bg-indigo-600/30 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-indigo-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-indigo-500 text-2xl sm:text-3xl md:text-4xl">{stat.suffix}</span>
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
              <Image src="/images/Solutions/statutory.webp" alt="India Tax Compliance" fill className="object-cover" />
              <div className="absolute inset-0 bg-indigo-600/5 mix-blend-multiply" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-indigo-600 font-bold uppercase tracking-wider text-sm">Regulatory Power</h2>
                <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">Native Indian Experience</h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">Operating in India requires more than just standard accounting. Our localization bundle bridges the gap between global ERP power and local statutory necessity.</p>
              <p className="text-lg text-gray-600 leading-relaxed">From automated GST filings to real-time E-invoicing, we ensure your Indian subsidiary operates with total compliance and efficiency.</p>
              <div className="pt-4">
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all uppercase tracking-widest text-sm">
                  Consult a Tax Expert <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#000b21] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-indigo-600/20 text-indigo-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Advantages</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Why Our Localization?</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Statutory compliance at the speed of business</p>
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
                  onClick={() => setActiveBenefit(index)} className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeBenefit === index ? 'bg-white/10 border-indigo-500/50 shadow-lg backdrop-blur-sm' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeBenefit === index ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50' : 'bg-white/10 text-indigo-500'}`}>
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
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-indigo-600/20 text-indigo-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Challenges</span>
            <h3 className="text-4xl md:text-5xl font-black text-white mt-6">Compliance Risks</h3>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg">Navigating the Indian tax landscape</p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-4 flex flex-col justify-center">
              {challenges.map((item, index) => (
                <motion.div key={index} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveChallenge(index)} className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${activeChallenge === index ? 'bg-white/10 border-indigo-500/50 shadow-lg backdrop-blur-sm' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4">
                    <div className={`p-2 rounded-lg transition-colors ${activeChallenge === index ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/50' : 'bg-white/10 text-indigo-500'}`}>
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
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Localization Capabilities</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">India-specific features for global ERP</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localizationFeatures.map((module, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 50, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.05, background: "linear-gradient(to bottom right, #ffffff, #ffffff)", transition: { duration: 0.3, ease: "easeInOut" } }}
                style={{ background: "linear-gradient(to bottom right, #f0f4ff, #f8faff, #e6eeff)" }}
                className="border border-indigo-500/20 rounded-2xl p-8 hover:border-indigo-500 hover:shadow-2xl transition-all duration-300 group">
                <div className="p-3 bg-indigo-600 rounded-xl w-fit mb-6 group-hover:bg-black transition-colors">
                  <module.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 transition-colors duration-300">{module.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm transition-colors duration-300">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 via-indigo-50 to-blue-50/20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <span className="bg-indigo-600/10 text-indigo-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-6 mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Scalable compliance for Indian enterprises</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 border-2 ${plan.popular ? 'border-indigo-600 shadow-2xl shadow-indigo-500/20 relative' : 'border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase">Best Value</span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-indigo-600">{plan.price}</div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/netsuite/contact" className={`block text-center px-6 py-3 rounded-xl font-bold transition ${plan.popular ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-4 sm:mb-6 uppercase tracking-wider">
              <Zap className="w-4 h-4" />
              <span>NetSuite Services</span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 sm:mb-6 tracking-tight">
              Comprehensive NetSuite <span className="text-blue-600">Services</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const cardBgColors = ["bg-linear-to-br from-[#ffffff] to-[#eef0ff]", "bg-linear-to-br from-[#ffffff] to-[#eaf6ff]", "bg-linear-to-br from-[#ffffff] to-[#e8ffef]",
                "bg-linear-to-br from-[#ffffff] to-[#f9eaff]", "bg-linear-to-br from-[#ffffff] to-[#ffece8]", "bg-linear-to-br from-[#ffffff] to-[#eaf8ff]"];
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="h-full">
                  <motion.div whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }} className={`relative p-8 sm:p-10 rounded-3xl sm:rounded-[2.5rem] border border-gray-100 h-full shadow-2xl shadow-blue-900/5 hover:shadow-blue-900/10 transition-all group overflow-hidden ${cardBgColors[index % cardBgColors.length]}`}>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-blue-100/50 to-indigo-100/50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                    <div className="w-14 sm:w-16 h-14 sm:h-16 bg-slate-900 rounded-[1.5rem] sm:rounded-[2rem] flex items-center justify-center mb-6 sm:mb-8 shadow-xl group-hover:rotate-12 transition-transform duration-500 relative z-10">
                      <service.icon className="w-7 sm:w-8 h-7 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors relative z-10 leading-tight">{service.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg font-medium relative z-10">{service.description}</p>
                    <Link href={service.href} className="inline-flex items-center gap-2 text-blue-600 font-bold group/link relative z-10 text-base sm:text-lg">
                      Explore Service <ArrowRight className="w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-indigo-50/20 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="bg-indigo-600/10 text-indigo-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-6 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-lg">
              Everything you need to know about Indian Localization
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
                  ? 'bg-white border-indigo-500/30 shadow-2xl shadow-indigo-500/10 scale-[1.02] z-10'
                  : 'bg-white/80 border-white/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:border-indigo-500/20 hover:-translate-y-1 hover:bg-white'
                  }`}
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span className={`text-left font-bold text-lg transition-colors ${openFAQ === index ? 'text-indigo-700' : 'text-slate-900 group-hover:text-indigo-600'
                    }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-300 flex-shrink-0 ml-4 ${openFAQ === index
                    ? 'bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rotate-180 shadow-lg shadow-indigo-500/30'
                    : 'bg-gray-100 text-gray-500 group-hover:bg-indigo-500/20 group-hover:text-indigo-600'
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
            <Image src="/images/aboutus/CTA2.webp" alt="India Compliance Readiness" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="relative z-10 p-12 lg:p-24">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready for 100% Compliance?</h2>
                <p className="text-xl text-gray-300 mb-8">Simplify your Indian operations and scale with confidence.</p>
                <Link href="/netsuite/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl transition shadow-xl">
                  Contact Us <ArrowRight size={20} />
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
