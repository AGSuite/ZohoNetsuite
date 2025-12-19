import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoFSMPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Field Service Management Excellence"
      subtitle="Zoho FSM"
      description="Zoho FSM is a field service management software that helps you manage your mobile workforce, streamline work orders, and deliver exceptional service to your customers."
      ctaText="Optimize Your Field Operations"
      features={[
        { title: "Service Scheduling", description: "Schedule and dispatch technicians based on skills and availability." },
        { title: "Mobile App", description: "Empower your field team with a mobile app to view tasks and update statuses." },
        { title: "Inventory Management", description: "Track spare parts and inventory levels in real-time across your fleet." }
      ]}
    />
  );
}
