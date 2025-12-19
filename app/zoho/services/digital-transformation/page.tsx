import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoDigitalTransformation() {
  return (
    <PageTemplate
      theme="zoho"
      title="Digital Transformation with Zoho"
      subtitle="Our Services"
      description="Reimagine your business processes for the digital age. We help you transition from legacy systems to a modern, automated cloud environment using Zoho's versatile platform."
      ctaText="Start Your Transformation"
      features={[
        {
          title: "Process Automation",
          description: "Identify and automate repetitive tasks to free up your team for high-value work."
        },
        {
          title: "Legacy Migration",
          description: "Safely move your data and workflows from old systems to the Zoho cloud."
        },
        {
          title: "Change Management",
          description: "Ensure smooth adoption across your organization with our expert guidance."
        }
      ]}
    />
  );
}
