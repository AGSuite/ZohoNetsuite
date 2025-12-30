import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite Analytics Warehouse | Data Warehousing | AGSuite",
  description: "Connect all your data sources with NetSuite Analytics Warehouse. Cloud-based data storage and analysis.",
};

export default function NetSuiteAnalyticsWarehousePage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Advanced Data Warehousing"
      subtitle="Analytics Warehouse"
      description="Consolidate all your data—from NetSuite and multiple third-party sources—into a single, secure cloud data warehouse for elite-level analysis."
      ctaText="Scale Your Analytics"
      isSolutionPage={true}
      heroImage="/images/Dashboard/warehouse-hero.webp"
      heroCardTitle="Data Sync"
      heroCardText="Effortless consolidation of external data."
      heroQuote="Unify your data universe with NetSuite Analytics Warehouse."
      features={[
        {
          title: "Unified Data Storage",
          description: "A centralized repository for all your business data, optimized for high-performance querying and reporting.",
          image: "/images/Solutions/data-lake.webp",
          cardTitle: "Single Source",
          cardText: "The truth resides in unified data.",
          quote: "A single source of truth is the ultimate business asset."
        },
        {
          title: "Predictive Analytics",
          description: "Leverage advanced tools to forecast trends and predict future business outcomes with high accuracy.",
          image: "/images/Solutions/predictive.webp",
          cardTitle: "Future Focus",
          cardText: "Anticipate market shifts before they happen.",
          quote: "The future belongs to those who see it coming."
        }
      ]}
    />
  );
}
