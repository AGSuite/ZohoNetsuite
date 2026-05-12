"use client";

import React from "react";
import {
  Code2,
  Zap,
  CheckCircle2,
  TrendingUp,
  GitMerge,
  Layers,
  BarChart3,
  Cpu,
  Settings,
  Shield,
  BrainCircuit,
  Cloud,
  Users,
  Wrench
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoCustomizationPage() {
  const stats = [
    { label: "Custom Widgets", value: 300, suffix: "+", icon: Code2 },
    { label: "Workflows Automated", value: 85, suffix: "%", icon: Zap },
    { label: "Upgrade Compatibility", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Developer Expertise", value: 12, suffix: "yrs", icon: TrendingUp },
  ];

  const modules = [
    {
      title: "Deluge Scripting",
      description: "Build powerful server-side logic using Zoho's native Deluge language — creating custom functions, schedules, and webhooks.",
      image: "/images/lap/lap1.webp",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: Code2,
    },
    {
      title: "Zoho Blueprint",
      description: "Design and deploy visual process automations for approval routing, lead stages, and complex multi-step business logic.",
      image: "/images/lap/lap2.webp",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: GitMerge,
    },
    {
      title: "Custom Creator Apps",
      description: "Develop low-code applications that extend Zoho's core functionality to solve unique industry-specific challenges.",
      image: "/images/people/laptopgirl.webp",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Layers,
    },
    {
      title: "Advanced Analytics",
      description: "Build custom SQL-driven reports and interactive dashboards that surface deep insights across your entire Zoho stack.",
      image: "/images/lap/lap3.webp",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: BarChart3,
    },
  ];

  const benefits = [
    {
      title: "Tailored User Experience",
      description: "We customize Zoho's interface to match your team's specific needs, reducing complexity and driving adoption.",
      image: "/images/lap/lap1.webp",
      points: [
        "Custom canvas views",
        "Role-specific layouts",
        "Contextual field visibility",
        "Branded client portals",
      ],
    },
    {
      title: "Deep Process Automation",
      description: "Automate repetitive tasks and complex cross-app workflows, allowing your team to focus on high-value activities.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Intelligent lead routing",
        "Automated invoice generation",
        "Multi-app data sync",
        "Smart email triggers",
      ],
    },
    {
      title: "Scalable Architecture",
      description: "Our customizations are built using best practices to ensure they scale as your business grows without performance hits.",
      image: "/images/lap/lap3.webp",
      points: [
        "Optimized Deluge code",
        "API-first integration design",
        "Database-level efficiency",
        "Secure credential handling",
      ],
    },
    {
      title: "Upgrade-Resilient Code",
      description: "Every customization is designed to survive Zoho's frequent product updates, minimizing long-term maintenance.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Standard API usage",
        "Native feature preference",
        "Extensive regression testing",
        "Documented code logic",
      ],
    },
  ];

  const faqs = [
    {
      question: "Is customization safe for future Zoho updates?",
      answer: "Yes, we build using Zoho's official SDKs and Deluge frameworks which are designed to be forward-compatible with platform updates.",
    },
    {
      question: "Can we customize Zoho on mobile?",
      answer: "Absolutely. We ensure that all custom layouts, Blueprints, and Creator apps are fully optimized for the Zoho mobile experience.",
    },
    {
      question: "How long does a typical customization project take?",
      answer: "Smaller automations can take a few days, while complex cross-departmental Blueprints or Creator apps may take 4-8 weeks.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Customization Services"
      subtitle="Tailor Your Platform"
      description="Maximize your operational efficiency with bespoke Zoho customizations. Our Deluge experts build intelligent workflows, custom widgets, and integrated app ecosystems tailored to your business."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Customization", href: "/zoho/services/customization" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap5.webp"
      introImage="/images/people/laptopgirl.webp"
      bgImage="/images/zohoimages/background/zohobg.webp"
      introTitle="Zoho That Fits Your Workflow. Perfectly."
      introDescription1="Off-the-shelf software shouldn't dictate how you run your business. We extend Zoho's core power to match your exact business logic and user requirements."
      introDescription2="From simple automated alerts to complex cross-platform integrations, our team delivers high-performance customizations that drive measurable business impact."
      faqs={faqs}
    />
  );
}




