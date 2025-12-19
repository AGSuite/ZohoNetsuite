import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoITServicesIndustry() {
  return (
    <PageTemplate
      theme="zoho"
      title="Scale Your Professional Services"
      subtitle="Industries We Serve"
      description="Automate your project management, time tracking, and billing with Zoho's powerful tools designed for service providers."
      ctaText="Automate Your Service Business"
      features={[
        { title: "Project Tracking", description: "Manage your client projects and tasks with Zoho Projects." },
        { title: "Resource Management", description: "Optimize your team's billable hours and track time accurately." },
        { title: "Client Portals", description: "Provide your clients with a secure portal to track project progress." }
      ]}
    />
  );
}
