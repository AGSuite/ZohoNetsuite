import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho CRM Plus | Unified Customer Experience | AGSuite",
  description: "Deliver exceptional customer experiences across every touchpoint with Zoho CRM Plus.",
};

export default function ZohoCRMPlusPage() {
  const features = [
    {
      title: "Unified Customer View",
      description: "Bring sales, marketing, and support teams together to provide a consistent and personalized experience for every customer.",
      image: "/images/Solutions/zoho-crmplus-view.webp",
      cardTitle: "Omni-Channel",
      cardText: "Every team on the same page.",
      quote: "A unified team creates a unified customer experience."
    },
    {
      title: "Advanced Analytics",
      description: "Gain deep insights into customer behavior and team performance with integrated BI tools.",
      image: "/images/Solutions/zoho-crmplus-analytics.webp",
      cardTitle: "Data Power",
      cardText: "Actionable insights for CX leaders.",
      quote: "Measurement is the first step that leads to control."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Unify Your Customer Experience with CRM Plus"
      subtitle="The CX Platform"
      description="Zoho CRM Plus is a unified customer experience platform that helps you reach, acquire, and retain customers for life."
      features={features}
      ctaText="Elevate your customer journey. Let's discuss Zoho CRM Plus."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-crmplus-hero.webp"
      heroCardTitle="End-to-End"
      heroCardText="Complete customer lifecycle management in one suite."
      heroQuote="Customer service should not just be a department; it should be the entire company."
    />
  );
}
