import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoWholesaleIndustry() {
  return (
    <PageTemplate
      theme="zoho"
      title="Optimize Your Wholesale Distribution"
      subtitle="Industries We Serve"
      description="Manage your inventory, supply chain, and order fulfillment across multiple channels with Zoho's integrated platform."
      ctaText="Optimize Your Distribution"
      features={[
        { title: "Inventory Tracking", description: "Maintain real-time visibility into your stock levels across warehouses." },
        { title: "Order Fulfillment", description: "Streamline your shipping and tracking processes for faster delivery." },
        { title: "Vendor Management", description: "Manage your supplier relationships and purchase orders efficiently." }
      ]}
    />
  );
}
