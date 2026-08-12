import { buildMetadata, INDUSTRY_PAGES } from "@/app/lib/seo";

const PAGE_PATH = "/netsuite/industries/telecom-industry";
const pageMetadata = INDUSTRY_PAGES[PAGE_PATH];

export const metadata = pageMetadata ? buildMetadata({
  ...pageMetadata,
  path: PAGE_PATH,
  ogImage: "https://www.agsuitetech.com/images/og/og-netsuite.jpg",
}) : {};

export default function TelecomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}




