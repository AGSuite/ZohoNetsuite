import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SuiteProjects Pro PSA (NetSuite OpenAir) | AGSuite Technologies",

  description:
    "Optimize project delivery and resource utilization with SuiteProjects Pro (formerly NetSuite OpenAir). The leading Professional Services Automation (PSA) solution for enterprise project control.",

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
    canonical: "https://agsuitetech.com/netsuite-open-air-solution/",
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "SuiteProjects Pro PSA (NetSuite OpenAir) | AGSuite Technologies",
    description:
      "Optimize project delivery and resource utilization with SuiteProjects Pro (formerly NetSuite OpenAir). The leading Professional Services Automation (PSA) solution for enterprise project control.",
    url: "https://agsuitetech.com/netsuite-open-air-solution/",
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
    "twitter:data1": "32 minutes",
  },
};
