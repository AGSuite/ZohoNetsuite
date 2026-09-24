import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Shield,
  ShieldCheck,
  Lock,
  Clock,
  Mail,
  Globe,
  Database,
  EyeOff,
  Server,
  FileCheck2,
  AlertCircle,
  HelpCircle,
  Scale,
  CheckCircle2,
  ArrowLeft,
  Calendar,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Services of AGSuite India Localization for NetSuite",
  description:
    "Official Terms of Services, Privacy Policy, Terms of Use, Security Practices, and Support SLA for AGSuite India Localization Add-on for Oracle NetSuite.",
  keywords: [
    "Terms of Services AGSuite India Localization for NetSuite",
    "NetSuite India localization terms",
    "AGSuite privacy policy NetSuite add-on",
    "NetSuite localization support SLA",
    "AGSuite NetSuite security practices",
  ],
  alternates: {
    canonical:
      "https://www.agsuitetech.com/terms-of-services-of-agsuite-india-localization-for-netsuite/",
  },
  openGraph: {
    title: "Terms of Services of AGSuite India Localization for NetSuite",
    description:
      "Read the Privacy Policy, Terms of Use, Security Practices, and Support SLAs for AGSuite India Localization Add-on for NetSuite.",
    url: "https://www.agsuitetech.com/terms-of-services-of-agsuite-india-localization-for-netsuite/",
    siteName: "AGSuite Technologies",
    type: "website",
  },
};

