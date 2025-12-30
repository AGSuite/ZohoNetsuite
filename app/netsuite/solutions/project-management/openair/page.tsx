import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite OpenAir | PSA Software | AGSuite",
  description: "The world's leading PSA solution. Optimize your professional services organization with OpenAir.",
};

export default function NetSuiteOpenAirPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Scale Services with OpenAir"
      subtitle="Professional Services Automation"
      description="The gold standard in PSA software. OpenAir helps global professional services organizations run their businesses more effectively while increasing project profitability."
      ctaText="Scale Your PSA"
      isSolutionPage={true}
      heroImage="/images/Dashboard/openair-hero.webp"
      heroCardTitle="PSA Leader"
      heroCardText="The choice of top global services firms."
      heroQuote="Profitability in services requires elite-level PSA tools."
      features={[
        {
          title: "Global PSA",
          description: "Robust PSA capabilities designed for large, global organizations with multiple subsidiaries.",
          image: "/images/Solutions/global-psa.webp",
          cardTitle: "Global Command",
          cardText: "Centralized control for global teams.",
          quote: "Scale requires systems that think globally."
        },
        {
          title: "Advanced Analytics",
          description: "Gain deep insights into utilization, profitability, and project performance metrics.",
          image: "/images/Solutions/psa-bi.webp",
          cardTitle: "Deep Insights",
          cardText: "Advanced reporting for services leaders.",
          quote: "Insight is the difference between profit and loss."
        }
      ]}
    />
  );
}
