"use client";

import React from "react";
import {
  Megaphone,
  TrendingUp,
  Target,
  Zap,
  Users,
  BarChart3,
  Globe2,
  Share2,
  Mail,
  PieChart,
  Layers,
  ShieldCheck,
  Calendar,
  MessageSquare
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoMarketingPlusPage() {
  const stats = [
    { label: "Campaign Performance", value: 40, suffix: "% Increase", icon: TrendingUp },
    { label: "Lead Conversion", value: 25, suffix: "% Boost", icon: Target },
    { label: "Marketing ROI", value: 3.5, suffix: "x", icon: Zap },
    { label: "Unified Data View", value: 100, suffix: "%", icon: ShieldCheck },
  ];

  const modules = [
    {
      title: "Marketing Automation",
      description: "Automate complex marketing journeys across multiple channels and engage customers at the perfect moment.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Social Media Management",
      description: "Schedule posts, monitor mentions, and analyze social media performance across all your brand profiles.",
      image: "/images/modules/managging together module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Email Marketing",
      description: "Create stunning email campaigns, manage subscriber lists, and track engagement with detailed analytics.",
      image: "/images/modules/working module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Survey & Feedback",
      description: "Understand your audience better with custom surveys and NPS tracking integrated into your marketing stack.",
      image: "/images/modules/any module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Event Management",
      description: "Plan, promote, and manage both virtual and in-person events with integrated registration and tracking.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Brand Management",
      description: "Maintain brand consistency across all touchpoints with shared asset libraries and approval workflows.",
      image: "/images/modules/csm modules.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Marketing Analytics",
      description: "Gain deep insights into your marketing performance with unified dashboards covering all your channels.",
      image: "/images/modules/dashbord module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Team Collaboration",
      description: "Streamline marketing operations with shared workspaces, project tracking, and real-time collaboration tools.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
  ];

  const benefits = [
    {
      title: "Unified Marketing Ecosystem",
      description: "Break down the silos between your marketing tools. Zoho Marketing Plus provides a single platform to manage everything from email to social media.",
      image: "/images/people/fourteam.webp",
      points: [
        "Consolidated view of all marketing activities",
        "Seamless data flow between different modules",
        "Consistent brand messaging across channels",
        "Reduced tool sprawl and lower costs"
      ],
    },
    {
      title: "Enhanced Customer Journey",
      description: "Deliver a personalized experience to every customer across every touchpoint. Map and automate the entire lifecycle effortlessly.",
      image: "/images/lap/lap2.webp",
      points: [
        "Multi-channel marketing automation",
        "Dynamic content and personalization",
        "Cross-channel engagement tracking",
        "Automated lead scoring and nurturing"
      ],
    },
    {
      title: "Data-Driven Strategies",
      description: "Stop guessing and start knowing. Leverage unified analytics to understand exactly which campaigns are driving the most value.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Attribution modeling across all channels",
        "Real-time ROI tracking for every campaign",
        "Customizable marketing dashboards",
        "AI-powered insights and forecasting"
      ],
    },
    {
      title: "Collaborative Marketing",
      description: "Empower your team to work together more efficiently. Manage projects, share assets, and get approvals faster than ever.",
      image: "/images/lap/lap1.webp",
      points: [
        "Shared marketing calendars and assets",
        "Internal collaboration and chat tools",
        "Streamlined approval workflows",
        "Integrated project management"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Marketing Plus — Unified Marketing Platform"
      subtitle="Engage Your Audience. Elevate Your Brand."
      description="Zoho Marketing Plus is a unified platform that brings your entire marketing team and tools together — from email and social media to events and analytics — to deliver exceptional customer experiences."
      introDescription2="Manage all your marketing activities from a single console. Zoho Marketing Plus provides the visibility and control you need to create cohesive, high-performing campaigns that resonate with your audience."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Marketing Plus", href: "/zoho-marketing-plus" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap4.webp"
      whatIsImage="/images/zoho-dashboards/zoho-marketing-plus-dashboard.png"
      heroCard1={{
        title: "Unified Console",
        subtitle: "Everything in one marketing stack.",
        icon: Megaphone
      }}
      heroCard2={{
        title: "3.5x ROI",
        subtitle: "Driving better marketing outcomes.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Choose a plan that fits your marketing scale. Scale your engagement as your business grows.",
        plans: [
          "Standard: $25 /user/month",
          "Professional: $50 /user/month",
          "Enterprise: Custom pricing",
          "Includes 5,000 subscribers and more",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}
