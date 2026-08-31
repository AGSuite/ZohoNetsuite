import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Integration Services | AGSuite Technologies",
  description:
    "AGSuite Technologies offers Zoho Integration Services to connect business applications, automate workflows, streamline operations, and boost productivity.",
  path: "/zoho-integration",
  canonicalUrl: "https://www.agsuitetech.com/zoho-integration",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoIntegrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
