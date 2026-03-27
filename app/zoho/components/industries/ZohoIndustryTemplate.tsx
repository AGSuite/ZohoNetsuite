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
  ChevronRight,
  Check,
  Database,
  Share2,
  Code,
  ShieldCheck,
  Users,
  HeartHandshake,
  Star,
  Layers,
  BarChart3,
  TrendingUp,
  DollarSign,
  Zap,
  Shield,
  Rocket,
  Wrench,
  Settings,
  GraduationCap,
} from "lucide-react";
import ZohoContactForm from "@/app/zoho/components/ZohoContactForm";
import { FAQ } from "@/app/components/home/FAQ";

/* ─── Animated Counter ─── */
function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);
  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

/* ─── Types ─── */
export interface IndustryStat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}
export interface IndustryBenefit {
  title: string;
  description: string;
  image: string;
  points?: string[];
}
export interface IndustryChallenge {
  title: string;
  description?: string;
  challenge?: string;
  solution?: string;
  image?: string;
  icon?: React.ElementType;
  link?: string;
  rgb?: string;
}
export interface IndustryPricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}
export interface IndustryFAQ {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}
export interface IndustryPageData {
  industry: string;
  heroTitle: string;
  heroDescription: string;
  heroImage: string;
  heroCardTitle: string;
  heroCardSub: string;
  heroTopCardTitle: string;
  heroTopCardSub: string;
  introImage: string;
  introTitle: string;
  introDescription: string;
  introDescription2?: string;
  stats: IndustryStat[];
  benefits: IndustryBenefit[];
  challenges: IndustryChallenge[];
  pricingIntro?: string;
  pricingTiers: IndustryPricingTier[];
  faqs: IndustryFAQ[];
  relatedIndustries: { label: string; href: string }[];
}

const benefitIcons = [
  Layers,
  BarChart3,
  TrendingUp,
  DollarSign,
  Zap,
  Shield,
  ShieldCheck,
  Users,
];

