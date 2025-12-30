import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Books | Online Accounting Software | AGSuite",
  description: "Manage your finances with Zoho Books. VAT, GST, and Tax compliance automated.",
};

export default function ZohoBooksPage() {
  const features = [
    {
      title: "Automated Accounting",
      description: "From bank reconciliations to financial reporting, automate every step of your accounting cycle.",
      image: "/images/Solutions/zoho-books-auto.webp",
      cardTitle: "Fast Reconcile",
      cardText: "Real-time bank feed integration.",
      quote: "Accuracy is the foundation of financial health."
    },
    {
      title: "Inventory Tracking",
      description: "Manage your stocks, set reorder points, and track movements across multiple warehouses.",
      image: "/images/Solutions/zoho-books-inv.webp",
      cardTitle: "Full Visibility",
      cardText: "Never run out of your best sellers.",
      quote: "Inventory is money sitting on a shelf."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Streamline Finances with Zoho Books"
      subtitle="Cloud Accounting"
      description="Modern accounting software for growing businesses. Handle invoices, expenses, and statutory compliance with ease."
      features={features}
      ctaText="Automate your finances today. Request a Zoho Books setup."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-books-hero.webp"
      heroCardTitle="GST Ready"
      heroCardText="Built-in tax compliance for 50+ countries."
      heroQuote="Good accounting is Good Business."
    />
  );
}
