import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoSupportPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="How Can We Help?"
      subtitle="Support Services"
      description="Get expert help with your Zoho applications. Our support team is dedicated to ensuring your business stays productive and your systems run smoothly."
      ctaText="Connect with Support"
      features={[
        {
          title: "Technical Resolution",
          description: "Fast and efficient fixing of any technical issues within your Zoho environment."
        },
        {
          title: "Maintenance & Updates",
          description: "Keep your systems up-to-date with the latest Zoho features and security patches."
        },
        {
          title: "Optimization Tips",
          description: "We don't just fix problems; we help you improve your usage of Zoho tools."
        }
      ]}
    />
  );
}
