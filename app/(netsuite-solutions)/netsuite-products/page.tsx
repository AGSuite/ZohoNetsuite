import React from 'react';
import { Metadata } from 'next';
import NetSuiteSolutionsClient from '@/app/netsuite/solutions/components/NetSuiteSolutionsClient';

import { buildMetadata } from '@/app/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: "Top NetSuite Implantation Partner in Pune | Mumbai | Bangalore - AGSuite",
  description: "AGSuite Technologies: Best NetSuite Implementation Partner and NetSuite Solution Provider in India. Trusted NetSuite Partner in Pune, Mumbai, Bangalore for expert services and support.",
  path: "/netsuite-products",
  canonicalUrl: "https://agsuitetech.com/netsuite-products/",
  ogImage: "https://agsuitetech.com/wp-content/uploads/2024/09/logo-img.png",
  ogType: "article",
  ogSiteName: "AGSuite",
  modifiedTime: "2026-03-27T13:31:50+00:00",
  twitterCard: "summary_large_image",
  twitterLabel1: "Est. reading time",
  twitterData1: "26 minutes",
});

export default function NetSuiteProductsPage() {
  return <NetSuiteSolutionsClient />;
}
