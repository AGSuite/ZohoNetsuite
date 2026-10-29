import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo eCommerce Implementation & Online Store Setup | AGSuite Technologies",
  description:
    "Launch a fully integrated Odoo online store with product management, payment gateways, inventory sync, abandoned cart recovery, and real-time order tracking — implemented by AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Drag-and-Drop Online Store Builder",
    description:
      "Design and customize your storefront, product pages, and checkout flow visually using Odoo's no-code block editor with professionally designed eCommerce themes.",
  },
  {
    title: "Product Catalog & Variant Management",
    description:
      "Manage unlimited products with multiple variants (size, color, material), price lists, product configurators, and downloadable digital product delivery.",
  },
  {
    title: "Multi-Currency & Multi-Pricelist Support",
    description:
      "Serve international customers with automatic currency conversion, geo-targeted pricelists, customer segment pricing, and promotional discount rules.",
  },
  {
    title: "Integrated Payment Gateways",
    description:
      "Accept payments via Stripe, PayPal, Razorpay, Authorize.net, and other providers. Manage partial payments, deposits, and installment billing directly from the order.",
  },
  {
    title: "Real-Time Inventory Synchronization",
    description:
      "Product stock levels on the website update automatically as warehouse stock changes — preventing overselling, backorder confusion, and manual catalog corrections.",
  },
  {
    title: "Abandoned Cart Recovery",
    description:
      "Automatically identify and email customers who leave products in their cart without completing checkout, with personalized recovery offers to drive conversion.",
  },
  {
    title: "Customer Account & Order Portal",
    description:
      "Give buyers a self-service portal to track deliveries, download invoices, manage subscriptions, request returns, and view full order history.",
  },
  {
    title: "Upselling, Cross-Selling & Wishlists",
    description:
      "Boost average order value with AI-driven product recommendations, related item upsells, bundle promotions, and customer wishlist functionality.",
  },
  {
    title: "Coupon Codes & Promotional Campaigns",
    description:
      "Create time-limited discount codes, site-wide promotions, free shipping thresholds, loyalty point programs, and customer tier-based promotional pricing.",
  },
  {
    title: "Shipping Rate Calculation & Tracking",
    description:
      "Integrate FedEx, UPS, DHL, and local carriers for real-time shipping rate calculation at checkout, automated label printing, and order tracking link delivery.",
  },
  {
    title: "Product Reviews & Customer Ratings",
    description:
      "Enable verified buyer reviews and star ratings on product pages to build social proof, improve on-site SEO, and increase new visitor purchase confidence.",
  },
  {
    title: "B2B eCommerce & Wholesale Portal",
    description:
      "Serve wholesale customers with password-protected B2B portals, company-specific pricelists, minimum order quantities, and custom payment term agreements.",
  },
];

