import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite SuiteSuccess | Rapid Implementation | AGSuite",
  description: "Get up and running on NetSuite in record time with SuiteSuccess. Industry-specific best practices and rapid deployment.",
};

export default function NetSuiteSuiteSuccessPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Rapid Value with SuiteSuccess"
      subtitle="Implementation Methodology"
      description="Don't wait months for ROI. SuiteSuccess delivers industry-leading best practices and pre-configured modules to get your business live on NetSuite faster."
      ctaText="Succeed Faster"
      isSolutionPage={true}
      heroImage="/images/Dashboard/suitesuccess-hero.webp"
      heroCardTitle="Zero to Live"
      heroCardText="Phased implementation for immediate value."
      heroQuote="Success shouldn't take forever. It should be built in."
      features={[
        {
          title: "Industry Best Practices",
          description: "Leverage decades of domain expertise with pre-built KPIs, roles, and workflows tailored for your specific industry.",
          image: "/images/Solutions/best-practices.webp",
          cardTitle: "Pre-Configured",
          cardText: "90% of your business needs, out of the box.",
          quote: "Efficiency is doing things right the first time."
        },
        {
          title: "Phased Deployment",
          description: "Start with what you need now and scale as you grow. The SuiteSuccess ladder ensures continuous business transformation.",
          image: "/images/Solutions/ladder.webp",
          cardTitle: "Agile Scale",
          cardText: "Grow your capabilities as you grow your business.",
          quote: "A journey of a thousand miles begins with a successful first phase."
        }
      ]}
    />
  );
}
