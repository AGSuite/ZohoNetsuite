"use client";

import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiZap,
  FiCpu,
  FiTrendingUp,
  FiShield,
  FiCheckCircle,
  FiMessageSquare,
  FiLayers,
  FiGlobe,
  FiSearch,
  FiCheck,
  FiLock,
  FiAward,
  FiPlay,
  FiActivity,
  FiGrid,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  AnimatePresence,
} from "framer-motion";
import FooterContactForm from "@/app/components/shared/FooterContactForm";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

// Reduced stars for performance
const StarsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    const numStars = 40;
    const stars = Array.from({ length: numStars }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.2 + 0.3,
      alpha: Math.random(),
      speed: Math.random() * 0.008 + 0.002,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      stars.forEach((star) => {
        star.alpha += star.speed;
        if (star.alpha > 1 || star.alpha < 0) star.speed = -star.speed;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none w-full h-full" />;
};

export default function NetSuiteNextAIPage() {
  const color = useMotionValue(COLORS_TOP[0]);
  const [activeModule, setActiveModule] = useState("accounting");

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  const industries = [
    { id: "media", name: "Advertising, Media & Publishing", description: "Streamline bid-to-bill workflows and improve billing accuracy with AI-driven contract intelligence.", gradient: "from-blue-500 to-cyan-400" },
    { id: "construction", name: "Construction & Energy", description: "Unify project management, financials, and operations in one AI-powered unified cloud ERP system.", gradient: "from-amber-500 to-orange-400" },
    { id: "consulting", name: "Consulting & IT Services", description: "Maximize resource utilization, project margins, and billing accuracy with AI resource allocation.", gradient: "from-purple-500 to-indigo-400" },
    { id: "consumer", name: "Consumer Goods", description: "Stay ahead of demand with AI that predicts supply chain shifts, adjusts reorders, and optimizes inventory in real time.", gradient: "from-emerald-500 to-teal-400" },
    { id: "financial", name: "Financial Services", description: "Forecast performance, manage multi-currency risks, and accelerate month-end close with AI-powered planning.", gradient: "from-blue-600 to-indigo-500" },
    { id: "food", name: "Food & Beverage", description: "Anticipate ingredient demand, reduce perishability waste, and optimize distributor supply with AI planning.", gradient: "from-lime-500 to-emerald-400" },
    { id: "healthcare", name: "Healthcare & MedTech", description: "Gain operational visibility while simplifying compliance reviews, HIPAA audits, and patient billing with AI summaries.", gradient: "from-cyan-500 to-blue-400" },
    { id: "hospitality", name: "Hospitality & Leisure", description: "Run reservations, property management, and guest services with unified, AI-driven daily revenue operations.", gradient: "from-rose-500 to-pink-400" },
    { id: "industrial", name: "Industrial & Equipment", description: "Manage production, warehousing, asset maintenance, and field service to minimize unplanned downtime.", gradient: "from-slate-500 to-zinc-400" },
    { id: "life", name: "Life Sciences & Biotech", description: "Gain visibility across clinical trials and commercial operations with AI-assisted, audit-ready compliance reporting.", gradient: "from-indigo-500 to-violet-400" },
    { id: "nonprofit", name: "Nonprofit & Social Impact", description: "Unify donor data, grant tracking, and fund accounting to optimize resources and maximize mission impact.", gradient: "from-teal-500 to-emerald-400" },
    { id: "software", name: "Software & Technology", description: "Manage SaaS products, subscription metrics, ARR/MRR, and ASC 606 revenue recognition with AI analytics.", gradient: "from-violet-500 to-purple-400" },
  ];

  const erpModules = [
    { id: "accounting", label: "Accounting", icon: FiBarChart2, desc: "Go beyond numbers — ask questions in natural language and instantly understand drivers. AI automates GL, AR, and AP." },
    { id: "close", label: "Close Management", icon: FiCheckCircle, desc: "Speed up financial month-end close with automated journal entries, continuous reconciliation, and anomaly alerts." },
    { id: "multientity", label: "Multi-Entity", icon: FiGlobe, desc: "Consolidate global subsidiaries, automated intercompany eliminations, and multi-currency reporting." },
    { id: "analytics", label: "Analytics & MIS", icon: FiTrendingUp, desc: "Turn raw transactional data into executive dashboards, predictive trends, and real-time board reports." },
    { id: "customer", label: "Customer Management", icon: FiUsers, desc: "360-degree customer lifecycle intelligence connecting CRM, sales orders, billing, and support history." },
    { id: "inventory", label: "Inventory", icon: FiGrid, desc: "Predict demand spikes, prevent stockouts, and optimize warehouse multi-location fulfillment with AI." },
  ];

  const moduleBullets: Record<string, string[]> = {
    accounting: ["Ask questions in natural language and understand drivers instantly", "Automated journal entries, AP/AR workflows, and compliance checks", "Flexible GL controls built for global multi-currency operations"],
    close: ["Automated journal entry preparation and approval workflows", "Continuous reconciliation alerts for anomaly detection", "Real-time close status dashboard for CFOs and controllers"],
    multientity: ["Automated intercompany eliminations at period end", "Consolidated multi-currency financial reporting", "Shared chart of accounts across all subsidiaries"],
    analytics: ["Executive dashboards with predictive trend analysis", "Drill-down from summary to transaction level in one click", "AI-generated board-ready reports with narrative insights"],
    customer: ["360° view linking CRM, orders, billing, and support history", "AI-predicted customer health scores and renewal risks", "Automated collections workflows and dunning management"],
    inventory: ["AI-driven demand forecasting to prevent stockouts", "Multi-location bin management and fulfillment optimization", "Automated reorder point calculation and PO generation"],
  };

  const activeModuleData = erpModules.find((m) => m.id === activeModule);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-x-hidden">

      {/* ── 1. AURORA HERO ─────────────────────────────────────────────── */}
      <motion.section
        style={{ backgroundImage }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 pt-28 pb-20"
      >
        <StarsCanvas />

        <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-900/80 px-4 py-2 text-xs font-bold tracking-wide backdrop-blur-md shadow-[0_0_25px_rgba(19,255,170,0.3)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#13FFAA] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#13FFAA]" />
            </span>
            <span className="bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] bg-clip-text text-transparent font-extrabold">
              Introducing NetSuite Next — Powered & Delivered by AGSuite
            </span>
          </motion.div>

          {/* Headline — single line */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-4xl bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-center text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent tracking-tight"
          >
            NetSuite Next: Where Business Meets AI
          </motion.h1>

          {/* Single-line description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl text-center text-base sm:text-lg text-slate-300 font-normal"
          >
            Redefining enterprise ERP — autonomous AI that surfaces insights before you ask.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-8"
          >
            <motion.button
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative flex items-center gap-2.5 rounded-full bg-gray-950/80 px-8 py-4 text-base font-extrabold text-white backdrop-blur-md cursor-pointer hover:bg-slate-900 shadow-xl"
            >
              <Link href="/netsuite/contact" className="flex items-center gap-2">
                <span>Take NetSuite Next For A Spin</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1.5" />
              </Link>
            </motion.button>

            <Link
              href="#ask-oracle"
              className="px-7 py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-base font-semibold transition-all duration-300 hover:border-cyan-500/60 flex items-center gap-2 backdrop-blur-md"
            >
              <FiPlay className="text-cyan-400" />
              <span>Explore Ask Oracle AI</span>
            </Link>
          </motion.div>

          {/* Dashboard Image */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="relative mt-16 w-full max-w-5xl"
          >
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] -z-10 blur-[100px] opacity-50 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-r from-[#13FFAA]/30 via-[#1E67C6]/40 to-[#CE84CF]/30 rounded-full animate-pulse" />
            </div>

            {/* Glass frame */}
            <div className="relative p-2 sm:p-3 rounded-3xl bg-gradient-to-br from-white/15 via-slate-800/30 to-slate-900/70 backdrop-blur-2xl border border-white/20 shadow-[0_30px_90px_rgba(0,0,0,0.8)]">
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <Image
                  src="/images/lap/Next AI Dashboard.webp"
                  alt="Oracle NetSuite Next AI Command Dashboard — AGSuite Implementation"
                  width={1920}
                  height={1080}
                  className="w-full h-auto object-cover filter drop-shadow-2xl transition-transform duration-700 hover:scale-[1.01]"
                  priority
                  unoptimized
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 left-6 bg-slate-900/95 text-white px-4 py-2 rounded-full border border-[#13FFAA]/50 shadow-xl flex items-center gap-2 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-[#13FFAA] animate-ping" />
                <span>AI Core Engine Active</span>
              </div>
              <div className="absolute -bottom-4 right-6 bg-slate-900/95 text-white px-4 py-2 rounded-full border border-[#CE84CF]/50 shadow-xl text-xs font-bold text-[#CE84CF]">
                AGSuite Certified Implementation
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* ── 2. TRUST METRICS BAR ───────────────────────────────────────── */}
      <section className="relative py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: FiLayers, color: "from-blue-500 to-cyan-400", title: "#1 AI Cloud ERP", desc: "Unified suite across every business function from GL to supply chain." },
            { icon: FiCpu, color: "from-purple-500 to-indigo-400", title: "AI Built In", desc: "Embedded at every layer of the architecture, not bolted on as a plugin." },
            { icon: FiGlobe, color: "from-emerald-500 to-teal-400", title: "Trusted at Scale", desc: "44,000+ customers across 220 countries implemented by AGSuite." },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shrink-0 shadow-lg`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. ASK ORACLE — AI IS THE NEW UI ──────────────────────────── */}
      <section id="ask-oracle" className="relative py-28 px-6 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#13FFAA] bg-[#13FFAA]/10 px-4 py-1.5 rounded-full border border-[#13FFAA]/30">
              AI IS THE NEW UI
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-5 tracking-tight leading-tight">
              Ask Oracle is at the Center of NetSuite Next
            </h2>
            <p className="text-slate-400 mt-4 text-base sm:text-lg leading-relaxed">
              A single conversational interface to search, analyze, and act across your entire ERP system.
            </p>
          </div>

          {/* Three pillars — glassmorphic cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: FiMessageSquare, color: "from-cyan-500 to-blue-500", title: "Ask in Your Own Words", desc: "Search, navigate, and analyze business data using plain natural language — no SQL or saved searches required.", glow: "rgba(6,182,212,0.15)" },
              { icon: FiShield, color: "from-purple-500 to-indigo-500", title: "Trust Every Answer", desc: "Source citations on every AI response — validate, audit, and act with confidence backed by your verified General Ledger.", glow: "rgba(168,85,247,0.15)" },
              { icon: FiZap, color: "from-emerald-500 to-teal-500", title: "An Easier Way to Work", desc: "Clean, intuitive interface with smarter search, streamlined workflows, and automated financial summaries for faster decisions.", glow: "rgba(16,185,129,0.15)" },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-white/20 transition-all duration-300 overflow-hidden group"
                style={{ boxShadow: `0 0 60px ${card.glow}` }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 shadow-lg`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-extrabold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Image showcase for Ask Oracle */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-w-5xl mx-auto"
          >
            <Image
              src="/images/lap/netsuite_ai_hero.png"
              alt="Ask Oracle AI Interface in Action"
              width={1200}
              height={700}
              className="w-full h-auto object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between">
              <div>
                <p className="text-white font-bold text-lg">Ask Oracle in Action</p>
                <p className="text-slate-400 text-sm">Powered by Oracle AI, delivered by AGSuite</p>
              </div>
              <Link
                href="/netsuite/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all"
              >
                Learn More <FiArrowRight />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. INDUSTRY SOLUTIONS ─────────────────────────────────────── */}
      <section className="relative py-28 px-6 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        {/* BG accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/8 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/8 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#CE84CF] bg-[#CE84CF]/10 px-4 py-1.5 rounded-full border border-[#CE84CF]/30">
              TAILORED INDUSTRY SOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-5 tracking-tight leading-tight">
              AI-Powered ERP for Every Industry
            </h2>
            <p className="text-slate-400 mt-4 text-base sm:text-lg">
              Shaped by your industry. Driven by AGSuite's deep implementation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${ind.gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${ind.gradient} flex items-center justify-center mb-4 shadow-md`}>
                    <FiGrid className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-white/90 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{ind.description}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                  <span>Explore Industry Suite</span>
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIAL / PROOF SECTION ───────────────────────────── */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-slate-950 to-purple-950/20 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/lap/happy_cfo_netsuite_office.png"
                alt="Finance leader using NetSuite Next AI at AGSuite"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
                <p className="text-white font-bold text-sm">NetSuite Next Customer</p>
                <p className="text-slate-300 text-xs">AGSuite Implementation Partner</p>
              </div>
            </motion.div>

            {/* Quote Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="text-5xl text-blue-400 font-serif leading-none mb-4">"</div>
              <p className="text-lg sm:text-xl font-semibold text-white italic leading-relaxed">
                We&apos;re ready for the future, and with NetSuite Next delivered by AGSuite, we&apos;ll keep brewing up joy without the back-office bitterness.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-base font-bold text-white">Adam Levison</h4>
                <p className="text-xs text-blue-400 font-bold mt-0.5">happy® Finance Leader & NetSuite Innovator</p>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[{ v: "44K+", l: "Customers" }, { v: "220", l: "Countries" }, { v: "26+", l: "Years" }].map((s, i) => (
                  <div key={i} className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-xl font-black text-white">{s.v}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. ERP MODULE SHOWCASE ────────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/40 to-slate-950 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-600/8 blur-[180px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#13FFAA] bg-[#13FFAA]/10 px-4 py-1.5 rounded-full border border-[#13FFAA]/30">
              UNIFIED ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-5 tracking-tight leading-tight">
              AI Built Into Your ERP, Not Bolted On
            </h2>
            <p className="text-slate-400 mt-4 text-base sm:text-lg">
              Connecting data, automating work, and giving you clear visibility across every department.
            </p>
          </div>

          {/* Module Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
            {erpModules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                type="button"
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer border ${
                  activeModule === mod.id
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg border-blue-500/50"
                    : "bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border-white/10"
                }`}
              >
                <mod.icon className="w-4 h-4" />
                {mod.label}
              </button>
            ))}
          </div>

          {/* Module Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeModule}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md overflow-hidden shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Text */}
                <div className="p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {activeModuleData && (
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                        <activeModuleData.icon className="w-5 h-5 text-white" />
                      </div>
                    )}
                    <h3 className="text-2xl font-extrabold text-white">
                      {activeModuleData?.label}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {activeModuleData?.desc}
                  </p>
                  <div className="space-y-3">
                    {(moduleBullets[activeModule] || []).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <FiCheck className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8">
                    <Link
                      href="/netsuite/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg transition-all"
                    >
                      Explore {activeModuleData?.label} Suite
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>

                {/* Image Right */}
                <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
                  <Image
                    src="/images/lap/netsuite_cfo_predictive_cashflow.png"
                    alt={`NetSuite ${activeModuleData?.label} Module Preview`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent lg:from-transparent lg:via-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 7. PLATFORM SECURITY & EXTENSIBILITY ─────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/15 to-slate-950 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-400/30">
              ENTERPRISE PLATFORM
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white mt-5 tracking-tight">
              Built for Scale, Security & Extension
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {[
              {
                icon: FiLock,
                gradient: "from-blue-500 to-cyan-500",
                title: "Built for Scale and Security",
                desc: "Powered by Oracle Cloud Infrastructure (OCI), NetSuite Next delivers enterprise-grade security and resilience — optimized for real-time, AI-driven workload execution.",
                img: "/images/lap/netsuite_cfo_ai_dashboard.png",
              },
              {
                icon: FiCpu,
                gradient: "from-purple-500 to-indigo-500",
                title: "Built to Extend",
                desc: "Build custom autonomous agents, connect 3rd party systems, and create tailored ERP experiences on the SuiteCloud platform with AGSuite's certified developers.",
                img: "/images/lap/netsuite_cfo_consolidation_dashboard.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>
                <div className="p-8">
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Already using NS box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-cyan-400/30 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 blur-[80px]" />
            <div className="relative z-10 p-10 sm:p-14 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                <FiActivity className="w-3.5 h-3.5" /> Coming Soon
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-4">Already Using Oracle NetSuite?</h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
                NetSuite Next is coming to customers soon! Switching will be as simple as pressing a button — zero data migration or rework required. Partner with AGSuite to prepare your team.
              </p>
              <Link
                href="/netsuite/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] text-slate-950 font-black text-sm sm:text-base shadow-xl hover:scale-105 transition-all duration-300"
              >
                Prepare For NetSuite Next With AGSuite →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA BANNER ───────────────────────────────────────── */}
      <section className="py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-gray-700 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden"
          >
            <Image
              src="/images/lap/group1.webp"
              alt="NetSuite Next — AGSuite Implementation"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/15 blur-3xl -mr-36 -mt-36" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/15 blur-3xl -ml-36 -mb-36" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-[#13FFAA] rounded-full animate-pulse" />
                NetSuite Next — Now Available via AGSuite
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Scale your vision with the world&apos;s #1 Cloud ERP.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Ready to get started?</span>
              </h2>
              <p className="text-slate-300 text-base mb-8 leading-relaxed max-w-lg">
                AGSuite is your certified NetSuite Next implementation partner. From discovery to go-live — we deliver AI-powered ERP transformation across every industry.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/netsuite/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl transition-all shadow-xl hover:shadow-blue-500/30 flex items-center gap-2"
                >
                  Talk to an Expert <FiArrowRight />
                </Link>
                <Link
                  href="/netsuite/free-consultation"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all border border-white/20 backdrop-blur-sm flex items-center gap-2"
                >
                  Free Consultation <FiArrowRight />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. FOOTER CONTACT FORM ────────────────────────────────────── */}
      <FooterContactForm platform="NetSuite" />

    </main>
  );
}
