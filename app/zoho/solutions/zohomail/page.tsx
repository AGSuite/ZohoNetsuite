import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoMailPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Secure and Ad-free Business Email"
      subtitle="Zoho Mail"
      description="Zoho Mail is a secure, encrypted, and ad-free business email service that provides a clean, fast interface for better collaboration and communication."
      ctaText="Switch to Better Email"
      features={[
        { title: "Custom Domains", description: "Create professional email addresses for everyone in your organization." },
        { title: "Email Discovery", description: "Quickly find the information you need with powerful search and filters." },
        { title: "Control Panel", description: "Manage users, aliases, and security settings from a centralized dashboard." }
      ]}
    />
  );
}
