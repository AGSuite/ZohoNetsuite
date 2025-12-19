import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoMediaIndustry() {
  return (
    <PageTemplate
      theme="zoho"
      title="Empowering Media & Publishing"
      subtitle="Industries We Serve"
      description="Manage your content creation, distribution, and subscriber management with Zoho's integrated suite of tools."
      ctaText="Scale Your Media House"
      features={[
        { title: "Content Management", description: "Stay organized and track your content creation and approval workflows." },
        { title: "Subscriber Management", description: "Manage your subscriber relationships and automate recurring billing." },
        { title: "Unified Analytics", description: "Gain deep insights into your content performance and audience engagement." }
      ]}
    />
  );
}
