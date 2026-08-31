import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Training Services | AGSuite Technologies",
  description:
    "Upskill your team with expert-led Zoho Training Services from AGSuite Technologies. Practical hands-on training for Zoho CRM, Books, Creator, and more.",
  path: "/zoho-training-services",
  canonicalUrl: "https://www.agsuitetech.com/zoho-training-services",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
