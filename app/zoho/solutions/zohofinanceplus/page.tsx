import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoFinancePlusPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Integrated Finance Suite"
      subtitle="Zoho Finance Plus"
      description="Zoho Finance Plus is a unified suite of back-office applications that handle your accounting, inventory, expenses, and subscription billing seamlessly."
      ctaText="Unify Your Back-Office"
      features={[
        { title: "End-to-End Accounting", description: "Manage everything from payables and receivables to financial reporting." },
        { title: "Subscription Billing", description: "Automate your recurring billing and manage your customer lifecycle." },
        { title: "Spend Management", description: "Control business spending with streamlined expense reporting and approvals." }
      ]}
    />
  );
}
