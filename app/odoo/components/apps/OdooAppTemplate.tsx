"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, ChevronRight, CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";

import { FAQ } from "@/app/components/home/FAQ";
import FooterContactForm from "@/app/components/shared/FooterContactForm";
import OdooServicesBenefits from "@/app/odoo/components/OdooServicesBenefits";

export interface OdooAppCapability {
  title: string;
  description: string;
}

export interface OdooAppBenefit {
  title: string;
  description: string;
  points: string[];
  image: string;
}

export interface OdooAppFaq {
  q: string;
  a: string;
}

interface OdooAppTemplateProps {
  appName: string;
  appLogo: string;
  title: string;
  description: string;
  heroImage: string;
  overviewImage: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  heroCards: Array<{ value: string; label: string }>;
  capabilities: OdooAppCapability[];
  benefits: OdooAppBenefit[];
  engagementPoints: string[];
  faqs: OdooAppFaq[];
}


export default function OdooAppTemplate({
  appName,
  appLogo,
  title,
  description,
  heroImage,
  overviewImage,
  overviewTitle,
  overviewParagraphs,
  heroCards,
  capabilities,
  benefits,
  engagementPoints,
  faqs,
}: OdooAppTemplateProps) {
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeSection, setActiveSection] = useState<string>("");
  const selectedBenefit = benefits[activeBenefit];
  const pageLinks = [
    { label: `What is ${appName}?`, href: "#overview" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Benefits", href: "#benefits" },
    { label: "Services", href: "#services" },
    { label: "Implementation", href: "#implementation" },
    { label: "FAQ", href: "#faq" },
  ];

  useEffect(() => {
    const sectionIds = ["overview", "capabilities", "benefits", "services", "implementation", "faq"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 170;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-x-clip bg-white text-slate-950">
      <section className="relative isolate flex min-h-[calc(100vh-72px)] items-center overflow-hidden bg-[#f8f5f8] px-6 pb-16 pt-28 lg:pb-20 lg:pt-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_22%,rgba(113,75,103,0.2),transparent_30%),radial-gradient(circle_at_15%_82%,rgba(139,92,246,0.12),transparent_28%)]" />
        <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(113,75,103,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(113,75,103,0.07)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-10">
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500">
              <Link href="/odoo" className="transition hover:text-[#714b67]">Odoo</Link>
              <ChevronRight className="h-4 w-4" />
              <Link href="/odoo#apps" className="transition hover:text-[#714b67]">Business Apps</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-[#714b67]">{appName}</span>
            </div>


            <h1 className="max-w-2xl text-[clamp(1.5rem,3.4vw,2.8rem)] font-medium leading-[1.2] tracking-[-0.045em]">
              {title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{description}</p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#contact-form" className="group inline-flex items-center gap-2 rounded-full bg-[#714b67] px-7 py-4 font-bold text-white shadow-lg shadow-[#714b67]/20 transition hover:bg-[#5d3e56]">
                Talk to an Odoo expert
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <Link href="#capabilities" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-[#714b67] hover:text-[#714b67]">
                Explore capabilities
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="relative mx-auto w-full max-w-[720px] pb-8">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#714b67]/20 via-violet-300/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-white/80 p-3 shadow-[0_30px_80px_rgba(71,38,64,0.22)] backdrop-blur">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.45rem] bg-white">
                <Image src={heroImage} alt={`${appName} dashboard and workflow`} fill priority className="object-contain object-center" sizes="(max-width: 1024px) 100vw, 58vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#25101f]/10 via-transparent to-transparent" />
              </div>
            </div>
            <div className="absolute inset-x-4 bottom-0 z-10 grid grid-cols-3 gap-2 sm:inset-x-10 sm:gap-3">
              {heroCards.map((card) => (
                <div key={card.label} className="rounded-xl border border-[#714b67]/10 bg-white/95 px-2 py-3 text-center shadow-lg shadow-[#35202f]/10 backdrop-blur sm:rounded-2xl sm:px-4">
                  <p className="text-lg font-black text-[#714b67] sm:text-xl">{card.value}</p>
                  <p className="mt-0.5 text-[11px] font-semibold leading-4 text-slate-500 sm:text-xs">{card.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <nav
        aria-label={`${appName} page sections`}
        className="sticky top-20 z-40 border-b border-gray-200 bg-white/95 backdrop-blur-md shadow-sm transition-all"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-start gap-1 overflow-x-auto py-3 [scrollbar-width:none] lg:justify-center lg:py-4">
            {pageLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`whitespace-nowrap rounded-lg px-4 py-2 text-base font-semibold transition ${
                    isActive ? "bg-purple-100/90 text-[#714b67] shadow-xs" : "hover:bg-purple-50"
                  }`}
                >
                  <span className="bg-gradient-to-r from-[#714b67] via-[#643b9f] to-[#7c3aed] bg-clip-text text-transparent">
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <section id="overview" className="scroll-mt-40 px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }} className="relative">
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-violet-200/50 blur-2xl" />
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-[#f3edf2] shadow-2xl shadow-[#714b67]/10">
              <Image src={overviewImage} alt={`${appName} in use`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65 }}>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#714b67]">What is {appName}?</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">{overviewTitle}</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
              {overviewParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-40 bg-[#f8f5f8] px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#714b67]">Core capabilities</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Everything your team needs to move work forward</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Connect daily execution with the customer and operational data already inside Odoo.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <motion.article key={capability.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.45, delay: (index % 4) * 0.06 }} className="group rounded-2xl border border-[#714b67]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#714b67]/25 hover:shadow-xl hover:shadow-[#714b67]/10">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#714b67]/10 text-sm font-black text-[#714b67]">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-5 text-lg font-extrabold text-slate-900">{capability.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{capability.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="benefits" className="relative scroll-mt-40 overflow-hidden bg-[#160e15] px-6 py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(113,75,103,0.6),transparent_32%),radial-gradient(circle_at_12%_90%,rgba(124,58,237,0.2),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-300">Business benefits</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Why businesses choose {appName}</h2>
          </div>
          <div className="mt-14 grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <button key={benefit.title} type="button" onClick={() => setActiveBenefit(index)} className={`w-full rounded-2xl border px-5 py-5 text-left transition ${activeBenefit === index ? "border-violet-300/50 bg-white text-slate-950" : "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold">{benefit.title}</span>
                    <ArrowRight className={`h-4 w-4 shrink-0 transition ${activeBenefit === index ? "text-[#714b67]" : "text-white/50"}`} />
                  </div>
                </button>
              ))}
            </div>
            <div className="min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-white text-slate-950 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div key={selectedBenefit.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}>
                  <div className="relative h-64 bg-slate-100">
                    <Image src={selectedBenefit.image} alt={selectedBenefit.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                  </div>
                  <div className="p-7 sm:p-9">
                    <h3 className="text-2xl font-black">{selectedBenefit.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{selectedBenefit.description}</p>
                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {selectedBenefit.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm font-semibold text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#714b67]" />{point}</li>)}
                    </ul>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <OdooServicesBenefits />

      <section id="implementation" className="scroll-mt-40 bg-[#f8f5f8] px-6 py-24 sm:py-28">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#714b67]/10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#714b67]">Implementation planning</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">An Odoo setup designed around your business</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">The right scope depends on your selected apps, users, data, integrations, workflows, hosting, training, and support requirements. We turn those variables into a clear rollout plan.</p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {engagementPoints.map((point) => <li key={point} className="flex items-start gap-3 font-semibold text-slate-700"><CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-[#714b67]" />{point}</li>)}
            </ul>
          </div>
          <div className="relative min-h-[380px] bg-gradient-to-br from-[#714b67] via-[#4a2944] to-[#190e17] p-9 text-white sm:p-12">
            <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative flex h-full flex-col justify-between">
              <Image src={appLogo} alt="" width={70} height={70} className="h-16 w-16 rounded-2xl bg-white p-2 shadow-lg" />
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-200">Start with clarity</p>
                <h3 className="mt-4 text-3xl font-black leading-tight">Get a practical roadmap for {appName}</h3>
                <Link href="#contact-form" className="group mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#4a2944] transition hover:bg-violet-50">Plan your implementation<ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQ variant="odoo" layout="sidebar" id="faq" customFaqs={faqs} stickyTopClass="lg:top-40" />

      <section className="bg-white px-6 py-16">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#714b67] via-[#54304e] to-[#1e101c] px-8 py-14 text-white shadow-2xl sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-400/25 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-200">Build a connected business</p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Ready to get more from {appName}?</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Let&apos;s shape the app, data, workflows, and integrations around the way your teams need to work.</p>
            </div>
            <Link href="#contact-form" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#4a2944] transition hover:bg-violet-50">Talk to an Odoo expert<ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link>
          </div>
        </div>
      </section>

      <div id="contact-form" className="scroll-mt-40">
        <FooterContactForm platform="NetSuite" contentVariant="Odoo" />
      </div>
    </div>
  );
}
