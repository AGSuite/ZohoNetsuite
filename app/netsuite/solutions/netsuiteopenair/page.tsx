import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function NetSuiteOpenAirPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Advanced Professional Services Automation"
      subtitle="NetSuite Solutions"
      description="NetSuite OpenAir is the world's #1 cloud PSA (Professional Services Automation) solution, helping you optimize every aspect of your service delivery."
      ctaText="Optimize Your PSA Operations"
      features={[
        { title: "Time Tracking", description: "Accurately log billable and non-billable hours from anywhere, on any device." },
        { title: "Expense Management", description: "Streamline your expense reporting and approval processes across your team." },
        { title: "Rich Reporting", description: "Gain better visibility into your project profitability and team performance." }
      ]}
    />
  );
}
