import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Analytics | Self-Service BI | AGSuite",
  description: "Visualize your business data and get actionable insights with Zoho Analytics.",
};

export default function ZohoAnalyticsPage() {
  const features = [
    {
      title: "Self-Service BI",
      description: "Ask Zia, your AI assistant, and get visualized reports instantly from complex datasets.",
      image: "/images/Solutions/zoho-analytics-bi.webp",
      cardTitle: "Zia Insights",
      cardText: "AI-driven data storytelling.",
      quote: "Without data, you're just another person with an opinion."
    },
    {
      title: "Unified Data Dashboards",
      description: "Sync data from 500+ apps and create cross-functional reports for a holistic view of your business.",
      image: "/images/Solutions/zoho-analytics-dash.webp",
      cardTitle: "Data Unify",
      cardText: "One view for all your business apps.",
      quote: "Visibility drives agility in a data-rich world."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Turn Data into Insights with Zoho Analytics"
      subtitle="Business Intelligence"
      description="Modern business intelligence and analytics software that helps you analyze your data and create stunning visualizations."
      features={features}
      ctaText="Start your data-driven journey. Explore Zoho Analytics today."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-analytics-hero.webp"
      heroCardTitle="Cross-Functional"
      heroCardText="Connect Sales, Finance, and HR data effortlessly."
      heroQuote="Data is the new oil, but intelligence is the engine."
    />
  );
}
