"use client";

import React from "react";
import { 
  Zap, 
  TrendingUp, 
  Heart, 
  Target,
  ShieldCheck,
  Globe2,
  Users,
  Briefcase,
  Smartphone,
  PieChart,
  BarChart3,
  Calendar,
  Lock
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoOnePage() {
  const stats = [
    { label: "Apps Included", value: 45, suffix: "+", icon: Zap },
    { label: "Cost Savings", value: 40, suffix: "%", icon: TrendingUp },
    { label: "Admin Speed", value: 60, suffix: "%", icon: ShieldCheck },
    { label: "Active Users", value: 50, suffix: "k+", icon: Users },
  ];

  const modules = [
    {
      title: "Unified CRM",
      description: "A centralized customer platform for sales, marketing, and support to build lasting relationships.",
      image: "/images/people/laptopmen.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Complete Finance",
      description: "Manage accounting, inventory, and expenses in one place while staying compliant.",
      image: "/images/lap/lap1.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Full HR Suite",
      description: "From hiring to retirement, manage your workforce with automated processes and self-service.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Marketing Suite",
      description: "Engage with customers across all channels with integrated multi-channel marketing tools.",
      image: "/images/lap/lap2.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Project Management",
      description: "Plan, track, and collaborate on projects with ease using social features and task boards.",
      image: "/images/people/laptopmen2.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Business Intelligence",
      description: "Analyze data from all departments to make smarter decisions with automated dashboards.",
      image: "/images/lap/lap3.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Collaboration Tools",
      description: "Enable teams to communicate with chat, email, and meetings built into the platform.",
      image: "/images/lap/lap4.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Developer Platform",
      description: "Build custom applications and extensions to fit your specific business processes.",
      image: "/images/lap/lap5.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Security & Admin",
      description: "Manage users, control access, and ensure compliance from a single administrative console.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "AI & Search",
      description: "Leverage Zia AI for smarter insights and find any piece of information with cross-app search.",
      image: "/images/lap/lap7_11zon.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Mobile Business",
      description: "Run your entire business from your phone with native apps for every function.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Custom Workflows",
      description: "Automate complex business processes across multiple apps without coding.",
      image: "/images/people/laptopmen.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "One Platform for All",
      description: "Eliminate silos and messy integrations. Zoho One provides over 45+ integrated apps to run your entire operation.",
      image: "/images/people/fourteam.webp",
      points: [
        "Unprecedent data sharing across departments",
        "Single sign-on for all business applications",
        "Unified administrative console for management",
        "Consistency in experience and design"
      ],
    },
    {
      title: "Unbeatable Value",
      description: "Get the features of 45+ enterprise-grade apps for a fraction of the cost of individual subscriptions.",
      image: "/images/lap/lap2.webp",
      points: [
        "Simplify billing with one single subscription",
        "Reduce operational costs by over 40%",
        "Regular updates and new apps at no extra cost",
        "Transparent, predictable pricing for teams"
      ],
    },
    {
      title: "Smarter Business with AI",
      description: "Leverage Zia, the AI that spans your entire business. Get insights and find data instantly with cross-platform search.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Predictive analytics for sales and finance",
        "Cross-app search to find any record instantly",
        "Automated data cleaning and preparation",
        "Informed decisions with holistic insights"
      ],
    },
    {
      title: "Security by Design",
      description: "Ensure your data is protected with enterprise-grade security and compliance features out of the box.",
      image: "/images/lap/lap1.webp",
      points: [
        "Centralized user management and access",
        "GDPR, SOC2, and ISO 27001 compliant",
        "Granular permissions and audit trails",
        "Secure cloud-based data storage"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho One — The Operating System for Business"
      subtitle="Run Your Entire Business on One Integrated Platform."
      description="Zoho One is a comprehensive suite of over 45+ integrated web and mobile applications to help you run all aspects of your business in the cloud."
      introDescription2="With a unified data model and single sign-on across more than 45 applications, Zoho One eliminates departmental silos and provides a single source of truth for your entire organization."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho One", href: "/zoho/solutions/it-management/zoho-one" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho Dashboards/zoho one.webp" 
      heroCard1={{
        title: "45+ Integrated Apps",
        subtitle: "One platform for all business needs.",
        icon: Zap
      }}
      heroCard2={{
        title: "40% Cost Savings",
        subtitle: "Unify apps and eliminate individual costs.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Choose the pricing model that works best for you — per employee or per user. Simple, fair, and scalable.",
        plans: [
          "All Employee: $35 /employee/month",
          "Flexible User: $100 /user/month",
          "Scale Edition: Contact for pricing",
          "Includes 45+ Full Featured Apps",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}
