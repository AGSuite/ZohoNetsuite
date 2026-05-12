"use client";

import React from "react";



import {
  Heart,
  Target,
  Clock,
  TrendingUp,
  Zap,
  Users,
  MessageSquare,
  ShieldCheck,
  Globe2,
  Phone,
  BarChart3,
  Search
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoDeskPage() {
  const stats = [
    { label: "Resolution Time", value: 45, suffix: "% faster", icon: Clock },
    { label: "Agent Productivity", value: 60, suffix: "%", icon: Zap },
    { label: "Customer Satisfaction", value: 94, suffix: "%", icon: Heart },
    { label: "Self-Service Rate", value: 40, suffix: "%", icon: Search },
  ];

  const modules = [
    {
      title: "Ticket Management",
      description: "Organize, prioritize, and resolve customer queries across multiple channels from a single, unified view.",
      image: "/images/modules/csm modules.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Omnichannel Support",
      description: "Engage with customers on email, phone, live chat, social media, and WhatsApp without switching tabs.",
      image: "/images/modules/chat desk module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "AI Help Assistant (Zia)",
      description: "Let AI answer common tickets, tag sentiment, and alert managers to potential issues automatically.",
      image: "/images/modules/working module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Self-Service Portal",
      description: "Empower customers to find their own answers with a knowledge base, community forum, and help center.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks, ticket routing, and escalation rules to ensure every issue is handled fast.",
      image: "/images/modules/dashboard module.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Agent Productivity",
      description: "Help agents work smarter with templates, canned responses, and collaborative internal discussions.",
      image: "/images/modules/any modules.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "SLA Management",
      description: "Define and track service level agreements to maintain high standards and meet customer expectations.",
      image: "/images/modules/managging together module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Service Analytics",
      description: "Gain deep insights into your team's performance, customer trends, and satisfaction scores.",
      image: "/images/modules/dashbord module.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Integrations & APIs",
      description: "Connect Zoho Desk with your CRM, bug tracker, and other tools for a contextual support experience.",
      image: "/images/modules/module8.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Mobile App for Agents",
      description: "Stay connected to your help desk on-the-go with native mobile apps for iOS and Android.",
      image: "/images/modules/mobile module.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Team Collaboration",
      description: "@mention colleagues, share ticket ownership, and work together on complex customer issues.",
      image: "/images/modules/any module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Customizable UI",
      description: "Tailor your help desk to match your brand and build a unique experience for your agents and customers.",
      image: "/images/modules/account modules.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Context-Aware Service",
      description: "Give your agents the full picture. Zoho Desk pulls in customer data from your CRM, allowing for personalized and efficient support.",
      image: "/images/people/fourteam.webp",
      points: [
        "Unified customer history across all apps",
        "CRM integration for personalized service",
        "Sentiment analysis to prioritize tickets",
        "Consolidated view of all interactions"
      ],
    },
    {
      title: "Efficiency at Scale",
      description: "Scale your support team without increasing headcount. Automate the low-value tasks and let your agents focus on critical resolutions.",
      image: "/images/lap/lap2.webp",
      points: [
        "Automated routing and skill-based assignment",
        "Pre-built templates and canned responses",
        "Bulk ticket actions for faster processing",
        "Intelligent escalation for urgent issues"
      ],
    },
    {
      title: "Happier Customers",
      description: "Provide the fast, accurate, and multi-channel support that your customers expect. Reduce churn by delivering excellence consistently.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Support on email, chat, social, and phone",
        "Transparent ticket status for customers",
        "Easy-to-use self-service knowledge base",
        "Real-time feedback and CSAT tracking"
      ],
    },
    {
      title: "Data-Driven Support",
      description: "Know exactly how your team is performing. identify bottlenecks, track happiness scores, and optimize your help desk operations.",
      image: "/images/lap/lap1.webp",
      points: [
        "Live dashboard of service metrics",
        "Agent performance and workload reports",
        "In-depth customer happiness analytics",
        "Custom reports for strategic decisions"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Desk — Omnichannel Help Desk Software"
      subtitle="Zoho Desk: The Industry's First Context-Aware Help Desk Platform"
      description="Zoho Desk is a powerful, omnichannel customer support Solution that empowers your team to deliver fast, personalized, and high-quality service across every touchpoint. As a specialized Zoho Service partner, we help you unify interactions from email, chat, phone, and social media into a single contextual dashboard with AI-driven insights."
      introDescription2="Zoho Desk provides the context and AI-driven tools your support agents need to deliver fast, personalized, and high-quality service across every customer touchpoint, ensuring higher resolution rates and improved customer satisfaction."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Desk", href: "/zoho-desk" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap1.webp"
      whatIsImage="/images/zoho-dashboards/zoho-desk.webp"
      heroCard1={{
        title: "Omnichannel Support",
        subtitle: "Unified help desk for all channels.",
        icon: MessageSquare
      }}
      heroCard2={{
        title: "94% Satisfaction Rate",
        subtitle: "Fast resolutions with AI and automation.",
        icon: Heart
      }}
      pricingInfo={{
        description: "Choose a plan that fits your team size and support needs. Experience the power of omnichannel service today.",
        plans: [
          "Standard: $14 /agent/month",
          "Professional: $23 /agent/month",
          "Enterprise: $40 /agent/month",
          "Ultimate: $52 /agent/month",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}




