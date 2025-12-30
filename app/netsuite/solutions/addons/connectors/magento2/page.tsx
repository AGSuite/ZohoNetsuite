import React from 'react';
import PageTemplate from '../../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Magento 2 NetSuite Connector | AGSuite",
  description: "Seamlessly integrate Magento 2 with NetSuite ERP.",
};

export default function MagentoConnectorPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Magento 2 NetSuite Connector"
      subtitle="E-Commerce Integration"
      description="Connect your Magento 2 store with NetSuite ERP for real-time synchronization of inventory, orders, customers, and pricing."
      ctaText="Connect Your Store"
      isSolutionPage={true}
      heroImage="/images/Solutions/magento-hero.webp"
      features={[
        { title: "Inventory Sync", description: "Real-time stock level updates between store and ERP.", image: "/images/Solutions/inv-sync.webp" },
        { title: "Order Automation", description: "Automatically push web orders to NetSuite for fulfillment.", image: "/images/Solutions/order-auto.webp" }
      ]}
    />
  );
}
