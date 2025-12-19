import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoMarketingAutoPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Scale Your Marketing Efforts"
      subtitle="Zoho Marketing Automation"
      description="Zoho Marketing Automation helps you attract leads, convert them into customers, and retain them with personalized marketing journeys across multiple channels."
      ctaText="Automate Your Marketing Success"
      features={[
        { title: "Lead Management", description: "Identify and track your leads throughout their entire customer journey." },
        { title: "Omnichannel Campaigns", description: "Engage your audience across email, social media, and your website." },
        { title: "Journey Builder", description: "Create personalized customer journeys with automated triggers and actions." }
      ]}
    />
  );
}
