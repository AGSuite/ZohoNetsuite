"use client";

import React from "react";
import { 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  BarChart3,
  Clock,
  Briefcase,
  Layers,
  Zap,
  Target,
  UserPlus,
  HeartHandshake,
  Wallet,
  DollarSign,
  ChevronRight
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function HRPage() {
  const stats = [
    { label: "Onboarding Speed", value: "60% faster", icon: UserPlus },
    { label: "Employee Engagement", value: "35% higher", icon: HeartHandshake },
    { label: "Compliance Risk", value: "-90%", icon: ShieldCheck },
    { label: "HR Productivity", value: "40%+", icon: Zap },
  ];

  const solutions = [
    {
      title: "Zoho People",
      description: "Modern HR management for the distributed workforce. From attendance and leave to performance reviews, manage your entire employee lifecycle in one secure portal.",
      link: "/zoho/solutions/hr/zoho-people",
      image: "/images/lap/lap3.webp",
      icon: Users,
      highlights: [
        "Self-Service Portal",
        "Performance Management",
        "Attendance Automation",
        "Centralized HR Records"
      ],
    },
    {
      title: "Zoho Recruit",
      description: "Find and hire the best talent with an applicant tracking system that puts people first. Streamline your hiring process from sourcing to offer letter.",
      link: "/zoho/solutions/hr/zoho-recruit",
      image: "/images/people/laptopgirl1.webp",
      icon: UserPlus,
      highlights: [
        "ATS & CRM Capabilities",
        "Job Board Integration",
        "Automated Sourcing",
        "Collaborative Hiring"
      ],
    },
    {
      title: "Zoho Expense",
      description: "The complete expense reporting and travel management system. Automate your employee spend from receipt capture to reimbursement.",
      link: "/zoho/solutions/hr/zoho-expense",
      image: "/images/lap/lap2.webp",
      icon: Wallet,
      highlights: [
        "Auto Scan Receipts",
        "Policy Compliance Engine",
        "Direct Reimbursements",
        "Travel Desk Management"
      ],
    },
    {
      title: "Zoho Payroll",
      description: "Tax-compliant payroll software for error-free disbursements. Automate tax calculations, deductions, and payslip generation in minutes.",
      link: "/zoho/solutions/hr/zoho-payroll",
      image: "/images/lap/lap1.webp",
      icon: DollarSign,
      highlights: [
        "Automatic Tax Calculation",
        "Statutory Compliance",
        "Direct Bank Transfers",
        "Employee Tax Portal"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="HR & Workforce Management Solutions"
      subtitle="The Modern Way to Manage Your Greatest Asset."
      description="Scale your organization with a digital-first HR platform. Zoho People and Recruit help you find, hire, and nurture the talent required for global scale, while maintaining absolute operational efficiency."
      category="HR & People"
      heroImage="/images/people/threeteam.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "HR", href: "/zoho/solutions/hr" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


