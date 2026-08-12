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
import NSHeroNextAIVisual from "../components/NSHeroNextAIVisual";
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

/* ── Ask Oracle Interactive Features Section ──────────────────────────────── */
const askOracleFeatureItems = [
  {
    id: 0,
    icon: FiMessageSquare,
    title: "Ask in Your Own Words",
    subtitle: "Natural Language ERP Search",
    desc: "Search, navigate, and analyze business data using plain natural language — no SQL or saved searches required. Simply type what you need and Oracle AI understands your intent, surfacing the right data instantly.",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/30",
    accent: "#13FFAA",
    image: "/images/ai/ask_natural_language.png",
    imageAlt: "Natural language AI search interface for NetSuite ERP",
    tags: ["No-Code Queries", "Intent Recognition", "Instant Results"],
  },
  {
    id: 1,
    icon: FiShield,
    title: "Trust Every Answer",
    subtitle: "Source-Cited AI Responses",
    desc: "Source citations on every AI response — validate, audit, and act with confidence backed by your verified General Ledger. Every insight is traceable to its source, giving finance teams the transparency they need.",
    color: "from-purple-400 to-indigo-500",
    glow: "shadow-purple-500/30",
    accent: "#CE84CF",
    image: "/images/ai/trust_every_answer.png",
    imageAlt: "AI trust and source citation verification dashboard",
    tags: ["Audit Trail", "Source Citations", "GL Verified"],
  },
  {
    id: 2,
    icon: FiZap,
    title: "An Easier Way to Work",
    subtitle: "Streamlined AI-Powered Workflows",
    desc: "Clean, intuitive interface with smarter search, streamlined workflows, and automated financial summaries for faster decisions. Work the way you think — Oracle AI adapts to your process, not the other way around.",
    color: "from-emerald-400 to-teal-500",
    glow: "shadow-emerald-500/30",
    accent: "#4ADE80",
    image: "/images/ai/easier_way_to_work.png",
    imageAlt: "AI-powered streamlined ERP workflow dashboard",
    tags: ["Auto-Summaries", "Smart Search", "Workflow AI"],
  },
];

