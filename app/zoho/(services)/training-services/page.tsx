"use client";

import React from "react";
import {
  GraduationCap,
  Zap,
  CheckCircle2,
  Users,
  Presentation,
  BookOpen,
  ScreenShare,
  MessageCircle,
  FileText,
  MousePointer2,
  Video,
  Monitor
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoTrainingServicesPage() {
  const stats = [
    { label: "Hours Delivered", value: 1000, suffix: "+", icon: GraduationCap },
    { label: "User Proficiency", value: 85, suffix: "%", icon: Zap },
    { label: "Client Satisfaction", value: 98, suffix: "%", icon: CheckCircle2 },
    { label: "Certified Trainers", value: 10, suffix: "+", icon: Users },
  ];

  const modules = [
    {
      title: "Role-Based Training",
      description: "Custom courses for sales, finance, marketing, and support teams — teaching exactly what they need.",
      image: "/images/people/zoho_people_benefit_growth.png",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: Presentation,
    },
    {
      title: "Admin Certification",
      description: "Upskill your internal IT team to manage roles, layouts, and automation within Zoho.",
      image: "/images/people/zoho_people_benefit_operations.png",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: BookOpen,
    },
    {
      title: "Executive Sessions",
      description: "High-level workshops for leadership on how to extract and interpret Zoho Analytics for better strategy.",
      image: "/images/people/zoho_people_plus_benefit_decisions.png",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Monitor,
    },
    {
      title: "Interactive Webinars",
      description: "Live, remote training sessions with hands-on exercises in your actual Zoho environment.",
      image: "/images/Services/zoho_training_session.png",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: Video,
    },
  ];

  const benefits = [
    {
      title: "High Adoption Rate",
      description: "Proper training reduces user resistance and ensures your team uses Zoho correctly from day one.",
      image: "/images/people/zoho_people_plus_benefit_experience.png",
      points: [
        "Interactive Q&A sessions",
        "Hand-on sandbox practice",
        "Role-specific guides",
        "Post-training support",
      ],
    },
    {
      title: "Custom Documentation",
      description: "We provide your team with tailored training manuals and video walkthroughs specific to your setup.",
      image: "/images/modules/audit_reports.png",
      points: [
        "User process guides",
        "Custom Loom videos",
        "Workflow cheat sheets",
        "Best practice checklists",
      ],
    },
    {
      title: "Reduced Support Burdens",
      description: "Empower your team with the knowledge they need to resolve minor issues internally without tickets.",
      image: "/images/people/zoho_recruit_benefit_process.png",
      points: [
        "Empowered super-users",
        "Internal self-service",
        "Fewer simple help requests",
        "Greater system confidence",
      ],
    },
    {
      title: "Phased Learning Paths",
      description: "We design training that scales with your team's comfort level, from basic navigation to advanced automation and AI reporting.",
      image: "/images/people/zoho_people_plus_benefit_journey.png",
      points: [
        "Structured curriculum design",
        "Skill-level assessments",
        "Progressive complexity",
        "Certification readiness",
      ],
    },
    {
      title: "Increased Data Integrity",
      description: "Trained users enter cleaner data. Our sessions emphasize the importance of data quality for accurate business intelligence.",
      image: "/images/modules/general_ledger_custom.png",
      points: [
        "Standardized entry protocols",
        "Validation rule awareness",
        "Database health focus",
        "Reporting accuracy boost",
      ],
    },
  ];

  const faqs = [
    {
      question: "Can you provide training on our custom Zoho field scripts?",
      answer: "Yes, we specialize in training your team on how to use any bespoke automation or custom modules we've built for your business.",
    },
    {
      question: "Is remote training available?",
      answer: "Absolutely. We conduct live, interactive remote sessions via Zoho ShowTime or Microsoft Teams, including screenshare and collaborative exercises.",
    },
    {
      question: "Do you offer on-site training sessions?",
      answer: "Yes, we can arrange for our certified trainers to visit your office for intensive, hands-on workshops tailored to your specific physical workspace and team dynamics.",
    },
    {
      question: "How long is a typical training session?",
      answer: "Our modules range from 2-hour focused deep-dives to full-day workshops. We customize the duration based on your team's schedule and the complexity of the topic.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Training Services"
      subtitle="Book Training Now"
      description="Empower your workforce. We deliver expert-led, role-based Zoho training for end-users, admins, and executives to ensure high adoption and long-term system mastery."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Training Services", href: "/zoho/training-services" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/Services/zoho_training_hero.png"
      introImage="/images/Services/zoho_srv_training_office.png"
      introTitle="Unlock the Full Potential of Your Team."
      introDescription1="Software is only as effective as the people who use it. Our Zoho training programmes bridge the gap between technical complexity and daily productivity."
      introDescription2="Whether you're a new user or looking to master advanced analytics, we provide the structured learning paths your team needs to thrive on the Zoho platform."
      faqs={faqs}
    />
  );
}




