import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function NetSuiteSupportPage() {
  return (
    <PageTemplate
      theme="netsuite"
      title="NetSuite Support & Maintenance"
      subtitle="Enterprise Support"
      description="Ensure your enterprise runs at peak efficiency with our 24/7 NetSuite support. We provide comprehensive application management and technical troubleshooting."
      ctaText="Connect with Our Support Bureau"
      features={[
        {
          title: "Tier 1 & 2 Support",
          description: "Comprehensive resolution of functional and technical issues."
        },
        {
          title: "System Audits",
          description: "Regular health checks to ensure your NetSuite instance is optimized for performance."
        },
        {
          title: "Issue Escalation",
          description: "Direct handling of critical problems with committed response times."
        }
      ]}
    />
  );
}
