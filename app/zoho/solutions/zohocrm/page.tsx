import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoCRMPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Master Your Sales with Zoho CRM"
      subtitle="Sales Automation"
      description="Convert more leads, engage with customers, and grow your revenue with the world's favorite CRM. Zoho CRM provides a 360-degree view of your sales cycle and helps you automate repetitive tasks so you can focus on building relationships."
      ctaText="Experience the Future of Sales"
      features={[
        {
          title: "Sales Force Automation",
          description: "Automate routine sales, marketing, and support functions that take up valuable work time."
        },
        {
          title: "Predictive Sales",
          description: "Use Zia, your AI assistant, to predict lead conversions and identify potential deals."
        },
        {
          title: "Omnichannel Engagement",
          description: "Connect with your customers across email, social media, live chat, and telephone."
        }
      ]}
    />
  );
}
