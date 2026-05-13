import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Resource Planning | AGSuite Technologies",

  description:
    "AGSuite Technologies -Services Resource Planning (SRP) Solution Tool helps you complete projects more quickly, decrease accounts receivable cycles, and generate invoices accurately and efficiently.",

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
    canonical: "https://agsuitetech.com/service-resource-planning/",
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Service Resource Planning | AGSuite Technologies",
    description:
      "AGSuite Technologies -Services Resource Planning (SRP) Solution Tool helps you complete projects more quickly, decrease accounts receivable cycles, and generate invoices accurately and efficiently.",
    url: "https://agsuitetech.com/service-resource-planning/",
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
    "twitter:data1": "29 minutes",
  },
};
