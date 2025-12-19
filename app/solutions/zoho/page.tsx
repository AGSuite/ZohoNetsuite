"use client";

import React from 'react';
import PageTemplate from '../../components/PageTemplate';

export default function ZohoMainPage() {
  const features = [
    {
      title: "Sales & Marketing",
      description: "Close more deals and reach your audience with Zoho CRM, Marketing Automation, and social media management tools."
    },
    {
      title: "Finance & Operations",
      description: "Manage your books, inventory, and warehouse with Zoho Books and Inventory, integrated for seamless operations."
    },
    {
      title: "Human Resources",
      description: "Streamline recruitment, employee management, and payroll with Zoho People and Recruit."
    },
    {
      title: "Customer Service",
      description: "Deliver exceptional support across all channels with Zoho Desk and Assist."
    },
    {
      title: "BI & Analytics",
      description: "Turn your data into actionable insights with Zoho Analytics and advanced reporting features."
    },
    {
      title: "Collaboration & Email",
      description: "Work together effectively with Zoho Mail, Cliq, and our comprehensive workplace suite."
    }
  ];

  return (
    <PageTemplate
      title="Zoho Business Solutions"
      subtitle="The Operating System for Business"
      description="Run your entire business on Zoho with a unified suite of applications designed to help you scale, automate, and succeed."
      features={features}
      ctaText="Ready to empower your team with Zoho?"
      theme="zoho"
    />
  );
}
