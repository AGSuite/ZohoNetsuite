"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Trophy,
  Users,
  Globe2,
  Rocket,
  Briefcase,
  Database,
  Share2,
  Code,
  ShieldCheck,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  BarChart3,
  ShoppingCart,
  Truck,
  Package,
  DollarSign,
  BookOpen,
  Star,
  ChevronDown,
  ChevronRight,
  MonitorPlay,
  Zap,
  GraduationCap,
  Megaphone,
  Map,
  Monitor,
  Newspaper,
  Store,
  Factory,
  Wifi
} from "lucide-react";
import ZohoServicesCards from "../../components/ZohoServicesCards";
import FooterContactForm from "@/app/components/shared/FooterContactForm";
import { FAQ } from "@/app/components/home/FAQ";

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => {
    if (inView) {
      spring.set(value);
    } else {
      spring.set(0);
    }
  }, [inView, spring, value]);
  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function ZohoServicesClient() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    { label: "Projects Completed", value: 700, suffix: "+", icon: Briefcase },
    { label: "Global Customers", value: 250, suffix: "+", icon: Globe2 },
    { label: "Customer Retention", value: 84, suffix: "%", icon: HeartHandshake },
    { label: "Years Experience", value: 15, suffix: "+", icon: Rocket },
  ];


  const industries = [
    {
      title: "Software & Technology",
      description: "Solutions for tech businesses.",
      icon: Monitor,
      href: "/zoho/software-and-technology",
    },
    {
      title: "IT & Professional Services",
      description: "Automation for service providers.",
      icon: Briefcase,
      href: "/zoho/it-and-professional-services",
    },
    {
      title: "Wholesale Distribution",
      description: "Distribution & logistics tools.",
      icon: Truck,
      href: "/zoho/wholesale-distribution",
    },
    {
      title: "Advertising & Marketing",
      description: "Boost your campaigns.",
      icon: Megaphone,
      href: "/zoho/advertising-and-digital-marketing-agencies",
    },
    {
      title: "Media & Publishing",
      description: "Tools for media houses.",
      icon: Newspaper,
      href: "/zoho/media-and-publishing",
    },
    {
      title: "Retail & E-Commerce",
      description: "Retail automation suite.",
      icon: Store,
      href: "/zoho/retail-and-e-commerce",
    },
    {
      title: "Transportation & Logistics",
      description: "Smart logistics systems.",
      icon: Truck,
      href: "/zoho/transportation-and-logistics",
    },
    {
      title: "Manufacturing",
      description: "Optimize manufacturing cycles.",
      icon: Factory,
      href: "/zoho/manufacturing",
    },
    {
      title: "Telecom Industry",
      description: "Modernize billing & telecom operations.",
      icon: Wifi,
      href: "/zoho/telecom-industry",
    },
    {
      title: "Financial Services",
      description: "Compliance, risk & real-time insights.",
      icon: DollarSign,
      href: "/zoho/financial-services",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* ─────────────── HERO SECTION ─────────────── */}
      <section
        className="relative min-h-screen overflow-hidden flex flex-col"
        style={{
          background: "linear-gradient(135deg,#000814,#000f22,#001535)",
        }}
      >
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.04) 1px,transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
          >
            <Link
              href="/zoho"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Zoho Services</span>
          </motion.nav>
          <div
            className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6"
            style={{ minHeight: "calc(100vh - 150px)" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  Global Zoho Specialist Services
                </span>
              </motion.h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "80px" }}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full"
              />
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-xl mb-8"
              >
                Scale your vision with AGSuite's comprehensive Zoho services. 
                From mission-critical implementations to complex integrations and 
                24/7 managed support, we empower brands to run entirely in the Zoho cloud.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#services"
                  className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Explore Services{" "}
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              <div className="relative w-[88%] ml-auto">
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50"
                  style={{ height: 390 }}
                >
                  <Image
                    src="/images/people/zoho_solutions_hero_person.png"
                    alt="Zoho Specialist Services"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="absolute -bottom-8 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3 z-10"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
                    }}
                  >
                    <Globe2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">
                      Certified Expert Delivery
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Implementation · Integration · Support · Consulting
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">
                      Global Zoho Partner
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      Efficient · Scalable · Reliable
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="border-t border-white/15 pt-8 sm:pt-10"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.12 }}
                  className="text-center group"
                >
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} />
                    <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">
                      {s.suffix}
                    </span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── INTRO SECTION ─────────────── */}
      <section className="pt-10 pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl w-full h-full min-h-[400px]"
            >
              <Image
                src="/images/Services/zoho_success_architecture.png"
                alt="AGSuite Zoho Expert Team"
                fill
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                Driving Intelligent Business Transformation with Zoho
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                As a certified Zoho Premium Partner, AGSuite provides the
                technical expertise and strategic vision needed to maximize
                your Zoho investment. From global rollouts to complex 
                automations, we ensure your system scales with your business.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our approach combines industry best practices with deep 
                technical knowledge in Zoho CRM, Zoho One, Zoho Flow, and API-led 
                integrations. We help you eliminate operational silos and 
                drive predictable growth in a unified cloud environment.
              </p>
              <div className="pt-4">
                <Link
                  href="/zoho/solutions"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all shadow-lg hover:shadow-xl hover:scale-105"
                  style={{
                    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
                  }}
                >
                  Explore Zoho Solutions{" "}
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <ArrowRight size={17} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ZohoServicesCards />

      {/* ─────────────── INDUSTRIES SECTION ─────────────── */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Our Vertical Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Industries We Serve
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Tailored Zoho solutions for every sector. Discover how we 
              optimize operations for your specific industry.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
            {industries.map((ind, index) => {
              const cardBgColors = [
                "bg-gradient-to-br from-white to-[#eef0ff]",
                "bg-gradient-to-br from-white to-[#eaf6ff]",
                "bg-gradient-to-br from-white to-[#e8ffef]",
                "bg-gradient-to-br from-white to-[#f9eaff]",
                "bg-gradient-to-br from-white to-[#ffece8]",
                "bg-gradient-to-br from-white to-[#eaf8ff]",
              ];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    initial="initial"
                    whileHover="hover"
                    variants={{
                      initial: { scale: 1 },
                      hover: {
                        scale: 1.04,
                        transition: { duration: 0.3, ease: [0.42, 0, 0.58, 1] },
                      },
                    }}
                    className={`relative group rounded-3xl p-7 border border-gray-200 transition-all duration-300 h-full shadow-xl hover:shadow-blue-100 ${cardBgColors[index % cardBgColors.length]}`}
                  >
                    <motion.div
                      variants={{
                        initial: { rotate: 0, y: 0 },
                        hover: {
                          rotate: 360,
                          y: -6,
                          transition: {
                            duration: 0.8,
                            ease: [0.42, 0, 0.58, 1],
                          },
                        },
                      }}
                      className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5"
                    >
                      <ind.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h2 className="text-lg font-bold text-gray-900 leading-tight">
                      {ind.title}
                    </h2>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {ind.description}
                    </p>
                    <div className="mt-6 border-t border-gray-300 pt-3">
                      <Link
                        href={ind.href}
                        className="text-black hover:text-blue-600 text-sm font-medium transition-all"
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

      {/* ─────────────── CTA SECTION ─────────────── */}
      <section className="py-24 overflow-hidden relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-gray-200 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
          >
            <Image
              src="/images/lap/group1.webp"
              alt="Zoho Services"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Scale your vision with the Zoho Business Cloud. 
                Ready to get started?
              </h2>
              <div className="flex justify-start">
                <Link
                  href="/zoho/contact"
                  className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────── FAQ SECTION ─────────────── */}
      <section id="faq" className="scroll-mt-36">
        <FAQ variant="zoho" layout="sidebar" />
      </section>

      <FooterContactForm platform="Zoho" />
    </div>
  );
}




