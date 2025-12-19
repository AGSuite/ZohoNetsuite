import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoTrainingServices() {
  return (
    <PageTemplate
      theme="zoho"
      title="Expert-led Training Services"
      subtitle="Our Services"
      description="Empower your team with the knowledge and skills they need to master Zoho applications and drive maximum value for your business."
      ctaText="Upskill Your Team"
      features={[
        { title: "Customized Programs", description: "Tailored training programs based on your team's unique needs and goals." },
        { title: "Hands-on Workshops", description: "Interactive, hands-on workshops to ensure your team learns by doing." },
        { title: "Ongoing Support", description: "Get continuous support and guidance as your team masters Zoho tools." }
      ]}
    />
  );
}
