import type { Metadata } from "next";
import ZohoNavbar from "@/app/zoho/components/ZohoNavbar";
import ZohoFooter from "@/app/components/footers/ZohoFooter";
import { SITE_URL, SITE_NAME } from "@/app/lib/seo";

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

export default function ZohoPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <ZohoNavbar />
      <main>{children}</main>
      <ZohoFooter />
    </div>
  );
}




