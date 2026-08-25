import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Low-Code Apps Development | AGSuite Technologies",
  description:
    "AGSuite Technologies delivers Zoho Low-Code Development solutions to build custom apps faster, automate workflows, and scale business operations efficiently.",
  path: "/zoho/low-code-application-development",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoLowCodeApplicationDevelopmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
