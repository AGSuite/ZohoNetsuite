import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoCRMPlusPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="The Ultimate Sales & Marketing Platform"
      subtitle="Zoho CRM Plus"
      description="Zoho CRM Plus is a unified customer experience platform that helps you manage every stage of the customer lifecycle, from marketing and sales to customer support."
      ctaText="Unify Your Customer Experience"
      features={[
        { title: "Unified Interface", description: "Access sales, marketing, and support tools from one single dashboard." },
        { title: "Zia AI", description: "Get intelligent insights and predictions across your entire customer journey." },
        { title: "Advanced Analytics", description: "Measure the performance of every customer touchpoint with shared data." }
      ]}
    />
  );
}
