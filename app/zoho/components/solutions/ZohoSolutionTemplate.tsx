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
  Heart,
  Check,
  ChevronRight,
  Globe2,
  Briefcase,
  Zap,
  BarChart3,
  TrendingUp,
  CheckCircle2,
  Landmark,
  Shield,
  Calendar,
  Layers,
  Search,
  MessageSquare,
  Phone
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import FooterContactForm from "@/app/components/shared/FooterContactForm";
import ZohoServicesCards from "../ZohoServicesCards";
import { getZohoProductFaqs } from "@/app/zoho/data/zohoProductFaqs";

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

export interface SolutionModule {
  title: string;
  description: string;
  image: string;
  color: string;
  rgb: string;
}

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

export interface SolutionBenefit {
  title: string;
  description: string;
  image: string;
  points: string[];
}

export interface SolutionStat {
  label: string;
  value: number;
  suffix: string;
  icon: any;
}

export interface SolutionProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumb: { label: string; href: string }[];
  stats: SolutionStat[];
  modules: SolutionModule[];
  benefits: SolutionBenefit[];
  heroImage?: string;
  whatIsImage?: string;
  pricingInfo: {
    description: string;
    plans: string[];
    ctaText: string;
  };
  heroCard1?: { title: string; subtitle: string; icon?: any };
  heroCard2?: { title: string; subtitle: string; icon?: any };
  introDescription2?: string;
  introDescription3?: string;
}

