import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Purchase & Procurement Implementation | AGSuite Technologies",
  description:
    "Automate vendor requests for quotation (RFQs), purchase orders, vendor agreements, price controls, and 3-way bill matching with Odoo Purchase consulting and implementation from AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Automated RFQ Generation",
    description: "Trigger Requests for Quotations automatically based on inventory reorder levels, manufacturing needs, or dropship orders.",
  },
  {
    title: "Vendor Comparison & Bidding",
    description: "Send RFQs to multiple suppliers simultaneously, compare quotes side-by-side on price and delivery time, and pick the best bid.",
  },
  {
    title: "Blanket Orders & Purchase Agreements",
    description: "Negotiate bulk contracts and recurring blanket purchase agreements with automated call-off order tracking.",
  },
  {
    title: "Multi-Level Approval Hierarchies",
    description: "Configure customizable approval thresholds and manager sign-offs based on purchase amount, department, or product category.",
  },
  {
    title: "Vendor Price Lists & Volume Tiers",
    description: "Maintain multi-vendor price books with quantity break tiers, agreed lead times, and supplier-specific product codes.",
  },
  {
    title: "Strict 3-Way Matching",
    description: "Automatically verify quantities and amounts across Purchase Order, Warehouse Receipt, and Vendor Bill before payment approval.",
  },
  {
    title: "Vendor Performance Scorecards",
    description: "Track supplier reliability, on-time delivery percentages, defect rates, and price variances from live operational data.",
  },
  {
    title: "Dropshipping Coordination",
    description: "Route customer orders directly to pre-selected suppliers for direct-to-customer shipment without intermediate warehouse handling.",
  },
  {
    title: "Purchasing in Foreign Currencies",
    description: "Issue purchase orders in any supplier currency with automated exchange rate conversion and FX variance calculations.",
  },
  {
    title: "Automated Landed Cost Attribution",
    description: "Allocate customs duties, freight charges, insurance, and handling fees across received products for true landed cost.",
  },
  {
    title: "Procurement Spend Analytics",
    description: "Analyze purchasing trends, spend by category, vendor distribution, and cost savings with customizable pivot reports.",
  },
  {
    title: "Vendor Portal Access",
    description: "Provide suppliers with a dedicated web portal to review RFQs, confirm orders, update shipping statuses, and upload digital bills.",
  },
];

