"use client";

import React from "react";
import { 
  Headphones, 
  MessageSquare, 
  Users, 
  Zap, 
  Clock, 
  BarChart3, 
  ShieldCheck, 
  CheckCircle2, 
  Laptop, 
  Globe2 
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoDeskServicePage() {
  const stats = [
    { label: "Ticket Resolution", value: 50, suffix: "% faster", icon: Zap },
    { label: "Customer Happiness", value: 95, suffix: "%", icon: Headphones },
    { label: "Agent Productivity", value: 60, suffix: "% increase", icon: Users },
    { label: "Operational Savings", value: 35, suffix: "%", icon: BarChart3 },
  ];

  const modules = [
    {
      title: "Contextual Ticketing",
      description: "See the full context of a customer's journey directly within their support ticket.",
      image: "/images/modules/chat desk module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Guided Conversations",
      description: "Equip your agents with response suggestions and AI-powered help during live chats.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Advanced Knowledge Base",
      description: "Create an extensive help center that answers customer questions before they reach out.",
      image: "/images/modules/any module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Customizable Reports",
      description: "Build reports that track exactly what matters to your service organization.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    }
  ];

  const benefits = [
    {
      title: "AI-Powered Help Desk",
      description: "Leverage Zia, our AI assistant, to automate responses and predict customer needs.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Automated ticket tagging and sentiment analysis",
        "Predictive support for proactive service",
        "Smart suggestions for faster resolution",
        "AI-driven chatbots for 24/7 assistance"
      ],
    },
    {
      title: "Multi-Department Collaboration",
      description: "Connect your support team with other departments to resolve complex issues together.",
      image: "/images/lap/lap2.webp",
      points: [
        "Cross-departmental ticket sharing",
        "Internal chat for instant team communication",
        "Project integration for long-term task tracking",
        "Unified customer data across the organization"
      ],
    }
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Desk — The Context-Aware Help Desk"
      subtitle="What is Zoho Desk? The Industry-Leading Customer Service Platform"
      description="Zoho Desk is a context-aware customer service platform that helps you deliver high-quality support across multiple channels. By giving agents a complete view of every customer's history, it ensures that every interaction is personalized, efficient, and resolution-focused."
      introDescription2="Empower your team with AI-driven insights, automated ticketing, and a robust self-service knowledge base. Zoho Desk unifies your support operations to drive superior customer satisfaction and long-term brand loyalty."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Service", href: "/zoho/service/desk" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/fourteam.webp"
      whatIsImage="/images/zoho-dashboards/zoho-desk.webp"
      heroCard1={{
        title: "Contextual Help",
        subtitle: "Every interaction, fully informed.",
        icon: MessageSquare
      }}
      heroCard2={{
        title: "24/7 Ready",
        subtitle: "Global support, anytime.",
        icon: Globe2
      }}
      pricingInfo={{
        description: "Choose the plan that's right for your support operations.",
        plans: [
          "Professional: $23 /agent/month",
          "Enterprise: $40 /agent/month",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}
