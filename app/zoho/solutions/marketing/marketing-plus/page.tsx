import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Marketing Plus | Unified Marketing Suite | AGSuite",
  description: "Unify your marketing team and campaigns with Zoho Marketing Plus.",
};

export default function ZohoMarketingPlusPage() {
  const features = [
    {
      title: "Holistic Campaign Management",
      description: "Manage your email, social, and web campaigns from a single dashboard with deep attribution.",
      image: "/images/Solutions/zoho-marketing-campaign.webp",
      cardTitle: "360° Reach",
      cardText: "Every channel under one platform.",
      quote: "Marketing is no longer about the stuff that you make."
    },
    {
      title: "Marketing Automation",
      description: "Lead nurturing with personalized journeys based on customer behavior and preferences.",
      image: "/images/Solutions/zoho-marketing-auto.webp",
      cardTitle: "Auto-Pilot",
      cardText: "Engage customers while you sleep.",
      quote: "Automation is the heart of personalized marketing."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Unify Your Campaigns with Marketing Plus"
      subtitle="The Ultimate Marketing Platform"
      description="Zoho Marketing Plus brings all your marketing activities into one place, giving you total visibility into your ROI."
      features={features}
      ctaText="Boost your marketing ROI. Connect with our Zoho specialists."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-marketing-hero.webp"
      heroCardTitle="Revenue Focused"
      heroCardText="Connect marketing efforts directly to sales."
      heroQuote="A brand is what people say about you when you're not in the room."
    />
  );
}
