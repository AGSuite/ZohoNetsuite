import React from 'react';
import PageTemplate from '../../../components/PageTemplate';

export default function ZohoRecruitPage() {
  return (
    <PageTemplate
      theme="zoho"
      title="Hire the Right Talent, Faster"
      subtitle="Zoho Recruit"
      description="Zoho Recruit is an applicant tracking system (ATS) and recruiting software that helps staffing agencies and HR departments source, track, and hire the best candidates."
      ctaText="Streamline Your Hiring Process"
      features={[
        { title: "Candidate Sourcing", description: "Post to multiple job boards and source candidates from social media." },
        { title: "Applicant Tracking", description: "Manage the entire recruitment lifecycle from application to offer." },
        { title: "AI Candidate Matching", description: "Let AI find the best candidates based on skills and experience." }
      ]}
    />
  );
}
