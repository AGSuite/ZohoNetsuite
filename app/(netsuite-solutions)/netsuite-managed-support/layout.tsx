import type { Metadata } from "next";
import { createServiceMetadata, ServicePageJsonLd } from "@/app/netsuite/components/ServicePageSeo";

const seo = {
  title: "Managed IT & Cloud Services | AGSuite Technologies",
  description: "AGSuite Technologies offers Managed IT & Cloud Services including 24/7 monitoring, proactive maintenance, cloud infrastructure, and IT support.",
  path: "/netsuite-managed-support",
  serviceName: "NetSuite Managed Support Services",
  image: "/images/netsuiteimages/Servicesimg/managedservices.webp",
  keywords: ["NetSuite managed support", "NetSuite support services", "NetSuite managed services", "NetSuite optimisation"],
};
export const metadata: Metadata = createServiceMetadata(seo);
export default function NetSuiteManagedSupportLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ServicePageJsonLd {...seo} />{children}</>;
}
