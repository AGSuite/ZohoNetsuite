import type { Metadata } from "next";
import { createServiceMetadata, ServicePageJsonLd } from "@/app/netsuite/components/ServicePageSeo";

const seo = {
  title: "AGSuite Technologies: Low-Code Application Development Solutions",
  description: "Explore AGSuite Technologies' Low-Code Application Development, offering top Low-Code Solutions and Application Development Software for seamless innovation.",
  path: "/netsuite/low-code-application-development",
  serviceName: "NetSuite Low-Code Application Development",
  image: "/images/netsuiteimages/Servicesimg/low code.webp",
  keywords: ["NetSuite low-code development", "NetSuite SuiteApp development", "SuiteFlow automation", "SuiteScript development"],
};
export const metadata: Metadata = createServiceMetadata(seo);
export default function LowCodeDevelopmentLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><ServicePageJsonLd {...seo} />{children}</>;
}
