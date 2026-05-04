import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/app/lib/seo";

export const metadata: Metadata = {
  title: "NetSuite Planning & Budgeting Software | Forecasting & Financial Planning",

  description:
    "Improve financial planning with NetSuite Planning and Budgeting. Automate forecasting, scenario planning, and what-if analysis to make smarter business decisions.",

  keywords: [
    "NetSuite Planning and Budgeting",
    "Financial Planning Software",
    "Budgeting Tools ERP",
    "Forecasting Software",
    "Scenario Planning Tools",
    "NetSuite FP&A",
    "Business Budget Planning",
    "Cloud Financial Planning"
  ],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: `${SITE_URL}/netsuite-planning-and-budgeting`,
  },

  openGraph: {
    title: "NetSuite Planning & Budgeting Software",
    description:
      "Automate budgeting, forecasting, and financial planning with NetSuite.",
    url: `${SITE_URL}/netsuite-planning-and-budgeting`,
    siteName: SITE_NAME,
    images: [
      {
        url: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "NetSuite Planning & Budgeting",
    description:
      "Smarter financial planning with NetSuite forecasting tools",
  },
};
