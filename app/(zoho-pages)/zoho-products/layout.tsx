import React from "react";
import { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Zoho Implementation Partner | Top Zoho Partner | Best Zoho Partner | Pune | India",
  description:
    "Elevate your business with AGSuite Technologies, the top Zoho Implementation Partner in Pune, India. Unlock the full potential of Zoho solutions with our expert services",
  path: "/zoho-products",
  canonicalUrl: "https://www.agsuitetech.com/zoho-products",
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function ZohoProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
