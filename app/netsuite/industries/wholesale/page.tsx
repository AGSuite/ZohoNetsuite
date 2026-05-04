import IndustryTemplate, {
  IndustryPageData,
} from "../_template/IndustryTemplate";
import { Package, BarChart3, TrendingUp, Globe } from "lucide-react";
import { buildMetadata, INDUSTRY_PAGES } from "../../lib/seo";

const PAGE_PATH = "/netsuite/industries/wholesale";
const pageMetadata = INDUSTRY_PAGES[PAGE_PATH];

export const metadata = pageMetadata ? buildMetadata({
  ...pageMetadata,
  path: PAGE_PATH,
  ogImage: "https://www.agsuitetech.com/images/og/og-netsuite.jpg",
}) : {};


const data: IndustryPageData = {
  industry: "Wholesale Distribution",
  heroTitle: "Expand Your Distribution Enterprise Without Limits",
  heroDescription:
    "Eliminate supply chain bottlenecks and accelerate order fulfillment with the world’s #1 cloud ERP tailored for wholesale distributors.",
  heroImage: "/images/industries/Wholesale-Distribution-compressed.webp",
  heroCardTitle: "Unified Fulfillment ERP Platform",
  heroCardSub: "Purchasing · Inventory · Warehouse · Fulfilment",
  heroTopCardTitle: "Trusted by 400+ Distributors",
  heroTopCardSub: "Wholesale · B2B · Multi-location · 3PL",
  introImage: "/images/lap/lap7_11zon.webp",
  introTitle: "The ERP That Powers Smarter Distribution",
  introDescription:
    "Wholesale distributors operate in an environment of thin margins, complex customer pricing structures, and high inventory investment. Disconnected purchasing, warehouse, and accounting systems create errors, delays, and blind spots that cost margin points.",
  introDescription2:
    "NetSuite consolidates your entire distribution operation — from vendor ordering and goods receipt to pick/pack/ship and customer invoicing — in one real-time system. You get complete inventory visibility, automated replenishment, and accurate landed cost tracking.",
  stats: [
    {
      icon: Package,
      value: 400,
      suffix: "+",
      label: "Distributors on NetSuite",
    },
    {
      icon: BarChart3,
      value: 28,
      suffix: "%",
      label: "Reduction in Inventory Costs",
    },
    {
      icon: TrendingUp,
      value: 99,
      suffix: "%",
      label: "Order Fulfilment Accuracy",
    },
    { icon: Globe, value: 15, suffix: "+", label: "Years of Distribution ERP" },
  ],
  benefits: [
    {
      title: "Multi-Location Inventory Management",
      description:
        "Real-time inventory visibility across all warehouses and distribution centres. Bin-level location tracking, lot/serial control, and cycle counting built in.",
      image: "/images/lap/lap9_11zon.webp",
    },
    {
      title: "Warehouse Management (WMS)",
      description:
        "NetSuite WMS covers receiving, put-away, pick/pack/ship, and returns — with mobile barcode scanning and directed workflows that boost warehouse productivity.",
      image: "/images/lap/lap10_11zon.webp",
    },
    {
      title: "Demand Planning & Replenishment",
      description:
        "Data-driven reorder points, safety stock calculations, and min/max replenishment connected to supplier lead times to optimise inventory investment.",
      image: "/images/lap/lap8_11zon.webp",
    },
    {
      title: "Customer Pricing & Contracts",
      description:
        "Manage complex customer-specific pricing, volume discounts, contract pricing, rebates, and trade promotions — with margin visibility at every level.",
      image: "/images/people/laptopgirl.webp",
    },
    {
      title: "Lot & Serial Number Tracking",
      description:
        "Ensure full traceability with automated lot and serial number tracking. Manage expiration dates and handle recalls with precision and speed.",
      image: "/images/lap/lap5.webp",
    },
    {
      title: "Vendor Portal & EDI Automation",
      description:
        "Streamline supplier communication with a self-service vendor portal and automated EDI document exchange, reducing manual data entry and errors.",
      image: "/images/people/threeteam.webp",
    },
  ],
  challenges: [
    {
      title: "Inventory Visibility Gaps",
      description:
        "NetSuite provides real-time, multi-location inventory with automated replenishment alerts, demand-driven reorder points, and forward-looking stock projections.",
      image: "/images/people/laptopmen1.jpg",
    },
    {
      title: "Complex Customer Pricing in Spreadsheets",
      description:
        "NetSuite's Advanced Pricing module automates customer-specific pricing, tiered discounts, contract prices, and promotional rules — applied automatically at order entry.",
      image: "/images/lap/lap1.webp",
    },
    {
      title: "Landed Cost Inaccuracies",
      description:
        "NetSuite's landed cost module allocates duties, freight, and other costs to purchase receipts — giving you accurate product costs and true gross margins.",
      image: "/images/lap/lap4.webp",
    },
    {
      title: "Slow Order Fulfilment",
      description:
        "NetSuite's automated order management processes customer orders — from entry to pick/pack/ship to invoice — without manual handoffs, reducing fulfilment time by up to 40%.",
      image: "/images/people/fourteam.webp",
    },
    {
      title: "Disconnected Purchasing & Sales",
      description:
        "Siloed internal departments lead to stockouts or overordering. NetSuite unifies the entire supply chain from demand to fulfillment.",
      image: "/images/people/laptopgirl3.webp",
    },
    {
      title: "Excess Inventory Costs",
      description:
        "Carrying slow-moving stock ties up critical capital. NetSuite's demand planning optimizes stock levels to reduce carrying costs.",
      image: "/images/lap/lap2.webp",
    },
    {
      title: "Paper-Based Operations",
      description:
        "Manual warehouse processing is slow and error-prone. NetSuite WMS digitizes all warehouse tasks via mobile scanning.",
      image: "/images/lap/lap7_11zon.webp",
    },
    {
      title: "Fragmented Supply Chain Data",
      description:
        "Lack of real-time insights into supplier performance impacts reliability. NetSuite provides vendor scorecards and global visibility.",
      image: "/images/people/global.webp",
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
    { label: "Manufacturing", href: "/netsuite/industries/manufacturing" },
    { label: "Retail & E-Commerce", href: "/netsuite/industries/retail" },
    {
      label: "Professional Services",
      href: "/netsuite/industries/it-services",
    },
    { label: "Software & Technology", href: "/netsuite/industries/software" },
  ],
};

export default function WholesalePage() {
  return <IndustryTemplate data={data} />;
}