export default function TermsOfServicesIndiaLocalizationPage() {
  const privacyPoints = [
    {
      label: "Information Collected",
      description: "Metadata such as GSTIN, PAN, and state codes for configuration only.",
      icon: Database,
    },
    {
      label: "Use of Information",
      description: "Solely to provide compliance features; no PII stored.",
      icon: EyeOff,
    },
    {
      label: "Data Storage",
      description: "Resides within NetSuite; logs purged within 30 days.",
      icon: Server,
    },
    {
      label: "Data Sharing",
      description: "No third-party sharing.",
      icon: ShieldCheck,
    },
    {
      label: "Access",
      description: "Restricted to authorized AGSuite personnel.",
      icon: Lock,
    },
    {
      label: "User Rights",
      description: "Clients may disable or uninstall anytime.",
      icon: FileCheck2,
    },
    {
      label: "Contact",
      description: "Reach out to privacy@agsuitetech.com.",
      icon: Mail,
      isEmail: true,
      email: "privacy@agsuitetech.com",
    },
  ];

  const termsOfUsePoints = [
    {
      label: "License",
      description: "Exclusive to AGSuite customers with valid subscriptions.",
      icon: ShieldCheck,
    },
    {
      label: "Restrictions",
      description: "No reverse engineering, redistribution, or resale allowed.",
      icon: Lock,
    },
    {
      label: "Availability",
      description: "Operates within NetSuite’s infrastructure.",
      icon: Server,
    },
    {
      label: "Support",
      description: "Handled under standard AGSuite support SLAs.",
      icon: HelpCircle,
    },
    {
      label: "Termination",
      description: "Misuse can lead to suspension.",
      icon: AlertCircle,
    },
    {
      label: "Liability",
      description: "Limited to functionality; no responsibility for indirect losses.",
      icon: Scale,
    },
  ];

  const securityPoints = [
    {
      label: "Environment",
      description: "Operates entirely within NetSuite.",
      icon: Server,
    },
    {
      label: "APIs",
      description: "No external calls or third-party integrations.",
      icon: Lock,
    },
    {
      label: "Governance",
      description: "Role-based access with script governance.",
      icon: ShieldCheck,
    },
    {
      label: "Audits",
      description: "Subject to internal security checks.",
      icon: FileCheck2,
    },
    {
      label: "Compliance",
      description: "Aligns with NetSuite’s security protocols.",
      icon: CheckCircle2,
    },
  ];

  const slaTiers = [
    {
      level: "Critical",
      response: "Response within 4 hours",
      badgeColor: "bg-red-50 text-red-700 border-red-200",
      dotColor: "bg-red-500",
      description: "Severe impact on critical business tax operations or billing stoppage.",
    },
    {
      level: "High",
      response: "Response within 1 business day",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      dotColor: "bg-amber-500",
      description: "Significant functionality impaired with no immediate workaround.",
    },
    {
      level: "Medium",
      response: "Response within 3 business days",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      dotColor: "bg-blue-500",
      description: "Routine issue or operational inquiry with viable workaround.",
    },
    {
      level: "Low",
      response: "Response within 1 week",
      badgeColor: "bg-slate-50 text-slate-700 border-slate-200",
      dotColor: "bg-slate-500",
      description: "Minor inquiries, non-blocking requests, or enhancement suggestions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 font-['DM_Sans',sans-serif]">
      {/* ── Top Header Navigation Bar ────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="AGSuite Home"
          >
            <Image
              src="/images/logos/agsuite-logo.webp"
              alt="AGSuite Technologies"
              width={180}
              height={55}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/agsuite-india-localization-for-netsuite"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100/70 border border-blue-200/60 px-3.5 py-2 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>India Localization SuiteApp</span>
            </Link>
          </div>
        </div>
      </header>

      {/* ── Hero / Header Banner ────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 bg-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e293b_0%,transparent_70%)] opacity-60" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium mb-8 text-slate-400"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link href="/netsuite" className="hover:text-white transition-colors">
              NetSuite
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link
              href="/agsuite-india-localization-for-netsuite"
              className="hover:text-white transition-colors"
            >
              India Localization
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <span className="text-blue-400">Terms of Services</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-medium mb-5">
            <Shield className="w-4 h-4 text-blue-400" />
            <span>Official Policy & Compliance Documentation</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            Terms of Services of AGSuite India Localization for NetSuite
          </h1>

          <p className="mt-5 text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Legal terms, privacy policy, security practices, and support service level agreements for the AGSuite India Localization Add-on for Oracle NetSuite.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-400 border-t border-slate-800/80 pt-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-400" />
              <span>Applicable Platform: Oracle NetSuite ERP</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>100% Native SuiteCloud Architecture</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Body Content ────────────────────────────────────────────────── */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12">
          {/* ── Introduction ──────────────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                01
              </div>
              <h2 className="text-2xl font-bold text-slate-900">Introduction</h2>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed bg-slate-50/80 border-l-4 border-blue-600 p-5 rounded-r-xl">
              AGSuite’s India Localization Add-on for NetSuite enables businesses to comply with Indian tax and financial regulations. This document outlines our Privacy Policy, Terms of Use, and Security practices for the add-on.
            </p>
          </section>

          {/* ── Privacy Policy ────────────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                02
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Privacy Policy</h2>
                <p className="text-sm text-slate-500">
                  Data handling, access control, and privacy guarantees for the India Localization Add-on
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {privacyPoints.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 text-blue-600 shrink-0 shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                          {item.label}
                        </h3>
                        {item.isEmail ? (
                          <p className="text-slate-700 text-sm">
                            Reach out to{" "}
                            <a
                              href={`mailto:${item.email}`}
                              className="text-blue-600 font-semibold hover:underline"
                            >
                              {item.email}
                            </a>
                            .
                          </p>
                        ) : (
                          <p className="text-slate-700 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Terms of Use ─────────────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                03
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Terms of Use</h2>
                <p className="text-sm text-slate-500">
                  Licensing conditions, software boundaries, and operational guidelines
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {termsOfUsePoints.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 text-purple-600 shrink-0 shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                          {item.label}
                        </h3>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Security Practices ───────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                04
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Security Practices</h2>
                <p className="text-sm text-slate-500">
                  Enterprise security standards, governance, and audit protections
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {securityPoints.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="p-5 rounded-xl border border-slate-100 bg-slate-50/60 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2.5 rounded-lg bg-white border border-slate-200/70 text-amber-600 shrink-0 shadow-xs">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800">
                          {item.label}
                        </h3>
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Support SLA ──────────────────────────────────────────────────── */}
          <section className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center font-bold">
                05
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Support SLA</h2>
                <p className="text-sm text-slate-500">
                  Response timelines categorized by issue criticality and operating hours
                </p>
              </div>
            </div>

            {/* SLA Table / Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {slaTiers.map((tier) => (
                <div
                  key={tier.level}
                  className="rounded-xl border border-slate-200 p-5 bg-slate-50/40 hover:bg-slate-50 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-base font-bold text-slate-900">
                        {tier.level}
                      </span>
                      <span className={`flex h-2.5 w-2.5 rounded-full ${tier.dotColor}`} />
                    </div>
                    <div
                      className={`inline-block px-3 py-1 text-xs font-semibold rounded-lg border ${tier.badgeColor} mb-3`}
                    >
                      {tier.response}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {tier.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Support Hours Banner */}
            <div className="rounded-xl border border-sky-200/80 bg-sky-50/60 p-4 sm:p-5 flex items-start sm:items-center gap-3.5">
              <div className="p-2.5 rounded-lg bg-white border border-sky-200 text-sky-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-900 block sm:inline sm:mr-2">
                  Support Hours :
                </span>
                <span className="text-sm font-medium text-slate-800">
                  10am – 7pm IST (Mon – Fri) Business Days (Except for Public Holidays)
                </span>
              </div>
            </div>
          </section>

          {/* ── Contact Information ─────────────────────────────────────────── */}
          <section className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                06
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Information</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Company
                </span>
                <p className="text-lg font-bold text-white">AGSuite Technologies</p>
                <p className="text-xs text-slate-400 mt-1">
                  Official Oracle NetSuite Solution Provider
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Email
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                  <a
                    href="mailto:contact@agsuitetech.com"
                    className="text-base font-semibold text-blue-400 hover:text-blue-300 transition-colors hover:underline"
                  >
                    contact@agsuitetech.com
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Privacy inquiries:{" "}
                  <a
                    href="mailto:privacy@agsuitetech.com"
                    className="text-slate-300 hover:underline"
                  >
                    privacy@agsuitetech.com
                  </a>
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                  Website
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a
                    href="https://www.agsuitetech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-emerald-400 hover:text-emerald-300 transition-colors hover:underline"
                  >
                    www.agsuitetech.com
                  </a>
                </div>
                <p className="text-xs text-slate-400 mt-2">
                  Global SuiteApp & Cloud Consulting
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ── Footer ───────────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <span className="text-xs text-slate-400">
                © {new Date().getFullYear()} AGSuite Technologies Pvt. Ltd. All rights reserved.
              </span>
              <div className="inline-block bg-white rounded-md p-1 shadow-sm">
                <Image
                  src="/images/iso-27001-certified.webp"
                  alt="ISO 27001:2022 (ISMS) Certified"
                  width={140}
                  height={70}
                  className="h-9 w-auto object-contain"
                />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-medium">
              <Link
                href="/agsuite-india-localization-for-netsuite"
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                India Localization SuiteApp
              </Link>
              <span className="text-slate-700">•</span>
              <Link
                href="/privacy-policy"
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-slate-700">•</span>
              <Link
                href="/terms-conditions"
                className="text-slate-300 hover:text-blue-400 transition-colors"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
