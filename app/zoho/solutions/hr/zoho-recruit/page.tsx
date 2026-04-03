"use client";

import React from "react";
import { 
  Users, 
  Search, 
  Zap, 
  TrendingUp,
  Briefcase,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  Globe2,
  CheckCircle,
  FileText
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoRecruitPage() {
  const stats = [
    { label: "Time-to-Hire", value: 45, suffix: "% faster", icon: Zap },
    { label: "Quality of Hire", value: 30, suffix: "% higher", icon: Target },
    { label: "Compliance Rate", value: 100, suffix: "%", icon: ShieldCheck },
    { label: "Cost-per-Hire", value: 25, suffix: "% lower", icon: TrendingUp },
  ];

  const modules = [
    {
      title: "Applicant Tracking (ATS)",
      description: "Manage candidate pipelines from sourcing to onboarding with a powerful, automated tracking system.",
      image: "/images/people/fourteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Multi-Channel Sourcing",
      description: "Post jobs to 75+ job boards, social media, and your own careers page with just one click.",
      image: "/images/lap/lap1.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Resume Parsing",
      description: "Automatically extract candidate data from resumes and populate your database with searchable profiles.",
      image: "/images/lap/lap3.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Interview Scheduling",
      description: "Sync with calendars, send automated invites, and collect feedback in reality-time from the hiring team.",
      image: "/images/people/laptopmen.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Candidate Assessments",
      description: "Integrate with top assessment platforms to evaluate candidate skills before the first interview.",
      image: "/images/lap/lap2.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "CRM for Recruiters",
      description: "Treat candidates like customers with a built-in CRM for managing long-term talent relationships.",
      image: "/images/people/laptopmen2.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Collaboration Tools",
      description: "Keep the hiring team aligned with @mentions, shared notes, and collaborative candidate evaluations.",
      image: "/images/lap/lap4.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Offer Customization",
      description: "Generate professional offer letters, manage approvals, and track e-signatures within the platform.",
      image: "/images/lap/lap5.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Advanced Analytics",
      description: "Track hiring metrics, sourcing ROI, and recruiter performance with customizable dashboards.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Mobile App for Hiring",
      description: "Review resumes, schedule interviews, and provide feedback on-the-go with native mobile apps.",
      image: "/images/people/laptopgirl.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Candidate Portal",
      description: "Provide a branded, professional experience for candidates to track their own application status.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Referral Management",
      description: "Incentivize your current employees to refer top talent with an integrated referral portal.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Streamlined Hiring Process",
      description: "Zoho Recruit unifies all your hiring tools into one platform, from job posting to candidate onboarding.",
      image: "/images/people/fourteam.webp",
      points: [
        "Automated candidate tracking pipeline",
        "Centralized candidate database",
        "Integration with job boards and social",
        "Reduced manual administrative tasks"
      ],
    },
    {
      title: "Exceptional Candidate Experience",
      description: "Build a strong employer brand with a professional, frictionless application and communication experience.",
      image: "/images/lap/lap2.webp",
      points: [
        "Branded career portal for candidates",
        "Automated application status updates",
        "Mobile-friendly application process",
        "Seamless communication touchpoints"
      ],
    },
    {
      title: "Data-Driven Talent Sourcing",
      description: "Stop guessing where your best hires come from. Use powerful analytics to optimize your recruitment spend.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Sourcing channel ROI analysis",
        "Recruiter productivity dashboards",
        "Compliance and process tracking",
        "Historical hiring trend analysis"
      ],
    },
    {
      title: "Hiring Team Collaboration",
      description: "Eliminate silos in your hiring process. Get entire teams involved in finding and evaluating top talent.",
      image: "/images/lap/lap1.webp",
      points: [
        "Collaborative candidate scorecards",
        "Integrated team feedback loops",
        "Centralized hiring communication",
        "Mobile access for fast approvals"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Recruit — Powerful Talent Acquisition System"
      subtitle="Find the Right Talent, Faster."
      description="A comprehensive applicant tracking system and recruitment software that streamlines the entire hiring process for both internal teams and agencies."
      introDescription2="Designed for both staffing agencies and internal teams, Zoho Recruit automates the entire sourcing-to-hiring pipeline, letting you focus on the best-fit talent for your organization."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "HR", href: "/zoho/solutions/hr" },
        { label: "Zoho Recruit", href: "/zoho/solutions/hr/zoho-recruit" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/fourteam.webp"
      whatIsImage="/images/zoho Dashboards/zoho recruit.webp"
      heroCard1={{
        title: "Top Talent Acquisition",
        subtitle: "Unify sourcing and applicant tracking.",
        icon: Search
      }}
      heroCard2={{
        title: "45% Faster Hiring",
        subtitle: "AI-driven candidate matching and scheduling.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Flexible pricing plans for staffing agencies and internal HR teams. Scale your hiring with absolute value.",
        plans: [
          "Standard: $25 /user/month",
          "Professional: $50 /user/month",
          "Enterprise: $75 /user/month",
          "Free plan available for 1 recruiter",
        ],
        ctaText: "Start 15-Day Free Trial",
      }}
    />
  );
}
