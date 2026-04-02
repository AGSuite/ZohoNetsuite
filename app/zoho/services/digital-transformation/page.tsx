"use client";

import React from "react";
import {
  Calendar,
  Zap,
  TrendingUp,
  CheckCircle2,
  Database,
  Cloud,
  Settings,
  GitMerge,
  BarChart3,
  BrainCircuit,
  Code2,
  Smartphone,
  Globe,
  Users,
  Lock,
  Headphones,
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoDigitalTransformationPage() {
  const stats = [
    { label: "Faster Go-Live", value: 60, suffix: "%", icon: Calendar },
    { label: "Process Automation", value: 80, suffix: "%", icon: Zap },
    { label: "Cost Reduction", value: 35, suffix: "%", icon: TrendingUp },
    { label: "ROI Within Year One", value: 3, suffix: "x", icon: CheckCircle2 },
  ];

  const modules = [
    {
      title: "ERP Modernization",
      description: "Replace siloed legacy ERPs or spreadsheets with Zoho's unified cloud-native platform — eliminating data silos and manual reconciliations.",
      image: "/images/lap/lap1.webp",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: Database,
    },
    {
      title: "Cloud Migration",
      description: "Safely lift and shift your on-premise systems to Zoho with zero data loss — including data cleansing and parallel run testing.",
      image: "/images/lap/lap2.webp",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: Cloud,
    },
    {
      title: "Process Automation",
      description: "Identify and eliminate repetitive manual workflows using Zoho Flow, Blueprints, and custom Deluge scripts for end-to-end efficiency.",
      image: "/images/people/laptopgirl.webp",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Settings,
    },
    {
      title: "Unified Integration",
      description: "Connect Zoho to your ERP, e-commerce, or third-party platforms via Zoho Flow and custom API-led connections.",
      image: "/images/lap/lap3.webp",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: GitMerge,
    },
    {
      title: "Data & Analytics",
      description: "Unlock the value hidden in your data with Zoho Analytics — custom dashboards, cross-functional reports, and AI-driven insights.",
      image: "/images/lap/lap4.webp",
      color: "#92400e",
      rgb: "146,64,14",
      Icon: BarChart3,
    },
    {
      title: "AI Integration",
      description: "Embed Zia-driven anomaly detection, demand forecasting, and smart approval routing into your Zoho business processes.",
      image: "/images/people/laptopgirl1.webp",
      color: "#1e1b4b",
      rgb: "30,27,75",
      Icon: BrainCircuit,
    },
    {
      title: "Custom App Dev",
      description: "Build bespoke business applications using Zoho Creator — perfectly tailored to your unique industry requirements.",
      image: "/images/lap/lap5.webp",
      color: "#1a4365",
      rgb: "26,67,101",
      Icon: Code2,
    },
    {
      title: "Customer Portals",
      description: "Extend Zoho to your customers and vendors with responsive self-service portals and customized mobile interfaces.",
      image: "/images/people/laptopmen.webp",
      color: "#4a1942",
      rgb: "74,25,66",
      Icon: Smartphone,
    },
    {
      title: "Digital Strategy",
      description: "Define a phased Zoho roadmap aligned with your business goals — from quick-win automations to global rollout programmes.",
      image: "/images/people/laptopmen2.webp",
      color: "#14532d",
      rgb: "20,83,45",
      Icon: Globe,
    },
    {
      title: "Change Management",
      description: "Ensure lasting adoption with user training, executive workshops, and structured hypercare post go-live on the Zoho platform.",
      image: "/images/lap/lap7_11zon.webp",
      color: "#7f1d1d",
      rgb: "127,29,29",
      Icon: Users,
    },
    {
      title: "Compliance & Security",
      description: "Harden your Zoho environment with role-based access controls, data encryption, and global compliance alignment (GDPR, HIPAA).",
      image: "/images/people/threeteam.webp",
      color: "#312e81",
      rgb: "49,46,129",
      Icon: Lock,
    },
    {
      title: "Managed Evolution",
      description: "Protect your investment with proactive upgrades, SLA-backed support, and a dedicated Zoho success manager.",
      image: "/images/people/fourteam.webp",
      color: "#0c4a6e",
      rgb: "12,74,110",
      Icon: Headphones,
    },
  ];

  const benefits = [
    {
      title: "Accelerated Time-to-Value",
      description: "Our proven rapid-deployment methodology gets your teams live on Zoho in weeks, not months — with a structured cutover plan.",
      image: "/images/lap/lap1.webp",
      points: [
        "Pre-configured Zoho templates",
        "Parallel run testing methodology",
        "Phased or big-bang deployments",
        "60 days intensive hypercare",
      ],
    },
    {
      title: "Unified Business Cloud",
      description: "Eliminate silos by connecting finance, supply chain, and CRM in a single source of truth — giving teams real-time visibility.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "One platform (Zoho One) suite",
        "Automated cross-app data flow",
        "Real-time customer 360 view",
        "Consolidated group reporting",
      ],
    },
    {
      title: "AI-Driven Insights",
      description: "Stop relying on intuition. Zoho's live dashboards and Zia-powered analytics put decision-critical data in front of every role.",
      image: "/images/lap/lap3.webp",
      points: [
        "Role-based Zia dashboards",
        "Drill down to transaction level",
        "Automated scheduled AI insights",
        "Cross-functional data correlation",
      ],
    },
    {
      title: "Enterprise Reliability",
      description: "Add new users, regions, and apps in minutes. Zoho scales with your growth trajectory with zero infrastructure overhead.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Global multi-region data centers",
        "Seamless multi-currency support",
        "99.9% uptime SLA guarantee",
        "Automatic regular updates",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does a Zoho digital transformation usually take?",
      answer: "A typical transformation project ranges from 8 to 16 weeks depending on the number of Zoho apps being implemented and the complexity of your current data. We follow a phased approach to deliver early wins.",
    },
    {
      question: "Can Zoho replace my existing legacy ERP?",
      answer: "Yes, the Zoho Finance suite (Books, Inventory, etc.) combined with Zoho One can replace traditional ERPs like Sage, Tally, or legacy on-premise systems with a modern, cloud-first architecture.",
    },
    {
      question: "Will our data be secure during the transition?",
      answer: "Absolutely. We follow a strict zero-data-loss migration framework with full audit trails and validation tests at every step of the migration process into Zoho.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Digital Transformation Services"
      subtitle="Start Your Transformation"
      description="Modernise your enterprise from the ground up. We replace legacy systems with Zoho's unified cloud platform — automating processes, connecting data, and unlocking growth at scale."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Digital Transformation", href: "/zoho/services/digital-transformation" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/zohoimages/zoho implementation.png"
      introImage="/images/Services/Digitalservices.webp"
      introTitle="Zoho Business Transformation Done Right."
      introDescription1="Digital transformation isn't just about software — it's about reimagining how your business operates and grows. Zoho provides the unified platform, and AGSuite provides the expertise to make it real."
      introDescription2="We work with growing businesses to replace disconnected legacy systems with a single, intelligent cloud suite — automating workflows, unifying data, and enabling smarter decisions faster than ever."
      faqs={faqs}
    />
  );
}
