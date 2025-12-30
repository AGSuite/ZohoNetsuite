import React from 'react';
import PageTemplate from '../../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopify NetSuite Connector | AGSuite",
  description: "Automate your Shopify store workflows with NetSuite.",
};

export default function ShopifyConnectorPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Shopify NetSuite Connector"
      subtitle="Shopify Integration"
      description="The most reliable Shopify to NetSuite integration. Real-time sync for customers, orders, inventory, and fulfillment."
      ctaText="Connect Shopify Now"
      isSolutionPage={true}
      heroImage="/images/Solutions/shopify-hero.webp"
      features={[
        { title: "Customer Sync", description: "B2B and B2C customer data sync with personalized pricing.", image: "/images/Solutions/cust-sync.webp" },
        { title: "Flow Automation", description: "Design custom integration flows for your unique business needs.", image: "/images/Solutions/flow.webp" }
      ]}
    />
  );
}
