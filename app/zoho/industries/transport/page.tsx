"use client";

import React from "react";





import ZohoIndustryTemplate, {
  IndustryPageData,
} from "@/app/zoho/components/industries/ZohoIndustryTemplate";
import { Truck, BarChart3, Users, TrendingUp } from "lucide-react";




const data: IndustryPageData = {
  industry: "Transport & Logistics",
  heroTitle: "Optimize Your Fleet Operations with Zoho",
  heroDescription:
    "Streamline load management, automate freight billing, and gain real-time visibility into fleet costs and shipment profitability with the unified Zoho cloud suite.",
  heroImage: "/images/industries/logistics-means-transport-together-with-technological-futuristic-holograms (2)_11zon.jpg",
  heroCardTitle: "Logistics Ops Control",
  heroCardSub: "Fleet · Loads · Billing · Analytics",
  heroTopCardTitle: "Trusted by 200+ Logistics Firms",
  heroTopCardSub: "Fleet-First · Scalable · Global",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built Zoho Tools for Transport & Logistics",
  introDescription:
    "Logistics companies face constant pressure — managing fleet costs, tracking load profitability, and ensuring accurate freight billing. Zoho's logistics ecosystem provides a single, unified system that connects your fleet data with your financial performance.",
  introDescription2:
    "With AGSuite's logistics implementation, you get real-time visibility into load margins and fleet utilization. We help transport firms build scalable, efficient business structures across global routes.",
  stats: [
    { icon: Truck, value: 200, suffix: "+", label: "Logistics Firms Served" },
    { icon: BarChart3, value: 30, suffix: "%", label: "Avg Cost Reduction" },
    { icon: Users, value: 92, suffix: "%", label: "Fleet Utilization" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Load & Dispatch Management",
      description:
        "Manage load assignments, track driver statuses, and visualize route efficiency using Zoho Projects and Zoho Creator.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Fleet Cost Tracking",
      description:
        "Ensure your fleet is running efficiently with real-time tracking of fuel, maintenance, and driver costs within Zoho Books.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Freight Billing Automation",
      description:
        "Capture every load detail and billable expense on-the-go with Zoho's native mobile apps, ensuring zero billing delays.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Route & Lane Profitability",
      description:
        "Instantly see which routes and lanes are driving the most profit with Zoho Analytics' custom logistics dashboards.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Compliance & Safety Tracking",
      description:
        "Automate tracking of vehicle inspections, driver safety records, and regulatory compliance documents within Zoho Creator.",
      image: "/images/lap/lap8_11zon.webp",
    },
  ],
  features: [
    {
      title: "Order and Billing Management",
      description: "Automate initial and recurring transactions, and streamline billing across multiple channels.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Financial Management",
      description: "Automate bookkeeping and gain real-time visibility into your cash flow with Zoho Books.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Inventory and Warehouse Management",
      description: "Manage stock across multiple locations and automate reordering with Zoho Inventory.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Customer Relationship Management (CRM)",
      description: "Centralize your sales and customer data to improve relationships and sales performance with Zoho CRM.",
      image: "/images/people/laptopgirl.webp",
    },
    {
      title: "Order Management",
      description: "Automate the entire order-to-fulfillment cycle for faster delivery and improved customer satisfaction.",
      image: "/images/lap/lap6_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Manual Freight Invoicing",
      solution:
        "Zoho Books automates your freight invoicing based on load completion or distance traveled, ensuring faster payments and cash flow.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "No Real-time Load Profitability",
      solution:
        "Zoho unifies your load data and expense records, providing a real-time view of profitability for every single shipment.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Disconnected Carrier Tracking",
      solution:
        "Zoho One unifies your fleet operations and financial data, ensuring that your tracking is always in sync with your billing.",
      image: "/images/challenges/supply-chain.png",
    },
    {
      title: "High Operational Cost Leaks",
      solution:
        "Zoho's advanced cost tracking modules help you identify and eliminate leaks in fuel, maintenance, and driver expenses.",
      image: "/images/challenges/revenue-leakage.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹60,000",
      description: "For small or local transport firms.",
      features: [
        "Zoho Books (Fleet Accounting)",
        "Zoho Projects (Load Tracking)",
        "Single-user Expense Management",
        "Standard Logistics Reports",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹1,20,000",
      description: "Full suite for regional logistics operators.",
      features: [
        "Adv. Freight Billing",
        "Fleet Maintenance Tracking",
        "Advanced Analytics & Profit KPIs",
        "Custom Workflow Automation",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For national or global logistics groups.",
      features: [
        "Zoho One (Global Logistics)",
        "Custom Fleet Management (Creator)",
        "High-Volume API Access",
        "Dedicated Success Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question: "Can Zoho track fleet maintenance costs?",
      answer: "Yes. Through Zoho Books and custom Zoho Creator modules, we build comprehensive fleet maintenance tracking systems that link directly to your financials.",
    },
    {
      question: "Does Zoho support multi-currency for global logistics?",
      answer: "Yes. Zoho Books supports 160+ currencies, making it ideal for transport firms operating across international borders.",
    },
    {
      question: "Can we integrate Zoho with our GPS tracking systems?",
      answer: "Absolutely. Zoho's open APIs allow you to connect your GPS and TMS systems directly to Zoho CRM and Projects for real-time shipment visibility.",
    },
  ],
  relatedIndustries: [
    { label: "Wholesale Distribution", href: "/zoho/industries/wholesale" },
    { label: "Manufacturing", href: "/zoho/industries/manufacturing" },
    { label: "IT Services", href: "/zoho/industries/it-services" },
    { label: "Retail & E-Commerce", href: "/zoho/industries/retail" },
  ],
};

export default function ZohoTransportPage() {
  return <ZohoIndustryTemplate data={data} />;
}




