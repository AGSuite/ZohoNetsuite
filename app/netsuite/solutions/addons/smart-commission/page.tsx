import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Smart Commission App for NetSuite | AGSuite",
  description: "Automate sales commissions in NetSuite.",
};

export default function SmartCommissionPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Smart Commission App"
      subtitle="Sales Performance"
      description="Calculate commissions instantly. No more spreadsheets. Automated incentives for your sales team."
      ctaText="Automate Commissions"
      isSolutionPage={true}
      heroImage="/images/Solutions/commission-hero.webp"
      features={[
        { title: "Multi-Tier Logic", description: "Complex commission rules handled with ease.", image: "/images/Solutions/rules.webp" },
        { title: "Sales Dashboards", description: "Real-time visibility for sales reps into their earnings.", image: "/images/Solutions/earnings.webp" }
      ]}
    />
  );
}
