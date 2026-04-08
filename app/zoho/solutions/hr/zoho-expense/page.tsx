"use client";

import React from "react";
import { 
  TrendingUp, 
  Heart, 
  Target, 
  Wallet, 
  ShieldCheck, 
  Zap,
  Globe2,
  Clock,
  Briefcase,
  Users,
  CheckCircle,
  BarChart3,
  Calendar,
  FileText,
  CreditCard,
  MapPin,
  RefreshCcw,
  Plane
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoExpensePage() {
  const stats = [
    { label: "Compliance Rate", value: 98, suffix: "%", icon: ShieldCheck },
    { label: "Reporting Speed", value: 75, suffix: "% faster", icon: Zap },
    { label: "User Adoption", value: 92, suffix: "%", icon: Heart },
    { label: "Cost Savings", value: 25, suffix: "%", icon: TrendingUp },
  ];

  const modules = [
    {
      title: "Receipt Scanning (OCR)",
      description: "Auto-scan and capture data from receipts instantly with advanced AI. No more manual data entry of individual expenses.",
      image: "/images/lap/lap1.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Corporate cards",
      description: "Import card feeds directly, reconcile every transaction, and gain visibility into all business spend from one place.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Travel Management",
      description: "Request travels, book flights and hotels, and manage entire trip itineraries within the application workflow.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Approval Workflows",
      description: "Define multi-level, automated approval rules to ensure transparency and prevent expense policy violations.",
      image: "/images/people/fourteam.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Expense Policies",
      description: "Set up granular spend limits, category rules, and audit flags to enforce company spending best practices.",
      image: "/images/lap/lap3.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Mobile App",
      description: "Allow your team to report expenses, capture receipt photos, and approve reports on-the-go with native mobile apps.",
      image: "/images/people/laptopgirl1.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Direct Reimbursements",
      description: "Empower your employees by paying back their business expenses directly to their bank accounts on time.",
      image: "/images/people/threeteam.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Mileage Tracking",
      description: "Track trip miles accurately with GPS, Map integration, or odometer readings for precise fuel reimbursements.",
      image: "/images/lap/lap4.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Deep Finance Sync",
      description: "Integrate directly with Zoho Books, QuickBooks, or NetSuite for seamless accounting and general ledger mapping.",
      image: "/images/lap/lap5.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Analytics & Trends",
      description: "Identify spend patterns, monitor budget health, and find areas for cost-cutting with over 25+ detailed reports.",
      image: "/images/people/laptopmen2.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Vendor Management",
      description: "Centralize your vendor data and payments for regular office expenses and third-party services in one portal.",
      image: "/images/lap/lap2.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Global Tax Recovery",
      description: "Handle VAT, GST, and international tax treatments with built-in multi-currency and region support.",
      image: "/images/people/laptopmen.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Absolute Control Over Spend",
      description: "Zoho Expense is your first line of defense against overspending. Gain total visibility and control over every cent spent by your team.",
      image: "/images/people/fourteam.webp",
      points: [
        "Real-time visibility into all business spending",
        "Granular, automated policy enforcement",
        "Multi-level approval workflows",
        "Customizable spend limits by department"
      ],
    },
    {
      title: "Frictionless Reporting for Teams",
      description: "Make life easy for your employees. Our AI-driven receipt scanning and mobile app turn tedious reporting into a matter of seconds.",
      image: "/images/lap/lap2.webp",
      points: [
        "AI-powered receipt data extraction (OCR)",
        "Submit entire reports in just a few taps",
        "Automatic mileage and per-diem handling",
        "Mobile-first experience for field teams"
      ],
    },
    {
      title: "Integrated Travel Management",
      description: "Go beyond just reporting spend. Manage the entire business travel lifecycle, from planning and bookings to final settlements.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Comprehensive travel booking workflow",
        "Policy-compliant travel requests and bookings",
        "Manage itineraries for global teams",
        "Integrated travel card reconciliation"
      ],
    },
    {
      title: "Unified Financial Data",
      description: "Your expense data shouldn't be isolated. Zoho Expense connects to your accounting systems for absolute financial integrity.",
      image: "/images/lap/lap1.webp",
      points: [
        "Native sync with Zoho Books & ERPs",
        "Unified general ledger and chart of accounts",
        "Automated expense journal entries",
        "Faster month-end financial closing"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Expense — Online Expense Management Software"
      subtitle="The Easiest Way to Manage Your Business Spending."
      description="Zoho Expense is a cloud-based expense management software that automates reporting, streamlines travel management, and empowers teams to work together efficiently."
      introDescription2="Transform how your organization manages expenses. Zoho Expense automates expense reporting, provides real-time policy checks, and speeds up reimbursement cycles."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Finance", href: "/zoho/solutions/finance" },
        { label: "Zoho Expense", href: "/zoho/solutions/finance/zoho-expense" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/laptopmen.webp"
      whatIsImage="/images/zoho-dashboards/zoho-expense.webp"
      heroCard1={{
        title: "98% Compliance Rate",
        subtitle: "Automated policy and workflow audit.",
        icon: ShieldCheck
      }}
      heroCard2={{
        title: "AI-Powered Scanning",
        subtitle: "Auto-extract data from any receipt via OCR.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Choose a plan that fits your business needs — from small teams to global conglomerates. Start for $0 for micro-teams.",
        plans: [
          "Standard: $3 /user/month",
          "Professional: $5 /user/month",
          "Premium: $8 /user/month",
          "Enterprise: $12 /user/month",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}
