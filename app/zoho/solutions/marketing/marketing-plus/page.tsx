"use client";

import React from "react";
import { 
  TrendingUp, 
  Heart, 
  Target, 
  Megaphone,
  Mail,
  Globe2,
  BarChart3,
  Search,
  Zap,
  Briefcase,
  Users,
  Smartphone,
  PieChart
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoMarketingPlusPage() {
  const stats = [
    { label: "ROI Growth", value: 35, suffix: "%", icon: TrendingUp },
    { label: "Engagement Rate", value: 65, suffix: "%", icon: Heart },
    { label: "Leads Generated", value: 50, suffix: "%", icon: Target },
    { label: "Reach Expansion", value: 80, suffix: "%", icon: Globe2 },
  ];

  const modules = [
    {
      title: "Campaign Management",
      description: "Plan, execute, and track multi-channel marketing campaigns across email, SMS, and advertising platforms.",
      image: "/images/people/fourteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Marketing Automation",
      description: "Build sophisticated customer journeys with automated triggers, branching logic, and personalized messaging.",
      image: "/images/lap/lap1.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Social Media Marketing",
      description: "Schedule posts, monitor mentions, and engage with your audience across all major social networks.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Survey & Feedback",
      description: "Design interactive surveys to capture customer insights and measure satisfaction levels in real-time.",
      image: "/images/lap/lap2.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Event Marketing",
      description: "Manage end-to-end event logistics for webinars and physical events, from registration to follow-up.",
      image: "/images/people/laptopmen2.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Brand Asset Management",
      description: "Store and organize all your marketing collateral in a centralized, secure repository accessible to your team.",
      image: "/images/lap/lap3.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Marketing Analytics",
      description: "Gain deep insights into campaign performance, customer behavior, and ROI with pre-built dashboards.",
      image: "/images/lap/lap4.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Brand Studio",
      description: "Create stunning promotional materials, social graphics, and presentations with built-in design tools.",
      image: "/images/lap/lap5.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Collaboration Tools",
      description: "Enable marketing teams to collaborate seamlessly on projects with shared workspaces and task boards.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Email Marketing",
      description: "Send personalized email newsletters and automated follow-ups with high deliverability rates.",
      image: "/images/lap/lap7_11zon.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Webinar Management",
      description: "Host engaging webinars, share screens, and interact with participants to build brand authority.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Form Builder",
      description: "Create high-converting lead capture forms for your website and landing pages without coding.",
      image: "/images/people/laptopmen.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified Brand Storytelling",
      description: "Zoho Marketing Plus brings all your marketing teams and tools together, ensuring a consistent brand voice across all channels.",
      image: "/images/people/fourteam.webp",
      points: [
        "Consolidated view of all marketing activity",
        "Seamless asset sharing and collaboration",
        "Integrated data for a better customer view",
        "Eliminate silos between creative and analytical teams"
      ],
    },
    {
      title: "Data-Driven Decisions",
      description: "Stop guessing. Use real-time data to understand what works and optimize your marketing mix for maximum impact.",
      image: "/images/lap/lap2.webp",
      points: [
        "Closed-loop attribution across channels",
        "Detailed conversion path tracking",
        "Predictive analytics for better targeting",
        "Customizable ROI dashboards"
      ],
    },
    {
      title: "Marketing Velocity",
      description: "Execute campaigns faster with integrated workflows and AI-powered automation that handles the routine tasks.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Streamlined approval processes",
        "Automated content repurposing",
        "AI-suggested send times for higher opens",
        "Templates for rapid campaign deployment"
      ],
    },
    {
      title: "Customer Lifecycle Marketing",
      description: "Nurture relationships at every stage, from anonymous website visitors to loyal brand advocates, in one platform.",
      image: "/images/lap/lap1.webp",
      points: [
        "Personalized journeys for different segments",
        "Automated re-engagement sequences",
        "Consistent messaging across touchpoints",
        "Customer sentiment tracking built-in"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Marketing Plus — Unified Marketing Suite"
      subtitle="Engage Customers Across Every Channel, Seamlessly."
      description="Zoho Marketing Plus is a unified platform that brings your marketing teams, tools, and processes together to deliver a consistent and compelling customer experience."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Marketing", href: "/zoho/solutions/marketing" },
        { label: "Zoho Marketing Plus", href: "/zoho/solutions/marketing/marketing-plus" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap4.webp"
      pricingInfo={{
        description: "One unified license for your entire marketing team. Scale your marketing as your brand grows.",
        plans: [
          "Standard: $25 /user/month",
          "Professional: $50 /user/month",
          "Premium: $75 /user/month",
          "Enterprise: $100 /user/month",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}
