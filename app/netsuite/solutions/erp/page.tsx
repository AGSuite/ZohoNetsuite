import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function NetSuiteERPPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Unify Your Business with NetSuite ERP"
      subtitle="Cloud ERP"
      description="Oracle NetSuite ERP is the world's #1 cloud business management suite. It provides a unified platform to manage all your core business processes, from finance and inventory to HR and e-commerce."
      ctaText="Unify Your Operations"
      features={[
        {
          title: "Financial Management",
          description: "Accelerate your financial close and ensure complete visibility into your financial health."
        },
        {
          title: "Supply Chain",
          description: "Optimize your inventory, distribution, and manufacturing processes in a single real-time system."
        },
        {
          title: "Order Management",
          description: "Streamline the order-to-cash process and eliminate manual bottlenecks."
        }
      ]}
    />
  );
}
