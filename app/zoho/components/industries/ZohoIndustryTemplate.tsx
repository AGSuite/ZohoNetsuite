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
import FooterContactForm from "@/app/components/shared/FooterContactForm";
import { FAQ } from "@/app/components/home/FAQ";
import ZohoServicesCards from "../ZohoServicesCards";

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
  icon: React.ComponentType<{ className?: string }>;
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
  icon?: React.ComponentType<{ className?: string }>;
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
export interface IndustryFeature {
  title: string;
  description: string;
  image?: string;
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
  features: IndustryFeature[];
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
                  className="inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105"
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
                  href="#challenges"
                  className="inline-flex items-center gap-2 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-xl hover:scale-105"
                >
                  View Challenges
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
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[
              { label: `Why Zoho for ${data.industry}?`, href: "#overview" },
              { label: "Challenges", href: "#challenges" },
              { label: "Features", href: "#features" },
              { label: "Benefits", href: "#benefits" },
              { label: "Services", href: "#services" },
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
              <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 mb-6">
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

      {/* ── Features Section ────────────────────────────────────────────── */}
      <section id="features" className="py-24 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="bg-blue-600/10 text-blue-700 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest">
              Industry Features
            </span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mt-6 mb-4">
              Comprehensive Features for {data.industry}
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {data.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-200">
                  <Check className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Section ────────────────────────────────────────────── */}
      <section id="benefits" className="py-24 bg-gray-950 relative overflow-hidden scroll-mt-36">
        <div className="absolute inset-0 bg-blue-600/5" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-blue-400 font-bold uppercase tracking-widest text-xs"
              >
                Key Benefits
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-5xl font-medium text-white mt-4 mb-8"
              >
                Transforming Your {data.industry} Business
              </motion.h2>
              <div className="space-y-4">
                {data.benefits.map((benefit, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveBenefit(index)}
                    className={`w-full text-left p-6 rounded-xl transition-all duration-300 border ${
                      activeBenefit === index
                        ? "bg-blue-600 border-blue-500 shadow-xl"
                        : "bg-white/5 border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${activeBenefit === index ? "bg-white/20" : "bg-blue-600/20"}`}>
                        {React.createElement(benefitIcons[index % benefitIcons.length], {
                          className: `w-5 h-5 ${activeBenefit === index ? "text-white" : "text-blue-400"}`
                        })}
                      </div>
                      <span className={`font-bold text-lg ${activeBenefit === index ? "text-white" : "text-gray-300"}`}>
                        {benefit.title}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={data.benefits[activeBenefit].image}
                    alt={data.benefits[activeBenefit].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-10 left-10 right-10">
                    <p className="text-white text-lg leading-relaxed font-medium">
                      {data.benefits[activeBenefit].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CHALLENGES ─── */}
      <section id="challenges" className="py-24 bg-gray-50 scroll-mt-36">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">
              Overcome Industry Challenges
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              See how Zoho turns your biggest operational hurdles into competitive advantages.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.challenges.map((item, index) => {
               const isOpen = openChallenge === index;
               const rgb = item.rgb || "40,65,145";
               return (
                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg group">
                  <div className="relative h-48">
                    <Image src={item.image || "/images/lap/lap1.webp"} alt={item.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 right-4 text-white font-bold text-lg">{item.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {isOpen ? item.solution || item.description : item.challenge || item.description?.substring(0, 100) + "..."}
                    </p>
                    <button 
                      onClick={() => setOpenChallenge(isOpen ? null : index)}
                      className="text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors"
                    >
                      {isOpen ? "Show Less" : "View Solution"}
                    </button>
                  </div>
                </div>
               );
            })}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-36">
        <ZohoServicesCards />
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
        <FooterContactForm platform="Zoho" />
      </section>
    </div>
  );
}
