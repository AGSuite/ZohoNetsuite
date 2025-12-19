import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoOnePage() {
  return (
    <PageTemplate
      theme="zoho"
      title="The Operating System for Business"
      subtitle="Zoho One"
      description="Zoho One is a comprehensive suite of 45+ integrated business applications that help you run your entire business on the cloud. Break down silos between departments and drive cross-functional excellence."
      ctaText="Unify Your Business Today"
      features={[
        {
          title: "Complete Integration",
          description: "All your applications work together seamlessly, sharing data and providing a unified experience."
        },
        {
          title: "Centralized Admin",
          description: "Manage users, groups, and security from a single, easy-to-use administrative console."
        },
        {
          title: "Scale as You Grow",
          description: "Add new applications and users as your business expands without worrying about integration."
        }
      ]}
    />
  );
}
