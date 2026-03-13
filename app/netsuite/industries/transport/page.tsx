"use client";
import IndustryTemplate, {
  IndustryPageData,
} from "../_template/IndustryTemplate";
import { Package, BarChart3, TrendingUp, Globe } from "lucide-react";

const data: IndustryPageData = {
  industry: "Transportation & Logistics",
  heroTitle: "NetSuite for Transportation & Logistics",
  heroDescription:
    "Gain end-to-end visibility across your logistics network. NetSuite connects fleet management, freight billing, warehouse operations, and financials in one cloud platform — helping you deliver on time, every time.",
  heroImage: "/images/industries/logistics-means-transport-together-with-technological-futuristic-holograms (2)_11zon.jpg",
  heroCardTitle: "Logistics & Transport ERP",
  heroCardSub: "Fleet · Freight · Warehouse · Financials",
  heroTopCardTitle: "Trusted Across Logistics Sectors",
  heroTopCardSub: "3PL · Freight · Last-Mile · Courier",
  introImage: "/images/lap/lap5.webp",
  introTitle: "Real-Time Visibility Across Every Mile",
  introDescription:
    "Transportation and logistics companies deal with razor-thin margins, complex customer billing, driver management, fleet costs, and compliance requirements. Most rely on disconnected TMS, fleet, and accounting systems that create costly blind spots.",
  introDescription2:
    "NetSuite brings your financial management, customer billing, route costing, and operational reporting into one unified cloud platform — giving leadership and operations teams the real-time data they need to run a profitable logistics business.",
  stats: [
    { icon: Package, value: 250, suffix: "+", label: "Logistics Companies" },
    {
      icon: BarChart3,
      value: 30,
      suffix: "%",
      label: "Reduction in Billing Errors",
    },
    { icon: TrendingUp, value: 95, suffix: "%", label: "On-Time Billing" },
    { icon: Globe, value: 15, suffix: "+", label: "Years of Logistics ERP" },
  ],
  benefits: [
    {
      title: "Freight & Shipment Billing",
      description:
        "Automate complex freight billing with rate tables, surcharges, fuel adjustments, and accessorial charges — by lane, customer, or contract.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Fleet Cost Management",
      description:
        "Track vehicle expenses, fuel consumption, maintenance schedules, and depreciation per vehicle — with real-time cost-per-mile reporting.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Customer Contract & Rate Management",
      description:
        "Manage customer-specific freight rates, contract terms, and volume commitments. Auto-apply applicable rates at order entry to eliminate billing disputes.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Financial Management & Job Costing",
      description:
        "Accurate gross margin by shipment, lane, and customer. Automated AP for carrier invoices, multi-entity consolidation, and real-time financial dashboards.",
      image: "/images/people/global.webp",
    },
  ],
  challenges: [
    {
      title: "Complex Freight Billing Spreadsheets",
      description:
        "NetSuite automates freight billing with configurable rate tables, surcharge rules, and customer-specific contracts — eliminating manual calculations and billing disputes.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "No Real-Time Shipment Profitability",
      description:
        "NetSuite's job costing gives real-time margin per shipment, lane, or customer — enabling operations and finance teams to make proactive decisions before the month ends.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Manual Subcontractor Invoice Reconciliation",
      description:
        "NetSuite automates the 3-way match between carrier invoices, shipment records, and contracted rates — highlighting discrepancies for fast resolution.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Fleet Costs Disconnected from Job Costing",
      description:
        "NetSuite's asset management module tracks vehicle maintenance, fuel, and depreciation per asset — automatically allocated to job costing for true cost visibility.",
      image: "/images/people/fourteam.webp",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,00,000",
      description: "For small freight or courier companies up to 20 users.",
      features: [
        "Core ERP (Financials, AR/AP)",
        "Basic Shipment & Job Tracking",
        "Freight Billing",
        "Driver & Fleet Records",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,20,000",
      description: "Full logistics ERP for growing operators.",
      features: [
        "Advanced Freight Billing",
        "Fleet Cost & Maintenance",
        "Subcontractor/Carrier Management",
        "Job Cost & Margin Reporting",
        "Customer Rate Contract Management",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large 3PL, freight, or multi-depot operations.",
      features: [
        "NetSuite OneWorld",
        "TMS Integration",
        "Advanced WMS",
        "Custom Rate Engines",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question:
        "Does NetSuite integrate with Transport Management Systems (TMS)?",
      answer:
        "Yes. NetSuite integrates with leading TMS platforms via REST API and certified SuiteApps. AGSuite can build bi-directional integrations to sync jobs, routes, shipments, and costs between your TMS and NetSuite financials.",
    },
    {
      question:
        "Can NetSuite handle multiple freight rate structures for different customers?",
      answer:
        "Yes. NetSuite supports unlimited customer-specific rate tables, including base rates, lane-specific rates, dimensional weight rules, fuel surcharge tables, and accessorial charge schedules — applied automatically at order entry.",
    },
    {
      question:
        "Does NetSuite track vehicle maintenance and inspection schedules?",
      answer:
        "Yes. NetSuite's Fixed Asset Management module tracks vehicle purchase, depreciation, maintenance history, and upcoming service schedules — with configurable alerts for licence and inspection renewal dates.",
    },
    {
      question:
        "How does NetSuite handle cross-border freight and customs documentation?",
      answer:
        "NetSuite supports multi-currency transactions, customs valuation, and basic trade document generation. For complex customs compliance, it integrates with dedicated trade compliance platforms via API.",
    },
    {
      question: "Can NetSuite help us manage our 3PL client billing?",
      answer:
        "Yes. NetSuite supports complex 3PL client billing with configurable billing models (per pallet, per order, per square foot, per pick), automated monthly invoicing, and client-facing billing reports.",
    },
  ],
  relatedIndustries: [
    { label: "Manufacturing", href: "/netsuite/industries/manufacturing" },
    { label: "Wholesale Distribution", href: "/netsuite/industries/wholesale" },
    { label: "Retail & E-Commerce", href: "/netsuite/industries/retail" },
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-services",
    },
  ],
};

export default function TransportPage() {
  return <IndustryTemplate data={data} />;
}
