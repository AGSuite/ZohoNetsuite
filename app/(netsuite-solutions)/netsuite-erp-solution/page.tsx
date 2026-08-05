"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import {
  Shield, Zap, BarChart3, CheckCircle2, ArrowRight,
  DollarSign, Check, ChevronDown, Layers, TrendingUp, ChevronRight
} from 'lucide-react';
import { ERPCircularDesign } from '@/app/netsuite/components/ERPCircularDesign';
import { FAQ } from '@/app/components/home/FAQ';
import ContactFormDesign4 from '@/app/netsuite/components/ContactFormDesign4';
import NSServicesSection from '@/app/netsuite/components/NSServicesSection';

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

export default function NetSuiteERPPage() {

  // Static particle data — defined outside render to prevent SSR/client mismatch
  const CTA_PARTICLES = [
    { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 },
    { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
    { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 },
    { w: 1.7, h: 2.4, top: 62, left: 55, dur: 3.8, delay: 2.1 },
    { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 },
    { w: 1.2, h: 1.5, top: 90, left: 85, dur: 4.7, delay: 1.9 },
    { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 },
    { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 },
    { w: 2.4, h: 2.7, top: 55, left: 15, dur: 4.4, delay: 0.9 },
    { w: 1.5, h: 1.9, top: 70, left: 40, dur: 5.8, delay: 2.5 },
    { w: 2.0, h: 1.4, top: 18, left: 63, dur: 3.9, delay: 1.7 },
    { w: 2.9, h: 2.2, top: 42, left: 88, dur: 5.0, delay: 0.2 },
    { w: 1.6, h: 2.5, top: 85, left: 25, dur: 4.2, delay: 3.0 },
    { w: 2.2, h: 1.1, top: 22, left: 92, dur: 6.5, delay: 1.0 },
    { w: 1.8, h: 2.8, top: 50, left: 5, dur: 3.6, delay: 2.3 },
    { w: 2.5, h: 1.7, top: 95, left: 48, dur: 4.9, delay: 0.4 },
    { w: 1.3, h: 2.3, top: 38, left: 60, dur: 5.3, delay: 1.5 },
    { w: 2.7, h: 1.9, top: 67, left: 32, dur: 4.6, delay: 2.8 },
    { w: 1.1, h: 1.6, top: 10, left: 78, dur: 3.3, delay: 0.7 },
    { w: 2.4, h: 2.1, top: 75, left: 93, dur: 5.6, delay: 1.8 },
  ];
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const stats = [
    { label: 'Faster Reporting', value: 50, suffix: '%', icon: BarChart3 },
    { label: 'Cost Reduction', value: 35, suffix: '%', icon: DollarSign },
    { label: 'Process Automation', value: 80, suffix: '%', icon: Zap },
    { label: 'Data Accuracy', value: 99, suffix: '%', icon: Shield },
  ];



  const benefits = [
    {
      title: "Unified Platform",
      description: "Consolidate every department on a single cloud platform, eliminating data silos and manual reconciliation.",
      image: "/images/benefits/benefit_unified_platform.png",
      points: ["One source of truth across Finance, HR, CRM & Supply Chain", "Eliminate duplicate data entry across systems", "Real-time sync between all departments", "Single login for your entire organisation"]
    },
    {
      title: "Real-Time Visibility",
      description: "Access critical business metrics instantly with live dashboards and customisable reports.",
      image: "/images/benefits/benefit_financial_visibility.png",
      points: ["Configurable role-based dashboards", "Live KPIs without manual data pulls", "Drill-down from summary to transaction level", "Automated scheduled reports delivered to inboxes"]
    },
    {
      title: "Scalable Architecture",
      description: "Start lean and grow without limits — NetSuite scales with your headcount, geography, and transaction volume.",
      image: "/images/benefits/benefit_scalable_growth.png",
      points: ["Add subsidiaries and currencies in minutes", "Multi-entity consolidation built-in", "No infrastructure upgrades required", "Handles millions of transactions seamlessly"]
    },
    {
      title: "Cost Efficiency",
      description: "Automate repetitive tasks and eliminate redundant systems to significantly reduce operational costs.",
      image: "/images/benefits/benefit_cost_efficiency.png",
      points: ["Reduce IT overhead with a single SaaS platform", "Automate month-end close and reconciliations", "Cut software licence sprawl across tools", "Lower audit costs with built-in controls"]
    },
    {
      title: "Intelligent Automation",
      description: "Take humans out of the loop for repetitive, rules-based tasks — freeing your team for strategic work.",
      image: "/images/benefits/benefit_automated_close.png",
      points: ["Automated AP/AR, invoicing & purchase orders", "Workflow rules for approvals and escalations", "Revenue recognition on auto-pilot", "AI-driven demand forecasting"]
    },
    {
      title: "Compliance & Security",
      description: "Stay audit-ready at all times with enterprise-grade security controls and built-in compliance frameworks.",
      image: "/images/benefits/benefit_compliance_security.png",
      points: ["SOC 1, SOC 2 & ISO 27001 certified", "Role-based access controls & audit trails", "Multi-factor authentication built-in", "Country-specific tax & regulatory compliance"]
    },
  ];



  const pricingPlans = [
    { name: "Starter", description: "Perfect for growing businesses", price: "Contact Us", features: ["Core Financial Management", "Order Management", "Basic Reporting", "Up to 10 Users", "Email Support"] },
    { name: "Professional", description: "For established enterprises", price: "Contact Us", popular: true, features: ["Everything in Starter", "Advanced Analytics", "Multi-Currency", "Unlimited Users", "24/7 Support", "Custom Integrations"] },
    { name: "Enterprise", description: "For large-scale operations", price: "Contact Us", features: ["Everything in Professional", "NetSuite Global Business Management", "Advanced Customization", "Dedicated Account Manager", "Priority Support", "Custom SLA"] }
  ];

  const faqs = [
    { question: "What is NetSuite ERP?", answer: "NetSuite ERP is a comprehensive cloud-based Enterprise Resource Planning system that integrates all your core business processes including financials, inventory, order management, production, and more into a single unified platform." },
    { question: "How long does implementation take?", answer: "Implementation timeline varies based on your business complexity and requirements. Typically, it ranges from 3-6 months for standard implementations. We work closely with you to ensure a smooth transition with minimal disruption." },
    { question: "Can NetSuite ERP integrate with our existing systems?", answer: "Yes! NetSuite offers robust integration capabilities through APIs, pre-built connectors, and custom integrations. We can connect NetSuite with your CRM, e-commerce platforms, third-party applications, and legacy systems." },
    { question: "Is training provided?", answer: "Absolutely. We provide comprehensive training for your team including administrator training, end-user training, and ongoing support. Training can be conducted on-site or remotely based on your preference." },
    { question: "What about data security?", answer: "NetSuite employs enterprise-grade security measures including data encryption, regular security audits, SOC 1 and SOC 2 compliance, role-based access controls, and multi-factor authentication to ensure your data is always protected." },
    { question: "How much does NetSuite ERP cost?", answer: "NetSuite pricing is customized based on your specific needs, number of users, modules required, and implementation complexity. Contact us for a detailed quote tailored to your business requirements." }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* Hero Section - Dark Gradient, Left Text + Right Image */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000d2e] to-[#001a4d]">
        {/* Ambient glow effects */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        {/* Thin square grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '70px 70px',
          }}
        />

        {/* Main Content Container */}
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-28 sm:pt-36 pb-12">
          {/* Breadcrumb — absolutely positioned so it doesn't affect centering */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors duration-200">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite-products" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite ERP</span>
          </motion.nav>

          {/* Hero Content - Two Column */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8">
            {/* LEFT: Headline + Subtitle + Button */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  Eliminate Data Silos with AI-Powered NetSuite ERP
                </span>
              </motion.h1>

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-blue-300 mb-5 sm:mb-6 rounded-full"
              />

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8 sm:mb-10"
              >
                Join 43,000+ businesses using Oracle NetSuite ERP to unify finance, inventory, supply chain, and CRM on a single cloud platform. Empower your enterprise with AI-driven insights, automated workflows, and real-time operational visibility.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Started
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT: ERP Circular Design */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ height: 580 }}
            >
              <ERPCircularDesign />
            </motion.div>
          </div>

          {/* Metrics Row - below the divider */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-8 sm:pt-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.12, duration: 0.5 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl sm:rounded-2xl group-hover:bg-blue-700/30 transition-colors duration-300">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 sm:mb-2 flex items-center justify-center gap-1">
                    <Counter value={stat.value} />
                    <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{stat.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base px-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secondary Navigation Bar */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[
              { label: "What is NetSuite Enterprise Resource Planning?", href: "#what-is-erp" },
              { label: "Modules", href: "#modules" },
              { label: "Benefits", href: "#benefits" },
              { label: "Services", href: "#services" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-500">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>


      {/* What is NetSuite ERP Section with Light Gradient */}
      <section id="what-is-erp" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden"
            >
              <div className="relative w-full h-full p-4 lg:p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-indigo-100">
                  <Image
                    src="/images/Dashboard/ERP Dashboard_11zon.jpg"
                    alt="NetSuite ERP Solution Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-between py-6 h-full"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                  Turn Complexity into Clarity with NetSuite ERP
                </h2>
              </div>
              <div className="space-y-2 my-auto pt-2 md:pt-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  Disconnected systems, manual processes, and limited visibility slow business growth. Oracle NetSuite ERP brings finance, operations, inventory, CRM, and business intelligence together into one intelligent cloud platform — helping organizations simplify operations, automate workflows, and make faster, data-driven decisions.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Powered by real-time analytics and AI-driven insights, NetSuite ERP enables businesses to gain complete operational visibility, improve efficiency, and scale with confidence. From fast-growing startups to global enterprises, NetSuite delivers the agility, automation, and financial control modern businesses need to drive sustainable growth and stay ahead in a rapidly evolving market.
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)',
                    color: '#ffffff',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#0a1f5c';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 10px 25px -5px rgba(10, 31, 92, 0.3)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.background = 'linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)';
                    (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff';
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                  }}
                >
                  <span>Unlock NetSuite Power</span>
                  <motion.span
                    className="flex items-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* NetSuite ERP Modules Section */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">
            NetSuite ERP Modules
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">
            All in one integrated modules to manage every dimension of your business under single unified platform.
          </motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {[
              { title: "Financial Management", description: "Real-time P&L, balance sheets, multi-currency, tax compliance, and automated close.", image: "/images/modules/financial_management.png", color: "#1e8a9e", rgb: "14,108,130" },
              { title: "Procurement", description: "Automate purchase orders, vendor management, and approval workflows end-to-end.", image: "/images/modules/procurement.png", color: "#3b5299", rgb: "40,65,145" },
              { title: "Manufacturing", description: "Work order management, production scheduling, BOM, and shop floor control.", image: "/images/modules/manufacturing.png", color: "#8b3a6a", rgb: "125,42,88" },
              { title: "Inventory Management", description: "Real-time multi-location inventory tracking with demand planning and reorder automation.", image: "/images/modules/inventory_management.png", color: "#1a7a55", rgb: "18,108,72" },
              { title: "Order Management", description: "Streamline quote-to-cash with order fulfilment, billing, and revenue recognition.", image: "/images/modules/order_management.png", color: "#a05a18", rgb: "145,75,18" },
              { title: "Warehouse Management", description: "Barcode-driven receiving, pick/pack/ship, and bin management at any scale.", image: "/images/modules/warehouse_management.png", color: "#4a3a8a", rgb: "65,45,130" },
              { title: "Supply Chain", description: "End-to-end supply chain visibility with demand sensing and supplier collaboration.", image: "/images/modules/supply_chain.png", color: "#1a6080", rgb: "20,88,115" },
              { title: "CRM", description: "Unified customer data, pipeline tracking, service cases, and marketing campaigns.", image: "/images/modules/crm.png", color: "#6a2575", rgb: "95,30,105" },
              { title: "Project Management", description: "Resource allocation, time tracking, project accounting, and milestone billing.", image: "/images/modules/project_management.png", color: "#154e8a", rgb: "18,68,130" },
              { title: "Workforce Management", description: "Time & attendance, scheduling, and labour cost analytics tied to payroll.", image: "/images/modules/workforce_management.png", color: "#1a6545", rgb: "20,95,60" },
              { title: "HR Management", description: "Employee records, onboarding, performance reviews, and benefits administration.", image: "/images/modules/hr_management.png", color: "#8a2a3a", rgb: "130,35,48" },
              { title: "Ecommerce", description: "Native B2B/B2C storefront connected directly to inventory, orders, and fulfilment.", image: "/images/modules/ecommerce.png", color: "#0f4e8a", rgb: "12,68,130" },
              { title: "Marketing Automation", description: "Campaign management, lead nurture, and ROI analytics integrated with CRM.", image: "/images/modules/marketing_automation.png", color: "#523a8a", rgb: "75,48,130" },
            ].map((mod, index) => (
              <Link key={index} href="#contact-form" className="block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white h-full"
                  style={{ minHeight: 380 }}
                >
                  {/* Top: Image Section with Color Overlay */}
                  <div className="relative h-56 shrink-0 overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)` }}
                    />
                  </div>

                  {/* Bottom: Information Section */}
                  <div
                    className="flex-1 p-5 pb-6 flex flex-col relative"
                    style={{ backgroundColor: `rgb(${mod.rgb})` }}
                  >
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">
                        {mod.title}
                      </h4>
                      <p className="text-white/90 text-sm leading-snug font-medium">
                        {mod.description}
                      </p>
                    </div>

                    {/* Hover Reveal Button */}
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Get Started <ArrowRight size={10} />
                      </span>
                    </div>

                    {/* Multi-color Bottom Border */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* Benefits Section - Redesigned like NSKeyCapabilities with Dark Blue Theme */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #060e1f 0%, #0a1e4a 25%, #0f2a57 55%, #091828 80%, #050d1a 100%)" }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">

          {/* Animated Stars */}
          <style>{`
            @keyframes twinkle { 0%,100%{opacity:0.1;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
            @keyframes drift { 0%{transform:translateY(0px) translateX(0px)} 50%{transform:translateY(-12px) translateX(6px)} 100%{transform:translateY(0px) translateX(0px)} }
            .star { position:absolute; border-radius:9999px; background:white; animation: twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
          `}</style>

          {/* Small stars scattered */}
          {[
            { w: 2, h: 2, top: '8%', left: '12%', dur: '2.5s', delay: '0s' },
            { w: 1, h: 1, top: '15%', left: '28%', dur: '3.2s', delay: '0.5s' },
            { w: 3, h: 3, top: '22%', left: '45%', dur: '4s', delay: '1s' },
            { w: 1, h: 1, top: '5%', left: '62%', dur: '2.8s', delay: '0.3s' },
            { w: 2, h: 2, top: '30%', left: '78%', dur: '3.5s', delay: '1.5s' },
            { w: 1, h: 1, top: '55%', left: '8%', dur: '2.1s', delay: '0.7s' },
            { w: 2, h: 2, top: '70%', left: '22%', dur: '3.8s', delay: '0.2s' },
            { w: 1, h: 1, top: '42%', left: '35%', dur: '2.6s', delay: '1.2s' },
            { w: 3, h: 3, top: '80%', left: '55%', dur: '4.2s', delay: '0.9s' },
            { w: 1, h: 1, top: '60%', left: '72%', dur: '2.9s', delay: '0.4s' },
            { w: 2, h: 2, top: '18%', left: '88%', dur: '3.1s', delay: '1.8s' },
            { w: 1, h: 1, top: '90%', left: '90%', dur: '2.4s', delay: '0.6s' },
            { w: 2, h: 2, top: '48%', left: '93%', dur: '3.7s', delay: '1.1s' },
            { w: 1, h: 1, top: '75%', left: '38%', dur: '2.2s', delay: '0.8s' },
            { w: 3, h: 3, top: '35%', left: '5%', dur: '4.5s', delay: '1.4s' },
            { w: 1, h: 1, top: '92%', left: '18%', dur: '3s', delay: '0.1s' },
            { w: 2, h: 2, top: '12%', left: '70%', dur: '2.7s', delay: '1.6s' },
            { w: 1, h: 1, top: '65%', left: '48%', dur: '3.3s', delay: '0.3s' },
          ].map((s, i) => (
            <div key={i} className="star" style={{
              width: `${s.w}px`, height: `${s.h}px`,
              top: s.top, left: s.left,
              '--tw-dur': s.dur, '--tw-delay': s.delay
            } as React.CSSProperties} />
          ))}

          {/* Glow Orbs — vibrant blue tones to match the new gradient */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)" }} />

          {/* Concentric circle rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/[0.04]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.05]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >

            <h2 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Key Business Benefits of NetSuite ERP
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            {/* Left Side - Image Display (narrower) */}
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={benefits[activeBenefit].image}
                    alt={benefits[activeBenefit].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover object-center"
                  />
                  {/* Simple dark vignette only — no text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side - Interactive List (rounded container) */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index
                    ? 'bg-white shadow-xl border-l-4 border-blue-600'
                    : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'
                    }`}
                  suppressHydrationWarning
                >
                  {/* Title Row */}
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors duration-300 ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'
                      }`}>
                      {index === 0 && <Layers size={20} />}
                      {index === 1 && <BarChart3 size={20} />}
                      {index === 2 && <TrendingUp size={20} />}
                      {index === 3 && <DollarSign size={20} />}
                      {index === 4 && <Zap size={20} />}
                      {index >= 5 && <Shield size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index
                      ? 'text-gray-900'
                      : 'text-gray-300 group-hover:text-white'
                      }`}>
                      {item.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index
                      ? 'text-blue-600 rotate-90'
                      : 'text-gray-500 opacity-0 group-hover:opacity-60'
                      }`} />
                  </div>

                  {/* Expanded Content on Click */}
                  {activeBenefit === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pl-9"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={13} className="text-blue-600 mt-0.5 shrink-0" />
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NSServicesSection />



      {/* ── Pricing Section ─────────────────────────────────────────────────── */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#06303f' }}
          >
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              {/* LEFT — Text + CTA */}
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does NetSuite ERP Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite ERP pricing is modular and scales with your business. Your annual subscription typically consists of the core platform, specialized modules, and user access. As your business grows, you can easily activate additional modules or add users without any system migration. This flexible model ensures you only pay for what you need today while having the power to expand tomorrow.
                </p>
                <div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Get a Tailored Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* RIGHT — Organic Blob Image */}
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div
                  className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl"
                  style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}
                >
                  <Image src="/images/people/laptopgirl.webp" alt="NetSuite ERP Pricing" fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ variant="netsuite" id="faq" />

      {/* CTA Section — Premium Blue Gradient */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#000814] via-[#001233] to-[#002a8c] shadow-2xl"
          >
            {/* Animated star particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{
                    width: `${p.w}px`,
                    height: `${p.h}px`,
                    top: `${p.top}%`,
                    left: `${p.left}%`,
                  }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{
                    duration: p.dur,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: p.delay,
                  }}
                />
              ))}
            </div>

            {/* Glow orbs */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              {/* Left — Text */}
              <div className="text-left max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Go Live with NetSuite ERP —{" "}
                  <span className="text-cyan-300">Faster Than You Think.</span>
                </h2>
                <p className="text-white/80 text-base md:text-lg font-medium">
                  Join 43,000+ businesses that replaced spreadsheets and legacy systems with the world&apos;s #1 cloud ERP. Your transformation starts with one conversation.
                </p>
              </div>

              {/* Right — CTA Button (scrolls to form below) */}
              <a
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Start Your ERP Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactFormDesign4 />

    </div>
  );
}




