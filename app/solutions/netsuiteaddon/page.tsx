"use client";

import React from 'react';
import PageTemplate from '../../components/PageTemplate';

export default function NetSuiteAddonPage() {
  const features = [
    {
      title: "E-Commerce Connectors",
      description: "Seamlessly integrate NetSuite with popular platforms like Magento 2, Shopify, and Amazon for unified inventory and order management."
    },
    {
      title: "India Localization",
      description: "Stay compliant with Indian tax laws, including GST reporting, e-invoicing, and legal requirements specific to the Indian market."
    },
    {
      title: "Smart Commission App",
      description: "Automate complex sales commission calculations and incentive structures directly within your NetSuite environment."
    },
    {
      title: "NetSuite Data Backup",
      description: "Ensure business continuity with automated, secure off-site backups of your critical NetSuite data and configurations."
    },
    {
      title: "Custom SuiteApps",
      description: "Extend NetSuite functionality with specialized applications tailored to your unique industry requirements and workflows."
    },
    {
      title: "Automation Tools",
      description: "Power up your productivity with custom workflows, script automation, and third-party integrations."
    }
  ];

  return (
    <PageTemplate
      title="NetSuite Add-Ons & Extensions"
      subtitle="Extend Your capabilities"
      description="Enhance your NetSuite experience with powerful add-ons, connectors, and localized solutions designed to drive efficiency and compliance."
      features={features}
      ctaText="Explore how our add-ons can supercharge your NetSuite."
      theme="netsuite"
    />
  );
}
