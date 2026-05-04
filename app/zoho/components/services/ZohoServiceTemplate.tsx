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
  Rocket,
  ClipboardList,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import FooterContactForm from "@/app/components/shared/FooterContactForm";

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: any;
}

interface ServiceModule {
  title: string;
  description: string;
  image: string;
  color: string;
  rgb: string;
  Icon: any;
}

interface Benefit {
  title: string;
  description: string;
  image: string;
  points: string[];
}

interface ZohoServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  breadcrumb: { label: string; href: string }[];
  stats: Stat[];
  modules: ServiceModule[];
  benefits: Benefit[];
  heroImage: string;
  introImage: string;
  introTitle: string;
  introDescription1: string;
  introDescription2: string;
  bgImage?: string;
  faqs?: { question: string; answer: string }[];
}

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

export default function ZohoServiceTemplate({
  title,
  subtitle,
  description,
  breadcrumb,
  stats,
  modules,
  benefits,
  heroImage,
  introImage,
  introTitle,
  introDescription1,
  introDescription2,
  bgImage,
  faqs = [],
}: ZohoServiceTemplateProps) {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col">
        {/* ── Hero Background ── */}
        <div className="absolute inset-0 z-0 bg-[#000814]">
          <Image
            src={bgImage || introImage}
            alt="Hero Background"
            fill
            className="object-cover object-center opacity-30 select-none pointer-events-none"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#000814] via-transparent to-[#000814]/80" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
        </div>

        <div className="relative z-10 flex-1 flex flex-col justify-between max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-white/30" />}
                <Link
                  href={item.href}
                  className={index === breadcrumb.length - 1 ? "text-white/80" : "text-blue-300 hover:text-white transition-colors duration-200"}
                >
                  {item.label}
                </Link>
              </React.Fragment>
            ))}
          </motion.nav>

          <div
            className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8"
            style={{ minHeight: "calc(100vh - 150px)" }}
          >
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
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/30 hover:scale-105"
                >
                  {subtitle}
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

            {/* RIGHT */}
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
                    src={heroImage}
                    alt={title}
                    fill
                    className="object-cover object-center"
                    priority
                  />
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
                      Expert Zoho Delivery
                    </p>
                    <p className="text-gray-500 text-xs mt-0.5 leading-snug">
                      Certified Partner · Zero data loss · Hypercare included
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {[
              { label: "Overview", href: "#overview" },
              { label: "Our Services", href: "#services-grid" },
              { label: "Benefits", href: "#benefits" },
              { label: "FAQ", href: "#faq" },
              { label: "Contact", href: "#contact-form" },
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

      {/* ── Overview Section ─────────────────────────────────────── */}
      <section id="overview" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative min-h-[400px] rounded-3xl overflow-hidden mt-12 lg:mt-15"
            >
              <Image
                src={introImage}
                alt="Overview"
                fill
                className="object-cover rounded-3xl shadow-2xl transition-transform duration-700 hover:scale-105"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 mt-15"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                {introTitle}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {introDescription1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {introDescription2}
              </p>
              <div className="pt-4">
                <a
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)",
                    color: "#ffffff",
                  }}
                >
                  <span>Connect with Experts</span>
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
        id="services-grid"
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
            Our Service Offerings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl text-center"
          >
            End-to-end expertise designed to help you leverage the full power 
            of Zoho's integrated business suite.
          </motion.p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((svc, index) => (
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
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
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
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        {svc.Icon && <svc.Icon className="w-5 h-5 text-white/50" />}
                        <h4 className="text-white font-bold text-lg tracking-wide">
                          {svc.title}
                        </h4>
                      </div>
                      <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">
                        {svc.description}
                      </p>
                    </div>
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Enquire Now <ArrowRight size={10} />
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
            .star-svc { position:absolute; border-radius:9999px; background:white; animation: twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
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
              className="star-svc"
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
              Key Business Benefits
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
                  />
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
                    activeBenefit === index
                      ? "bg-white shadow-xl border-l-4 border-blue-600"
                      : "bg-white/5 border-l-4 border-transparent hover:bg-white/10"
                  }`}
                  suppressHydrationWarning
                >
                  <div className="flex items-center gap-4 w-full">
                    <span
                      className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index ? "text-gray-900" : "text-gray-300 group-hover:text-white"}`}
                    >
                      {item.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index ? "text-blue-600 rotate-90" : "text-gray-500 opacity-0 group-hover:opacity-60"}`}
                    />
                  </div>
                  <AnimatePresence>
                    {activeBenefit === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm mt-3 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                          {item.points.map((pt, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                              <span className="text-gray-700 text-xs font-medium">
                                {pt}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ Section ────────────────────────────────────────────── */}
      {faqs.length > 0 && (
        <section id="faq" className="scroll-mt-36">
          <FAQ customFaqs={faqs.map(f => ({ q: f.question, a: f.answer }))} variant="zoho" layout="sidebar" />
        </section>
      )}

      {/* ── Contact Section ─────────────────────────────────────────── */}
      <section id="contact-form" className="scroll-mt-36">
        <FooterContactForm platform="Zoho" />
      </section>
    </div>
  );
}
