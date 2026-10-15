import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  CircleDollarSign,
  Factory,
  Gauge,
  Headphones,
  HeartHandshake,
  Layers3,
  PackageCheck,
  RefreshCw,
  ShoppingCart,
  Users,
  Workflow,
  Wrench,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Odoo ERP Implementation and Business Solutions",
  description:
    "Bring CRM, finance, inventory, manufacturing, projects, HR, and commerce together with Odoo implementation, customization, integration, and support from AGSuite Technologies.",
  alternates: { canonical: "https://www.agsuitetech.com/odoo" },
  openGraph: {
    title: "Odoo ERP Implementation and Business Solutions | AGSuite",
    description: "Build a connected business with a modular Odoo platform tailored to your processes.",
    url: "https://www.agsuitetech.com/odoo",
    type: "website",
  },
};

const apps = [
  { name: "CRM", detail: "Leads, pipelines, and customer activity", icon: HeartHandshake, tone: "bg-[#643b9f]" },
  { name: "Accounting", detail: "Invoicing and financial operations", icon: CircleDollarSign, tone: "bg-[#2563eb]" },
  { name: "Sales", detail: "Quotations, orders, and subscriptions", icon: BarChart3, tone: "bg-[#e46f4c]" },
  { name: "Inventory", detail: "Stock, warehouse, and fulfilment", icon: PackageCheck, tone: "bg-[#3b82a0]" },
  { name: "Manufacturing", detail: "Planning, quality, and maintenance", icon: Factory, tone: "bg-[#8065a8]" },
  { name: "eCommerce", detail: "Web store and connected operations", icon: ShoppingCart, tone: "bg-[#d99a36]" },
  { name: "Projects", detail: "Tasks, timesheets, and delivery", icon: Workflow, tone: "bg-[#4c8c73]" },
  { name: "Employees", detail: "People and workforce workflows", icon: Users, tone: "bg-[#c35d87]" },
];

const services = [
  {
    title: "Implementation",
    description: "Translate business requirements into a phased Odoo setup with clear ownership, validation, and adoption milestones.",
    icon: Layers3,
  },
  {
    title: "Customization",
    description: "Configure workflows, permissions, screens, and reports around the way your teams actually work.",
    icon: Wrench,
  },
  {
    title: "Integration",
    description: "Connect Odoo with the systems that need to remain part of your operating landscape.",
    icon: RefreshCw,
  },
  {
    title: "Managed support",
    description: "Keep the platform dependable with user support, improvements, monitoring, and structured releases.",
    icon: Headphones,
  },
];

const industries = [
  "Manufacturing",
  "Wholesale distribution",
  "Retail & eCommerce",
  "Professional services",
  "Technology companies",
  "Logistics & operations",
];

