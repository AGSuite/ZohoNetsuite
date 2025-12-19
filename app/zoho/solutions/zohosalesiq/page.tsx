import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoSalesIQPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Engage Your Website Visitors Instantly"
      subtitle="Zoho SalesIQ"
      description="Zoho SalesIQ is a customer engagement platform that helps you track website visitors, identify leads, and provide instant support through live chat and AI bots."
      ctaText="Convert Visitors into Customers"
      features={[
        { title: "Visitor Tracking", description: "See who is on your website and track their behavior in real-time." },
        { title: "Live Chat", description: "Connect with your visitors instantly and provide personalized support." },
        { title: "Answer Bots", description: "Deploy AI-powered bots to answer common questions and qualify leads 24/7." }
      ]}
    />
  );
}
