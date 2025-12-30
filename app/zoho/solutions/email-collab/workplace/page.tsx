import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Workplace | Unified Collaboration Suite | AGSuite",
  description: "Unify your team communication and collaboration with Zoho Workplace.",
};

export default function ZohoWorkplacePage() {
  const features = [
    {
      title: "Contextual Communication",
      description: "Seamlessly switch between email, chat, and video calls without losing the context of your conversation.",
      image: "/images/Solutions/zoho-workplace-collab.webp",
      cardTitle: "Fluid Flow",
      cardText: "Teams that stay connected, produce more.",
      quote: "Collaboration is the oxygen of innovation."
    },
    {
      title: "Shared Office Suite",
      description: "Collaborate in real-time on documents, spreadsheets, and presentations with your entire team.",
      image: "/images/Solutions/zoho-workplace-docs.webp",
      cardTitle: "Live Edits",
      cardText: "Say goodbye to version control issues.",
      quote: "Work is better when done together."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Empower Your Team with Zoho Workplace"
      subtitle="Collaboration Suite"
      description="Workplace gives your team all the tools they need to communicate, collaborate, and create from anywhere."
      features={features}
      ctaText="Modernize your digital workplace. Connect with our team."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-workplace-hero.webp"
      heroCardTitle="Remote Ready"
      heroCardText="Built for the modern, distributed workforce."
      heroQuote="A company is only as good as the team it connects."
    />
  );
}
