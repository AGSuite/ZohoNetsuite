import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite BI | Business Intelligence & Analytics | AGSuite",
  description: "Gain real-time visibility into your business with NetSuite BI. Built-in analytics for every module.",
};

export default function NetSuiteBIPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Intelligent Decisions with BI"
      subtitle="Business Intelligence"
      description="Make informed decisions faster with NetSuite's built-in business intelligence. Dashboards, reporting, and analytics are seamlessly integrated into your workflows."
      ctaText="Unlock Your Data"
      isSolutionPage={true}
      heroImage="/images/Dashboard/bi-hero.webp"
      heroCardTitle="Real-time Viz"
      heroCardText="Instant visual metrics for every stakeholder."
      heroQuote="Data without insight is just noise."
      features={[
        {
          title: "Real-time Dashboards",
          description: "Role-based dashboards providing at-a-glance visibility into the metrics that matter most to you.",
          image: "/images/Solutions/dashboards.webp",
          cardTitle: "Custom Views",
          cardText: "Tailored insights for every role.",
          quote: "Clarity at the top starts with visibility on the desk."
        },
        {
          title: "SuiteAnalytics",
          description: "Analyze data across your entire organization with easy-to-use search and reporting tools.",
          image: "/images/Solutions/suiteanalytics.webp",
          cardTitle: "Pivot Power",
          cardText: "Deep-dive analysis without spreadsheets.",
          quote: "The best analysis happens within the application."
        }
      ]}
    />
  );
}
