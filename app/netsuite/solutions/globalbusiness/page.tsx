import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function NetSuiteGlobalBusinessPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Unify Your Global Enterprise"
      subtitle="NetSuite Solutions"
      description="NetSuite OneWorld allows global businesses to manage all their subsidiaries, currencies, and tax laws from a single, unified cloud solution."
      ctaText="Manage Your Global Enterprise"
      features={[
        { title: "Multi-subsidiary", description: "Consolidate your financial and operational data across all your subsidiaries." },
        { title: "Multi-currency", description: "Manage multiple currencies and automate foreign exchange gains and losses." },
        { title: "Global Compliance", description: "Stay compliant with local tax laws and statutory requirements across the globe." }
      ]}
    />
  );
}
