import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoPeoplePage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Simplified HR Management"
      subtitle="Zoho People"
      description="Zoho People is a cloud-based HRMS that helps you manage your employees, attendance, time-off, and performance with ease, all from a single location."
      ctaText="Automate Your HR Tasks"
      features={[
        { title: "Employee Database", description: "Maintain a centralized record of all employee information and documents." },
        { title: "Attendance & Leave", description: "Track attendance and manage leave requests with automated approvals." },
        { title: "Performance Appraisals", description: "Conduct fair and transparent performance reviews with custom templates." }
      ]}
    />
  );
}
