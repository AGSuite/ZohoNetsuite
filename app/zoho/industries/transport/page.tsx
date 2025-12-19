import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoTransportIndustry() {
  return (
    <PageTemplate
      theme="zoho"
      title="Optimize Your Transport & Logistics"
      subtitle="Industries We Serve"
      description="Manage your fleet, track shipments, and optimize your logistics operations with Zoho's integrated suite of tools."
      ctaText="Optimize Your Logistics"
      features={[
        { title: "Fleet Management", description: "Maintain real-time visibility into your vehicle locations and maintenance schedules." },
        { title: "Shipment Tracking", description: "Keep your customers updated with real-time tracking for their orders." },
        { title: "Route Optimization", description: "Optimize your delivery routes for faster and more efficient shipping." }
      ]}
    />
  );
}
