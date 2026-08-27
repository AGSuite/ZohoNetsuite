import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "NetSuite Consulting Services | AGSuite Technologies",
  description:
    "AGSuite Technologies offers NetSuite Consulting Services to optimize ERP strategies, streamline operations, improve performance, and accelerate business growth.",
  path: "/netsuite-consulting",
  canonicalUrl: "https://agsuitetech.com/netsuite-consulting/",
  ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
});

export default function NetSuiteConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
