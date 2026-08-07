import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artificial Intelligence in NetSuite",

  description:
    "Discover how Artificial Intelligence in NetSuite streamlines business processes with predictive analytics, automation, and smarter decision-making. Explore AI-driven solutions for enhanced efficiency.",

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
    canonical: "https://agsuitetech.com/artificial-intelligence-ai/",
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Artificial Intelligence in NetSuite | AGSuite Technologies",
    description:
      "Discover how Artificial Intelligence in NetSuite streamlines business processes with predictive analytics, automation, and smarter decision-making. Explore AI-driven solutions for enhanced efficiency.",
    url: "https://agsuitetech.com/artificial-intelligence-ai/",
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
    "twitter:data1": "31 minutes",
  },
};
