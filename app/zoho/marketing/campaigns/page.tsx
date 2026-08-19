"use client";

import React from "react";
import {
  Send,
  Target,
  Zap,
  BarChart3,
  Users,
  Mail,
  CheckCircle2,
  TrendingUp,
  Globe2,
  Layers
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoCampaignsPage() {
  const stats = [
    { label: "Email Open Rate", value: 35, suffix: "% increase", icon: Mail },
    { label: "Campaign ROI", value: 75, suffix: "% higher", icon: TrendingUp },
    { label: "Team Productivity", value: 50, suffix: "%", icon: Zap },
    { label: "Lead Conversion", value: 40, suffix: "% faster", icon: Target },
  ];

  const modules = [
    {
      title: "Email Marketing",
      description: "Design beautiful, responsive emails with an easy-to-use drag-and-drop editor.",
      image: "/images/modules/marketing_automation.png",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Marketing Automation",
      description: "Create automated workflows that nurture leads through personalized journeys.",
      image: "/images/modules/intelligent_automation.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Audience Segmentation",
      description: "Segment your audience based on behavior and demographics for highly targeted campaigns.",
      image: "/images/modules/crm.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Detailed Analytics",
      description: "Track campaign performance with metrics like open rates, click-through rates, and unsubscribes.",
      image: "/images/modules/analytics_visual_analysis.png",
      color: "#4a3a8a",
      rgb: "65,45,130",
    }
  ];

  const benefits = [
    {
      title: "Personalized Outreach",
      description: "Connect with your audience in a meaningful way with content tailored to their interests.",
      image: "/images/lap/lap2.webp",
      points: [
        "Dynamic content based on recipient data",
        "A/B testing for subject lines and content",
        "Trigger-based emails for instant engagement",
        "Smart send-time optimization for better engagement"
      ],
    },
    {
      title: "Global Reach, Local Impact",
      description: "Deliver your message to customers around the world with multi-language support and compliance features.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "GDPR and CAN-SPAM compliant features",
        "Multi-language email support",
        "Integration with social media for wider reach",
        "Advanced list management and cleanup tools"
      ],
    }
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Campaigns — Powerful Email Marketing Automation"
      subtitle="Engage Your Audience, Grow Your Business."
      description="Zoho Campaigns provides the tools you need to create, send, and track effective email marketing campaigns that drive engagement and sales."
      introDescription2="With powerful automation and deep analytics, you can nurture leads and build lasting relationships with your customers through personalized email journeys."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Marketing", href: "/zoho/marketing/campaigns" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap1.webp"
      whatIsImage="/images/zoho-dashboards/zoho-marketing-plus-dashboard.png"
      heroCard1={{
        title: "Send with Precision",
        subtitle: "Reach the right inbox, every time.",
        icon: Send
      }}
      heroCard2={{
        title: "Growth Driven",
        subtitle: "Built for scalable marketing.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Flexible pricing plans designed to grow with your audience size.",
        plans: [
          "Free Plan: Up to 2,000 subscribers",
          "Standard: $3 /month (Billed annually)",
          "Professional: $4.50 /month (Billed annually)",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}




