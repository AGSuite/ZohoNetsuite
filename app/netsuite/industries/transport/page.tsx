"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { Package, BarChart3, TrendingUp, Globe } from "lucide-react";





const data: IndustryPageData = {
  industry: "Transportation & Logistics",
  heroTitle: "NetSuite for Transportation & Logistics",
  heroDescription:
    "Gain end-to-end visibility across your logistics network. NetSuite connects fleet management, freight billing, warehouse operations, and financials in one cloud platform — helping you deliver on time, every time.",
  heroImage: "/images/hero/industry_transport_hero.png",
  heroCardTitle: "Logistics & Transport ERP",
  heroCardSub: "Fleet · Freight · Warehouse · Financials",
  heroTopCardTitle: "Trusted Across Logistics Sectors",
  heroTopCardSub: "3PL · Freight · Last-Mile · Courier",
  introImage: "/images/netsuiteimages/ns_realtime_visibility.png",
  introTitle: "Real-Time Visibility Across Every Mile",
  introDescription:
    "Transportation and logistics industries deal with razor-thin margins, complex customer billing, driver management, fleet costs, and compliance requirements. Most rely on disconnected TMS, fleet, and accounting systems that create costly blind spots.",
  introDescription2:
    "NetSuite brings your financial management, customer billing, route costing, and operational reporting into one unified cloud platform — giving leadership and operations teams the real-time data they need to run a profitable logistics business.",
  stats: [
    { icon: Package, value: 250, suffix: "+", label: "Logistics Industries" },
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
      title: "Automated Freight Billing & Invoicing",
      description:
        "Streamline complex billing processes with fuel adjustments, accessorial surcharges, and lane rates, and auto-apply customer contract rules to resolve billing disputes.",
      image: "/images/netsuiteimages/ns_automation_efficiency.png",
      points: [
        "Automate multi-lane and contract-specific billing rules.",
        "Include dynamic fuel index surcharges and extra stop charges.",
        "Trigger immediate billing via mobile proof of delivery (POD)."
      ]
    },
    {
      title: "Accurate Shipment & Lane Profitability",
      description:
        "Calculate gross margins per shipment, driver, route, or customer in real-time, giving operations teams the insights needed to maximize logistics efficiency.",
      image: "/images/netsuiteimages/data_accuracy_compliance_risk.png",
      points: [
        "Analyze real-time gross margin by freight lane.",
        "Allocate fleet overhead and driver salaries directly to trips.",
        "Identify and prune low-performing or unprofitable routes."
      ]
    },
    {
      title: "Optimized Fleet Cost & Maintenance",
      description:
        "Track vehicle maintenance history, asset depreciation, and fuel card transactions per vehicle to control fleet expenses and reduce breakdowns.",
      image: "/images/netsuiteimages/ns_endtoend_management.png",
      points: [
        "Schedule preventive maintenance based on actual vehicle mileage.",
        "Audit fuel card usage against odometer readings to reduce leakage.",
        "Automate fixed asset depreciation for logistics fleets."
      ]
    },
    {
      title: "Third-Party Carrier & 3PL Integration",
      description:
        "Manage subcontracted shipments, spot-quotes, and carrier rates while automating carrier invoice reconciliation (3-way match) within NetSuite.",
      image: "/images/netsuiteimages/ns_low_code_dev.png",
      points: [
        "Unify carrier spot-quote bidding and contract rates.",
        "Automate carrier AP invoice matching against dispatch records.",
        "Monitor subcontractor SLA compliance and delivery performance."
      ]
    },
    {
      title: "Unified TMS and ERP Environment",
      description:
        "Eliminate data silos by integrating your Transport Management System (TMS) directly with NetSuite ERP for consolidated financials.",
      image: "/images/netsuiteimages/ns_integration_services.png",
      points: [
        "Sync shipments, routes, and billing from TMS to NetSuite.",
        "Consolidate financials across multiple entities or logistics hubs.",
        "Establish single-source visibility from booking to bank deposit."
      ]
    },
  ],
  features: [
    {
      title: "Fleet & Asset Management",
      description: "Manage tractor and trailer records, driver profiles, safety logs, and preventative maintenance schedules natively connected to financials.",
      image: "/images/netsuiteimages/ns_realtime_visibility.png",
    },
    {
      title: "Freight Pricing & Rate Engine",
      description: "Define multi-dimensional rate matrices by lane, customer contract, equipment type, zone-to-zone tables, and accessory fees.",
      image: "/images/netsuiteimages/scalability_and_adaptability.png",
    },
    {
      title: "Dispatch & Route Optimization",
      description: "Integrate dispatch schedules, load planning, and optimized routes with NetSuite to improve tractor utility and decrease empty miles.",
      image: "/images/netsuiteimages/ns_rapid_scaling.png",
    },
    {
      title: "Subcontractor & Carrier Management",
      description: "Coordinate with external carriers, manage spot-market bids, generate manifests, and track compliance documentation easily.",
      image: "/images/netsuiteimages/ns_managed_services.png",
    },
    {
      title: "Real-time Shipment & Cargo Tracking",
      description: "Track shipment milestones (in-transit, out for delivery, arrived) with direct integrations to GPS tracking, TMS, and mobile POD portals.",
      image: "/images/netsuiteimages/ns_training_services.png",
    },
  ],
  challenges: [
    {
      title: "Complex Freight Billing Spreadsheets",
      description:
        "NetSuite automates freight billing with configurable rate tables, surcharge rules, and customer-specific contracts — eliminating manual calculations and billing disputes.",
      image: "/images/challenges/manual-billing.png",
    },
    {
      title: "No Real-Time Shipment Profitability",
      description:
        "NetSuite's job costing gives real-time margin per shipment, lane, or customer — enabling operations and finance teams to make proactive decisions before the month ends.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Manual Subcontractor Invoice Reconciliation",
      description:
        "NetSuite automates the 3-way match between carrier invoices, shipment records, and contracted rates — highlighting discrepancies for fast resolution.",
      image: "/images/challenges/reconciliation.png",
    },
    {
      title: "Fleet Costs Disconnected from Job Costing",
      description:
        "NetSuite's asset management module tracks vehicle maintenance, fuel, and depreciation per asset — automatically allocated to job costing for true cost visibility.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Inefficient Fuel Management",
      description:
        "Lack of visibility into fuel consumption leads to waste and high costs. NetSuite unifies fuel transaction data with vehicle performance metrics.",
      image: "/images/challenges/revenue-leakage.png",
    },
    {
      title: "Disconnected Driver Data",
      description:
        "Siloed driver records make it hard to manage performance and compliance. NetSuite consolidates driver data with operational and financial records.",
      image: "/images/challenges/resource-visibility.png",
    },
    {
      title: "Manual Proof of Delivery",
      description:
        "Slow POD processing delays client billing. NetSuite's mobile tools enable instant POD capture and automated billing triggers.",
      image: "/images/challenges/fulfillment-delay.png",
    },
    {
      title: "Lack of Real-Time Tracking",
      description:
        "Fragmeted visibility into carrier location impacts customer service. NetSuite integrates with GPS and TMS for real-time shipment visibility.",
      image: "/images/challenges/supply-chain.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,00,000",
      description: "For small freight or courier industries up to 20 users.",
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





