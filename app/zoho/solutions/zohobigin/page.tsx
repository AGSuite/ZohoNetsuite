import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoBiginPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Simplified CRM for Small Businesses"
      subtitle="Zoho Bigin"
      description="Bigin is a pipeline-centric CRM built specifically for small businesses to manage their customer relationships and close deals faster with zero complexity."
      ctaText="Start Your Growth Journey"
      features={[
        { title: "Pipeline Management", description: "Visualize your sales process and move deals forward with ease." },
        { title: "Built-in Telephony", description: "Make and receive calls directly within your CRM to stay connected." },
        { title: "Workflows", description: "Automate routine tasks like sending emails and updating deal stages." }
      ]}
    />
  );
}
