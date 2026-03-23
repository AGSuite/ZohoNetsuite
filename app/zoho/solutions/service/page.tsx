"use client";

import React from "react";
import { 
  Globe, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Target,
  Users,
  MessageCircle,
  Clock,
  Briefcase,
  ChevronRight,
  Heart
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function ServicePage() {
  const stats = [
    { label: "Response Time", value: "-45%", icon: Clock },
    { label: "CSAT Score", value: "95%+", icon: Heart },
    { label: "Agent Productivity", value: "40%+", icon: Zap },
    { label: "Omnichannel Reach", value: "100%", icon: Globe },
  ];

  const solutions = [
    {
      title: "Zoho Desk",
      description: "A complete omnichannel customer support platform that helps you prioritize, manage, and resolve tickets across every channel with ease.",
      link: "/zoho/solutions/service/zoho-desk",
      image: "/images/lap/lap4.webp",
      icon: MessageCircle,
      highlights: [
        "Unified Ticket Management",
        "Self-Service Help Center",
        "AI-Powered Zia Bot",
        "Advanced SLA Controls"
      ],
    },
    {
      title: "Zoho SalesIQ",
      description: "Engage your website visitors in real-time with intelligent live chat and visitor tracking. Turn support conversations into sales opportunities.",
      link: "/zoho/solutions/service/zoho-sales-iq",
      image: "/images/lap/lap1.webp",
      icon: Target,
      highlights: [
        "Live Visitor Tracking",
        "AI-Powered Chatbots",
        "Mobile App Support",
        "CRM Sync Intelligence"
      ],
    },
    {
      title: "Zoho FSM",
      description: "Empower your field service teams with intelligent dispatching, scheduling, and tracking. Manage your entire mobile workforce from one console.",
      link: "/zoho/solutions/service/zoho-fsm",
      image: "/images/people/laptopgirl.webp",
      icon: Globe,
      highlights: [
        "Smart Job Dispatching",
        "Inventory Management",
        "Mobile App for Techs",
        "Automated Billing Flow"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="Customer Service & Engagement Solutions"
      subtitle="Deliver Exceptional Service at Global Scale."
      description="Orchestrate your customer support and field operations with absolute precision. Zoho Service platforms enable you to deliver faster, more personalized interactions across every touchpoint."
      category="Service"
      heroImage="/images/people/laptopgirl.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Service", href: "/zoho/solutions/service" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


