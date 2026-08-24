import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fixed Asset Management Software",

  description:
    "Streamline your asset lifecycle from procurement to disposal with AGSuite Technologies' Fixed Asset Management tool built on Zoho Creator. Automated depreciation, QR tracking, and statutory compliance.",

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
    canonical: "https://agsuitetech.com/fixed-asset-management/",
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Fixed Asset Management Software - AGSuite Technologies",
    description:
      "Streamline your asset lifecycle from procurement to disposal with AGSuite Technologies' Fixed Asset Management tool built on Zoho Creator.",
    url: "https://agsuitetech.com/fixed-asset-management/",
    siteName: "AGSuite",
    images: [
      {
        url: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fixed Asset Management Software - AGSuite Technologies",
    description:
      "Streamline your asset lifecycle from procurement to disposal with AGSuite Technologies' Fixed Asset Management tool built on Zoho Creator.",
    images: ["https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png"],
  },

  other: {
    "twitter:label1": "Est. reading time",
    "twitter:data1": "15 minutes",
  },
};
