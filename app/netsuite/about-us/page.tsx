import React from 'react';
import PageTemplate from '../../components/PageTemplate';

export default function NetSuiteAboutUs() {
  return (
    <PageTemplate
      theme="netsuite"
      title="Scale Your Enterprise with AGSuite"
      subtitle="Who We Are"
      description="AGSuite is a leading global NetSuite partner, providing expert implementation, optimization, and support services. We empower enterprises to achieve peak performance through Oracle NetSuite's unified cloud business suite."
      ctaText="Ready for enterprise-grade growth?"
      features={[
        {
          title: "Expert Consulting",
          description: "Our certified NetSuite consultants bring decades of industry experience to every project."
        },
        {
          title: "Strategic Partnerships",
          description: "As an Oracle NetSuite partner, we provide direct access to the latest innovations and best practices."
        },
        {
          title: "Proven Methodology",
          description: "Our structured approach ensures on-time, on-budget delivery and maximum ROI."
        }
      ]}
    />
  );
}
