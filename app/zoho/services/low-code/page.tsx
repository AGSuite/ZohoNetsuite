import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoLowCodeServices() {
  return (
    <PageTemplate
      theme="zoho"
      title="Rapid Low-Code App Development"
      subtitle="Our Services"
      description="Build custom business applications faster and more efficiently using Zoho's low-code developer platform and our expert guidance."
      ctaText="Build Your App Faster"
      features={[
        { title: "Rapid Prototyping", description: "Quickly build and test your application ideas with rapid prototyping." },
        { title: "Visual Development", description: "Design and build your apps with intuitive, visual drag-and-drop tools." },
        { title: "Scale with Ease", description: "Your custom apps will scale automatically as your business grows and expands." }
      ]}
    />
  );
}
