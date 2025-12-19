import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function NetSuiteSRPPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Scale Your Service Business"
      subtitle="NetSuite Solutions"
      description="NetSuite Services Resource Planning (SRP) provides a unified solution for professional services organizations to manage their entire lifecycle."
      ctaText="Scale Your Service Delivery"
      features={[
        { title: "Project Management", description: "Manage your complex client projects and tasks with ease from the cloud." },
        { title: "Resource Management", description: "Optimize your team's billable hours and track their availability in real-time." },
        { title: "Billing & Invoicing", description: "Automate your billing and invoicing processes based on project milestones." }
      ]}
    />
  );
}
