import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho CRM Customization | Zoho Customization Services | AGSuite",
  description:
    "AGSuite Technologies delivers Zoho CRM Customization and Zoho Customization Services to automate workflows, enhance CRM performance, and accelerate growth.",
  path: "/zoho-customization",
  canonicalUrl: "https://www.agsuitetech.com/zoho-customization",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoCustomizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
