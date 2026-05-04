import type { Metadata } from "next";
import { buildMetadata, NETSUITE_PAGES } from "@/app/lib/seo";

const page = NETSUITE_PAGES["/netsuite-erp-solution"];

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/netsuite-erp-solution",
  keywords: page.keywords,
  category: page.category,
  publishedTime: page.publishedTime,
  ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
});
