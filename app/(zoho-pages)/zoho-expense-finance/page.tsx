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
  CreditCard,
  RefreshCcw,
  DollarSign
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";



export default function ZohoExpenseFinancePage() {
  const stats = [
    { label: "Audit Accuracy", value: 99, suffix: "%", icon: ShieldCheck },
    { label: "Reimbursement Cycle", value: 80, suffix: "% Faster", icon: Zap },
    { label: "Spend Visibility", value: 100, suffix: "%", icon: BarChart3 },
    { label: "Tax Recovery", value: 15, suffix: "% Increase", icon: TrendingUp },
  ];

  const modules = [
    {
      title: "Finance Control Center",
      description: "Gain a unified view of all business spending and employee reimbursements in one central finance portal.",
      image: "/images/modules/financial_reporting_custom.png",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Corporate Card Reconciliation",
      description: "Direct feeds from major banks to reconcile corporate card transactions automatically with your general ledger.",
      image: "/images/modules/bank_reconciliation_custom.png",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Policy Enforcement",
      description: "Automate spending policies and multi-level approval workflows to prevent budget leaks and fraud.",
      image: "/images/modules/compliance_calendar.png",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "General Ledger Sync",
      description: "Export expense reports directly into Zoho Books, QuickBooks, or NetSuite for seamless accounting.",
      image: "/images/modules/general_ledger_custom.png",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "VAT & Tax Handling",
      description: "Automatically track and recover VAT/GST on business expenses with built-in multi-region tax support.",
      image: "/images/modules/tax_management_custom.png",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Project-Wise Spending",
      description: "Track expenses against specific projects and clients to ensure accurate project costing and billing.",
      image: "/images/modules/project_management.png",
      color: "#154e8a",
      rgb: "18,68,130",
    }
  ];

  const benefits = [
    {
      title: "Total Fiscal Visibility",
      description: "Know exactly where every dollar is going. Zoho Expense provides deep analytics to identify spend trends and cost-cutting opportunities.",
      image: "/images/people/zoho_expense_benefit_visibility.png",
      points: [
        "Real-time spend analytics dashboards",
        "Budget vs. Actual tracking",
        "Identify policy violation patterns",
        "Category-wise spending insights"
      ],
    },
    {
      title: "Automated Reimbursements",
      description: "Keep your employees happy with lightning-fast reimbursements directly to their bank accounts.",
      image: "/images/people/zoho_expense_benefit_reimbursement.png",
      points: [
        "Direct bank payment integration",
        "Automated reimbursement workflows",
        "Notification on payment status",
        "Audit trail for every transaction"
      ],
    }
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Expense for Finance — Advanced Spend Management"
      subtitle="Total Control Over Corporate Spending."
      description="Zoho Expense for Finance provides the controls and visibility that finance teams need to manage corporate spending and automate reimbursements."
      introDescription2="Streamline your expense management with a finance-centric platform that automates auditing, enforces policies, and integrates with your core accounting."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Zoho Expense", href: "/zoho-expense-finance" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/people/zoho_expense_finance_hero.png"
      whatIsImage="/images/zoho-dashboards/zoho-expense.webp"
      heroCard1={{
        title: "Policy Audit",
        subtitle: "100% automated rule checking.",
        icon: ShieldCheck
      }}
      heroCard2={{
        title: "Books Sync",
        subtitle: "Seamless ledger integration.",
        icon: DollarSign
      }}
      pricingInfo={{
        description: "Flexible plans for finance teams of all sizes. No hidden fees, just pure control.",
        plans: [
          "Standard: $3 /user/month",
          "Professional: $5 /user/month",
          "Premium: $8 /user/month",
          "Enterprise: Custom Quote",
        ],
        ctaText: "Get a Quote",
      }}
    />
  );
}






