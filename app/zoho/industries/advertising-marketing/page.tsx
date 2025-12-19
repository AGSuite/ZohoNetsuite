import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoAdvertisingIndustry() {
  return (
    <PageTemplate
      theme="zoho"
      title="Scale Your Advertising & Marketing"
      subtitle="Industries We Serve"
      description="Manage your campaigns, track your leads, and measure your ROI with Zoho's integrated marketing and analytics tools."
      ctaText="Boost Your Marketing ROI"
      features={[
        { title: "Campaign Management", description: "Plan and execute your marketing campaigns across all social channels." },
        { title: "Lead Tracking", description: "Identify and track your leads throughout their entire customer journey." },
        { title: "Marketing Analytics", description: "Measure the performance of your campaigns with detailed visual reports." }
      ]}
    />
  );
}
