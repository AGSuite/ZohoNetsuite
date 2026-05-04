import type { Metadata } from "next";
import { buildMetadata } from "@/app/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "NetSuite ERP Solution Provider | ERP Software | ERP System | AGSuite Technologies",
  description:
    "AGSuite Technologies is a trusted NetSuite ERP Solution Provider offering robust ERP Software, ERP Solutions, and ERP System services. We specialize in NetSuite ERP and NetSuite Financial Services to streamline your business operations.",
  path: "/netsuite-erp-solution",
  keywords: [
    "NetSuite ERP",
    "ERP Software",
    "ERP System",
    "NetSuite Implementation",
    "NetSuite ERP Solution Provider",
    "Cloud ERP Solutions",
    "NetSuite Financial Services",
    "NetSuite India",
    "ERP Services",
    "AGSuite NetSuite",
  ],
  category: "ERP Software",
  publishedTime: "2024-01-15T00:00:00Z",
  ogImage: "https://www.agsuitetech.com/images/og/og-netsuite.jpg",
});

export const erpPageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://agsuitetech.com/netsuite-erp-solution/",
      url: "https://agsuitetech.com/netsuite-erp-solution/",
      name: "NetSuite ERP Solution Provider | ERP Software | ERP System | AGSuite Technologies",
      isPartOf: { "@id": "https://agsuitetech.com/#website" },
      datePublished: "2024-03-06T11:38:48+00:00",
      dateModified: "2025-12-17T08:25:07+00:00",
      description:
        "AGSuite Technologies is a trusted NetSuite ERP Solution Provider offering robust ERP Software, ERP Solutions, and ERP System services.",
      inLanguage: "en-US",
    },
    {
      "@type": "Service",
      name: "NetSuite ERP Implementation",
      serviceType: "ERP Software",
      provider: {
        "@type": "Organization",
        name: "AGSuite Technologies",
        url: "https://agsuitetech.com",
      },
      description:
        "End-to-end NetSuite ERP implementation, configuration, and support by certified Oracle NetSuite partners.",
      areaServed: ["India", "United States", "United Kingdom", "Australia"],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://agsuitetech.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "NetSuite",
          item: "https://agsuitetech.com/netsuite",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "NetSuite ERP Solution",
          item: "https://agsuitetech.com/netsuite-erp-solution/",
        },
      ],
    },
  ],
};
