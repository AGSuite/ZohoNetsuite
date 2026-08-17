"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/(industries)/_template/IndustryTemplate";
import { Package, BarChart3, TrendingUp, Globe } from "lucide-react";





const data: IndustryPageData = {
  industry: "Wholesale Distribution",
  heroTitle: "Expand Your Distribution Enterprise Without Limits",
  heroDescription:
    "Eliminate supply chain bottlenecks and accelerate order fulfillment with the world’s #1 cloud ERP tailored for wholesale distributors.",
  heroImage: "/images/hero/industry_wholesale_hero.png",
  heroCardTitle: "Unified Fulfillment ERP Platform",
  heroCardSub: "Purchasing · Inventory · Warehouse · Fulfilment",
  heroTopCardTitle: "Trusted by 400+ Distributors",
  heroTopCardSub: "Wholesale · B2B · Multi-location · 3PL",
  introImage: "/images/benefits/benefit_sc_unified_commerce.png",
  introTitle: "Intelligent ERP for Modern Wholesale Distribution",
  introDescription:
    "In today's competitive distribution landscape, success depends on having complete visibility across inventory, purchasing, warehousing, and customer fulfillment. Disconnected systems and manual processes can lead to inventory inaccuracies, pricing inconsistencies, operational delays, and reduced profitability.",
  introDescription2:
    "Oracle NetSuite unifies your entire distribution ecosystem within a single cloud platform, connecting procurement, inventory management, warehouse operations, order fulfillment, and financials in real time. With AI-powered insights, automated replenishment, demand forecasting, and end-to-end inventory visibility, distributors can optimize stock levels, improve order accuracy, reduce costs, and make faster, data-driven decisions.",
  stats: [
    { icon: Globe, value: 400, suffix: "+", label: "Distributors Served" },
    { icon: BarChart3, value: 40, suffix: "%", label: "Fulfillment Speedup" },
    { icon: Package, value: 99, suffix: "%", label: "Inventory Accuracy" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Multi-Location Inventory Management",
      description:
        "Real-time inventory visibility across all warehouses and distribution centres. Bin-level location tracking, lot/serial control, and cycle counting built in.",
      image: "/images/benefits/wholesale_multi_location_inventory.png",
    },
    {
      title: "Warehouse Management (WMS)",
      description:
        "NetSuite WMS covers receiving, put-away, pick/pack/ship, and returns — with mobile barcode scanning and directed workflows that boost warehouse productivity.",
      image: "/images/benefits/wholesale_warehouse_management_wms.png",
    },
    {
      title: "Demand Planning & Replenishment",
      description:
        "Data-driven reorder points, safety stock calculations, and min/max replenishment connected to supplier lead times to optimise inventory investment.",
      image: "/images/benefits/wholesale_demand_planning_replenishment.png",
    },
    {
      title: "Customer Pricing & Contracts",
      description:
        "Manage complex customer-specific pricing, volume discounts, contract pricing, rebates, and trade promotions — with margin visibility at every level.",
      image: "/images/benefits/wholesale_customer_pricing_contracts.png",
    },
    {
      title: "Lot & Serial Number Tracking",
      description:
        "Ensure full traceability with automated lot and serial number tracking. Manage expiration dates and handle recalls with precision and speed.",
      image: "/images/benefits/wholesale_lot_serial_tracking.png",
    },
  ],
  features: [
    {
      title: "Financial Management",
      description: "Automate transaction flow and gain real-time access to financial and operational performance metrics.",
      image: "/images/benefits/benefit_financial_visibility.png",
    },
    {
      title: "Inventory Management",
      description: "Optimize inventory levels, minimize stockouts, and boost profitability with company-wide inventory visibility.",
      image: "/images/benefits/benefit_gbm_processes.png",
    },
    {
      title: "Customer Relationship Management",
      description: "Track and analyze multi-channel marketing campaigns, automate case management, and provide real-time customer data.",
      image: "/images/benefits/benefit_crm_customer_intelligence.png",
    },
    {
      title: "E-commerce Integration",
      description: "Unify e-commerce platforms with backend systems for a seamless online shopping experience.",
      image: "/images/benefits/benefit_sc_b2b_b2c.png",
    },
    {
      title: "Order Management",
      description: "Automate the entire order-to-fulfillment cycle for faster delivery and improved customer satisfaction.",
      image: "/images/benefits/benefit_crm_sales_automation.png",
    },
  ],
  challenges: [
    {
      title: "Inventory Visibility Gaps",
      description:
        "NetSuite provides real-time, multi-location inventory with automated replenishment alerts, demand-driven reorder points, and forward-looking stock projections.",
      image: "/images/challenges/inventory-blind-spots.png",
    },
    {
      title: "Complex Customer Pricing in Spreadsheets",
      description:
        "NetSuite's Advanced Pricing module automates customer-specific pricing, tiered discounts, contract prices, and promotional rules — applied automatically at order entry.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Landed Cost Inaccuracies",
      description:
        "NetSuite's landed cost module allocates duties, freight, and other costs to purchase receipts — giving you accurate product costs and true gross margins.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Slow Order Fulfilment",
      description:
        "NetSuite's automated order management processes customer orders — from entry to pick/pack/ship to invoice — without manual handoffs, reducing fulfilment time by up to 40%.",
      image: "/images/challenges/fulfillment-delay.png",
    },
    {
      title: "Disconnected Purchasing & Sales",
      description:
        "Siloed internal departments lead to stockouts or overordering. NetSuite unifies the entire supply chain from demand to fulfillment.",
      image: "/images/challenges/ecommerce-sync.png",
    },
    {
      title: "Excess Inventory Costs",
      description:
        "Carrying slow-moving stock ties up critical capital. NetSuite's demand planning optimizes stock levels to reduce carrying costs.",
      image: "/images/challenges/revenue-leakage.png",
    },
    {
      title: "Paper-Based Operations",
      description:
        "Manual warehouse processing is slow and error-prone. NetSuite WMS digitizes all warehouse tasks via mobile scanning.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "Fragmented Supply Chain Data",
      description:
        "Lack of real-time insights into supplier performance impacts reliability. NetSuite provides vendor scorecards and global visibility.",
      image: "/images/challenges/supply-chain.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,05,000",
      description: "For single-warehouse distributors up to 20 users.",
      features: [
        "Core ERP & Inventory",
        "Purchase Order Management",
        "Customer Order Management",
        "Basic Financial Reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,40,000",
      description: "Full distribution suite for multi-location operations.",
      features: [
        "Multi-location Inventory & WMS",
        "Demand Planning & Replenishment",
        "Advanced Pricing & Contracts",
        "Landed Cost Management",
        "Vendor Portal & EDI",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Large-scale or global distribution networks.",
      features: [
        "NetSuite OneWorld (Multi-subsidiary)",
        "Advanced WMS",
        "3PL Integration",
        "Custom Fulfilment Workflows",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question:
        "Does NetSuite have a built-in Warehouse Management System (WMS)?",
      answer:
        "Yes. NetSuite WMS provides directed put-away and pick/pack/ship workflows with mobile barcode scanning. It supports multi-bin locations, multiple fulfilment strategies (FIFO, FEFO, zone pick), and wave/batch picking for high-volume operations.",
    },
    {
      question:
        "Can NetSuite handle EDI transactions with large retail customers?",
      answer:
        "Yes. NetSuite integrates with leading EDI providers like SPS Commerce, TrueCommerce, and Cleo to automate 850 (PO), 856 (ASN), 810 (Invoice), and other EDI document exchange with retail and wholesale trading partners.",
    },
    {
      question:
        "How does NetSuite manage customer-specific pricing and contracts?",
      answer:
        "NetSuite's Advanced Pricing engine supports customer-specific price levels, volume discount schedules, contract pricing, promotional pricing windows, and quantity breaks — all applied automatically at sales order entry.",
    },
    {
      question:
        "Does NetSuite support drop-shipping from vendors directly to customers?",
      answer:
        "Yes. NetSuite supports drop-ship orders where purchase orders are automatically created from sales orders and sent to vendors, who ship directly to the customer. Receipts and invoices are processed without the goods touching your warehouse.",
    },
    {
      question: "Can NetSuite handle lot traceability for regulated goods?",
      answer:
        "Yes. NetSuite provides end-to-end lot and serial number tracking from vendor receipt through customer delivery — enabling full forward and backward traceability for compliance with food, pharma, and regulated goods requirements.",
    },
  ],
  relatedIndustries: [
    { label: "Manufacturing", href: "/netsuite/manufacturing" },
    { label: "Retail & E-Commerce", href: "/netsuite/retail-and-e-commerce" },
    {
      label: "Professional Services",
      href: "/netsuite/it-and-professional-services",
    },
    { label: "Software & Technology", href: "/netsuite/software-and-technology" },
  ],
};

export default function WholesalePage() {
  return <IndustryTemplate data={data} />;
}





