import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Creator | Low-Code App Development | AGSuite",
  description: "Build custom business applications 10x faster with Zoho's low-code platform.",
};

export default function ZohoCreatorPage() {
  const features = [
    {
      title: "Rapid App Development",
      description: "Build custom forms, workflows, and dashboards with a drag-and-drop interface. No coding required.",
      image: "/images/Solutions/zoho-creator-dev.webp",
      cardTitle: "10x Faster",
      cardText: "Launch apps in days, not months.",
      quote: "Software should be built by the people who use it."
    },
    {
      title: "Extensive Integration",
      description: "Connect your custom apps with over 400+ third-party services and the entire Zoho ecosystem.",
      image: "/images/Solutions/zoho-creator-sync.webp",
      cardTitle: "Total Sync",
      cardText: "Bridge gaps between your existing tools.",
      quote: "Connectivity is the new productivity."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Build Custom Solutions with Zoho Creator"
      subtitle="Low-Code Platform"
      description="Create powerful custom applications to solve your unique business challenges. Agile, secure, and scalable."
      features={features}
      ctaText="Have a unique requirement? Let's build it on Creator."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-creator-hero.webp"
      heroCardTitle="Developer's Choice"
      heroCardText="The world's most versatile low-code platform."
      heroQuote="If you can dream it, you can build it."
    />
  );
}
