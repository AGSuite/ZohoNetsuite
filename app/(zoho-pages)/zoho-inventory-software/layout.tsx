import type { Metadata } from "next";
import { buildMetadata, ZOHO_PAGES } from "@/app/lib/seo";

const PAGE_PATH = "/zoho-inventory-software";
const pageData = ZOHO_PAGES[PAGE_PATH];

export const metadata: Metadata = buildMetadata({
  ...pageData,
  path: PAGE_PATH,
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
