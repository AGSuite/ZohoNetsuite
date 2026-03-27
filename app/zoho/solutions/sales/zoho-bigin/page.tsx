"use client";

import React from "react";
import { 
  Rocket, 
  Heart, 
  Target, 
  Clock, 
  TrendingUp,
  Zap,
  Users,
  Smartphone,
  ShieldCheck,
  CheckCircle,
  ZapOff,
  Filter
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoBiginPage() {
  const stats = [
    { label: "Deal Closure Speed", value: 30, suffix: "% faster", icon: Zap },
    { label: "Team Adoption", value: 95, suffix: "%", icon: Users },
    { label: "Cost Efficiency", value: 70, suffix: "%", icon: TrendingUp },
    { label: "Data Accuracy", value: 90, suffix: "%", icon: Target },
  ];

  const modules = [
    {
      title: "Pipeline Management",
      description: "Visual, drag-and-drop pipelines that help you track every stage of your deals with absolute clarity.",
      image: "/images/people/laptopgirl.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Contact Management",
      description: "Keep all your customer interactions, history, and notes organized in one clean, easy-to-use interface.",
      image: "/images/lap/lap1.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive follow-ups and tasks so you can focus on building relationships and closing deals.",
      image: "/images/lap/lap3.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Mobile Business",
      description: "Manage your small business on-the-go with a mobile app designed specifically for speed and simplicity.",
      image: "/images/people/laptopmen.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Built-in Telephony",
      description: "Make and receive calls directly within your CRM, with automatic logging and recording features.",
      image: "/images/people/laptopgirl1.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Activities & Tasks",
      description: "Stay on top of your schedule with reminders, tasks, and calls linked directly to your contacts and deals.",
      image: "/images/lap/lap2.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Email Integration",
      description: "Connect your email and see all your customer communications right within your deal workspace.",
      image: "/images/people/threeteam.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Insights & Reports",
      description: "Get a clear picture of your business performance with simple, actionable dashboards and reports.",
      image: "/images/lap/lap4.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Product Catalog",
      description: "Keep track of your products and services and link them directly to your deals and invoices.",
      image: "/images/lap/lap5.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Web Forms",
      description: "Capture leads directly from your website and funnel them automatically into your Bigin pipeline.",
      image: "/images/people/laptopmen2.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Team Collaboration",
      description: "Work together with your small team, share notes, and delegate tasks to move deals forward faster.",
      image: "/images/people/fourteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Simple Setup",
      description: "Get up and running in minutes with pre-built templates designed for various industries and niches.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "The Simple CRM for Small Teams",
      description: "Stop juggling spreadsheets. Bigin provides the perfect balance of power and simplicity for startups and small businesses.",
      image: "/images/people/fourteam.webp",
      points: [
        "Visual pipelines for absolute clarity",
        "Clean, intuitive, and distraction-free UI",
        "No complex training or setup required",
        "Grows with you as your team expands"
      ],
    },
    {
      title: "Customer Info at Your Fingertips",
      description: "Know your customers better. Keep a complete history of every interaction and deal in one secure, accessible place.",
      image: "/images/lap/lap2.webp",
      points: [
        "Unified view of contact and deal data",
        "Instant access to communication history",
        "Personalized outreach with context",
        "Stay organized without the clutter"
      ],
    },
    {
      title: "Close Deals on the Go",
      description: "Your business doesn't stop when you leave your desk. Bigin's mobile app keeps you connected to your deals anywhere.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Full-featured iOS and Android apps",
        "Real-time notifications for deal events",
        "Update deal stages from your phone",
        "Integrated calling and logging on-the-go"
      ],
    },
    {
      title: "Powerful Integrations",
      description: "Bigin works seamlessly with the tools you already use. Connect your email, website, and other Zoho apps effortlessly.",
      image: "/images/lap/lap1.webp",
      points: [
        "Seamless sync with G Suite and Office 365",
        "Integrates with 100+ third-party apps",
        "Deep integration with Zoho's ecosystem",
        "Automated lead capture from web forms"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Bigin — Pipeline-Centric CRM for Small Teams"
      subtitle="Small Teams, Big Results."
      description="Zoho Bigin is a simple, effective, and small-business-focused CRM that helps you manage pipelines, track deals, and grow. It's the simple way to move beyond spreadsheets."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Sales", href: "/zoho/solutions/sales" },
        { label: "Zoho Bigin", href: "/zoho/solutions/sales/zoho-bigin" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lapgirl.webp"
      whatIsImage="/images/zoho Dashboards/zoho bigin.webp"
      heroCard1={{
        title: "Built for Small Teams",
        subtitle: "Simple, visual, and effective CRM.",
        icon: Rocket
      }}
      heroCard2={{
        title: "30% Faster Closure",
        subtitle: "Manage pipelines with absolute clarity.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Transparent, affordable pricing designed for small businesses and startups. Get started for free.",
        plans: [
          "Free: Up to 500 records",
          "Express: $7 /user/month",
          "Premier: $12 /user/month",
          "Annual discounts available",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}
