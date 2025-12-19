import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoExpensePage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Effortless Expense Reporting"
      subtitle="Zoho Expense"
      description="Zoho Expense is a travel and expense management software that automates expense reporting, streamlines approvals, and helps you control your company spending."
      ctaText="Manage Your Business Expenses"
      features={[
        { title: "Auto-scan Receipts", description: "Automatically extract data from receipts and create expense entries." },
        { title: "Travel Management", description: "Simplify corporate travel bookings and manage travel requests easily." },
        { title: "Direct Reimbursements", description: "Reimburse employees quickly and track payment statuses in real-time." }
      ]}
    />
  );
}
