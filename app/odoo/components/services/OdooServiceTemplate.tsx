"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check, CircleCheckBig } from "lucide-react";
import { useEffect, useState } from "react";

import { FAQ } from "@/app/components/home/FAQ";
import FooterContactForm from "@/app/components/shared/FooterContactForm";
import type { OdooServiceContent } from "./odooServiceData";

const pageLinks = [
  { label: "Overview", href: "#overview" },
  { label: "What We Deliver", href: "#capabilities" },
  { label: "Our Process", href: "#process" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Why AGSuite", href: "#engagement" },
  { label: "FAQ", href: "#faq" },
];

export default function OdooServiceTemplate({ service }: { service: OdooServiceContent }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const ids = pageLinks.map((link) => link.href.slice(1));
    const updateActiveSection = () => {
      const position = window.scrollY + 180;
      for (let index = ids.length - 1; index >= 0; index -= 1) {
        const section = document.getElementById(ids[index]);
        if (section && section.offsetTop <= position) {
          setActiveSection(ids[index]);
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    updateActiveSection();
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <div className="overflow-x-clip bg-white text-slate-950">
      <section className="relative isolate flex min-h-[620px] items-center overflow-hidden bg-[#faf7fa] px-6 pb-16 pt-28 lg:min-h-[680px] lg:py-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_82%_18%,rgba(100,59,159,0.20),transparent_31%),radial-gradient(circle_at_12%_90%,rgba(168,85,247,0.11),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(rgba(113,75,103,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(113,75,103,0.065)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>

            <h1 className="max-w-2xl text-[clamp(1.5rem,3.4vw,2.8rem)] font-medium leading-[1.2] tracking-[-0.045em]">{service.title}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">{service.description}</p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link href="#contact-form" className="group inline-flex items-center gap-2 rounded-full bg-[#714b67] px-7 py-4 font-bold text-white shadow-lg shadow-[#714b67]/20 transition hover:-translate-y-0.5 hover:bg-[#5d3e56]">
                Talk to an Odoo expert <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>
              <Link href="#capabilities" className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-[#714b67] hover:text-[#714b67]">Explore the service</Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="relative mx-auto w-full max-w-[660px]">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#714b67]/25 via-violet-300/10 to-transparent blur-2xl" />
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-[#eee7ed] shadow-[0_30px_80px_rgba(71,38,64,0.22)]">
              <Image src={service.image} alt={`${service.name} services from AGSuite`} fill priority className="object-cover object-center transition duration-700 hover:scale-[1.03]" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25101f]/15 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      <nav aria-label={`${service.name} page sections`} className="sticky top-20 z-40 border-b border-purple-100 bg-gradient-to-r from-[#fdf9fc]/95 via-white/95 to-[#f8f4ff]/95 shadow-sm backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] lg:justify-center">
            {pageLinks.map((link) => {
              const active = activeSection === link.href.slice(1);
              return <Link key={link.href} href={link.href} className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold transition sm:text-base ${active ? "bg-white text-[#714b67] shadow-md shadow-purple-100 ring-1 ring-purple-100" : "text-slate-600 hover:bg-white/70 hover:text-[#714b67]"}`}>{link.label}</Link>;
            })}
          </div>
        </div>
      </nav>

      <section id="overview" className="scroll-mt-40 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="relative">
            <div className="absolute -left-5 -top-5 h-36 w-36 rounded-full bg-violet-200/60 blur-3xl" />
            <div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-[#f3edf2] shadow-2xl shadow-[#714b67]/15">
              <Image src={service.image} alt={`${service.name} overview`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#714b67]">Service overview</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">{service.overviewTitle}</h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">{service.overviewParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          </motion.div>
        </div>
      </section>

      <section id="capabilities" className="scroll-mt-40 bg-[#f8f5f8] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#714b67]">What we deliver</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">A complete, practical service scope</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Focused expertise and clear deliverables aligned with your Odoo environment and business priorities.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.capabilities.map((item, index) => (
              <motion.article key={item.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ delay: (index % 3) * 0.06 }} className="group rounded-2xl border border-[#714b67]/10 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#714b67]/25 hover:shadow-xl hover:shadow-[#714b67]/10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#714b67]/10 text-sm font-black text-[#714b67]">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-5 text-xl font-extrabold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-40 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-[#714b67]">Our process</p><h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Clear steps. Visible progress. Controlled delivery.</h2></div>
          <div className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#714b67]/35 to-transparent lg:block" />
            {service.process.map((step, index) => <motion.article key={step.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.07 }} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#714b67] to-[#643b9f] text-lg font-black text-white shadow-lg shadow-purple-200">{index + 1}</div><h3 className="mt-6 text-xl font-extrabold">{step.title}</h3><p className="mt-3 leading-7 text-slate-600">{step.description}</p></motion.article>)}
          </div>
        </div>
      </section>

      <section id="outcomes" className="relative scroll-mt-40 overflow-hidden bg-[#160e15] px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(113,75,103,0.65),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(124,58,237,0.22),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-violet-300">Business outcomes</p><h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">What better Odoo delivery should achieve</h2></div>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{service.outcomes.map((outcome) => <article key={outcome.title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]"><CircleCheckBig className="h-7 w-7 text-violet-300" /><h3 className="mt-5 text-xl font-extrabold">{outcome.title}</h3><p className="mt-3 leading-7 text-white/65">{outcome.description}</p></article>)}</div>
        </div>
      </section>

      <section id="engagement" className="scroll-mt-40 bg-[#f8f5f8] px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#714b67]/10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-8 sm:p-12 lg:p-14"><p className="text-sm font-black uppercase tracking-[0.2em] text-[#714b67]">Why AGSuite</p><h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Business understanding backed by Odoo expertise</h2><p className="mt-6 text-lg leading-8 text-slate-600">We combine functional, technical, data, integration, and adoption expertise so every decision supports the complete business outcome.</p><ul className="mt-8 grid gap-4 sm:grid-cols-2">{service.engagementPoints.map((point) => <li key={point} className="flex items-start gap-3 font-semibold text-slate-700"><Check className="mt-0.5 h-5 w-5 shrink-0 text-[#714b67]" />{point}</li>)}</ul></div>
          <div className="relative min-h-[380px] bg-gradient-to-br from-[#714b67] via-[#4a2944] to-[#190e17] p-9 text-white sm:p-12"><div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle_at_center,white_1px,transparent_1px)] [background-size:24px_24px]" /><div className="relative flex h-full flex-col justify-end"><p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-200">Start with clarity</p><h3 className="mt-4 text-3xl font-black leading-tight">Plan your {service.name.toLowerCase()} engagement</h3><p className="mt-4 leading-7 text-white/70">Tell us about your priorities, current environment, and desired timeline. We&apos;ll help define the right next step.</p><Link href="#contact-form" className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-[#4a2944] transition hover:bg-violet-50">Talk to an Odoo expert <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link></div></div>
        </div>
      </section>

      <FAQ variant="odoo" layout="sidebar" id="faq" customFaqs={service.faqs} customSubtitle={`Common questions about ${service.name.toLowerCase()} and how AGSuite supports a controlled, business-focused engagement.`} stickyTopClass="lg:top-40" />

      <section className="bg-white px-6 py-16"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#714b67] via-[#54304e] to-[#1e101c] px-8 py-14 text-white shadow-2xl sm:px-12 lg:px-16"><div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-400/25 blur-3xl" /><div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.2em] text-violet-200">Move forward with confidence</p><h2 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Ready to discuss {service.name}?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Get a practical recommendation shaped around your processes, systems, data, users, and business goals.</p></div><Link href="#contact-form" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#4a2944] transition hover:bg-violet-50">Start a conversation <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link></div></div></section>

      <div id="contact-form" className="scroll-mt-40"><FooterContactForm platform="NetSuite" contentVariant="Odoo" /></div>
    </div>
  );
}
