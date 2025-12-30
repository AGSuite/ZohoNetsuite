import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite CRM | Customer Relationship Management | AGSuite",
  description: "Get a 360-degree view of your customers with NetSuite CRM. Automate sales, marketing, and customer service.",
};

export default function NetSuiteCRMPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Engage Better with NetSuite CRM"
      subtitle="Customer Intelligence"
      description="Deliver exceptional customer experiences with a single view of all customer interactions. From lead to cash and beyond, NetSuite CRM gives you total visibility."
      ctaText="Improve Customer Experience"
      isSolutionPage={true}
      heroImage="/images/Dashboard/crm-hero.webp"
      heroCardTitle="360° View"
      heroCardText="Complete customer history in one place."
      heroQuote="Customer centricity is the path to long-term profitability."
      features={[
        {
          title: "Sales Force Automation",
          description: "Empower your sales team with tools for lead management, forecasting, and commissions.",
          image: "/images/Solutions/sfa.webp",
          cardTitle: "Sales Boost",
          cardText: "Increase win rates with data-driven sales.",
          quote: "Success in sales is about timing and context."
        },
        {
          title: "Marketing Automation",
          description: "Target the right customers at the right time with highly personalized multi-channel campaigns.",
          image: "/images/Solutions/marketing.webp",
          cardTitle: "Campaign Pro",
          cardText: "Maximize ROI on every marketing dollar.",
          quote: "Marketing is where relationships find their voice."
        },
        {
          title: "Customer Service",
          description: "Ensure high customer satisfaction with specialized support management and self-service portals.",
          image: "/images/Solutions/support.webp",
          cardTitle: "Support Sync",
          cardText: "Real-time support status for every client.",
          quote: "Service excellence turns customers into advocates."
        }
      ]}
    />
  );
}
