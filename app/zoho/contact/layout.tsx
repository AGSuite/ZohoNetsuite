import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Zoho Experts | Consultation, Licensing & Support | AGSuite",
  description:
    "Get in touch with AGSuite Technologies - Premier Zoho Partner. Connect with our certified consultants for implementation, customization, licensing, and 24/7 technical support.",
  alternates: {
    canonical: "https://www.agsuitetech.com/zoho/contact",
  },
  openGraph: {
    title: "Contact Zoho Experts | AGSuite Technologies",
    description:
      "Transform your business operations with Zoho solutions. Speak with our certified Zoho consultants.",
    url: "https://www.agsuitetech.com/zoho/contact",
    siteName: "AGSuite Technologies",
    images: [
      {
        url: "/images/Background/heropinkbg.webp",
        width: 1200,
        height: 630,
        alt: "Contact AGSuite Zoho Experts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Zoho Experts | AGSuite Technologies",
    description:
      "Get in touch with AGSuite Technologies for certified Zoho implementation and support.",
    images: ["/images/Background/heropinkbg.webp"],
  },
};

export default function ZohoContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
