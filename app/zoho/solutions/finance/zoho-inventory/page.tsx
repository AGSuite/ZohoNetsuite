"use client";

import React from "react";
import { 
  Package, 
  Truck, 
  RefreshCcw, 
  TrendingUp,
  Target,
  BarChart3,
  Calendar,
  ShieldCheck,
  Globe2,
  CheckCircle,
  Clock,
  ShoppingCart
} from "lucide-react";
import ZohoSolutionTemplate from "@/app/zoho/components/solutions/ZohoSolutionTemplate";

export default function ZohoInventoryPage() {
  const stats = [
    { label: "Inventory Accuracy", value: 98, suffix: "%", icon: Target },
    { label: "Order Fulfilment Speed", value: 40, suffix: "% faster", icon: Package },
    { label: "Shipping Cost Savings", value: 20, suffix: "%", icon: TrendingUp },
    { label: "Out-of-Stock Risk", value: 50, suffix: "% lower", icon: ShieldCheck },
  ];

  const modules = [
    {
      title: "Stock Management",
      description: "Get real-time updates on stock levels across all your warehouses and selling channels in one place.",
      image: "/images/lap/lap1.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Order Fulfilment",
      description: "Process orders fast with automated packing and shipping labels from 40+ shipping carriers.",
      image: "/images/people/laptopgirl.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
    {
      title: "Warehouse Management",
      description: "Manage multiple warehouses, track transfers, and pick items correctly with barcode scanning.",
      image: "/images/lap/lap3.webp",
      color: "#4a3a8a",
      rgb: "65,45,130",
    },
    {
      title: "Batch & Serial Tracking",
      description: "Trace every item with absolute precision using batch and serial number tracking across the lifecycle.",
      image: "/images/people/laptopmen.webp",
      color: "#1a6080",
      rgb: "20,88,115",
    },
    {
      title: "Multi-Channel Selling",
      description: "Sync inventory and orders across Amazon, eBay, Etsy, and your own online store automatically.",
      image: "/images/lap/lap2.webp",
      color: "#6a2575",
      rgb: "95,30,105",
    },
    {
      title: "Shipping Integrations",
      description: "Compare carrier rates, print labels, and track shipments in real-time from your Zoho dashboard.",
      image: "/images/people/laptopmen2.webp",
      color: "#154e8a",
      rgb: "18,68,130",
    },
    {
      title: "Reporting & Insights",
      description: "Identify best-selling items, evaluate inventory turnover, and make informed purchasing decisions.",
      image: "/images/lap/lap4.webp",
      color: "#1a6545",
      rgb: "20,95,60",
    },
    {
      title: "Purchasing & Bills",
      description: "Manage vendor lists, create purchase orders, and track your accounts payable with finance integration.",
      image: "/images/lap/lap5.webp",
      color: "#8a2a3a",
      rgb: "130,35,48",
    },
    {
      title: "Mobile Inventory App",
      description: "Manage orders and stock from your phone, with integrated barcode scanning for faster operations.",
      image: "/images/people/laptopgirl1.webp",
      color: "#0f4e8a",
      rgb: "12,68,130",
    },
    {
      title: "Returns Management",
      description: "Handle customer returns efficiently with RMA workflows and automated stock adjustments.",
      image: "/images/lap/lap2.webp",
      color: "#523a8a",
      rgb: "75,48,130",
    },
    {
      title: "Automation Rules",
      description: "Set up smart workflows to automate repetitive tasks like low-stock alerts and order status updates.",
      image: "/images/people/threeteam.webp",
      color: "#1a7a55",
      rgb: "18,108,72",
    },
    {
      title: "Invoice & Payment Sync",
      description: "Keep your inventory and accounting in lockstep with deep integration into Zoho Books.",
      image: "/images/lap/lap2.webp",
      color: "#a05a18",
      rgb: "145,75,18",
    },
  ];

  const benefits = [
    {
      title: "Unified Inventory Control",
      description: "Zoho Inventory provides a single source of truth for your stock levels across every channel and warehouse.",
      image: "/images/people/fourteam.webp",
      points: [
        "Real-time stock level synchronization",
        "Multi-warehouse visibility and control",
        "Eliminate overselling and stockouts",
        "Unified view of orders and fulfillment"
      ],
    },
    {
      title: "Optimized Order Management",
      description: "Fulfill orders faster and more accurately with a streamlined workflow from order intake to doorstep delivery.",
      image: "/images/lap/lap2.webp",
      points: [
        "Automated shipping and tracking labels",
        "Comparison of 40+ carrier rates",
        "Integrated packing and picklists",
        "Seamless cross-channel order sync"
      ],
    },
    {
      title: "Data-Driven Purchase Planning",
      description: "Make informed buying decisions with powerful reporting that identifies trends and stock turnover.",
      image: "/images/people/laptopmen2.webp",
      points: [
        "Automated low-stock reorder points",
        "Vendor performance and history tracking",
        "Detailed inventory turnover reports",
        "Analyze best-selling products easily"
      ],
    },
    {
      title: "Frictionless Operations",
      description: "Connect your inventory with your sales, commerce, and accounting tools for absolute operational efficiency.",
      image: "/images/lap/lap1.webp",
      points: [
        "Native integration with Zoho Books & CRM",
        "Connect with Shopify, Amazon, and eBay",
        "Manage returns and RMAs effortlessly",
        "Barcode and serial tracking built-in"
      ],
    },
  ];

  return (
    <ZohoSolutionTemplate
      title="Zoho Inventory — Smart Multi-Channel Inventory Management"
      subtitle="The Command Center for Your Stock."
      description="Zoho Inventory is a cloud-based inventory management software that helps you manage orders, track stock across channels, and fulfill shipments — all in real-time."
      breadcrumb={[
        { label: "Home", href: "/zoho" },
        { label: "Solutions", href: "/zoho/solutions" },
        { label: "Finance", href: "/zoho/solutions/finance" },
        { label: "Zoho Inventory", href: "/zoho/solutions/finance/zoho-inventory" },
      ]}
      stats={stats}
      modules={modules}
      benefits={benefits}
      heroImage="/images/lap/lap3.webp"
      heroCard1={{
        title: "Multi-Channel Sync",
        subtitle: "Sync orders across Amazon, eBay, and Shopify.",
        icon: ShoppingCart
      }}
      heroCard2={{
        title: "98% Inventory Accuracy",
        subtitle: "Eliminate overselling and stockouts.",
        icon: Target
      }}
      pricingInfo={{
        description: "Flexible plans built for growing businesses. Start with our functional free plan and scale as you grow.",
        plans: [
          "Standard: $59 /month",
          "Professional: $129 /month",
          "Premium: $249 /month",
          "Free: Up to 50 orders/month",
        ],
        ctaText: "Start My Free Trial",
      }}
    />
  );
}
