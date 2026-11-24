import type { Metadata } from "next";
import { createServiceMetadata, ServicePageJsonLd } from "@/app/netsuite/components/ServicePageSeo";

const seo = {
  title: "AGSuite Technologies: Training Services | Technical Training",
  description: "Enhance skills with AGSuite Technologies' Training Services, offering Professional Development, Technical Training, and Employee Training for optimal growth.",
  path: "/netsuite/training-services",
  serviceName: "NetSuite Training Services",
  image: "/images/netsuiteimages/Servicesimg/traning.webp",
  keywords: ["NetSuite training services", "NetSuite user training", "NetSuite administrator training", "NetSuite developer training"],
};

export const metadata: Metadata = createServiceMetadata(seo);

export default function TrainingServicesLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ServicePageJsonLd {...seo} />{children}</>;
}
