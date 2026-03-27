"use client";

import React from "react";
import { 
  TrendingUp, 
  Heart, 
  Target, 
  Calendar,
  Users,
  Zap,
  Phone,
  BarChart3,
  Globe2,
  Briefcase,
  Mail,
  Search,
  Megaphone,
  ShoppingBag,
  ClipboardList,
  DollarSign
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";
import { ZohoCRMCircularDesign } from "@/app/zoho/components/ZohoCRMCircularDesign";

export default function ZohoCRMPage() {
  const stats = [
    { label: "Sales Increase", value: 45, suffix: "%", icon: TrendingUp },
    { label: "Customer Retention", value: 85, suffix: "%", icon: Heart },
    { label: "Lead Conversion", value: 60, suffix: "%", icon: Target },
    { label: "Time Saved", value: 40, suffix: "%", icon: Calendar },
  ];

  const modules = [
    {
      title: "Lead Management",
      description: "Capture, nurture, and convert leads from multiple sources with automated workflows and scoring.",
      image: "/images/people/laptopmen.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Sales Automation",
      description: "Automate repetitive tasks, follow-ups, and sales processes to close deals faster and more efficiently.",
      image: "/images/lap/lap1.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Contact Management",
      description: "Get a 360-degree view of your contacts, including interaction history, notes, and social media updates.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Deal Management",
      description: "Track your sales pipeline, manage stages, and gain visibility into potential revenue and win rates.",
      image: "/images/people/fourteam.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Workflow Automation",
      description: "Design and implement complex business processes without writing a single line of code.",
      image: "/images/lap/lap2.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Mobile CRM",
      description: "Access your CRM data on-the-go with native mobile apps for iOS and Android, keeping you connected always.",
      image: "/images/people/laptopmen2.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Sales Analytics",
      description: "Gain deep insights into your sales performance with customizable dashboards and over 75+ reports.",
      image: "/images/lap/lap3.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Omnichannel Communication",
      description: "Connect with customers via email, phone, social media, and live chat within a single interface.",
      image: "/images/lap/lap4.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "AI Sales Assistant (Zia)",
      description: "Let Zia predict lead conversion, identify anomalies, and suggest the best time to contact customers.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Inventory Management",
      description: "Monitor stock levels, manage orders, and sync invoices directly with your sales process.",
      image: "/images/lap/lap5.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Marketing Attribution",
      description: "Track the journey of every lead from click to close and understand which campaigns drive the most ROI.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Sales Forecasting",
      description: "Predict future revenue based on real-time data and historical performance for better business planning.",
      image: "/images/lap/lap7_11zon.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "360° Customer Intelligence",
      description:
        "Zoho CRM provides a complete picture of every customer interaction across sales, marketing, and support — allowing your teams to deliver highly personalized experiences at every touchpoint.",
      image: "/images/people/fourteam.webp",
      points: [
        "Unified customer timeline across all channels",
        "Seamless integration with finance and inventory",
        "Social media interaction tracking built-in",
        "No more siloed data between departments",
      ],
    },
    {
      title: "Unmatched Productivity",
      description:
        "Automate the busywork that slows down your sales team. From lead scoring to follow-up emails, Zoho CRM handles the routine tasks so your reps can focus on building relationships.",
      image: "/images/lap/lap2.webp",
      points: [
        "Advanced lead scoring and assignment rules",
        "Automated email sequences and follow-up tasks",
        "Seamless calendar and meeting integration",
        "Real-time alerts for critical deal activities",
      ],
    },
    {
      title: "Omnichannel Engagement",
      description:
        "Meet your customers where they are. Whether it's email, phone, live chat, or social media, Zoho CRM centralizes all communication so you never miss a beat.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Integrated telephony and SMS capabilities",
        "Live chat triggered by lead behavior",
        "Social media monitoring and response",
        "Consolidated communication history per record",
      ],
    },
    {
      title: "AI-Powered Insights",
      description:
        "Leverage Zia, our AI assistant, to get smarter about your sales. Zia identifies patterns, predicts outcomes, and offers actionable suggestions to help you close more deals.",
      image: "/images/lap/lap1.webp",
      points: [
        "Predictive lead and deal conversion scoring",
        "Best-time-to-contact recommendations",
        "Anomaly detection for sales activities",
        "Natural language processing for quick queries",
      ],
    },
    {
      title: "Customizable & Scalable",
      description:
        "Your business is unique, and your CRM should be too. Zoho CRM's highly flexible architecture allows you to customize every aspect to fit your specific workflows.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Custom modules, fields, and layouts",
        "Bespoke canvass design for unique UIs",
        "Extensive API and developer SDKs",
        "Conditional fields and dynamic layouts",
      ],
    },
    {
      title: "Enterprise-Grade Security",
      description:
        "Protect your most valuable asset — your data. Zoho CRM comes with robust security features that give you complete control over who sees what.",
      image: "/images/lap/lap3.webp",
      points: [
        "Role-based access and field-level security",
        "HIPAA and GDPR compliance built-in",
        "Audit logs and activity tracking",
        "Multi-factor authentication for all users",
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho CRM — Modern Customer Relationship Management"
      subtitle="Unified Relationships, Accelerated Growth."
      description="A comprehensive CRM platform that empowers over 250,000 businesses globally to build lasting customer relationships and drive revenue growth through better experiences."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Sales", href: "/zoho/solutions/sales" },
        { label: "Zoho CRM", href: "/zoho/solutions/sales/zoho-crm" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho Dashboards/zoho crm.webp"
      heroCard1={{
        title: "250,000+ Businesses",
        subtitle: "The world's most popular cloud CRM.",
        icon: Users
      }}
      heroCard2={{
        title: "45% More Deals",
        subtitle: "Close more business with Zia AI.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Flexible pricing for every scale. Zoho CRM offers transparent, pay-as-you-go pricing that grows with your business.",
        plans: [
          "Standard: $14 /user/month",
          "Professional: $23 /user/month",
          "Enterprise: $40 /user/month",
          "Ultimate: $52 /user/month",
        ],
        ctaText: "Start 15-Day Free Trial",
      }}
    />
  );
}
