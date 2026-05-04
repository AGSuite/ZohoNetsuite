"use client";

import React from "react";



import { 
  Zap, 
  RefreshCcw, 
  Layers, 
  TrendingUp,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  Globe2,
  CheckCircle,
  Clock,
  Workflow,
  Share2,
  Database
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoFlowPage() {
  const stats = [
    { label: "App Integrations", value: 800, suffix: "+", icon: Layers },
    { label: "Workflow Automation", value: 50, suffix: "% faster", icon: Zap },
    { label: "Data Accuracy", value: 99.9, suffix: "%", icon: ShieldCheck },
    { label: "Time Saved", value: 40, suffix: "%", icon: Clock },
  ];

  const modules = [
    {
      title: "Workflow Builder",
      description: "Design and automate business processes with an intuitive drag-and-drop builder — no coding required.",
      image: "/images/lap/lap1.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "App Connectivity",
      description: "Connect Zoho Flow with over 800+ popular apps like Slack, Shopify, Mailchimp, and Trello.",
      image: "/images/people/laptopgirl.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Custom Functions",
      description: "Extend your workflows with custom Deluge scripts to handle complex business logic and data transformations.",
      image: "/images/lap/lap2.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Webhooks Integration",
      description: "Send and receive data between any application that supports webhooks, creating a truly connected ecosystem.",
      image: "/images/people/laptopmen.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Multi-Step Flows",
      description: "Build sophisticated multi-step workflows that branch based on conditions and handle complex sequences.",
      image: "/images/lap/lap3.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Flow History & Logs",
      description: "Track every execution, identify errors, and monitor your workflow performance with detailed logs.",
      image: "/images/people/fourteam.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Variables & Data Mapping",
      description: "Map data between different apps effortlessly using dynamic variables and transform them as needed.",
      image: "/images/lap/lap4.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Schedule & Delay",
      description: "Run your flows on a specific schedule or add delays between steps to perfectly time your business processes.",
      image: "/images/people/laptopmen2.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Team Collaboration",
      description: "Work with your team on shared workflows and manage access with role-based permissions.",
      image: "/images/lap/lap5.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Real-time Monitoring",
      description: "Monitor your integrations in real-time and get notified immediately of any failures or issues.",
      image: "/images/people/laptopgirl1.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Dynamic Connections",
      description: "Manage multiple accounts for the same app and switch between them dynamically in your flows.",
      image: "/images/lap/lap2.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "API Access",
      description: "Build powerful integrations with Zoho Flow's robust API and extend its capabilities even further.",
      image: "/images/people/threeteam.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified App Ecosystem",
      description: "Zoho Flow bridges the gap between your disparate applications, creating a seamless and automated business environment.",
      image: "/images/people/fourteam.webp",
      points: [
        "Connect 800+ apps in minutes",
        "Centralized automation hub",
        "No-code integration experience",
        "Consistent data across every app"
      ],
    },
    {
      title: "Unmatched Operational Speed",
      description: "Automate repetitive data transfers and business logic, freeing your team to focus on high-value strategic work.",
      image: "/images/lap/lap2.webp",
      points: [
        "50% faster workflow creation",
        "Eliminate manual data entry",
        "Instant response to business events",
        "24/7 automated operations"
      ],
    },
    {
      title: "Scalable Business Logic",
      description: "As your business grows, Zoho Flow scales with you. Handle millions of executions and complex multi-app sequences.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Handle high-volume data flows",
        "Complex branching and logic",
        "Custom Deluge script extensions",
        "Enterprise-grade reliability"
      ],
    },
    {
      title: "Complete Data Accuracy",
      description: "Ensure that data stays consistent across all your tools. Avoid the errors that come with manual updates and copies.",
      image: "/images/lap/lap1.webp",
      points: [
        "99.9% reliable data transfers",
        "Error handling and auto-retry",
        "Detailed logs for every execution",
        "Real-time monitoring and alerts"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Flow — The Smart Integration Platform"
      subtitle="Connect Your Apps, Automate Your Growth."
      description="Next-gen workflow automation software that connects your apps and synchronizes your data across different systems for a more efficient business."
      introDescription2="Connect your entire business suite without writing code. Zoho Flow automates workflows across 500+ apps, ensuring your data moves exactly where it's needed in real-time."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Analytics", href: "/zoho/solutions/analytics" },
        { label: "Zoho Flow", href: "/zoho/solutions/analytics/zoho-flow" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      heroCard1={{
        title: "800+ Integrations",
        subtitle: "Connect all your business apps.",
        icon: Layers
      }}
      heroCard2={{
        title: "No-Code Builder",
        subtitle: "Automate workflows in minutes.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Choose a plan that fits your execution volume. Start for free and scale as your automation needs grow.",
        plans: [
          "Standard: $10 /month (1,000 tasks)",
          "Professional: $25 /month (3,000 tasks)",
          "Premium: $50 /month (10,000 tasks)",
          "Enterprise: $100 /month (30,000 tasks)",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}




