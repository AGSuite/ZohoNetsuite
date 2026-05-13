import type { Metadata } from "next";

/**
 * SEO Metadata Configuration for "Why NetSuite" Page
 * 
 * This object defines the technical SEO tags that appear in the <head> of the HTML.
 * It helps Search Engines (Google) and Social Media (LinkedIn, Twitter) understand
 * and display your page correctly.
 */
export const metadata: Metadata = {
  // The title tag: Appears in browser tabs and search engine results as the main link.
  title: "Why NetSuite: Unlock Efficiency with the #1 Cloud ERP",

  // The meta description: A brief summary of the page shown under the title in search results.
  description:
    "Discover why NetSuite is the #1 cloud ERP solution for businesses. Streamline operations, enhance scalability, and gain real-time insights with NetSuite's comprehensive suite of tools.",

  // Robots: Instructions for search engine crawlers.
  robots: {
    index: true,     // index: true means "Yes, show this page in search results."
    follow: true,    // follow: true means "Follow the links on this page to find other pages."
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large", // Allows Google to show large preview images for this page.
      "max-snippet": -1,            // -1 means no limit on the text snippet shown in search.
      "max-video-preview": -1,      // -1 means no limit on video previews.
    },
  },

  // Alternates (Canonical): Prevents SEO penalties for duplicate content.
  // It tells Google: "Even if there are other URLs for this page, this is the official one."
  alternates: {
    canonical: "https://agsuitetech.com/why-netsuite/",
  },

  // Open Graph (OG): Used by Social Media sites (Facebook, LinkedIn, etc.) to create a preview card.
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Why NetSuite: Unlock Efficiency with the #1 Cloud ERP",
    description:
      "Discover why NetSuite is the #1 cloud ERP solution for businesses. Streamline operations, enhance scalability, and gain real-time insights with NetSuite's comprehensive suite of tools.",
    url: "https://agsuitetech.com/why-netsuite/",
    siteName: "AGSuite",
    images: [
      {
        // The image that appears when the link is shared on social media.
        url: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
      },
    ],
  },

  // Twitter Metadata: Specifically for Twitter's link preview cards.
  twitter: {
    card: "summary_large_image", // Shows a large image preview on Twitter instead of a small square.
  },

  // Other/Custom Tags: Used for extra metadata.
  other: {
    "twitter:label1": "Est. reading time", // Custom label for Twitter cards.
    "twitter:data1": "28 minutes",         // Value for the custom label above.
  },
};
