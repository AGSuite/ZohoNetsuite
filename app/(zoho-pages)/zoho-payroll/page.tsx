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
  FileText
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoPayrollPage() {
  const stats = [
    { label: "Compliance Rate", value: 100, suffix: "%", icon: ShieldCheck },
    { label: "Payroll Processing", value: 50, suffix: "% faster", icon: Zap },
    { label: "Employee Adoption", value: 90, suffix: "%", icon: Heart },
    { label: "Tax Filing Accuracy", value: 99, suffix: ".9%", icon: Target },
  ];

  const modules = [
    {
      title: "Automated Pay Runs",
      description: "Process your team's payroll in minutes with automated calculations for earnings, deductions, and taxes.",
      image: "/images/modules/dashboard module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Statutory Compliance",
      description: "Stay compliant with local labor laws, PF, ESI, LWF, and PT — handled automatically based on your region.",
      image: "/images/modules/working module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Employee Self-Service",
      description: "Empower employees to view payslips, submit reimbursement claims, and manage tax declarations online.",
      image: "/images/modules/any modules.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Benefits Management",
      description: "Administer employee benefits, health insurance, and retirement plans seamlessly within the payroll workflow.",
      image: "/images/modules/managging together module.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Expense Reimbursements",
      description: "Streamline the processing of business expenses and pay them out directly alongside the monthly salary.",
      image: "/images/modules/sheet module.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Direct Deposit",
      description: "Payout salaries directly to employee bank accounts across major banks with integrated payment gateways.",
      image: "/images/modules/account modules.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Payroll Accounting",
      description: "Automatically sync your payroll data with Zoho Books for a perfectly balanced general ledger every time.",
      image: "/images/modules/dashbord module.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Custom Allowances",
      description: "Define bespoke earnings and deduction components to perfectly match your organization's compensation structure.",
      image: "/images/modules/csm modules.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Form-16 & Tax Forms",
      description: "Generate and distribute signed tax forms to all employees at the end of the financial year with zero manual effort.",
      image: "/images/modules/module8.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Arrears & Adjustments",
      description: "Handle salary revisions, bonus payments, and backdated adjustments with absolute precision.",
      image: "/images/modules/chatt mdoule.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Mobile Payroll App",
      description: "Allow your managers to approve pay runs and employees to access data from their pocket at any time.",
      image: "/images/modules/mobile module.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Unified HR Sync",
      description: "Sync employee data, leave, and attendance automatically from Zoho People to ensure accurate payroll.",
      image: "/images/modules/any module.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Effortless Compliance",
      description: "Zoho Payroll is built to keep you on the right side of the law. Localized for major markets, it handles every statutory detail automatically.",
      image: "/images/people/fourteam.webp",
      points: [
        "Automated tax and PF calculations",
        "Region-specific payroll compliance built-in",
        "Generate audit-ready statutory reports",
        "Regular updates for changing labor laws"
      ],
    },
    {
      title: "Frictionless Payruns",
      description: "Stop spending days on salary processing. Automate the most complex parts of your payroll and pay your team on time, every time.",
      image: "/images/lap/lap2.webp",
      points: [
        "Process payroll in just a few clicks",
        "Automated leave and attendance sync",
        "Handle complex variable pay structures",
        "Direct bank payouts for entire team"
      ],
    },
    {
      title: "Empowered Workforce",
      description: "Give your employees the transparency they deserve. A dedicated self-service portal handles everything from payslips to tax claims.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Instant digital payslip distribution",
        "Smart tax declaration and tracker",
        "Online reimbursement and loan requests",
        "Centralized communication for queries"
      ],
    },
    {
      title: "Deep Finance Integration",
      description: "Your payroll and your books should never be at odds. Zoho Payroll connects directly to your accounting for absolute data integrity.",
      image: "/images/lap/lap1.webp",
      points: [
        "Automated payroll journal entries",
        "Unifiead vendor and benefit mapping",
        "Real-time payroll cost center reporting",
        "Eliminate manual data entry errors"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Payroll — Cloud-Based Payroll Software"
      subtitle="The Payroll System That Works as Hard as You Do."
      description="Zoho Payroll is an automated payroll software that manages salary processing, statutory compliance, and employee benefits — ensuring your team is paid accurately and on time."
      introDescription2="Simplify your payroll processing with automated calculations, statutory compliance tracking, and direct deposit capabilities that ensure your team is paid on time."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "HR", href: "/zoho/solutions/hr" },
        { label: "Zoho Payroll", href: "/zoho/solutions/hr/zoho-payroll" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap4.webp"
      whatIsImage="/images/zoho-dashboards/zoho-payroll.webp"
      heroCard1={{
        title: "100% Statutory Compliance",
        subtitle: "Automated PF, ESI, and Tax handling.",
        icon: ShieldCheck
      }}
      heroCard2={{
        title: "50% Faster Processing",
        subtitle: "Automated pay runs and bank payouts.",
        icon: Zap
      }}
      pricingInfo={{
        description: "Transparent, per-employee pricing that makes sense for your business. No implementation fees, no hidden costs.",
        plans: [
          "Standard: $4 /employee/month",
          "Includes 5 Employees",
          "Premium: $7 /employee/month",
          "Ultimate: $10 /employee/month",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}
