import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoMarketingPlusPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Unified Marketing Platform"
      subtitle="Zoho Marketing Plus"
      description="Zoho Marketing Plus is a unified platform that helps you plan, execute, and track all your marketing activities across different channels and teams."
      ctaText="Unify Your Marketing Teams"
      features={[
        { title: "Unified Projects", description: "Manage all your marketing campaigns and assets from one single place." },
        { title: "Team Collaboration", description: "Stay connected with your marketing team through built-in chat and meetings." },
        { title: "Brand Management", description: "Maintain brand consistency across all your marketing channels and assets." }
      ]}
    />
  );
}
