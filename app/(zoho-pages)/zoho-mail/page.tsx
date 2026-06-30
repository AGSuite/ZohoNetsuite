"use client";

import React from "react";



import {
  Mail,
  Heart,
  Target,
  ShieldCheck,
  TrendingUp,
  Zap,
  Lock,
  Search,
  Users,
  Calendar,
  Clock,
  Globe2
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoMailPage() {
  const stats = [
    { label: "Uptime SLA", value: 99, suffix: ".9%", icon: ShieldCheck },
    { label: "Storage Space", value: 100, suffix: " GB", icon: Zap },
    { label: "Spam Reduction", value: 98, suffix: "%", icon: Target },
    { label: "Cost Saving", value: 50, suffix: "%", icon: TrendingUp },
  ];

  const modules = [
    {
      title: "Secure Business Email",
      description: "Get a professional email address for your business with enterprise-grade security and a clean, ad-free interface.",
      image: "/images/zoho-mail-modules/secure-email.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Control Panel",
      description: "Manage your organization's email accounts, aliases, and security policies from a powerful, centralized dashboard.",
      image: "/images/zoho-mail-modules/control-panel.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Email Streams",
      description: "Transform internal email threads into social-media style discussions for better collaboration and transparency.",
      image: "/images/zoho-dashboards/zoho-cliq.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Calendar & Scheduling",
      description: "Manage your time effectively with an integrated calendar that syncs across devices and apps.",
      image: "/images/modules/compliance_calendar.png",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Tasks & Notes",
      description: "Keep track of your to-dos and capture ideas directly within your email interface for maximum productivity.",
      image: "/images/modules/project_management.png",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Mobile App",
      description: "Stay connected and manage your business communications on-the-go with full-featured mobile applications.",
      image: "/images/modules/sc_mobile_commerce.png",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Filters & Rules",
      description: "Organize your inbox automatically with powerful filters, folders, and multi-level security rules.",
      image: "/images/modules/intelligent_automation.png",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Search & Discovery",
      description: "Find any message, attachment, or contact in seconds with our lightning-fast, multi-layered search engine.",
      image: "/images/lap/dt_data_analytics_1780919132441.png",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Email Migration",
      description: "Switch to Zoho Mail seamlessly with our easy-to-use migration tools for Google Workspace and Office 365.",
      image: "/images/lap/dt_cloud_migration_1780919073716.png",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Custom Domain Support",
      description: "Build brand trust with custom domain email addresses for everyone in your organization.",
      image: "/images/modules/unified_platform.png",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Advanced Archiving",
      description: "Ensure compliance and data retention with secure, long-term email archiving and e-discovery tools.",
      image: "/images/modules/benefit_compliance.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Offline Access",
      description: "Read, draft, and manage your emails even without an internet connection with full offline capabilities.",
      image: "/images/lap/lap6_11zon.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Enterprise-Grade Security",
      description: "Protect your sensitive business data with robust security measures including 2FA, data encryption, and advanced anti-spam.",
      image: "/images/zoho-crm-benefits/security.png",
      points: [
        "End-to-end data encryption (S/MIME)",
        "Secure two-factor authentication (TFA)",
        "Multi-layer anti-spam and anti-phishing",
        "Granular administrative security controls"
      ],
    },
    {
      title: "Ad-Free & Private",
      description: "Your data belongs to you. Zoho Mail provides a completely ad-free environment and never scans your emails for marketing purposes.",
      image: "/images/zoho-dashboards/zoho-workplace-dashboard.png",
      points: [
        "Zero tracking or profiling for ads",
        "Clean, minimalist, and fast interface",
        "GDPR and HIPAA compliance built-in",
        "Strict data privacy and sovereignty"
      ],
    },
    {
      title: "Collaborative Inbox",
      description: "Turn email into a collaborative experience. Share folders, discuss threads, and work together on emails without CC/BCC.",
      image: "/images/zoho-crm-plus-benefits/team-productivity.png",
      points: [
        "Shared mailboxes for team aliases",
        "Contextual comments on email threads",
        "Folder sharing with granular permissions",
        "Direct chat integration within mail"
      ],
    },
    {
      title: "Powerfully Integrated",
      description: "Zoho Mail isn't just an inbox. It's fully integrated with Zoho CRM, Projects, and our office suite for a unified workflow.",
      image: "/images/zoho-crm-plus-benefits/cx-platform.png",
      points: [
        "Direct CRM widget for lead context",
        "Attach files from Zoho WorkDrive",
        "Create project tasks from emails",
        "Unified search across all Zoho apps"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Mail — Secure Business Email"
      subtitle="The Inbox Built for Business Collaboration."
      description="Zoho Mail is a secure, encrypted, ad-free, and privacy-guaranteed email service that helps you communicate professionally and collaborate effectively."
      introDescription2="Zoho Mail provides a secure, ad-free business email platform that combines a clean interface with powerful admin controls and seamless collaboration across your entire organization."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Mail", href: "/zoho-mail" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/zoho_solutions_hero_person.png"
      whatIsImage="/images/zoho-dashboards/zoho-mail.webp"
      heroCard1={{
        title: "99.9% Uptime SLA",
        subtitle: "Reliable, secure business communication.",
        icon: ShieldCheck
      }}
      heroCard2={{
        title: "100% Ad-Free",
        subtitle: "Private, encrypted, and ad-free inbox.",
        icon: Lock
      }}
      pricingInfo={{
        description: "Affordable plans for businesses of all sizes. Professional email that fits your budget perfectly.",
        plans: [
          "Mail Lite: $1 /user/month",
          "Mail Premium: $4 /user/month",
          "Workplace: $3 /user/month",
          "Forever Free Plan available",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}