const benefits = [
  {
    title: "Optimized purchasing costs",
    description: "Compare supplier bids side-by-side and leverage volume blanket agreements to secure the best commercial terms for every item.",
    points: ["Multi-vendor bid comparisons", "Volume discount tier tracking", "Blanket contract management", "Clear price variance alerts"],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Zero invoice discrepancies",
    description: "Protect your bottom line by automating 3-way matching between what was ordered, what was delivered, and what was billed.",
    points: ["Automated 3-way PO matching", "Discrepancy tolerance controls", "Prevention of duplicate billings", "Accurate accounts payable data"],
    image: "/images/Dashboard/accounting and planing dashboard.jpg",
  },
  {
    title: "Accelerated replenishment cycles",
    description: "Eliminate stockouts through automated procurement orders generated directly from low-stock triggers or scheduled manufacturing runs.",
    points: ["Dynamic min-stock reordering", "MRP-driven raw material purchasing", "Vendor lead-time tracking", "Elimination of procurement delays"],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Strict spend governance & approval gates",
    description: "Enforce company spending policies with role-based approval limits, ensuring no unauthorized order is issued to suppliers.",
    points: ["Threshold-based approval routing", "Departmental budget checks", "Audit-ready requisition trails", "Mobile manager approvals"],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Stronger supplier relationships",
    description: "Collaborate effortlessly with vendors through automated communications, digital PO acceptance, and transparent supplier scorecards.",
    points: ["Vendor self-service portal", "Automated order confirmation", "On-time delivery analytics", "Supplier quality grading"],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Accurate product costing with landed costs",
    description: "Avoid understated cost of goods sold by automatically allocating freight, duties, tariffs, and handling expenses to inventory valuation.",
    points: ["Customs & duty cost splits", "Freight & insurance allocation", "True landed cost per SKU", "Precise gross margin calculation"],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo Purchase and what core processes does it cover?",
    a: "Odoo Purchase manages the end-to-end procurement lifecycle. It covers purchase requisitions, automated Requests for Quotation (RFQs), multi-vendor price negotiations, blanket order agreements, purchase order issuance, receipt tracking, vendor bill generation, and 3-way matching with accounts payable.",
  },
  {
    q: "How does 3-way matching work between Purchase, Inventory, and Accounting?",
    a: "When a vendor bill arrives, Odoo automatically compares the quantities and prices against the original Purchase Order and the actual quantities confirmed as received by the warehouse team in Odoo Inventory. Discrepancies generate warning alerts, preventing overpayment or payment for unreceived items.",
  },
  {
    q: "Can Odoo automate purchase orders when stock reaches reorder levels?",
    a: "Yes. Using automated replenishment rules or the Master Production Schedule (MPS), Odoo automatically drafts RFQs or confirmed purchase orders whenever inventory dips below defined safety levels, taking into account each vendor's delivery lead time.",
  },
  {
    q: "How does Odoo handle multi-vendor RFQs and bid comparisons?",
    a: "You can create a purchase tender and send RFQs to multiple suppliers with a single click. When suppliers respond, their quotes appear in an interactive comparison grid where procurement managers can compare unit prices, delivery terms, and discounts before awarding the order.",
  },
  {
    q: "Does Odoo Purchase support approval hierarchies based on dollar thresholds?",
    a: "Yes. You can establish multi-tier approval rules. For instance, orders below $5,000 can be approved by team leads, while orders exceeding that threshold automatically route to department heads or finance directors before being dispatched to vendors.",
  },
  {
    q: "Can we manage blanket orders and multi-currency vendor price lists?",
    a: "Yes. Odoo supports blanket purchase orders where you agree upon quantities and pricing upfront for a specific timeframe and issue call-off purchase orders periodically. You can also maintain vendor-specific price lists in foreign currencies with automated exchange rate conversion.",
  },
  {
    q: "How are landed costs (freight, customs, tariffs) factored into purchase receipts?",
    a: "Odoo's Landed Costs module allows you to take additional vendor bills (such as freight forwarding, customs clearance, or marine insurance) and distribute those expenses across product inventory costs proportionally by quantity, weight, volume, or current value.",
  },
  {
    q: "How long does an Odoo Purchase implementation take?",
    a: "A focused procurement rollout typically requires between 4 to 8 weeks depending on vendor data volume, approval rule complexity, inventory integration scope, and accounting links. AGSuite structures the rollout to align with your purchasing policies and supplier relationships.",
  },
];

export default function OdooPurchasePage() {
  return (
    <OdooAppTemplate
      appName="Odoo Purchase"
      appLogo="/images/odoo-apps/purchase.svg"
      title="Smarter Procurement With Total Spend Visibility and Control"
      description="Automate vendor RFQs, compare bids, streamline purchase orders, enforce approval hierarchies, and eliminate invoice discrepancies with connected 3-way matching."
      heroImage="/images/Dashboard/odoo_live_operations_dashboard.webp"
      overviewImage="/images/modules/procurement.webp"
      overviewTitle="From requisition to payment: complete procurement control"
      overviewParagraphs={[
        "Odoo Purchase centralizes your procurement lifecycle, turning manual requisition requests and scattered vendor emails into a structured, trackable purchasing workflow with automated approval gates.",
        "Natively integrated with Odoo Inventory, Manufacturing, and Accounting, procurement teams maintain real-time visibility into supplier lead times, delivery schedules, contractual pricing, and 3-way matched vendor bills.",
      ]}
      heroCards={[
        { value: "3-Way", label: "Invoice matching" },
        { value: "100%", label: "Spend transparency" },
        { value: "Auto", label: "PO & RFQ triggers" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Procurement policy & approval workflow mapping",
        "Vendor master data cleansing & price-list setup",
        "Automated reordering & MRP integration",
        "3-way matching & accounting integration",
        "Vendor portal configuration",
        "Buyer team training & post-launch support",
      ]}
      faqs={faqs}
    />
  );
}

