"use client";

import React from "react";
import { 
  TrendingUp, 
  Heart, 
  Target, 
  Calendar,
  FileText,
  CreditCard,
  Package,
  Wallet,
  Clock,
  ShieldCheck,
  Receipt,
  PieChart
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoBooksPage() {
  const stats = [
    { label: "Efficiency Boost", value: 50, suffix: "%", icon: TrendingUp },
    { label: "Client Satisfaction", value: 95, suffix: "%", icon: Heart },
    { label: "Accuracy Rate", value: 99, suffix: "%", icon: Target },
    { label: "Time Saved", value: 35, suffix: "%", icon: Calendar },
  ];

  const modules = [
    {
      title: "Invoicing",
      description: "Create professional invoices, set up recurring billing, and get paid faster with online payment gateways.",
      image: "/images/lap/lap1.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Inventory Management",
      description: "Track stock levels in real-time, manage sales and purchase orders, and optimize your supply chain.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Expense Tracking",
      description: "Record and categorize business expenses, upload receipts, and stay on top of your spending effortlessly.",
      image: "/images/people/laptopgirl.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Banking",
      description: "Connect your bank accounts, fetch statements automatically, and reconcile transactions in seconds.",
      image: "/images/lap/lap3.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Project Accounting",
      description: "Track time spent on tasks, manage project budgets, and bill clients directly from your projects.",
      image: "/images/people/fourteam.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "GST & Tax Compliance",
      description: "Automatically calculate taxes, generate GST-compliant invoices, and file returns with ease.",
      image: "/images/lap/lap4.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Purchase Orders",
      description: "Create and send purchase orders, track deliveries, and convert them into bills seamlessly.",
      image: "/images/people/laptopmen.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Financial Reporting",
      description: "Gain insights with over 50+ financial reports, including P&L, balance sheets, and cash flow statements.",
      image: "/images/lap/lap5.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Client Portal",
      description: "Give your clients a secure space to view invoices, make payments, and discuss estimates.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Sales Orders",
      description: "Manage your sales pipeline from quote to fulfillment, ensuring every order is tracked accurately.",
      image: "/images/lap/lap7_11zon.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Recurring Transactions",
      description: "Automate your billing and payments for regular clients, saving you hours of manual work every month.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Multi-Currency support",
      description: "Record transactions in multiple currencies and handle global business operations with automated exchange rates.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "End-to-End Accounting",
      description: "Manage every aspect of your finances from one place. Zoho Books connects your sales, purchases, and banking into a single source of truth.",
      image: "/images/people/fourteam.webp",
      points: [
        "Unified view of cash flow and health",
        "Direct integration with CRM and Inventory",
        "Automated reconciliation with major banks",
        "Seamless multi-entity management"
      ],
    },
    {
      title: "Automated Workflows",
      description: "Eliminate manual data entry and repetitive tasks. Set up rules to automate invoicing, reminders, and payment processing.",
      image: "/images/lap/lap2.webp",
      points: [
        "Schedule professional recurring invoices",
        "Automated payment reminders for clients",
        "Custom workflow rules for business logic",
        "Auto-scan receipts with OCR technology"
      ],
    },
    {
      title: "Real-time Collaboration",
      description: "Work together with your accountant and team in real-time. Role-based access ensures everyone has the data they need, safely.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Secure accountant access for easy audits",
        "Collaborative client portal for transparency",
        "Mobile apps for approvals on-the-go",
        "Multi-user roles with granular permissions"
      ],
    },
    {
      title: "Global Tax Compliance",
      description: "Stay compliant wherever you do business. Zoho Books handles GST, VAT, and other local taxes automatically based on your region.",
      image: "/images/lap/lap1.webp",
      points: [
        "Automatic GST calculation and filing",
        "E-invoicing and E-way bill generation",
        "Region-specific tax localization built-in",
        "Audit-ready financial reports anytime"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Books — Online Accounting Software"
      subtitle="Comprehensive Finance Management for Modern Businesses."
      description="Zoho Books is an online accounting software that manages your finances, keeps you GST compliant, automates business workflows, and helps you work collectively across departments."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Finance", href: "/zoho/solutions/finance" },
        { label: "Zoho Books", href: "/zoho/solutions/finance/zoho-books" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap2.webp"
      whatIsImage="/images/zoho Dashboards/zoho books.webp"
      heroCard1={{
        title: "GST & Tax Compliant",
        subtitle: "Automated tax calculation and filing.",
        icon: FileText
      }}
      heroCard2={{
        title: "50% Efficiency Boost",
        subtitle: "Automated reconciliation and workflows.",
        icon: TrendingUp
      }}
      pricingInfo={{
        description: "Choose from six affordable plans starting at $0 for small businesses. Scale your finance as you grow.",
        plans: [
          "Standard: $15 /month",
          "Professional: $30 /month",
          "Premium: $50 /month",
          "Elite: $100 /month",
        ],
        ctaText: "Start 14-Day Free Trial",
      }}
    />
  );
}
