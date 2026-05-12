"use client";

import React from "react";
import {
  Link2,
  Zap,
  CheckCircle2,
  Database,
  Cloud,
  Settings,
  GitMerge,
  BarChart3,
  Layers,
  ArrowRightLeft,
  Share2,
  RefreshCcw
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoIntegrationServicesPage() {
  const stats = [
    { label: "Successful API Connections", value: 500, suffix: "+", icon: Link2 },
    { label: "Automation Speed", value: 3, suffix: "x", icon: Zap },
    { label: "Data Accuracy", value: 100, suffix: "%", icon: CheckCircle2 },
    { label: "Connected Apps", value: 50, suffix: "+", icon: Layers },
  ];

  const modules = [
    {
      title: "Zoho-to-ERP Integration",
      description: "Seamlessly connect Zoho to major ERP systems like NetSuite, SAP, and Oracle for a unified financial truth.",
      image: "/images/lap/lap1.webp",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: Database,
    },
    {
      title: "E-Commerce Sync",
      description: "Auto-sync Shopify, WooCommerce, or Amazon sales data with Zoho Inventory and Books in real-time.",
      image: "/images/lap/lap2.webp",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: ArrowRightLeft,
    },
    {
      title: "Zoho Flow Automation",
      description: "Build visual, multi-app workflows that trigger actions across your entire business cloud automatically.",
      image: "/images/people/laptopgirl.webp",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Share2,
    },
    {
      title: "Custom API Development",
      description: "Our developers build bespoke REST and SOAP connectors for legacy or niche external systems.",
      image: "/images/lap/lap3.webp",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: GitMerge,
    },
  ];

  const benefits = [
    {
      title: "Zero Manual Data Entry",
      description: "Eliminate the risk of human error by automating data transfers between your business critical apps.",
      image: "/images/lap/lap1.webp",
      points: [
        "Automated record creation",
        "Bi-directional data sync",
        "Scheduled bulk transfers",
        "Error validation logs",
      ],
    },
    {
      title: "Real-Time Visibility",
      description: "Get a unified view of your business by pulling data from multiple sources into a single Zoho dashboard.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Consolidated group reporting",
        "Cross-platform data analytics",
        "Instant transaction updates",
        "360-degree customer view",
      ],
    },
    {
      title: "Scalable Architecture",
      description: "We build integrations using lightweight, API-led architecture that grows with your business complexity.",
      image: "/images/lap/lap3.webp",
      points: [
        "Future-proof API layers",
        "Minimal system overhead",
        "Secure auth protocols",
        "Phased rollout options",
      ],
    },
    {
      title: "Automated Error Handling",
      description: "Our integrations come with built-in retry mechanisms and alert systems to ensure data consistency even during downtime.",
      image: "/images/people/threeteam.webp",
      points: [
        "Proactive failure alerts",
        "Automatic retry logic",
        "Detailed transaction logs",
        "Conflict resolution tools",
      ],
    },
    {
      title: "Enhanced Compliance",
      description: "Maintain a clear audit trail of every data transfer, ensuring your business stays compliant with data governance standards.",
      image: "/images/lap/lap2.webp",
      points: [
        "Secure OAuth2 authentication",
        "Encrypted data transmission",
        "Detailed activity monitoring",
        "GDPR-aligned data flow",
      ],
    },
  ];

  const faqs = [
    {
      question: "Can Zoho integrate with my legacy on-premise system?",
      answer: "Yes, we can build custom connectors (bridging software) to securely sync data between your local databases and the Zoho cloud.",
    },
    {
      question: "How do you ensure data security during the sync?",
      answer: "We use enterprise-grade encryption and secure authentication methods like OAuth2 to ensure your sensitive data is protected mid-transfer.",
    },
    {
      question: "Is there a limit to how many apps can be connected?",
      answer: "No, we can connect Zoho to as many third-party or internal applications as your business process requires using a hub-and-spoke integration model.",
    },
    {
      question: "How do we monitor the health of these integrations?",
      answer: "We provide custom dashboards and automated email/Slack notifications that alert your IT team immediately if any synchronization issue occurs.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Integration Services"
      subtitle="Connect Your Business"
      description="Break down data silos effortlessly. We connect Zoho to your ERP, E-commerce, Marketing, and legacy tools — creating a unified, automated business ecosystem."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Integration Services", href: "/zoho/services/integration-services" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/zohoimages/zohointegration.png"
      introImage="/images/people/laptopmen.webp"
      bgImage="/images/zohoimages/background/zohobg.webp"
      introTitle="Unify Your Entire Business Stack."
      introDescription1="A disconnected business is an inefficient business. Our integration experts ensure your Zoho platform communicates seamlessly with every other tool in your stack."
      introDescription2="From simple multi-app workflows using Zoho Flow to complex custom API developments, we deliver the connectivity your business needs to scale effectively."
      faqs={faqs}
    />
  );
}




