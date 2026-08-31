import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NetSuite Next AI | Artificial Intelligence in NetSuite | AGSuite Technologies",
  description:
    "Oracle NetSuite Next AI brings intelligent automation, predictive insights, and real-time decision-making directly into your NetSuite ERP environment.",
  alternates: {
    canonical: "https://www.agsuitetech.com/netsuite/next-ai",
  },
  openGraph: {
    title: "NetSuite Next AI | AGSuite Technologies",
    description:
      "Intelligent automation and predictive analytics powered by NetSuite Next AI.",
    url: "https://www.agsuitetech.com/netsuite/next-ai",
    siteName: "AGSuite Technologies",
    images: [
      {
        url: "https://www.agsuitetech.com/images/lap/Next AI Dashboard.webp",
        width: 1200,
        height: 630,
        alt: "NetSuite Next AI Dashboard",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NetSuite Next AI | AGSuite Technologies",
    description:
      "Intelligent automation and predictive analytics powered by NetSuite Next AI.",
    images: ["https://www.agsuitetech.com/images/lap/Next AI Dashboard.webp"],
  },
};

export default function NextAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
