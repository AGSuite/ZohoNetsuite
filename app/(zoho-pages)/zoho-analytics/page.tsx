"use client";

import React from "react";
import {
  BarChart3,
  TrendingUp,
  Target,
  Zap,
  PieChart,
  Search,
  Database,
  ShieldCheck,
  Globe2,
  Users,
  Briefcase,
  Share2,
  Clock
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoAnalyticsPage() {
  const stats = [
    { label: "Insights Generated", value: 100, suffix: "+", icon: Zap },
    { label: "Data Accuracy", value: 99.9, suffix: "%", icon: ShieldCheck },
    { label: "Decision Speed", value: 50, suffix: "%", icon: Clock },
    { label: "User Adoption", value: 85, suffix: "%", icon: Users },
  ];

  const modules = [
    {
      title: "Data Preparation",
      description: "Clean, transform, and enrich your data with automated self-service data preparation tools.",
      image: "/images/modules/sheet module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Visual Analysis",
      description: "Create stunning charts, widgets, and dashboards with an intuitive drag-and-drop interface.",
      image: "/images/modules/dashbord module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Augmented Analytics",
      description: "Leverage AI and ML for automated insights, natural language queries, and predictive forecasting.",
      image: "/images/modules/dashboard module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Collaborative Analytics",
      description: "Share reports securely and collaborate with your team with shared workspaces and comments.",
      image: "/images/modules/managging together module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Embedded Analytics",
      description: "Embed live dashboards and reports into your own applications and websites with ease.",
      image: "/images/modules/working module.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Unified Data View",
      description: "Import data from over 250+ sources including CRM, finance, and marketing apps into one place.",
      image: "/images/modules/module8.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Self-Service BI",
      description: "Empower every team member to explore data and find answers without relying on IT.",
      image: "/images/modules/any modules.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "White Labeling",
      description: "Rebrand Zoho Analytics as your own solution for clients with custom logos, domains, and styling.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Mobile BI",
      description: "Access your business insights on-the-go with native mobile apps for iOS and Android.",
      image: "/images/modules/mobile module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Smart Forecasting",
      description: "Predict future business trends accurately based on historical data patterns and seasonality.",
      image: "/images/modules/account modules.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Alerts & Notifications",
      description: "Set up smart alerts to get notified whenever key metrics cross specific thresholds.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Security & Governance",
      description: "Control data access with granular permissions and comply with global privacy standards.",
      image: "/images/modules/any module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "360° Business Visibility",
      description: "Unify data from all departments into a single source of truth for a complete view of your business health.",
      image: "/images/people/fourteam.webp",
      points: [
        "250+ pre-built connectors to popular apps",
        "Cross-functional reports for holistic insights",
        "Automated data syncing and transformation",
        "Consolidated view of finance, sales, and more"
      ],
    },
    {
      title: "AI-Powered Business Intelligence",
      description: "Go beyond basic reporting. Use Zia, our AI assistant, to get automated insights and predict future outcomes.",
      image: "/images/lap/lap2.webp",
      points: [
        "Ask Zia questions in natural language",
        "Automated anomaly detection and alerts",
        "Predictive modeling for sales and finance",
        "Smart data preparation and enrichment"
      ],
    },
    {
      title: "Faster Decision Making",
      description: "Cut down on manual data extraction and analysis time. Get real-time answers to your business questions.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Real-time dashboards with live data",
        "Automated report generation and delivery",
        "Collaborative workflows for team decisions", "Self-service BI for every department"
      ],
    },
    {
      title: "Secure & Scalable Analytics",
      description: "Protect your data while scaling your analytics as your company grows. Enterprise-grade security is built-in.",
      image: "/images/lap/lap1.webp",
      points: [
        "Granular role-based access control",
        "GDPR and SOC2 Type II compliance",
        "Audit logs and activity tracking",
        "High-performance cloud architecture"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Analytics — Modern BI & Data Analytics"
      subtitle="Zoho Analytics: Self-Service Business Intelligence and Advanced Data Analytics"
      description="Zoho Analytics is a powerful, cloud-native BI platform that enables you to transform raw data into stunning visualizations and actionable insights in minutes. As a specialized Zoho Analytics partner, we help you unify data from over 250 sources to create a single source of truth with AI-powered forecasting and automated decision support."
      introDescription2="Zoho Analytics turns your raw data into actionable insights through stunning visualizations and AI-powered dashboards that tell the real story of your business performance, driving faster and smarter strategic decisions."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Analytics", href: "/zoho-analytics" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho-dashboards/zoho-analytics-dashboard.png"
      heroCard1={{
        title: "250+ Data Sources",
        subtitle: "Unify data from popular cloud apps.",
        icon: Database
      }}
      heroCard2={{
        title: "Zia AI Insights",
        subtitle: "Ask questions, get automated insights.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Flexible, usage-based pricing that grows with your business. Start free for small teams.",
        plans: [
          "Basic: $24 /month",
          "Standard: $48 /month",
          "Premium: $112 /month",
          "Enterprise: $445 /month",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}




