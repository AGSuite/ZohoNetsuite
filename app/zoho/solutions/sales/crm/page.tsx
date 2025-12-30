import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho CRM | Sales Force Automation | AGSuite",
  description: "Boost your sales with Zoho CRM implementation and consulting services.",
};

export default function ZohoCRMPage() {
  const features = [
    {
      title: "Sales Force Automation",
      description: "Automate your sales activities, track leads, and close deals faster with advanced workflow rules.",
      image: "/images/Solutions/zoho-crm-auto.webp",
      cardTitle: "Workflow Magic",
      cardText: "Save 30% more time with automation.",
      quote: "The best sales team is one that never misses a beat."
    },
    {
      title: "Omnichannel Engagement",
      description: "Engage with your customers via email, phone, social media, and live chat within a single platform.",
      image: "/images/Solutions/zoho-crm-omni.webp",
      cardTitle: "All-in-One",
      cardText: "Connect every channel seamlessly.",
      quote: "Be where your customers are."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Scale Your Sales with Zoho CRM"
      subtitle="Customer Relationship Management"
      description="Zoho CRM empowers a global network of over 250,000 businesses in 180 countries to convert more leads and engage with customers."
      features={features}
      ctaText="Optimize your sales funnel. Ready for a Zoho CRM demo?"
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-crm-hero.webp"
      heroCardTitle="Global Top-Rated"
      heroCardText="Voted #1 CRM for small to enterprise businesses."
      heroQuote="A relationship is better than a transaction."
    />
  );
}
