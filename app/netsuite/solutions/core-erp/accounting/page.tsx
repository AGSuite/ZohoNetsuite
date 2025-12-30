import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite Accounting Software | Cloud Financials | AGSuite",
  description: "Automate your accounting processes with NetSuite. Manage billing, revenue, and expenses in the cloud.",
};

export default function NetSuiteAccountingPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Next-Gen NetSuite Accounting"
      subtitle="Financial Management"
      description="Modernize your finance department with automated billing, revenue recognition, and expense management. NetSuite Accounting provides real-time financial data to drive your business forward."
      ctaText="Modernize Your Finance"
      isSolutionPage={true}
      heroImage="/images/Dashboard/accounting-hero.webp"
      heroCardTitle="Real-time Data"
      heroCardText="Instant access to financial performance metrics."
      heroQuote="Finance transformation starts with real-time intelligence."
      features={[
        {
          title: "Billing & Invoicing",
          description: "Automate complex billing cycles and ensure accurate invoicing for your customers.",
          image: "/images/Solutions/billing.webp",
          cardTitle: "Billing Pro",
          cardText: "Handles complex subscription and tiered billing.",
          quote: "Predictable revenue begins with automated billing."
        },
        {
          title: "Tax Management",
          description: "Manage taxes across multiple jurisdictions with automated compliance and reporting tools.",
          image: "/images/Solutions/tax.webp",
          cardTitle: "Global Compliance",
          cardText: "Automated tax calculations for 100+ countries.",
          quote: "Compliance is complex, but the solution shouldn't be."
        },
        {
          title: "Cash Management",
          description: "Gain better visibility and control over your cash flows and bank accounts with integrated tracking.",
          image: "/images/Solutions/cash-mgmt.webp",
          cardTitle: "Liquidity Control",
          cardText: "Monitor cash position in real-time.",
          quote: "Cash flow is the lifeblood of every enterprise."
        }
      ]}
    />
  );
}