const approach = [
  { number: "01", title: "Discover", text: "Map processes, pain points, users, data, and success criteria before configuration begins." },
  { number: "02", title: "Design", text: "Shape the right application mix, workflows, integrations, roles, and rollout sequence." },
  { number: "03", title: "Deliver", text: "Configure, migrate, test, train, and launch through controlled implementation stages." },
  { number: "04", title: "Improve", text: "Support users and evolve the platform as operating needs and priorities change." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Odoo ERP implementation services",
  provider: {
    "@type": "Organization",
    name: "AGSuite Technologies",
    url: "https://www.agsuitetech.com",
  },
  url: "https://www.agsuitetech.com/odoo",
  description:
    "Odoo implementation, customization, integration, migration, training, and managed support services.",
  areaServed: "Worldwide",
};

export default function OdooHomePage() {
  return (
    <div className="overflow-hidden bg-white">
      <Script
        id="odoo-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section id="overview" className="relative isolate min-h-[700px] overflow-hidden px-6 pb-12 pt-28 lg:pt-32">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_18%,rgba(100,59,159,0.10),transparent_32%),radial-gradient(circle_at_88%_25%,rgba(37,99,235,0.08),transparent_30%),linear-gradient(135deg,#ffffff_0%,#ffffff_52%,#faf9ff_76%,#f7faff_100%)]" />
        <div className="absolute left-[-8rem] top-40 -z-10 h-72 w-72 rounded-full border-[40px] border-[#643b9f]/5" />
        <div className="absolute right-[-5rem] top-28 -z-10 h-64 w-64 rounded-full bg-[#2563eb]/5 blur-2xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h1 className="max-w-2xl text-4xl font-medium leading-[1.2] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-6xl">
              Your trusted  <br />Odoo partner
              <span className="block bg-gradient-to-r from-[#643b9f] via-[#7048c8] to-[#2563eb] bg-clip-text text-transparent">for smarter business growth</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
              AGSuite Technologies helps you connect sales, finance, inventory, manufacturing, projects, people, and commerce through a tailored Odoo environment—implemented around your processes, priorities, and growth plans.
            </p>
            <div className="mt-7 flex flex-col gap-4 sm:flex-row">
              <Link href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#643b9f] px-7 py-4 font-bold text-white shadow-xl shadow-[#643b9f]/20 transition hover:-translate-y-1 hover:bg-[#4c2d7d]">
                Plan your Odoo journey <ArrowRight size={18} />
              </Link>
              <Link href="#apps" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-700 transition hover:border-[#643b9f]/40 hover:text-[#643b9f]">
                Explore the app suite
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:-translate-y-6">
            <div className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-[#643b9f]/20 via-white to-[#2563eb]/20 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-3 shadow-[0_35px_90px_-35px_rgba(56,36,52,0.42)] backdrop-blur">
              <div className="flex items-center justify-between rounded-t-[1.4rem] bg-[#332b33] px-5 py-4 text-white">
                <div className="flex items-center gap-3">
                  <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#643b9f] text-sm font-black">O</div>
                  <div><p className="text-sm font-bold">Business workspace</p><p className="text-[11px] text-slate-400">Connected operations overview</p></div>
                </div>
                <div className="flex gap-1.5" aria-hidden="true"><span className="h-2 w-2 rounded-full bg-[#2563eb]" /><span className="h-2 w-2 rounded-full bg-slate-500" /><span className="h-2 w-2 rounded-full bg-slate-500" /></div>
              </div>
              <div className="grid gap-3 bg-[#f1effb] p-4 sm:grid-cols-[0.82fr_1.18fr]">
                <div className="space-y-3">
                  <div className="rounded-2xl bg-[#643b9f] p-5 text-white">
                    <p className="text-xs font-semibold text-white/70">Today&apos;s focus</p>
                    <p className="mt-2 text-2xl font-bold">One source of truth</p>
                    <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/20"><div className="h-full w-3/4 rounded-full bg-[#93c5fd]" /></div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Sales", icon: BarChart3, color: "text-[#643b9f]" },
                      { label: "Stock", icon: Boxes, color: "text-[#2563eb]" },
                      { label: "Finance", icon: CircleDollarSign, color: "text-amber-600" },
                      { label: "Service", icon: Headphones, color: "text-blue-600" },
                    ].map(({ label, icon: Icon, color }) => (
                      <div key={label} className="rounded-2xl bg-white p-4 shadow-sm"><Icon size={20} className={color} /><p className="mt-4 text-xs font-bold text-slate-700">{label}</p></div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex items-center justify-between"><div><p className="text-xs text-slate-400">Operations</p><p className="font-bold text-slate-800">Live workflow</p></div><Gauge size={22} className="text-[#2563eb]" /></div>
                  <div className="mt-8 flex h-32 items-end gap-2" aria-label="Illustrative operations chart">
                    {[38, 57, 47, 72, 61, 86, 77, 94].map((height, index) => (
                      <div key={height} className="flex-1 rounded-t-md bg-gradient-to-t from-[#643b9f] to-[#a78bfa]" style={{ height: `${height}%`, opacity: 0.62 + index * 0.045 }} />
                    ))}
                  </div>
                  <div className="mt-6 space-y-3">
                    {["Quote approved", "Inventory reserved", "Invoice scheduled"].map((item, index) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-600">
                        <span className={`grid h-6 w-6 place-items-center rounded-full ${index === 2 ? "bg-[#2563eb]/10 text-[#1d4ed8]" : "bg-[#643b9f]/10 text-[#643b9f]"}`}><Check size={13} /></span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="apps" className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563eb]">Choose what your business needs</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">One suite. Apps that work together.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Start with the workflows that matter now, then extend the platform without rebuilding the foundation.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {apps.map(({ name, detail, icon: Icon, tone }) => (
              <article key={name} className="group rounded-[1.6rem] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:border-[#643b9f]/25 hover:shadow-xl hover:shadow-slate-200/70">
                <div className={`grid h-12 w-12 place-items-center rounded-2xl text-white shadow-lg ${tone}`}><Icon size={23} /></div>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="relative px-6 py-24 sm:py-28">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#f7f5ff] via-white to-[#eef5ff]" />
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#643b9f]">From idea to everyday use</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Technology is only useful when people can rely on it.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">Our work connects platform decisions to real operating outcomes—from process discovery and configuration to adoption and continuous improvement.</p>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="group flex gap-5 rounded-[1.6rem] border border-white/80 bg-white/80 p-7 shadow-sm backdrop-blur transition hover:bg-white hover:shadow-lg">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${index % 2 ? "bg-[#2563eb]/10 text-[#1d4ed8]" : "bg-[#643b9f]/10 text-[#643b9f]"}`}><Icon size={23} /></div>
                <div><h3 className="text-xl font-bold text-slate-900">{title}</h3><p className="mt-2 leading-7 text-slate-600">{description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="industries" className="bg-[#171329] px-6 py-24 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#60a5fa]">Industry-aware delivery</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Designed around how work moves.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">Odoo is modular. Your implementation should be too. We shape the application mix and rollout around the processes, controls, and pace of your organization.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {industries.map((industry, index) => (
              <div key={industry} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.055] p-5 transition hover:border-[#60a5fa]/40 hover:bg-white/[0.08]">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 text-sm font-bold text-[#60a5fa]">{String(index + 1).padStart(2, "0")}</span>
                <span className="font-semibold">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="approach" className="bg-white px-6 py-24 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2563eb]">A practical implementation path</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">Move forward in clear, manageable stages.</h2>
          </div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-0 right-0 top-8 hidden h-px bg-slate-200 lg:block" aria-hidden="true" />
            {approach.map((item) => (
              <article key={item.number} className="relative">
                <span className="relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-[#643b9f]/15 bg-[#f7f2f6] text-lg font-black text-[#643b9f]">{item.number}</span>
                <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-4 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#643b9f] px-7 py-14 text-white shadow-2xl shadow-[#643b9f]/25 sm:px-12 lg:px-16 lg:py-20">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border-[55px] border-white/[0.06]" />
          <div className="absolute bottom-[-6rem] right-[24%] h-56 w-56 rounded-full bg-[#2563eb]/30 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#bfdbfe]">Let&apos;s make the next step clear</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Tell us what you want your business systems to do better.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">We&apos;ll help you identify the right Odoo starting point, scope, and rollout path for your organization.</p>
            </div>
            <a href="mailto:hello@agsuitetech.com?subject=Odoo%20Consultation%20Request" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#643b9f] shadow-xl transition hover:-translate-y-1 hover:bg-[#f9f4f8]">
              Start a conversation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
