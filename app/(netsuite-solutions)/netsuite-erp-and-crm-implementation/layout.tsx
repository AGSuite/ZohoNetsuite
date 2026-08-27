import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "NetSuite Implementation Services | AGSuite Technologies",
  description:
    "AGSuite Technologies delivers netsuite implementation services for seamless ERP deployment, data migration, workflow optimization, and scalable business growth.",
  path: "/netsuite-erp-and-crm-implementation",
  canonicalUrl: "https://agsuitetech.com/netsuite-erp-and-crm-implementation/",
  ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
});

export default function NetSuiteImplementationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
