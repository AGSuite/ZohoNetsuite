import type { Metadata } from "next";
import { headers } from "next/headers";
import ZohoNavbar from "@/app/zoho/components/ZohoNavbar";
import ZohoFooter from "@/app/components/footers/ZohoFooter";
import { SITE_URL, SITE_NAME, buildWebPageSchema, ZOHO_PAGES } from "@/app/lib/seo";
import JsonLd from "@/app/components/seo/JsonLd";

export const metadata: Metadata = {
  title: {
    default: "Zoho Solutions — CRM, ERP, HR, Finance & More | AGSuite",
    template: "%s | AGSuite Technologies",
  },
  description:
    "Explore Zoho's complete business software suite — CRM, Books, People, Desk, Analytics, Inventory, and 50+ more apps. Zoho Premium Partner — AGSuite Technologies.",
  keywords: [
    "Zoho CRM India",
    "Zoho Books",
    "Zoho partner",
    "Zoho solutions India",
    "AGSuite Zoho",
    "Zoho Premium Partner",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    url: `${SITE_URL}/zoho`,
    images: [
      {
        url: `${SITE_URL}/images/og/og-zoho.jpg`,
        width: 1200,
        height: 630,
        alt: "Zoho Solutions by AGSuite",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@AGSuiteTech",
    images: [{ url: `${SITE_URL}/images/og/og-zoho.jpg`, alt: "Zoho Solutions" }],
  },
};

export default async function ZohoPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get current path for JSON-LD
  const headersList = await headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  const path = (domain && fullUrl.includes(domain))
    ? (fullUrl.split(domain)[1]?.split("?")[0] || "/zoho")
    : "/zoho";
  
  const pageData = ZOHO_PAGES[path];
  const schema = pageData ? buildWebPageSchema({
    title: pageData.title,
    description: pageData.description,
    path: path,
    breadcrumbs: pageData.breadcrumbs ?? [
      { name: "Home", url: "/" },
      { name: "Zoho", url: "/zoho" },
      { name: pageData.title.split("|")[0].trim(), url: path }
    ],
    datePublished: pageData.publishedTime ? pageData.publishedTime.split("T")[0] : undefined,
    dateModified: pageData.dateModified,
    url: pageData.canonicalUrl
  }) : null;

  return (
    <div className="min-h-screen bg-white">
      {schema && <JsonLd schema={schema} />}
      <ZohoNavbar />
      <main>{children}</main>
      <ZohoFooter />
    </div>
  );
}




