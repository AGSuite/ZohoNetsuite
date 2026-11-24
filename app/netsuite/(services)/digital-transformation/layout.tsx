import type { Metadata } from "next";
import { createServiceMetadata, ServicePageJsonLd } from "@/app/netsuite/components/ServicePageSeo";

const seo = {
  title: "AGSuite Technologies: Digital Transformation Solutions | Digital Integration",
  description: "Unlock Digital Transformation with AGSuite Technologies. Expertise in Digital Strategy, Digital Innovation, Business Transformation, and Digital Integration for business excellence.",
  path: "/netsuite/digital-transformation",
  serviceName: "NetSuite Digital Transformation Services",
  image: "/images/netsuiteimages/Servicesimg/Digital transformation.webp",
  keywords: ["NetSuite digital transformation", "cloud ERP transformation", "NetSuite process automation", "legacy system modernisation"],
};
export const metadata: Metadata = createServiceMetadata(seo);
export default function DigitalTransformationLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ServicePageJsonLd {...seo} />{children}</>;
}
