import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smart Commission App",

  description:
    "Discover AGSuite Technologies' Smart Commission App for streamlined commission tracking and management. Enhance your sales operations with our innovative solution.",

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
    canonical: "https://agsuitetech.com/smart-commission-app/",
    languages: {
      "en-US": "https://agsuitetech.com/smart-commission-app/",
    },
  },

  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Smart Commission App - AGSuite Technologies",
    description:
      "Discover AGSuite Technologies' Smart Commission App for streamlined commission tracking and management. Enhance your sales operations with our innovative solution.",
    url: "https://agsuitetech.com/smart-commission-app/",
    siteName: "AGSuite",
    images: [
      {
        url: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
      },
    ],
    modifiedTime: "2024-12-02T10:52:02+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Smart Commission App - AGSuite Technologies",
    description:
      "Discover AGSuite Technologies' Smart Commission App for streamlined commission tracking and management. Enhance your sales operations with our innovative solution.",
    images: ["https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png"],
  },

  other: {
    "twitter:label1": "Est. reading time",
    "twitter:data1": "17 minutes",
  },
};
