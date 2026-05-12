import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Zoho Specialist Services | Implementation & Support | AGSuite",
  description: "Premium Zoho services including implementation, integration, customization, and 24/7 managed support. Scale your business in the Zoho cloud with AGSuite.",
};

const ZohoServicesClient = dynamic(() => import('./components/ZohoServicesClient'), {
  loading: () => <div className="min-h-screen bg-[#000814] animate-pulse" />
});

export default function ZohoServicesPage() {
  return <ZohoServicesClient />;
}




