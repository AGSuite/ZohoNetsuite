import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Support & Zoho Managed Services | AGSuite Technologies",
  description:
    "AGSuite Technologies offers Zoho Support & Zoho Managed Services for seamless operations, faster issue resolution, system optimization, and business growth.",
  path: "/zoho-support",
  canonicalUrl: "https://www.agsuitetech.com/zoho-support",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
