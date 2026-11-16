import React from 'react';
import dynamic from 'next/dynamic';

const ZohoSolutionsClient = dynamic(() => import('@/app/zoho/solutions/components/ZohoSolutionsClient'), {
  loading: () => <div className="min-h-screen bg-[#000814] animate-pulse" />
});

export default function ZohoProductsPage() {
  return (
    <ZohoSolutionsClient
      heroCtaLabel="Sign Up for Zoho Products"
      heroCtaHref="#contact-form"
    />
  );
}
