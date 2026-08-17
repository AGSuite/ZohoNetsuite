"use client";

import React from "react";
import {
  Rocket,
  Target,
  Settings,
  Database,
  Layers,
  Shield,
  Users,
  BarChart3,
  Cloud,
  TrendingUp,
  ClipboardList,
  Calendar,
  CheckCircle2,
  Zap,
  Clock
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoImplementationPage() {
  const stats = [
    { label: "Faster Go-Live", value: 60, suffix: "%", icon: Calendar },
    { label: "On-Time Delivery", value: 95, suffix: "%", icon: CheckCircle2 },
    { label: "Operational Efficiency", value: 40, suffix: "%", icon: Zap },
    { label: "Client Satisfaction", value: 98, suffix: "%", icon: Users },
  ];

  const modules = [
    {
      title: "Business Process Mapping",
      description: "In-depth discovery workshops to map your current processes and define a lean, future-state architecture within Zoho.",
      image: "/images/lap/lap1.webp",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: ClipboardList,
    },
    {
      title: "Solution Blueprinting",
      description: "Translate requirements into a detailed Zoho design — covering app selection, module configuration, and data flow architecture.",
      image: "/images/lap/lap2.webp",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: Target,
    },
    {
      title: "App Configuration",
      description: "Configure Zoho One apps (CRM, Books, Projects, etc.) to match your exact business rules, workflows, and approval hierarchies.",
      image: "/images/people/laptopgirl.webp",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Settings,
    },
    {
      title: "Data Migration",
      description: "Cleanse, validate, and migrate your legacy data into Zoho with full audit trails and zero data loss.",
      image: "/images/lap/lap3.webp",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: Database,
    },
  ];

  const benefits = [
    {
      title: "Unified Business Suite",
      description: "Implementing Zoho One provides a single operating system for your entire business, eliminating data silos.",
      image: "/images/lap/lap1.webp",
      points: [
        "50+ integrated applications",
        "Single sign-on convenience",
        "Real-time cross-app data",
        "Centralized administration",
      ],
    },
    {
      title: "Rapid Deployment",
      description: "Our agile implementation methodology gets you live faster than traditional ERP deployments.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Phased roll-out options",
        "Pre-built industry templates",
        "Sprint-based configuration",
        "Faster time-to-value",
      ],
    },
    {
      title: "Cost-Effective Scaling",
      description: "Zoho offers the best value-to-feature ratio in the market, allowing you to scale without massive license fees.",
      image: "/images/lap/lap3.webp",
      points: [
        "Transparent per-user pricing",
        "No hidden maintenance costs",
        "Modular app adoption",
        "Highest ROI in SaaS",
      ],
    },
    {
      title: "Seamless Adoption",
      description: "Our role-based training ensures your team is confident and productive from the very first day.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Hands-on user workshops",
        "Custom training manuals",
        "Admin certification prep",
        "Post-go-live hypercare",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does a Zoho implementation take?",
      answer: "A typical implementation can range from 4 to 12 weeks depending on the number of apps, complexity of workflows, and volume of data migration.",
    },
    {
      question: "Can we migrate data from our current CRM/ERP?",
      answer: "Yes, we specialize in migrating data from platforms like Salesforce, HubSpot, QuickBooks, and legacy systems into the Zoho ecosystem.",
    },
    {
      question: "Do you provide support after go-live?",
      answer: "Absolutely. We include a dedicated hypercare period after go-live and offer ongoing managed support plans for continuous optimization.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Implementation Services"
      subtitle="Start Your Transformation"
      description="Deploy a unified business operating system with AGSuite's certified Zoho implementation experts. We ensure a seamless transition from legacy systems to a fully optimized Zoho environment."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Implementation", href: "/zoho/implementation" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap4.webp"
      introImage="/images/people/laptopmen.webp"
      bgImage="/images/zohoimages/background/zohobg.webp"
      introTitle="Zoho Implementation Done Right."
      introDescription1="A successful Zoho implementation is about more than just turning on features. It's about aligning the platform with your unique business processes to drive growth and efficiency."
      introDescription2="With hundreds of successful deployments, our team provides the technical depth and strategic guidance needed to maximize your Zoho investment from day one."
      faqs={faqs}
    />
  );
}




