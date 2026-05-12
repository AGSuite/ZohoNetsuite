"use client";

import React from "react";
import {
  ClipboardCheck,
  BarChart3,
  Target,
  Zap,
  Users,
  MessageSquare,
  CheckCircle2,
  Heart,
  Globe2,
  ShieldCheck
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoSurveyPage() {
  const stats = [
    { label: "Completion Rate", value: 45, suffix: "% higher", icon: ClipboardCheck },
    { label: "Feedback Insight", value: 65, suffix: "% better", icon: BarChart3 },
    { label: "Customer Loyalty", value: 30, suffix: "% increase", icon: Heart },
    { label: "Data Collection", value: 50, suffix: "% faster", icon: Zap },
  ];

  const modules = [
    {
      title: "Survey Creator",
      description: "Build custom surveys with a variety of question types and logical branching.",
      image: "/images/modules/csm modules.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Multi-Channel Distribution",
      description: "Share surveys via email, social media, QR codes, or embed them on your website.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Real-Time Analysis",
      description: "Visualize survey responses in real-time with automatically generated charts and graphs.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Advanced Logic",
      description: "Use skip logic and piping to create a personalized experience for every respondent.",
      image: "/images/modules/managging together module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    }
  ];

  const benefits = [
    {
      title: "Understand Your Audience",
      description: "Gain deep insights into your customers' preferences, needs, and pain points.",
      image: "/images/people/fourteam.webp",
      points: [
        "In-depth sentiment analysis of responses",
        "Customizable reports for detailed viewing",
        "Comparison of results across different segments",
        "Export data to various formats for further analysis"
      ],
    },
    {
      title: "Actionable Data",
      description: "Turn survey results into tangible improvements for your products and services.",
      image: "/images/lap/lap1.webp",
      points: [
        "Integrate survey data with your CRM",
        "Trigger workflows based on feedback",
        "Track customer satisfaction over time",
        "Make data-driven decisions with confidence"
      ],
    }
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Survey — Create Professional Surveys in Minutes"
      subtitle="Listen to Your Customers, Improve Your Business."
      description="Zoho Survey provides an easy way to create, distribute, and analyze surveys to gather valuable feedback from your customers and employees."
      introDescription2="With a wide range of question types and powerful analysis tools, you can gain the insights you need to make informed decisions and drive growth."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Marketing", href: "/zoho/marketing/survey" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/laptopmen2.webp"
      whatIsImage="/images/zoho-dashboards/zoho-crm-plus.webp"
      heroCard1={{
        title: "Expert Insights",
        subtitle: "Collect high-quality data easily.",
        icon: ClipboardCheck
      }}
      heroCard2={{
        title: "Secure & Reliable",
        subtitle: "Enterprise-grade data protection.",
        icon: ShieldCheck
      }}
      pricingInfo={{
        description: "Choose a plan that fits your survey needs and audience reach.",
        plans: [
          "Free Plan: Unlimited surveys",
          "Plus: $20 /month (Billed annually)",
          "Enterprise: $60 /month (Billed annually)",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}




