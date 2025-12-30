import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite ERP | Core Business Management | AGSuite",
  description: "Scale your business with the world's #1 cloud ERP. Manage finance, inventory, and operations in one unified platform.",
};

export default function NetSuiteERPPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Unify Your Business with NetSuite ERP"
      subtitle="Cloud ERP"
      description="Oracle NetSuite ERP is the world's #1 cloud business management suite. It provides a unified platform to manage all your core business processes, from finance and inventory to HR and e-commerce."
      ctaText="Unify Your Operations Today"
      isSolutionPage={true}
      heroImage="/images/Dashboard/erp-hero.webp"
      heroCardTitle="Financial Core"
      heroCardText="Complete visibility into your business health."
      heroQuote="NetSuite ERP is the foundation for modern enterprise growth."
      features={[
        {
          title: "Financial Management",
          description: "Accelerate your financial close and ensure complete visibility into your financial health with automated processes.",
          image: "/images/Solutions/fin-mgmt.webp",
          cardTitle: "Fast Close",
          cardText: "Reduce closing time by up to 50%.",
          quote: "Accuracy in finance is the cornerstone of strategy."
        },
        {
          title: "Supply Chain & Inventory",
          description: "Optimize your inventory, distribution, and manufacturing processes in a single real-time system.",
          image: "/images/Solutions/supply-chain.webp",
          cardTitle: "Real-time Tracking",
          cardText: "End-to-end visibility across your supply chain.",
          quote: "Efficient logistics drive customer satisfaction."
        },
        {
          title: "Order Management",
          description: "Streamline the order-to-cash process and eliminate manual bottlenecks for faster fulfillment.",
          image: "/images/Solutions/order-mgmt.webp",
          cardTitle: "Automation",
          cardText: "Seamless flow from order to payment.",
          quote: "Speed to market defines the industry leaders."
        }
      ]}
    />
  );
}
