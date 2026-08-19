"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FAQ } from "@/app/components/home/FAQ";
import {
  Check,
  ChevronRight,
  ArrowRight,
  Shield,
  Target,
  Database,
  Rocket,
  Users,
  Layers,
  Award,
  Sparkles,
  Zap,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

/* ------------------ ERP BENEFITS (8 ITEMS) ------------------ */
const benefits = [
  {
    title: "Flexible & Adaptable",
    description:
      "Easily customize workflows, fields, and modules to fit your unique operational processes and evolving business needs.",
    image: "/images/lap/lap1.webp",
    points: [
      "Tailor-made dashboards and workflows",
      "Easily adapt to new operational models",
      "Flexible user roles and permissions",
      "Custom reporting and automated alerts",
    ],
  },
  {
    title: "Scales with Your Business",
    description:
      "Grows seamlessly as your company expands, without costly infrastructure upgrades or disruption to your daily operations.",
    image: "/images/people/laptopgirl.webp",
    points: [
      "Add new users, entities, and subsidiaries",
      "Supports growing transaction volumes",
      "Global multi-currency and tax management",
      "Zero server or hardware management costs",
    ],
  },
  {
    title: "Built to Grow",
    description:
      "Designed with cloud-native scalability to support long-term enterprise innovation and business evolution.",
    image: "/images/lap/lap3.webp",
    points: [
      "Continuous bi-annual cloud updates",
      "Activate new modules on-demand",
      "High-availability Oracle cloud infrastructure",
      "Built-in business intelligence & analytics",
    ],
  },
  {
    title: "Quick Deployment",
    description:
      "Get up and running fast with pre-configured SuiteSuccess best practices, minimal setup time, and smooth rollout.",
    image: "/images/people/laptopmen2.webp",
    points: [
      "Pre-configured industry best practices",
      "Accelerated go-live timelines",
      "Streamlined data migration framework",
      "Fast time-to-value for your ERP investment",
    ],
  },
  {
    title: "Complete Control",
    description:
      "Gain complete real-time visibility and control over every department and workflow from a unified command center.",
    image: "/images/lap/lap2.webp",
    points: [
      "Unified finance, CRM, and supply chain",
      "Real-time visibility across operations",
      "Automated compliance and audit trails",
      "Personalized role-based KPI tracking",
    ],
  },
  {
    title: "Always-On Optimization",
    description:
      "Continuously fine-tuned for peak performance, automated efficiency, and enterprise-grade cloud reliability.",
    image: "/images/lap/lap4.webp",
    points: [
      "99.98% guaranteed uptime SLA",
      "Continuous background performance tuning",
      "Automated workflow reconciliation",
      "Enterprise 256-bit encryption & security",
    ],
  },
  {
    title: "Proven Platform",
    description:
      "Backed by robust Oracle technology and decades of proven performance trusted by 40,000+ organizations worldwide.",
    image: "/images/lap/lap5.webp",
    points: [
      "Trusted by over 40,000+ businesses globally",
      "Industry-leading cloud ERP market share",
      "Standard for fast-growing and enterprise firms",
      "Proven reliability and continuous evolution",
    ],
  },
  {
    title: "AGSuite as a Trusted Partner",
    description:
      "Partner with a certified team of NetSuite specialists committed to your long-term success, continuous optimization, and ROI.",
    image: "/images/Background/teambg2.webp",
    points: [
      "Certified NetSuite Solution Consultants",
      "End-to-end implementation and training",
      "Dedicated ongoing support and health checks",
      "Proven delivery across diverse industries",
    ],
  },
];

/* ------------------ FAQ DATA (5 QUESTIONS) ------------------ */
const faqData = [
  {
    question: "What is Oracle NetSuite used for?",
    answer:
      "Oracle NetSuite is a cloud-based ERP solution used for managing accounting, CRM, inventory, eCommerce, and more—all in a unified platform.",
  },
  {
    question: "What size of business is NetSuite suitable for ?",
    answer:
      "NetSuite is ideal for mid-sized to large businesses, as well as fast-growing startups looking for a scalable, all-in-one cloud ERP solution.",
  },
  {
    question: "How much does NetSuite ERP cost?",
    answer:
      "NetSuite pricing depends on the selected modules, number of users, and implementation complexity. It includes a core platform license and optional add-ons.",
  },
  {
    question: "Can NetSuite be customized for my industry?",
    answer:
      "Absolutely. NetSuite offers industry-specific solutions and modules tailored to manufacturing, retail, services, and more.",
  },
  {
    question: "Does NetSuite support multi-currency and global operations?",
    answer:
      "Yes. NetSuite supports 190+ currencies, 27+ languages, and is used in 200+ countries—making it perfect for global businesses.",
  },
];

export default function LandingBenefitsPricingFAQ() {
  const [activeBenefit, setActiveBenefit] = useState<number>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const scrollToHero = (e: React.MouseEvent) => {
    e.preventDefault();
    const heroElem = document.getElementById("hero");
    if (heroElem) {
      heroElem.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="font-['DM_Sans',sans-serif]">

      {/* ── 1. BENEFITS SECTION (#benefits) ── */}
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
            .star-impl { position:absolute; border-radius:9999px; background:white; animation: twinkle var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
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
              className="star-impl"
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-xs">
              ERP Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-5 leading-tight text-center">
              Why Businesses Choose Oracle NetSuite Cloud ERP
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed text-center">
              See why high-growth enterprises run on NetSuite to scale faster, control costs, and achieve operational excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            {/* Left: Active Benefit Image */}
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right: Interactive Tabs List */}
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center shadow-inner backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setActiveBenefit(index)}
                  className={`group relative w-full flex flex-col justify-center px-5 py-3.5 text-left rounded-xl transition-all duration-300 outline-none ${
                    activeBenefit === index
                      ? "bg-white shadow-xl border-l-4 border-blue-600"
                      : "bg-white/5 border-l-4 border-transparent hover:bg-white/10"
                  }`}
                  suppressHydrationWarning
                >
                  <div className="flex items-center gap-4 w-full">
                    <div
                      className={`shrink-0 transition-colors duration-300 ${
                        activeBenefit === index ? "text-blue-600" : "text-gray-400 group-hover:text-gray-200"
                      }`}
                    >
                      {index === 0 && <Shield size={20} />}
                      {index === 1 && <Target size={20} />}
                      {index === 2 && <Database size={20} />}
                      {index === 3 && <Rocket size={20} />}
                      {index === 4 && <Users size={20} />}
                      {index === 5 && <Zap size={20} />}
                      {index === 6 && <Award size={20} />}
                      {index >= 7 && <Sparkles size={20} />}
                    </div>
                    <span
                      className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${
                        activeBenefit === index ? "text-gray-900" : "text-gray-300 group-hover:text-white"
                      }`}
                    >
                      {item.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                        activeBenefit === index
                          ? "text-blue-600 rotate-90"
                          : "text-gray-500 opacity-0 group-hover:opacity-60"
                      }`}
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

      {/* ── 2. NEXT AI STYLE CTA SECTION ── */}
      <section className="py-14 sm:py-24 overflow-hidden relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-slate-800 rounded-3xl sm:rounded-[3rem] p-8 sm:p-14 lg:p-20 relative overflow-hidden bg-slate-950 text-white shadow-2xl"
          >
            {/* Background Image with Black Overlay */}
            <Image
              src="/images/lap/netsuite_final_cta_bg_hd.png"
              alt="Streamline Your Operations with Oracle NetSuite"
              fill
              className="object-cover object-center opacity-95"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/40" />

            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-[#13FFAA] rounded-full animate-pulse" />
                Next-Gen Cloud ERP Transformation
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                Streamline Your Operations with{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                  Oracle NetSuite
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-lg mb-8 leading-relaxed max-w-2xl font-normal">
                Experience unified financials, CRM, and automation tools—all in one cloud-based ERP trusted by global enterprises. Reduce manual work, increase efficiency, and grow smarter.
              </p>

              <div>
                <Link
                  href="#hero"
                  onClick={scrollToHero}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-4.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-extrabold text-base shadow-xl shadow-blue-500/30 hover:scale-105 transition-all duration-300 cursor-pointer"
                >
                  <span>Schedule Free Demo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. PRICING SECTION (#ERPCost / #pricing) ── */}
      <section id="ERPCost" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">

          {/* ── Dark Teal Hero Pricing Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: "#06303f" }}
          >
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              {/* Left: Text Content */}
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does Oracle NetSuite ERP Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-4">
                  Companies of every size, from pre-revenue startups to fast-growing businesses, have made the move to NetSuite. Looking for a better way to run your business but wondering about the cost?
                </p>
                <p className="text-white/75 text-base leading-relaxed mb-4">
                  Users subscribe to NetSuite for an annual license fee. Your license is made up of three main components: core platform, optional modules, and the number of users. There is also a one-time implementation fee for initial setup.
                </p>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  As your business grows, you can easily activate new modules and add users — that&apos;s the beauty of cloud software. Get started now with Industry Editions of NetSuite ERP that include accounting capabilities and modules to address industry-specific needs.
                </p>
                <div>
                  <Link
                    href="#hero"
                    onClick={scrollToHero}
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    Get a Custom Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Organic Shape + Image */}
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
                    alt="NetSuite ERP Pricing"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── 4. FAQ SECTION (#faq) ── */}
      <FAQ variant="netsuite" id="faq" />

    </div>
  );
}
