import type { Metadata } from "next";
import { buildMetadata, ZOHO_PAGES } from "@/app/lib/seo";

const page = ZOHO_PAGES["/zoho-mail"];

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/zoho-mail",
  keywords: page.keywords,
  category: page.category,
  publishedTime: page.publishedTime,
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});
