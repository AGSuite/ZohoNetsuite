import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoManufacturingIndustry() {
  return (
    <PageTemplate
      theme="zoho"
      title="Optimize Your Manufacturing Cycles"
      subtitle="Industries We Serve"
      description="Manage your production, inventory, and supply chain across multiple factories with Zoho's integrated platform."
      ctaText="Optimize Your Production"
      features={[
        { title: "Production Planning", description: "Schedule and track your manufacturing orders and tasks with ease." },
        { title: "Quality Control", description: "Maintain high standards with built-in quality control and audit tools." },
        { title: "Supply Chain", description: "Maintain real-time visibility into your entire supply chain and inventory." }
      ]}
    />
  );
}
