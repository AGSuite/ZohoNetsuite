import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Book a Free Consultation | NetSuite & Zoho Partner - AGSuite",
  description:
    "Schedule a free consultation with AGSuite Technologies experts. Get strategic advice on NetSuite ERP and Zoho Cloud solutions tailored for your business.",
  path: "/free-consultation",
  canonicalUrl: "https://www.agsuitetech.com/free-consultation",
});

export default function FreeConsultationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