const benefits = [
  {
    title: "Sell online without inventory chaos",
    description:
      "Because Odoo eCommerce shares the same inventory database as your warehouse operations, stock levels on your website are always accurate — eliminating overselling, manual syncing, and customer complaints.",
    points: [
      "Real-time stock level sync",
      "Automatic backorder prevention",
      "Multi-warehouse availability display",
      "Low-stock notification triggers",
    ],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Reduce cart abandonment & recover revenue",
    description:
      "Automated abandoned cart email sequences, exit-intent promotions, and one-click recovery links bring undecided shoppers back to complete their purchase — recovering otherwise lost revenue.",
    points: [
      "Automated recovery email sequences",
      "Personalized discount incentives",
      "One-click cart restoration links",
      "Abandonment rate analytics",
    ],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Increase average order value",
    description:
      "Smart upsell recommendations, cross-sell product blocks, bundle pricing, loyalty points, and wishlist reminders consistently increase the basket size of every completed transaction.",
    points: [
      "AI product recommendations",
      "Bundle & kit pricing",
      "Loyalty rewards program",
      "Cross-sell sidebar blocks",
    ],
    image: "/images/Dashboard/accounting and planing dashboard.jpg",
  },
  {
    title: "Seamless B2B wholesale operations",
    description:
      "Launch a dedicated B2B portal with company-specific pricing, credit limit controls, quote-to-order workflows, and negotiated payment terms — all managed from the same Odoo backend.",
    points: [
      "Company-specific pricelists",
      "Online quote request flow",
      "Credit limit management",
      "Custom payment terms",
    ],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Complete post-purchase self-service",
    description:
      "Empower customers to track orders, download VAT invoices, manage subscriptions, and initiate returns without contacting support — reducing service load and increasing satisfaction.",
    points: [
      "Live order tracking portal",
      "Invoice self-download",
      "Return merchandise requests",
      "Subscription self-management",
    ],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Unified reporting across all channels",
    description:
      "Odoo eCommerce links online sales data directly to accounting, inventory, and CRM — giving finance, operations, and marketing a single source of truth for revenue and performance.",
    points: [
      "Online revenue dashboards",
      "Channel performance reports",
      "Customer lifetime value tracking",
      "Accounting auto-reconciliation",
    ],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo eCommerce and how is it different from Shopify or WooCommerce?",
    a: "Odoo eCommerce is a fully integrated online store module built natively into the Odoo platform. Unlike Shopify or WooCommerce — which require third-party plugins or custom integrations to connect to your ERP, inventory, and accounting — Odoo eCommerce shares the same database as your warehouse, finance, CRM, and marketing modules. This eliminates data silos, manual syncing, and plugin management.",
  },
  {
    q: "How does Odoo eCommerce manage inventory across the website and warehouse?",
    a: "Odoo eCommerce and Odoo Inventory share a live database. When a customer places an order online, stock is reserved immediately. When a delivery is completed in the warehouse, the product availability on the website updates automatically. You can also display multi-warehouse availability and configure backorder and out-of-stock messaging per product.",
  },
  {
    q: "Which payment gateways does Odoo eCommerce support?",
    a: "Odoo supports a wide range of payment providers including Stripe, PayPal, Razorpay, Authorize.net, Adyen, Mollie, and local payment gateways depending on your region. Multiple payment acquirers can be active simultaneously, and customers can save cards for future purchases on their portal account.",
  },
  {
    q: "Can Odoo eCommerce handle B2B wholesale and B2C retail from the same store?",
    a: "Yes. Odoo supports both B2B and B2C customers from the same platform. B2B buyers can be assigned to dedicated pricelists with volume discounts, minimum order quantities, payment terms, and quote-request workflows. B2C customers experience a standard consumer checkout. Each segment is fully configurable without needing separate stores.",
  },
  {
    q: "Does Odoo eCommerce support discount codes and promotional campaigns?",
    a: "Yes. Odoo includes a promotions and coupon engine that supports percentage discounts, fixed amount reductions, free product giveaways, minimum order conditions, free shipping thresholds, and customer loyalty points. Promotions can be auto-applied or require a coupon code at checkout.",
  },
  {
    q: "How does abandoned cart recovery work in Odoo?",
    a: "When a logged-in customer adds items to their cart and leaves without completing checkout, Odoo records the abandoned session. Automated email sequences can be configured to send recovery messages at defined intervals — with personalized product images, a direct cart link, and optional discount incentives to encourage completion.",
  },
  {
    q: "Can customers track their orders and download invoices from the website?",
    a: "Yes. Each customer has access to a self-service portal on your Odoo website where they can view order status and delivery tracking, download PDF invoices and receipts, manage active subscriptions, initiate return or exchange requests, and access their purchase history — all without contacting your support team.",
  },
  {
    q: "How long does an Odoo eCommerce implementation take?",
    a: "A standard Odoo eCommerce rollout with AGSuite takes 4 to 8 weeks depending on catalog size, custom theme requirements, payment gateway configuration, shipping integrations, and B2B portal complexity. We handle full storefront setup, product import, payment testing, and team training before go-live.",
  },
];

export default function OdooEcommercePage() {
  return (
    <OdooAppTemplate
      appName="Odoo eCommerce"
      appLogo="/images/odoo-apps/ecommerce.svg"
      title="Launch a Fully Integrated Online Store That Sells, Ships, and Scales"
      description="Manage your entire online retail operation — products, inventory, payments, shipping, abandoned cart recovery, and customer accounts — in one platform natively connected to your ERP and accounting."
      heroImage="/images/Dashboard/odoo_live_operations_dashboard.webp"
      overviewImage="/images/Dashboard/odoo_command_dashboard.webp"
      overviewTitle="From product listing to delivered order: end-to-end eCommerce operations"
      overviewParagraphs={[
        "Odoo eCommerce gives businesses a powerful online store that is natively connected to inventory, accounting, CRM, and marketing — eliminating the disconnected plugin stacks that slow down Shopify and WooCommerce-based operations.",
        "Whether you sell B2C to individual consumers or run a B2B wholesale portal with company-specific pricing and credit terms, Odoo eCommerce handles both from the same backend — giving your team a single system to manage products, orders, payments, fulfillment, and customer communication.",
      ]}
      heroCards={[
        { value: "Real-time", label: "Inventory sync" },
        { value: "B2B & B2C", label: "Multi-segment store" },
        { value: "Integrated", label: "Payments & shipping" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Product catalog structure & variant planning",
        "Payment gateway & shipping carrier setup",
        "Inventory & warehouse integration",
        "B2B portal & pricelist configuration",
        "Promotions, loyalty & abandoned cart setup",
        "Go-live testing & team training",
      ]}
      faqs={faqs}
    />
  );
}

