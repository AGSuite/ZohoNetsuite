"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, CircleCheckBig, ExternalLink } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

import { FAQ } from "@/app/components/home/FAQ";
import FooterContactForm from "@/app/components/shared/FooterContactForm";
import { defaultOdooAppSeoProfile, odooAppSeoProfiles } from "./odooAppSeoData";
import { getOdooAppTheme } from "./odooAppThemes";

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

const pageLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Features", href: "#features" },
  { label: "Compatibility", href: "#compatibility" },
  { label: "Business Value", href: "#benefits" },
  { label: "Implementation", href: "#implementation" },
  { label: "FAQ", href: "#faq" },
];

const implementationSteps = [
  { title: "Discover", description: "Confirm users, workflows, controls, data, integrations, reports, and measurable success criteria." },
  { title: "Design", description: "Define the target process, edition, hosting, configuration, security, migration, and test plan." },
  { title: "Configure", description: "Set up the application in controlled iterations and review each workflow with process owners." },
  { title: "Validate", description: "Complete data reconciliation, integration testing, role testing, user acceptance, and cutover rehearsal." },
  { title: "Launch", description: "Train users, execute cutover, monitor adoption, resolve early issues, and prioritize improvements." },
];

export default function OdooAppProductTemplate({
  appName,
  appLogo,
  title,
  description,
  heroImage,
  overviewImage,
  overviewTitle,
  overviewParagraphs,
  capabilities,
  benefits,
  engagementPoints,
  faqs,
}: OdooAppTemplateProps) {
  const profile = odooAppSeoProfiles[appName] ?? defaultOdooAppSeoProfile;
  const appTheme = getOdooAppTheme(appName);
  const appThemeStyle = { "--app-primary": appTheme.primary, "--app-secondary": appTheme.secondary } as CSSProperties;
  const [activeBenefit, setActiveBenefit] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  const selectedBenefit = benefits[activeBenefit];
  const visibleCapabilities = showAllFeatures ? capabilities : capabilities.slice(0, 6);

  useEffect(() => {
    const ids = pageLinks.map((link) => link.href.slice(1));
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

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: appName,
    applicationCategory: profile.appCategory,
    operatingSystem: "Web browser; deployment depends on the selected Odoo hosting model",
    description: profile.verdict,
    publisher: { "@type": "Organization", name: "AGSuite Technologies" },
  };

  return (
    <div style={appThemeStyle} className="overflow-x-clip bg-white text-slate-950">
      <script id={`software-schema-${appName.toLowerCase().replaceAll(" ", "-")}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />

      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-[#faf7fa] px-6 pb-16 pt-36 lg:pb-20 lg:pt-40">
        <div className="absolute inset-0 -z-20" style={{ backgroundImage: `radial-gradient(circle at 80% 18%, ${appTheme.primary}38, transparent 31%), radial-gradient(circle at 10% 88%, ${appTheme.secondary}24, transparent 29%)` }} />
        <div className="absolute inset-0 -z-10 opacity-45 [background-image:linear-gradient(rgba(113,75,103,0.065)_1px,transparent_1px),linear-gradient(90deg,rgba(113,75,103,0.065)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_94%)]" />
        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-14">
          <motion.div initial={{ opacity: 0, x: -28 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.65 }}>
            <h1 className="max-w-2xl bg-gradient-to-r from-black via-slate-800 to-[var(--app-primary)] bg-clip-text text-[clamp(1.5rem,3.4vw,2.8rem)] font-medium leading-[1.2] tracking-[-0.045em] text-transparent">{title}</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">{profile.verdict}</p>
            <Link href="#contact-form" className="group mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[var(--app-primary)] via-[var(--app-secondary)] to-slate-950 px-7 py-4 font-bold text-white shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/30">
              Talk to an Odoo expert <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.1 }} className="relative mx-auto w-full max-w-[650px]">
            <div className="absolute -inset-10 rounded-[42%_58%_54%_46%/45%_42%_58%_55%] blur-2xl" style={{ backgroundImage: `linear-gradient(135deg, ${appTheme.primary}3d, ${appTheme.secondary}24, transparent)` }} />
            <div className="absolute -right-4 -top-5 h-20 w-20 rounded-full border-2 border-dashed border-slate-300" />
            <div className="absolute -bottom-5 -left-4 grid h-16 w-16 grid-cols-3 gap-1 rounded-2xl bg-white/70 p-3 shadow-lg backdrop-blur" aria-hidden="true">{Array.from({ length: 9 }).map((_, index) => <span key={index} className="h-1.5 w-1.5 rounded-full bg-[var(--app-primary)]/45" />)}</div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white via-[#fbf8fb] to-[#f0e8f6] p-3 shadow-[0_30px_80px_rgba(71,38,64,0.20)]">
              <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-white"><Image src={heroImage} alt={`${appName} application interface`} fill priority className="object-contain object-center p-1 transition duration-700 hover:scale-[1.025]" sizes="(max-width: 1024px) 100vw, 50vw" /></div>
            </div>
          </motion.div>
        </div>
      </section>

      <nav aria-label={`${appName} page sections`} style={{ backgroundImage: `linear-gradient(90deg, #080b12, ${appTheme.primary}f2, ${appTheme.secondary}e8)` }} className="sticky top-20 z-40 border-b border-white/10 shadow-lg shadow-black/20 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="flex items-center gap-1 overflow-x-auto py-3 [scrollbar-width:none] lg:justify-center">{pageLinks.map((link) => { const active = activeSection === link.href.slice(1); return <Link key={link.href} href={link.href} className={`whitespace-nowrap rounded-lg px-4 py-2 text-sm font-bold transition sm:text-base ${active ? "bg-white text-[var(--app-primary)] shadow-md shadow-black/15" : "text-white/75 hover:bg-white/10 hover:text-white"}`}>{link.label}</Link>; })}</div></div>
      </nav>

      <section id="overview" className="scroll-mt-40 px-6 py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }} className="relative"><div className="absolute -left-5 -top-5 h-36 w-36 rounded-full bg-violet-200/60 blur-3xl" /><div className="relative aspect-[3/2] overflow-hidden rounded-[2rem] bg-[#f3edf2] shadow-2xl shadow-slate-300/50"><Image src={overviewImage} alt={`${appName} business workflow`} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 48vw" /></div></motion.div>
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">What does {appName} do?</h2>
            <h3 className="mt-5 text-xl font-extrabold text-[var(--app-primary)]">{overviewTitle}</h3>
            <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>
            <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">{overviewParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="mt-7 rounded-xl bg-[#f8f5f8] p-5"><p className="text-sm font-black uppercase tracking-[0.16em] text-[var(--app-primary)]">Best fit</p><p className="mt-2 leading-7 text-slate-700">{profile.bestFor}</p></div>
          </motion.div>
        </div>
      </section>

      <section id="features" className="relative scroll-mt-40 overflow-hidden bg-[#f8f5f8] px-6 py-20 sm:py-24">
        <div className="pointer-events-none absolute -right-28 top-16 h-72 w-72 rounded-full bg-[var(--app-primary)]/10 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 h-64 w-64 rounded-full bg-violet-300/15 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[var(--app-primary)]">Core capabilities</p>
              <h2 className="mt-4 text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Which {appName} features matter most?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Start with the capabilities that support your critical workflow. Add the rest only when the process requires them.</p>
            </div>
            <div className="w-fit rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-[var(--app-primary)] shadow-sm">{capabilities.length} available capabilities</div>
          </div>

          <motion.div layout className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence initial={false}>
              {visibleCapabilities.map((capability, index) => (
                <motion.article
                  layout
                  key={capability.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3, delay: Math.min(index, 5) * 0.04 }}
                  tabIndex={0}
                  className="group relative min-h-56 overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm outline-none transition duration-300 hover:-translate-y-1.5 hover:border-[var(--app-primary)] hover:shadow-xl hover:shadow-slate-300/40 focus-visible:-translate-y-1.5 focus-visible:border-[var(--app-primary)] focus-visible:shadow-xl"
                >
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[var(--app-primary)] via-[var(--app-secondary)] to-slate-900 transition-transform duration-500 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-purple-100 to-violet-50 opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100" />
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#f3edf2] px-3 py-1 text-xs font-black text-[var(--app-primary)]">{String(index + 1).padStart(2, "0")}</span>
                      <ArrowRight className="h-5 w-5 -translate-x-2 text-[var(--app-primary)] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100" />
                    </div>
                    <h3 className="mt-8 text-xl font-extrabold tracking-tight text-slate-900">{capability.title}</h3>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{capability.description}</p>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {capabilities.length > 6 && (
            <div className="mt-10 text-center">
              <button type="button" onClick={() => setShowAllFeatures((current) => !current)} className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-[var(--app-primary)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--app-primary)] hover:shadow-lg">
                {showAllFeatures ? "Show key features only" : `View all ${capabilities.length} features`}
                <span className={`text-lg transition-transform duration-300 ${showAllFeatures ? "rotate-45" : ""}`}>+</span>
              </button>
            </div>
          )}
        </div>
      </section>

      <section id="compatibility" className="scroll-mt-40 px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div><h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">Is {appName} compatible with Odoo Community Edition?</h2><p className="mt-6 text-lg leading-8 text-slate-600">{profile.edition}</p><p className="mt-5 leading-7 text-slate-600">AGSuite verifies the edition, target version, hosting model, localization, dependencies, and custom modules before confirming scope. This prevents licensing assumptions and upgrade conflicts from entering the build.</p><div className="mt-7 flex flex-wrap gap-3"><a href="https://www.odoo.com/page/editions" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-[var(--app-primary)] transition hover:bg-purple-50">Official edition comparison <ExternalLink className="h-4 w-4" /></a><a href="https://www.odoo.com/documentation/19.0/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50">Odoo documentation <ExternalLink className="h-4 w-4" /></a></div></div>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50"><table className="w-full border-collapse text-left"><thead className="bg-slate-950 text-white"><tr><th className="w-[32%] px-5 py-4 text-sm font-black">Technical factor</th><th className="px-5 py-4 text-sm font-black">Requirement</th></tr></thead><tbody>{[["Edition", profile.edition], ["Supported target versions", profile.versions], ["Hosting", profile.hosting], ["Dependencies", profile.dependencies], ["Common integrations", profile.integrations], ["Data readiness", profile.dataRequirements]].map(([label, value]) => <tr key={label} className="border-t border-slate-100 align-top"><th className="px-5 py-4 text-sm font-extrabold text-slate-900">{label}</th><td className="px-5 py-4 text-sm leading-6 text-slate-600">{value}</td></tr>)}</tbody></table></div>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative scroll-mt-40 overflow-hidden bg-[#160e15] px-6 py-20 text-white sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(113,75,103,0.65),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(124,58,237,0.22),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl"><div className="max-w-3xl"><h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">What business problems does {appName} solve?</h2><p className="mt-5 text-lg leading-8 text-white/65">These outcomes depend on process design, data quality, adoption, integration reliability, and the agreed implementation scope.</p></div><div className="mt-12 grid gap-10 lg:grid-cols-[0.88fr_1.12fr]"><div className="space-y-3">{benefits.map((benefit, index) => <button key={benefit.title} type="button" onClick={() => setActiveBenefit(index)} className={`w-full rounded-2xl border px-5 py-5 text-left transition ${activeBenefit === index ? "border-violet-300/50 bg-white text-slate-950" : "border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.08]"}`}><span className="flex items-center justify-between gap-4"><span className="font-bold">{benefit.title}</span><ArrowRight className={`h-4 w-4 shrink-0 ${activeBenefit === index ? "text-[var(--app-primary)]" : "text-white/50"}`} /></span></button>)}</div><div className="min-h-[480px] overflow-hidden rounded-[2rem] border border-white/10 bg-white text-slate-950 shadow-2xl"><AnimatePresence mode="wait"><motion.div key={selectedBenefit.title} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -14 }} transition={{ duration: 0.3 }}><div className="relative h-64 bg-slate-100"><Image src={selectedBenefit.image} alt={selectedBenefit.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" /><div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" /></div><div className="p-7 sm:p-9"><h3 className="text-2xl font-black">{selectedBenefit.title}</h3><p className="mt-3 leading-7 text-slate-600">{selectedBenefit.description}</p><ul className="mt-6 grid gap-3 sm:grid-cols-2">{selectedBenefit.points.map((point) => <li key={point} className="flex items-start gap-2 text-sm font-semibold text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--app-primary)]" />{point}</li>)}</ul></div></motion.div></AnimatePresence></div></div></div>
      </section>

      <section id="implementation" className="scroll-mt-40 bg-[#f8f5f8] px-6 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl"><h2 className="text-[clamp(1.8rem,3.8vw,3rem)] font-medium leading-tight tracking-[-0.04em]">How does AGSuite implement {appName}?</h2><p className="mt-5 text-lg leading-8 text-slate-600">AGSuite is an official Odoo Partner. The implementation follows five controlled steps with named business owners, documented acceptance criteria, and production-readiness checks.</p></div>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{implementationSteps.map((step, index) => <li key={step.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--app-primary)] text-sm font-black text-white">{index + 1}</span><h3 className="mt-5 text-xl font-extrabold">{step.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p></li>)}</ol>
          <div className="mt-10 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"><div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-300/40 sm:p-10"><h3 className="text-2xl font-black">Scope checklist</h3><ul className="mt-6 grid gap-4 sm:grid-cols-2">{engagementPoints.map((point) => <li key={point} className="flex items-start gap-3 font-semibold text-slate-700"><CircleCheckBig className="mt-0.5 h-5 w-5 shrink-0 text-[var(--app-primary)]" />{point}</li>)}</ul></div><div className="rounded-[2rem] bg-gradient-to-br from-[var(--app-primary)] via-slate-900 to-black p-8 text-white shadow-xl sm:p-10"><h3 className="text-2xl font-black">Delivery controls, not vague promises</h3><div className="mt-6 grid grid-cols-3 gap-3"><div className="rounded-xl bg-white/10 p-3"><p className="text-2xl font-black">100%</p><p className="mt-1 text-xs leading-5 text-white/65">Scoped critical workflows require test evidence</p></div><div className="rounded-xl bg-white/10 p-3"><p className="text-2xl font-black">2+</p><p className="mt-1 text-xs leading-5 text-white/65">Validation cycles when migration is in scope</p></div><div className="rounded-xl bg-white/10 p-3"><p className="text-2xl font-black">5</p><p className="mt-1 text-xs leading-5 text-white/65">Controlled implementation stages</p></div></div><p className="mt-6 text-sm leading-6 text-white/65">Business outcome targets are agreed after baseline measurement. They are not presented as universal software guarantees.</p></div></div>
        </div>
      </section>

      <FAQ variant="odoo" layout="sidebar" id="faq" customFaqs={faqs} customSubtitle={`Direct answers about ${appName}, edition fit, implementation, migration, integration, and ongoing support.`} stickyTopClass="lg:top-40" />

      <section className="bg-white px-6 py-16"><div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[var(--app-primary)] via-slate-900 to-black px-8 py-14 text-white shadow-2xl sm:px-12 lg:px-16"><div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-400/25 blur-3xl" /><div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center"><div className="max-w-3xl"><Image src={appLogo} alt="" width={54} height={54} className="h-12 w-12 rounded-xl bg-white p-1.5" /><h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">Is {appName} the right fit for your process?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">Get a scoped recommendation covering edition, applications, data, integrations, implementation effort, risks, and next steps.</p></div><Link href="#contact-form" className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-7 py-4 font-bold text-[#4a2944] transition hover:bg-violet-50">Request an Odoo assessment <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></Link></div></div></section>
      <div id="contact-form" className="scroll-mt-40"><FooterContactForm platform="NetSuite" contentVariant="Odoo" /></div>
    </div>
  );
}
