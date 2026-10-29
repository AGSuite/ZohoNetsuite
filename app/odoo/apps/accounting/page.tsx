import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Accounting Implementation & Consulting | AGSuite Technologies",
  description:
    "Automate bookkeeping, bank reconciliation, multi-currency invoicing, tax compliance, and real-time financial reporting with Odoo Accounting implementation from AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Automated Bank Synchronization",
    description: "Connect directly with thousands of global and domestic banks for live automated statement feeds and transaction sync.",
  },
  {
    title: "AI-Assisted Reconciliation",
    description: "Match statement lines with customer invoices and vendor bills automatically, learning repetitive patterns over time.",
  },
  {
    title: "Smart Customer Invoicing",
    description: "Create professional, compliant invoices with automated payment links, digital signature acceptance, and QR codes.",
  },
  {
    title: "Vendor Bill OCR & Matching",
    description: "Digitize vendor bills with AI-powered OCR and enforce strict three-way matching against purchase orders and receipts.",
  },
  {
    title: "Dynamic Financial Reporting",
    description: "Generate real-time Profit & Loss, Balance Sheets, Cash Flow, and Executive Summaries with instant drill-down to journal items.",
  },
  {
    title: "Multi-Currency Management",
    description: "Transact seamlessly in 160+ currencies with automated exchange rate updates and automated realized/unrealized FX gain/loss entries.",
  },
  {
    title: "Multi-Company Consolidation",
    description: "Manage multiple branches, legal entities, and international subsidiaries in a single system with automated inter-company journals.",
  },
  {
    title: "Tax Localization & E-Invoicing",
    description: "Comply with country-specific tax rules, automated GST/VAT returns, e-Way bills, and mandated electronic invoicing protocols.",
  },
  {
    title: "Asset & Depreciation Tracking",
    description: "Track fixed assets and automate amortization and depreciation schedules without manual recurring journal calculations.",
  },
  {
    title: "Budgeting & Financial Planning",
    description: "Define operational and project financial budgets, monitor live variances against actual performance, and control overruns.",
  },
  {
    title: "Analytic & Cost Accounting",
    description: "Analyze profitability by department, project, cost center, or product line without complicating your general chart of accounts.",
  },
  {
    title: "Integrated Payment Gateways",
    description: "Accept customer payments instantly through native integrations with Stripe, PayPal, Razorpay, SEPA direct debits, and merchant portals.",
  },
];

