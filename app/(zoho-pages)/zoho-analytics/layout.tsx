import type { Metadata } from "next";
import { buildMetadata, ZOHO_PAGES } from "@/app/lib/seo";

const PAGE_PATH = "/zoho-analytics";
const pageData = ZOHO_PAGES[PAGE_PATH];

export const metadata: Metadata = buildMetadata({
  ...pageData,
  path: PAGE_PATH,
  ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}




