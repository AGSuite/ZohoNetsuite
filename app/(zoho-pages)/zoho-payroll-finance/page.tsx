"use client";

import React from "react";



import {
  TrendingUp,
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
  DollarSign
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoPayrollFinancePage() {
  const stats = [
    { label: "Financial Accuracy", value: 99.9, suffix: "%", icon: ShieldCheck },
    { label: "Bookkeeping Time", value: 60, suffix: "% Less", icon: Zap },
    { label: "Audit Readiness", value: 100, suffix: "%", icon: Target },
    { label: "Cost Savings", value: 30, suffix: "%+", icon: DollarSign },
  ];

  const modules = [
    {
      title: "Finance-First Payroll",
      description: "Ensure your payroll data flows seamlessly into your accounting system for real-time financial updates.",
      image: "/images/modules/account modules.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Statutory Compliance",
      description: "Automatic calculations and filings for PF, ESI, and Taxes to keep your books audit-ready at all times.",
      image: "/images/modules/working module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Expense Reimbursement",
      description: "Manage employee expenses and pay them out directly with the monthly salary, synced with your expense accounts.",
      image: "/images/modules/sheet module.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Payroll Accounting",
      description: "Automatically generate journal entries in Zoho Books for every pay run, eliminating manual data entry.",
      image: "/images/modules/dashbord module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Direct Bank Payouts",
      description: "Integrated bank payments to ensure employees are paid on time without leaving the payroll platform.",
      image: "/images/modules/any module.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Global Multi-Entity",
      description: "Manage payroll across multiple locations and entities with unified reporting and compliance tracking.",
      image: "/images/modules/mobile module.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    }
  ];

  const benefits = [
    {
      title: "Absolute Data Integrity",
      description: "Eliminate the gap between HR and Finance. Zoho Payroll ensures your payroll costs are accurately reflected in your P&L.",
      image: "/images/lap/lap1.webp",
      points: [
        "Automated ledger entries",
        "Cost center-wise payroll tracking",
        "Real-time liability monitoring",
        "Error-free financial reporting"
      ],
    },
    {
      title: "Tax & Compliance Ease",
      description: "Never worry about tax deadlines again. We handle the complex calculations and filing schedules for you.",
      image: "/images/lap/lap2.webp",
      points: [
        "Auto-generated tax forms",
        "Statutory report generation",
        "Regular legislative updates",
        "Digital tax record keeping"
      ],
    }
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Payroll for Finance — Integrated Payroll Management"
      subtitle="Where Payroll Meets Financial Precision."
      description="Streamline your financial operations with a payroll system built to integrate perfectly with your accounting, ensuring compliance and accuracy."
      introDescription2="Zoho Payroll for Finance bridges the gap between employee payouts and financial reporting, providing a unified platform for total fiscal control."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Payroll", href: "/zoho-payroll-finance" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap3.webp"
      whatIsImage="/images/zoho-dashboards/zoho-payroll.webp"
      heroCard1={{
        title: "Books Integration",
        subtitle: "Direct sync with Zoho Books.",
        icon: Wallet
      }}
      heroCard2={{
        title: "Audit Ready",
        subtitle: "100% compliant statutory reports.",
        icon: Target
      }}
      pricingInfo={{
        description: "Scale your payroll as you grow. Transparent pricing with no hidden implementation costs.",
        plans: [
          "Standard: $4 /employee/month",
          "Includes 5 Employees",
          "Professional: $6 /employee/month",
          "Enterprise: Custom Pricing",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}






