import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Digital Transformation Services | AGSuite Technologies",
  description:
    "Transform your business with Zoho Digital Transformation Services from AGSuite Technologies, driving smarter automation, seamless operations, and growth.",
  path: "/zoho/digital-transformation",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoDigitalTransformationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
