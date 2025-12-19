import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoFlowPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Automate Your Business Workflows"
      subtitle="Zoho Flow"
      description="Zoho Flow is an integration platform that helps you connect your apps and automate complex business workflows with a simple drag-and-drop interface."
      ctaText="Connect Your Apps Effortlessly"
      features={[
        { title: "App Integrations", description: "Connect hundreds of cloud apps and automate your business processes." },
        { title: "Flow Builder", description: "Create complex workflows with automated triggers, actions, and logic." },
        { title: "Live Monitoring", description: "Track your workflows in real-time and identify issues quickly." }
      ]}
    />
  );
}
