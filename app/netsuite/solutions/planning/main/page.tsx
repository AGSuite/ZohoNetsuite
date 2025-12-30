import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite Planning and Budgeting | NSPB | AGSuite",
  description: "Improve your financial forecasting and budgeting with NetSuite Planning and Budgeting (NSPB).",
};

export default function NetSuitePlanningPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Strategic Planning & Budgeting"
      subtitle="NSPB"
      description="Modernize your financial planning with automated workflows and powerful what-if modeling. NetSuite Planning and Budgeting ensures your strategy is backed by data."
      ctaText="Plan Your Future"
      isSolutionPage={true}
      heroImage="/images/Dashboard/planning-hero.webp"
      heroCardTitle="What-if Pro"
      heroCardText="Model every business scenario instantly."
      heroQuote="Strategy is a hypothesis; planning is how you test it."
      features={[
        {
          title: "Automated Budgeting",
          description: "Eliminate manual spreadsheets and consolidate budgets from multiple departments automatically.",
          image: "/images/Solutions/budgeting.webp",
          cardTitle: "Sync Logic",
          cardText: "Centralized planning for all departments.",
          quote: "A budget is more than numbers; it's an expression of priorities."
        },
        {
          title: "Financial Forecasting",
          description: "Use real-time data to generate accurate financial forecasts and adjust to market changes dynamically.",
          image: "/images/Solutions/forecasting.webp",
          cardTitle: "Predictive Flow",
          cardText: "Forecast adjustments with live ERP data.",
          quote: "Forecasting is the bridge between today and tomorrow."
        }
      ]}
    />
  );
}
