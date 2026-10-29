import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Inventory & Warehouse Management Implementation | AGSuite Technologies",
  description:
    "Optimize stock levels, barcode scanning, multi-warehouse routing, automated replenishment, and traceability with Odoo Inventory consulting and implementation from AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Multi-Warehouse & Multi-Location",
    description: "Manage complex logistics hierarchies across multiple warehouses, zones, aisles, racks, and bins with location-specific rules.",
  },
  {
    title: "Double-Entry Stock Tracking",
    description: "Maintain total inventory auditability with double-entry stock transactions between physical, virtual, and partner locations.",
  },
  {
    title: "Barcode & Mobile Scanning",
    description: "Accelerate receiving, picking, packing, internal transfers, and physical cycle counts with mobile barcode and RFID scanning.",
  },
  {
    title: "Automated Replenishment & Reordering",
    description: "Trigger automated procurement requests or manufacturing orders based on minimum/maximum stock rules and vendor lead times.",
  },
  {
    title: "Traceability (Lots & Serial Numbers)",
    description: "Track parts, raw materials, and finished goods end-to-end with serial numbers, batch/lot numbers, and expiration dates.",
  },
  {
    title: "Advanced Routing & Push/Pull Rules",
    description: "Configure cross-docking, dropshipping, wave picking, batch picking, and multi-step delivery routes effortlessly.",
  },
  {
    title: "Real-Time Valuation & Landed Costs",
    description: "Calculate perpetual inventory valuation using FIFO, Average Cost (AVCO), or Standard costing, including customs and freight landed costs.",
  },
  {
    title: "Quality Checks & Control Points",
    description: "Enforce mandatory incoming quality inspections, in-process testing, and return verification before stock acceptance.",
  },
  {
    title: "Automated Packaging & Delivery Prep",
    description: "Define packaging units (boxes, pallets, cartons) and automate delivery slip generation and shipping label printing.",
  },
  {
    title: "Carrier Shipping Connectors",
    description: "Connect directly with FedEx, UPS, DHL, USPS, and regional freight carriers for live shipping rates and tracking numbers.",
  },
  {
    title: "Inventory Forecasting & Runout Analysis",
    description: "View future stock availability projections based on confirmed sales orders, incoming purchases, and production schedules.",
  },
  {
    title: "Cycle Counting & Physical Audits",
    description: "Conduct continuous partial cycle counts by location or category without shutting down daily warehouse operations.",
  },
];

