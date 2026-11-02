"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Network } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";

import FooterContactForm from "@/app/components/shared/FooterContactForm";

type CatalogApp = {
  name: string;
  slug: string;
  description: string;
};

type CatalogGroup = {
  id: string;
  title: string;
  intro: string;
  accent: string;
  apps: CatalogApp[];
};

const groups: CatalogGroup[] = [
  {
    id: "finance",
    title: "Finance",
    intro: "Manage financial activity, documents, reporting, and responsible business data in connected workflows.",
    accent: "from-emerald-500 to-teal-700",
    apps: [
      { name: "Accounting", slug: "accounting", description: "Manage bookkeeping, reconciliation, taxes, payments, and financial reporting." },
      { name: "Invoicing", slug: "invoicing", description: "Create customer invoices, track payments, and automate payment follow-ups." },
      { name: "Expenses", slug: "expenses", description: "Capture receipts, approve employee expenses, and prepare reimbursements." },
      { name: "Sign", slug: "sign", description: "Send, sign, and track business documents through a digital workflow." },
      { name: "Spreadsheet", slug: "spreadsheet", description: "Analyze live Odoo data using collaborative business spreadsheets." },
      { name: "ESG", slug: "esg", description: "Track environmental, social, and governance metrics for structured reporting." },
    ],
  },
  {
    id: "sales",
    title: "Sales",
    intro: "Connect customer relationships, commercial offers, recurring revenue, retail sales, and rental operations.",
    accent: "from-violet-500 to-purple-700",
    apps: [
      { name: "CRM", slug: "crm", description: "Manage leads, opportunities, activities, communication, and sales forecasts." },
      { name: "Sales", slug: "sales", description: "Create quotations, manage pricing, confirm orders, and coordinate fulfilment." },
      { name: "Subscriptions", slug: "subscriptions", description: "Manage recurring plans, renewals, billing schedules, and customer contracts." },
      { name: "POS Shop", slug: "pos-shop", description: "Run fast retail checkout connected with products, customers, and inventory." },
      { name: "POS Restaurant", slug: "pos-restaurant", description: "Coordinate restaurant orders, tables, payments, kitchens, and service." },
      { name: "Rental", slug: "rental", description: "Schedule rental products, quotations, availability, pickup, and returns." },
    ],
  },
  {
    id: "websites",
    title: "Websites",
    intro: "Build customer-facing digital experiences that remain connected with the rest of your Odoo operations.",
    accent: "from-cyan-500 to-sky-700",
    apps: [
      { name: "Website Builder", slug: "website-builder", description: "Create responsive business pages and forms with visual editing tools." },
      { name: "eCommerce", slug: "ecommerce", description: "Run an online store connected with products, prices, stock, and orders." },
      { name: "Events", slug: "events", description: "Publish events and manage registrations, tickets, attendees, and communication." },
      { name: "Blog", slug: "blog", description: "Publish organized content that supports brand visibility and audience engagement." },
      { name: "eLearning", slug: "elearning", description: "Create online courses, lessons, certifications, and learner communities." },
      { name: "Forum", slug: "forum", description: "Build a moderated question-and-answer community around shared knowledge." },
    ],
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    intro: "Coordinate stock, procurement, production, equipment, product changes, and quality from one operational platform.",
    accent: "from-amber-500 to-orange-700",
    apps: [
      { name: "Inventory", slug: "inventory", description: "Track stock, warehouses, receipts, transfers, deliveries, and replenishment." },
      { name: "Manufacturing", slug: "manufacturing", description: "Plan production using bills of materials, work orders, and capacity." },
      { name: "Maintenance", slug: "maintenance", description: "Schedule preventive work and manage equipment maintenance requests." },
      { name: "PLM", slug: "plm", description: "Control engineering changes, product versions, approvals, and documentation." },
      { name: "Quality", slug: "quality", description: "Define quality checks, record issues, and manage corrective actions." },
      { name: "Purchase", slug: "purchase", description: "Manage suppliers, requests for quotation, purchase orders, and approvals." },
    ],
  },
  {
    id: "human-resources",
    title: "Human Resources",
    intro: "Support the employee lifecycle with shared people data, workforce processes, development, and mobility information.",
    accent: "from-rose-500 to-pink-700",
    apps: [
      { name: "Employees", slug: "employees", description: "Maintain employee profiles, departments, roles, managers, and documents." },
      { name: "Payroll", slug: "payroll", description: "Coordinate salary structures, payslips, work entries, and payroll processing." },
      { name: "Recruitment", slug: "recruitment", description: "Manage vacancies, applicants, interview stages, and hiring activities." },
      { name: "Time Off", slug: "time-off", description: "Manage leave requests, approvals, allocations, calendars, and balances." },
      { name: "Appraisals", slug: "appraisals", description: "Plan employee reviews, feedback cycles, goals, and development discussions." },
      { name: "Fleet", slug: "fleet", description: "Track company vehicles, contracts, services, costs, and driver assignments." },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    intro: "Reach audiences across channels and connect campaign activity with leads, customers, and measurable business outcomes.",
    accent: "from-fuchsia-500 to-pink-700",
    apps: [
      { name: "Social Marketing", slug: "social-marketing", description: "Plan social posts, monitor activity, and review audience engagement." },
      { name: "Email Marketing", slug: "email-marketing", description: "Design campaigns, manage audiences, and track email performance." },
      { name: "SMS Marketing", slug: "sms-marketing", description: "Deliver targeted text campaigns and monitor recipient engagement." },
      { name: "Marketing Automation", slug: "marketing-automation", description: "Build automated audience journeys using triggers and timed actions." },
      { name: "WhatsApp", slug: "whatsapp", description: "Connect WhatsApp conversations and approved templates with customer workflows." },
      { name: "Surveys", slug: "surveys", description: "Create surveys, collect responses, score answers, and analyze feedback." },
    ],
  },
  {
    id: "services",
    title: "Services",
    intro: "Plan work, allocate people, capture time, schedule customer interactions, and deliver responsive support.",
    accent: "from-blue-500 to-indigo-700",
    apps: [
      { name: "Project", slug: "project", description: "Organize tasks, milestones, collaboration, delivery progress, and profitability." },
      { name: "Timesheets", slug: "timesheets", description: "Record time against projects, tasks, customers, and billable activities." },
      { name: "Planning", slug: "planning", description: "Schedule shifts and resources while reviewing availability and workload." },
      { name: "Appointments", slug: "appointments", description: "Let customers book available time slots with the right team members." },
      { name: "Live Chat", slug: "live-chat", description: "Engage website visitors in real time and route conversations effectively." },
      { name: "Helpdesk", slug: "helpdesk", description: "Manage support tickets, priorities, service targets, and customer communication." },
    ],
  },
  {
    id: "productivity",
    title: "Productivity",
    intro: "Give teams practical tools for communication, intelligence, connected devices, documents, and organizational knowledge.",
    accent: "from-slate-600 to-violet-700",
    apps: [
      { name: "Artificial Intelligence", slug: "artificial-intelligence", description: "Use embedded AI assistance to support everyday business work and analysis." },
      { name: "Discuss", slug: "discuss", description: "Bring internal messages, channels, notifications, and team communication together." },
      { name: "VoIP", slug: "voip", description: "Place and manage business calls directly from connected Odoo records." },
      { name: "IoT", slug: "iot", description: "Connect supported devices with manufacturing, quality, logistics, and operations." },
      { name: "Documents", slug: "documents", description: "Organize, share, request, and process documents in structured workspaces." },
      { name: "Knowledge", slug: "knowledge", description: "Create collaborative articles, procedures, guides, and internal knowledge bases." },
    ],
  },
];

const appCount = groups.reduce((count, group) => count + group.apps.length, 0);

const sectionThemes = [
  { background: "bg-gradient-to-br from-emerald-50 via-white to-teal-50", dark: false },
  { background: "bg-gradient-to-br from-[#160e15] via-[#2b1730] to-[#442044]", dark: true },
  { background: "bg-gradient-to-br from-cyan-50 via-white to-sky-100/70", dark: false },
  { background: "bg-gradient-to-br from-[#17130d] via-[#302414] to-[#4a2d16]", dark: true },
  { background: "bg-gradient-to-br from-rose-50 via-white to-pink-100/60", dark: false },
  { background: "bg-gradient-to-br from-[#190d19] via-[#341334] to-[#541b48]", dark: true },
  { background: "bg-gradient-to-br from-blue-50 via-white to-indigo-100/60", dark: false },
  { background: "bg-gradient-to-br from-[#0f1220] via-[#1d2140] to-[#32245c]", dark: true },
] as const;

function AppCard({ app, accent }: { app: CatalogApp; accent: string }) {
  const routeSlug = app.slug === "website-builder" ? "website" : app.slug === "project" ? "projects" : app.slug;

  return (
    <Link
      href={`/odoo/apps/${routeSlug}`}
      aria-label={`Explore ${app.name}`}
      className="group relative min-h-40 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm outline-none transition duration-300 hover:-translate-y-1 hover:border-[#714b67]/25 hover:shadow-xl hover:shadow-[#714b67]/10 focus-visible:-translate-y-1 focus-visible:border-[#714b67]/30 focus-visible:shadow-xl"
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`} />
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-purple-50/80 opacity-0 transition duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
      <div className="relative flex min-h-28 flex-col items-center justify-center text-center">
        <Image
          src={`/images/odoo-apps/all/${app.slug}.svg`}
          alt={`${app.name} app logo`}
          width={54}
          height={54}
          className="h-13 w-13 object-contain transition duration-300 group-hover:scale-105 group-focus-visible:scale-105"
        />
        <h3 className="mt-4 text-base font-extrabold text-slate-900">{app.name}</h3>
        <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-[#714b67] opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">View app <ArrowRight className="h-3.5 w-3.5" /></span>
      </div>
    </Link>
  );
}

export default function OdooAppsCatalog() {
  const [activeSection, setActiveSection] = useState(groups[0].id);
  const navigationLock = useRef<string | null>(null);
  const navigationTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      if (navigationLock.current) return;

      const activationLine = 170;
      let currentSection = groups[0].id;

      for (const group of groups) {
        const section = document.getElementById(group.id);
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentSection = group.id;
        } else {
          break;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      if (navigationTimer.current) clearTimeout(navigationTimer.current);
    };
  }, []);
  const handleCategoryClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    navigationLock.current = sectionId;
    setActiveSection(sectionId);
    window.history.replaceState(null, "", `#${sectionId}`);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });

    if (navigationTimer.current) clearTimeout(navigationTimer.current);
    navigationTimer.current = setTimeout(() => {
      setActiveSection(sectionId);
      navigationLock.current = null;
    }, 1000);
  };

  return (
    <div className="overflow-x-clip bg-white text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#f8f5f8] px-6 pb-20 pt-32 lg:pb-24 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_18%,rgba(113,75,103,0.20),transparent_28%),radial-gradient(circle_at_12%_88%,rgba(124,58,237,0.10),transparent_30%)]" />
        <div className="absolute inset-0 -z-10 opacity-40 [background-image:linear-gradient(rgba(113,75,103,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(113,75,103,0.07)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_bottom,black,transparent_95%)]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-7 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <Link href="/odoo" className="transition hover:text-[#714b67]">Odoo</Link>
              <span>/</span>
              <span className="text-[#714b67]">Business Apps</span>
            </div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#714b67]">{appCount} connected applications</p>
            <h1 className="mt-4 max-w-2xl bg-gradient-to-r from-black via-slate-800 to-[#714b67] bg-clip-text text-[clamp(1.5rem,3.4vw,2.8rem)] font-medium leading-[1.2] tracking-[-0.045em] text-transparent">
              Explore the complete Odoo business app ecosystem
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Choose focused applications for each team and connect them through one shared Odoo environment as your requirements grow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#catalog" className="inline-flex items-center gap-2 rounded-full bg-[#714b67] px-7 py-4 font-bold text-white shadow-lg shadow-[#714b67]/20 transition hover:bg-[#5d3e56]">
                Browse the catalogue <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#contact-form" className="rounded-full border border-slate-300 bg-white px-7 py-4 font-bold text-slate-800 transition hover:border-[#714b67] hover:text-[#714b67]">
                Plan your Odoo suite
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-7 rounded-[3rem] bg-gradient-to-br from-[#714b67]/20 via-violet-300/10 to-transparent blur-2xl" />
            <div className="relative grid grid-cols-2 gap-3 rounded-[2rem] border border-white/90 bg-white/80 p-5 shadow-[0_30px_80px_rgba(71,38,64,0.18)] backdrop-blur sm:grid-cols-4 sm:p-7">
              {groups.map((group) => (
                <Link key={group.id} href={`#${group.id}`} className="group rounded-2xl border border-[#714b67]/10 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex justify-center gap-1.5">
                    {group.apps.slice(0, 3).map((app) => (
                      <Image key={app.slug} src={`/images/odoo-apps/all/${app.slug}.svg`} alt="" width={28} height={28} className="h-7 w-7 object-contain" />
                    ))}
                  </div>
                  <p className="mt-3 text-sm font-extrabold text-slate-800 transition group-hover:text-[#714b67]">{group.title}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-400">6 apps</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <nav aria-label="Odoo app categories" className="sticky top-20 z-40 border-b border-violet-300/20 bg-gradient-to-r from-[#211121]/95 via-[#714b67]/95 to-[#4c1d6f]/95 shadow-lg shadow-[#2b1328]/20 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 py-3 [scrollbar-width:none] lg:justify-center">
          {groups.map((group) => (
            <Link
              key={group.id}
              href={`#${group.id}`}
              onClick={(event) => handleCategoryClick(event, group.id)}
              aria-current={activeSection === group.id ? "location" : undefined}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold transition-all duration-300 ${
                activeSection === group.id
                  ? "bg-white text-[#714b67] shadow-md shadow-black/15"
                  : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {group.title}
            </Link>
          ))}
        </div>
      </nav>

      <div id="catalog" className="scroll-mt-32">
        {groups.map((group, index) => {
          const theme = sectionThemes[index % sectionThemes.length];
          return (
          <section key={group.id} id={group.id} className={`scroll-mt-40 px-6 py-16 sm:py-20 ${theme.background}`}>
            <div className="mx-auto max-w-7xl">
              <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-3xl">
                  <div className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${group.accent}`} />
                  <h2 className={`mt-5 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em] ${theme.dark ? "text-white" : "text-slate-950"}`}>{group.title}</h2>
                  <p className={`mt-4 max-w-2xl leading-7 ${theme.dark ? "text-white/70" : "text-slate-600"}`}>{group.intro}</p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {group.apps.map((app) => <AppCard key={app.slug} app={app} accent={group.accent} />)}
              </div>
            </div>
          </section>
          );
        })}
      </div>

      <section className="relative overflow-hidden bg-[#160e15] px-6 py-20 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(113,75,103,0.65),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(109,40,217,0.2),transparent_28%)]" />
        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <Network className="h-9 w-9 text-violet-300" />
            <p className="mt-5 text-sm font-black uppercase tracking-[0.2em] text-violet-300">One connected platform</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Connect the apps your teams need without creating new data silos</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">We help you choose the right starting scope, connect shared workflows, and expand Odoo through a practical phased roadmap.</p>
          </div>
          <Link href="#contact-form" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#4a2944] transition hover:bg-violet-50">
            Talk to an Odoo expert <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      <div id="contact-form" className="scroll-mt-28">
        <FooterContactForm platform="NetSuite" contentVariant="Odoo" />
      </div>
    </div>
  );
}