function AskOracleFeatures() {
  const [active, setActive] = useState(0);
  const activeItem = askOracleFeatureItems[active];

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

        {/* ── LEFT: Headline Tabs ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          {askOracleFeatureItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                className={`group relative w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                  ? "border-white/20 bg-white/[0.08] shadow-2xl"
                  : "border-white/5 bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.05]"
                  }`}
              >
                {/* Active left accent bar */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-full bg-gradient-to-b ${item.color} transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"
                    }`}
                />

                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-lg ${item.glow} transition-transform duration-300 ${isActive ? "scale-105 sm:scale-110" : "scale-100"}`}
                  >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Subtitle */}
                    <p
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1 transition-colors duration-300"
                      style={{ color: isActive ? item.accent : "#94a3b8" }}
                    >
                      {item.subtitle}
                    </p>

                    {/* Title */}
                    <h3
                      className={`text-base sm:text-xl font-extrabold transition-colors duration-300 ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                    >
                      {item.title}
                    </h3>

                    {/* Description — visible when active */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div
                          key={item.id + "-desc"}
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <p className="text-slate-200 text-xs sm:text-base leading-relaxed mb-4 font-normal">
                            {item.desc}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 lg:mb-0">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border"
                                style={{
                                  color: item.accent,
                                  borderColor: item.accent + "50",
                                  background: item.accent + "18",
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Mobile Inline Image Preview */}
                          <div className="block lg:hidden mt-4 rounded-xl overflow-hidden border border-white/15 bg-slate-950 shadow-xl">
                            <div className={`h-1 bg-gradient-to-r ${item.color} w-full`} />
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              width={700}
                              height={450}
                              className="w-full h-auto object-contain bg-slate-900"
                              quality={92}
                            />
                            <div className="bg-slate-900/90 border-t border-white/10 p-3 flex items-center justify-between">
                              <span className="text-white font-extrabold text-xs">{item.title}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-slate-300 bg-white/10">Live AI Engine</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className={`flex-shrink-0 mt-1 transition-all duration-300 ${isActive ? "text-white rotate-90" : "text-slate-600 group-hover:text-slate-400"
                      }`}
                  >
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* ── RIGHT: Image Panel (Desktop view) ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden lg:block relative"
        >
          {/* Glow aura */}
          <div
            className={`absolute -inset-4 rounded-[2rem] blur-[60px] opacity-25 bg-gradient-to-br ${activeItem.color} transition-all duration-700 pointer-events-none`}
          />

          {/* Image card shell */}
          <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-[0_20px_80px_rgba(0,0,0,0.6)] bg-slate-950 flex flex-col">
            {/* Top color accent bar */}
            <div className={`h-1 flex-shrink-0 bg-gradient-to-r ${activeItem.color} w-full transition-all duration-500`} />

            {/* AI dot indicators */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              {[0, 1, 2].map((d) => (
                <motion.div
                  key={d}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: d * 0.4 }}
                  className="w-2 h-2 rounded-full"
                  style={{ background: activeItem.accent }}
                />
              ))}
            </div>

            {/* Image viewport */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full bg-slate-900 overflow-hidden"
              >
                <Image
                  src={activeItem.image}
                  alt={activeItem.imageAlt}
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain rounded-t-xl"
                  quality={95}
                />
              </motion.div>
            </AnimatePresence>

            {/* Dedicated Footer Caption Bar */}
            <div className="bg-slate-900/95 border-t border-white/10 p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${activeItem.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <activeItem.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-extrabold text-sm leading-tight">{activeItem.title}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{activeItem.subtitle}</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full text-slate-300 bg-white/10 border border-white/15">
                Live AI Engine
              </span>
            </div>
          </div>

          {/* Floating AI decoration — top-left */}
          <motion.div
            animate={{ y: [-6, 6, -6] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -top-5 -left-5 w-16 h-16 rounded-2xl border border-white/15 bg-slate-900/90 backdrop-blur-md flex items-center justify-center shadow-2xl hidden sm:flex z-20"
          >
            <FiCpu className="w-7 h-7 text-cyan-400" />
          </motion.div>
          {/* Floating AI decoration — bottom-right */}
          <motion.div
            animate={{ y: [6, -6, 6] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-4 -right-4 w-14 h-14 rounded-2xl border border-white/15 bg-slate-900/90 backdrop-blur-md flex items-center justify-center shadow-2xl hidden sm:flex z-20"
          >
            <FiActivity className="w-5 h-5 text-purple-400" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}


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
    {
      id: "software",
      name: "Software & Technology",
      description: "Automate complex subscription billing, ASC 606 revenue recognition, and multi-entity financial consolidations.",
      gradient: "from-purple-500 to-indigo-500",
      image: "/images/industries/software-tech-main.png",
      link: "/netsuite/industries/software-and-technology",
      icon: FiCpu,
      tag: "Technology",
    },
    {
      id: "it-services",
      name: "IT & Professional Services",
      description: "Maximize resource utilization, project accounting, time & expense tracking, and automated client billing.",
      gradient: "from-blue-500 to-cyan-500",
      image: "/images/industries/it-services-main.png",
      link: "/netsuite/industries/it-and-professional-services",
      icon: FiUsers,
      tag: "Services",
    },
    {
      id: "wholesale",
      name: "Wholesale Distribution",
      description: "Automate procurement, WMS warehouse operations, demand planning, and multi-channel order fulfillment.",
      gradient: "from-amber-500 to-orange-500",
      image: "/images/industries/Wholesale-Distribution-compressed.webp",
      link: "/netsuite/industries/wholesale-distribution",
      icon: FiGrid,
      tag: "Distribution",
    },
    {
      id: "advertising",
      name: "Advertising & Marketing",
      description: "Integrate campaign project management and agency financials for real-time campaign margin profitability.",
      gradient: "from-rose-500 to-pink-500",
      image: "/images/industries/marketing.jpg",
      link: "/netsuite/industries/advertising-and-digital-marketing-agencies",
      icon: FiGlobe,
      tag: "Agencies",
    },
    {
      id: "media",
      name: "Media & Publishing",
      description: "Manage advertising sales, subscriber circulation, ASC 606 revenue recognition, and digital media operations.",
      gradient: "from-violet-500 to-purple-500",
      image: "/images/industries/media.webp",
      link: "/netsuite/industries/media-and-publishing",
      icon: FiLayers,
      tag: "Media",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      description: "Connect e-commerce, POS, real-time inventory, and intelligent order routing into a unified omnichannel experience.",
      gradient: "from-emerald-500 to-teal-500",
      image: "/images/industries/ecommerce.webp",
      link: "/netsuite/industries/retail-and-e-commerce",
      icon: FiTrendingUp,
      tag: "Omnichannel",
    },
    {
      id: "transport",
      name: "Transportation & Logistics",
      description: "Manage fleet operations, route optimization, automated dispatch, and real-time freight financial management.",
      gradient: "from-cyan-500 to-blue-500",
      image: "/images/industries/logistics-means-transport-together-with-technological-futuristic-holograms (2)_11zon.jpg",
      link: "/netsuite/industries/transportation-and-logistics",
      icon: FiGlobe,
      tag: "Logistics",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      description: "Connect shop floor operations, WIP routing, quality assurance control, and supply chain on a single platform.",
      gradient: "from-slate-600 to-zinc-500",
      image: "/images/industries/manufacture-compressed-1.webp",
      link: "/netsuite/industries/manufacturing",
      icon: FiGrid,
      tag: "Manufacturing",
    },
    {
      id: "telecom",
      name: "Telecom Industry",
      description: "Manage high-volume usage billing, OSS/BSS integrations, ASC 606 revenue recognition, and global expansion.",
      gradient: "from-blue-600 to-indigo-600",
      image: "/images/industries/telecom-industry.webp",
      link: "/netsuite/industries/telecom-industry",
      icon: FiZap,
      tag: "Telecom",
    },
    {
      id: "financial",
      name: "Financial Services",
      description: "Streamline multi-entity consolidation, GAAP/IFRS compliance, risk management controls, and automated reporting.",
      gradient: "from-teal-500 to-emerald-500",
      image: "/images/industries/financial-services-industry.webp",
      link: "/netsuite/industries/financial-services",
      icon: FiBarChart2,
      tag: "Finance",
    },
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
            className="w-full max-w-4xl bg-gradient-to-br from-white via-slate-100 to-slate-300 bg-clip-text text-center text-2xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-transparent tracking-tight px-2"
          >
            NetSuite Next: Where Business Meets AI
          </motion.h1>

          {/* Single-line description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-2xl text-center text-sm sm:text-lg text-slate-300 font-normal px-2"
          >
            Redefining enterprise ERP — autonomous AI that surfaces insights before you ask.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 w-full sm:w-auto px-4"
          >
            <motion.button
              style={{ border, boxShadow }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto group relative flex items-center justify-center gap-2.5 rounded-full bg-gray-950/80 px-6 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-extrabold text-white backdrop-blur-md cursor-pointer hover:bg-slate-900 shadow-xl"
            >
              <Link href="/netsuite/contact" className="flex items-center gap-2">
                <span>Take NetSuite Next For A Spin</span>
                <FiArrowRight className="transition-transform group-hover:translate-x-1.5" />
              </Link>
            </motion.button>

            <Link
              href="#ask-oracle"
              className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 rounded-full bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm sm:text-base font-semibold transition-all duration-300 hover:border-cyan-500/60 flex items-center justify-center gap-2 backdrop-blur-md"
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
            className="relative mt-8 sm:mt-10 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl mx-auto"
          >
            <NSHeroNextAIVisual containerClassName="w-full max-w-full ml-0" showCards={false} />
          </motion.div>
        </div>
      </motion.section>

      {/* ── 2. TRUST METRICS BAR ───────────────────────────────────────── */}
      <section className="relative py-12 sm:py-16 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border-y border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
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
              className="flex items-start gap-4 p-4 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className={`p-2.5 sm:p-3 rounded-xl bg-gradient-to-br ${item.color} shrink-0 shadow-lg`}>
                <item.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-base font-extrabold text-white mb-1">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── 3. ASK ORACLE — AI IS THE NEW UI ──────────────────────────── */}
      <section id="ask-oracle" className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 blur-[120px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#13FFAA] bg-[#13FFAA]/10 px-4 py-1.5 rounded-full border border-[#13FFAA]/30">
              AI IS THE NEW UI
            </span>
            <h2 className="text-2xl sm:text-5xl font-medium text-white mt-4 sm:mt-5 tracking-tight leading-tight">
              Ask Oracle is at the Center of NetSuite Next
            </h2>
            <p className="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed">
              A single conversational interface to search, analyze, and act across your entire ERP system.
            </p>
          </div>

          {/* Interactive Benefits — Left tabs + Right image */}
          <AskOracleFeatures />

          {/* Ask Oracle Laptop Showcase with Animated Background Tech Graphics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative max-w-5xl mx-auto pt-4 sm:pt-0"
          >
            {/* Background AI Tech Graphics behind Laptop */}
            <div className="absolute -inset-12 -z-10 pointer-events-none overflow-hidden rounded-[4rem]">
              {/* Multi-layer animated glowing aura */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/30 via-blue-600/35 to-purple-600/30 blur-[110px] animate-pulse" />

              {/* Tech Circuit / Grid Lines SVG pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="laptop-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#laptop-grid)" />
              </svg>

              {/* Floating Animated Sparks / Twinkling Stars */}
              {[
                { top: "10%", left: "8%", size: "w-3 h-3", color: "#13FFAA", delay: 0 },
                { top: "18%", right: "6%", size: "w-3.5 h-3.5", color: "#CE84CF", delay: 1 },
                { bottom: "14%", left: "6%", size: "w-3 h-3", color: "#1E67C6", delay: 2 },
                { bottom: "20%", right: "10%", size: "w-2.5 h-2.5", color: "#13FFAA", delay: 0.5 },
                { top: "45%", left: "2%", size: "w-2.5 h-2.5", color: "#CE84CF", delay: 1.5 },
                { top: "50%", right: "2%", size: "w-3 h-3", color: "#1E67C6", delay: 2.2 },
              ].map((star, sIdx) => (
                <motion.div
                  key={sIdx}
                  animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.3, 1, 0.3],
                    rotate: [0, 180, 360],
                  }}
                  transition={{ repeat: Infinity, duration: 3.5, delay: star.delay, ease: "easeInOut" }}
                  className={`absolute ${star.size} rounded-full blur-[1px]`}
                  style={{
                    top: star.top,
                    left: star.left,
                    right: star.right,
                    bottom: star.bottom,
                    backgroundColor: star.color,
                    boxShadow: `0 0 16px ${star.color}`,
                  }}
                />
              ))}
            </div>



            {/* Outer Glowing Neon Border Ring + Card shell */}
            <div className="p-[2px] rounded-2xl sm:rounded-[2rem] bg-gradient-to-r from-cyan-400/60 via-blue-500/70 to-purple-500/60 shadow-[0_0_60px_rgba(19,255,170,0.25)]">
              <div className="relative rounded-[0.9rem] sm:rounded-[1.9rem] overflow-hidden border border-white/20 shadow-[0_30px_100px_rgba(0,0,0,0.9)] bg-slate-950 backdrop-blur-xl">

                {/* High-res laptop preview */}
                <div className="relative w-full overflow-hidden">
                  <Image
                    src="/images/lap/ask_oracle_laptop_perfect_composite.png"
                    alt="Ask Oracle AI in Action — NetSuite Next AI Dashboard on Laptop with AI Graphics"
                    width={1400}
                    height={1400}
                    className="w-full h-auto object-cover rounded-[0.9rem] sm:rounded-[1.9rem] transition-transform duration-700 hover:scale-[1.008]"
                    quality={100}
                    priority
                    unoptimized
                  />
                </div>

                {/* Bottom gradient + text overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 z-10">
                  <div>
                    <p className="text-white font-black text-base sm:text-xl tracking-tight">Ask Oracle in Action</p>
                    <p className="text-slate-300 text-xs sm:text-sm font-medium mt-0.5">Powered by Oracle AI, delivered by AGSuite</p>
                  </div>
                  <Link
                    href="/netsuite/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/30 backdrop-blur-md transition-all shrink-0 shadow-lg"
                  >
                    Learn More <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. INDUSTRY SOLUTIONS ─────────────────────────────────────── */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950">
        {/* BG accent */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/8 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-600/8 blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#CE84CF] bg-[#CE84CF]/10 px-4 py-1.5 rounded-full border border-[#CE84CF]/30">
              TAILORED INDUSTRY SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-5xl font-medium text-white mt-4 sm:mt-5 tracking-tight leading-tight">
              AI-Powered ERP for Every Industry
            </h2>
            <p className="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-lg">
              Shaped by your industry. Driven by AGSuite's deep implementation experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {industries.map((ind, i) => {
              return (
                <motion.div
                  key={ind.id}
                  initial="initial"
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover="hover"
                  variants={{
                    initial: { opacity: 0, y: 20 },
                    hover: { y: -6, transition: { duration: 0.3 } },
                  }}
                  className="group relative rounded-2xl bg-white border border-gray-200/90 hover:border-blue-400/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 flex flex-col justify-between overflow-hidden cursor-pointer"
                >
                  {/* Top Image Banner */}
                  <div className="relative w-full h-44 sm:h-56 overflow-hidden bg-slate-100">
                    <Image
                      src={ind.image}
                      alt={ind.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />

                    {/* Category Tag on Image */}
                    <span className="absolute top-3 left-3 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-white bg-slate-900/85 backdrop-blur-md px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-white/20 shadow-md">
                      {ind.tag}
                    </span>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-4 sm:p-5 pt-3.5 sm:pt-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-[#001e4d] mb-1.5 group-hover:text-blue-600 transition-colors">
                        {ind.name}
                      </h3>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-medium line-clamp-2">
                        {ind.description}
                      </p>
                    </div>

                    {/* Explore Link */}
                    <Link
                      href={ind.link}
                      className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-blue-600 transition-colors"
                    >
                      <span>Explore Industry Suite</span>
                      <FiArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIAL / PROOF SECTION ───────────────────────────── */}
      <section className="relative py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/30 via-slate-950 to-purple-950/20 pointer-events-none" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">

            {/* Image Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden aspect-[16/9] sm:aspect-[4/3] border border-white/10 shadow-2xl"
            >
              <Image
                src="/images/lap/happy_cfo_netsuite_office.webp"
                alt="Finance leader using NetSuite Next AI at AGSuite"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="flex gap-1 mb-1 sm:mb-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xs sm:text-sm">★</span>
                  ))}
                </div>
                <p className="text-white font-bold text-xs sm:text-sm">NetSuite Next Customer</p>
                <p className="text-slate-300 text-[10px] sm:text-xs">AGSuite Implementation Partner</p>
              </div>
            </motion.div>

            {/* Quote Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="text-4xl sm:text-5xl text-blue-400 font-serif leading-none mb-3 sm:mb-4">"</div>
              <p className="text-base sm:text-xl font-semibold text-white italic leading-relaxed">
                We&apos;re ready for the future, and with NetSuite Next delivered by AGSuite, we&apos;ll keep brewing up joy without the back-office bitterness.
              </p>
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-white/10">
                <h4 className="text-sm sm:text-base font-bold text-white">Adam Levison</h4>
                <p className="text-xs text-blue-400 font-bold mt-0.5">happy® Finance Leader & NetSuite Innovator</p>
              </div>

              {/* Stats */}
              <div className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-4">
                {[{ v: "44K+", l: "Customers" }, { v: "220", l: "Countries" }, { v: "26+", l: "Years" }].map((s, i) => (
                  <div key={i} className="text-center p-2.5 sm:p-3 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-base sm:text-xl font-black text-white">{s.v}</div>
                    <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 6. ERP MODULE SHOWCASE ────────────────────────────────────── */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/40 to-slate-950 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-emerald-600/8 blur-[180px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#13FFAA] bg-[#13FFAA]/10 px-4 py-1.5 rounded-full border border-[#13FFAA]/30">
              UNIFIED ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-5xl font-medium text-white mt-4 sm:mt-5 tracking-tight leading-tight">
              AI Built Into Your ERP, Not Bolted On
            </h2>
            <p className="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-lg">
              Connecting data, automating work, and giving you clear visibility across every department.
            </p>
          </div>

          {/* Module Pills */}
          <div className="flex overflow-x-auto no-scrollbar py-2 px-1 sm:flex-wrap sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-full">
            {erpModules.map((mod) => (
              <button
                key={mod.id}
                onClick={() => setActiveModule(mod.id)}
                type="button"
                className={`flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer shrink-0 border ${activeModule === mod.id
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
                <div className="p-6 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {activeModuleData && (
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
                        <activeModuleData.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      </div>
                    )}
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                      {activeModuleData?.label}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
                    {activeModuleData?.desc}
                  </p>
                  <div className="space-y-2.5 sm:space-y-3">
                    {(moduleBullets[activeModule] || []).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <FiCheck className="text-emerald-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <Link
                      href="/netsuite/contact"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg transition-all"
                    >
                      Explore {activeModuleData?.label} Suite
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>

                {/* Image Right */}
                <div className="relative min-h-[220px] sm:min-h-[300px] lg:min-h-0 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
                  <Image
                    src="/images/lap/netsuite_module_showcase_hd.png"
                    alt={`NetSuite ${activeModuleData?.label} Module Preview`}
                    fill
                    className="object-cover"
                    quality={98}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent lg:from-transparent lg:via-transparent" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── 7. PLATFORM SECURITY & EXTENSIBILITY ─────────────────────── */}
      <section className="relative py-16 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/15 to-slate-950 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-400 bg-blue-400/10 px-4 py-1.5 rounded-full border border-blue-400/30">
              ENTERPRISE PLATFORM
            </span>
            <h2 className="text-2xl sm:text-5xl font-black text-white mt-4 sm:mt-5 tracking-tight">
              Built for Scale, Security & Extension
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-8">
            {[
              {
                icon: FiLock,
                gradient: "from-blue-500 to-cyan-500",
                title: "Built for Scale and Security",
                desc: "Powered by Oracle Cloud Infrastructure (OCI), NetSuite Next delivers enterprise-grade security and resilience — optimized for real-time, AI-driven workload execution.",
                img: "/images/lap/netsuite_scale_security_hd.png",
              },
              {
                icon: FiCpu,
                gradient: "from-purple-500 to-indigo-500",
                title: "Built to Extend",
                desc: "Build custom autonomous agents, connect 3rd party systems, and create tailored ERP experiences on the SuiteCloud platform with AGSuite's certified developers.",
                img: "/images/lap/netsuite_built_to_extend_hd.png",
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
                <div className="relative h-44 sm:h-56 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    quality={98}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                </div>
                <div className="p-5 sm:p-8">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 sm:mb-5 shadow-lg`}>
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-base leading-relaxed">{item.desc}</p>
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
            <div className="relative z-10 p-6 sm:p-14 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6">
                <FiActivity className="w-3.5 h-3.5" /> Coming Soon
              </div>
              <h3 className="text-xl sm:text-4xl font-extrabold text-white mb-3 sm:mb-4">Already Using Oracle NetSuite?</h3>
              <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
                NetSuite Next is coming to customers soon! Switching will be as simple as pressing a button — zero data migration or rework required. Partner with AGSuite to prepare your team.
              </p>
              <Link
                href="/netsuite/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 rounded-full bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] text-slate-950 font-black text-xs sm:text-base shadow-xl hover:scale-105 transition-all duration-300"
              >
                Prepare For NetSuite Next With AGSuite →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FINAL CTA BANNER ───────────────────────────────────────── */}
      <section className="py-14 sm:py-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="border border-gray-700 rounded-3xl sm:rounded-[3rem] p-6 sm:p-12 lg:p-24 relative overflow-hidden"
          >
            <Image
              src="/images/lap/netsuite_final_cta_bg_hd.png"
              alt="NetSuite Next — AGSuite Implementation"
              fill
              className="object-cover"
              sizes="100vw"
              quality={98}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-transparent" />
            <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/15 blur-3xl -mr-36 -mt-36" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-500/15 blur-3xl -ml-36 -mb-36" />

            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-4 sm:mb-6 backdrop-blur-sm">
                <span className="w-1.5 h-1.5 bg-[#13FFAA] rounded-full animate-pulse" />
                NetSuite Next — Now Available via AGSuite
              </span>
              <h2 className="text-2xl sm:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Scale your vision with the world&apos;s #1 Cloud ERP.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Ready to get started?</span>
              </h2>
              <p className="text-slate-300 text-xs sm:text-base mb-6 sm:mb-8 leading-relaxed max-w-lg">
                AGSuite is your certified NetSuite Next implementation partner. From discovery to go-live — we deliver AI-powered ERP transformation across every industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/netsuite/contact"
                  className="px-6 py-3.5 sm:px-8 sm:py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl sm:rounded-2xl transition-all shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2 text-sm"
                >
                  Talk to an Expert <FiArrowRight />
                </Link>
                <Link
                  href="/netsuite/free-consultation"
                  className="px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl sm:rounded-2xl transition-all border border-white/20 backdrop-blur-sm flex items-center justify-center gap-2 text-sm"
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
