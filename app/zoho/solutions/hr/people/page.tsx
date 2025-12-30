import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho People | HRMS Solution | AGSuite",
  description: "Simplify HR management from onboarding to retirement with Zoho People.",
};

export default function ZohoPeoplePage() {
  const features = [
    {
      title: "Self-Service Portals",
      description: "Empower your employees to manage their own leave, attendance, and profile data.",
      image: "/images/Solutions/zoho-people-self.webp",
      cardTitle: "Efficiency+",
      cardText: "Reduce HR manual queries by 60%.",
      quote: "Efficiency in people operations drives culture."
    },
    {
      title: "Performance Management",
      description: "Track KRAs, reviews, and continuous feedback to build a high-performing team.",
      image: "/images/Solutions/zoho-people-perf.webp",
      cardTitle: "Growth Map",
      cardText: "Objective data for better reviews.",
      quote: "What gets measured gets improved."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Empower Your Workforce with Zoho People"
      subtitle="HR Management System"
      description="Tailor-made HR software to manage your employees, automate your HR processes, and focus on people development."
      features={features}
      ctaText="Modernize your HR operations. Request a Zoho People trial."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-people-hero.webp"
      heroCardTitle="People First"
      heroCardText="Built for teams of any size, anywhere."
      heroQuote="The heart of your business is your people."
    />
  );
}
