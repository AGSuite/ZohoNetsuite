import React from 'react';
import PageTemplate from '../../components/PageTemplate';

export default function ZohoContactPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Get in Touch with Our Experts"
      subtitle="Contact Us"
      description="Whether you have a question about our services, need technical support, or want to discuss a new project, our team is here to help you succeed."
      ctaText="Start the Conversation"
      features={[
        {
          title: "Sales Inquiries",
          description: "Talk to our sales team about finding the right solutions for your business growth."
        },
        {
          title: "Partnership Opportunities",
          description: "Interested in collaborating with AGSuite? Let's discuss how we can grow together."
        },
        {
          title: "General Questions",
          description: "Got a quick question? Reach out and we'll get back to you as soon as possible."
        }
      ]}
    />
  );
}
