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
  Megaphone,
  Map,
  Zap,
  Target,
} from "lucide-react";
import FooterContactForm from "@/app/components/shared/FooterContactForm";

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

export default function NetSuiteServicesClient() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    { label: "Projects Completed", value: 700, suffix: "+", icon: Briefcase },
    { label: "Industry Expertise", value: 15, suffix: "+", icon: Target },
    { label: "Countries Serving", value: 10, suffix: "+", icon: Globe2 },
    { label: "Years Experience", value: 15, suffix: "+", icon: Rocket },
  ];

  const services = [
    {
      title: "Digital Transformation",
      description:
        "Modernize your business for the digital age. We help you rethink workflows, automate manual processes, and migrate legacy data into a unified, high-performance cloud ecosystem that drives real business value.",
      link: "/netsuite/services/digital-transformation",
      image: "/images/Services/digitaltrans.webp",
      icon: Zap,
    },
    {
      title: "Integration Services",
      description:
        "Seamlessly connect your systems. Eliminate data silos by linking NetSuite with your CRM, e-commerce, payroll, and third-party platforms through robust, API-led integrations that ensure real-time data flow.",
      link: "/netsuite/services/integration",
      image: "/images/Services/integration2.webp",
      icon: Share2,
    },
    {
      title: "Training Services",
      description:
        "Upskill your team with expert-led training. We provide role-based training paths for admins, power users, and executives to ensure your team is confident, efficient, and productive from day one.",
      link: "/netsuite/services/training-services",
      image: "/images/netsuiteimages/Servicesimg/traning.webp",
      icon: Users,
    },
    {
      title: "Low-Code Application Development",
      description:
        "Build apps faster with minimal coding. Create bespoke SuiteApps and automations within NetSuite's native SuiteCloud platform, delivering functional tools in weeks, not months.",
      link: "/netsuite/services/low-code",
      image: "/images/Services/lowcode.webp",
      icon: Code,
    },
    {
      title: "Managed Services",
      description:
        "End-to-end IT management & support. Our team handles everything from complex troubleshooting to bi-annual upgrade readiness and continuous system fine-tuning, ensuring maximum uptime and efficiency.",
      link: "/netsuite/services/managed-services",
      image: "/images/Services/managed.webp",
      icon: ShieldCheck,
    },
  ];

  const industries = [
    {
      title: "Manufacturing",
      description: "Optimize production and supply chain operations.",
      icon: Package,
      href: "/netsuite/industries/manufacturing",
    },
    {
      title: "Software & Tech",
      description: "Accelerate growth and manage complex billing.",
      icon: Code,
      href: "/netsuite/industries/software",
    },
    {
      title: "Retail",
      description: "Deliver seamless omnichannel customer experiences.",
      icon: ShoppingCart,
      href: "/netsuite/industries/retail",
    },
    {
      title: "Wholesale Distribution",
      description: "Maximize supply chain efficiency and visibility.",
      icon: Truck,
      href: "/netsuite/industries/wholesale",
    },
    {
      title: "IT Services",
      description: "Streamline project delivery and resource utilization.",
      icon: Briefcase,
      href: "/netsuite/industries/it-services",
    },
    {
      title: "Media & Publishing",
      description: "Optimize ad sales and subscription revenue streams.",
      icon: MonitorPlay,
      href: "/netsuite/industries/media",
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
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 sm:pt-32 pb-8">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="absolute top-20 sm:top-24 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
          >
            <Link
              href="/netsuite"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite Services</span>
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
                  Empowering Businesses Through End-to-End NetSuite Services
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
                AGSuite delivers comprehensive Oracle NetSuite solutions that help organizations modernize processes, connect systems, and drive sustainable growth. From implementation and integration to optimization and managed services, we provide the expertise needed to thrive in a cloud-first world.
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
                    src="/images/Services/netsuite_hero_people.png"
                    alt="Oracle NetSuite Services"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
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
                      Global NetSuite ERP
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
              className="flex items-center justify-center rounded-2xl"
              style={{ minHeight: 340 }}
            >
              <Image
                src="/images/Services/netsuite_intro_left.png"
                alt="NetSuite Expert Services"
                width={1400}
                height={900}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                className="w-full h-auto rounded-xl object-contain border-4 border-indigo-200 shadow-2xl shadow-indigo-900/20"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl lg:text-4xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                Driving Intelligent Business Transformation with NetSuite
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Successful organizations need more than ERP implementation—they need a trusted partner that can continuously evolve their technology ecosystem. AGSuite delivers a full spectrum of Oracle NetSuite services, including Digital Transformation, System Integration, Low-Code Application Development, User Training, and Managed Services, designed to help businesses maximize value at every stage of growth.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Leveraging AI-driven automation, advanced analytics, and deep platform expertise, we create connected business environments that eliminate operational silos and improve visibility across the enterprise. The result is a smarter, more agile organization equipped to adapt, innovate, and grow in an increasingly digital world.
              </p>
              <div className="pt-4">
                <Link
                  href="/netsuite/solutions/why-netsuite/main"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest text-white transition-all"
                  style={{
                    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
                  }}
                >
                  Why NetSuite?{" "}
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

      {/* ─────────────── ALL SERVICES — ALTERNATING ROWS ─────────────── */}
      <section id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Service Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-blue-600 to-black">
              Our Core Services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We empower global enterprises with end-to-end services that cover
              every phase of the NetSuite lifecycle.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {services.map((ind, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-16 ${index < services.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  {/* IMAGE SIDE */}
                  <div
                    className={`relative ${isEven ? "order-1" : "order-1 lg:order-2"}`}
                  >
                    <div className="relative h-64 sm:h-72 lg:h-80 rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    </div>
                  </div>

                  {/* TEXT SIDE */}
                  <div
                    className={`${isEven ? "order-2" : "order-2 lg:order-1"}`}
                  >
                    <h3 className="text-2xl lg:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black via-[#1e3a8a] to-blue-600 leading-tight mb-3">
                      {ind.title}
                    </h3>
                    <p className="text-gray-500 text-base leading-relaxed mb-5 line-clamp-4">
                      {ind.description}
                    </p>
                    <Link
                      href={ind.link}
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group shadow-sm hover:shadow-md"
                      style={{
                        background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
                      }}
                      onMouseEnter={(e) => {
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background = "#fff";
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#1e3a8a";
                        (e.currentTarget as HTMLAnchorElement).style.border =
                          "1.5px solid #1e3a8a";
                      }}
                      onMouseLeave={(e) => {
                        (
                          e.currentTarget as HTMLAnchorElement
                        ).style.background =
                          "linear-gradient(135deg,#1e3a8a,#2563eb)";
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#fff";
                        (e.currentTarget as HTMLAnchorElement).style.border =
                          "none";
                      }}
                    >
                      View Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

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
              Tailored NetSuite solutions for every sector. Discover how we
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
                    className={`relative group rounded-2xl p-7 border border-gray-200 transition-all duration-300 h-full shadow-xl hover:shadow-blue-100 ${cardBgColors[index % cardBgColors.length]}`}
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
              alt="NetSuite Services"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Scale your vision with the world's #1 Cloud ERP.
                Ready to get started?
              </h2>
              <div className="flex justify-start">
                <Link
                  href="/netsuite/contact"
                  className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition shadow-xl"
                >
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterContactForm platform="NetSuite" />
    </div>
  );
}




