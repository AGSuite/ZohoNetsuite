"use client";

import React from "react";
import {
  HeartHandshake,
  Lightbulb,
  TrendingUp,
  Target,
  BarChart3,
  ShieldCheck,
  Zap,
  Users,
  Search,
  LineChart,
  ClipboardList,
  CheckCircle2,
  PieChart,
  MessagesSquare
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoConsultingPage() {
  const stats = [
    { label: "Business ROI", value: 45, suffix: "%", icon: TrendingUp },
    { label: "Cost Optimization", value: 30, suffix: "%", icon: PieChart },
    { label: "Expert Consultants", value: 15, suffix: "+", icon: Users },
    { label: "Client Retention", value: 98, suffix: "%", icon: ShieldCheck },
  ];

  const modules = [
    {
      title: "Zoho Strategy Audit",
      description: "A comprehensive review of your existing Zoho setup to identify gaps, redundancies, and opportunities for optimization.",
      image: "/images/lap/lap1.webp",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: Search,
    },
    {
      title: "Process Architecture",
      description: "Redesigning your business workflows to leverage Zoho's native automation, reducing manual effort and errors.",
      image: "/images/lap/lap2.webp",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: ClipboardList,
    },
    {
      title: "Data Intelligence",
      description: "Strategic guidance on setting up Zoho Analytics to turn your raw data into actionable business insights.",
      image: "/images/people/laptopgirl.webp",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: BarChart3,
    },
    {
      title: "Change Management",
      description: "Structured programs to ensure high user adoption and cultural alignment with your new digital processes.",
      image: "/images/lap/lap3.webp",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: Users,
    },
  ];

  const benefits = [
    {
      title: "Strategic Alignment",
      description: "We ensure your Zoho environment directly supports your long-term business objectives and growth plans.",
      image: "/images/lap/lap1.webp",
      points: [
        "Executive-level strategy",
        "KPI-driven configurations",
        "Future-proof architecture",
        "Quarterly business reviews",
      ],
    },
    {
      title: "Best Practice Adoption",
      description: "Leverage our experience from hundreds of implementations to avoid common pitfalls and adopt industry best practices.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Standardized workflows",
        "Governance frameworks",
        "Data integrity standards",
        "Security best practices",
      ],
    },
    {
      title: "Maximized ROI",
      description: "We help you extract the full value from your Zoho licenses by activating underutilized features and modules.",
      image: "/images/lap/lap3.webp",
      points: [
        "License optimization",
        "Feature adoption roadmaps",
        "Redundancy elimination",
        "Automation of core tasks",
      ],
    },
    {
      title: "Expert Guidance",
      description: "Access a dedicated team of certified Zoho experts who act as your strategic technology partners.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Certified Zoho consultants",
        "Industry-specific expertise",
        "Proactive system advice",
        "Technical depth & breadth",
      ],
    },
  ];

  const faqs = [
    {
      question: "What is the difference between implementation and consulting?",
      answer: "Implementation focus on the technical setup and go-live. Consulting focus on the strategy, process optimization, and long-term roadmap to ensure Zoho drives maximum business value.",
    },
    {
      question: "Do we need consulting if we are already using Zoho?",
      answer: "Yes, many businesses use only 20-30% of Zoho's capabilities. Our consulting helps you identify those missed opportunities and optimize your existing setup for better performance.",
    },
    {
      question: "How do you measure consulting success?",
      answer: "We define clear KPIs at the start, such as reduced process time, improved data accuracy, or higher user adoption rates, and track these throughout the engagement.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Consulting Services"
      subtitle="Optimize Your Strategy"
      description="Unlock the full potential of the Zoho ecosystem with strategic guidance from AGSuite's certified consultants. We align your technology with your business vision to drive sustainable growth."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Consulting", href: "/zoho/services/consulting" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/threeteam.webp"
      introImage="/images/people/fourteam.webp"
      bgImage="/images/zohoimages/background/zohobg.webp"
      introTitle="Strategic Zoho Guidance for Enterprise Excellence."
      introDescription1="Consulting is the bridge between software functionality and business outcomes. Our experts help you navigate the complex Zoho landscape to build a system that works for you, not against you."
      introDescription2="From process re-engineering to advanced analytics strategy, we provide the roadmap and technical expertise to ensure your Zoho investment delivers measurable impact."
      faqs={faqs}
    />
  );
}




