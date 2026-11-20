"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

import { FAQ } from "@/app/components/home/FAQ";
import FooterContactForm from "@/app/components/shared/FooterContactForm";
import type { OdooAdditionalApp } from "./odooAdditionalAppsData";
import { getOdooAdditionalAppProfile } from "./odooAdditionalAppProfiles";
import { getOdooAppTheme } from "./odooAppThemes";

const links = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Business Value", href: "#business-value" },
  { label: "Compatibility", href: "#compatibility" },
  { label: "Implementation", href: "#implementation" },
  { label: "FAQ", href: "#faq" },
];

const businessValueByCategory: Record<string, Array<{ title: string; description: string }>> = {
  Finance: [
    { title: "Faster financial execution", description: "Reduce avoidable handoffs and give responsible teams a clearer route from source transaction to review, approval, and completion." },
    { title: "Stronger financial control", description: "Apply consistent roles, policies, validation points, and evidence so exceptions are visible and decisions remain traceable." },
    { title: "More reliable reporting", description: "Keep operational and financial information connected so authorized users can review current status without rebuilding disconnected spreadsheets." },
    { title: "Scalable governance", description: "Standardize the core process while retaining the company, currency, tax, localization, and access controls required by the operating model." },
  ],
  Sales: [
    { title: "Consistent customer journeys", description: "Give commercial teams a shared process for customer interactions, pricing, commitments, fulfilment, and follow-through." },
    { title: "Shorter transaction cycles", description: "Reduce repeated entry and manual coordination by connecting the application with the records and teams that act next." },
    { title: "Clear commercial visibility", description: "Track status, ownership, value, exceptions, and customer history through structured records and role-appropriate reporting." },
    { title: "Connected fulfilment", description: "Carry approved commercial information into inventory, service, billing, or finance workflows without rebuilding the transaction." },
  ],
  Websites: [
    { title: "Unified digital operations", description: "Manage content, visitors, registrations, learning, or community activity within the same environment as relevant customer records." },
    { title: "Clear conversion pathways", description: "Design focused journeys that move visitors toward the next useful action while keeping submissions and responses measurable." },
    { title: "Connected audience data", description: "Pass authorized digital interactions into the Odoo applications responsible for sales, service, events, learning, or communication." },
    { title: "Governed publishing", description: "Define ownership, access, review, structure, and publishing responsibilities so digital information stays current and controlled." },
  ],
  "Supply Chain": [
    { title: "Better operational visibility", description: "Give teams a shared view of demand, work, availability, quality, equipment, changes, and exceptions relevant to the application." },
    { title: "Controlled execution", description: "Use defined responsibilities, status changes, approvals, and checks to keep operational work moving through an agreed process." },
    { title: "Stronger traceability", description: "Retain the records, ownership, dates, evidence, and related transactions needed to understand what happened and why." },
    { title: "Connected cost and service", description: "Link operational activity with purchasing, inventory, manufacturing, sales, maintenance, or finance where the wider process requires it." },
  ],
  "Human Resources": [
    { title: "Consistent employee processes", description: "Give employees, managers, and HR teams one governed route for the workforce activity managed by the application." },
    { title: "Faster approvals and response", description: "Make ownership and pending actions visible so routine requests do not depend on disconnected messages or spreadsheets." },
    { title: "Useful workforce visibility", description: "Organize authorized employee, department, schedule, attendance, performance, or payroll information for responsible teams." },
    { title: "Better employee experience", description: "Provide clearer self-service, status, communication, and follow-up while protecting access to sensitive workforce information." },
  ],
  Marketing: [
    { title: "Coordinated engagement", description: "Plan and execute the relevant channel activity through a structured process with clear ownership, audience, timing, and status." },
    { title: "More relevant communication", description: "Use governed customer and audience information to improve targeting while respecting consent, preference, and access requirements." },
    { title: "Measurable performance", description: "Connect activity, response, engagement, and conversion information so teams can evaluate what is working and refine the next action." },
    { title: "Stronger sales handoff", description: "Route qualified responses and customer context into the appropriate CRM or sales workflow instead of leaving them in an isolated tool." },
  ],
  Services: [
    { title: "Easier customer access", description: "Give customers and internal teams a clear way to request, schedule, discuss, record, or review the service activity managed by the app." },
    { title: "Better capacity decisions", description: "Make demand, availability, ownership, workload, and timing visible before teams commit to work." },
    { title: "Traceable service delivery", description: "Keep status, time, communication, evidence, and exceptions connected to the relevant customer, project, or service record." },
    { title: "Connected commercial flow", description: "Link delivered work with CRM, projects, timesheets, helpdesk, sales, or invoicing when the end-to-end process requires it." },
  ],
  Productivity: [
    { title: "One place for shared work", description: "Keep relevant conversations, documents, knowledge, calls, devices, or automated assistance connected to business context." },
    { title: "Less context switching", description: "Help users act from the records and workflows they already use instead of repeatedly moving information between disconnected tools." },
    { title: "Controlled collaboration", description: "Apply role-based access, ownership, retention, and review expectations to the information handled by the application." },
    { title: "Practical automation", description: "Use supported automation to reduce repetitive coordination while keeping important decisions visible to responsible users." },
  ],
};

