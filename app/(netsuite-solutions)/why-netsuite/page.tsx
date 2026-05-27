"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Cloud, Star, Globe, Users, Zap, ArrowRight, Check, ChevronRight, Layers,
  TrendingUp, CheckCircle2, Lock, ShieldCheck, RefreshCw, LineChart, BarChart3,
  Cpu, Box, Settings, Network, Lightbulb, PhoneCall, GraduationCap, Handshake,
  MessageSquare, Wrench
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";

const CTA_PARTICLES = [
  { w: 2.1, h: 1.6, top: 12, left: 8, dur: 5.2, delay: 0.5 },
  { w: 1.4, h: 2.1, top: 28, left: 22, dur: 4.1, delay: 1.2 },
  { w: 2.8, h: 1.2, top: 45, left: 37, dur: 6.3, delay: 0.8 },
  { w: 1.7, h: 2.4, top: 62, left: 55, dur: 3.8, delay: 2.1 },
  { w: 2.3, h: 1.8, top: 78, left: 70, dur: 5.5, delay: 0.3 },
  { w: 1.2, h: 1.5, top: 90, left: 85, dur: 4.7, delay: 1.9 },
  { w: 2.6, h: 2.0, top: 5, left: 50, dur: 3.5, delay: 0.6 },
  { w: 1.9, h: 1.3, top: 33, left: 72, dur: 6.1, delay: 1.4 },
];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => {
    if (inView) { spring.set(value); }
    else { spring.set(0); }
  }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

const cardBgColors = [
  "bg-gradient-to-br from-white to-[#eef0ff]",
  "bg-gradient-to-br from-white to-[#eaf6ff]",
  "bg-gradient-to-br from-white to-[#e8ffef]",
  "bg-gradient-to-br from-white to-[#f9eaff]",
  "bg-gradient-to-br from-white to-[#ffece8]",
  "bg-gradient-to-br from-white to-[#eaf8ff]",
];

