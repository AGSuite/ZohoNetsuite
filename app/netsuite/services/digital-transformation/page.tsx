import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function NetSuiteDigitalTransformation() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Scale Digitally with NetSuite"
      subtitle="Our Services"
      description="Modernize your enterprise operations with NetSuite's unified cloud suite. We help you transition to a scalable, automated digital core that supports global growth."
      ctaText="Modernize Your Enterprise"
      features={[
        {
          title: "ERP Modernization",
          description: "Replace siloed legacy ERPs with a unified cloud-native platform."
        },
        {
          title: "Global Consolidation",
          description: "Streamline multi-subsidiary and multi-currency operations into a single source of truth."
        },
        {
          title: "Data Intelligence",
          description: "Harness real-time analytics to drive strategic digital decision-making."
        }
      ]}
    />
  );
}
