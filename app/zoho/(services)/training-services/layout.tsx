import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Training Services | AGSuite Technologies",
  description:
    "AGSuite Technologies offers Zoho Training Services to build expert skills, improve productivity, streamline workflows, and maximize your Zoho investment.",
  path: "/zoho/training-services",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoTrainingServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
