import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NetSuite Global Business Management Software",

  description:
    "Discover NetSuite global business management software at AGSuite Technologies. Expert solutions for your global business management software needs.",

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
    canonical: "https://agsuitetech.com/global-business-management/",
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "NetSuite Global Business Management Software - AGSuite Technologies",
    description:
      "Discover NetSuite global business management software at AGSuite Technologies. Expert solutions for your global business management software needs.",
    url: "https://agsuitetech.com/global-business-management/",
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
    "twitter:data1": "22 minutes",
  },
};
