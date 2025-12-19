import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoProjectsPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Plan, Track, and Collaborate"
      subtitle="Zoho Projects"
      description="Zoho Projects is a cloud-based project management software that helps you plan your work, track it efficiently, and collaborate with your team, no matter where they are."
      ctaText="Boost Your Team's Productivity"
      features={[
        { title: "Task Management", description: "Break down complex projects into manageable tasks and subtasks." },
        { title: "Gantt Charts", description: "Visualize your project schedules and track dependencies with ease." },
        { title: "Time Tracking", description: "Log billable and non-billable hours accurately with built-in timesheets." }
      ]}
    />
  );
}
