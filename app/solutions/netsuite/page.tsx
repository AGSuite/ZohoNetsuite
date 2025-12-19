"use client";

import React from 'react';
import PageTemplate from '../../components/PageTemplate';

export default function NetSuiteMainPage() {
  const features = [
    {
      title: "ERP & Financials",
      description: "Comprehensive cloud ERP to manage your entire business, from accounting and financial management to inventory and supply chain."
    },
    {
      title: "CRM & Sales",
      description: "A single view of your customers with powerful tools for sales force automation, marketing, and customer service."
    },
    {
      title: "Business Intelligence",
      description: "Real-time visibility into your business performance with built-in analytics and reporting across all departments."
    },
    {
      title: "Omnichannel Commerce",
      description: "Unify your online and offline business with a single commerce platform that provides a consistent brand experience."
    },
    {
      title: "Global Management",
      description: "Manage multiple subsidiaries, business units, and legal entities with OneWorld, supporting over 190 currencies."
    },
    {
      title: "Professional Services",
      description: "Optimize your service business with project management, resource management, and time & expense tracking."
    }
  ];

  return (
    <PageTemplate
      title="NetSuite Business Management Suite"
      subtitle="The #1 Cloud ERP"
      description="Scale your business with the world's most deployed cloud ERP solution. NetSuite provides a single platform to streamline all your business processes."
      features={features}
      ctaText="Ready to transform your business with NetSuite?"
      theme="netsuite"
    />
  );
}
