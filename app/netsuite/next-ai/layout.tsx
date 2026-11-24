import type { Metadata } from "next";
import { createServiceMetadata, ServicePageJsonLd } from "@/app/netsuite/components/ServicePageSeo";

const seo = {
  title: "NetSuite Next AI | Artificial Intelligence in NetSuite | AGSuite Technologies",
  description: "Oracle NetSuite Next AI brings intelligent automation, predictive insights, and real-time decision-making directly into your NetSuite ERP environment.",
  path: "/netsuite/next-ai",
  serviceName: "NetSuite Next AI Solutions",
  image: "/images/lap/Next AI Dashboard.webp",
  keywords: ["NetSuite Next AI", "NetSuite artificial intelligence", "Ask Oracle AI", "AI-powered ERP"],
};
export const metadata: Metadata = createServiceMetadata(seo);
export default function NetSuiteNextAILayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ServicePageJsonLd {...seo} />{children}</>;
}
