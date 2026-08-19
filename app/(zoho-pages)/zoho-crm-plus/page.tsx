"use client";

import React from "react";



import {
  Zap,
  Heart,
  Target,
  Layers,
  TrendingUp,
  Users,
  ShieldCheck,
  Globe2,
  Lock,
  MessageSquare,
  BarChart3,
  Search
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoCRMPlusPage() {
  const stats = [
    { label: "Customer Experience", value: 45, suffix: "% better", icon: Heart },
    { label: "Sales & Support ROI", value: 65, suffix: "%", icon: TrendingUp },
    { label: "Team Productivity", value: 50, suffix: "%", icon: Zap },
    { label: "Conversion Rate", value: 35, suffix: "%", icon: Target },
  ];

  const modules = [
    {
      title: "Advanced CRM",
      description: "Get the full power of Zoho CRM Enterprise, with advanced automation and AI-powered insights.",
      image: "/images/modules/project_management.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Omnichannel Support (Desk)",
      description: "Integrate customer support directly with your sales data for a complete customer lifecycle view.",
      image: "/images/modules/sc_rep_self_service.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Engagement (SalesIQ)",
      description: "Chat with visitors in real-time and track their behavior on your website to identify hot leads.",
      image: "/images/modules/analytics_collab.png",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Campaign Management",
      description: "Run multi-channel marketing campaigns and track their direct impact on your sales pipeline.",
      image: "/images/modules/real_time_visibility.png",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Social Media Platform",
      description: "Manage all your social channels and engage with followers directly within your CRM suite.",
      image: "/images/modules/audit_reports.png",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Surveys & Feedback",
      description: "Collect customer feedback at critical touchpoints and use it to improve your customer experience.",
      image: "/images/modules/crm.png",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Advanced Analytics",
      description: "Gain deep insights into your sales, support, and marketing performance with cross-app analytics.",
      image: "/images/modules/analytics_visual_analysis.png",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Project Management",
      description: "Convert won deals into projects and ensure a smooth handoff between sales and delivery teams.",
      image: "/images/modules/intelligent_automation.png",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "AI Assistant (Zia)",
      description: "Leverage Zia across all apps to predict conversions, detect anomalies, and suggest best actions.",
      image: "/images/modules/workforce_management.png",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Unified Admin Panel",
      description: "Centrally manage all your sales, marketing, and support tools from one single administrative console.",
      image: "/images/modules/unified_platform.png",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Telephony & SMS",
      description: "Connect with customers on their preferred channels with built-in telephony and SMS integrations.",
      image: "/images/modules/analytics_mobile_bi.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Secure Collaboration",
      description: "Communicate with teams across departments with shared feeds, chats, and document collaboration.",
      image: "/images/modules/compliance_calendar.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "The Ultimate CX Platform",
      description: "Break down the wall between sales, marketing, and support. Zoho CRM Plus provides a unified platform to deliver exceptional customer experiences.",
      image: "/images/zoho-crm-plus-benefits/cx-platform.png",
      points: [
        "Unify every stage of the customer journey",
        "Seamless data flow between sales and support",
        "Single source of truth for customer info",
        "Integrated engagement tools on one platform"
      ],
    },
    {
      title: "Unbeatable Team Productivity",
      description: "Empower your teams to work together. From marketing handoffs to support escalations, everything happens on one platform.",
      image: "/images/zoho-crm-plus-benefits/team-productivity.png",
      points: [
        "Eliminate app switching and context loss",
        "Shared customer context for all teams",
        "Automated cross-departmental workflows",
        "Centralized communication and collaboration"
      ],
    },
    {
      title: "Data-Driven CX Decisions",
      description: "Measure what matters. With cross-app analytics, you can see exactly how marketing spend or support quality impacts your sales line.",
      image: "/images/zoho-crm-plus-benefits/data-decisions.png",
      points: [
        "Unified dashboards for CX metrics",
        "Closed-loop attribution from click to close",
        "Deep performance insights across teams",
        "Predictive AI for better forecasting"
      ],
    },
    {
      title: "Simplified Administration",
      description: "Stop managing individual apps. CRM Plus gives you one place to manage users, security, and billing for your entire customer suite.",
      image: "/images/zoho-crm-plus-benefits/admin.png",
      points: [
        "One admin console for 8 powerful apps",
        "Unified user management and SSO",
        "Single invoice for the entire customer suite",
        "Enterprise-grade security across all apps"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho CRM Plus — The Unified Customer Experience Platform"
      subtitle="Zoho CRM Plus: The Unified Customer Experience (CX) Platform for Global Enterprises"
      description="Zoho CRM Plus is a powerful, all-in-one suite that unifies your sales, marketing, and support teams on a single platform to deliver exceptional customer journeys. As a specialized Zoho CX partner, we help you eliminate departmental silos by integrating Zoho CRM, Desk, Campaigns, Social, SalesIQ, and Analytics into one cohesive ecosystem with a unified admin console."
      introDescription2="Zoho CRM Plus provides a unified platform for every customer-facing team, ensuring your marketing, sales, and support departments operate in perfect sync to deliver world-class service at every touchpoint."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho CRM Plus", href: "/zoho-crm-plus" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho-dashboards/zoho-crm-plus.webp"
      heroCard1={{
        title: "8 Powerful Apps",
        subtitle: "One unified customer experience suite.",
        icon: Layers
      }}
      heroCard2={{
        title: "65% Higher ROI",
        subtitle: "Accelerated sales and support efficiency.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Get the complete CX suite for one transparent price per user. Experience absolute value with Zoho CRM Plus.",
        plans: [
          "Monthly: $60 /user/month",
          "Annual: $50 /user/month (Billed yearly)",
          "All 8 Customer Apps Included",
          "Enterprise Support Included",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}