export default function WhyNetsuitePage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeAdaptability, setActiveAdaptability] = useState(0);

  const stats = [
    { label: "Customer Satisfaction", value: 93, suffix: "%", icon: Star },
    { label: "Countries Supported", value: 219, suffix: "+", icon: Globe },
    { label: "Years Cloud ERP", value: 25, suffix: "+", icon: Cloud },
    { label: "Companies Worldwide", value: 43, suffix: "k+", icon: Users },
  ];

  const growBusiness = [
    {
      title: "A suite to run your business better",
      description: "NetSuite ERP provides an integrated suite of cloud applications for accounting, sales and customer service, supply chain and warehouse operations, professional services, HR, advanced analytics, and more. This suite lets you manage your entire business on a single system.",
      icon: Box,
      rgb: "30,58,138",
      image: "/images/lap/lap1.webp"
    },
    {
      title: "Embedded AI across the suite",
      description: "NetSuite centrally stores your business information in a single data model, providing an ideal foundation to maximize the use of AI across the suite. With embedded AI capabilities to assist with tasks, suggest actions, generate business insights, and analyze data faster to underpin confident decision-making, NetSuite AI powered solutions helps businesses run more efficiently, be more competitive and grow.",
      icon: Cpu,
      rgb: "37,99,235",
      image: "/images/lap/lap4.webp"
    },
    {
      title: "One Oracle",
      description: "NetSuite is uniquely positioned to take advantage of all the best that Oracle has to offer. From using the latest hardware and database technology in Oracle Cloud Infrastructure (OCI) data centers, to leveraging Oracle AI services and partnerships, to tailoring Oracle's enterprise-grade applications and technologies for NetSuite customers, there's no other solution provider that can deliver the same level of value and ROI.",
      icon: Layers,
      rgb: "202,138,4",
      image: "/images/lap/lap5.webp"
    },
    {
      title: "Continued innovation",
      description: "With automatic updates that bring enhancements and new features to all customers twice a year, NetSuite is not a static solution. You're always on the latest technology and never falling behind. It continually advances to help you keep up with the evolving demands of your organization so you can run your business better and be ready for what's next.",
      icon: TrendingUp,
      rgb: "220,38,38",
      image: "/images/lap/group1.webp"
    }
  ];

  const adaptability = [
    { title: "True cloud", description: "As the world's first cloud company, NetSuite was born in and built for the cloud. This means all our customers are on the same version of the software and automatically receive biannual updates. Additionally, NetSuite runs on the global network of Oracle Cloud Infrastructure (OCI) cloud regions you can easily scale up with increasing volumes of data and bigger workloads without impacting performance.", image: "/images/hero/netsuite_hero_v2.png", icon: Cloud },
    { title: "Unite your data", description: "Stop wasting time compiling data and reports. NetSuite brings together financial and operational data for a single, comprehensive, and real-time view of your company's performance. AI technologies can then use this data from the suite to simplify business tasks and uncover insights that drive better decision-making.", image: "/images/Dashboard/NetsuiteDashboard.webp", icon: LineChart },
    { title: "Fine tune built-in best practices", description: "NetSuite offers hundreds of prebuilt workflows based on best practices gleaned from tens of thousands of implementations. It also makes it easy for business users to configure these templates to suit their unique business needs.", image: "/images/lap/lap2.webp", icon: Settings },
    { title: "Customizations to suit your business", description: "Extend and optimize core NetSuite functionality leveraging industry-standard tools and technologies to manage change and automate each stage of your DevOps lifecycle.", image: "/images/lap/lap3.webp", icon: Wrench },
    { title: "Power of partners", description: "Connect, integrate, and extend NetSuite with hundreds of certified SuiteApp solutions provided by our vast network of partners.", image: "/images/people/fourteam.webp", icon: Network },
  ];

  const successPriority = [
    {
      title: "Direct access to expertise",
      description: "We understand that every interaction and decision can impact your business growth. That's why NetSuite Customer Success offers direct access to our global consulting and implementation experts. Our team is dedicated to helping you utilize NetSuite to its full potential, ensuring you can not only meet but exceed your business objectives.",
      icon: PhoneCall,
      image: "/images/people/threeteam.webp"
    },
    {
      title: "Accelerate your success",
      description: "Understanding that time is of the essence, we have streamlined our processes to accelerate your success. From scoping to implementation, our proven SuiteSuccess methodology is designed to get you up and running quickly and effectively. With NetSuite, you can expect a predictable deployment and rapid realization of ROI, thanks to our expert guidance and comprehensive support.",
      icon: Zap,
      image: "/images/people/laptopmen.webp"
    },
    {
      title: "All the support you need",
      description: "We're ready to lend a helping hand, providing expert implementation resources and 24/7 phone support to proactive optimization of your NetSuite solution after your business is running on NetSuite. Our training platform allows all NetSuite users in your company to engage in continuous learning.",
      icon: ShieldCheck,
      image: "/images/people/laptopgirl.webp"
    },
    {
      title: "Learn, engage and grow",
      description: "Ongoing learning and engagement is key to leveraging the full potential of NetSuite. We encourage you to participate in our live events, webinars, and in-person learning labs, which provide valuable networking opportunities and insights into optimizing your use of our platform. These interactions not only allow for direct access to NetSuite experts but also help you learn from other customers' experiences.",
      icon: GraduationCap,
      image: "/images/people/people4.webp"
    },
    {
      title: "Global community",
      description: "Our amazing NetSuite Community provides a space to collaborate, ask questions, learn, and share ideas with your peers.",
      icon: MessageSquare,
      image: "/images/people/global.webp"
    }
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">

      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#080414] via-[#0d0928] to-[#160840]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-yellow-500/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Why Choose NetSuite?</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4">
                <Star className="w-3.5 h-3.5" /> Why Choose NetSuite?
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-medium mb-4 leading-[1.15] tracking-tight text-white">
                Unlock Efficiency, Growth, and Flexibility with NetSuite ERP
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-yellow-500 to-blue-300 mb-5 rounded-full" />
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8">
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 text-base font-bold rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                  Get in Touch
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center">
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/hero/netsuite_hero_v2.png" alt="Why NetSuite" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #b45309, #f59e0b)' }}>
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">#1 Cloud ERP for 25+ Years</p>
                      <p className="text-gray-500 text-xs mt-0.5">Finance · CRM · Ecommerce · HR · Planning · AI</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="border-t border-white/15 pt-8 sm:pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-yellow-700/20 rounded-xl group-hover:bg-yellow-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Nav */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[
              { label: "What is NetSuite ERP?", href: "#what-is" },
              { label: "Growth", href: "#growth" },
              { label: "Adaptability", href: "#adaptability" },
              { label: "Your Success", href: "#success" },
              { label: "Pricing", href: "#pricing" }
            ].map(l => (
              <a key={l.href} href={l.href} className="px-5 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-yellow-600 to-blue-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Section 2: What Is NetSuite? */}
      <section id="what-is" className="pt-20 pb-20 bg-white scroll-mt-36">
        <div className="max-w-[85rem] mx-auto px-8 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl border border-gray-100 min-h-[400px]"
            >
                <Image
                src="/images/Dashboard/netsuite_erp_dashboard_realistic.png"
                alt="What Is NetSuite Dashboard"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-between py-6 h-full"
            >
              <div className="space-y-4">
                <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">Overview</span>
                <h2 className="text-3xl md:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-700 leading-tight">
                  What Is NetSuite ERP?
                </h2>
              </div>

              <div className="space-y-6 pt-2 md:pt-4">
                <p className="text-lg text-gray-600 leading-relaxed">
                  NetSuite is a cloud-based enterprise resource planning (ERP) suite that gives organizations everything they need to run their businesses efficiently and accelerate growth.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  By making data readily available, automating core processes, and ensuring proper controls, NetSuite lets business leaders respond quickly to changing conditions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  Whether you're a startup, a publicly traded company, or somewhere in between, NetSuite delivers the information and insights you need to make the right decisions quickly.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: '#ffffff' }}
                >
                  <span>Learn More</span>
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

      {/* Section 3: Helping You Grow Your Business */}
      <section id="growth" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <span className="bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Growth Framework</span>
            <h2 className="text-4xl md:text-5xl font-medium text-gray-900">Helping You Grow Your Business with NetSuite</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-8 w-full mt-12">
            {growBusiness.map((mod, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className={`group relative rounded-3xl p-8 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden ${cardBgColors[index % cardBgColors.length]}`}>
                <div className="relative z-10 h-full flex flex-col">
                  {mod.image && (
                    <div className="relative h-52 w-full mb-6 rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={mod.image}
                        alt={mod.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ background: `linear-gradient(135deg, rgb(${mod.rgb}), rgba(${mod.rgb},0.8))` }}>
                      <mod.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{mod.title}</h3>
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed flex-1 mb-8">
                    {mod.description}
                  </p>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-sm hover:gap-3 transition-all mt-auto">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Harness the Power of Adaptability */}
      <section id="adaptability" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #0a0614 0%, #130a2e 25%, #1a1040 55%, #0d0820 80%, #08050e 100%)" }}>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Harness the Power of Adaptability</h2>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[450px] lg:min-h-[550px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeAdaptability} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={adaptability[activeAdaptability].image} alt={adaptability[activeAdaptability].title} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center backdrop-blur-sm">
              {adaptability.map((item, index) => (
                <button key={index} onClick={() => setActiveAdaptability(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col justify-center px-5 py-5 text-left rounded-xl transition-all duration-300 outline-none ${activeAdaptability === index ? 'bg-white shadow-xl border-l-4 border-blue-500' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeAdaptability === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      <item.icon size={24} />
                    </div>
                    <span className={`text-lg md:text-xl flex-1 font-semibold transition-all ${activeAdaptability === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-5 h-5 shrink-0 transition-all ${activeAdaptability === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeAdaptability === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-4 pl-10">
                      <p className="text-gray-600 text-base leading-relaxed mb-4">{item.description}</p>
                      <Link href="#contact-form" className="inline-flex items-center gap-2 text-blue-600 font-bold uppercase tracking-widest text-xs hover:gap-3 transition-all">
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002a8c] via-[#0044cc] to-[#0099a3] shadow-2xl"
          >
            {/* Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                />
              ))}
            </div>

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Start Your NetSuite Journey Today —{" "}
                  <span className="text-cyan-300">Run Your Entire Business Better.</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Join 43,000+ organizations that traded complexity for the world&apos;s #1 cloud ERP solution.
                </p>
              </div>

              <Link
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Get Started with NetSuite
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Your Success Is Our Top Priority */}
      <section id="success" className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">Your Success Is Our Top Priority</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Partner with experts who are dedicated to your long-term growth and operational excellence.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successPriority.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-[450px] rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>

                  {/* Expandable Info */}
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-white/90 text-sm leading-relaxed mb-6 mt-2">
                      {item.description}
                    </p>
                    <Link href="#contact-form" className="inline-flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] bg-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-white/30 transition-all">
                      Learn More <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Section ───────────────────────────────────────────────── */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: '#06303f' }}
          >
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does NetSuite Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite pricing is tailored to your business size and requirements. The annual subscription combines the core financial management platform, any additional modules you need, and your user count — plus a one-time implementation fee. As your business grows, activate new modules or add users instantly — no upgrades, no downtime, no infrastructure headaches.
                </p>
                <div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Contact Us Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="absolute bottom-8 left-6 w-14 h-14 bg-blue-400/30 z-10" style={{ borderRadius: '40% 60% 50% 50% / 50% 40% 60% 50%', transform: 'rotate(20deg)' }} />
                <div className="absolute bottom-16 left-14 w-3 h-3 bg-cyan-400/60 rounded-full z-10" />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl.webp" alt="NetSuite Pricing" fill sizes="(max-width: 768px) 100vw, 20vw" className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}




