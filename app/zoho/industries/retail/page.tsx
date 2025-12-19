import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoRetailIndustry() {
  return (
    <PageTemplate
      theme="zoho"
      title="Master Your Retail Operations"
      subtitle="Industries We Serve"
      description="Manage your store, inventory, and customer relationships across all your online and offline retail channels with Zoho."
      ctaText="Automate Your Retail Business"
      features={[
        { title: "Point of Sale", description: "Seamlessly manage your in-store sales and sync them with your inventory." },
        { title: "Inventory Sync", description: "Keep your stock levels in sync across your store and your online shop." },
        { title: "Customer Loyalty", description: "Build lasting relationships with your customers through personalized offers." }
      ]}
    />
  );
}
