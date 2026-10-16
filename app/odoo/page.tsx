import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import OdooTrustMetrics from "./components/OdooTrustMetrics";
import OdooServicesBenefits from "./components/OdooServicesBenefits";
import FooterContactForm from "@/app/components/shared/FooterContactForm";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Check,
  CircleDollarSign,
  Compass,
  Factory,
  Gauge,
  Headphones,
  HeartHandshake,
  PackageCheck,
  PencilRuler,
  Rocket,
  ShoppingCart,
  TrendingUp,
  Users,
  Workflow,
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
  { name: "CRM", detail: "Leads, pipelines, and customer activity", icon: HeartHandshake, image: "/images/modules/crm.png", accent: "#a78bfa" },
  { name: "Accounting", detail: "Invoicing and financial operations", icon: CircleDollarSign, image: "/images/modules/financial_management.png", accent: "#60a5fa" },
  { name: "Sales", detail: "Quotations, orders, and subscriptions", icon: BarChart3, image: "/images/modules/order_management.png", accent: "#fb923c" },
  { name: "Inventory", detail: "Stock, warehouse, and fulfilment", icon: PackageCheck, image: "/images/modules/inventory_management.png", accent: "#2dd4bf" },
  { name: "Manufacturing", detail: "Planning, quality, and maintenance", icon: Factory, image: "/images/modules/manufacturing.png", accent: "#f472b6" },
  { name: "eCommerce", detail: "Web store and connected operations", icon: ShoppingCart, image: "/images/modules/ecommerce.png", accent: "#38bdf8" },
  { name: "Projects", detail: "Tasks, timesheets, and delivery", icon: Workflow, image: "/images/modules/project_management.png", accent: "#818cf8" },
  { name: "Employees", detail: "People and workforce workflows", icon: Users, image: "/images/modules/hr_management.png", accent: "#fb7185" },
];


