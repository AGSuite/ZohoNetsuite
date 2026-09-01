import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Oracle NetSuite ERP Experts | AGSuite Technologies",
  description:
    "Get in touch with AGSuite's certified NetSuite ERP consultants for demo bookings, licensing inquiries, multi-subsidiary implementations, and managed support.",
  alternates: {
    canonical: "https://www.agsuitetech.com/netsuite/contact",
  },
  openGraph: {
    title: "Contact Oracle NetSuite ERP Experts | AGSuite Technologies",
    description:
      "Transform your enterprise with Oracle NetSuite. Speak with our certified ERP consultants.",
    url: "https://www.agsuitetech.com/netsuite/contact",
    siteName: "AGSuite Technologies",
    images: [
      {
        url: "/images/Background/herobluebg.webp",
        width: 1200,
        height: 630,
        alt: "Contact AGSuite NetSuite Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Oracle NetSuite ERP Experts | AGSuite Technologies",
    description:
      "Get in touch with AGSuite Technologies for certified NetSuite ERP consulting and support.",
    images: ["/images/Background/herobluebg.webp"],
  },
};

export default function NetSuiteContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
