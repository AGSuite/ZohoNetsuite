import React from 'react';
import PageTemplate from '../../../../components/PageTemplate';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Zoho Projects | Online Project Management | AGSuite",
  description: "Plan, track, and collaborate on your business projects with Zoho Projects.",
};

export default function ZohoProjectsPage() {
  const features = [
    {
      title: "Gantt Charts & Planning",
      description: "Visualize your project timelines and dependencies to ensure every milestone is met on time.",
      image: "/images/Solutions/zoho-projects-gantt.webp",
      cardTitle: "Time Mastery",
      cardText: "Clear timelines for complex tasks.",
      quote: "Success is the child of planning."
    },
    {
      title: "Team Collaboration",
      description: "Keep your team connected with built-in feeds, forums, and chat for real-time project updates.",
      image: "/images/Solutions/zoho-projects-collab.webp",
      cardTitle: "Synched Teams",
      cardText: "Unified communication for productivity.",
      quote: "Collaboration is the key to enterprise agility."
    }
  ];

  return (
    <PageTemplate
      theme="zoho"
      title="Master Your Deliverables with Zoho Projects"
      subtitle="Project Management Tools"
      description="Plan your project activities, assign work, manage resources and collaborate with your team to get things done on time."
      features={features}
      ctaText="Deliver projects on time. Get started with Zoho Projects today."
      isSolutionPage={true}
      heroImage="/images/Dashboard/zoho-projects-hero.webp"
      heroCardTitle="Agile Ready"
      heroCardText="Supports Waterfall, Agile, and Hybrid models."
      heroQuote="A goal without a plan is just a wish."
    />
  );
}
