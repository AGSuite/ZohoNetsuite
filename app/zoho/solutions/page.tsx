import React from 'react';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

export const metadata: Metadata = {
  title: "Zoho Implementation Partner | Top Zoho Partner | Best Zoho Partner | Pune | India",
  description: "Elevate your business with AGSuite Technologies, the top Zoho Implementation Partner in Pune, India. Unlock the full potential of Zoho solutions with our expert services",
  alternates: {
    canonical: "https://www.agsuitetech.com/zoho-products",
  },
  openGraph: {
    title: "Zoho Implementation Partner | Top Zoho Partner | Best Zoho Partner | Pune | India",
    description: "Elevate your business with AGSuite Technologies, the top Zoho Implementation Partner in Pune, India. Unlock the full potential of Zoho solutions with our expert services",
    url: "https://www.agsuitetech.com/zoho-products",
    type: "website",
  },
};

const ZohoSolutionsClient = dynamic(() => import('./components/ZohoSolutionsClient'), {
  loading: () => <div className="min-h-screen bg-[#000814] animate-pulse" />
});

export default function ZohoSolutionsPage() {
  return <ZohoSolutionsClient />;
}




