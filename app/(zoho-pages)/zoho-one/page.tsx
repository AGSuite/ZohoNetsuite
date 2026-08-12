"use client";

import React from "react";



import {
  Zap,
  TrendingUp,
  Heart,
  Target,
  ShieldCheck,
  Globe2,
  Users,
  Briefcase,
  Smartphone,
  PieChart,
  BarChart3,
  Calendar,
  Lock
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoOnePage() {
  const stats = [
    { label: "Apps Included", value: 50, suffix: "+", icon: Zap },
    { label: "Cost Savings", value: 40, suffix: "%", icon: TrendingUp },
    { label: "Admin Speed", value: 60, suffix: "%", icon: ShieldCheck },
    { label: "Active Users", value: 50, suffix: "k+", icon: Users },
  ];

  const modules = [
    {
      title: "Unified CRM",
      description: "A centralized customer platform for sales, marketing, and support to build lasting relationships.",
      image: "/images/modules/crm.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Complete Finance",
      description: "Manage accounting, inventory, and expenses in one place while staying compliant.",
      image: "/images/modules/financial_reporting_custom.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Full HR Suite",
      description: "From hiring to retirement, manage your workforce with automated processes and self-service.",
      image: "/images/modules/hr_management.png",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Marketing Suite",
      description: "Engage with customers across all channels with integrated multi-channel marketing tools.",
      image: "/images/modules/marketing_automation.png",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Project Management",
      description: "Plan, track, and collaborate on projects with ease using social features and task boards.",
      image: "/images/modules/project_management.png",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Business Intelligence",
      description: "Analyze data from all departments to make smarter decisions with automated dashboards.",
      image: "/images/modules/analytics_visual_analysis.png",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Collaboration Tools",
      description: "Enable teams to communicate with chat, email, and meetings built into the platform.",
      image: "/images/modules/analytics_collab.png",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Developer Platform",
      description: "Build custom applications and extensions to fit your specific business processes.",
      image: "/images/modules/analytics_mobile_bi.png",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Security & Admin",
      description: "Manage users, control access, and ensure compliance from a single administrative console.",
      image: "/images/zoho-mail-modules/secure-email.png",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "AI & Search",
      description: "Leverage Zia AI for smarter insights and find any piece of information with cross-app search.",
      image: "/images/modules/analytics_augmented_ai.png",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Mobile Business",
      description: "Run your entire business from your phone with native apps for every function.",
      image: "/images/modules/sc_mobile_commerce.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Custom Workflows",
      description: "Automate complex business processes across multiple apps without coding.",
      image: "/images/modules/intelligent_automation.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "One Platform for All",
      description: "Eliminate silos and messy integrations. Zoho One provides over 50+ integrated apps to run your entire operation.",
      image: "/images/people/zoho_one_benefit_1_v2.png",
      points: [
        "Unprecedent data sharing across departments",
        "Single sign-on for all business applications",
        "Unified administrative console for management",
        "Consistency in experience and design"
      ],
    },
    {
      title: "Unbeatable Value",
      description: "Get the features of 50+ enterprise-grade apps for a fraction of the cost of individual subscriptions.",
      image: "/images/people/zoho_one_benefit_2.jpg",
      points: [
        "Simplify billing with one single subscription",
        "Reduce operational costs by over 40%",
        "Regular updates and new apps at no extra cost",
        "Transparent, predictable pricing for teams"
      ],
    },
    {
      title: "Smarter Business with AI",
      description: "Leverage Zia, the AI that spans your entire business. Get insights and find data instantly with cross-platform search.",
      image: "/images/people/zoho_one_benefit_3.jpg",
      points: [
        "Predictive analytics for sales and finance",
        "Cross-app search to find any record instantly",
        "Automated data cleaning and preparation",
        "Informed decisions with holistic insights"
      ],
    },
    {
      title: "Security by Design",
      description: "Ensure your data is protected with enterprise-grade security and compliance features out of the box.",
      image: "/images/people/zoho_analytics_benefit_security.png",
      points: [
        "Centralized user management and access",
        "GDPR, SOC2, and ISO 27001 compliant",
        "Granular permissions and audit trails",
        "Secure cloud-based data storage"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho One — The Operating System for Business"
      subtitle="Zoho One: The Unified Operating System for Modern Global Enterprises"
      description="Zoho One is a comprehensive, cloud-native suite of over 50+ integrated applications designed to run your entire organization on a single platform. As a specialized Zoho One implementation partner, we help you eliminate fragmented systems and departmental silos with a unified data model that spans sales, finance, HR, and operations."
      introDescription2="With a unified data model and single sign-on across more than 50 applications, Zoho One eliminates departmental silos and provides a single source of truth for your entire organization, driving unparalleled efficiency and cost savings."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho One", href: "/zoho-one" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/zoho_one_hero.jpg"
      whatIsImage="/images/zoho-dashboards/zoho-one.webp"
      heroCard1={{
        title: "50+ Integrated Apps",
        subtitle: "One platform for all business needs.",
        icon: Zap
      }}
      heroCard2={{
        title: "40% Cost Savings",
        subtitle: "Unify apps and eliminate individual costs.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Choose the pricing model that works best for you — per employee or per user. Simple, fair, and scalable.",
        plans: [
          "All Employee: $35 /employee/month",
          "Flexible User: $100 /user/month",
          "Scale Edition: Contact for pricing",
          "Includes 50+ Full Featured Apps",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}




