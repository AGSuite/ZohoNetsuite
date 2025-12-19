import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoITManagementPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Simplified IT Management"
      subtitle="Zoho IT Management"
      description="Zoho's IT management suite helps you manage your IT infrastructure, support your users, and stay secure with a range of powerful, easy-to-use tools."
      ctaText="Manage Your IT Better"
      features={[
        { title: "IT Asset Management", description: "Track and manage all your IT assets and licenses from one single place." },
        { title: "Service Desk", description: "Provide instant IT support to your users with a modern, fast service desk." },
        { title: "Identity Management", description: "Manage user identities and access across all your applications and systems." }
      ]}
    />
  );
}
