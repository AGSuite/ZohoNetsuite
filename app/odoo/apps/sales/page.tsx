import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Sales Implementation & Consulting | AGSuite Technologies",
  description:
    "Streamline quotations, sales orders, pricing, approvals, invoicing, and customer handoffs with Odoo Sales implementation and support from AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Professional Quotations",
    description: "Create consistent, branded quotations with the products, services, terms, and information each customer needs.",
  },
  {
    title: "Quotation Templates",
    description: "Standardize recurring offers and help sales teams prepare accurate proposals without rebuilding them from scratch.",
  },
  {
    title: "Sales Order Management",
    description: "Convert accepted quotations into structured orders that can trigger delivery, invoicing, and operational workflows.",
  },
  {
    title: "Product & Price Lists",
    description: "Manage products, variants, customer-specific prices, discount rules, and commercial terms from shared data.",
  },
  {
    title: "Discount & Approval Controls",
    description: "Introduce clear approval steps for discounts, margins, exceptions, and other important commercial decisions.",
  },
  {
    title: "Online Acceptance",
    description: "Make it easier for customers to review proposals, accept terms, and move the sale forward digitally.",
  },
  {
    title: "Recurring Sales",
    description: "Support repeatable commercial arrangements by connecting sales with subscription and recurring billing workflows.",
  },
  {
    title: "Upsell Opportunities",
    description: "Use related products, optional items, and customer context to present relevant additions during the sales process.",
  },
  {
    title: "Delivery Coordination",
    description: "Connect confirmed orders with inventory and fulfilment so commercial commitments remain visible to operations.",
  },
  {
    title: "Invoice Handoff",
    description: "Pass order information into invoicing workflows with fewer duplicate entries and clearer billing status.",
  },
  {
    title: "Sales Reporting",
    description: "Analyze orders, products, customers, teams, margins, and trends using live information from the sales process.",
  },
  {
    title: "Customer Portal",
    description: "Give customers controlled access to relevant quotations, orders, invoices, and documents in one place.",
  },
];

const benefits = [
  {
    title: "Faster quote-to-order cycles",
    description: "Help sales teams move from customer requirements to an approved order through a structured, repeatable process.",
    points: ["Reusable quotation templates", "Digital customer acceptance", "Clear order conversion", "Fewer manual steps"],
    image: "/images/odoo/odoo-growth-dashboard.png",
  },
  {
    title: "More consistent commercial control",
    description: "Keep pricing, discounts, products, taxes, and approval responsibilities aligned across the sales organization.",
    points: ["Shared price lists", "Controlled discounts", "Approval visibility", "Consistent sales terms"],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Connected sales and operations",
    description: "Ensure confirmed customer commitments flow into inventory, delivery, projects, or services without disconnected handoffs.",
    points: ["Order-driven fulfilment", "Shared customer records", "Delivery status visibility", "Operational continuity"],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Cleaner order-to-invoice flow",
    description: "Use agreed products, quantities, prices, and billing rules to support accurate invoicing and better status tracking.",
    points: ["Connected order data", "Flexible invoice triggers", "Reduced re-entry", "Clear billing status"],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "A better customer experience",
    description: "Present professional documents and give customers an easier way to review, accept, and follow their transactions.",
    points: ["Branded quotations", "Convenient acceptance", "Customer portal access", "Consistent communication"],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Sales insight that supports growth",
    description: "Understand what customers buy, which products perform, and where commercial processes need attention.",
    points: ["Live sales analysis", "Product performance", "Customer trends", "Team-level reporting"],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo Sales?",
    a: "Odoo Sales is a sales order management application for preparing quotations, managing products and prices, confirming orders, coordinating delivery, and supporting invoicing. It can connect with Odoo CRM, Inventory, Accounting, eCommerce, Projects, and other applications.",
  },
  {
    q: "How are Odoo CRM and Odoo Sales different?",
    a: "Odoo CRM manages leads, opportunities, activities, and pipeline progression. Odoo Sales manages quotations, pricing, sales orders, and the commercial process after an opportunity is ready for an offer. Many organizations connect both applications for an end-to-end flow.",
  },
  {
    q: "Can we create different quotation templates?",
    a: "Yes. Quotation templates can support different product combinations, services, optional items, descriptions, commercial terms, and presentation needs. We configure them around the offers your sales teams use most often.",
  },
  {
    q: "Can Odoo Sales support different price lists and currencies?",
    a: "Odoo can support multiple price lists, pricing rules, discounts, and currencies, subject to your edition and configuration. The design should reflect customer groups, regions, product strategy, finance requirements, and approval controls.",
  },
  {
    q: "Can customers approve quotations online?",
    a: "Odoo can provide a digital quotation experience where customers review documents and complete configured acceptance steps. Available payment, signature, and portal workflows depend on the applications and services included in your setup.",
  },
  {
    q: "Does Odoo Sales connect with inventory and delivery?",
    a: "Yes. Confirmed sales orders can connect with Odoo Inventory to create and track fulfilment requirements. This gives commercial and operations teams a shared view of what was promised and its delivery status.",
  },
  {
    q: "Can Odoo Sales generate invoices?",
    a: "Odoo Sales can connect orders with invoicing workflows based on configured policies, such as ordered or delivered quantities. Odoo Accounting is typically used for the wider accounting, payment, tax, and financial reporting process.",
  },
  {
    q: "How long does an Odoo Sales implementation take?",
    a: "Timing depends on product data, price lists, quotation design, approvals, migration, integrations, inventory requirements, accounting rules, testing, and training. AGSuite confirms a phased delivery plan after reviewing your sales process and scope.",
  },
];

export default function OdooSalesPage() {
  return (
    <OdooAppTemplate
      appName="Odoo Sales"
      appLogo="/images/odoo-apps/sales.svg"
      title="Move From Quotation to Revenue With Less Friction"
      description="Create professional quotations, control pricing, confirm orders, and connect sales with delivery and invoicing in one coordinated workflow."
      heroImage="/images/odoo/odoo-growth-dashboard.png"
      overviewImage="/images/people/person_using_odoo.webp"
      overviewTitle="A connected sales process from first offer to final handoff"
      overviewParagraphs={[
        "Odoo Sales gives commercial teams a structured way to prepare quotations, manage products and prices, confirm customer orders, and track what happens next. Shared templates and controls help teams move quickly while keeping offers consistent.",
        "When connected with Odoo CRM, Inventory, Accounting, Projects, and eCommerce, an accepted sale can continue into fulfilment, service delivery, and invoicing without recreating the transaction in separate systems.",
      ]}
      heroCards={[
        { value: "1", label: "Quote-to-order flow" },
        { value: "Live", label: "Order visibility" },
        { value: "360°", label: "Customer context" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Sales process discovery",
        "Products and price-list setup",
        "Quotation and approval design",
        "Inventory and finance integration",
        "Data migration and validation",
        "Training and ongoing support",
      ]}
      faqs={faqs}
    />
  );
}
