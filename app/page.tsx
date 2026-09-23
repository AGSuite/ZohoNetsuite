import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Oracle NetSuite ERP and Zoho Implementation Partner | AGSuite Technologies",
  description:
    "Partner with AGSuite Technologies, certified Oracle NetSuite Solution Provider and Zoho Premium Implementation Partner. Tailored cloud ERP, CRM, customization, and business automation solutions.",
  keywords: [
    "Oracle NetSuite Partner",
    "Zoho Premium Partner",
    "NetSuite Implementation Partner India",
    "Zoho ERP Partner",
    "Cloud ERP Solutions",
    "Business Automation India",
    "AGSuite Technologies",
  ],
  alternates: {
    canonical: "https://www.agsuitetech.com",
  },
  openGraph: {
    title: "Oracle NetSuite ERP and Zoho Implementation Partner | AGSuite Technologies",
    description:
      "Partner with AGSuite for Oracle NetSuite ERP and Zoho implementation, customization, integration, and support solutions tailored to your business needs.",
    url: "https://www.agsuitetech.com",
    siteName: "AGSuite Technologies",
    images: [
      {
        url: "https://www.agsuitetech.com/images/og/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Oracle NetSuite ERP and Zoho Implementation Partner - AGSuite",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@AGSuiteTech",
    creator: "@AGSuiteTech",
    title: "Oracle NetSuite ERP and Zoho Implementation Partner | AGSuite Technologies",
    description:
      "Partner with AGSuite for Oracle NetSuite ERP and Zoho implementation, customization, integration, and support solutions.",
    images: ["https://www.agsuitetech.com/images/og/og-default.jpg"],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.agsuitetech.com/#webpage",
  url: "https://www.agsuitetech.com",
  name: "Oracle NetSuite ERP & Zoho Premium Implementation Partner | AGSuite Technologies",
  description:
    "Partner with AGSuite Technologies, certified Oracle NetSuite Solution Provider and Zoho Premium Partner for ERP and CRM transformations.",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://www.agsuitetech.com/#website",
    name: "AGSuite Technologies",
    url: "https://www.agsuitetech.com",
  },
  about: [
    {
      "@type": "Service",
      name: "Oracle NetSuite ERP Implementation",
      url: "https://www.agsuitetech.com/netsuite",
    },
    {
      "@type": "Service",
      name: "Zoho Premium Solutions & Implementation",
      url: "https://www.agsuitetech.com/zoho",
    },
  ],
};

export default function Home() {
  return (
    <div
      className="h-[100dvh] w-full flex flex-col justify-between p-3 sm:p-5 md:p-6 lg:p-7 relative z-0 overflow-hidden box-border"
    >
      {/* Schema.org Structured Data */}
      <Script
        id="home-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />

      {/* Primary Semantic H1 for Search Engines */}
      <h1 className="sr-only">
        Oracle NetSuite ERP & Zoho Premium Implementation Partner | AGSuite Technologies
      </h1>

      {/* Background Image - Responsive & Ultra-Fast */}
      <div className="fixed inset-0 -z-10 w-screen h-screen pointer-events-none select-none">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/home/bg_homepage_mob.webp"
            type="image/webp"
          />
          <source
            media="(min-width: 769px)"
            srcSet="/images/home/bg_homepage.webp"
            type="image/webp"
          />
          <img
            src="/images/home/bg_homepage.webp"
            alt="AGSuite Technologies Background"
            decoding="async"
            className="w-full h-full object-cover object-center scale-105"
          />
        </picture>
      </div>

      {/* TOP HEADER */}
      {/* 1. MOBILE HEADER (Shown only on mobile: < md) */}
      <header className="flex md:hidden w-full shrink-0 z-20 px-1 sm:px-2 pt-0.5 sm:pt-1 mb-1.5 sm:mb-2 flex-col items-center gap-1 sm:gap-1.5">
        {/* Line 1: AGSuite Logo Top-Left (Alone on its line) */}
        <div className="w-full flex items-center justify-start">
          <Link
            href="/"
            className="flex items-center transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-0.5 sm:p-1"
            aria-label="AGSuite Technologies Home"
          >
            <Image
              src="/images/home/agsuite_logo.webp"
              alt="AGSuite Technologies Logo"
              width={180}
              height={55}
              priority
              className="h-8 sm:h-9 w-auto object-contain drop-shadow"
              quality={90}
            />
          </Link>
        </div>

        {/* Line 2: Technology Partner Text (Separate & in Center, matched width with logos) */}
        <div className="flex justify-center w-full">
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] blur-sm opacity-0 group-hover:opacity-90 transition duration-300 pointer-events-none" />
            <div className="relative w-[210px] sm:w-[230px] px-3 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-sm group-hover:shadow-lg transition-all duration-300 flex items-center justify-center">
              <span className="text-[11px] sm:text-xs font-extrabold tracking-wider bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent uppercase whitespace-nowrap">
                Technology Partner
              </span>
            </div>
          </div>
        </div>

        {/* Line 3: Two Partner Logos (Separate & in Center, Down to that Text, Bigger Size) */}
        <div className="flex justify-center w-full">
          <div className="relative group">
            <div className="absolute -inset-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] blur-sm opacity-0 group-hover:opacity-90 transition duration-300 pointer-events-none" />
            <div className="relative w-[210px] sm:w-[230px] flex items-center justify-center gap-3 sm:gap-4 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-sm group-hover:shadow-lg transition-all duration-300">
              {/* NetSuite Partner Logo */}
              <Link
                href="/netsuite"
                prefetch={true}
                className="transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                aria-label="Oracle NetSuite Solution Provider Partner"
              >
                <Image
                  src="/images/netsuiteimages/netsuitelogos/netsuiteblack.webp"
                  alt="Oracle NetSuite Partner Logo"
                  width={180}
                  height={55}
                  priority
                  className="h-7.5 sm:h-8.5 w-auto object-contain"
                  quality={90}
                />
              </Link>

              {/* Separator Line */}
              <div className="w-px h-6 sm:h-7 bg-slate-300" />

              {/* Zoho Premium Partner Logo */}
              <Link
                href="/zoho"
                prefetch={true}
                className="transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
                aria-label="Zoho Premium Partner"
              >
                <Image
                  src="/images/home/zoho_premium_partner.webp"
                  alt="Zoho Premium Partner Logo"
                  width={180}
                  height={55}
                  priority
                  className="h-7.5 sm:h-8.5 w-auto object-contain"
                  quality={90}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 2. DESKTOP / NORMAL HEADER (Shown on md+ screens: exact previous layout with matched height) */}
      <header className="hidden md:flex items-center justify-between w-full shrink-0 z-20 px-2 pt-1 mb-2 sm:mb-3">
        {/* Left Side: AGSuite Logo */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded-lg p-1"
          aria-label="AGSuite Technologies Home"
        >
          <Image
            src="/images/home/agsuite_logo.webp"
            alt="AGSuite Technologies Logo"
            width={180}
            height={55}
            priority
            className="h-10 md:h-11 lg:h-12 w-auto object-contain drop-shadow"
            quality={90}
          />
        </Link>

        {/* Right Side: "Technology Partners" + Logos (Matched height and styling) */}
        <div className="flex items-stretch gap-3.5 md:gap-5">
          {/* Technology Partners Label (Height matches logos box) */}
          <div className="relative group flex">
            <div className="absolute -inset-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] blur-sm opacity-0 group-hover:opacity-90 transition duration-300 pointer-events-none" />
            <div className="relative px-5 py-2 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-md group-hover:shadow-lg transition-all duration-300 flex items-center justify-center w-full">
              <span className="text-sm md:text-base font-extrabold tracking-wider bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent uppercase whitespace-nowrap">
                Technology Partners
              </span>
            </div>
          </div>

          {/* Logos Container */}
          <div className="relative group flex">
            <div className="absolute -inset-0.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#13FFAA] via-[#1E67C6] to-[#CE84CF] blur-sm opacity-0 group-hover:opacity-90 transition duration-300 pointer-events-none" />
            <div className="relative flex items-center gap-4 md:gap-5 px-4 py-2 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-md group-hover:shadow-lg transition-all duration-300">
              {/* NetSuite Partner Logo */}
              <Link
                href="/netsuite"
                prefetch={true}
                className="transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                aria-label="Oracle NetSuite Solution Provider Partner"
              >
                <Image
                  src="/images/netsuiteimages/netsuitelogos/netsuiteblack.webp"
                  alt="Oracle NetSuite Partner Logo"
                  width={180}
                  height={55}
                  priority
                  className="h-10 md:h-11 lg:h-12 w-auto object-contain"
                  quality={90}
                />
              </Link>

              {/* Separator Line */}
              <div className="w-px h-8 bg-slate-300" />

              {/* Zoho Premium Partner Logo */}
              <Link
                href="/zoho"
                prefetch={true}
                className="transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 rounded"
                aria-label="Zoho Premium Partner"
              >
                <Image
                  src="/images/home/zoho_premium_partner.webp"
                  alt="Zoho Premium Partner Logo"
                  width={180}
                  height={55}
                  priority
                  className="h-10 md:h-11 lg:h-12 w-auto object-contain"
                  quality={90}
                />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CARDS: Side-by-Side (Slightly smaller width & height, NetSuite First, Zoho Second) */}
      <section
        className="w-full max-w-[92%] xl:max-w-6xl 2xl:max-w-[1260px] mx-auto flex-1 min-h-0 flex items-center justify-center py-1 sm:py-2 md:py-3 z-10"
        aria-label="Oracle NetSuite and Zoho Solutions"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-7 w-full h-full max-h-[72vh]">
          {/* CARD 1 — ORACLE NETSUITE (FIRST / LEFT) */}
          <div className="relative h-full w-full group">
            {/* Mouseover Medium Gradient Shadow */}
            <div className="absolute -inset-1 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-600/70 via-cyan-500/70 to-indigo-600/70 opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500 -z-10 pointer-events-none" />

            {/* Card Link */}
            <Link
              href="/netsuite"
              prefetch={true}
              className="relative h-full w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-white/15 group-hover:border-cyan-400/40 group-hover:shadow-[0_12px_35px_-8px_rgba(56,189,248,0.35)] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-blue-400 flex flex-col justify-end p-4 sm:p-5 md:p-6"
              aria-label="Explore Oracle NetSuite ERP #1 Cloud ERP"
            >
              {/* Background Photo */}
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/images/home/netsuite_hero_card_mob.webp"
                  type="image/webp"
                />
                <source
                  media="(min-width: 769px)"
                  srcSet="/images/home/netsuite_hero_card.webp"
                  type="image/webp"
                />
                <img
                  src="/images/home/netsuite_hero_card.webp"
                  alt="Oracle NetSuite Business Professionals"
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </picture>

              {/* Smooth dark gradient at bottom half so text and headline are clearly readable */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/55 to-transparent pointer-events-none" />

              {/* Top Badge Pinned on Top-Left Corner */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 z-20">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-black/60 text-cyan-200 border border-cyan-400/40 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Oracle NetSuite Solution Provider Partner
                </span>
              </div>

              {/* Bottom Content & CTA */}
              <article className="relative z-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                  <span className="text-white drop-shadow-md">Oracle NetSuite</span>{" "}
                  <span className="text-white/80 font-normal hidden sm:inline">—</span>{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #67e8f9 0%, #38bdf8 40%, #fdba74 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 800,
                    }}
                  >
                    #1 ERP
                  </span>
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-100 font-medium mt-1 drop-shadow-md">
                  Run Your Entire Business Smarter &amp; Faster
                </p>

                {/* White Button with Mouseover Gradient Shadow */}
                <div className="mt-3 sm:mt-4">
                  <div className="relative group/btn inline-block">
                    {/* Hover gradient shadow behind button */}
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 opacity-0 group-hover/btn:opacity-100 blur-md transition-all duration-300 pointer-events-none" />
                    <span className="relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm shadow-md border border-white transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-[0_0_25px_rgba(56,189,248,0.7)] group-hover/btn:gap-3">
                      <span>Visit NetSuite</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1 font-extrabold text-blue-600">→</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* CARD 2 — ZOHO (SECOND / RIGHT) */}
          <div className="relative h-full w-full group">
            {/* Mouseover Medium Gradient Shadow */}
            <div className="absolute -inset-1 rounded-2xl md:rounded-3xl bg-gradient-to-r from-emerald-600/70 via-teal-400/70 to-green-500/70 opacity-0 group-hover:opacity-40 blur-lg transition-all duration-500 -z-10 pointer-events-none" />

            {/* Card Link */}
            <Link
              href="/zoho"
              prefetch={true}
              className="relative h-full w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl border border-white/15 group-hover:border-emerald-400/40 group-hover:shadow-[0_12px_35px_-8px_rgba(52,211,153,0.35)] transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 flex flex-col justify-end p-4 sm:p-5 md:p-6"
              aria-label="Visit Zoho Solutions and Cloud CRM"
            >
              {/* Background Photo */}
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcSet="/images/home/zoho_hero_card_mob.webp"
                  type="image/webp"
                />
                <source
                  media="(min-width: 769px)"
                  srcSet="/images/home/zoho_hero_card.webp"
                  type="image/webp"
                />
                <img
                  src="/images/home/zoho_hero_card.webp"
                  alt="Zoho Cloud Business Solutions"
                  loading="eager"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </picture>

              {/* Smooth dark gradient at bottom half so text and headline are clearly readable */}
              <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/90 via-black/55 to-transparent pointer-events-none" />

              {/* Top Badge Pinned on Top-Left Corner */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-5 md:left-5 z-20">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1 rounded-full text-[11px] sm:text-xs font-semibold tracking-wide bg-black/60 text-emerald-200 border border-emerald-400/40 backdrop-blur-md shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Zoho Premium Partner
                </span>
              </div>

              {/* Bottom Content & CTA — Headline includes Zoho at starting */}
              <article className="relative z-10 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
                <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
                  <span className="text-white drop-shadow-md">Zoho</span>{" "}
                  <span className="text-white/70 font-normal hidden sm:inline">—</span>{" "}
                  <span
                    style={{
                      background:
                        "linear-gradient(90deg, #6ee7b7 0%, #34d399 40%, #fde047 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      fontWeight: 800,
                    }}
                  >
                    Smarter Business
                  </span>
                </h2>
                <p className="text-xs sm:text-sm md:text-base text-gray-200 font-medium mt-1 drop-shadow">
                  Faster Growth with Cloud Solutions for Every Team
                </p>

                {/* White Button with Mouseover Gradient Shadow */}
                <div className="mt-3 sm:mt-4">
                  <div className="relative group/btn inline-block">
                    {/* Hover gradient shadow behind button */}
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-emerald-400 via-teal-400 to-green-500 opacity-0 group-hover/btn:opacity-100 blur-md transition-all duration-300 pointer-events-none" />
                    <span className="relative inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm shadow-md border border-white transition-all duration-300 group-hover/btn:scale-105 group-hover/btn:shadow-[0_0_25px_rgba(52,211,153,0.7)] group-hover/btn:gap-3">
                      <span>Visit Zoho</span>
                      <span className="transition-transform duration-300 group-hover/btn:translate-x-1 font-extrabold text-emerald-600">→</span>
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
