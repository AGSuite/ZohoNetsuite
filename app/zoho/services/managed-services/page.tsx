import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoManagedServices() {
  return (
    <PageTemplate
      theme="zoho"
      title="Complete Zoho Managed Services"
      subtitle="Our Services"
      description="Let our experts handle your entire Zoho environment, from maintenance and support to optimization and security management."
      ctaText="Manage Your Zoho Better"
      features={[
        { title: "24/7 Monitoring", description: "Keep your Zoho instance running smoothly with continuous, around-the-clock monitoring." },
        { title: "Regular Health Checks", description: "Conduct regular audits to ensure your environment is optimized and secure." },
        { title: "Expert Support", description: "Get instant access to our team of certified experts for any issues or questions." }
      ]}
    />
  );
}
