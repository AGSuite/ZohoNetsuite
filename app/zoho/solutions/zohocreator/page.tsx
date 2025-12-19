import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoCreatorPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Build Custom Apps, Faster"
      subtitle="Zoho Creator"
      description="Zoho Creator is a low-code application development platform that helps you build custom business apps to solve your unique business challenges without coding."
      ctaText="Build Your Custom App"
      features={[
        { title: "Low-code Builder", description: "Build custom apps with intuitive drag-and-drop tools and features." },
        { title: "Workflow Automation", description: "Automate your business processes with custom workflows and logic." },
        { title: "Multi-platform Access", description: "Your custom apps will work seamlessly across desktops and mobile devices." }
      ]}
    />
  );
}
