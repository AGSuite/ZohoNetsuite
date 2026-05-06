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
  BarChart3,
  Shield,
  Layers,
  Users,
  HeartHandshake,
  Lightbulb,
  Target,
  Compass,
  GitMerge,
  Zap,
  BookOpen,
  Globe,
  Star,
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
    if (inView) spring.set(value);
    else spring.set(0);
  }, [inView, spring, value]);
  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function NetSuiteConsultingPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Years of NetSuite Experience", value: 15, suffix: "+", icon: Star },
    { label: "Successful Projects", value: 200, suffix: "+", icon: Target },
    { label: "Certified Consultants", value: 50, suffix: "+", icon: Users },
    { label: "Client Satisfaction", value: 98, suffix: "%", icon: TrendingUp },
  ];

  const services = [
    {
      title: "Business Process Review",
      description:
        "In-depth review of your current workflows and processes to identify inefficiencies, automation opportunities, and alignment gaps between your business and NetSuite's capabilities.",
      image: "/images/people/laptopgirl.webp",
      color: "#1e3a8a",
      rgb: "30,58,138",
      Icon: BookOpen,
    },
    {
      title: "NetSuite Health Check",
      description:
        "A structured audit of your existing NetSuite configuration — covering saved searches, workflows, scripts, roles, integrations, and data quality — with a prioritised remediation roadmap.",
      image: "/images/lap/lap1.webp",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: Shield,
    },
    {
      title: "NetSuite Roadmap Planning",
      description:
        "Strategic planning for your NetSuite evolution — identifying which modules, customisations, and integrations to activate next to maximise ROI aligned with your growth trajectory.",
      image: "/images/people/fourteam.webp",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Compass,
    },
    {
      title: "Module Selection & Scoping",
      description:
        "Expert guidance on which NetSuite modules, add-ons, and third-party solutions best fit your business requirements — with detailed scoping documentation for confident investment decisions.",
      image: "/images/lap/lap2.webp",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: Layers,
    },
    {
      title: "M&A & Multi-Subsidiary Strategy",
      description:
        "Specialist consulting for mergers, acquisitions, and multi-entity NetSuite deployments — from subsidiary structure design to intercompany eliminations and consolidated reporting.",
      image: "/images/people/laptopmen2.webp",
      color: "#92400e",
      rgb: "146,64,14",
      Icon: Globe,
    },
    {
      title: "ROI & TCO Analysis",
      description:
        "Quantified return-on-investment modelling for your NetSuite investments — making the business case for new modules, integrations, and optimisation projects with board-ready financials.",
      image: "/images/lap/lap3.webp",
      color: "#1e1b4b",
      rgb: "30,27,75",
      Icon: BarChart3,
    },
    {
      title: "Change Management Consulting",
      description:
        "Structured change management support to drive adoption — stakeholder analysis, communication planning, training strategy, and change champion enablement for smooth go-lives.",
      image: "/images/people/threeteam.webp",
      color: "#1a4365",
      rgb: "26,67,101",
      Icon: GitMerge,
    },
    {
      title: "Integration Architecture Design",
      description:
        "High-level design of your integration landscape — defining data flows, middleware strategy, API patterns, and error-handling architecture to connect NetSuite with your wider tech stack.",
      image: "/images/lap/lap4.webp",
      color: "#14532d",
      rgb: "20,83,45",
      Icon: Zap,
    },
    {
      title: "Vendor & Partner Selection",
      description:
        "Objective, conflict-free advisory on selecting the right NetSuite implementation partner, ISV add-ons, or SaaS integrations — including RFP creation, scoring, and recommendation.",
      image: "/images/people/laptopgirl1.webp",
      color: "#7f1d1d",
      rgb: "127,29,29",
      Icon: HeartHandshake,
    },
    {
      title: "Continuous Improvement Advisory",
      description:
        "Ongoing strategic consulting — monthly or quarterly engagements — keeping your NetSuite evolving with your business through regular reviews, roadmap updates, and optimisation sprints.",
      image: "/images/lap/lap5.webp",
      color: "#312e81",
      rgb: "49,46,129",
      Icon: Lightbulb,
    },
  ];

  const benefits = [
    {
      title: "Deep NetSuite Domain Expertise",
      description:
        "Our consultants are certified NetSuite professionals with cross-industry experience spanning manufacturing, distribution, SaaS, professional services, retail, and more.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Oracle NetSuite certified practitioners",
        "15+ years of NetSuite delivery experience",
        "Industry-specific best practice knowledge",
        "Experience across 40+ countries",
      ],
    },
    {
      title: "Vendor-Independent Advice",
      description:
        "Unlike resellers motivated by licence sales, our consulting engagements are purely outcome-driven — we recommend what's genuinely right for your business, not what earns the highest commission.",
      image: "/images/people/fourteam.webp",
      points: [
        "No hidden incentives or commissions",
        "Objective third-party perspective",
        "Honest fit analysis for every recommendation",
        "Independent from product upsell pressure",
      ],
    },
    {
      title: "Structured Consulting Methodology",
      description:
        "Every engagement follows a defined consulting framework — discovery, analysis, recommendation, and roadmap — ensuring consistent quality and measurable deliverables from day one.",
      image: "/images/lap/lap2.webp",
      points: [
        "Defined deliverables for every phase",
        "Executive-ready report outputs",
        "Actionable, prioritised recommendations",
        "Clear success metrics and tracking",
      ],
    },
    {
      title: "Strategic Partnership Model",
      description:
        "We operate as an extension of your team — not a transactional consulting firm. Our goal is a long-term partnership that continuously drives value from your NetSuite platform.",
      image: "/images/people/laptopmen.webp",
      points: [
        "Named senior consultant accountability",
        "Ongoing access after project completion",
        "Flexible retainer and project models",
        "Shared ownership of your outcomes",
      ],
    },
    {
      title: "Cross-Functional Business Alignment",
      description:
        "We bridge the gap between technology and business — translating complex ERP capabilities into language your Finance, Operations, and Commercial teams can understand and act on.",
      image: "/images/lap/lap3.webp",
      points: [
        "Finance-friendly business cases",
        "Operations-focused process design",
        "Executive stakeholder engagement",
        "Cross-department change alignment",
      ],
    },
    {
      title: "Proven ROI Delivery",
      description:
        "Our consulting engagements are tied to measurable outcomes — from process efficiency gains and headcount savings to faster close cycles and improved reporting accuracy.",
      image: "/images/people/laptopgirl1.webp",
      points: [
        "Quantified benefit modelling",
        "Before/after KPI baselining",
        "ROI tracking within 90 days",
        "Client case studies on request",
      ],
    },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Services/Digitalservices.webp"
            alt="NetSuite Consulting Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10">
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors duration-200">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Services</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite Consulting</span>
          </motion.nav>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8" style={{ minHeight: "calc(100vh - 150px)" }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 sm:mb-5 leading-[1.15] tracking-tight"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  NetSuite Consulting Services
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
                Strategic guidance from certified NetSuite experts to maximise your ERP ROI, align your platform to business goals, and unlock measurable outcomes across every department.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/30 hover:scale-105"
                >
                  Talk to a Consultant
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
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
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/people/fourteam.webp" alt="NetSuite Consulting" fill className="object-cover object-center" priority />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                  className="absolute -bottom-8 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3 z-10"
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #0a1f5c, #1d4ed8)" }}>
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold leading-tight">98% client satisfaction · 15+ years expertise</p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-snug">Certified · Outcome-driven · Strategic</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)" }}>
                    <HeartHandshake className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite Consulting</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Strategy · Roadmap · ROI · Advisory</p>
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
            className="border-t border-white/15 pt-5 sm:pt-6"
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

      {/* ── Sticky Nav ─────────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {[
              { label: "What is NetSuite Consulting?", href: "#what-is" },
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

      {/* ── What is NetSuite Consulting ──────────────────────────────── */}
      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-10 items-stretch mt-15">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
            >
              <Image
                src="/images/people/laptopmen.webp"
                alt="NetSuite Consulting"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6 bg-slate-50/50 p-8 md:p-12 rounded-2xl border border-slate-100"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                Turn NetSuite into a Competitive Advantage.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite is powerful — but only when configured, structured, and evolved in alignment with your unique business strategy. Our certified consultants work alongside your leadership and operations teams to unlock the full potential of your NetSuite investment.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From pre-implementation strategy and module selection to post-go-live optimisation and continuous improvement, AGSuite's consulting practice delivers outcome-driven guidance at every stage of your NetSuite journey.
              </p>
              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)", color: "#ffffff" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff"; (e.currentTarget as HTMLAnchorElement).style.color = "#0a1f5c"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)"; (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff"; }}
                >
                  <span>Book a Consulting Session</span>
                  <motion.span className="flex items-center" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Services Grid ──────────────────────────────────────────────── */}
      <section id="services" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-medium text-gray-900 text-center"
          >
            Our Consulting Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl text-center"
          >
            10 specialist consulting services covering strategy, optimisation, and continuous improvement for your NetSuite platform
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {services.map((svc, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                  style={{ minHeight: 340 }}
                >
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={svc.image} alt={svc.title} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${svc.rgb},0.4) 70%, rgba(${svc.rgb},1) 100%)` }} />
                  </div>
                  <div className="flex-1 p-5 pb-6 flex flex-col relative" style={{ backgroundColor: `rgb(${svc.rgb})` }}>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">{svc.title}</h4>
                      <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">{svc.description}</p>
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

      {/* ── Benefits Section ──────────────────────────────────────────── */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #060e1f 0%, #0a1e4a 25%, #0f2a57 55%, #091828 80%, #050d1a 100%)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <style>{`
            @keyframes twinkle { 0%,100%{opacity:0.1;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
            @keyframes drift { 0%{transform:translateY(0px) translateX(0px)} 50%{transform:translateY(-12px) translateX(6px)} 100%{transform:translateY(0px) translateX(0px)} }
            .star-cons { position:absolute; border-radius:9999px; background:white; animation: twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
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
            <div key={i} className="star-cons" style={{ width: `${s.w}px`, height: `${s.h}px`, top: s.top, left: s.left, "--tw-dur": s.dur, "--tw-delay": s.delay } as React.CSSProperties} />
          ))}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Why Businesses Choose AGSuite for NetSuite Consulting
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
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${
                    activeBenefit === index ? "bg-white shadow-xl border-l-4 border-blue-600" : "bg-white/5 border-l-4 border-transparent hover:bg-white/10"
                  }`}
                  suppressHydrationWarning
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors duration-300 ${activeBenefit === index ? "text-blue-600" : "text-gray-400 group-hover:text-gray-200"}`}>
                      {index === 0 && <Star size={20} />}
                      {index === 1 && <Shield size={20} />}
                      {index === 2 && <BookOpen size={20} />}
                      {index === 3 && <HeartHandshake size={20} />}
                      {index === 4 && <Globe size={20} />}
                      {index >= 5 && <BarChart3 size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index ? "text-gray-900" : "text-gray-300 group-hover:text-white"}`}>
                      {item.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index ? "text-blue-600 rotate-90" : "text-gray-500 opacity-0 group-hover:opacity-60"}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pl-9"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
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

      {/* ── Pricing Section ────────────────────────────────────────────── */}
      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
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
                  How Much Does NetSuite Consulting Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  Consulting engagements are scoped to your specific needs — whether it's a one-off health check, a strategic roadmap session, or an ongoing advisory retainer. We offer fixed-price project engagements and flexible monthly retainer models, so you only pay for the expertise you need, when you need it. Contact us for a tailored consulting proposal.
                </p>
                <div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Get a Consulting Quote <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]" style={{ borderRadius: "40% 60% 55% 45% / 45% 55% 45% 55%" }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]" style={{ borderRadius: "45% 55% 50% 50% / 50% 50% 50% 50%" }} />
                <div className="absolute bottom-8 left-6 w-14 h-14 bg-[#1a8fa0]/60 z-10" style={{ borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%", transform: "rotate(20deg)" }} />
                <div className="absolute bottom-16 left-14 w-3 h-3 bg-yellow-400/60 rounded-full z-10" />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: "50% 50% 46% 54% / 52% 48% 52% 48%" }}>
                  <Image src="/images/people/laptopgirl.webp" alt="NetSuite Consulting Pricing" fill className="object-cover object-top" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────────── */}
      <FAQ variant="netsuite" id="faq" />

      {/* ── CTA Section ────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002a8c] via-[#0044cc] to-[#0099a3] shadow-2xl"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white rounded-full"
                  style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
                />
              ))}
            </div>

            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Ready to Maximise Your{" "}
                  <span className="text-cyan-300">NetSuite ROI?</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Book a free 30-minute consulting session with a certified NetSuite expert and discover actionable improvements for your platform.
                </p>
              </div>
              <a
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <ContactFormDesign4 />
    </div>
  );
}