const approach = [
  { number: "01", title: "Discover", text: "Map processes, pain points, users, data, and success criteria before configuration begins.", icon: Compass },
  { number: "02", title: "Design", text: "Shape the right application mix, workflows, integrations, roles, and rollout sequence.", icon: PencilRuler },
  { number: "03", title: "Deliver", text: "Configure, migrate, test, train, and launch through controlled implementation stages.", icon: Rocket },
  { number: "04", title: "Improve", text: "Support users and evolve the platform as operating needs and priorities change.", icon: TrendingUp },
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

      <OdooTrustMetrics />

      <section id="apps" className="relative overflow-hidden bg-[#08080c] px-6 py-24 text-white sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(100,59,159,0.20),transparent_30%),radial-gradient(circle_at_88%_12%,rgba(37,99,235,0.14),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-6xl text-center">
            <h2 className="mx-auto whitespace-nowrap text-[clamp(1rem,4.4vw,3.75rem)] font-medium leading-[1.2] tracking-[-0.045em] text-white">
              One Suite.{" "}<span className="inline bg-gradient-to-r from-[#a78bfa] via-[#818cf8] to-[#60a5fa] bg-clip-text text-transparent">Apps that work together</span>
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">Start with the workflows that matter now, then extend the platform without rebuilding the foundation.</p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {apps.map(({ name, detail, icon: Icon, image, accent }) => (
              <article key={name} className="group relative flex min-h-[390px] flex-col overflow-hidden rounded-2xl border shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-2" style={{ borderColor: `${accent}55`, backgroundColor: "#121218" }}>
                <div className="relative h-56 overflow-hidden bg-[#17171f]">
                  <Image
                    src={image}
                    alt={`${name} business module`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${accent}55 0%, rgba(0,0,0,0.08) 48%, transparent 76%)` }} />
                </div>
                <div className="relative flex flex-1 flex-col p-6" style={{ background: `linear-gradient(145deg, ${accent}4d 0%, ${accent}20 52%, #15131d 100%)` }}>
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.06]" style={{ color: accent }}>
                      <Icon size={21} />
                    </span>
                    <ArrowRight size={19} className="text-slate-500 transition duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{detail}</p>
                  <div className="absolute inset-x-6 bottom-0 h-px opacity-80" style={{ backgroundColor: accent }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <OdooServicesBenefits />

      <section id="industries" className="relative flex min-h-[520px] items-center overflow-hidden bg-[#171329] bg-[url('/images/industries/logistics_transport_hologram.jpg')] bg-cover bg-center bg-scroll px-6 py-24 text-white sm:py-28 md:bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/42 to-black/5" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Industry-aware delivery</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-200">Odoo is modular. Your implementation should be too. We shape the application mix and rollout around the processes, controls, and pace of your organization.</p>
            <Link href="#contact" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#4c2d7d] shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-[#f7f2ff]">
              Discuss your industry needs <ArrowRight size={18} />
            </Link>
          </div>

        </div>
      </section>

      <section id="approach" className="relative overflow-hidden bg-gradient-to-br from-white via-[#f7f1ff] to-[#eaf3ff] px-6 py-24 sm:py-28">
        <div className="approach-floating-dot approach-floating-dot-one absolute h-3 w-3 rounded-full bg-[#a855f7]/70 shadow-[0_0_24px_8px_rgba(168,85,247,0.2)]" aria-hidden="true" />
        <div className="approach-floating-dot approach-floating-dot-two absolute h-4 w-4 rounded-full bg-[#3b82f6]/60 shadow-[0_0_28px_9px_rgba(59,130,246,0.18)]" aria-hidden="true" />
        <div className="approach-floating-dot approach-floating-dot-three absolute h-2.5 w-2.5 rounded-full bg-[#ec4899]/60 shadow-[0_0_22px_7px_rgba(236,72,153,0.16)]" aria-hidden="true" />
        <div className="approach-floating-dot approach-floating-dot-four absolute h-3 w-3 rounded-full bg-[#8b5cf6]/55 shadow-[0_0_24px_8px_rgba(139,92,246,0.18)]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <h2 className="bg-gradient-to-r from-[#3f245f] via-[#643b9f] to-[#2563eb] bg-clip-text text-4xl font-medium tracking-tight text-transparent sm:text-5xl">Move forward in clear, manageable stages.</h2>
          </div>
          <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-8 right-8 top-8 hidden h-px bg-gradient-to-r from-[#a78bfa]/30 via-[#643b9f]/60 to-[#60a5fa]/30 lg:block" aria-hidden="true">
              <ArrowRight className="approach-flow-runner absolute -top-[11px] text-[#643b9f] drop-shadow-[0_0_8px_rgba(100,59,159,0.45)]" size={22} />
              <ArrowRight className="approach-flow-runner approach-flow-runner-delay absolute -top-[11px] text-[#2563eb] drop-shadow-[0_0_8px_rgba(37,99,235,0.4)]" size={22} />
            </div>
            {approach.map((item, index) => {
              const StepIcon = item.icon;

              return (
                <article key={item.number} className="relative">
                  <span className="approach-step-icon relative z-10 grid h-16 w-16 place-items-center rounded-2xl border border-[#643b9f]/15 bg-white/90 text-[#643b9f] shadow-lg shadow-[#643b9f]/10 backdrop-blur-sm" style={{ animationDelay: `${index * 0.7}s` }}>
                    <StepIcon size={27} strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-4 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#643b9f] px-7 py-14 text-white shadow-2xl shadow-[#643b9f]/25 sm:px-12 lg:px-16 lg:py-20">
          <Image
            src="/images/contact/consultation.webp"
            alt=""
            fill
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-center"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#29103f]/95 via-[#643b9f]/82 to-[#2563eb]/45" aria-hidden="true" />
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border-[55px] border-white/[0.06]" />
          <div className="absolute bottom-[-6rem] right-[24%] h-56 w-56 rounded-full bg-[#2563eb]/30 blur-3xl" />
          <div className="relative max-w-3xl">
            <h2 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Tell us what you want your business systems to do better.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">We&apos;ll help you identify the right Odoo starting point, scope, and rollout path for your organization.</p>
            <a href="mailto:hello@agsuitetech.com?subject=Odoo%20Consultation%20Request" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#643b9f] shadow-xl transition hover:-translate-y-1 hover:bg-[#f9f4f8]">
              Start a conversation <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <FooterContactForm platform="NetSuite" contentVariant="Odoo" />
    </div>
  );
}
