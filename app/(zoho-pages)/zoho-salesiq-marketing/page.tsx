"use client";

import React from "react";
import { 
  TrendingUp, 
  Target, 
  ShieldCheck, 
  Zap,
  Clock,
  Eye,
  Bot,
  Megaphone,
  MousePointer2,
  PieChart,
  Users,
  Search,
  MessageSquare
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoSalesIqMarketingPage() {
  const stats = [
    { label: "Lead Generation", value: 45, suffix: "% increase", icon: Megaphone },
    { label: "Marketing ROI", value: 60, suffix: "% higher", icon: TrendingUp },
    { label: "Customer Insights", value: 100, suffix: "% real-time", icon: Search },
    { label: "Visitor Engagement", value: 3.5, suffix: "x boost", icon: Users },
  ];

  const modules = [
    {
      title: "Marketing Attribution",
      description: "Track which marketing campaigns and channels are driving the most high-value visitors to your site.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Visitor Insights",
      description: "Analyze visitor demographics, geographic location, and search intent to refine your marketing messaging.",
      image: "/images/modules/dashbord module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Campaign Tracking",
      description: "Monitor the performance of your PPC, email, and social media campaigns with custom tracking parameters.",
      image: "/images/modules/module8.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Proactive Engagement",
      description: "Use behavioral triggers to engage visitors who have shown interest in specific marketing assets or product pages.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Lead Qualification Bots",
      description: "Deploy Zobots to qualify leads based on marketing criteria before they reach your sales team.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "A/B Testing Content",
      description: "Test different chat triggers and greetings to see which marketing hooks convert best with your audience.",
      image: "/images/modules/any module.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    }
  ];

  const benefits = [
    {
      title: "Data-Driven Marketing",
      description: "Stop flying blind. Zoho SalesIQ for Marketing provides the behavioral data you need to optimize your marketing spend.",
      image: "/images/lap/lap3.webp",
      points: [
        "Track campaign-to-chat conversion",
        "Identify high-performing ad sources",
        "Analyze visitor bounce patterns",
        "Optimize landing page performance"
      ],
    },
    {
      title: "Personalized Experiences",
      description: "Deliver the right message to the right person at the right time based on their previous marketing interactions.",
      image: "/images/lap/lap4.webp",
      points: [
        "Geo-targeted marketing messages",
        "Behavioral segmentation for chat",
        "Returning visitor recognition",
        "Personalized lead nurturing flows"
      ],
    }
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho SalesIQ for Marketing — Visitor Tracking & Attribution"
      subtitle="Turn Your Website Traffic into Marketing Intelligence."
      description="Zoho SalesIQ for Marketing helps you track campaign performance, understand visitor intent, and engage prospects with personalized marketing messages."
      introDescription2="Maximize your marketing ROI with real-time visitor insights and automated engagement tools that help you identify and convert high-value prospects."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Marketing", href: "/zoho/solutions/marketing" },
        { label: "Zoho SalesIQ", href: "/zoho-salesiq-marketing" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho-dashboards/zoho-sales-IQ.webp"
      heroCard1={{
        title: "Marketing Insights",
        subtitle: "Track campaign performance.",
        icon: Megaphone
      }}
      heroCard2={{
        title: "Visitor Data",
        subtitle: "Real-time behavior analysis.",
        icon: Eye
      }}
      pricingInfo={{
        description: "Scale your marketing engagement with plans built for growth. Free forever for basic tracking.",
        plans: [
          "Free: Basic Tracking",
          "Basic: $7 /month",
          "Professional: $15 /month",
          "Enterprise: $25 /month",
        ],
        ctaText: "Start My Marketing Trial",
      }}
    />
  );
}
