import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoSoftwareIndustry() {
  return (
    <PageTemplate
      theme="zoho"
      title="Empowering Software & Tech Companies"
      subtitle="Industries We Serve"
      description="Scale your tech business with Zoho's integrated suite of tools for product management, sales automation, and customer support."
      ctaText="Scale Your Tech Business"
      features={[
        { title: "Agile Development", description: "Manage your product roadmap and sprints with Zoho Sprints." },
        { title: "Subscription Billing", description: "Automate your recurring revenue streams with Zoho Subscriptions." },
        { title: "Global Support", description: "Provide 24/7 support to your users across the globe with Zoho Desk." }
      ]}
    />
  );
}
