import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoWorkplacePage() {
  return (
    <PageTemplate
      theme="zoho"
      title="All-in-one Collaboration Suite"
      subtitle="Zoho Workplace"
      description="Zoho Workplace is a unified suite of productivity and collaboration tools that includes email, document management, spreadsheets, and more."
      ctaText="Collaborate Better Together"
      features={[
        { title: "Team Collaboration", description: "Stay connected with your team through chat, video conferencing, and shared docs." },
        { title: "Productivity Apps", description: "Access a full suite of office applications for creating documents, sheets, and presentations." },
        { title: "Unified Search", description: "Search across all your applications to find the information you need in seconds." }
      ]}
    />
  );
}
