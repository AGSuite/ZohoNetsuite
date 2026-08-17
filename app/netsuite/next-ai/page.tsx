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
    title: "Ask Anything. Get Clarity",
    subtitle: "Ask the Way You Think",
    desc: "Search your data, uncover hidden insights, and take immediate action using plain natural language — no SQL or complex saved searches required. Ask questions freely and get instant clarity across your entire business.",
    color: "from-cyan-400 to-blue-500",
    glow: "shadow-cyan-500/30",
    accent: "#13FFAA",
    image: "/images/ai/ask_natural_language_v2.png",
    imageAlt: "Natural language AI search interface for NetSuite ERP",
    tags: ["No-Code Queries", "Intent Recognition", "Instant Results"],
  },
  {
    id: 1,
    icon: FiShield,
    title: "Trust Every Insight",
    subtitle: "Source-Cited AI Responses",
    desc: "Source citations on every response allow finance and management teams to validate every insight back to verified General Ledger transactions. Audit every result with complete confidence and total operational transparency.",
    color: "from-purple-400 to-indigo-500",
    glow: "shadow-purple-500/30",
    accent: "#CE84CF",
    image: "/images/ai/trust_every_answer_v2.png",
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
    image: "/images/ai/easier_way_to_work_v2.png",
    imageAlt: "AI-powered streamlined ERP workflow dashboard",
    tags: ["Auto-Summaries", "Smart Search", "Workflow AI"],
  },
];