const zohoServices = [
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

const cardBgColors = [
  "bg-gradient-to-br from-white to-[#eef0ff]",
  "bg-gradient-to-br from-white to-[#eaf6ff]",
  "bg-gradient-to-br from-white to-[#e8ffef]",
  "bg-gradient-to-br from-white to-[#f9eaff]",
  "bg-gradient-to-br from-white to-[#ffece8]",
  "bg-gradient-to-br from-white to-[#eaf8ff]",
];

export default function ZohoIndustryTemplate({ data }: { data: IndustryPageData }) {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [openChallenge, setOpenChallenge] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      {/* ══════ HERO ══════ */}
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
        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-28 pb-8">
          {/* Breadcrumb */}
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
            <Link
              href="/zoho/industries"
              className="text-blue-300 hover:text-white transition-colors"
            >
              Industries
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">{data.industry}</span>
          </motion.nav>
          {/* 2-col */}
          <div
            className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center"
            style={{ minHeight: "calc(100vh - 150px)" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-300 text-xs font-bold uppercase tracking-widest mb-4"
              >
                <Star className="w-3.5 h-3.5" /> Zoho for {data.industry}
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15]"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">
                  {data.heroTitle}
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
                {data.heroDescription}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="#contact-form"
                  className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  Get a Free Demo
                  <motion.span
                    animate={{ x: [0, 6, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
                <Link
                  href="#benefits"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-all duration-300"
                >
                  Explore Benefits
                </Link>
              </motion.div>
            </motion.div>
            {/* Right image */}
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
                    src={data.heroImage}
                    alt={data.industry}
                    fill
                    className="object-cover object-center"
                    priority
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
                    <Database className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-sm font-bold">
                      {data.heroCardTitle}
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5">
                      {data.heroCardSub}
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
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold whitespace-nowrap">
                      {data.heroTopCardTitle}
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      {data.heroTopCardSub}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="border-t border-white/15 pt-5 sm:pt-6"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {data.stats.map((s, i) => (
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

      {/* ── Sticky Nav ───────────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {[
              { label: "Overview", href: "#overview" },
              { label: "Benefits", href: "#benefits" },
              { label: "Challenges", href: "#challenges" },
              { label: "Services", href: "#services" },
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

      {/* ══════ INTRO ══════ */}
      <section id="overview" className="py-12 lg:py-16 bg-white scroll-mt-36">
        <div className="max-w-[85rem] mx-auto px-8 lg:px-14">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[350px] lg:min-h-[450px] h-full rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image
                src={data.introImage}
                alt={data.introTitle}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-white/5 mix-blend-multiply" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 flex flex-col justify-center py-6 lg:py-8"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                {data.introTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {data.introDescription}
              </p>
              {data.introDescription2 && (
                <p className="text-lg text-gray-600 leading-relaxed">
                  {data.introDescription2}
                </p>
              )}
              <div className="pt-4">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background:
                      "linear-gradient(135deg,#0a1f5c 0%,#1d4ed8 100%)",
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
                      "linear-gradient(135deg,#0a1f5c 0%,#1d4ed8 100%)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#ffffff";
                  }}
                >
                  <span>Talk to a Specialist</span>
                  <motion.span
                    className="flex items-center"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity }}
                  >
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════ BENEFITS ══════ */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden scroll-mt-20"
        style={{
          background:
            "linear-gradient(135deg,#060e1f 0%,#0a1e4a 25%,#0f2a57 55%,#091828 80%,#050d1a 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Why Leaders Choose Zoho for {data.industry}
            </h2>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            {/* Left — animated image */}
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
                    src={data.benefits[activeBenefit].image}
                    alt={data.benefits[activeBenefit].title}
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>
            {/* Right — list */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {data.benefits.map((item, index) => {
                const Icon = benefitIcons[index % benefitIcons.length];
                return (
                  <button
                    key={index}
                    onClick={() => setActiveBenefit(index)}
                    className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? "bg-white shadow-xl border-l-4 border-blue-600" : "bg-white/5 border-l-4 border-transparent hover:bg-white/10"}`}
                  >
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className={`shrink-0 transition-colors duration-300 ${activeBenefit === index ? "text-blue-600" : "text-gray-400 group-hover:text-gray-200"}`}
                      >
                        <Icon size={20} />
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
                        {item.points && item.points.length > 0 && (
                          <ul className="space-y-1.5">
                            {item.points.map((pt, pi) => (
                              <li
                                key={pi}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <Check
                                  size={13}
                                  className="text-blue-600 mt-0.5 shrink-0"
                                />
                                {pt}
                              </li>
                            ))}
                          </ul>
                        )}
                      </motion.div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ CHALLENGES ══════ */}
      <section
        id="challenges"
        className="py-24 bg-gray-50 relative overflow-hidden scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Challenges & Solutions
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Overcome {data.industry} Challenges
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how Zoho turns your biggest operational hurdles into
              competitive advantages.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8 items-start">
            {data.challenges.map((item, index) => {
              const isOpen = openChallenge === index;
              const fallbackColors = [
                "14,108,130", // Teal
                "40,65,145", // Royal Blue
                "125,42,88", // Berry/Purple
                "18,108,72", // Green
                "145,75,18", // Orange/Brown
                "65,45,130", // Deep Purple
                "20,88,115", // Ocean Blue
                "95,30,105", // Magenta
              ];
              const rgb =
                item.rgb || fallbackColors[index % fallbackColors.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.06,
                    ease: "easeOut",
                  }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white"
                >
                  <div
                    className="relative h-44 shrink-0 overflow-hidden cursor-pointer"
                    onClick={() => setOpenChallenge(isOpen ? null : index)}
                  >
                    <Image
                      src={item.image || "/images/lap/lap1.webp"}
                      alt={item.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, transparent 0%, rgba(${rgb},0.4) 70%, rgba(${rgb},1) 100%)`,
                      }}
                    />
                  </div>
                  <div
                    className="flex-1 flex flex-col relative transition-colors duration-500"
                    style={{
                      backgroundColor: isOpen ? "white" : `rgb(${rgb})`,
                    }}
                  >
                    <div
                      className="p-5 pb-3 cursor-pointer"
                      onClick={() => setOpenChallenge(isOpen ? null : index)}
                      style={{ backgroundColor: `rgb(${rgb})` }}
                    >
                      <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1 block">
                        Challenge
                      </span>
                      <h4 className="text-white font-bold text-lg tracking-wide leading-tight">
                        {item.title}
                      </h4>
                    </div>

                    <div className="flex-1 flex flex-col px-5 relative bg-transparent">
                      <AnimatePresence mode="wait">
                        {!isOpen ? (
                          <motion.div
                            key="challenge"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="px-5 pb-6 pt-2 cursor-pointer"
                            onClick={() => setOpenChallenge(index)}
                          >
                            <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-5 py-2.5 rounded-full shadow-md hover:bg-gray-100 transition-all">
                              See Solution{" "}
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="solution"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="px-5 pb-7 pt-2 cursor-pointer flex flex-col"
                            onClick={() => setOpenChallenge(null)}
                          >
                            <div className="mt-3">
                              <span className="text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-1 block">
                                Solution
                              </span>
                              <p className="text-gray-700 text-sm leading-relaxed">
                                {item.solution || item.description}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══════ SERVICES ══════ */}
      <section id="services" className="py-20 bg-gray-50 relative overflow-hidden scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Our Expertise
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-6 mb-4">
              Zoho Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              End-to-end services to ensure your Zoho environment is
              perfectly aligned with your industry requirements.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-6">
            {zohoServices.map((service, index) => (
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
                <div
                  className={`relative group rounded-2xl p-7 border border-gray-200 transition-all duration-300 h-full shadow-xl hover:shadow-blue-100 ${cardBgColors[index % cardBgColors.length]}`}
                >
                  <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-5">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-lg font-bold text-gray-900 leading-tight">
                    {service.title}
                  </h2>
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
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PRICING ══════ */}
      <section id="pricing" className="py-24 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Zoho Business Software for {data.industry}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {data.pricingIntro || "Choose the right plan to scale your industry operations."}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {data.pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border ${tier.popular ? "border-blue-600 shadow-2xl scale-105 z-10" : "border-gray-200 shadow-xl"} flex flex-col bg-white`}
              >
                {tier.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{tier.description}</p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">{tier.price}</span>
                  {tier.price !== "Custom" && <span className="text-gray-500 text-base font-medium">/month</span>}
                </div>
                <div className="flex-1 space-y-4 mb-8">
                  {tier.features.map((feat, fi) => (
                    <div key={fi} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-blue-600" />
                      </div>
                      <span className="text-sm text-gray-600">{feat}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="#contact-form"
                  className={`w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all ${tier.popular ? "bg-blue-600 text-white shadow-lg hover:bg-blue-700" : "bg-gray-900 text-white hover:bg-black shadow-md"} text-center`}
                >
                  Select Plan
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FAQ ══════ */}
      {data.faqs.length > 0 && (
        <section id="faq" className="scroll-mt-36">
          <FAQ 
            customFaqs={data.faqs.map(f => ({ 
              q: f.question || f.q || "", 
              a: f.answer || f.a || "" 
            }))} 
            variant="zoho" 
            layout="sidebar" 
          />
        </section>
      )}

      {/* ══════ CONTACT FORM ══════ */}
      <section id="contact-form">
        <ZohoContactForm />
      </section>
    </div>
  );
}


