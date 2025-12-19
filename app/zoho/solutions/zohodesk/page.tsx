import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoDeskPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Empathetic Customer Service with Zoho Desk"
      subtitle="Customer Support"
      description="Zoho Desk is the industry's first context-aware help desk software that helps you focus on the customer. It gathers tickets from all channels and provides your agents with the context they need to resolve issues faster."
      ctaText="Redefine Your Customer Support"
      features={[
        {
          title: "Multichannel Support",
          description: "Manage tickets from email, phone, social media, and your website in one place."
        },
        {
          title: "AI-Powered Assistance",
          description: "Use Zia to identify sentiments, tag tickets, and suggest solutions to agents."
        },
        {
          title: "Self-Service Portal",
          description: "Empower customers to find their own answers with a customizable knowledge base."
        }
      ]}
    />
  );
}