const benefits = [
  {
    title: "Zero blind spots in stock visibility",
    description: "Know exactly what is on hand, incoming, reserved, and in transit across every warehouse, store, and fulfillment center in real time.",
    points: ["Real-time multi-location visibility", "Accurate available-to-promise (ATP)", "Fewer stockouts and overstocking", "Centralized inventory dashboard"],
    image: "/images/benefits/wholesale_multi_location_inventory.png",
  },
  {
    title: "Lightning-fast warehouse operations",
    description: "Empower warehouse staff with handheld barcode scanners, optimized picking paths, and guided workflows that cut processing times by over 40%.",
    points: ["Paperless barcode scanning", "Optimized picking & putaway routes", "Wave and batch order picking", "Fewer fulfillment errors"],
    image: "/images/benefits/wholesale_warehouse_management_wms.png",
  },
  {
    title: "Intelligent automated replenishment",
    description: "Keep stock levels healthy without manual guesswork using automated reordering rules, vendor lead-time tracking, and demand forecasts.",
    points: ["Dynamic min/max reorder rules", "Automated RFQ generation", "Vendor lead-time factoring", "Safety stock protection"],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "End-to-end lot & expiration traceability",
    description: "Isolate defect batches instantly and support strict industry compliance (FDA, ISO, FSSAI) with bidirectional traceability reports.",
    points: ["Upstream and downstream traceability", "Expiry date & FIFO/FEFO rotation", "Instant recall reporting", "Lot-specific cost tracking"],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Accurate automated financial valuation",
    description: "Eliminate discrepancies between warehouse inventory and your balance sheet with automated perpetual stock valuation and landed cost distribution.",
    points: ["Perpetual inventory journal entries", "Landed cost allocation (freight/customs)", "Automated COGS calculation", "Real-time scrap and loss accounting"],
    image: "/images/Dashboard/accounting and planing dashboard.jpg",
  },
  {
    title: "Unified omnichannel fulfillment",
    description: "Connect inventory with eCommerce storefronts, B2B wholesale portals, and retail POS to prevent overselling across customer channels.",
    points: ["Shopify, Amazon & WooCommerce sync", "Retail POS synchronization", "Dropshipping & cross-docking rules", "Seamless return workflows"],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo Inventory and how does its double-entry system work?",
    a: "Odoo Inventory is a comprehensive warehouse management system (WMS) built on a double-entry principle. Rather than simply adding or subtracting numbers from a total, stock moves between defined locations (vendors, inventory loss, scrap, production, physical racks, and customers). This ensures every transaction has an origin and destination for 100% mathematical auditability.",
  },
  {
    q: "Can Odoo Inventory manage multiple warehouses and retail locations?",
    a: "Yes. Odoo natively supports multi-company and multi-warehouse structures. You can define distinct fulfillment centers, regional hubs, drop-ship partners, and retail stores, setting up custom push/pull routing rules, internal transfer schedules, and inter-warehouse replenishment workflows.",
  },
  {
    q: "Does Odoo support barcode scanning and mobile warehouse devices?",
    a: "Absolutely. Odoo has a dedicated mobile barcode scanning application compatible with mobile devices, rugged Android scanners, and Zebra hardware. Warehouse staff can scan barcodes or QR codes for receipts, putaways, batch picks, packings, delivery dispatches, and inventory cycle counts.",
  },
  {
    q: "How does Odoo calculate inventory valuation and landed costs?",
    a: "Odoo supports Standard Price, Average Cost (AVCO), and FIFO (First-In, First-Out) costing. With automated valuation enabled, warehouse movements immediately generate real-time balancing journal entries in Odoo Accounting. Landed costs such as freight, customs duties, and insurance can also be allocated proportionally across received shipments.",
  },
  {
    q: "Can Odoo automate purchase orders when stock runs low?",
    a: "Yes. You can define reordering rules with minimum and maximum thresholds for each product or location. When stock falls below the minimum, Odoo automatically generates a draft Request for Quotation (RFQ) for the preferred vendor or creates a manufacturing order based on product setup.",
  },
  {
    q: "Does Odoo support lot numbers, serial tracking, and expiration dates?",
    a: "Yes. Products can be tracked by unique serial numbers or by production lot/batches. Odoo supports expiration dates, removal dates, best-before dates, and alert dates, enforcing FEFO (First-Expired, First-Out) picking logic to minimize spoilage and comply with regulatory requirements.",
  },
  {
    q: "How does Odoo Inventory connect with Shopify, Amazon, and WooCommerce?",
    a: "Odoo provides direct bi-directional connectors for major eCommerce platforms. Sales orders placed online automatically reserve stock in Odoo, and warehouse updates (such as shipment fulfillment and tracking numbers) sync back to the online stores in real time.",
  },
  {
    q: "How long does an Odoo Inventory & Warehouse implementation take?",
    a: "A focused warehouse implementation typically takes between 4 to 12 weeks depending on warehouse size, number of locations, barcode scanning scope, eCommerce integrations, custom routing requirements, and staff training. AGSuite delivers a structured, phase-tested roadmap to ensure zero disruption to live order fulfillment.",
  },
];

export default function OdooInventoryPage() {
  return (
    <OdooAppTemplate
      appName="Odoo Inventory"
      appLogo="/images/odoo-apps/inventory.svg"
      title="Real-Time Inventory Control Across Every Warehouse and Channel"
      description="Maximize order fulfillment, automate stock replenishment, streamline barcode scanning, and track lots and serial numbers with Odoo's double-entry inventory engine."
      heroImage="/images/Dashboard/odoo_command_dashboard.webp"
      overviewImage="/images/modules/warehouse_management.webp"
      overviewTitle="Modern warehouse management without stockouts or excess holding costs"
      overviewParagraphs={[
        "Odoo Inventory operates on a unique double-entry inventory system where nothing is lost or created—stock simply moves between locations, suppliers, transit lines, and customers with complete mathematical auditability.",
        "Integrated seamlessly with Odoo Sales, Purchase, Manufacturing, and Accounting, your warehouse teams experience zero lag between customer orders, picking routes, vendor receipts, and automated general ledger inventory valuation entries.",
      ]}
      heroCards={[
        { value: "100%", label: "Stock traceability" },
        { value: "Real-time", label: "Multi-warehouse sync" },
        { value: "Double", label: "Entry inventory" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Warehouse layout & routing design",
        "Product master & unit of measure setup",
        "Barcode scanner hardware & flow setup",
        "Inventory valuation & accounting integration",
        "Historical stock data cleansing & migration",
        "Staff training & warehouse go-live support",
      ]}
      faqs={faqs}
    />
  );
}

