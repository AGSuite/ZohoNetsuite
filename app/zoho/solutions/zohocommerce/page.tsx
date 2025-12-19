import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoCommercePage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Run Your Entire Online Store"
      subtitle="Zoho Commerce"
      description="Zoho Commerce is an all-in-one e-commerce platform that helps you build a website, manage inventory, process payments, and ship your products."
      ctaText="Launch Your Online Store"
      features={[
        { title: "Storefront Builder", description: "Create a beautiful online store with customizable templates and themes." },
        { title: "Inventory Sync", description: "Keep your stock levels in sync across your store and back-office apps." },
        { title: "Order Management", description: "Manage taxes, shipping, and payments efficiently from a single dashboard." }
      ]}
    />
  );
}
