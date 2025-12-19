import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoIntegrationServices() {
  return (
    <PageTemplate
      theme="zoho"
      title="Seamless Integration Services"
      subtitle="Our Services"
      description="Connect your Zoho apps with third-party systems and external databases to create a unified business ecosystem and eliminate data silos."
      ctaText="Connect Your Systems"
      features={[
        { title: "Custom APIs", description: "Develop custom APIs to connect Zoho with your unique legacy applications." },
        { title: "Third-party Apps", description: "Connect Zoho with popular apps like Shopify, Amazon, and Magento effortlessly." },
        { title: "Data Synchronization", description: "Stay updated with real-time data sync across all your business systems." }
      ]}
    />
  );
}
