"use client";

import React from "react";



import {
  Megaphone,
  Workflow,
  Target,
  TrendingUp,
  BarChart3,
  Calendar,
  ShieldCheck,
  Zap,
  Users,
  MousePointerClick,
  Mail,
  Share2
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoMarketingAutomationPage() {
  const stats = [
    { label: "Lead Conversion", value: 45, suffix: "%", icon: Target },
    { label: "Marketing ROI", value: 35, suffix: "%", icon: TrendingUp },
    { label: "Team Productivity", value: 50, suffix: "%", icon: Zap },
    { label: "Onboarding Speed", value: 40, suffix: "%", icon: Users },
  ];

  const modules = [
    {
      title: "Omnichannel Journeys",
      description: "Create complex, automated customer journeys across email, SMS, and advertising channels in a single visual builder.",
      image: "/images/modules/marketing_automation.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Lead Scoring",
      description: "Automatically identify your hottest leads based on their interaction and engagement levels across all touchpoints.",
      image: "/images/modules/crm.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Webinar Marketing",
      description: "Manage end-to-end webinar workflows, from registration and reminders to follow-ups and CRM sync.",
      image: "/images/modules/project_management.png",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Behavioral Tracking",
      description: "Track exactly what your prospects are doing on your website and trigger automated responses in real-time.",
      image: "/images/modules/real_time_visibility.png",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Campaign Attribution",
      description: "Understand which marketing activities are actually driving revenue with deep-dive attribution reports.",
      image: "/images/modules/financial_reporting_custom.png",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Content Marketing",
      description: "Manage your blog, content collateral, and promotional distributions from a centralized marketing hub.",
      image: "/images/modules/sc_marketing_engine.png",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Personalization Engine",
      description: "Deliver highly tailored content to each subscriber based on their preferences, behavior, and lifecycle stage.",
      image: "/images/modules/sc_rep_self_service.png",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "E-Commerce Automation",
      description: "Recover abandoned carts, send personalized product recommendations, and nurture repeat buyers automatically.",
      image: "/images/modules/ecommerce.png",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Marketing Planner",
      description: "Plan and coordinate all your marketing efforts with a centralized calendar and shared team task boards.",
      image: "/images/modules/workforce_management.png",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Advanced Reporting",
      description: "Gain 360-degree visibility into your marketing performance with detailed dashboards and ROI tracking.",
      image: "/images/modules/gbm_global_reporting.png",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Lead Management",
      description: "Sync leads seamlessly with Zoho CRM and ensure your sales team always has the full marketing context.",
      image: "/images/modules/intelligent_automation.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Mobile App",
      description: "Manage your marketing automation efforts on-the-go with native mobile apps for iOS and Android.",
      image: "/images/modules/sc_mobile_commerce.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified Marketing Command",
      description: "Consolidate your entire marketing stack into one platform. Stop jumping between tools and get a single view of your customer.",
      image: "/images/benefits/benefit_unified_platform.png",
      points: [
        "Consolidated data across channels",
        "Unified team collaboration",
        "Seamless asset management",
        "Single source of marketing truth"
      ],
    },
    {
      title: "Intelligent Customer Journeys",
      description: "Guide your leads through the funnel with automated paths that adapt to their real-time behavior and needs.",
      image: "/images/benefits/benefit_intelligent_automation.png",
      points: [
        "Visual drag-and-drop journey builder",
        "Behavior-triggered automations",
        "Dynamic content personalization",
        "Automated cross-sell/up-sell paths"
      ],
    },
    {
      title: "Precision Lead Nurturing",
      description: "Nurture every single lead according to its value and stage. Never let a qualified opportunity slip through the cracks.",
      image: "/images/benefits/benefit_crm_customer_intelligence.png",
      points: [
        "Advanced multi-criteria lead scoring",
        "Automated sales hand-off flows",
        "Personalized email nurturing",
        "Intent-based segmenting rules"
      ],
    },
    {
      title: "Closed-Loop ROI Attribution",
      description: "Know exactly which marketing dollar is driving revenue. Connect your marketing spend directly to won deals in CRM.",
      image: "/images/benefits/benefit_crm_marketing_roi.png",
      points: [
        "Multi-touch attribution models",
        "Real-time ROI dashboarding",
        "Track campaign-to-deal paths",
        "Identify high-performing channels"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Marketing Automation — Unified Success"
      subtitle="The Growth Engine for High-Performance Marketing Teams."
      description="Zoho Marketing Automation is a complete marketing platform that helps you orchestrate customer journeys, score leads, and attribute revenue with absolute precision."
      introDescription2="Beyond simple email automation, Zoho Marketing Automation empowers your team to build sophisticated omnichannel workflows. From behavioral tracking on your website to automated lead scoring and CRM synchronization, every feature is designed to bridge the gap between marketing and sales, ensuring no lead is left behind."
      introDescription3="By leveraging advanced attribution modeling and real-time analytics, you gain a 360-degree view of your marketing ROI. This level of insight allows you to optimize your budget allocation, focusing on the channels and campaigns that truly drive business growth and customer loyalty."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Marketing Automation", href: "/zoho-marketing-automation" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/zoho-dashboards/zoho-marketing-plus-dashboard.png"
      whatIsImage="/images/zoho-dashboards/zoho-marketing-automation-ai.png"
      heroCard1={{
        title: "Omnichannel Power",
        subtitle: "Unify every marketing touchpoint.",
        icon: Megaphone
      }}
      heroCard2={{
        title: "35% More ROI",
        subtitle: "Using data-driven lead nurturing.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Scale your automation as your business grows. Pay for what you use with flexible, subscriber-based plans.",
        plans: [
          "Standard: $12 /month",
          "Professional: $35 /month",
          "Enterprise: $75 /month",
          "Free Plan for small teams",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}








