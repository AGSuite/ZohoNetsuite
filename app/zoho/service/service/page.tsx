"use client";

import React from "react";
import { 
  Heart, 
  Zap, 
  TrendingUp, 
  Target, 
  MessageSquare, 
  Headphones, 
  Clock, 
  ShieldCheck, 
  BarChart3, 
  Globe2 
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoServicePage() {
  const stats = [
    { label: "Customer Satisfaction", value: 92, suffix: "%", icon: Heart },
    { label: "Resolution Speed", value: 40, suffix: "% faster", icon: Zap },
    { label: "Agent Efficiency", value: 55, suffix: "%", icon: TrendingUp },
    { label: "Support Costs", value: 30, suffix: "% lower", icon: Target },
  ];

  const modules = [
    {
      title: "Omnichannel Support",
      description: "Manage customer requests across email, phone, chat, and social media from a single interface.",
      image: "/images/modules/chat desk module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Intelligent Automation",
      description: "Automate repetitive tasks like ticket assignment, escalations, and status updates.",
      image: "/images/modules/managging together module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Self-Service Portal",
      description: "Empower customers with a comprehensive knowledge base and community forums.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Service Analytics",
      description: "Track team performance and customer satisfaction with deep-dive analytics and real-time reports.",
      image: "/images/modules/dashbord module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    }
  ];

  const benefits = [
    {
      title: "Unified Customer View",
      description: "Give your agents the context they need with a 360-degree view of every customer's interaction history.",
      image: "/images/people/fourteam.webp",
      points: [
        "Consolidate tickets from all channels",
        "View past purchases and support history",
        "Reduce response times with instant context",
        "Personalize every customer interaction"
      ],
    },
    {
      title: "Empowered Support Teams",
      description: "Provide your team with the tools to collaborate effectively and resolve issues faster.",
      image: "/images/lap/lap2.webp",
      points: [
        "Internal collaboration for complex cases",
        "Smart ticket routing and prioritization",
        "Mobile support for on-the-go agents",
        "Gamification to boost team morale"
      ],
    }
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Service — Deliver Exceptional Customer Support"
      subtitle="Excellence in Every Interaction."
      description="Zoho's service solutions empower your support team to deliver personalized, timely, and effective assistance across every channel your customers use."
      introDescription2="From ticketing systems to self-service portals, our service solutions are built to scale with your business and exceed customer expectations."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Service", href: "/zoho/service/service" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap1.webp"
      whatIsImage="/images/zoho-dashboards/zoho-desk.webp"
      heroCard1={{
        title: "Omnichannel Support",
        subtitle: "Unified help desk for all channels.",
        icon: Headphones
      }}
      heroCard2={{
        title: "Fast Resolution",
        subtitle: "Reduce wait times significantly.",
        icon: Clock
      }}
      pricingInfo={{
        description: "Choose the service plan that fits your team's needs and budget.",
        plans: [
          "Standard: $14 /agent/month",
          "Professional: $23 /agent/month",
          "Enterprise: $40 /agent/month",
        ],
        ctaText: "Start Free Trial",
      }}
    />
  );
}
