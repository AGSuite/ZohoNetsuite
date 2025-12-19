import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoBooksPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Smart Financial Management with Zoho Books"
      subtitle="Finance & Accounting"
      description="Zoho Books is a comprehensive accounting platform that handles everything from invoicing and expense tracking to tax compliance and financial reporting. Keep your finances organized and your business tax-ready."
      ctaText="Streamline Your Accounting"
      features={[
        {
          title: "Automated Invoicing",
          description: "Create professional invoices and automate recurring billing for your customers."
        },
        {
          title: "Bank Reconciliation",
          description: "Fetch bank statements and categorize transactions automatically for error-free reconciliation."
        },
        {
          title: "Inventory Tracking",
          description: "Manage your stock levels and set reorder points to ensure you never run out of items."
        }
      ]}
    />
  );
}
