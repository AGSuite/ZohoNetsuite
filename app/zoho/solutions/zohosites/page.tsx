import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoSitesPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Build Beautiful Websites, Fast"
      subtitle="Zoho Sites"
      description="Zoho Sites is a drag-and-drop website builder that helps you create professional, responsive websites without any coding or design experience."
      ctaText="Create Your Website Today"
      features={[
        { title: "Drag & Drop Builder", description: "Easily build your website with intuitive tools and pre-designed templates." },
        { title: "Responsive Design", description: "Your website will look great on any device, from desktops to smartphones." },
        { title: "Built-in SEO", description: "Optimize your website for search engines with built-in tools and features." }
      ]}
    />
  );
}
