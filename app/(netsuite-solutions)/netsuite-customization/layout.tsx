import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "NetSuite Customization Services | AGSuite Technologies",
  description:
    "AGSuite Technologies offers NetSuite Customization Services to tailor ERP workflows, automate processes, improve efficiency, and support scalable business growth.",
  path: "/netsuite-customization",
  canonicalUrl: "https://agsuitetech.com/netsuite-customization/",
  ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
});

export default function NetSuiteCustomizationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
