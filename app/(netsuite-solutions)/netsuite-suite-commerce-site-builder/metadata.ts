import type { Metadata } from "next";
import { buildMetadata, NETSUITE_PAGES } from "@/app/lib/seo";

const page = NETSUITE_PAGES["/netsuite-suite-commerce-site-builder"];

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/netsuite-suite-commerce-site-builder",
  keywords: page.keywords,
  category: page.category,
  publishedTime: page.publishedTime,
  ogImage: "https://www.agsuitetech.com/images/og/og-netsuite.jpg",
});
