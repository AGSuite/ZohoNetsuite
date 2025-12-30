import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Desk | Customer Service Software | AGSuite",
  description: "Provide top-notch support with Zoho's context-aware help desk software.",
};

export default function ZohoDeskPage() {
  const features = [
    {
      title: "Context-Aware Support",
      description: "Equip your agents with the history and context they need to solve tickets faster and more effectively.",
      image: "/images/Solutions/zoho-desk-context.webp",
      cardTitle: "Smart Ticketing",
      cardText: "Contextual info for 40% faster resolution.",
      quote: "Context is the difference between a good and great service."
    },
    {
      title: "Omnichannel Help Desk",
      description: "Manage support requests from email, chat, phone, social media, and your website in one place.",
      image: "/images/Solutions/zoho-desk-omni.webp",
      cardTitle: "Always-On",
      cardText: "Never miss a customer query again.",
      quote: "Service is about being there when it matters."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Build Better Relationships with Zoho Desk"
      subtitle="Help Desk Software"
      description="The industry's first context-aware help desk. Put customer service at the heart of your company."
      features={features}
      ctaText="Improve your CSAT scores. Request a Zoho Desk demo."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-desk-hero.webp"
      heroCardTitle="#1 for Value"
      heroCardText="Voted most user-friendly support platform."
      heroQuote="A satisfied customer is the best business strategy of all."
    />
  );
}
