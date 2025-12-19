import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoSprintsPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Agile Project Management for Modern Teams"
      subtitle="Zoho Sprints"
      description="Zoho Sprints is an agile planning and tracking tool that helps teams focus on delivering the right features at the right time with interactive backlogs and boards."
      ctaText="Deliver Better Software, Faster"
      features={[
        { title: "Backlog Planning", description: "Prioritize user stories and plan your sprints with ease." },
        { title: "Scrum Boards", description: "Visualize your work-in-progress and track task statuses in real-time." },
        { title: "Agile Reports", description: "Track your team's velocity and identify bottlenecks with burndown charts." }
      ]}
    />
  );
}
