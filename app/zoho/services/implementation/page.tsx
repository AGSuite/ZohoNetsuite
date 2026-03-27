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
  ClipboardList,
  Target,
  Layers,
  Shield,
  Users,
  Rocket,
  BarChart3,
  Code2
} from "lucide-react";
import ZohoServiceTemplate from "@/app/zoho/components/services/ZohoServiceTemplate";

export default function ZohoImplementationPage() {
  const stats = [
    { label: "Faster Go-Live", value: 40, suffix: "%", icon: Calendar },
    { label: "User Adoption", value: 95, suffix: "%", icon: CheckCircle2 },
    { label: "Successful Migrations", value: 100, suffix: "%", icon: Database },
    { label: "Process Automation", value: 85, suffix: "%", icon: Zap },
  ];

  const modules = [
    {
      title: "Requirements & Discovery",
      description: "In-depth discovery workshops to map your current processes, define future-state requirements, and build a prioritised project scope.",
      image: "/images/lap/lap1.webp",
      color: "#1e3a8a",
      rgb: "14,50,130",
      Icon: ClipboardList,
    },
    {
      title: "Solution Design",
      description: "Translate business requirements into a detailed Zoho blueprint — covering module configuration, workflow design, and role architecture.",
      image: "/images/lap/lap2.webp",
      color: "#0e7490",
      rgb: "14,116,144",
      Icon: Target,
    },
    {
      title: "System Configuration",
      description: "Configure Zoho to match your exact business rules — subsidiaries, currencies, approval workflows, and all app-specific settings.",
      image: "/images/people/laptopgirl.webp",
      color: "#065f46",
      rgb: "6,95,70",
      Icon: Settings,
    },
    {
      title: "Data Migration",
      description: "Cleanse, map, and migrate your master data and transactional history from legacy CRM or ERP systems with zero data loss.",
      image: "/images/lap/lap3.webp",
      color: "#581c87",
      rgb: "88,28,135",
      Icon: Database,
    },
    {
      title: "Integration Setup",
      description: "Connect Zoho to your existing third-party platforms using Zoho Flow, pre-built connectors, and custom REST APIs.",
      image: "/images/people/laptopmen.webp",
      color: "#1e1b4b",
      rgb: "30,27,75",
      Icon: Layers,
    },
    {
      title: "UAT & Quality Assurance",
      description: "Structured user acceptance testing with real business scenarios — ensuring every module, workflow, and integration works exactly as designed.",
      image: "/images/lap/lap5.webp",
      color: "#1a4365",
      rgb: "26,67,101",
      Icon: Shield,
    },
    {
      title: "Training & Adoption",
      description: "Role-based end-user training, admin workshops, and executive walkthroughs to drive platform adoption from day one.",
      image: "/images/people/fourteam.webp",
      color: "#14532d",
      rgb: "20,83,45",
      Icon: Users,
    },
    {
      title: "Go-Live & Hypercare",
      description: "A structured cutover plan followed by dedicated post-go-live support to resolve issues fast and fine-tune your new system.",
      image: "/images/people/laptopmen2.webp",
      color: "#7f1d1d",
      rgb: "127,29,29",
      Icon: Rocket,
    },
  ];

  const benefits = [
    {
      title: "Fixed-Scope, No Surprises",
      description: "Every implementation engagement is governed by a detailed statement of work with fixed scope, fixed timeline, and transparent pricing — zero surprise invoices.",
      image: "/images/lap/lap1.webp",
      points: [
        "Detailed timeline before work begins",
        "Change management process",
        "Fixed-fee milestone billing",
        "No hidden charges or scope creep",
      ],
    },
    {
      title: "Industry-Tuned Configuration",
      description: "We use pre-built industry templates for various sectors, dramatically reducing configuration time and ensuring best-practice setups.",
      image: "/images/people/laptopgirl.webp",
      points: [
        "Pre-configured industry workflows",
        "Sector-specific database structures",
        "Regulatory and tax pre-sets",
        "Ready-to-use approval hierarchies",
      ],
    },
    {
      title: "Zero Data Loss Migration",
      description: "Our proven data migration framework cleanses, validates, and loads your master data with full audit trails — so you start on Zoho with clean, reliable data.",
      image: "/images/lap/lap3.webp",
      points: [
        "Data cleansing and deduplication",
        "Automated validation rules",
        "Historical transaction mapping",
        "Full rollback plan if needed",
      ],
    },
  ];

  const faqs = [
    {
      question: "How long does a typical Zoho implementation take?",
      answer: "A standard Zoho CRM implementation can take 2-4 weeks, while a full Zoho One suite deployment usually ranges from 6-12 weeks, depending on the complexity of your requirements and data migration needs.",
    },
    {
      question: "Can you migrate data from our existing systems?",
      answer: "Yes, we handle data migration from virtually any legacy system or spreadsheet. We clean, map, and import your records (Accounts, Contacts, Deals, Inventory) securely into your new Zoho environment.",
    },
    {
      question: "Do you offer training for our team after go-live?",
      answer: "Absolutely. We provide comprehensive, role-based training sessions for both end-users and administrators to ensure full adoption of the new system.",
    },
  ];

  return (
    <ZohoServiceTemplate
      title="Zoho Implementation Services"
      subtitle="Deploy Zoho with Confidence"
      description="Seamless setup and configuration of Zoho One, CRM, Books, and other apps tailored to your unique workflows. Go live faster with zero surprises."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Services", href: "/zoho/services" },
        { label: "Implementation", href: "/zoho/services/implementation" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/Services/managedservices.webp"
      introImage="/images/netsuiteimages/Servicesimg/finamce.webp"
      introTitle="A Risk-Free Path to Zoho Success."
      introDescription1="A successful software implementation is more than just turning on an app — it's a strategic business transformation. Whether you are deploying Zoho CRM or the entire Zoho One suite, our experts guide you through every phase."
      introDescription2="AGSuite's implementation methodology combines deep technical expertise with industry best practices, ensuring your system is configured to scale, your data is secure, and your team is ready to succeed from day one."
      faqs={faqs}
    />
  );
}
