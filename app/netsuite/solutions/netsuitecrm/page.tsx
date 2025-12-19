import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function NetSuiteCRMPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="360-Degree Customer View with NetSuite CRM"
      subtitle="Customer Relationship Management"
      description="Oracle NetSuite CRM delivers powerful customer relationship management capabilities, including sales force automation, marketing automation, and customer service management, all in a single cloud solution."
      ctaText="Strengthen Your Customer Relationships"
      features={[
        {
          title: "Sales Force Automation",
          description: "Equip your sales team with real-time visibility into every aspect of the customer relationship."
        },
        {
          title: "Marketing Automation",
          description: "Target, build, and execute highly personalized marketing campaigns across multiple channels."
        },
        {
          title: "Partner Relationship Management",
          description: "Collaborate with partners in real-time and manage your indirect sales channels effectively."
        }
      ]}
    />
  );
}
