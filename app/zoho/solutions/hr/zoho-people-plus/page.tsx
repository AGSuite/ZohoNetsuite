"use client";

import React from "react";
import {
  Users,
  Heart,
  Zap,
  TrendingUp,
  Clock,
  Briefcase,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  Globe2,
  Phone,
  Layers
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoPeoplePlusPage() {
  const stats = [
    { label: "Talent Acquisition", value: 40, suffix: "%", icon: TrendingUp },
    { label: "Employee Engagement", value: 85, suffix: "%", icon: Heart },
    { label: "HR Productivity", value: 50, suffix: "%", icon: Users },
    { label: "Time Saved", value: 35, suffix: "%", icon: Clock },
  ];

  const modules = [
    {
      title: "Applicant Tracking",
      description: "Source, track, and hire the best talent with an integrated applicant tracking system that streamlines recruitment.",
      image: "/images/modules/managging together module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Core HR & Payroll",
      description: "Manage your workforce data, attendance, and leave while staying compliant with unified HR and payroll solutions.",
      image: "/images/modules/dashboard module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Performance Metrics",
      description: "Conduct comprehensive appraisals with 360-degree feedback, goal setting, and continuous performance tracking.",
      image: "/images/modules/dashbord module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Expense Management",
      description: "Automate expense reporting, streamline approvals, and reimburse employees faster with a seamless expense integration.",
      image: "/images/modules/account modules.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Corporate Communication",
      description: "Keep your workforce connected with a unified social intranet to share ideas, announcements, and team achievements.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Team Collaboration",
      description: "Foster instant communication with built-in enterprise messaging, audio/video calls, and secure file sharing.",
      image: "/images/modules/working module.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
  ];

  const benefits = [
    {
      title: "Unified Employee Journey",
      description: "Zoho People Plus connects every stage of the employee lifecycle, from the first interview to retirement, in a single integrated suite.",
      image: "/images/people/fourteam.webp",
      points: [
        "End-to-end recruitment and onboarding",
        "Centralized employee data and self-service",
        "Integrated performance and learning management",
        "Seamless offboarding and exit procedures"
      ],
    },
    {
      title: "Exceptional Employee Experience",
      description: "Empower your workforce with intuitive tools that make their daily tasks easier, fostering engagement and a positive work culture.",
      image: "/images/lap/lap2.webp",
      points: [
        "Collaborative social intranet for teams",
        "Instant messaging and quick communication",
        "Mobile-first self-service portals",
        "Automated expense tracking and reimbursements"
      ],
    },
    {
      title: "Data-Backed HR Decisions",
      description: "Leverage advanced analytics across all HR verticals to uncover actionable insights and build a high-performing organization.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Cross-functional HR reporting capabilities",
        "Predictive analytics for attrition and retention",
        "Goal tracking and skill gap analysis",
        "Custom dashboards for leadership visibility"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho People Plus — Unified HR Suite"
      subtitle="Deliver Exceptional Employee Experiences."
      description="Zoho People Plus is an integrated employee experience platform that brings together HR, recruitment, payroll, and performance management to help you build and nurture a high-performing team."
      introDescription2="Zoho People Plus provides an integrated employee experience platform that covers everything from talent acquisition and core HR to employee engagement and payroll."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "HR", href: "/zoho/solutions/hr" },
        { label: "Zoho People Plus", href: "/zoho/solutions/hr/zoho-people-plus" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/laptopgirl.webp"
      whatIsImage="/images/zoho-dashboards/zoho-people.webp"
      heroCard1={{
        title: "Unified Suite",
        subtitle: "One bundle for all your HR needs.",
        icon: Layers
      }}
      heroCard2={{
        title: "Engaged Workforce",
        subtitle: "Connect and empower employees.",
        icon: Heart
      }}
      pricingInfo={{
        description: "Equip your HR team with a comprehensive suite at unbeatable value. Simple pricing for businesses scaling up.",
        plans: [
          "Monthly: $10 /user/month",
          "Annually: $8 /user/month",
          "Includes 6 Integrated HR Apps",
          "Enterprise features included",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}

