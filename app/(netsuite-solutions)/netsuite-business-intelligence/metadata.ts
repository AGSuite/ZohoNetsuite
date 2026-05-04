import type { Metadata } from "next";
import { buildMetadata, NETSUITE_PAGES } from "@/app/lib/seo";

const page = NETSUITE_PAGES["/netsuite-business-intelligence"];

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/netsuite-business-intelligence",
  keywords: page.keywords,
  category: page.category,
  publishedTime: page.publishedTime,
  ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
});
