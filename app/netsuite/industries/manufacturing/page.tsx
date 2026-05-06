"use client";

import IndustryTemplate, {
  IndustryPageData,
} from "@/app/netsuite/industries/_template/IndustryTemplate";
import { Factory, BarChart3, Package, TrendingUp } from "lucide-react";





const data: IndustryPageData = {
  industry: "Manufacturing",
  heroTitle: "Build the Future of Your Factory Floor with NetSuite",
  heroDescription:
    "Streamline discrete manufacturing, tighten supply chains, and gain real-time visibility with the #1 cloud ERP built for modern manufacturers.",
  heroImage: "/images/industries/manufacture-compressed-1.webp",
  heroCardTitle: "Shop Floor Control",
  heroCardSub: "Production · Inventory · Financials · Supply Chain",
  heroTopCardTitle: "Trusted by 1,000+ Manufacturers",
  heroTopCardSub: "Certified · Cloud-Native · SuiteCloud",
  introImage: "/images/lap/lap2.webp",
  introTitle: "Purpose-Built ERP for Modern Manufacturers",
  introDescription:
    "Manufacturing businesses face relentless pressure — rising costs, supply chain volatility, complex compliance, and the need for real-time data. NetSuite's cloud manufacturing ERP provides a single, unified system that connects every process from production planning to financial close.",
  introDescription2:
    "With AGSuite's certified NetSuite implementation, manufacturers get a system tailored to their workflows — not the other way around. Our team has delivered NetSuite for discrete, process, and mixed-mode manufacturers across India and globally.",
  stats: [
    { icon: Factory, value: 120, suffix: "+", label: "Manufacturers Served" },
    { icon: BarChart3, value: 40, suffix: "%", label: "Avg Cost Reduction" },
    { icon: Package, value: 99, suffix: "%", label: "Inventory Accuracy" },
    { icon: TrendingUp, value: 15, suffix: "+", label: "Years Experience" },
  ],
  benefits: [
    {
      title: "Production Planning & Scheduling",
      description:
        "Plan and schedule production runs, manage work orders, track machine utilisation, and optimise shop floor throughput — all from a single NetSuite dashboard.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Multi-Location Inventory Management",
      description:
        "Real-time inventory visibility across all warehouses. Manage raw materials, WIP, and finished goods with bin-level tracking and automated replenishment.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Quality Management & Compliance",
      description:
        "Define quality standards, automate inspection workflows, track defect rates, and ensure ISO/GMP compliance natively inside NetSuite.",
      image: "/images/people/laptopmen2.webp",
    },
    {
      title: "Supply Chain Visibility",
      description:
        "Connect with suppliers, manage purchase orders, track deliveries, and get real-time landed cost visibility across your entire supply chain.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Shop Floor Mobility",
      description:
        "Give your team real-time access to work orders and quality checklists via mobile. Capture production data instantly and reduce paper-based errors on the factory floor.",
      image: "/images/people/laptopgirl3.webp",
    },
  ],
  features: [
    {
      title: "Financial Management",
      description: "Automate transaction flow and gain real-time access to financial and operational performance metrics.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Inventory Management",
      description: "Optimize inventory levels, minimize stockouts, and boost profitability with company-wide inventory visibility.",
      image: "/images/lap/lap3.webp",
    },
    {
      title: "Customer Relationship Management",
      description: "Track and analyze multi-channel marketing campaigns, automate case management, and provide real-time customer data.",
      image: "/images/people/laptopgirl.webp",
    },
    {
      title: "E-commerce Integration",
      description: "Unify e-commerce platforms with backend systems for a seamless online shopping experience.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Supply Chain Management",
      description: "Optimize procurement and supplier relationships with NetSuite's unified supply chain suite.",
      image: "/images/lap/lap10_11zon.webp",
    },
  ],
  challenges: [
    {
      title: "Disconnected Systems & Data Silos",
      description:
        "NetSuite unifies ERP, MRP, CRM, and financials on a single platform — eliminating data silos and manual rekeying across disconnected systems.",
      image: "/images/challenges/data-silos.png",
    },
    {
      title: "Inventory Blind Spots & Stockouts",
      description:
        "NetSuite's real-time inventory management with demand-driven replenishment ensures you always have the right stock at the right location — no more stockouts or overstock.",
      image: "/images/challenges/inventory-blind-spots.png",
    },
    {
      title: "Complex Multi-Level BOM Management",
      description:
        "NetSuite supports multi-level BOMs, phantom assemblies, and routing with drag-and-drop revision management and full version control.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Inaccurate Job Costing",
      description:
        "NetSuite's job costing and cost accounting module tracks materials, labour, and overhead per work order — giving you true product margins in real time.",
      image: "/images/challenges/profitability.png",
    },
    {
      title: "Rising Material Costs",
      description:
        "Fluctuating material costs impact your margins. NetSuite's real-time costing provides instant visibility into procurement price changes.",
      image: "/images/lap/lap6_11zon.webp",
    },
    {
      title: "Supply Chain Volatility",
      description:
        "Fragmented supply chain visibility leads to production delays. NetSuite provides global visibility into vendor performance and lead times.",
      image: "/images/challenges/supply-chain.png",
    },
    {
      title: "Manual Compliance Reporting",
      description:
        "Inconsistent compliance data poses audit risks. NetSuite automates safety and quality reporting for seamless regulatory compliance.",
      image: "/images/challenges/compliance.png",
    },
    {
      title: "Inefficient Production Capacity",
      description:
        "Poor visibility into machine and labor capacity leads to bottlenecks. NetSuite provides real-time shop floor scheduling and capacity planning.",
      image: "/images/challenges/resource-visibility.png",
    },
  ],
  pricingTiers: [
    {
      name: "Starter",
      price: "₹1,20,000",
      description: "For growing manufacturers up to 25 users.",
      features: [
        "Core ERP (Financials, AR/AP, GL)",
        "Basic Inventory Management",
        "Work Orders & Assembly",
        "Standard Reporting",
        "Email Support",
      ],
    },
    {
      name: "Professional",
      price: "₹2,50,000",
      description: "Full manufacturing suite for mid-size industries.",
      features: [
        "Advanced Manufacturing (MRP/MPS)",
        "Multi-location Inventory",
        "BOM & Routing Management",
        "Quality Management",
        "Supply Chain Management",
        "SLA-backed Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale or global manufacturing operations.",
      features: [
        "Multi-subsidiary (OneWorld)",
        "Advanced Demand Planning",
        "Shop Floor Control",
        "Custom Integrations",
        "Dedicated Implementation Manager",
        "24/7 Priority Support",
      ],
    },
  ],
  faqs: [
    {
      question:
        "Does NetSuite support both discrete and process manufacturing?",
      answer:
        "Yes. NetSuite supports discrete, process, engineer-to-order, configure-to-order, and mixed-mode manufacturing with full BOM, routing, and work order management.",
    },
    {
      question:
        "Can NetSuite integrate with our existing MES or shop floor systems?",
      answer:
        "Yes. NetSuite integrates with MES systems and shop floor equipment through its SuiteTalk REST and SOAP APIs, allowing real-time data capture from production equipment.",
    },
    {
      question: "How does NetSuite handle multi-level BOMs?",
      answer:
        "NetSuite fully supports multi-level BOMs with phantom assemblies, alternate components, and routing steps. You can manage revision history and component substitution with full version control.",
    },
    {
      question: "How long does a NetSuite manufacturing implementation take?",
      answer:
        "Most manufacturing implementations take 3–6 months from kickoff to go-live, depending on complexity, number of users, and customisation requirements.",
    },
    {
      question:
        "Does NetSuite handle Indian GST and compliance for manufacturing?",
      answer:
        "Yes. AGSuite's India Localization SuiteApp provides full GST automation, e-invoicing, E-Way bill generation, TDS/TCS, and statutory reporting natively inside NetSuite.",
    },
    {
      question: "Does NetSuite support lot and serial number tracking?",
      answer:
        "Yes. NetSuite provides end-to-end lot and serial number traceability across procurement, production, inventory, and sales — enabling full forward and backward traceability.",
    },
  ],
  relatedIndustries: [
    { label: "Wholesale Distribution", href: "/netsuite/industries/wholesale" },
    { label: "Retail & E-Commerce", href: "/netsuite/industries/retail" },
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-services",
    },
    { label: "Software & Technology", href: "/netsuite/industries/software" },
  ],
};

export default function ManufacturingPage() {
  return <IndustryTemplate data={data} />;
}

