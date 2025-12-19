import React from 'react';
import PageTemplate from '../../components/PageTemplate';

export default function ZohoAboutUs() {
  return (
    <PageTemplate
      theme="zoho"
      title="Empowering Businesses with AGSuite"
      subtitle="Who We Are"
      description="AGSuite is a premier technology consulting firm specializing in Zoho ecosystem transformations. We help businesses leverage the full power of cloud automation to drive growth, efficiency, and innovation."
      ctaText="Ready to transform your business?"
      features={[
        {
          title: "Our Mission",
          description: "To bridge the gap between complex business challenges and elegant technology solutions."
        },
        {
          title: "Our Vision",
          description: "To be the global leader in digital transformation, powered by the most innovative cloud platforms."
        },
        {
          title: "Our Team",
          description: "A collective of certified experts and visionary strategists dedicated to your success."
        }
      ]}
    />
  );
}
