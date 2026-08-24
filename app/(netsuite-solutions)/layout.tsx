import type { Metadata } from "next";
import { headers } from "next/headers";
import NavbarNetSuite from "@/app/netsuite/components/NSNavbar";
import NetSuiteFooter from "@/app/components/footers/NetSuiteFooter";
import { SITE_URL, SITE_NAME, buildWebPageSchema, NETSUITE_PAGES } from "@/app/lib/seo";
import JsonLd from "@/app/components/seo/JsonLd";

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

export default async function NetSuiteSolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get current path for JSON-LD (Next.js server-side trick)
  const headersList = await headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const path = (domain && fullUrl.includes(domain))
    ? (fullUrl.split(domain)[1]?.split("?")[0] || "/netsuite")
    : "/netsuite";
  
  const pageData = NETSUITE_PAGES[path];
  const schema = pageData ? buildWebPageSchema({
    title: pageData.title,
    description: pageData.description,
    path: path,
    breadcrumbs: pageData.breadcrumbs || [
      { name: "Home", url: "/" },
      { name: "NetSuite", url: "/netsuite" },
      { name: pageData.title.split("|")[0].trim(), url: path }
    ],
    datePublished: pageData.publishedTime ? pageData.publishedTime.split("T")[0] : undefined,
    dateModified: pageData.dateModified,
    url: pageData.canonicalUrl,
  }) : null;

  return (
    <div className="min-h-screen bg-white">
      {schema && <JsonLd schema={schema} />}
      <NavbarNetSuite />
      <main>{children}</main>
      <NetSuiteFooter />
    </div>
  );
}





