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
  Wrench,
  Settings,
  Layers,
  Map,
  Megaphone
} from "lucide-react";
import dynamic from "next/dynamic";

const FooterContactForm = dynamic(() => import("@/app/components/shared/FooterContactForm"), { ssr: false });
const FAQ = dynamic(() => import("@/app/components/home/FAQ").then(mod => mod.FAQ), { ssr: false });

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

export default function ZohoIndustriesClient() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });

  const stats = [
    { label: "Projects Completed", value: 700, suffix: "+", icon: Briefcase },
    { label: "Global Customers", value: 250, suffix: "+", icon: Globe2 },
    { label: "Customer Retention", value: 84, suffix: "%", icon: HeartHandshake },
    { label: "Years Experience", value: 15, suffix: "+", icon: Rocket },
  ];

  const industries = [
    {
      category: "Manufacturing",
      title: "Manufacturing",
      subtitle: "Optimize Production & Supply Chain",
      description:
        "Zoho provides a unified manufacturing solution that connects floor operations with core business processes. Streamline production, optimize inventory, and improve quality control with Zoho Inventory and Zoho Creator to accelerate time-to-market.",
      highlights: [
        "Production & routing management",
        "WIP & routing tracking",
        "Quality assurance & control",
        "Advanced inventory management",
      ],
      link: "/zoho/industries/manufacturing",
      image: "/images/industries/manufacture-compressed-1.webp",
      icon: Package,
      tag: "Manufacturing",
    },
    {
      category: "Software & Tech",
      title: "Software & Tech Industries",
      subtitle: "Accelerate Growth & Scale Globally",
      description:
        "Automate complex billing, revenue management, and financial consolidations. Zoho gives software industries real-time visibility into subscription metrics through Zoho Subscriptions, helping you navigate rapid growth and manage customers effectively.",
      highlights: [
        "Advanced revenue recognition",
        "Subscription & complex billing",
        "Multi-entity consolidation",
        "SaaS metrics & reporting",
      ],
      link: "/zoho/industries/software",
      image: "/images/industries/logistics-means-transport-together-with-technological-futuristic-holograms (2)_11zon.jpg",
      icon: Code,
      tag: "Technology",
    },
    {
      category: "Retail",
      title: "Retail & E-Commerce",
      subtitle: "Deliver Seamless Omnichannel Experiences",
      description:
        "Connect your e-commerce, POS, and order management with financial and inventory systems using Zoho Commerce and Zoho Inventory. Empower retailers to provide consistent, personalized shopping experiences across every customer touchpoint.",
      highlights: [
        "Unified omnichannel commerce",
        "Real-time inventory visibility",
        "Intelligent order routing",
        "Customer 360 profile",
      ],
      link: "/zoho/industries/retail",
      image: "/images/industries/ecommerce.webp",
      icon: ShoppingCart,
      tag: "Omnichannel",
    },
    {
      category: "Wholesale Distribution",
      title: "Wholesale Distribution",
      subtitle: "Maximize Supply Chain Efficiency",
      description:
        "Run your entire distribution business on Zoho. Automate procurement, optimize warehouse operations, and improve order fulfillment with Zoho Inventory and Zoho Books to reduce costs and exceed customer expectations.",
      highlights: [
        "Demand planning & procurement",
        "Warehouse Management System (WMS)",
        "Advanced order fulfillment",
        "B2B commerce capabilities",
      ],
      link: "/zoho/industries/wholesale",
      image: "/images/industries/Wholesale-Distribution-compressed.webp",
      icon: Truck,
      tag: "Distribution",
    },
    {
      category: "Professional Services",
      title: "IT Services",
      subtitle: "Streamline Project Delivery & Billing",
      description:
        "Maximize resource utilization, streamline project accounting, and automate billing using Zoho Projects and Zoho Invoice. Zoho helps IT services firms deliver projects on time and on budget while ensuring accurate revenue recognition.",
      highlights: [
        "Resource management & scheduling",
        "Project accounting & billing",
        "Time & expense tracking",
        "Services profitability reporting",
      ],
      link: "/zoho/industries/it-services",
      image: "/images/industries/Professional-Services-compressed-1 (1).webp",
      icon: Briefcase,
      tag: "Services",
    },
    {
      category: "Media & Publishing",
      title: "Media & Publishing",
      subtitle: "Optimize Ad Sales & Subscription Revenue",
      description:
        "Manage the complete media lifecycle from advertising sales to subscriber management. Zoho unifies front and back-office operations using Zoho CRM and Zoho Subscriptions to optimize revenue, reduce churn, and drive digital transformation.",
      highlights: [
        "Advertising sales & billing",
        "Subscription & circulation management",
        "Revenue recognition",
        "Financial consolidation",
      ],
      link: "/zoho/industries/media",
      image: "/images/industries/media.webp",
      icon: MonitorPlay,
      tag: "Media",
    },
    {
      category: "Advertising",
      title: "Advertising & Digital Marketing",
      subtitle: "Manage Campaigns & Margins Effectively",
      description:
        "Integrate your project management and financials using Zoho CRM and Zoho Campaigns to gain real-time visibility into campaign profitability. Zoho helps agencies optimize resource allocation and improve cash flow.",
      highlights: [
        "Campaign profitability tracking",
        "Resource utilization",
        "Client and vendor billing",
        "Financial reporting & analysis",
      ],
      link: "/zoho/industries/advertising-marketing",
      image: "/images/industries/marketing.jpg",
      icon: Megaphone,
      tag: "Agencies",
    },
    {
      category: "Transportation",
      title: "Transportation & Logistics",
      subtitle: "Drive Operational Excellence",
      description:
        "Gain complete visibility across your operations and financials with Zoho. Help transportation and logistics industries manage fleets, streamline billing with Zoho Books, and optimize customer relationships through Zoho CRM.",
      highlights: [
        "Fleet & asset management",
        "Route optimization integration",
        "Automated dispatch & billing",
        "Real-time financial visibility",
      ],
      link: "/zoho/industries/transport",
      image: "/images/industries/logistics-means-transport-together-with-technological-futuristic-holograms (2)_11zon.jpg",
      icon: Map,
      tag: "Logistics",
    },
    {
      category: "Telecom",
      title: "Telecom Industry",
      subtitle: "Modernize Billing & Streamline Operations",
      description:
        "Manage subscription billing, CRM, and multi-entity operations with Zoho's unified cloud suite — purpose-built for high-volume telecom businesses. Zoho Subscriptions, CRM, and Analytics work together to unify your telecom workflows.",
      highlights: [
        "Subscription & usage-based billing",
        "Zoho CRM + Zoho Subscriptions",
        "OSS/BSS API integrations",
        "Real-time Zoho Analytics dashboards",
      ],
      link: "/zoho/industries/telecom",
      image: "/images/industries/telecom-industry.webp",
      icon: Zap,
      tag: "Telecom",
    },
    {
      category: "Financial Services",
      title: "Financial Services",
      subtitle: "Compliance, Risk & Real-Time Insights",
      description:
        "Streamline financial operations, ensure regulatory compliance, and gain real-time visibility across your financial institution with Zoho Books, Zoho Finance Plus, and Zoho Analytics — all in one unified cloud suite.",
      highlights: [
        "Regulatory compliance (GST/TDS/IFRS)",
        "Zoho Finance Plus multi-entity",
        "Risk management & audit controls",
        "Banking & FinTech integrations",
      ],
      link: "/zoho/industries/financial-services",
      image: "/images/industries/financial-services-industry.webp",
      icon: DollarSign,
      tag: "Finance",
    },
  ];

  const services = [
    {
      title: "Zoho Implementation",
      description: "Organizations can benefit from professional assistance in implementing Zoho solutions tailored to their specific business requirements.",
      icon: Rocket,
      href: "/zoho/services/implementation",
    },
    {
      title: "Zoho Integration",
      description: "Expert support is available for seamlessly integrating Zoho applications with existing systems and third-party tools, enhancing operational efficiency.",
      icon: Layers,
      href: "/zoho/services/integration-services",
    },
    {
      title: "Zoho Customization",
      description: "Businesses can leverage custom development options to tailor Zoho applications to their unique workflows and operational needs.",
      icon: Wrench,
      href: "/zoho/services/digital-transformation",
    },
    {
      title: "Zoho Managed Support",
      description: "Ongoing support and maintenance services ensure the smooth functioning and optimal performance of Zoho solutions, providing peace of mind to organizations.",
      icon: Settings,
      href: "/zoho/services/managed-services",
    },
    {
      title: "Zoho Training",
      description: "Comprehensive training programs are available to empower teams with the necessary knowledge and skills to effectively utilize Zoho applications, maximizing their potential for business growth.",
      icon: GraduationCap,
      href: "/zoho/services/training-services",
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
            <span className="text-white/80">Zoho Industries</span>
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
                  Zoho Industry Solutions
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
                Zoho delivers unified business management solutions tailored
                for specific industries. Discover how we can help your
                organization overcome sector-specific challenges and accelerate
                growth with Zoho's powerful suite.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#industries"
                  className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Explore Industries{" "}
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
                    src="/images/industries/zoho_industries_hero.png"
                    alt="Zoho Industry Expertise"
                    fill
                    className="object-cover object-center"
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
                      Purpose-built for your industry
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      Manufacturing · Software · Retail · Services
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
                      Global Industry Expertise
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      Tailored · Innovative · Scalable
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
                src="/images/lap/group1.webp"
                alt="Zoho by Industry"
                width={560}
                height={380}
                className="w-full h-auto rounded-xl object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                Tailored to Your Industry
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Zoho is designed with industry-specific best practices built
                right in. From manufacturing floors to software subscriptions,
                Zoho provides the apps and workflows you need to run your
                business efficiently across 55+ integrated applications.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Unlike fragmented systems, Zoho One offers a seamless,
                cloud-native business suite that unifies your entire operations
                structure. Focus on growing your business with a platform that
                natively speaks your industry's language.
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

      {/* ─────────────── ALL INDUSTRIES — ALTERNATING ROWS ─────────────── */}
      <section id="industries" className="py-24 relative overflow-hidden bg-gradient-to-b from-[#f4f9ff] via-white to-[#f5f8ff]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Industry Portfolio
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold mt-6 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] via-blue-600 to-black">
              Industries We Serve
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We empower businesses across diverse sectors with Zoho's
              robust cloud architecture and industry-specialized capabilities.
            </p>
          </motion.div>

          <div className="flex flex-col">
            {industries.map((ind, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center py-12 lg:py-16 ${index < industries.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  {/* IMAGE SIDE */}
                  <div
                    className={`relative ${isEven ? "order-1" : "order-1 lg:order-2"}`}
                  >
                    <div className="relative h-64 sm:h-72 lg:h-80 rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10">
                      <Image
                        src={ind.image}
                        alt={ind.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
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
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 group shadow-lg hover:shadow-xl hover:scale-105"
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
                      View Solutions
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─────────────── SERVICES SECTION ─────────────── */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="bg-blue-600/10 text-blue-600 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Zoho Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end services to ensure your Zoho environment is
              perfectly aligned with your business needs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
            {services.map((service, index) => {
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
                      <service.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mt-2">
                      {service.description}
                    </p>
                    <div className="mt-6 border-t border-gray-300 pt-3">
                      <Link
                        href={service.href}
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
              alt="Zoho Industries"
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 blur-3xl -ml-32 -mb-32" />
            <div className="relative z-10 max-w-2xl text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                Scale your industry operations with the Zoho Ecosystem.
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