export default function OdooDirectoryAppTemplate({ app }: { app: OdooAdditionalApp }) {
  const [activeSection, setActiveSection] = useState("");
  const appTheme = getOdooAppTheme(app.slug);
  const profile = getOdooAdditionalAppProfile(app.slug);
  const businessValues = businessValueByCategory[app.category];
  const appThemeStyle = { "--app-primary": appTheme.primary, "--app-secondary": appTheme.secondary } as CSSProperties;
  const logo = `/images/odoo-apps/all/${app.slug}.svg`;
  const verdict = `${app.description} It is designed for ${app.bestFor.charAt(0).toLowerCase()}${app.bestFor.slice(1)} AGSuite implements the app as an official Odoo Partner, covering process design, configuration, access, data preparation, integration, testing, training, and go-live support. The final scope depends on your Odoo edition, version, hosting model, localization, and connected applications.`;
  const faqs = [
    { q: `What is ${app.name}?`, a: `${app.name} is an Odoo ${app.category.toLowerCase()} application. ${app.description} It shares users, permissions, contacts, activities, and related business data with authorized Odoo applications.` },
    { q: `Who should use ${app.name}?`, a: app.bestFor },
    profile.faq,
    { q: `Is ${app.name} available in Odoo Community Edition?`, a: app.edition },
    { q: `Can AGSuite configure and customize ${app.name}?`, a: `Yes. AGSuite can configure standard workflows, roles, access, automation, reports, data, and integrations. Custom development is recommended only when a validated requirement cannot be met through standard configuration or a reasonable process change.` },
    { q: `Can data be migrated into ${app.name}?`, a: `Yes, when the source data is accessible and suitable for import. AGSuite defines the data scope, cleans and maps records, runs trial loads, validates results, documents exceptions, and reconciles the production migration.` },
    { q: `How long does a ${app.name} implementation take?`, a: `The timeline depends on users, process complexity, source data, integrations, localization, customization, testing, and training. AGSuite confirms the schedule after discovery rather than applying an unsupported fixed duration.` },
  ];

  useEffect(() => {
    const ids = links.map((link) => link.href.slice(1));
    const update = () => {
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
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    applicationCategory: profile.applicationCategory,
    operatingSystem: "Web browser",
    description: verdict,
    publisher: { "@type": "Organization", name: "AGSuite Technologies" },
    featureList: app.features.map((feature) => feature.title),
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <div style={appThemeStyle} className="overflow-x-clip bg-white text-slate-950">
      <script id={`software-schema-${app.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script id={`faq-schema-${app.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#faf7fa] px-6 pb-16 pt-36 lg:pb-20 lg:pt-40">
        <div className="absolute inset-0 -z-20" style={{ backgroundImage: `radial-gradient(circle at 80% 18%, ${appTheme.primary}38, transparent 31%), radial-gradient(circle at 10% 88%, ${appTheme.secondary}24, transparent 29%)` }} />
        <div className="absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(rgba(113,75,103,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(113,75,103,0.065)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
            <h1 className="max-w-2xl bg-gradient-to-r from-black via-slate-800 to-[var(--app-primary)] bg-clip-text text-[clamp(1.5rem,3.4vw,2.8rem)] font-medium leading-[1.2] tracking-[-0.045em] text-transparent">{app.name} Implementation and Configuration</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{verdict}</p>
            <Link href="#contact-form" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--app-primary)] via-[var(--app-secondary)] to-slate-950 px-7 py-4 font-bold text-white shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">Talk to an Odoo expert <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="relative mx-auto flex aspect-[16/10] w-full max-w-[650px] items-center justify-center">
            <div className="absolute inset-[5%] rounded-[42%_58%_54%_46%/45%_42%_58%_55%] bg-gradient-to-br from-[var(--app-primary)] via-[var(--app-secondary)] to-slate-950 shadow-[0_30px_80px_rgba(71,38,64,0.28)]" />
            <div className="absolute left-[12%] top-[12%] h-[76%] w-[76%] rounded-full border border-dashed border-white/35" />
            <div className="absolute right-[8%] top-[6%] h-16 w-16 rounded-full bg-violet-300/30 blur-xl" />
            <div className="relative flex h-36 w-36 items-center justify-center rounded-[2rem] bg-white p-6 shadow-2xl sm:h-44 sm:w-44"><Image src={logo} alt={`${app.name} logo`} width={140} height={140} className="h-full w-full object-contain" priority /></div>
          </motion.div>
        </div>
      </section>

      <nav aria-label={`${app.name} page sections`} style={{ backgroundImage: `linear-gradient(90deg, #080b12, ${appTheme.primary}f2, ${appTheme.secondary}e8)` }} className="sticky top-20 z-40 border-b border-white/10 shadow-lg shadow-black/20 backdrop-blur-xl"><div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-3 [scrollbar-width:none] lg:justify-center">{links.map((link) => { const active = activeSection === link.href.slice(1); return <Link key={link.href} href={link.href} className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold transition sm:text-base ${active ? "bg-white text-[var(--app-primary)] shadow-md shadow-black/15" : "text-white/75 hover:bg-white/10 hover:text-white"}`}>{link.label}</Link>; })}</div></nav>

      <section id="overview" className="scroll-mt-40 px-6 py-20 sm:py-24"><div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--app-primary)]">Odoo {app.category}</p><h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">What does {app.name} do?</h2></div><div><p className="text-xl leading-9 text-slate-700">{app.description}</p><div className="mt-7 rounded-2xl bg-[#f8f5f8] p-6"><h3 className="font-extrabold text-[var(--app-primary)]">Best fit</h3><p className="mt-2 leading-7 text-slate-600">{app.bestFor}</p></div></div></div></section>

      <section id="features" className="relative scroll-mt-40 overflow-hidden bg-[#f8f5f8] px-6 py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-24 top-8 h-64 w-64 rounded-full bg-[var(--app-primary)]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--app-primary)]">Core capabilities</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Which {app.name} features matter most?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">Four focused capabilities to validate against your process, controls, users, and connected Odoo applications.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {app.features.map((feature, index) => (
              <motion.article key={feature.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.35, delay: index * 0.06 }} tabIndex={0} className="group relative min-h-64 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm outline-none transition duration-300 hover:-translate-y-1.5 hover:border-[var(--app-primary)] hover:shadow-xl hover:shadow-slate-300/40 focus-visible:-translate-y-1.5 focus-visible:border-[var(--app-primary)] focus-visible:shadow-xl">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--app-primary)] via-[var(--app-secondary)] to-slate-900 transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-100 to-violet-50 opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[#f3edf2] px-3 py-1 text-xs font-black text-[var(--app-primary)]">{String(index + 1).padStart(2, "0")}</span>
                    <ArrowRight className="h-5 w-5 -translate-x-2 text-[var(--app-primary)] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
                  </div>
                  <h3 className="mt-8 text-xl font-extrabold tracking-tight text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{feature.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="business-value" className="scroll-mt-40 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--app-primary)]">Business value</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">What can {app.name} improve?</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{app.name} creates the most value when its workflow, ownership, data, controls, and connected applications are designed together. For {app.bestFor.charAt(0).toLowerCase()}{app.bestFor.slice(1)}, the following outcomes provide a practical basis for scope and success measures.</p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {businessValues.map((value, index) => (
              <article key={value.title} className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[var(--app-primary)] via-[var(--app-secondary)] to-slate-900" />
                <span className="text-xs font-black tracking-[0.18em] text-[var(--app-primary)]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-5 text-xl font-extrabold tracking-tight">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-14 rounded-[2rem] bg-[#f8f5f8] p-7 sm:p-10">
            <div className="max-w-3xl">
              <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] font-medium leading-tight tracking-[-0.04em]">How does {app.name} fit into your operating model?</h2>
              <p className="mt-4 leading-8 text-slate-600">A dependable implementation considers the application itself and the surrounding records, responsibilities, systems, and controls. These three areas should be confirmed during discovery.</p>
            </div>
            <div className="mt-9 grid gap-5 lg:grid-cols-3">
              <article className="rounded-2xl border border-white bg-white/85 p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[var(--app-primary)]">Process scope</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">Validate how {app.features.map((feature) => feature.title.toLowerCase()).join(", ")} support the target process, including ownership, exceptions, approvals, and reporting.</p>
              </article>
              <article className="rounded-2xl border border-white bg-white/85 p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[var(--app-primary)]">Data readiness</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{profile.dataRequirements}</p>
              </article>
              <article className="rounded-2xl border border-white bg-white/85 p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[var(--app-primary)]">Connected applications</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{profile.integrations}</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="compatibility" className="scroll-mt-40 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Is {app.name} compatible with Odoo Community Edition?</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{app.edition}</p>
            <a href="https://www.odoo.com/documentation/20.0/" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 font-bold text-[var(--app-primary)]">Review official Odoo 20 documentation <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
            <table className="w-full border-collapse text-left"><tbody>{[
              ["Application category", profile.applicationCategory],
              ["Target versions", "Odoo 18, 19, and 20; validate app availability, localization, installed modules, and custom code for the selected release."],
              ["Edition", app.edition],
              ["Dependencies", profile.dependencies],
              ["Common integrations", profile.integrations],
              ["Data readiness", profile.dataRequirements],
              ["Security", "Named users, role-based access, least privilege, audit requirements, and tested approvals."],
            ].map(([label, value]) => <tr key={label} className="border-t border-slate-100 first:border-0"><th className="w-[28%] bg-slate-50 px-5 py-4 text-sm font-extrabold">{label}</th><td className="px-5 py-4 text-sm leading-6 text-slate-600">{value}</td></tr>)}</tbody></table>
          </div>
        </div>
      </section>

      <section id="implementation" className="relative scroll-mt-40 overflow-hidden bg-[#160e15] px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(113,75,103,0.68),transparent_32%),radial-gradient(circle_at_8%_92%,rgba(124,58,237,0.22),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl"><h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">How does AGSuite implement {app.name}?</h2><p className="mt-5 text-lg leading-8 text-white/65">The scope stays focused on the workflow, data, integrations, controls, and users required for a dependable launch.</p></div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{[["Discover", "Confirm requirements, owners, data, controls, integrations, and success criteria."], ["Configure", "Set up standard capabilities and document any justified extension requirements."], ["Validate", "Test roles, workflows, data, exceptions, integrations, and user acceptance."], ["Launch", "Train users, complete cutover, provide hypercare, and prioritize improvements."]].map(([title, stepText], index) => <li key={title} className="rounded-2xl border border-white/10 bg-white/[0.06] p-6"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-black text-[var(--app-primary)]">{index + 1}</span><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-white/65">{stepText}</p></li>)}</ol>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.06] p-6 sm:p-8"><h3 className="text-xl font-extrabold">App-specific implementation priorities</h3><ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{profile.implementationFocus.map((item) => <li key={item} className="flex items-start gap-3 text-sm font-semibold text-white/80"><CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-violet-300" />{item}</li>)}</ul></div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{["Edition and hosting confirmed", "Critical workflows tested", "Migration results reconciled", "Users trained by role"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-4"><CircleCheckBig className="h-5 w-5 shrink-0 text-violet-300" /><span className="text-sm font-semibold">{item}</span></div>)}</div>
        </div>
      </section>

      <FAQ variant="odoo" layout="sidebar" id="faq" customFaqs={faqs} customSubtitle={`Direct answers about ${app.name}, edition fit, configuration, migration, integrations, and implementation.`} stickyTopClass="lg:top-40" />
      <section className="bg-white px-6 py-16"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 rounded-[2rem] bg-gradient-to-br from-[var(--app-primary)] via-slate-900 to-black px-8 py-14 text-white shadow-2xl sm:px-12 lg:flex-row lg:items-center lg:px-16"><div className="max-w-3xl"><h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-5xl">Plan a practical {app.name} rollout</h2><p className="mt-5 text-lg leading-8 text-white/70">Get a recommendation covering edition, configuration, data, integrations, risks, effort, and next steps.</p></div><Link href="#contact-form" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#4a2944]">Request an assessment <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link></div></section>
      <div id="contact-form" className="scroll-mt-40"><FooterContactForm platform="NetSuite" contentVariant="Odoo" /></div>
    </div>
  );
}
