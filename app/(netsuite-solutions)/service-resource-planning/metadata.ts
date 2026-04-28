import type { Metadata } from "next";
import { buildMetadata, NETSUITE_PAGES } from "@/app/lib/seo";

const page = NETSUITE_PAGES["/service-resource-planning"];

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/service-resource-planning",
  keywords: page.keywords,
  category: page.category,
  publishedTime: page.publishedTime,
  ogImage: "https://www.agsuitetech.com/images/og/og-netsuite.jpg",
});
