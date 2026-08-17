import { buildMetadata, INDUSTRY_PAGES } from "@/app/lib/seo";

const PAGE_PATH = "/zoho/software-and-technology";
const pageMetadata = INDUSTRY_PAGES[PAGE_PATH];

export const metadata = pageMetadata ? buildMetadata({
  ...pageMetadata,
  path: PAGE_PATH,
  ogImage: "https://www.agsuitetech.com/images/og/og-zoho.jpg",
}) : {};

export default function IndustryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}




