import type { Metadata } from "next";
import NavbarNetSuite from "@/app/netsuite/components/NSNavbar";
import NetSuiteFooter from "@/app/components/footers/NetSuiteFooter";
import { SITE_URL, SITE_NAME } from "@/app/lib/seo";

export const metadata: Metadata = {
  title: {
    default: "NetSuite Solutions — Enterprise ERP, CRM & Analytics | AGSuite",
    template: "%s | AGSuite Technologies",
  },
  description:
    "Explore the full suite of Oracle NetSuite solutions — ERP, CRM, Planning & Budgeting, Analytics, eCommerce, and India Localization. Certified NetSuite partner.",
  keywords: [
    "NetSuite ERP",
    "NetSuite CRM",
    "NetSuite solutions India",
    "Oracle NetSuite partner",
    "AGSuite NetSuite",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: `${SITE_URL}/netsuite`,
    images: [
      {
        url: `${SITE_URL}/images/og/og-netsuite.jpg`,
        width: 1200,
        height: 630,
        alt: "NetSuite Solutions by AGSuite",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AGSuiteTech",
    images: [{ url: `${SITE_URL}/images/og/og-netsuite.jpg`, alt: "NetSuite Solutions" }],
  },
};

export default function NetSuiteSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <NavbarNetSuite />
      <main>{children}</main>
      <NetSuiteFooter />
    </div>
  );
}





