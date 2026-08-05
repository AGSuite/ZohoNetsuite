"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  DollarSign, TrendingUp, Users, Zap, ArrowRight, Check, ChevronRight,
  BarChart3, Target, LineChart, ShieldCheck, Calculator, CheckCircle2,
} from "lucide-react";
import { FAQ } from "@/app/components/home/FAQ";
import ContactFormDesign4 from "@/app/netsuite/components/ContactFormDesign4";
import NSServicesSection from "@/app/netsuite/components/NSServicesSection";

function Counter({ value }: { value: number }) {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.1 });
  const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
  const display = useTransform(spring, (v) => Math.round(v));
  useEffect(() => { if (inView) { spring.set(value); } else { spring.set(0); } }, [inView, spring, value]);
  return <span ref={ref}><motion.span>{display}</motion.span></span>;
}

export default function SmartCommissionPage() {
  const { ref: statsRef } = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBenefit, setActiveBenefit] = useState(0);

  const stats = [
    { label: "Commission Accuracy", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Time Saved Monthly", value: 40, suffix: "hrs", icon: Zap },
    { label: "Plans Supported", value: 50, suffix: "+", icon: BarChart3 },
    { label: "Dispute Reduction", value: 90, suffix: "%", icon: ShieldCheck },
  ];

  const modules = [
    { title: "Multi-Tier Plans", description: "Build unlimited commission plan types — flat, tiered, split, residual — for every sales role.", image: "/images/modules/sc_multi_tier_plans.png", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "Real-Time Calculations", description: "Commissions calculated instantly as sales close — no waiting for month-end batch runs.", image: "/images/modules/intelligent_automation.png", color: "#065f46", rgb: "6,95,70" },
    { title: "Quota Management", description: "Set, track, and report on individual and team quotas with live attainment dashboards.", image: "/images/modules/budgeting_planning_custom.png", color: "#7c2d12", rgb: "124,45,18" },
    { title: "Manager Approvals", description: "Route commission statements for manager review and approval before payout processing.", image: "/images/modules/sc_manager_approvals.png", color: "#4c1d95", rgb: "76,29,149" },
    { title: "Rep Self-Service", description: "Give every sales rep a personal portal to track their earnings, quota, and pipeline impact.", image: "/images/modules/sc_rep_self_service.png", color: "#0c4a6e", rgb: "12,74,110" },
    { title: "ERP Integration", description: "Commission data flows directly from NetSuite sales orders — no manual imports or exports.", image: "/images/modules/general_ledger_custom.png", color: "#713f12", rgb: "113,63,18" },
    { title: "Retroactive Adjustments", description: "Easily handle returns, contract amendments, and adjustments with full audit trail.", image: "/images/modules/revenue_recognition_custom.png", color: "#134e4a", rgb: "19,78,74" },
    { title: "Analytics & Reporting", description: "Built-in dashboards show plan performance, payout trends, and top-earner rankings.", image: "/images/modules/financial_reporting_custom.png", color: "#831843", rgb: "131,24,67" },
    { title: "Split Commissions", description: "Handle overlapping territories, team splits, and channel partner commissions automatically.", image: "/images/modules/sc_split_commissions.png", color: "#1e3a8a", rgb: "30,58,138" },
    { title: "Clawbacks & Holds", description: "Automatically claw back commissions on cancelled deals or non-payments based on your rules.", image: "/images/modules/audit_reports.png", color: "#064e3b", rgb: "6,78,59" },
    { title: "Multi-Currency", description: "Pay reps in their local currency with automatic exchange rate application at the payout date.", image: "/images/modules/gbm_multi_currency.png", color: "#78350f", rgb: "120,53,15" },
    { title: "Payroll Export", description: "One-click export of finalized commission amounts to your payroll or HR system of choice.", image: "/images/modules/gbm_payroll_integration.png", color: "#3b0764", rgb: "59,7,100" },
  ];

  const benefits = [
    { title: "Eliminate Spreadsheet Chaos", description: "Replace error-prone commission spreadsheets with an automated engine that calculates every rep's pay exactly right every time — no manual formulas, no version confusion.", image: "/images/benefits/sc_benefit_spreadsheet_chaos.png", points: ["Auto-calculation on deal close", "No manual spreadsheet updates", "Version-controlled plan changes", "Full audit history on every payout"] },
    { title: "Motivate with Transparency", description: "When reps can see their earnings in real time, they stay focused on the right activities. Smart Commission gives every rep a live dashboard showing quota attainment and projected pay.", image: "/images/benefits/sc_benefit_rep_transparency.png", points: ["Live earnings dashboard for reps", "Quota attainment progress bar", "Projected earnings from pipeline", "Mobile-accessible self-service portal"] },
    { title: "Handle Complex Plans", description: "From tiered accelerators and SPIFFs to channel splits and residual payments — SmartCommission handles plan structures that would take days to calculate manually.", image: "/images/benefits/sc_benefit_complex_plans.png", points: ["Unlimited plan types and tiers", "Accelerators at quota thresholds", "SPIFF and overlay programs", "Channel and partner commissions"] },
    { title: "Automated Approvals", description: "Route commission statements through a structured approval workflow — manager review, finance sign-off, and rep acknowledgement — all tracked with full audit trail.", image: "/images/benefits/sc_benefit_automated_approvals.png", points: ["Multi-level approval routing", "Exception flagging and alerts", "Rep electronic acknowledgement", "Complete audit log for compliance"] },
    { title: "Native NetSuite Integration", description: "Because SmartCommission runs inside NetSuite, it reads directly from your closed deals, invoices, and payment data — no integration middleware, no data lag.", image: "/images/benefits/sc_benefit_netsuite_integration.png", points: ["Reads from NetSuite transactions live", "No sync delays or export needed", "Works with all NetSuite item types", "Supports custom NetSuite fields"] },
    { title: "Finance Control & Accruals", description: "Finance teams gain full control over commission accruals, expense recognition, and payout scheduling — integrated directly with NetSuite's general ledger.", image: "/images/benefits/sc_benefit_finance_accruals.png", points: ["Auto commission expense accruals", "Payout scheduling and batching", "GL journal entry automation", "Period-close acceleration"] },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-900 selection:text-white bg-white">
      <section className="relative min-h-screen overflow-hidden flex flex-col bg-gradient-to-br from-[#000814] via-[#000f22] to-[#001535]">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-800/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '70px 70px' }} />
        <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-4 sm:px-6 w-full pt-40 pb-20">
          <motion.nav initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="absolute top-24 sm:top-28 left-4 sm:left-6 flex items-center gap-2 text-sm font-medium z-20">
            <Link href="/netsuite" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link href="/netsuite/solutions" className="text-blue-300 hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">NetSuite Smart Commission</span>
          </motion.nav>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center mb-16 sm:mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="text-3xl sm:text-4xl md:text-5xl font-medium mb-4 leading-[1.15] tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-400">NetSuite Smart Commission</span>
              </motion.h1>
              <motion.div initial={{ width: 0 }} animate={{ width: "80px" }} transition={{ delay: 0.45, duration: 0.6 }} className="h-[3px] bg-gradient-to-r from-blue-500 to-cyan-300 mb-5 rounded-full" />
              <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed max-w-xl mb-8">
                Automate every sales commission calculation inside NetSuite — eliminate spreadsheets, eliminate disputes, and pay your team accurately every time.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                <Link href="#contact-form" className="group inline-flex items-center gap-3 px-7 py-3.5 sm:px-9 sm:py-4 text-sm sm:text-base font-medium rounded-full bg-white text-gray-900 hover:bg-gray-100 transition-all duration-300 shadow-xl hover:scale-105">
                  Automate Commissions
                  <motion.span animate={{ x: [0, 6, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="flex items-center"><ArrowRight className="w-4 h-4" /></motion.span>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.0, delay: 0.4 }} className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 460 }}>
              <div className="relative w-[88%] ml-auto">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/50" style={{ height: 390 }}>
                  <Image src="/images/people/netsuite_white_dashboard_people.png" alt="Smart Commission Dashboard" fill className="object-cover object-center" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }}
                    className="absolute bottom-4 left-4 right-4 bg-white rounded-xl px-4 py-3.5 shadow-xl flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-900 text-sm font-bold leading-tight">Commission Automation Engine</p>
                      <p className="text-gray-500 text-xs mt-0.5">Multi-Tier · Quota · Approvals · Payroll Export · Analytics</p>
                    </div>
                  </motion.div>
                </div>
                <motion.div initial={{ opacity: 0, x: -20, y: -10 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute -top-5 -left-10 flex items-center gap-3.5 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-gray-100">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1e3a8a, #2563eb)' }}>
                    <Calculator className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-900 text-[13px] font-bold leading-tight whitespace-nowrap">NetSuite Smart Commission</p>
                    <p className="text-gray-400 text-[11px] mt-0.5 whitespace-nowrap">Native Add-On · Accurate · Automated</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
          <motion.div ref={statsRef} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }} className="border-t border-white/15 pt-8 sm:pt-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 + i * 0.12 }} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="p-2 sm:p-3 bg-blue-700/20 rounded-xl group-hover:bg-blue-700/30 transition-colors">
                      <s.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-medium text-white mb-1 flex items-center justify-center gap-1">
                    <Counter value={s.value} /><span className="text-blue-400 text-2xl sm:text-3xl md:text-4xl">{s.suffix}</span>
                  </div>
                  <div className="text-gray-400 font-medium text-xs sm:text-sm px-2">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <nav className="sticky top-[72px] z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-1 py-2 sm:py-4">
            {[{ label: "What is NetSuite Smart Commission?", href: "#what-is" }, { label: "Modules", href: "#modules" }, { label: "Benefits", href: "#benefits" }, { label: "Services", href: "#services" }, { label: "Pricing", href: "#pricing" }, { label: "FAQ", href: "#faq" }].map(l => (
              <a key={l.href} href={l.href} className="px-4 py-2 text-base font-semibold hover:bg-blue-50 rounded-lg transition-all whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500">{l.label}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section id="what-is" className="pt-5 pb-14 bg-white scroll-mt-36">
        <div className="max-w-8xl mx-auto px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex items-center justify-center rounded-3xl overflow-hidden"
            >
              <div className="relative w-full h-full p-4 lg:p-6">
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl shadow-indigo-900/10 border-4 border-indigo-100">
                  <Image
                    src="/images/Dashboard/smart commision dashboard.jpg"
                    alt="NetSuite Smart Commission Solution Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-between py-6 h-full"
            >
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl lg:text-[40px] font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-500 leading-tight">
                  Pay Your Sales Team Right — Every Time, Automatically.
                </h3>
              </div>
              <div className="space-y-2 my-auto pt-2 md:pt-4">
                <p className="text-base text-gray-600 leading-relaxed">
                  NetSuite Smart Commission is a native add-on that automates your entire sales commission process — from calculation to approval to payout — running directly within your NetSuite environment with no external tools required.
                </p>
                <p className="text-base text-gray-600 leading-relaxed">
                  Whether you have simple flat-rate plans or complex multi-tier accelerators with splits and clawbacks, Smart Commission handles it all accurately and transparently.
                </p>
              </div>
              <div className="pt-4 mt-auto">
                <Link
                  href="#contact-form"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm uppercase tracking-widest transition-all duration-300 shadow-lg hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)', color: '#ffffff' }}
                >
                  <span>Explore Smart Commission</span>
                  <motion.span className="flex items-center" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}>
                    <ArrowRight size={17} strokeWidth={2.5} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="modules" className="py-16 bg-white relative overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-10 flex flex-col items-center gap-5">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-5xl font-medium text-gray-900 text-center">Commission Capabilities</motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="text-gray-600 text-lg max-w-2xl text-center">12 automation capabilities that cover every dimension of your sales compensation program</motion.p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
            {modules.map((mod, index) => (
              <Link key={index} href="#contact-form" className="block">
                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.06, ease: "easeOut" }} whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="group flex flex-col rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white" style={{ minHeight: 340 }}>
                  <div className="relative h-44 shrink-0 overflow-hidden">
                    <Image src={mod.image} alt={mod.title} fill className="object-cover object-top group-hover:scale-110 transition-transform duration-700" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 0%, rgba(${mod.rgb},0.4) 70%, rgba(${mod.rgb},1) 100%)` }} />
                  </div>
                  <div className="flex-1 p-5 pb-6 flex flex-col relative" style={{ backgroundColor: `rgb(${mod.rgb})` }}>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg mb-2 tracking-wide">{mod.title}</h4>
                      <p className="text-white/90 text-sm leading-snug font-medium line-clamp-3">{mod.description}</p>
                    </div>
                    <div className="absolute bottom-6 left-5 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center gap-2 bg-white text-gray-900 font-bold uppercase tracking-widest text-[10px] px-3 py-1.5 rounded-full shadow-md">Explore <ArrowRight size={10} /></span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 relative overflow-hidden scroll-mt-36"
        style={{ background: "linear-gradient(135deg, #000814 0%, #000f22 25%, #001535 55%, #000c1a 80%, #000810 100%)" }}>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)" }} />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-8">
            <h3 className="text-3xl md:text-5xl font-medium mt-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Why Teams Choose Smart Commission</h3>
          </motion.div>
          <div className="grid lg:grid-cols-[2fr_3fr] gap-10 items-stretch">
            <div className="order-2 lg:order-1 relative min-h-[380px] lg:min-h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <AnimatePresence mode="wait">
                <motion.div key={activeBenefit} initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute inset-0">
                  <Image src={benefits[activeBenefit].image} alt={benefits[activeBenefit].title} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="order-1 lg:order-2 rounded-3xl border border-white/10 bg-white/[0.03] p-4 flex flex-col gap-2 justify-center backdrop-blur-sm">
              {benefits.map((item, index) => (
                <button key={index} onClick={() => setActiveBenefit(index)} suppressHydrationWarning
                  className={`group w-full flex flex-col justify-center px-5 py-4 text-left rounded-xl transition-all duration-300 outline-none ${activeBenefit === index ? 'bg-white shadow-xl border-l-4 border-blue-600' : 'bg-white/5 border-l-4 border-transparent hover:bg-white/10'}`}>
                  <div className="flex items-center gap-4 w-full">
                    <div className={`shrink-0 transition-colors ${activeBenefit === index ? 'text-blue-600' : 'text-gray-400 group-hover:text-gray-200'}`}>
                      {index === 0 && <Calculator size={20} />}{index === 1 && <Target size={20} />}{index === 2 && <BarChart3 size={20} />}
                      {index === 3 && <ShieldCheck size={20} />}{index === 4 && <Zap size={20} />}{index >= 5 && <LineChart size={20} />}
                    </div>
                    <span className={`text-base md:text-lg flex-1 font-semibold transition-all ${activeBenefit === index ? 'text-gray-900' : 'text-gray-300 group-hover:text-white'}`}>{item.title}</span>
                    <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${activeBenefit === index ? 'text-blue-600 rotate-90' : 'text-gray-500 opacity-0 group-hover:opacity-60'}`} />
                  </div>
                  {activeBenefit === index && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: 0.3 }} className="overflow-hidden mt-3 pl-9">
                      <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.description}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((pt, pi) => (<li key={pi} className="flex items-start gap-2 text-sm text-gray-600"><Check size={13} className="text-blue-600 mt-0.5 shrink-0" /> {pt}</li>))}
                      </ul>
                    </motion.div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="services">
        <NSServicesSection />
      </div>

      <section id="pricing" className="py-12 bg-gray-50 overflow-hidden scroll-mt-36">
        <div className="max-w-7xl mx-auto px-4 lg:px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: '#000d1a' }}>
            <div className="grid lg:grid-cols-[3fr_2fr] gap-0 items-stretch">
              <div className="py-12 px-10 lg:px-16 flex flex-col justify-center">
                <div className="w-14 h-1 bg-blue-400 mb-5 rounded-full" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">How Much Does Smart Commission Cost?</h2>
                <p className="text-white/75 text-base leading-relaxed mb-8">Smart Commission is priced as a monthly or annual SuiteApp subscription, based on the number of sales reps in your commission plans. There are no per-calculation fees. Because it runs natively inside NetSuite, your existing NetSuite subscription already provides the data foundation — making Smart Commission one of the most cost-effective commission automation solutions available.</p>
                <div>
                  <Link href="#contact-form" className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold text-sm px-8 py-3 rounded hover:bg-blue-400 hover:text-white transition-all duration-200 shadow-md">
                    Talk to a Commission Expert <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
              <div className="relative flex items-start justify-center min-h-[340px] overflow-hidden">
                <div className="absolute inset-0 bg-[#001022]" />
                <div className="absolute top-[-40px] right-[-40px] w-[400px] h-[380px] bg-[#002040]" style={{ borderRadius: '40% 60% 55% 45% / 45% 55% 45% 55%' }} />
                <div className="absolute top-[-20px] right-[-10px] w-[340px] h-[320px] bg-[#003060]" style={{ borderRadius: '45% 55% 50% 50% / 50% 50% 50% 50%' }} />
                <div className="relative z-10 mt-6 w-[280px] h-[320px] lg:w-[300px] lg:h-[340px] overflow-hidden shadow-2xl" style={{ borderRadius: '50% 50% 46% 54% / 52% 48% 52% 48%' }}>
                  <Image src="/images/people/laptopgirl.webp" alt="Smart Commission Pricing" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ
        variant="netsuite"
        id="faq"
        customSubtitle="Common questions about NetSuite Smart Commission."
        customFaqs={[
          { q: "What types of commission plans does Smart Commission support?", a: "Smart Commission supports flat-rate, multi-tier/accelerator, split, residual, SPIFF, overlay, and channel partner plans. You can mix plan types across different roles in a single NetSuite account." },
          { q: "Does Smart Commission run inside NetSuite or as an external tool?", a: "It runs 100% natively inside NetSuite as a SuiteApp — no external login, no middleware, no API sync delay. All commission data reads directly from your NetSuite transactions in real time." },
          { q: "How does Smart Commission handle returns and clawbacks?", a: "When a return, credit memo, or deal cancellation is processed in NetSuite, Smart Commission automatically calculates the clawback amount and reverses or holds the relevant commission — fully rule-based with audit trail." },
          { q: "Can we set different rates for different items, categories, or customers?", a: "Yes. Commission rates can be defined at item, item group, category, customer, or deal-size level. You can also set accelerator thresholds that automatically increase rates once a rep hits quota milestones." },
          { q: "Do sales reps get visibility into their own commissions?", a: "Yes. Every rep gets a self-service dashboard directly in NetSuite — showing their live earnings, quota attainment, pipeline-based projected commissions, and historical payout records." },
          { q: "How does the approval workflow work?", a: "Commission statements are routed through a configurable multi-level approval workflow — manager review, finance sign-off, and rep acknowledgement — all with email notifications and full audit logging." },
          { q: "Can Smart Commission handle split commissions between multiple reps?", a: "Yes. Deals can be split between overlay reps, team members, channel partners, or any combination — with flexible percentage allocation rules and full transparency for all contributors." },
          { q: "How long does implementation take?", a: "A typical Smart Commission implementation takes 4–6 weeks, covering plan configuration, user mapping, historical data import, approval workflow setup, and end-user training." },
        ]}
      />

      <ContactFormDesign4 />
    </div>
  );
}
