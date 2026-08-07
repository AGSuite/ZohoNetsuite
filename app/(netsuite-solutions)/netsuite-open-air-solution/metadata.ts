import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NetSuite OpenAir Software Integration",

  description:
    "AGSuite Technologies specializes in NetSuite OpenAir software integration for efficient open-air project management solutions.",

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
    title: "NetSuite OpenAir Software Integration - AGSuite Technologies",
    description:
      "AGSuite Technologies specializes in NetSuite OpenAir software integration for efficient open-air project management solutions.",
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
    "twitter:data1": "20 minutes",
  },
};
