import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Why NetSuite | World #1 Cloud ERP | AGSuite",
  description: "Discover why over 38,000 customers choose Oracle NetSuite to run their businesses.",
};

export default function WhyNetSuitePage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Why Choose Oracle NetSuite?"
      subtitle="The #1 Cloud ERP"
      description="Scale faster and smarter with the world's most deployed cloud ERP solution. Discover the power of a single database, real-time visibility, and global reach."
      ctaText="Start Your NetSuite Journey"
      isSolutionPage={true}
      heroImage="/images/Dashboard/why-hero.webp"
      heroCardTitle="Market Leader"
      heroCardText="Trusted by 38,000+ organizations."
      heroQuote="NetSuite isn't just software; it's a competitive advantage."
      features={[
        {
          title: "Born in the Cloud",
          description: "Avoid the 'version lock' of legacy systems. NetSuite was built from the ground up for the cloud.",
          image: "/images/Solutions/cloud-native.webp",
          cardTitle: "Always Modern",
          cardText: "Two major updates a year, automatically.",
          quote: "The cloud is the only way to keep pace with innovation."
        },
        {
          title: "Unified Platform",
          description: "Say goodbye to 'hairball' integrations. One unified database for ERP, CRM, and E-Commerce.",
          image: "/images/Solutions/unified.webp",
          cardTitle: "Single Truth",
          cardText: "One system to run your entire enterprise.",
          quote: "Complexity is the enemy; unification is the cure."
        }
      ]}
    />
  );
}
