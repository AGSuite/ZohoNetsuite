import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoAnalyticsPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Intelligent Business Intelligence"
      subtitle="Zoho Analytics"
      description="Zoho Analytics is a powerful business intelligence and data analytics platform that helps you visualize your data and gain deep insights into your business performance."
      ctaText="Gain Deeper Insights Today"
      features={[
        { title: "Data Preparation", description: "Clean, transform, and prepare your data for analysis with ease." },
        { title: "Visual Analytics", description: "Create stunning dashboards and reports to visualize your business data." },
        { title: "AI Insights", description: "Get intelligent insights and predictions using Zia, your AI assistant." }
      ]}
    />
  );
}