export default function ZohoSolutionTemplate({
  title,
  subtitle,
  description,
  breadcrumb,
  stats,
  modules,
  benefits,
  heroImage = "/images/lap/lap2.webp",
  whatIsImage,
  pricingInfo,
  heroCard1,
  heroCard2,
  introDescription2,
  introDescription3,
}: SolutionProps) {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const productFaqs = getZohoProductFaqs(title);

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-screen overflow-hidden flex flex-col"
        style={{
          background:
            "linear-gradient(135deg, #000814 0%, #000d2e 25%, #001a4d 55%, #000d2e 80%, #000814 100%)",
        }}
      >
        {/* Ambient glows */}
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            {breadcrumb.map((item, i) => (
              <React.Fragment key={i}>
                <Link
                  href={item.href}
                  className="text-blue-300 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
                {i < breadcrumb.length - 1 && (
                  <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                )}
              </React.Fragment>
            ))}
          </motion.nav>

          {/* Two-column hero */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">
            {/* LEFT */}
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
                  {title}
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
                {description}
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
                    transition={{
                      duration: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex items-center"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ minHeight: 460 }}
            >
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                  {/* Bottom Float Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
                      {heroCard2?.icon ? <heroCard2.icon className="w-5 h-5 text-white" /> : <CheckCircle2 className="w-5 h-5 text-white" />}
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">
                        {heroCard2?.title || "Optimized for Growth"}
                      </p>
                      <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                        {heroCard2?.subtitle || "Real-time insights and automated workflows."}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Top-left peeking card */}
                <motion.div
                  initial={{ opacity: 0, x: -20, y: -10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0f4c81, #0ea5e9)' }}>
                    {heroCard1?.icon ? <heroCard1.icon className="w-5 h-5 text-white" /> : <Landmark className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">
                      {heroCard1?.title || "Digital Transformation"}
                    </p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">
                      {heroCard1?.subtitle || "Cloud-native solutions for modern teams."}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Stats row */}
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

      {/* ── Sticky Nav ───────────────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[
              { 
                label: "What is " + (title.split('—')[0].trim().replace(/\bCRM\b/g, "Customer Relationship Management").replace(/\bERP\b/g, "Enterprise Resource Planning").replace(/\bFSM\b/g, "Field Service Management").replace(/\bBI\b/g, "Business Intelligence").replace(/\bIT\b/g, "Information Technology")) + "?", 
                href: "#what-is" 
              },
              { label: "Modules", href: "#modules" },
              { label: "Benefits", href: "#benefits" },
              { label: "Services", href: "#services" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-red-600">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Introduction Section (What is ...) ───────────────────────────────── */}
      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden"
            >
              <div className="relative w-full h-full p-4 lg:p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-red-900/10 border-4 border-red-50">
                  <Image
                    src={whatIsImage || heroImage}
                    alt={title}
                    fill
                    className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Decorative Gradient Border Overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-100/50 via-transparent to-rose-50/50 pointer-events-none" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center space-y-6 py-6"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-red-600 leading-tight">
                  {subtitle}
                </h3>
              </div>
              <p className="text-base text-gray-600 leading-relaxed">
                {description}
              </p>
              {introDescription2 && (
                <p className="text-base text-gray-600 leading-relaxed">
                  {introDescription2}
                </p>
              )}
              {introDescription3 && (
                <p className="text-base text-gray-600 leading-relaxed">
                  {introDescription3}
                </p>
              )}
              <div className="pt-4">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #7c2d12 0%, #dc2626 100%)",
                    color: "#ffffff",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#ffffff";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#991b1b";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 10px 25px -5px rgba(153, 27, 27, 0.3)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "linear-gradient(135deg, #7c2d12 0%, #dc2626 100%)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#ffffff";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  <span>Request Demo</span>
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
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Modules Grid ─────────────────────────────────────────────────── */}
      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-medium text-gray-900 text-center"
          >
            {title.split('—')[0]} Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl text-center"
          >
            A comprehensive suite of integrated modules designed to unify your operations
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
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
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white"
                  style={{ minHeight: 340 }}
                >
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)`,
                      }}
                    />
                  </div>
                  <div
                    className="flex-1 p-5 pb-6 flex flex-col relative"
                    style={{ backgroundColor: `rgb(${mod.rgb})` }}
                  >
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">
                        {mod.title}
                      </h4>
                      <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">
                        {mod.description}
                      </p>
                    </div>
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Get Started <ArrowRight size={10} />
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Section (Accordion) ─────────────────────────────────── */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #060e1f 0%, #0a1e4a 25%, #0f2a57 55%, #091828 80%, #050d1a 100%)" }}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <style>{`
            @keyframes twinkle { 0%,100%{opacity:0.1;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
            @keyframes drift { 0%{transform:translateY(0px) translateX(0px)} 50%{transform:translateY(-12px) translateX(6px)} 100%{transform:translateY(0px) translateX(0px)} }
            .star-node { position:absolute; border-radius:9999px; background:white; animation: twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
          `}</style>
          {[
            { w: 2, h: 2, top: '8%', left: '12%', dur: '2.5s', delay: '0s' }, { w: 1, h: 1, top: '20%', left: '35%', dur: '3.2s', delay: '0.5s' },
            { w: 3, h: 3, top: '15%', left: '60%', dur: '4s', delay: '1s' }, { w: 1, h: 1, top: '50%', left: '8%', dur: '2.8s', delay: '0.3s' },
            { w: 2, h: 2, top: '70%', left: '22%', dur: '3.5s', delay: '1.5s' }, { w: 1, h: 1, top: '42%', left: '80%', dur: '2.1s', delay: '0.7s' },
            { w: 2, h: 2, top: '80%', left: '55%', dur: '3.8s', delay: '0.2s' }, { w: 3, h: 3, top: '30%', left: '90%', dur: '4.2s', delay: '0.9s' },
          ].map((s, i) => (
            <div key={i} className="star-node" style={{ width: `${s.w}px`, height: `${s.h}px`, top: s.top, left: s.left, '--tw-dur': s.dur, '--tw-delay': s.delay } as React.CSSProperties} />
          ))}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(99,179,237,0.18) 0%, transparent 70%)" }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Key Business Benefits
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            {/* Left image */}
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeBenefit}
                  initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 h-full w-full"
                >
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 40vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right accordion */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index
                    ? 'bg-white shadow-xl border-l-4 border-blue-600'
                    : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors duration-300 ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <Calendar size={20} />}
                      {index === 1 && <BarChart3 size={20} />}
                      {index === 2 && <Shield size={20} />}
                      {index === 3 && <Zap size={20} />}
                      {index === 4 && <Layers size={20} />}
                      {index >= 5 && <TrendingUp size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>
                      {item.title}
                    </span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-3 pl-9"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (
                          <li key={pi} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}
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

      <div id="services" className="scroll-mt-36">
        <ZohoServicesCards />
      </div>



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
                  How Much Does {title.split('—')[0].trim()} Cost?
                </h2>
                <div className="space-y-6 mb-8">
                  <p className="text-white/75 text-base leading-relaxed">
                    Zoho offers a transparent, pay-as-you-go pricing model that scales with your business. The total cost of ownership is dynamic and is primarily influenced by the specific plan edition selected, the total number of users, and any unique customization or integration requirements your business may have. We work closely with your team to audit your requirements and recommend the most cost-effective licensing structure to ensure maximum ROI for your organization.
                  </p>
                </div>
                <div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    {pricingInfo.ctaText} <ArrowRight size={16} />
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
                  <Image src="/images/people/laptopgirl.webp" alt={`${title} Pricing`} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 300px" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section id="faq" className="scroll-mt-36">
        <FAQ variant="zoho" layout="sidebar" customFaqs={productFaqs || undefined} />
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#002a8c] via-[#0044cc] to-[#0099a3] shadow-2xl"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {CTA_PARTICLES.map((p, i) => (
                <motion.div
                  key={i} className="absolute bg-white rounded-full"
                  style={{ width: `${p.w}px`, height: `${p.h}px`, top: `${p.top}%`, left: `${p.left}%` }}
                  animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
                  transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
                />
              ))}
            </div>
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Modernise Your Operations —{" "}
                  <span className="text-cyan-300">Faster Than You Think.</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Unify your processes and empower your team with the world&apos;s most comprehensive business suite. Your transformation starts with one conversation.
                </p>
              </div>
              <Link
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form ─────────────────────────────────────────────────── */}
      <div id="contact-form">
        <FooterContactForm platform="Zoho" />
      </div>

    </div>
  );
}
