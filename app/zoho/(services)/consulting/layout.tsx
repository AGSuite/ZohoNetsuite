import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Consulting Services | AGSuite Technologies",
  description:
    "AGSuite Technologies offers Zoho Consulting Services to optimize business processes, implement smarter solutions, automate workflows, and drive sustainable growth.",
  path: "/zoho/consulting",
  canonicalUrl: "https://www.agsuitetech.com/zoho/consulting",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
