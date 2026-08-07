import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NetSuite Analytics Warehouse (NSAW)",

  description:
    "Unlock the power of the NetSuite Analytics Warehouse (NSAW) for comprehensive data management, seamless integration, and in-depth reporting. Centralize your business data for better insights and decision-making.",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://agsuitetech.com/netsuite-analytics-warehouse/",
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "NetSuite Analytics Warehouse (NSAW) | AGSuite Technologies",
    description:
      "Unlock the power of the NetSuite Analytics Warehouse (NSAW) for comprehensive data management, seamless integration, and in-depth reporting. Centralize your business data for better insights and decision-making.",
    url: "https://agsuitetech.com/netsuite-analytics-warehouse/",
    siteName: "AGSuite",
    images: [
      {
        url: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
  },

  other: {
    "twitter:label1": "Est. reading time",
    "twitter:data1": "34 minutes",
  },
};
