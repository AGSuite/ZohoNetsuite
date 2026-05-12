"use client";

import React from "react";



import {
  Share2,
  MessageSquare,
  TrendingUp,
  Zap,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  Globe2,
  CheckCircle,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Heart
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoSocialPage() {
  const stats = [
    { label: "Engagement Rate", value: 35, suffix: "% increase", icon: Heart },
    { label: "Publishing Time", value: 50, suffix: "% lower", icon: Clock },
    { label: "Audience Reach", value: 65, suffix: "%", icon: Globe2 },
    { label: "Lead Gen ROI", value: 30, suffix: "%", icon: TrendingUp },
  ];

  const modules = [
    {
      title: "Content Publishing",
      description: "Schedule your posts for when your audience is most active and manage all your social channels from one clean dashboard.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Social Listening",
      description: "Track mentions of your brand, keywords, and competitors to understand the conversation happening on social media.",
      image: "/images/modules/dashbord module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Engage with Followers",
      description: "Never miss a comment or direct message with a unified inbox for all your social media interactions.",
      image: "/images/modules/working module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Advanced Analytics",
      description: "Measure your performance, identify best-performing content, and generate professional reports for your team.",
      image: "/images/modules/any module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Collaborative Feed",
      description: "Work with your team on post approvals, shared calendars, and internal discussions on social strategies.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Customized Reports",
      description: "Create and schedule tailor-made reports for clients or management with deep metrics on engagement and growth.",
      image: "/images/modules/module8.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Lead Generation",
      description: "Identify and capture potential leads directly from social media and sync them automatically with your Zoho CRM.",
      image: "/images/modules/sheet module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Social CRM",
      description: "Link your social media profiles with your CRM data to understand the full social lifestyle of your customers.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Integrations & APIs",
      description: "Connect Zoho Social with your existing tools and build custom workflows with powerful APIs.",
      image: "/images/modules/managging together module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Mobile App for Social",
      description: "Manage your social presence on-the-go with native mobile apps that keep you connected anywhere.",
      image: "/images/modules/account modules.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Smart Scheduling",
      description: "Leverage AI to predict the best times to post based on your audience's unique activity patterns.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Multi-Brand Management",
      description: "Manage multiple brands or client accounts with separate workspaces and permissions levels.",
      image: "/images/modules/mobile module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Complete Social Command",
      description: "Zoho Social brings all your social media activities into one platform, from planning to engagement and analytics.",
      image: "/images/people/fourteam.webp",
      points: [
        "Single dashboard for all social networks",
        "Unified inbox for community management",
        "Visual planning and content calendars",
        "Automated cross-channel publishing"
      ],
    },
    {
      title: "Data-Driven Strategy",
      description: "Stop guessing. Use powerful social analytics to identify what resonates with your audience and drive better engagement.",
      image: "/images/lap/lap2.webp",
      points: [
        "In-depth post performance metrics",
        "Audience growth and demographic data",
        "Competitor analysis and benchmarks",
        "Schedule and automate reports"
      ],
    },
    {
      title: "Seamless Team Collaboration",
      description: "Empower your marketing team to work together on social media. Manage approvals and discussions in one place.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Approval workflows for social content",
        "Shared calendars for better alignment",
        "Internal team discussions on strategies",
        "Role-based access and permissions"
      ],
    },
    {
      title: "Convert Social into Sales",
      description: "Build a bridge between social media and your bottom line. Identify potential leads and nurture them directly in your CRM.",
      image: "/images/lap/lap1.webp",
      points: [
        "Lead identification from social interactions",
        "Direct sync with Zoho CRM workflows",
        "Analyze social impact on sales pipeline",
        "Nurture relationships across channels"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Social — The Complete Social Media Marketing Platform"
      subtitle="Better Social Engagement, Stronger Brand Presence."
      description="Zoho Social is the world's most comprehensive social media management tool for businesses and agencies, helping you build your brand and grow your presence across all major networks."
      introDescription2="Manage your entire social media presence from one dashboard. Plan, schedule, and analyze your content across all global networks to build a stronger brand community."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Social", href: "/zoho-social-media-management" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho-dashboards/zoho-social-dashboard.png"
      heroCard1={{
        title: "All Networks Unified",
        subtitle: "One calendar for FB, IG, LI, and TW.",
        icon: Share2
      }}
      heroCard2={{
        title: "35% More Engagement",
        subtitle: "AI-driven scheduling for best-time-to-post.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Flexible plans built for startups, businesses, and agencies. Start growing your social presence with Zoho absolute value.",
        plans: [
          "Standard: $15 /month",
          "Professional: $35 /month",
          "Premium: $55 /month",
          "Agency: $300 /month (10 brands)",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}






