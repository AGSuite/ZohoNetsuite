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
  ArrowRight,
  Check,
  ChevronRight,
  TrendingUp,
  CheckCircle2,
  Zap,
  BarChart3,
  Shield,
  Layers,
  Settings,
  Database,
  Cloud,
  Users,
  Code2,
  Calendar,
  Smartphone,
  Cpu,
  BrainCircuit,
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
  { w: 2.4, h: 2.7, top: 55, left: 15, dur: 4.4, delay: 0.9 },
  { w: 1.5, h: 1.9, top: 70, left: 40, dur: 5.8, delay: 2.5 },
  { w: 2.0, h: 1.4, top: 18, left: 63, dur: 3.9, delay: 1.7 },
  { w: 2.9, h: 2.2, top: 42, left: 88, dur: 5.0, delay: 0.2 },
];

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));
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

const lowCodeFaqs = [
  {
    q: "What is NetSuite Low-Code Development?",
    a: "NetSuite low-code development leverages the platform's native SuiteCloud framework — including SuiteScript 2.x, SuiteFlow (visual workflow builder), SuiteBuilder, and SuiteTalk APIs. It allows developers to quickly build custom database records, automate business processes, design interactive dashboards, and configure custom screens natively within NetSuite.",
  },
  {
    q: "Is low-code development in NetSuite upgrade-safe?",
    a: "Yes, absolutely. By using NetSuite's standard SuiteCloud extension model (SuiteScript, SuiteFlow, and Custom Records) rather than altering the core platform database, all customizations are fully insulated. They survive NetSuite's bi-annual automatic upgrades without regressions, keeping your ERP system upgrade-safe by design.",
  },
  {
    q: "What is the difference between SuiteScript and SuiteFlow?",
    a: "SuiteFlow is NetSuite's visual workflow engine, ideal for point-and-click automation like approval routings, lead nurturing, and simple record updates. SuiteScript is a JavaScript-based API used when you need complex business logic, bulk data processing (map/reduce), scheduled operations, or integrations that exceed SuiteFlow's visual boundaries.",
  },
  {
    q: "Can we build custom mobile applications on NetSuite using low-code?",
    a: "Yes. We can extend NetSuite's mobile capabilities by building responsive, mobile-optimized SuiteApps or leveraging SuiteTalk REST/SOAP APIs to connect with external mobile platforms. This enables field service, warehouse management, and sales teams to access and update NetSuite data from any device.",
  },
  {
    q: "How long does a typical low-code customization project take?",
    a: "Timelines depend on complexity. Simple visual workflows or basic SuiteScripts can be delivered in a matter of days. Larger projects, such as building a custom SuiteApp or a vendor/customer self-service portal, typically take between 4 to 8 weeks, including thorough sandbox testing and documentation.",
  },
  {
    q: "Can NetSuite low-code customizations connect with third-party software?",
    a: "Yes, NetSuite's SuiteTalk APIs (both SOAP and REST) and RESTlets allow us to expose custom data endpoints and process flows. This ensures seamless integration with external systems like Shopify, Salesforce, HubSpot, custom web portals, and shipping carriers.",
  },
  {
    q: "How does AGSuite ensure the quality and performance of custom scripts?",
    a: "We follow NetSuite governance limits and SuiteScript 2.x best practices to avoid performance bottlenecks. Every script is thoroughly tested in a sandbox environment using mock data under peak load, fully documented with JSDoc, and delivered with a deployment runbook for seamless production migration.",
  },
];

