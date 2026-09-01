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
    <main
      className="min-h-screen px-4 md:px-8 lg:px-12 py-6 md:py-10 relative z-0"
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

      {/* Background Image - Ultra-Optimized & Preloaded */}
      <div className="fixed inset-0 -z-10 w-screen h-screen">
        <Image
          src="/images/home/bg_homepage.webp"
          alt="AGSuite Technologies Background"
          fill
          priority
          className="object-cover object-center scale-110"
          sizes="100vw"
          quality={75}
        />
      </div>

      {/* TOP TWO SECTIONS — NETSUITE */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Oracle NetSuite Solutions">

        {/* LEFT — NETSUITE LOGO + BUTTON */}
        <Link
          href="/netsuite"
          prefetch={true}
          className="relative h-[38vh] min-h-[250px] md:h-[70vh] flex flex-col items-center justify-center text-center rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Visit Oracle NetSuite ERP Page"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-8 px-4 flex-wrap sm:flex-nowrap">
            <Image
              src="/images/home/agsuite_logo.webp"
              alt="AGSuite Technologies Logo"
              width={180}
              height={60}
              priority
              className="h-10 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
            <div className="w-px h-8 bg-gray-400/50 hidden sm:block" />
            <Image
              src="/images/home/netsuite_partner_logo.webp"
              alt="Oracle NetSuite Partner Logo"
              width={180}
              height={60}
              priority
              className="h-10 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
          </div>
          <span className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg bg-gray-700 text-white text-base sm:text-lg font-semibold hover:bg-gray-900 transition-colors inline-block shadow-md">
            Visit NetSuite →
          </span>
        </Link>

        {/* RIGHT — NETSUITE PEOPLE IMAGE */}
        <Link
          href="/netsuite"
          prefetch={true}
          className="relative h-[38vh] min-h-[250px] md:h-[70vh] group overflow-hidden block shadow-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Explore Oracle NetSuite ERP #1 Cloud ERP"
        >
          <Image
            src="/images/home/netsuite_hero_card.webp"
            alt="Oracle NetSuite Business Professionals"
            fill
            priority
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={82}
          />

          {/* Top dark gradient — logo area */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/5 to-transparent pointer-events-none"
          />

          {/* Bottom dark gradient — text area */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent pointer-events-none"
          />

          {/* Content */}
          <article className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white drop-shadow-lg pr-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #cceeff 0%, #a0d8f1 30%, #ffffff 60%, #d4eaff 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 600,
                }}
              >
                Oracle NetSuite
              </span>{" "}
              <span className="text-white font-semibold hidden md:inline">—</span>{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, #ffd580 0%, #ffb347 50%, #ff8c42 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: 600,
                }}
              >
                #1 ERP
              </span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg opacity-90 mt-1 font-medium">Run Your Entire Business Smarter &amp; Faster</p>
          </article>
        </Link>

      </section>

      <div className="my-6 sm:my-10"></div>

      {/* BOTTOM TWO SECTIONS — ZOHO */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6" aria-label="Zoho Solutions">

        {/* LEFT — ZOHO BACKGROUND */}
        <Link
          href="/zoho"
          prefetch={true}
          className="relative h-[38vh] min-h-[250px] md:h-[70vh] group overflow-hidden block shadow-lg rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Visit Zoho Solutions and CRM"
        >
          <Image
            src="/images/home/zoho_hero_card.webp"
            alt="Zoho Cloud Business Solutions"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={80}
          />

          {/* Top dark gradient — logo area */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/10 to-transparent pointer-events-none"
          />

          {/* Bottom dark gradient — text area */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent pointer-events-none"
          />

          {/* Content */}
          <article className="absolute bottom-4 left-4 md:bottom-8 md:left-8 text-white drop-shadow-lg pr-4">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Smarter Business. Faster Growth.</h2>
            <p className="text-sm sm:text-base md:text-xl opacity-90 mt-1 font-medium">Zoho Solutions for Every Team</p>
          </article>
        </Link>

        {/* RIGHT — ZOHO LOGO + BUTTON */}
        <Link
          href="/zoho"
          prefetch={true}
          className="relative h-[38vh] min-h-[250px] md:h-[70vh] flex flex-col items-center justify-center text-center rounded-2xl shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Go to Zoho Page"
        >
          <div className="flex items-center justify-center gap-4 sm:gap-5 mb-6 sm:mb-8 px-4 flex-wrap sm:flex-nowrap">
            <Image
              src="/images/home/agsuite_logo.webp"
              alt="AGSuite Technologies Logo"
              width={180}
              height={60}
              className="h-10 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
            <div className="w-px h-8 bg-gray-400/50 hidden sm:block" />
            <Image
              src="/images/home/zoho_premium_partner.webp"
              alt="Zoho Premium Partner Logo"
              width={180}
              height={60}
              className="h-10 sm:h-14 md:h-16 lg:h-18 w-auto object-contain"
            />
          </div>
          <span className="px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg bg-gray-700 text-white text-base sm:text-lg font-semibold hover:bg-gray-900 transition-colors inline-block shadow-md">
            Visit Zoho →
          </span>
        </Link>

      </section>
    </main>
  );
}
