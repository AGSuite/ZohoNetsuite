import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function NetSuiteAccountingPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Global Accounting Powerhouse"
      subtitle="NetSuite Solutions"
      description="NetSuite Accounting Software provides a comprehensive set of accounting and financial management capabilities to streamline your financial operations."
      ctaText="Scale Your Finance Operations"
      features={[
        { title: "Financial Reporting", description: "Generate accurate, real-time financial statements and reports in seconds." },
        { title: "Tax Management", description: "Manage taxes across multiple jurisdictions with automated compliance." },
        { title: "Cash Management", description: "Gain better visibility and control over your cash flows and bank accounts." }
      ]}
    />
  );
}
