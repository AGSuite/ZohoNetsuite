"use client";

import React from "react";



import { 
  Users, 
  Heart, 
  Target, 
  Layers, 
  TrendingUp,
  Zap,
  ShieldCheck,
  Globe2,
  Lock,
  MessageSquare,
  FileText,
  Share2
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoWorkplacePage() {
  const stats = [
    { label: "Team Productivity", value: 65, suffix: "%", icon: Zap },
    { label: "Storage Efficiency", value: 80, suffix: "%", icon: Layers },
    { label: "Cost Reduction", value: 45, suffix: "%", icon: TrendingUp },
    { label: "Onboarding Speed", value: 50, suffix: "%", icon: Users },
  ];

  const modules = [
    {
      title: "Business Email (Mail)",
      description: "Secure, ad-free email with advanced control panel and collaboration features integrated for teams.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Cloud Storage (WorkDrive)",
      description: "A centralized secure file management system for teams to store, share, and collaborate on files in real-time.",
      image: "/images/modules/dashbord module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Team Chat (Cliq)",
      description: "Streamline team communication with direct messages, channels, and automated bots integrated into your workflow.",
      image: "/images/modules/working module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Online Office Suite",
      description: "Create stunning documents, powerful spreadsheets, and beautiful presentations collaboratively on the cloud.",
      image: "/images/modules/any module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Video Conferences (Meeting)",
      description: "Host engaging webinars and professional video meetings with screen sharing and recording capabilities.",
      image: "/images/modules/any modules.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Intranet (Connect)",
      description: "Build a social hub for your organization to share news, hold discussions, and manage internal resources.",
      image: "/images/modules/module8.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Password Manager (Vault)",
      description: "Store and share team credentials securely with end-to-end encryption and fine-grained access control.",
      image: "/images/modules/sheet module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Unified Search",
      description: "Find any piece of information across all your workplace apps instantly with our powerful AI-driven search.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "External Collaboration",
      description: "Work seamlessly with clients and vendors through secure guest portals and limited-access shared links.",
      image: "/images/modules/managging together module.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Mobile Workspace",
      description: "Access your entire office from any device with optimized mobile apps for every tool in the suite.",
      image: "/images/modules/account modules.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Admin Dashboard",
      description: "Centrally manage users, domains, and security policies for your entire organization from one place.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "AI Assistant (Zia)",
      description: "Leverage Zia to draft emails, analyze spreadsheets, and get automated task reminders across the suite.",
      image: "/images/modules/mobile module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified Team Productivity",
      description: "Stop switching tabs and context. Zoho Workplace brings your email, files, chat, and office tools into a single, cohesive environment.",
      image: "/images/people/fourteam.webp",
      points: [
        "Single source for all team collaboration",
        "Seamless data flow between different tools",
        "Unified notifications and activity feed",
        "Common file storage for the entire team"
      ],
    },
    {
      title: "Exceptional Value",
      description: "Get a full enterprise office suite for a fraction of the cost of competitors. Transparent pricing with no hidden migration or integration fees.",
      image: "/images/lap/lap2.webp",
      points: [
        "Consolidated billing for 8 powerful apps",
        "Flexible plans for different user types",
        "Significant savings over fragmented tools",
        "Enterprise features available at any scale"
      ],
    },
    {
      title: "Secure by Design",
      description: "Your business data is protected by multiple layers of security. From secure login to data encryption, we keep your workplace safe.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Role-based access and data governance",
        "Two-factor authentication for all users",
        "Full data encryption at rest and in transit",
        "Secure external sharing with password protection"
      ],
    },
    {
      title: "Scalable Collaboration",
      description: "Whether you're a team of five or five thousand, Zoho Workplace scales with you. Add users and domains as your business expands.",
      image: "/images/lap/lap1.webp",
      points: [
        "Easy user and domain management",
        "Global data centers for low latency",
        "Supports hybrid and remote work models",
        "Customizable to your organization's needs"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Workplace — Unified Collaboration Suite"
      subtitle="Better Collaboration Starts with a Unified Workplace."
      description="Zoho Workplace is an integrated suite of applications that includes email, document management, team chat, and more — designed to help your team work together more effectively."
      introDescription2="Zoho Workplace provides a unified communications and collaboration suite where your team can chat, meet, write documents, and share files in a single, secure ecosystem."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Email & Collab", href: "/zoho/solutions/email-collab" },
        { label: "Zoho Workplace", href: "/zoho/solutions/email-collab/zoho-workplace" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap1.webp"
      heroCard1={{
        title: "8 Integrated Apps",
        subtitle: "One platform for team collaboration.",
        icon: Layers
      }}
      heroCard2={{
        title: "65% Higher Productivity",
        subtitle: "Eliminate context switching and silos.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Flexible plans for every team. Get the entire suite of 8 collaboration apps for one low price.",
        plans: [
          "Standard: $3 /user/month",
          "Professional: $6 /user/month",
          "Mail Only Plan: $1 /user/month",
          "Custom enterprise options available",
        ],
        ctaText: "Start 15-Day Free Trial",
      }}
    />
  );
}


