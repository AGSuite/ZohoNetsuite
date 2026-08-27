import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Implementation Services & Zoho Experts | AGSuite Technologies",
  description:
    "AGSuite Technologies offers Zoho Implementation Services with Zoho Implementation Experts to streamline workflows, automate processes, and drive business growth.",
  path: "/zoho-implementation-and-integration",
  canonicalUrl: "https://www.agsuitetech.com/zoho-implementation-and-integration",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoImplementationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
