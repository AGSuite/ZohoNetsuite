import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoSocialPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Master Your Social Media Presence"
      subtitle="Zoho Social"
      description="Zoho Social is a social media management platform that helps businesses schedule posts, monitor mentions, and measure performance across all channels."
      ctaText="Grow Your Social Reach"
      features={[
        { title: "Smart Scheduling", description: "Schedule your posts for the best times to reach your audience automatically." },
        { title: "Social Monitoring", description: "Track brand mentions and keywords to engage with your audience in real-time." },
        { title: "Visual Analytics", description: "Measure the performance of your social media campaigns with detailed reports." }
      ]}
    />
  );
}
