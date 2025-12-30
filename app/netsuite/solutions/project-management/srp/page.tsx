import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "NetSuite SRP | Services Resource Planning | AGSuite",
  description: "Optimize your services business with NetSuite SRP. Manage projects, resources, and finances in one platform.",
};

export default function NetSuiteSRPPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Optimize Projects with SRP"
      subtitle="Services Resource Planning"
      description="Maximize profitability and streamline operations for your services-based business. NetSuite SRP provides end-to-end management for professional services firms."
      ctaText="Optimize Your Projects"
      isSolutionPage={true}
      heroImage="/images/Dashboard/srp-hero.webp"
      heroCardTitle="Project Health"
      heroCardText="Complete visibility into project margins."
      heroQuote="Service excellence is built on data-driven planning."
      features={[
        {
          title: "Project Management",
          description: "Efficiently manage project schedules, resources, and deliverables in real-time.",
          image: "/images/Solutions/project.webp",
          cardTitle: "Delivery Speed",
          cardText: "On-time, on-budget project delivery.",
          quote: "Execution is the true test of any project strategy."
        },
        {
          title: "Resource Management",
          description: "Optimize utilization and ensure the right people are assigned to the right projects at the right time.",
          image: "/images/Solutions/resource.webp",
          cardTitle: "Utilization Apex",
          cardText: "Maximize billable hours and staff talent.",
          quote: "People are the most valuable resource in services."
        },
        {
          title: "Time & Expense",
          description: "Simplify time tracking and expense reporting to accelerate billing and reimbursement cycles.",
          image: "/images/Solutions/time-expense.webp",
          cardTitle: "Revenue Leakage Fix",
          cardText: "Capture every billable minute effortlessly.",
          quote: "Financial integrity starts with accurate time tracking."
        }
      ]}
    />
  );
}
