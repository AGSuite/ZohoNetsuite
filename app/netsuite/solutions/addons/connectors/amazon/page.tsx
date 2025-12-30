import React from 'react';
import PageTemplate from '../../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Amazon NetSuite Connector | AGSuite",
  description: "Sync your Amazon Seller Central with NetSuite ERP.",
};

export default function AmazonConnectorPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Amazon NetSuite Connector"
      subtitle="Marketplace Integration"
      description="Automate your Amazon sales process. Sync orders, inventory, and settlement reports between Amazon and NetSuite."
      ctaText="Scale Amazon Sales"
      isSolutionPage={true}
      heroImage="/images/Solutions/amazon-hero.webp"
      features={[
        { title: "FBA Support", description: "Automated FBA inventory and fulfillment tracking.", image: "/images/Solutions/fba.webp" },
        { title: "Settlement Sync", description: "Reconcile Amazon settlements inside NetSuite automatically.", image: "/images/Solutions/settlement.webp" }
      ]}
    />
  );
}
