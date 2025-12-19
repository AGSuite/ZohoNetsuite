import React from 'react';
import PageTemplate from '../../components/PageTemplate';

export default function FreeConsultation() {
  return (
    <PageTemplate
      theme="zoho"
      title="Strategic Consultation for Your Business"
      subtitle="Free Consultation"
      description="Book a session with our expert consultants to discuss your business challenges and explore how cloud automation can transform your operations. No obligations, just expert advice."
      ctaText="Book Your Slot Now"
      features={[
        {
          title: "Gap Analysis",
          description: "We'll help you identify inefficiencies in your current workflows."
        },
        {
          title: "Roadmap Planning",
          description: "Get a clear step-by-step plan for your digital transformation journey."
        },
        {
          title: "Technology Selection",
          description: "Not sure which tools you need? We'll help you pick the perfect suite for your goals."
        }
      ]}
    />
  );
}
