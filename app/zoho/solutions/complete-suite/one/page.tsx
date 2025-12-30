import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho One | The Operating System for Business | AGSuite",
  description: "One suite of 45+ apps to run your entire business. Implement Zoho One with AGSuite.",
};

export default function ZohoOnePage() {
  const features = [
    {
      title: "Consolidated Operations",
      description: "Replace your patchwork of apps with a single, unified system that connects every department.",
      image: "/images/Solutions/zoho-one-ops.webp",
      cardTitle: "Unify Now",
      cardText: "End-to-end business integration.",
      quote: "One system to rule them all."
    },
    {
      title: "Centralized Admin",
      description: "Manage users, devices, and security policies from a single administrative console.",
      image: "/images/Solutions/zoho-one-admin.webp",
      cardTitle: "Total Control",
      cardText: "Secure enterprise-wide management.",
      quote: "Simplicity is the ultimate sophistication."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Run Your Entire Business on Zoho One"
      subtitle="The All-in-One Suite"
      description="Zoho One gives you one suite of more than 45 integrated web and mobile applications to run your entire business."
      features={features}
      ctaText="Ready to move to Zoho One? Let's build your implementation plan."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-one-hero.webp"
      heroCardTitle="45+ Apps"
      heroCardText="All the tools you'll ever need in one place."
      heroQuote="Unify your team, simplify your technology."
    />
  );
}
