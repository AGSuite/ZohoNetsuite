import type { Metadata, Viewport } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTopWrapper from "./components/shared/ScrollToTopWrapper";
import CursorFollower from "./components/shared/CursorFollower";
import SocialSidebar from "./components/shared/SocialSidebar";
import { SITE_URL, SITE_NAME, orgSchema, websiteSchema } from "./lib/seo";

// ─── Fonts ────────────────────────────────────────────────────────────────────
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

// ─── Global / fallback metadata ───────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  // ── Title ──────────────────────────────────────────────────────────────────
  title: {
    default: "Zoho & NetSuite Solutions | AGSuite Technologies",
    template: "%s | AGSuite Technologies",
  },

  // ── Core tags ──────────────────────────────────────────────────────────────
  description:
    "AGSuite Technologies — Zoho Premium Partner & Oracle NetSuite Partner. ERP, CRM, HR, Finance, and cloud solutions for growing businesses in India and globally.",
  keywords: [
    "Zoho partner India",
    "NetSuite partner India",
    "ERP implementation India",
    "CRM software India",
    "AGSuite Technologies",
    "Zoho solutions",
    "NetSuite solutions",
    "cloud ERP India",
    "business software India",
  ],
  applicationName: SITE_NAME,
  category: "Technology",

  // ── Authorship ─────────────────────────────────────────────────────────────
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // ── Robots / crawling directives ───────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  // ── Canonical & hreflang alternates ────────────────────────────────────────
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
      "en-IN": SITE_URL,
      "x-default": SITE_URL,
    },
  },

  // ── Open Graph ─────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: "Zoho & NetSuite Solutions | AGSuite Technologies",
    description:
      "Certified Zoho & NetSuite partner — CRM, ERP, HR, Finance, and cloud solutions for modern businesses.",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/images/og/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: "AGSuite Technologies — Zoho & NetSuite Solutions",
        type: "image/jpeg",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@AGSuiteTech",
    creator: "@AGSuiteTech",
    title: "Zoho & NetSuite Solutions | AGSuite Technologies",
    description:
      "Certified Zoho & NetSuite partner — CRM, ERP, HR, Finance, and cloud solutions.",
    images: [
      {
        url: `${SITE_URL}/images/og/og-default.jpg`,
        alt: "AGSuite Technologies",
      },
    ],
  },

  // ── Icons / Favicons ───────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon.png", sizes: "180x180" },
    ],
    other: [
      { rel: "icon", url: "/favicon_icon.png", type: "image/png" }
    ],
  },

  // ── PWA Web App Manifest ───────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── Search Console Verification tokens ────────────────────────────────────
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_TOKEN",  // ← paste after GSC setup
    // bing:   "YOUR_BING_VERIFICATION_TOKEN",
  },

  // ── Referrer & Format detection ────────────────────────────────────────────
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ─── Viewport — separate export per Next.js 14+ ───────────────────────────────
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1e3a8a" },
    { media: "(prefers-color-scheme: dark)",  color: "#0f172a" },
  ],
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Performance: preconnect & DNS prefetch */}
        {/* Performance: preconnect & DNS prefetch */}
        <link rel="dns-prefetch" href="https://cdn.sanity.io" />

        {/* JSON-LD — Organisation (rich knowledge panel & brand signals) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        {/* JSON-LD — WebSite (enables Sitelinks search box in Google SERPs) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${dmSans.variable} antialiased`}>
        <main>{children}</main>
        <SocialSidebar />
        <CursorFollower />
        <ScrollToTopWrapper />
      </body>
    </html>
  );
}




