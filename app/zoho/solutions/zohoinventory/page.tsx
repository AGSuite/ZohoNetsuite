import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoInventoryPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Powerful Inventory Management"
      subtitle="Zoho Inventory"
      description="Zoho Inventory is a cloud-based inventory management software that helps you manage orders, track stock, and optimize your supply chain across multiple channels."
      ctaText="Optimize Your Stock Levels"
      features={[
        { title: "Multi-channel Selling", description: "Manage your inventory across multiple sales channels from one single place." },
        { title: "Order Fulfillment", description: "Simplify the shipping process and track orders until they reach your customers." },
        { title: "Warehouse Management", description: "Manage stock across multiple warehouses and track transfers easily." }
      ]}
    />
  );
}
