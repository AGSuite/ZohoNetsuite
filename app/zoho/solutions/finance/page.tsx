"use client";

import React from "react";
import { 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  BarChart3,
  Package,
  Clock,
  Briefcase,
  Layers,
  Zap
} from "lucide-react";
import ZohoCategoryTemplate from "@/app/zoho/components/solutions/ZohoCategoryTemplate";

export default function FinancePage() {
  const stats = [
    { label: "Close Speed", value: "50% faster", icon: Clock },
    { label: "Tax Compliance", value: "100%", icon: ShieldCheck },
    { label: "Audit Readiness", value: "99.9%", icon: BarChart3 },
    { label: "Operational ROI", value: "40%+", icon: Zap },
  ];

  const solutions = [
    {
      title: "Zoho Books",
      description: "Intelligent accounting for growing businesses. Manage invoicing, GST compliance, and bank reconciliation in a single platform that balances themselves.",
      link: "/zoho/solutions/finance/zoho-books",
      image: "/images/lap/lap2.webp",
      icon: DollarSign,
      highlights: [
        "Automated Invoicing",
        "GST Compliance Engine",
        "Real-time Bank Feeds",
        "Deep Financial Reports"
      ],
    },
    {
      title: "Zoho Inventory",
      description: "Omnichannel inventory management and order fulfillment. Keep your stock in sync across online stores and marketplaces automatically.",
      link: "/zoho/solutions/finance/zoho-inventory",
      image: "/images/lap/lap2.webp",
      icon: Package,
      highlights: [
        "Multichannel Sync",
        "Warehouse Management",
        "Order Fulfillment Tech",
        "Stock Tracking & Alerts"
      ],
    },
    {
      title: "Zoho Finance Plus",
      description: "A complete back-office suite. Connect accounting, inventory, subscriptions, and expenses to manage your entire operation from one dashboard.",
      link: "/zoho/solutions/finance/zoho-finance-plus",
      image: "/images/lap/lap4.webp",
      icon: Layers,
      highlights: [
        "Unified Financial View",
        "Integrated Order Flow",
        "Subscription Billing",
        "Centralized Expense Mgt"
      ],
    },
  ];

  return (
    <ZohoCategoryTemplate
      title="Finance & Digital Accounting Solutions"
      subtitle="Scalable Financial Systems for Modern Enterprises."
      description="Modernize your financial operations with intelligent accounting and inventory management. Zoho Finance helps you maintain absolute compliance while providing the real-time visibility required for strategic decision making."
      category="Finance"
      heroImage="/images/people/laptopmen.webp"
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Finance", href: "/zoho/solutions/finance" },
      ]}
      solutions={solutions}
      stats={stats}
    />
  );
}


