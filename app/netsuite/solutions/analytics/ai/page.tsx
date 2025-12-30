import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Artificial Intelligence in NetSuite | AI ERP | AGSuite",
  description: "Leverage AI and machine learning within NetSuite to automate tasks and gain predictive insights.",
};

export default function NetSuiteAIPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Next-Gen AI in NetSuite"
      subtitle="Artificial Intelligence"
      description="Supercharge your productivity with native AI and machine learning. NetSuite AI automates routine tasks and provides intelligent suggestions across all modules."
      ctaText="Augment Your Business"
      isSolutionPage={true}
      heroImage="/images/Dashboard/ai-hero.webp"
      heroCardTitle="Intelligent Auto"
      heroCardText="AI-driven workflows for modern teams."
      heroQuote="AI isn't the future of ERP; it's the present reality."
      features={[
        {
          title: "Intelligent Insights",
          description: "Get smart recommendations and automatic anomaly detection to mitigate risks before they scale.",
          image: "/images/Solutions/ai-insights.webp",
          cardTitle: "Smart Alert",
          cardText: "Detect risks with ML-powered monitoring.",
          quote: "Intelligence is the ability to adapt to change."
        },
        {
          title: "Automated Workflows",
          description: "Reduce manual effort with AI-powered data entry, reconciliation, and customer interaction automation.",
          image: "/images/Solutions/ai-automation.webp",
          cardTitle: "Zero-Touch",
          cardText: "Automating the repetitive to focus on the creative.",
          quote: "Automation frees the mind for strategic thinking."
        }
      ]}
    />
  );
}
