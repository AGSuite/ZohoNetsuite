import type { Metadata } from "next";
import { createServiceMetadata, ServicePageJsonLd } from "@/app/netsuite/components/ServicePageSeo";

const seo = {
  title: "AGSuite Technologies: Integration Services | Integration Solutions | AGSuite Technologies",
  description: "Discover AGSuite Technologies' Integration Services, specializing in System Integration, Software Integration, Data Integration, and Integration Solutions for seamless business operations.",
  path: "/netsuite-integration",
  serviceName: "NetSuite Integration Services",
  image: "/images/netsuiteimages/Servicesimg/integration.webp",
  keywords: ["NetSuite integration services", "NetSuite API integration", "SuiteTalk integration", "NetSuite ecommerce integration"],
};
export const metadata: Metadata = createServiceMetadata(seo);
export default function NetSuiteIntegrationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ServicePageJsonLd {...seo} />{children}</>;
}
