"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { ShoppingCart, BarChart3, Package, Globe, TrendingUp } from "lucide-react";





const data: IndustryPageData = {
  industry: "Retail & E-Commerce",
  heroTitle: "NetSuite for Retail & E-Commerce",
  heroDescription:
    "Power your omnichannel retail operation from a single cloud platform. NetSuite connects your online store, physical locations, inventory, and financials — giving customers a seamless experience everywhere they shop.",
  heroImage: "/images/hero/industry_retail_hero.png",
  heroCardTitle: "Unified Omnichannel Retail ERP",
  heroCardSub: "POS · E-Commerce · Inventory · Financials",
  heroTopCardTitle: "Trusted by 500+ Retailers",
  heroTopCardSub: "B2B · B2C · Omnichannel · DTC",
  introImage: "/images/lap/lap6_11zon.webp",
  introTitle: "Unified Commerce for B2B & B2C Retail",
  introDescription:
    "Retail businesses operate across multiple channels — their website, marketplaces, physical stores, and wholesale. Managing these on disconnected systems leads to inventory errors, poor customer experiences, and missed revenue. NetSuite SuiteCommerce unifies them all.",
  introDescription2:
    "With real-time inventory visibility, a built-in POS, native e-commerce storefront, and integrated financials, NetSuite gives retailers the single source of truth they need to grow profitably across every channel.",
  stats: [
    
    {
      icon: ShoppingCart,
      value: 500,
      suffix: "+",
      label: "Retailers on NetSuite",
    },
    { icon: BarChart3, value: 30, suffix: "%", label: "Avg Revenue Growth" },
    { icon: Package, value: 99, suffix: "%", label: "Inventory Accuracy" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  
  ],
  benefits: [
    {
      title: "Omnichannel Unified Experience",
      description:
        "Bridge the gap between physical retail (POS) and digital e-commerce storefronts, presenting a single customer profile and real-time inventory.",
      image: "/images/netsuiteimages/ns_endtoend_management.png",
      points: [
        "Unified POS & e-commerce database",
        "Consistent pricing & promotions online/in-store",
        "360° customer purchase history view",
      ],
    },
    {
      title: "Real-Time Inventory Synchronization",
      description:
        "Avoid overselling and stockouts with automated replenishment rules and cross-channel inventory visibility across all locations.",
      image: "/images/netsuiteimages/ns_realtime_visibility.png",
      points: [
        "Multi-location inventory tracking",
        "Automatic safety stock alerts",
        "Accurate online product availability status",
      ],
    },
    {
      title: "Automated Fulfillment & Order Routes",
      description:
        "Optimize shipping costs and speeds using advanced order routing (ship-from-store, buy-online-pickup-in-store, drop-ship).",
      image: "/images/netsuiteimages/Servicesimg/process_automation.png",
      points: [
        "Intelligent routing rules",
        "BOPIS & click-and-collect support",
        "Seamless 3PL & carrier integrations",
      ],
    },
    {
      title: "Data-Driven Merchandising & Analytics",
      description:
        "Leverage robust BI tools to uncover SKU profitability, category performance, and customer lifetime value.",
      image: "/images/netsuiteimages/Servicesimg/data_analytics.png",
      points: [
        "Real-time channel profitability dashboards",
        "Slow-moving SKU identification alerts",
        "Subscriber & loyalty lifecycle metrics",
      ],
    },
    {
      title: "Elastic Peak Season Scalability",
      description:
        "Scale transaction processing elastically to handle high holiday traffic (e.g. Black Friday Cyber Monday) without system lag.",
      image: "/images/netsuiteimages/ns_rapid_scaling.png",
      points: [
        "Cloud-native SaaS infrastructure",
        "High-volume transaction processing",
        "Zero local server maintenance costs",
      ],
    },
  ],
  features: [
    {
      title: "SuiteCommerce & Web Storefronts",
      description: "Build responsive, SEO-friendly B2C and B2B shopping portals native to NetSuite, eliminating sync middleware.",
      image: "/images/netsuiteimages/ns_digital_transformation.png",
    },
    {
      title: "Smart Inventory & Replenishment",
      description: "Gain global visibility into stock across warehouses, retail locations, and transit paths with automated purchasing triggers.",
      image: "/images/netsuiteimages/scalability_and_adaptability.png",
    },
    {
      title: "Omnichannel Order Management (OMS)",
      description: "Automatically orchestrate order workflows from cart to delivery, routing orders dynamically to the optimal warehouse.",
      image: "/images/netsuiteimages/ns_automation_efficiency.png",
    },
    {
      title: "Marketplace & CRM Integration",
      description: "Connect natively with major channels like Shopify, Amazon, and eBay while tracking marketing campaigns and loyalty.",
      image: "/images/netsuiteimages/ns_integration_services.png",
    },
    {
      title: "Automated Retail Accounting & Audit",
      description: "Streamline daily sales audits, automate payment gateway reconciliation, and close books quickly with automated transaction flows.",
      image: "/images/netsuiteimages/data_accuracy_compliance_risk.png",
    },
  ],
  challenges: [
    {
      title: "Inventory Discrepancies Across Channels",
      description:
        "NetSuite maintains a single real-time inventory record across all channels and locations, eliminating discrepancies and enabling accurate promise dates.",
      image: "/images/challenges/inventory-blind-spots.png",
    },
    {
      title: "Disconnected E-Commerce & ERP",
      description:
        "SuiteCommerce is natively built on NetSuite — orders placed online instantly appear in the ERP with no sync delays or middleware required.",
      image: "/images/challenges/ecommerce-sync.png",
    },
    {
      title: "No Channel-Level Profitability Visibility",
      description:
        "NetSuite provides real-time margin analysis by channel, product category, SKU, and customer segment — enabling data-driven merchandising decisions.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Inaccurate Stock on Website",
      description:
        "SuiteCommerce displays real-time stock levels from NetSuite, eliminating out-of-stock surprises and improving conversion rates significantly.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Slow Order Processing",
      description:
        "Manual data entry between your webstore and ERP causes delays. NetSuite automates the entire order-to-fulfillment cycle for faster delivery.",
      image: "/images/challenges/fulfillment-delay.png",
    },
    {
      title: "Inconsistent Customer Data",
      description:
        "Siloed customer data prevents a unified shopping experience. NetSuite unifies all customer touchpoints across both digital and physical stores.",
      image: "/images/challenges/resource-visibility.png",
    },
    {
      title: "Manual Reconciliations",
      description:
        "Reconciling sales from multiple channels and payment gateways is slow and error-prone. NetSuite automates financial reconciliation for all transactions.",
      image: "/images/challenges/reconciliation.png",
    },
    {
      title: "Peak Season Stress",
      description:
        "High volumes during BFCM can crash legacy systems. NetSuite's cloud infrastructure scales elastically to handle your heaviest traffic spikes.",
      image: "/images/challenges/peak-season.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,10,000",
      description: "For growing DTC brands and single-location retailers.",
      features: [
        "Core ERP & Inventory",
        "Basic E-Commerce Integration",
        "Order Management",
        "Standard Financial Reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,30,000",
      description: "Full omnichannel for multi-location retailers.",
      features: [
        "SuiteCommerce Webstore",
        "Multi-location Inventory",
        "POS Integration",
        "Amazon / Shopify Connectors",
        "Loyalty & Promotions",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For global, multi-brand retail operations.",
      features: [
        "NetSuite OneWorld",
        "Advanced Order Management",
        "Custom Marketplace Connectors",
        "Demand Planning & Replenishment",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can NetSuite integrate with Shopify, Amazon, and Magento?",
      answer:
        "Yes. AGSuite offers certified NetSuite connectors for Shopify, Amazon (FBA & FBM), and Magento (Adobe Commerce). These bi-directional connectors sync orders, inventory, customers, shipments, and settlements in real time.",
    },
    {
      question: "Does NetSuite offer a built-in e-commerce storefront?",
      answer:
        "Yes. NetSuite SuiteCommerce is a native e-commerce platform built directly on top of your NetSuite data. It supports B2C and B2B shopping experiences, responsive design, and real-time inventory.",
    },
    {
      question: "How does NetSuite handle returns and reverse logistics?",
      answer:
        "NetSuite supports authorised return management (RMA), return receipts, and credit memo generation. Returns automatically update inventory and trigger restocking or write-off workflows.",
    },
    {
      question: "Can NetSuite handle high order volumes during peak seasons?",
      answer:
        "Yes. NetSuite is a cloud-native SaaS platform hosted on Oracle Cloud Infrastructure, built to scale elastically for peak campaigns and flash sales without additional provisioning.",
    },
    {
      question:
        "Does NetSuite support drop-shipping and third-party fulfilment (3PL)?",
      answer:
        "Yes. NetSuite supports drop-ship purchase orders directly from sales orders, and integrates with 3PL providers via APIs for automated shipment notifications, tracking updates, and inventory reconciliation.",
    },
  ],
  relatedIndustries: [
    { label: "Wholesale Distribution", href: "/netsuite/industries/wholesale-distribution" },
    { label: "Manufacturing", href: "/netsuite/industries/manufacturing" },
    { label: "Software & Technology", href: "/netsuite/industries/software-and-technology" },
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-and-professional-services",
    },
  ],
};

export default function RetailPage() {
  return <IndustryTemplate data={data} />;
}