const benefits = [
  {
    title: "Instant visibility into financial health",
    description: "Eliminate month-end surprises. Dynamic dashboards and real-time ledgers give leadership continuous clarity on cash position, revenue, and margins.",
    points: ["Live Balance Sheet & P&L", "Real-time cash flow monitoring", "Audit-ready transaction trails", "Instant drill-down to journal items"],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Dramatically faster period closes",
    description: "Automate repetitive reconciliation, recurring entries, and accruals to cut the monthly financial close from weeks to a few days.",
    points: ["95% bank auto-matching", "Automated recurring journals", "One-click period locking", "Pre-configured tax filing reports"],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Seamless operational-to-financial flow",
    description: "Every sales shipment, purchase receipt, and inventory change posts automatically into the ledger with zero manual data re-entry.",
    points: ["3-way purchase matching", "Real-time stock valuation", "Sales order to invoice sync", "Elimination of double entries"],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Stronger cash flow & faster collections",
    description: "Shorten Days Sales Outstanding (DSO) through automated invoice delivery, embedded digital payment links, and scheduled dunning reminders.",
    points: ["Automated follow-up emails", "Embedded digital pay buttons", "Integrated customer portal", "Real-time aging analysis"],
    image: "/images/Dashboard/accounting and planing dashboard.jpg",
  },
  {
    title: "Built-in statutory compliance & auditability",
    description: "Ensure bulletproof compliance with local tax rules, e-invoicing mandates, IFRS/GAAP standards, and tamper-evident audit trails.",
    points: ["Country fiscal localizations", "Automated GST/VAT calculation", "E-way bill & e-invoicing ready", "Immutable audit log tracking"],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Enterprise scalability for multi-entity businesses",
    description: "Easily onboard new branches, global subsidiaries, and regional entities with consolidated reporting and inter-company reconciliation.",
    points: ["Multi-subsidiary architecture", "Automated inter-company journals", "Consolidated group reporting", "Centralized treasury oversight"],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo Accounting and what features does it include?",
    a: "Odoo Accounting is a full-featured, double-entry financial management system covering general ledger, accounts receivable, accounts payable, automated bank synchronization, AI-powered reconciliation, multi-currency accounting, asset management, budgeting, and tax localizations. It connects natively with operational apps like Sales, Purchase, and Inventory.",
  },
  {
    q: "How is Odoo Accounting different from tools like QuickBooks, Tally, or standalone ERPs?",
    a: "Unlike standalone accounting software that requires third-party connectors or manual CSV imports, Odoo Accounting is embedded in the same database as your sales, purchasing, inventory, and project operations. When an order ships or goods arrive, corresponding journal entries update automatically in real time with zero duplicate data entry.",
  },
  {
    q: "Can Odoo Accounting connect with our bank accounts automatically?",
    a: "Yes. Odoo supports automated bank synchronization with thousands of banks worldwide, importing daily statements and transaction feeds directly. Odoo's AI reconciliation engine then suggests matching invoices and bills, allowing teams to reconcile accounts in minutes.",
  },
  {
    q: "Does Odoo Accounting support Indian GST, E-invoicing, and local compliance?",
    a: "Yes. Odoo has extensive fiscal localizations for India, including automated GST calculation, GSTR report generation, e-Way bill creation, and e-Invoicing integration via authorized GSP/IRN portals. AGSuite configures tax schemes and compliance workflows aligned with statutory regulations.",
  },
  {
    q: "Can we handle multiple currencies and international subsidiaries?",
    a: "Yes. Odoo Accounting natively supports 160+ currencies with automatic exchange rate updates from central banks and automated period-end revaluation of open balances. Multi-company setups allow each subsidiary to maintain distinct charts of accounts and currencies while consolidating into group financial statements.",
  },
  {
    q: "How does Odoo Accounting integrate with Sales, Purchasing, and Inventory?",
    a: "Integration is native. Confirmed sales orders automatically generate draft or posted customer invoices; purchase orders reconcile with vendor bills and warehouse receipts (3-way matching); and warehouse stock moves generate real-time automated valuation journal entries under perpetual or periodic costing methods.",
  },
  {
    q: "Can AGSuite migrate our historical accounting data from our current software?",
    a: "Yes. AGSuite provides end-to-end data migration services. We extract, clean, map, and validate your historical chart of accounts, open receivables, payables, customer/vendor balances, fixed assets, and trial balances from systems like Tally, QuickBooks, NetSuite, SAP, or spreadsheets with zero data loss.",
  },
  {
    q: "How long does an Odoo Accounting implementation take?",
    a: "A focused Odoo Accounting rollout typically takes between 4 to 10 weeks depending on chart of accounts structure, historical data migration volume, bank integrations, multi-entity complexity, and team training requirements. AGSuite establishes a structured implementation roadmap to ensure a secure, audited transition.",
  },
];

export default function OdooAccountingPage() {
  return (
    <OdooAppTemplate
      appName="Odoo Accounting"
      appLogo="/images/odoo-apps/accounting.svg"
      title="Real-Time Financial Control Connected to Every Transaction"
      description="Automate bookkeeping, bank reconciliation, multi-currency invoicing, tax compliance, and financial reporting with an accounting system built directly into your operational workflow."
      heroImage="/images/Dashboard/odoo_live_operations_dashboard.webp"
      overviewImage="/images/Dashboard/accounting and planing dashboard.jpg"
      overviewTitle="Financial clarity that keeps pace with your business execution"
      overviewParagraphs={[
        "Odoo Accounting bridges the traditional divide between daily business operations and financial bookkeeping. Because it connects natively with Odoo Sales, Purchasing, Inventory, and Subscriptions, transactions post automatically to your chart of accounts without manual re-entry or reconciliation bottlenecks.",
        "Whether managing complex multi-currency transactions, reconciling thousands of bank statement lines with AI matching, or consolidating multi-company ledgers under statutory compliance frameworks, Odoo Accounting gives finance leaders full auditability and up-to-the-minute operational intelligence.",
      ]}
      heroCards={[
        { value: "Real-time", label: "Ledger accuracy" },
        { value: "95%", label: "Bank auto-match" },
        { value: "Multi", label: "Currency & company" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Chart of accounts design & review",
        "Fiscal localization & tax setup",
        "Historical ledger & data migration",
        "Bank feeds & payment gateways",
        "Inventory & sales accounting integration",
        "Finance team training & go-live support",
      ]}
      faqs={faqs}
    />
  );
}