function AskOracleFeatures() {
  const [active, setActive] = useState(0);
  const activeItem = askOracleFeatureItems[active];

  return (
    <div className="mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

        {/* ── LEFT: Headline Tabs (Compact inactive cards + expanded active card) ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3 sm:gap-4 h-full"
        >
          {askOracleFeatureItems.map((item) => {
            const isActive = active === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActive(item.id)}
                type="button"
                className={`group relative w-full text-left rounded-2xl border transition-all duration-300 overflow-hidden ${isActive
                  ? "border-blue-500/80 bg-white shadow-xl ring-2 ring-blue-500/15 flex-1"
                  : "border-slate-200/90 bg-white/90 hover:border-blue-300 hover:bg-white shadow-sm flex-none"
                  }`}
              >
                {/* Active left accent bar */}
                <div
                  className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-gradient-to-b ${item.color} transition-all duration-300 ${isActive ? "opacity-100" : "opacity-0"
                    }`}
                />

                <div className={`flex items-start gap-3 sm:gap-4 ${isActive ? "p-4 sm:p-6" : "p-3.5 sm:p-4"} h-full`}>
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.color} shadow-md transition-transform duration-300 ${isActive ? "scale-105" : "scale-100"}`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Line 1: Subtitle */}
                    <p
                      className="text-xs sm:text-sm font-extrabold tracking-wide mb-0.5 transition-colors duration-300"
                      style={{ color: isActive ? "#0284c7" : "#475569" }}
                    >
                      {item.subtitle}
                    </p>

                    {/* Line 2: Title */}
                    <h3
                      className={`text-base sm:text-lg font-extrabold transition-colors duration-300 ${isActive ? "text-slate-900" : "text-slate-700 group-hover:text-blue-600"
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
                          animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                        >
                          <p className="text-slate-700 text-xs sm:text-sm leading-relaxed mb-4 font-semibold whitespace-pre-line">
                            {item.desc}
                          </p>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border border-blue-200/80 bg-blue-50/80 text-blue-700"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Mobile Inline Image Preview */}
                          <div className="block lg:hidden mt-4 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-xl">
                            <div className={`h-1 bg-gradient-to-r ${item.color} w-full`} />
                            <Image
                              src={item.image}
                              alt={item.imageAlt}
                              width={700}
                              height={450}
                              className="w-full h-auto object-contain bg-white"
                              quality={100}
                              unoptimized
                            />
                            <div className="bg-slate-50 border-t border-slate-200 p-3 flex items-center justify-between">
                              <span className="text-slate-900 font-extrabold text-xs">{item.title}</span>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full text-slate-700 bg-slate-200/80">Live AI Engine</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className={`flex-shrink-0 mt-1 transition-all duration-300 ${isActive ? "text-blue-600 rotate-90" : "text-slate-400 group-hover:text-slate-600"
                      }`}
                  >
                    <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </div>
              </button>
            );
          })}
        </motion.div>

        {/* ── RIGHT: Image Panel (Desktop view, pure clean white background) ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="hidden lg:flex flex-col justify-between h-full relative"
        >
          {/* Soft light glow aura */}
          <div
            className={`absolute -inset-4 rounded-[2rem] blur-[50px] opacity-15 bg-gradient-to-br ${activeItem.color} transition-all duration-700 pointer-events-none`}
          />

          {/* Image card shell */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-white flex flex-col justify-between h-full">
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

            {/* Image viewport - pure clean white background */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="w-full h-full flex-1 bg-white overflow-hidden flex items-center justify-center p-1"
              >
                <Image
                  src={activeItem.image}
                  alt={activeItem.imageAlt}
                  width={900}
                  height={600}
                  className="w-full h-auto object-contain rounded-t-xl"
                  quality={100}
                  unoptimized
                />
              </motion.div>
            </AnimatePresence>

            {/* Dedicated Footer Caption Bar */}
            <div className="bg-slate-50 border-t border-slate-200 p-4 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${activeItem.color} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <activeItem.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-slate-900 font-extrabold text-sm leading-tight">{activeItem.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{activeItem.subtitle}</p>
                </div>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full text-blue-700 bg-blue-50 border border-blue-200">
                Live AI Engine
              </span>
            </div>
          </div>
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
      link: "/netsuite/software-and-technology",
      icon: FiCpu,
      tag: "Technology",
    },
    {
      id: "it-services",
      name: "IT & Professional Services",
      description: "Maximize resource utilization, project accounting, time & expense tracking, and automated client billing.",
      gradient: "from-blue-500 to-cyan-500",
      image: "/images/industries/it-services-main.png",
      link: "/netsuite/it-and-professional-services",
      icon: FiUsers,
      tag: "Services",
    },
    {
      id: "wholesale",
      name: "Wholesale Distribution",
      description: "Automate procurement, WMS warehouse operations, demand planning, and multi-channel order fulfillment.",
      gradient: "from-amber-500 to-orange-500",
      image: "/images/industries/Wholesale-Distribution-compressed.webp",
      link: "/netsuite/wholesale-distribution",
      icon: FiGrid,
      tag: "Distribution",
    },
    {
      id: "advertising",
      name: "Advertising & Marketing",
      description: "Integrate campaign project management and agency financials for real-time campaign margin profitability.",
      gradient: "from-rose-500 to-pink-500",
      image: "/images/industries/marketing.jpg",
      link: "/netsuite/advertising-and-digital-marketing-agencies",
      icon: FiGlobe,
      tag: "Agencies",
    },
    {
      id: "media",
      name: "Media & Publishing",
      description: "Manage advertising sales, subscriber circulation, ASC 606 revenue recognition, and digital media operations.",
      gradient: "from-violet-500 to-purple-500",
      image: "/images/industries/media.webp",
      link: "/netsuite/media-and-publishing",
      icon: FiLayers,
      tag: "Media",
    },
    {
      id: "retail",
      name: "Retail & E-Commerce",
      description: "Connect e-commerce, POS, real-time inventory, and intelligent order routing into a unified omnichannel experience.",
      gradient: "from-emerald-500 to-teal-500",
      image: "/images/industries/ecommerce.webp",
      link: "/netsuite/retail-and-e-commerce",
      icon: FiTrendingUp,
      tag: "Omnichannel",
    },
    {
      id: "transport",
      name: "Transportation & Logistics",
      description: "Manage fleet operations, route optimization, automated dispatch, and real-time freight financial management.",
      gradient: "from-cyan-500 to-blue-500",
      image: "/images/industries/logistics-means-transport-together-with-technological-futuristic-holograms (2)_11zon.jpg",
      link: "/netsuite/transportation-and-logistics",
      icon: FiGlobe,
      tag: "Logistics",
    },
    {
      id: "manufacturing",
      name: "Manufacturing",
      description: "Connect shop floor operations, WIP routing, quality assurance control, and supply chain on a single platform.",
      gradient: "from-slate-600 to-zinc-500",
      image: "/images/industries/manufacture-compressed-1.webp",
      link: "/netsuite/manufacturing",
      icon: FiGrid,
      tag: "Manufacturing",
    },
    {
      id: "telecom",
      name: "Telecom Industry",
      description: "Manage high-volume usage billing, OSS/BSS integrations, ASC 606 revenue recognition, and global expansion.",
      gradient: "from-blue-600 to-indigo-600",
      image: "/images/industries/telecom-industry.webp",
      link: "/netsuite/telecom-industry",
      icon: FiZap,
      tag: "Telecom",
    },
    {
      id: "financial",
      name: "Financial Services",
      description: "Streamline multi-entity consolidation, GAAP/IFRS compliance, risk management controls, and automated reporting.",
      gradient: "from-teal-500 to-emerald-500",
      image: "/images/industries/financial-services-industry.webp",
      link: "/netsuite/financial-services",
      icon: FiBarChart2,
      tag: "Finance",
    },
  ];

  const erpModules = [
    { id: "accounting", label: "Accounting", icon: FiBarChart2, desc: "Go beyond numbers — ask questions in natural language and instantly understand financial drivers. AI automates GL, AR, and AP.", image: "/images/next-ai/mod_accounting_v2.jpg" },
    { id: "close", label: "Close Management", icon: FiCheckCircle, desc: "Speed up financial month-end close with intelligent close manager, automated journal entries, continuous reconciliation, and exception tracking.", image: "/images/next-ai/mod_close_mgmt_v2.jpg" },
    { id: "multientity", label: "Multientity Management", icon: FiGlobe, desc: "Consolidate global subsidiaries, summarize financials across entities, and handle multi-currency balance sheets effortlessly.", image: "/images/next-ai/mod_multientity_v2.jpg" },
    { id: "analytics", label: "Analytics", icon: FiTrendingUp, desc: "Turn raw transactional data into multi-series bar charts, top item sales analysis, and real-time executive dashboards.", image: "/images/next-ai/mod_analytics_v2.jpg" },
    { id: "customer", label: "Customer Management", icon: FiUsers, desc: "360-degree customer meeting briefs, credit risk exposure tracking, overdue invoice management, and automated collections.", image: "/images/next-ai/mod_customer_v2.jpg" },
    { id: "inventory", label: "Inventory Management", icon: FiLayers, desc: "Automate inventory management across stock, consignment, and service items. Generate AI-powered summaries of inventory reports that highlight key trends, insights, and drivers.", image: "/images/next-ai/mod_inventory_v2.jpg" },
  ];

  const moduleBullets: Record<string, string[]> = {
    accounting: ["Ask questions in natural language to pull income statements by accounting period", "Automated income comparison across rolling calendar years", "Flexible GL controls built for global multi-currency operations"],
    close: ["Intelligent Close Manager with lock accounts and task completion tracking", "Real-time task completion percentage for A/R, A/P, and Accounting", "Variance and exception alerts for open invoice approvals"],
    multientity: ["Summarize balance sheet financials across all subsidiaries", "Top findings insights on high cash position and accounts receivable", "Unified chart of accounts and multi-entity consolidation"],
    analytics: ["Two-series bar charts of top best-selling items by quantity and revenue", "Drill-down from executive summary to subsidiary transaction level", "AI-generated narrative insights and custom period comparisons"],
    customer: ["Instant meeting briefs prepared with account terms and credit limits", "Real-time accounts receivable exposure and overdue invoice tracking", "Automated collections workflows and customer relationship check-ins"],
    inventory: ["Automate inventory management across stock, consignment, and service items", "Generate AI-powered summaries of inventory reports that highlight key trends, insights, and drivers", "Real-time stock level forecasting, reorder alerts, and inventory valuation insights"],
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
            NetSuite Next: The Future of AI-Powered Business
          </motion.h1>

          {/* Single-line description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-4 max-w-3xl text-center text-sm sm:text-lg text-slate-300 font-normal px-2 whitespace-pre-line"
          >
            {"Make every decision smarter with AI that understands your business,\nanticipates what’s next, and helps you act with confidence."}
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-center text-2xl sm:text-4xl font-extrabold text-white mb-8 sm:mb-12">
            The #1 AI-Powered ERP
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { icon: FiLayers, color: "from-blue-500 to-cyan-400", title: "One Platform. Every Function", desc: "One platform. Every business function. Complete visibility." },
              { icon: FiCpu, color: "from-purple-500 to-indigo-400", title: "AI in Every Decision", desc: "AI woven into the architecture, not bolted on as a separate solution." },
              { icon: FiGlobe, color: "from-emerald-500 to-teal-400", title: "Scale with Confidence", desc: "44,000+ customers across every industry in 220 countries" },
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
                  <h3 className="text-base sm:text-lg font-extrabold text-white mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ASK ORACLE — AI IS THE NEW UI ──────────────────────────── */}
      <section id="ask-oracle" className="relative py-16 sm:py-24 px-4 sm:px-6 overflow-hidden bg-white text-slate-900 border-b border-slate-200/80">
        {/* Square Dotted Grid Pattern Background on Pure White */}
        <svg className="absolute inset-0 w-full h-full opacity-45 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="square-dotted-grid" width="48" height="48" patternUnits="userSpaceOnUse">
              <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(59, 130, 246, 0.25)" strokeWidth="1.5" strokeDasharray="4,4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#square-dotted-grid)" />
        </svg>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-200/80 shadow-sm">
              AI IS THE NEW UI
            </span>
            <h2 className="text-2xl sm:text-5xl font-medium bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 bg-clip-text text-transparent mt-4 sm:mt-5 tracking-tight leading-tight">
              Ask Oracle: The Intelligence at the Core of NetSuite Next
            </h2>
            <p className="text-slate-700 mt-3 sm:mt-4 text-sm sm:text-lg leading-relaxed whitespace-pre-line font-semibold">
              {"Single conversational interface for your entire ERP.\nSearch, analyze, and act—all in one place."}
            </p>
          </div>

          {/* Interactive Benefits — Left tabs + Right image */}
          <AskOracleFeatures />
        </div>
      </section>

      {/* ── 3B. ASK ORACLE LAPTOP SHOWCASE (PURE UNTOUCHED IMAGE SHOWCASE) ─────────── */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden bg-slate-950 border-y border-slate-800">
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900"
          >
            {/* Pure, crisp, untouched high-res image without any overlays */}
            <div className="relative w-full overflow-hidden">
              <Image
                src="/images/lap/ask_oracle_laptop_v3.jpg"
                alt="Ask Oracle AI in Action — NetSuite Next AI Dashboard on MacBook Pro on desk"
                width={1400}
                height={1400}
                className="w-full h-auto object-cover rounded-t-2xl sm:rounded-t-3xl"
                quality={100}
                priority
                unoptimized
              />
            </div>

            {/* Dedicated clean caption bar below the image */}
            <div className="bg-slate-900 border-t border-slate-800 p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-white font-extrabold text-lg sm:text-2xl tracking-tight">Ask Oracle in Action</p>
                <p className="text-slate-400 text-xs sm:text-sm font-medium mt-1">Powered by Oracle AI, delivered by AGSuite</p>
              </div>
              <Link
                href="/netsuite/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm transition-all shrink-0 shadow-lg shadow-blue-600/25"
              >
                Learn More <FiArrowRight />
              </Link>
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
              AI-Powered ERP Built for the Way Your Industry Works.
            </h2>
            <p className="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-lg">
              From industry requirements to complex business processes, AGSuite brings the experience to deliver a solution tailored to your organization.
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
              AI Built Into Your ERP. Not Added On
            </h2>
            <p className="text-slate-400 mt-3 sm:mt-4 text-sm sm:text-lg">
              Connect your data and let AI automate work, uncover insights, and improve visibility across your business.
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

                {/* High-res Module Preview Image */}
                <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-[460px] overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10 bg-slate-950 flex items-center justify-center p-3 sm:p-5">
                  <div className="relative w-full h-full min-h-[300px] sm:min-h-[380px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900">
                    <Image
                      src={activeModuleData?.image || "/images/next-ai/mod_accounting_v2.jpg"}
                      alt={`NetSuite ${activeModuleData?.label} Module Preview`}
                      fill
                      className="object-contain object-center p-2"
                      quality={100}
                      unoptimized
                    />
                  </div>
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
