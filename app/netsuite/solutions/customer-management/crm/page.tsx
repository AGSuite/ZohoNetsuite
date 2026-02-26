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
  Users,
  TrendingUp,
  Target,
  Mail,
  BarChart3,
  ArrowRight,
  Heart,
  Check,
  ChevronRight,
  Zap,
  Phone,
  Star,
  Globe2,
  Handshake,
  Briefcase,
  Calendar,
  Megaphone,
  ShoppingBag,
  ClipboardList,
  DollarSign,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";
import { CRMCircularDesign } from "@/app/netsuite/components/CRMCircularDesign";

// ── Static CTA particles (SSR-safe) ──────────────────────────────────────────
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
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) => Math.round(current));

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
    </span>
  );
}

export default function NetSuiteCRMPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Sales Increase", value: 45, suffix: "%", icon: TrendingUp },
    { label: "Customer Retention", value: 85, suffix: "%", icon: Heart },
    { label: "Lead Conversion", value: 60, suffix: "%", icon: Target },
    { label: "Time Saved", value: 40, suffix: "%", icon: Calendar },
  ];

  const modules = [
    {
      title: "Sales Force Automation",
      description:
        "Manage every lead, opportunity, and forecast in real time — giving sales reps the pipeline visibility they need to close faster and managers the accuracy to plan confidently.",
      image: "/images/people/laptopmen.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Marketing Automation",
      description:
        "Design, execute, and measure multi-channel campaigns — from email nurture to webinar follow-ups — with ROI tracked directly to revenue in the same system.",
      image: "/images/lap/lap1.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Customer Service Management",
      description:
        "Empower support agents with a 360° customer history — open cases, past orders, contract terms — so every interaction is informed and resolution times plummet.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Partner Relationship Management",
      description:
        "Give channel partners their own portal to register deals, access resources, and track commissions — accelerating partner-led revenue without adding headcount.",
      image: "/images/people/fourteam.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "CRM Analytics & Dashboards",
      description:
        "Real-time sales dashboards, funnel analytics, and territory performance reports — built on live transaction data, not yesterday's exports.",
      image: "/images/lap/lap2.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Mobile CRM",
      description:
        "Access full customer records, log calls, update opportunities, and submit quotes from any iOS or Android device — keeping field sales teams productive wherever they are.",
      image: "/images/people/laptopmen2.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Quote & Order Management",
      description:
        "Generate accurate, branded quotes in seconds with product catalogs, pricing rules, and discount approvals — converting to orders without re-keying a single line.",
      image: "/images/lap/lap3.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Territory & Quota Management",
      description:
        "Assign territories, set quotas, and balance workloads across your sales org — then track attainment in real time with automatic alerts when reps fall behind pace.",
      image: "/images/lap/lap4.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Case & Escalation Management",
      description:
        "Route support cases, set SLA rules, trigger auto escalations, and measure first-reply and resolution times — building a support operation that retains clients.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Email & Campaign Tracking",
      description:
        "Track opens, clicks, and conversions per campaign — then segment responders for follow-up sequences automatically, keeping marketing and sales perfectly aligned.",
      image: "/images/lap/lap5.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Customer Segmentation",
      description:
        "Build dynamic customer segments based on purchase history, industry, or deal size — then target each segment with relevant offers and messaging at scale.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Forecasting & Reporting",
      description:
        "Bottom-up and top-down sales forecasting with commit, best case, and pipeline views — giving leadership the revenue predictability needed for confident planning.",
      image: "/images/lap/lap7_11zon.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "360° Customer Intelligence",
      description:
        "Every customer record in NetSuite CRM connects to their quote history, orders, invoices, support cases, and campaign activity — giving sales, marketing, and service one complete, live view without toggling between systems.",
      image: "/images/people/fourteam.webp",
      points: [
        "Unified customer timeline across all touchpoints",
        "Live order and invoice status visible in CRM",
        "Support case history visible to sales reps",
        "No duplicate data entry between CRM and ERP",
      ],
    },
    {
      title: "Accelerated Quote-to-Cash",
      description:
        "NetSuite CRM eliminates the friction between a won deal and a paid invoice — reps build quotes from live product catalogs, approvals happen in-system, and orders are created automatically without exporting to a separate billing tool.",
      image: "/images/lap/lap2.webp",
      points: [
        "Quotes generated from live product and pricing data",
        "Multi-tier discount approval workflows built-in",
        "Automatic order creation on deal close",
        "Revenue recognition triggered from the same platform",
      ],
    },
    {
      title: "Intelligent Sales Automation",
      description:
        "Eliminate the administrative burden that kills selling time — NetSuite CRM automates lead assignment, follow-up reminders, pipeline stage updates, and activity logging so reps spend more hours with prospects.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Automated lead routing by territory and score",
        "Follow-up task creation on deal inactivity",
        "Pipeline stage auto-progression on key events",
        "AI-suggested next best actions per opportunity",
      ],
    },
    {
      title: "Marketing ROI Transparency",
      description:
        "Stop guessing which campaigns drive revenue — NetSuite CRM links every lead and opportunity back to the campaign that sourced it, giving marketing teams closed-loop attribution with no spreadsheet gymnastics.",
      image: "/images/lap/lap1.webp",
      points: [
        "Campaign-to-opportunity attribution built-in",
        "Multi-touch influence tracking across channels",
        "Budget vs. actual spend tracking per campaign",
        "Revenue contribution per channel and segment",
      ],
    },
    {
      title: "Service That Retains Customers",
      description:
        "Equip your support team with the full customer context they need to resolve cases faster — open orders, billing status, prior issues, and contract terms — so every interaction feels premium and builds loyalty.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Case auto-routing by product, region, or priority",
        "SLA tracking with auto-escalation rules",
        "Knowledge base integrated with case workflow",
        "Customer satisfaction scores tracked per case",
      ],
    },
    {
      title: "Accurate Sales Forecasting",
      description:
        "Replace gut-feel pipeline reviews with data-driven forecasts — NetSuite CRM combines historical win rates, deal velocity, and stage-weighted probabilities to give leadership a reliable revenue outlook every week.",
      image: "/images/lap/lap3.webp",
      points: [
        "Commit, best case, and pipeline forecast views",
        "Team and territory roll-up in real time",
        "Historical win rate analysis by rep and segment",
        "Quota attainment tracking with visual alerts",
      ],
    },
  ];

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

        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 md:pt-28 pb-8 sm:pb-10">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20"
            aria-label="Breadcrumb"
          >
            <Link
              href="/netsuite"
              className="text-blue-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/50">Solutions</span>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">CRM</span>
          </motion.nav>

          {/* Two-column hero */}
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-6 lg:mb-8">
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
                  NetSuite CRM — Customer Relationship Management
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
                The only CRM natively unified with your ERP — giving sales,
                marketing, and service a single 360° view of every customer,
                from first touchpoint to paid invoice.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white/10 backdrop-blur-md border border-white/25 text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-300 shadow-xl shadow-blue-900/20 hover:shadow-blue-600/30 hover:scale-105"
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

            {/* RIGHT — CRM Orbital Diagram */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, delay: 0.3 }}
              className="relative hidden lg:flex items-center justify-center"
              style={{ height: 580 }}
            >
              <CRMCircularDesign />
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

      {/* ── Sticky Nav ───────────────────────────────────────────────────────── */}
      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-1 overflow-x-auto scrollbar-hide py-4">
            {[
              { label: "What is NetSuite CRM?", href: "#what-is-crm" },
              { label: "Modules", href: "#modules" },
              { label: "Benefits", href: "#benefits" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── What is NetSuite CRM ─────────────────────────────────────────────── */}
      <section id="what-is-crm" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            {/* LEFT — Dashboard Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center rounded-2xl overflow-hidden p-4 mt-15"
              style={{ minHeight: 340 }}
            >
              <Image
                src="/images/netsuiteimages/solutions/netsuitecrm.webp"
                alt="NetSuite CRM Dashboard"
                width={560}
                height={380}
                className="w-full h-auto rounded-xl object-contain"
              />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6 mt-15"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-indigo-500 leading-tight">
                  Turn Customer Relationships into Revenue — at Scale.
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                NetSuite CRM is the only customer relationship management platform built natively on a unified ERP architecture — providing sales, marketing, and service teams with a single source of truth that spans from initial lead to final invoice without any integration gaps.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By consolidating customer history, order details, and support cases into one real-time dashboard, organizations can make faster decisions, forecast more accurately, and deliver a seamless experience that drives long-term retention and growth.
              </p>
              <div className="pt-4">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{
                    background: "linear-gradient(135deg, #0a1f5c 0%, #1d4ed8 100%)",
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
                  <span>Unlock CRM Power</span>
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

      {/* ── CRM Modules Grid ─────────────────────────────────────────────────── */}
      <section
        id="modules"
        className="py-16 bg-white relative overflow-hidden scroll-mt-36"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center gap-5">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-medium text-gray-900 text-center"
          >
            NetSuite CRM Modules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 text-lg max-w-2xl text-center"
          >
            12 fully integrated modules to manage every stage of the customer
            lifecycle in one unified platform
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
                  style={{ minHeight: 380 }}
                >
                  {/* Image top */}
                  <div className="relative h-48 shrink-0 overflow-hidden">
                    <Image
                      src={mod.image}
                      alt={mod.title}
                      fill
                      className="object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)`,
                      }}
                    />
                  </div>
                  {/* Info bottom */}
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
                    {/* Hover pill — white bg + black text */}
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">
                        Get Started <ArrowRight size={10} />
                      </span>
                    </div>
                    {/* Rainbow bottom strip */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits — dark starfield, blue theme ────────────────────────────── */}
      <section
        id="benefits"
        className="py-24 relative overflow-hidden scroll-mt-36"
        style={{
          background:
            "linear-gradient(135deg, #000814 0%, #000d2e 25%, #001a4d 55%, #000d2e 80%, #000814 100%)",
        }}
      >
        {/* Stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <style>{`
            @keyframes twinkle-crm { 0%,100%{opacity:0.1;transform:scale(1)} 50%{opacity:1;transform:scale(1.4)} }
            @keyframes drift-crm { 0%{transform:translateY(0) translateX(0)} 50%{transform:translateY(-12px) translateX(6px)} 100%{transform:translateY(0) translateX(0)} }
            .star-crm { position:absolute; border-radius:9999px; background:white; animation: twinkle-crm var(--tw-dur, 3s) ease-in-out infinite var(--tw-delay, 0s), drift-crm calc(var(--tw-dur, 3s) * 2) ease-in-out infinite var(--tw-delay, 0s); }
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
              className="star-crm"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/[0.03]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/[0.04]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-cyan-300">
              Why Revenue Teams Choose NetSuite CRM
            </h3>
          </motion.div>

          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            {/* Image panel */}
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

            {/* Accordion */}
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
                      className={`shrink-0 transition-colors duration-300 ${activeBenefit === index
                        ? "text-blue-600"
                        : "text-gray-400 group-hover:text-gray-200"
                        }`}
                    >
                      {index === 0 && <Globe2 size={20} />}
                      {index === 1 && <Briefcase size={20} />}
                      {index === 2 && <Zap size={20} />}
                      {index === 3 && <BarChart3 size={20} />}
                      {index === 4 && <Heart size={20} />}
                      {index >= 5 && <TrendingUp size={20} />}
                    </div>
                    <span
                      className={`text-base md:text-lg flex-1 font-semibold transition-all duration-300 ${activeBenefit === index
                        ? "text-gray-900"
                        : "text-gray-300 group-hover:text-white"
                        }`}
                    >
                      {item.title}
                    </span>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-all duration-300 ${activeBenefit === index
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

      {/* ── Pricing ───────────────────────────────────────────────────────────── */}
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
              {/* Left */}
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-yellow-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                  How Much Does NetSuite CRM Cost?
                </h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">
                  NetSuite CRM pricing is tailored to your business size and
                  requirements. The annual subscription combines the core
                  financial management platform, any additional modules you need,
                  and your user count — plus a one-time implementation fee. As
                  your business grows, activate new modules or add users
                  instantly — no upgrades, no downtime, no infrastructure
                  headaches.
                </p>
                <div>
                  <Link
                    href="#contact-form"
                    className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-yellow-400 hover:text-gray-900 transition-all duration-200 shadow-md hover:shadow-lg"
                  >
                    Contact Us Now <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right — organic image */}
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#052838]" />
                <div
                  className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#07404f]"
                  style={{
                    borderRadius: "40% 60% 55% 45% / 45% 55% 45% 55%",
                  }}
                />
                <div
                  className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#0a5060]"
                  style={{
                    borderRadius: "45% 55% 50% 50% / 50% 50% 50% 50%",
                  }}
                />
                <div
                  className="absolute bottom-8 left-6 w-14 h-14 bg-blue-400/30 z-10"
                  style={{
                    borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%",
                    transform: "rotate(20deg)",
                  }}
                />
                <div className="absolute bottom-16 left-14 w-3 h-3 bg-cyan-400/60 rounded-full z-10" />
                <div
                  className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl"
                  style={{ borderRadius: "50% 50% 46% 54% / 52% 48% 52% 48%" }}
                >
                  <Image
                    src="/images/people/laptopmen.webp"
                    alt="NetSuite CRM Pricing"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <FAQ variant="netsuite-crm" id="faq" />

      {/* ── CTA Banner ────────────────────────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl"
            style={{
              background:
                "linear-gradient(135deg, #002a8c 0%, #0044cc 45%, #0099a3 100%)",
            }}
          >
            {/* Particles */}
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
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

            <div className="relative z-10 px-10 py-16 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
                  Close More Deals —{" "}
                  <span className="text-cyan-200">
                    With CRM Built for Growth.
                  </span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl font-medium">
                  Join 43,000+ businesses that manage sales, marketing, and
                  service in one unified platform. Your NetSuite CRM
                  transformation begins with a single conversation.
                </p>
              </div>
              <Link
                href="#contact-form"
                className="shrink-0 inline-flex items-center gap-3 bg-white text-[#002a8c] hover:bg-blue-50 font-bold text-lg px-10 py-5 rounded-xl shadow-xl transition-all duration-200 group active:scale-95"
              >
                Start Your CRM Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact Form ──────────────────────────────────────────────────────── */}
      <ContactFormDesign4 />
    </div>
  );
}