export default function NetSuiteLowCodeServices() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const stats = [
    { label: "Custom Apps Built", value: 250, suffix: "+", icon: Code2 },
    { label: "Dev Cycle Reduction", value: 60, suffix: "%", icon: Zap },
    { label: "Cost Efficiency", value: 40, suffix: "%", icon: TrendingUp },
    {
      label: "Uptime Reliability",
      value: 99,
      suffix: ".9%",
      icon: CheckCircle2,
    },
  ];

  const services = [
    {
      title: "SuiteScript 2.x Development",
      description:
        "Build powerful server-side and client-side business logic with SuiteScript 2.x — from scheduled scripts and map/reduce processing to RESTlets and user event handlers.",
      image: "/images/Services/ns_service_low_code_new.png",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: Code2,
    },
    {
      title: "SuiteFlow Visual Workflows",
      description:
        "Design no-code workflow automations for approval routing, lead nurturing, and lifecycle management — using NetSuite's point-and-click SuiteFlow builder.",
      image: "/images/netsuiteimages/Servicesimg/process_automation.png",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: Zap,
    },
    {
      title: "Custom SuiteApps",
      description:
        "Package your custom logic as managed or unmanaged SuiteApps — upgrade-safe, version-controlled, and distributable across multiple NetSuite accounts.",
      image: "/images/Services/ns_low_code_development.png",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Layers,
    },
    {
      title: "Mobile SuiteApps",
      description:
        "Develop responsive mobile-first applications for field services, warehouse operations, and sales teams — extending NetSuite data to every device.",
      image: "/images/netsuiteimages/Servicesimg/mobile_portal.png",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: Smartphone,
    },
    {
      title: "SuiteTalk REST / SOAP APIs",
      description:
        "Expose custom NetSuite data and logic via RESTlets or SuiteTalk SOAP APIs — enabling seamless integration with external systems and third-party platforms.",
      image: "/images/netsuiteimages/Servicesimg/integration.webp",
      color: "#92400e",
      rgb: "146,64,14",
      Icon: Cpu,
    },
    {
      title: "Custom Record Types",
      description:
        "Create bespoke record types, custom fields, and tailored list views that capture the unique entities and data structures your business requires.",
      image: "/images/netsuiteimages/Servicesimg/erp_integration.png",
      color: "#1e1b4b",
      rgb: "30,27,75",
      Icon: Database,
    },
    {
      title: "Portlet & Dashboard Development",
      description:
        "Build role-specific KPI portlets, custom reminders, and interactive dashboards that give every user a personalised NetSuite home screen.",
      image: "/images/netsuiteimages/Servicesimg/data_analytics.png",
      color: "#1a4365",
      rgb: "26,67,101",
      Icon: BarChart3,
    },
    {
      title: "AI-Augmented Automation",
      description:
        "Embed AI-driven anomaly detection, predictive routing, and smart approval logic into your NetSuite workflows for next-generation intelligent automation.",
      image: "/images/Services/ns_ai_low_code_development.png",
      color: "#14532d",
      rgb: "20,83,45",
      Icon: BrainCircuit,
    },
    {
      title: "Custom PDF & Email Templates",
      description:
        "Design pixel-perfect invoices, POs, and email notifications using FreeMarker — branded to your corporate identity and configured per subsidiary.",
      image: "/images/netsuiteimages/Servicesimg/Digital transformation.webp",
      color: "#7f1d1d",
      rgb: "127,29,29",
      Icon: Settings,
    },
    {
      title: "Self-Service Portals",
      description:
        "Build customer and vendor self-service portals on top of NetSuite — enabling order tracking, invoice approval, PO submission, and support case logging.",
      image: "/images/netsuiteimages/Servicesimg/change_management.png",
      color: "#312e81",
      rgb: "49,46,129",
      Icon: Cloud,
    },
    {
      title: "SuiteAnalytics Workbooks",
      description:
        "Create advanced SuiteAnalytics workbooks, pivot analyses, and drill-down reports tailored to your executive, finance, and operations reporting requirements.",
      image: "/images/netsuiteimages/Servicesimg/digital_strategy.png",
      color: "#0c4a6e",
      rgb: "12,74,110",
      Icon: BarChart3,
    },
    {
      title: "Ongoing Code Maintenance",
      description:
        "Keep your SuiteScripts and SuiteApps healthy across bi-annual upgrades — with proactive regression testing, bug resolution, and continuous enhancement support.",
      image: "/images/netsuiteimages/Servicesimg/managed_support.png",
      color: "#4a1942",
      rgb: "74,25,66",
      Icon: Users,
    },
  ];

  const benefits = [
    {
      title: "Upgrade-Safe by Design",
      description:
        "Every application we build uses NetSuite's version-independent SuiteCloud frameworks — so your custom code survives every bi-annual upgrade without regression surprises.",
      image: "/images/benefits/benefit_compliance_security.png",
      points: [
        "SuiteScript 2.x best practices",
        "SuiteApp packaging for version control",
        "Pre-upgrade regression test suite",
        "No direct platform modifications",
      ],
    },
    {
      title: "Rapid Delivery Cycles",
      description:
        "Our low-code methodology combines pre-built component libraries with agile sprint delivery — getting functional tools in your hands in weeks, not months.",
      image: "/images/benefits/benefit_gbm_processes.png",
      points: [
        "Pre-built SuiteScript component library",
        "Agile sprint-based delivery",
        "Prototype-first approach for feedback",
        "Sandbox-to-production deployment pipeline",
      ],
    },
    {
      title: "Fully Documented Codebase",
      description:
        "Every deliverable comes with JSDoc inline documentation, a functional specification, test scripts, and a deployment runbook — so your team can maintain and extend it confidently.",
      image: "/images/benefits/benefit_gbm_compliance.png",
      points: [
        "In-code JSDoc documentation",
        "Functional spec and test scripts",
        "Deployment runbook included",
        "Knowledge transfer session on delivery",
      ],
    },
    {
      title: "Integrated User Experience",
      description:
        "Our custom apps live natively inside NetSuite — sharing the same data model, authentication, and UI — delivering a seamless experience without external logins or context switching.",
      image: "/images/benefits/benefit_crm_sales_automation.png",
      points: [
        "Native NetSuite UI components",
        "Single sign-on via NetSuite auth",
        "Shared data model and permissions",
        "No external hosting costs",
      ],
    },
    {
      title: "Cost-Efficient vs. Custom ERP",
      description:
        "Low-code SuiteCloud development delivers bespoke functionality at a fraction of the cost of traditional enterprise custom development — with faster time-to-market.",
      image: "/images/benefits/benefit_cost_efficiency.png",
      points: [
        "Up to 60% faster dev cycle",
        "Reusable component library",
        "Fixed-fee project scoping",
        "No infrastructure overhead",
      ],
    },
    {
      title: "Scalable Platform Foundation",
      description:
        "Build on a cloud-native platform that scales with your data, users, and business complexity — with no infrastructure management, no scaling costs, and 99.9% uptime.",
      image: "/images/benefits/benefit_scalable_growth.png",
      points: [
        "Auto-scaling NetSuite infrastructure",
        "Multi-subsidiary compatible apps",
        "No server or hosting management",
        "Tested at enterprise data volumes",
      ],
    },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        {/* ── Hero Background Image ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/netsuiteimages/Servicesimg/low code.webp"
            alt="Low-Code Development Background"
            fill
            className="object-cover object-center"
            priority
           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 sm:pt-32 pb-8 sm:pb-10">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-20 sm:top-24 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link
              href="/netsuite"
              className="text-blue-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Low-Code Development</span>
          </motion.nav>

          <div
            className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8"
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
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  NetSuite Low-Code Development
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
                Build bespoke SuiteApps, automations, and processes within
                NetSuite's native SuiteCloud platform — faster, safer, and at
                lower cost than traditional enterprise development, with zero
                compromise on quality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Start Your Development
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </a>
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
                    src="/images/Services/lowcode.webp"
                    alt="NetSuite Low-Code Development"
                    fill
                    className="object-cover object-center"
                    priority
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-8 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3 z-10"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #0a1f5c, #1d4ed8)",
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold leading-tight">
                      250+ custom SuiteApps delivered
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                      SuiteCloud native · Upgrade-safe · Documented
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)",
                    }}
                  >
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">
                      NetSuite Low-Code
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      SuiteScript · SuiteFlow · SuiteApps · Mobile
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
                    <span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">
                      {stat.suffix}
                    </span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm md:text-base px-2">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Sticky Nav ───────────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[
              { label: "What is NetSuite Low-Code?", href: "#what-is" },
              { label: "Services", href: "#services" },
              { label: "Benefits", href: "#benefits" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 via-blue-600 to-blue-900">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── What is Low-Code ──────────────────────────────────────────── */}
      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center rounded-2xl overflow-hidden p-4"
              style={{ minHeight: 340 }}
            >
              <Image
                src="/images/netsuiteimages/ns_low_code_dev.png"
                alt="NetSuite Low-Code Development"
                width={560}
                height={380}
                className="w-full h-auto rounded-xl object-contain"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                Extend NetSuite Beyond Standard Capabilities.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite Low-Code Development means using SuiteCloud's native
                toolset — SuiteScript, SuiteFlow, SuiteTalk, and custom records
                — to build exactly the functionality your business needs,
                without leaving the platform or compromising upgrade safety.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                AGSuite's SuiteCloud developers deliver custom applications,
                mobile extensions, and intelligent automations that transform
                complex operational requirements into high-performance digital
                tools — in weeks, not months.
              </p>
              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#ffffff";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#0a1f5c";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#ffffff";
                  }}
                >
                  <span>Start Your Development</span>
                  <motion.span
                    className="flex items-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ─────────────────────────────────────────────────── */}
      <section
        id="services"
        className="py-16 bg-white relative overflow-hidden scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-medium text-gray-900 text-center"
          >
            Our Low-Code Development Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl text-center"
          >
            12 specialised services covering every layer of the SuiteCloud
            platform — from SuiteScript automations to mobile portals
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {services.map((svc, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out cursor-pointer bg-white"
                  style={{ height: hoveredCard === index ? 450 : 340 }}
                >
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, transparent 0%, rgba(${svc.rgb},0.4) 70%, rgba(${svc.rgb},1) 100%)`,
                      }}
                    />
                  </div>
                  <div
                    className="flex-1 p-5 pb-6 flex flex-col relative"
                    style={{ backgroundColor: `rgb(${svc.rgb})` }}
                  >
                    <div className="flex-1 pb-12">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">
                        {svc.title}
                      </h4>
                      <p className={`text-white/90 text-sm leading-snug font-medium transition-all duration-500 ${hoveredCard === index ? "" : "line-clamp-3"}`}>
                        {svc.description}
                      </p>
                    </div>
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Learn More <ArrowRight size={10} />
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Section ─────────────────────────────────────────────── */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden scroll-mt-36"
        style={{
          background:
            "linear-gradient(135deg, #060e1f 0%, #0a1e4a 25%, #0f2a57 55%, #091828 80%, #050d1a 100%)",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <style>{`
            @keyframes twinkle { 0%,100%{opacity:0.1;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
            @keyframes drift { 0%{transform:translateY(0px) translateX(0px)} 50%{transform:translateY(-12px) translateX(6px)} 100%{transform:translateY(0px) translateX(0px)} }
            .star-lc { position:absolute; border-radius:9999px; background:white; animation: twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
          `}</style>
          {[
            { w: 2, h: 2, top: "8%", left: "12%", dur: "2.5s", delay: "0s" },
            { w: 1, h: 1, top: "20%", left: "35%", dur: "3.2s", delay: "0.5s" },
            { w: 3, h: 3, top: "15%", left: "60%", dur: "4s", delay: "1s" },
            { w: 1, h: 1, top: "50%", left: "8%", dur: "2.8s", delay: "0.3s" },
            { w: 2, h: 2, top: "70%", left: "22%", dur: "3.5s", delay: "1.5s" },
            { w: 1, h: 1, top: "42%", left: "80%", dur: "2.1s", delay: "0.7s" },
            { w: 2, h: 2, top: "80%", left: "55%", dur: "3.8s", delay: "0.2s" },
            { w: 3, h: 3, top: "30%", left: "90%", dur: "4.2s", delay: "0.9s" },
          ].map((s, i) => (
            <div
              key={i}
              className="star-lc"
              style={
                {
                  width: `${s.w}px`,
                  height: `${s.h}px`,
                  top: s.top,
                  left: s.left,
                  "--tw-dur": s.dur,
                  "--tw-delay": s.delay,
                } as React.CSSProperties
              }
            />
          ))}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3"
            style={{
              background:
                "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"
            style={{
              background:
                "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)",
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Why Businesses Choose AGSuite for Low-Code NetSuite Development
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
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
                    className="object-cover object-center"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index
                      ? "bg-white shadow-xl border-l-4 border-blue-600"
                      : "bg-white/5 border-l-4 border-transparent hover:bg-white/10"
                    }`}
                  suppressHydrationWarning
                >
                  <div className="flex items-center gap-4 w-full">
                    <div
                      className={`shrink-0 transition-colors duration-300 ${activeBenefit === index ? "text-blue-600" : "text-gray-400 group-hover:text-gray-200"}`}
                    >
                      {index === 0 && <Shield size={20} />}
                      {index === 1 && <Zap size={20} />}
                      {index === 2 && <Database size={20} />}
                      {index === 3 && <Layers size={20} />}
                      {index === 4 && <BarChart3 size={20} />}
                      {index >= 5 && <Cloud size={20} />}
                    </div>
                    <span
                      className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index ? "text-gray-900" : "text-gray-300 group-hover:text-white"}`}
                    >
                      {item.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index ? "text-blue-600 rotate-90" : "text-gray-500 opacity-0 group-hover:opacity-60"}`}
                    />
                  </div>
                  {activeBenefit === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pl-9"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">
                        {item.description}
                      </p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li
                            key={pi}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <Check
                              size={13}
                              className="text-blue-600 mt-0.5 shrink-0"
                            />{" "}
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

      {/* ── Pricing Section ───────────────────────────────────────────────── */}
      <section
        id="pricing"
        className="py-12 bg-gray-50 overflow-hidden scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#06303f" }}
          >
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does NetSuite Low-Code Development Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  Low-code development pricing is scoped by the complexity of
                  your requirements — number of scripts, workflow complexity,
                  custom record types, and API integrations. Simple automations
                  are delivered as fixed-fee sprint projects; complex SuiteApp
                  builds are scoped across multiple phases with transparent
                  milestones and no surprise invoices.
                </p>
                <div>
                  <a
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Get a Custom Quote <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div
                  className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]"
                  style={{ borderRadius: "40% 60% 55% 45% / 45% 55% 45% 55%" }}
                />
                <div
                  className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]"
                  style={{ borderRadius: "45% 55% 50% 50% / 50% 50% 50% 50%" }}
                />
                <div
                  className="absolute bottom-8 left-6 w-14 h-14 bg-[#1a8fa0]/60 z-10"
                  style={{
                    borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%",
                    transform: "rotate(20deg)",
                  }}
                />
                <div className="absolute bottom-16 left-14 w-3 h-3 bg-yellow-400/60 rounded-full z-10" />
                <div
                  className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl"
                  style={{ borderRadius: "50% 50% 46% 54% / 52% 48% 52% 48%" }}
                >
                  <Image
                    src="/images/people/laptopgirl.webp"
                    alt="Low-Code Pricing"
                    fill
                    className="object-cover object-top"
                   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Everything you need to know about NetSuite Low-Code development — from SuiteScript and SuiteFlow to APIs and implementation timelines."
        customFaqs={lowCodeFaqs}
      />

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#000814] via-[#001240] to-[#1d4ed8] shadow-2xl"
          >
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
                    ease: "easeInOut",
                    delay: p.delay,
                  }}
                />
              ))}
            </div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
              }}
            />
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Have a Custom SuiteApp{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-300">
                    Idea?
                  </span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Stop compromising. Let AGSuite build exactly what your
                  business needs — upgrade-safe, documented, and delivered in
                  weeks on NetSuite's native SuiteCloud platform.
                </p>
              </div>
              <a
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#0a1f5c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Start Your Development
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────────── */}
      <ContactFormDesign4 />
    </div>
  );
}




