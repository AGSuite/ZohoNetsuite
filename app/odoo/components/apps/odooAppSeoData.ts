export interface OdooAppSeoProfile {
  verdict: string;
  bestFor: string;
  edition: string;
  versions: string;
  hosting: string;
  dependencies: string;
  integrations: string;
  dataRequirements: string;
  appCategory: string;
}

const supportedVersions = "Odoo 18, 19, and 20. Module, localization, and custom-code compatibility must be validated for the target release.";
const hostingOptions = "Odoo Online, Odoo.sh, or on-premise hosting. Custom code and integration requirements determine the suitable option.";

export const odooAppSeoProfiles: Record<string, OdooAppSeoProfile> = {
  "Odoo CRM": {
    verdict: "Odoo CRM gives sales teams one system for leads, opportunities, activities, email history, pipeline forecasts, and customer context. It is best for growing B2B sales teams that need structured follow-up without separating CRM data from quotations, invoices, marketing, or support. AGSuite configures the pipeline, access rules, automation, migration, integrations, and reporting as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "B2B sales teams, multi-team pipelines, account-based selling, and businesses replacing spreadsheets or disconnected CRM tools.",
    edition: "Community and Enterprise. Exact automation, mobile, hosting, and connected-app requirements should be confirmed before selection.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Contacts is required. Sales, Email Marketing, Marketing Automation, and Helpdesk are optional connected apps.",
    integrations: "Email servers, website forms, telephony, calendars, enrichment tools, marketing platforms, and external ERP systems.",
    dataRequirements: "Companies, contacts, leads, opportunities, stages, owners, activities, tags, sources, and agreed historical records.",
    appCategory: "Customer Relationship Management",
  },
  "Odoo Sales": {
    verdict: "Odoo Sales manages quotations, price lists, approvals, sales orders, customer terms, delivery handoffs, and invoicing in one workflow. It is best for businesses that need consistent commercial control from accepted quote to fulfilled order and payment. AGSuite configures products, pricing, approval rules, documents, taxes, integrations, migration, and user roles as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "B2B sales operations, configurable quotations, contract pricing, approval-controlled selling, and connected order-to-cash processes.",
    edition: "Community and Enterprise. Advanced signatures, subscriptions, integrations, and service options vary by edition and installed apps.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Contacts and product master data are required. CRM, Inventory, Accounting, Subscriptions, and Sign are common additions.",
    integrations: "Payment providers, e-signature, tax engines, eCommerce, marketplaces, shipping systems, and external finance platforms.",
    dataRequirements: "Customers, products, units, price lists, taxes, payment terms, quotation templates, sales orders, and opening commitments.",
    appCategory: "Sales Order Management",
  },
  "Odoo Accounting": {
    verdict: "Odoo Accounting connects receivables, payables, bank reconciliation, taxes, assets, analytic accounting, and financial reporting with operational transactions. It is best for finance teams that need a traceable ledger linked to sales, purchasing, inventory, projects, and expenses. AGSuite configures localization, controls, migration, bank connections, reports, and period-close procedures as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "Finance teams that need integrated bookkeeping, statutory localization, multi-company control, and operational-to-financial traceability.",
    edition: "Enterprise provides comprehensive Accounting. Community provides Invoicing and limited finance capabilities; confirm statutory and reporting needs before selection.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Company, currency, tax localization, chart of accounts, journals, and fiscal periods must be designed before migration.",
    integrations: "Banks, payment gateways, tax or e-invoicing services, payroll, expense tools, commerce platforms, and external reporting systems.",
    dataRequirements: "Chart of accounts, customers, vendors, opening balances, open items, tax mappings, bank balances, assets, and validated history scope.",
    appCategory: "Accounting and Financial Management",
  },
  "Odoo Inventory": {
    verdict: "Odoo Inventory controls receipts, storage, replenishment, picking, packing, transfers, lots, serials, and stock valuation across locations. It is best for distributors, retailers, manufacturers, and multi-warehouse businesses that need traceable inventory connected to orders and purchasing. AGSuite designs routes, barcode workflows, master data, integrations, migration, and warehouse controls as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "Multi-location inventory, wholesale distribution, retail fulfilment, manufacturing materials, and lot- or serial-controlled products.",
    edition: "Core Inventory is available in Community and Enterprise. Barcode and advanced operational capabilities differ by edition and app configuration.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Accurate products, units, locations, routes, opening quantities, valuation rules, and warehouse responsibilities are required.",
    integrations: "Barcode devices, carriers, eCommerce, marketplaces, EDI, purchasing, manufacturing, third-party logistics, and accounting.",
    dataRequirements: "Products, variants, units, locations, lots, serials, expiry dates, opening stock, reorder rules, and inventory values.",
    appCategory: "Inventory and Warehouse Management",
  },
  "Odoo Purchase": {
    verdict: "Odoo Purchase manages supplier requests, quotations, purchase orders, approval rules, receipts, vendor bills, and procurement reporting. It is best for organizations that need controlled spend and a clear link between demand, suppliers, inventory, and finance. AGSuite configures procurement policies, vendor data, approvals, matching, integrations, migration, and reporting as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "Centralized procurement, multi-level approvals, supplier comparison, inventory replenishment, and purchase-to-pay control.",
    edition: "Community and Enterprise. Approval depth, vendor bill automation, OCR, and connected finance capabilities vary by edition and installed apps.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Supplier, product, unit, currency, tax, approval, warehouse, and accounting rules should be agreed before configuration.",
    integrations: "Supplier portals, EDI, inventory, manufacturing, quality, logistics, accounting, and external procurement platforms.",
    dataRequirements: "Vendors, products, supplier price lists, lead times, taxes, payment terms, open orders, agreements, and approval limits.",
    appCategory: "Procurement Management",
  },
  "Odoo Manufacturing": {
    verdict: "Odoo Manufacturing connects bills of materials, routings, work centers, work orders, material planning, shop-floor execution, and production costs. It is best for manufacturers that need production control linked to demand, inventory, purchasing, quality, maintenance, and finance. AGSuite configures master data, planning rules, execution, integrations, migration, testing, and training as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "Discrete manufacturing, assembly, subcontracting, multi-level BOMs, work-center scheduling, and traceable production operations.",
    edition: "Core Manufacturing is available in Community and Enterprise. PLM, Quality, IoT, advanced planning, and related capabilities vary by edition.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Products, BOMs, routings, work centers, units, lead times, inventory, costing, and replenishment rules must be validated.",
    integrations: "Shop-floor devices, IoT, CAD or PLM, quality systems, maintenance, barcode, procurement, inventory, and accounting.",
    dataRequirements: "Products, BOM versions, components, operations, work centers, capacities, lead times, scrap rules, stock, and open production orders.",
    appCategory: "Manufacturing Resource Planning",
  },
  "Odoo Projects": {
    verdict: "Odoo Projects connects tasks, milestones, schedules, timesheets, resources, documents, customer communication, billing, and project profitability. It is best for professional services and internal delivery teams that need one view of work and commercial performance. AGSuite configures project templates, roles, stages, time controls, billing rules, migration, integrations, and reporting as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "Professional services, implementation teams, agencies, internal programs, billable projects, and milestone-controlled delivery.",
    edition: "Core Project is available in Community and Enterprise. Planning, advanced Timesheets, Documents, and service capabilities vary by edition.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Customers, services, project templates, task stages, resources, calendars, rates, billing rules, and access roles must be defined.",
    integrations: "CRM, Sales, Timesheets, Planning, Expenses, Documents, Helpdesk, Accounting, calendars, and external collaboration tools.",
    dataRequirements: "Projects, tasks, milestones, users, assignments, planned hours, rates, open work, timesheets, documents, and billing status.",
    appCategory: "Project and Professional Services Management",
  },
  "Odoo Helpdesk": {
    verdict: "Odoo Helpdesk manages tickets, support teams, channels, priorities, service-level rules, escalations, knowledge, and customer history. It is best for service organizations that need accountable support connected to customers, sales, subscriptions, field work, and billing. AGSuite configures intake, routing, SLAs, automation, migration, portals, integrations, reporting, and agent training as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "Customer support teams, shared-service desks, SLA-based operations, multi-team routing, and portal-enabled service delivery.",
    edition: "The standard Odoo Helpdesk app is an Enterprise capability. Community deployments require a third-party or custom alternative that needs separate assessment.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Contacts, support teams, channels, categories, priorities, SLAs, working calendars, escalation ownership, and access roles are required.",
    integrations: "Email, website forms, live chat, WhatsApp, telephony, field service, subscriptions, knowledge, customer portals, and external monitoring.",
    dataRequirements: "Customers, contacts, open tickets, categories, teams, owners, priorities, SLA rules, templates, knowledge articles, and selected history.",
    appCategory: "Customer Service and Helpdesk",
  },
  "Odoo Website": {
    verdict: "Odoo Website provides page building, forms, blogs, SEO controls, multilingual content, analytics connections, and direct links to CRM and other Odoo apps. It is best for businesses that want marketing and lead capture connected to operational data. AGSuite designs information architecture, templates, forms, migration, technical SEO, integrations, governance, and editor training as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "Corporate websites, lead-generation sites, multilingual content, blogs, customer portals, and Odoo-connected digital experiences.",
    edition: "Website is available in Community and Enterprise. Hosting, themes, advanced apps, Studio, support, and upgrade options vary by edition.",
    versions: supportedVersions,
    hosting: "Odoo Online, Odoo.sh, or on-premise hosting. Theme, custom code, deployment, security, and performance requirements determine the suitable option.",
    dependencies: "Domain, DNS, brand system, page inventory, redirects, cookie requirements, forms, languages, analytics, and content ownership are required.",
    integrations: "CRM, Marketing, Appointments, Events, eCommerce, analytics, consent tools, payment providers, chat, and external services.",
    dataRequirements: "Pages, copy, media, metadata, redirects, forms, blog posts, languages, users, domains, and tracking requirements.",
    appCategory: "Website Content Management",
  },
  "Odoo eCommerce": {
    verdict: "Odoo eCommerce connects storefront content, products, variants, pricing, checkout, payments, orders, inventory, fulfilment, customer accounts, and accounting. It is best for B2C or B2B sellers that want commerce data in the same platform as operations. AGSuite configures catalog, experience, integrations, migration, SEO, payments, shipping, testing, and training as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "B2C stores, B2B portals, product catalogs, omnichannel sellers, configurable products, and businesses needing connected fulfilment.",
    edition: "eCommerce is available in Community and Enterprise. Advanced apps, hosting, support, Studio, and some payment or delivery options vary by edition.",
    versions: supportedVersions,
    hosting: "Odoo Online, Odoo.sh, or on-premise hosting. Traffic, custom code, integrations, deployment controls, and performance needs guide selection.",
    dependencies: "Products, variants, categories, prices, taxes, inventory, payments, shipping, returns, customer terms, domains, and content are required.",
    integrations: "Payment gateways, carriers, tax services, marketplaces, analytics, marketing, warehouses, product feeds, and external fulfilment systems.",
    dataRequirements: "Catalog, variants, media, prices, stock, customer accounts, orders, tax rules, shipping rules, redirects, and SEO metadata.",
    appCategory: "Electronic Commerce",
  },
  "Odoo Employees": {
    verdict: "Odoo Employees provides a central workforce directory and connects employee records with recruitment, attendance, leave, expenses, appraisals, payroll, and documents. It is best for HR teams replacing spreadsheets and disconnected employee administration. AGSuite configures organization structures, roles, policies, migration, approvals, integrations, security, reporting, and administrator training as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "Growing HR teams, multi-department organizations, employee self-service, policy-controlled administration, and connected people operations.",
    edition: "Core Employees is available in Community and Enterprise. Payroll, Appraisals, Referrals, advanced approvals, and localization depth vary by edition and country.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Company structure, departments, roles, managers, contracts, calendars, policies, access rights, privacy requirements, and localization must be defined.",
    integrations: "Recruitment, Attendance, Time Off, Expenses, Payroll, Appraisals, Planning, Projects, identity providers, and external payroll systems.",
    dataRequirements: "Employee records, departments, jobs, managers, contracts, calendars, leave balances, documents, skills, and agreed historical records.",
    appCategory: "Human Resources Management",
  },
  "Odoo Marketing": {
    verdict: "Odoo Marketing connects email, automation, social publishing, SMS, surveys, events, website behavior, leads, customers, and revenue attribution. It is best for teams that need campaign execution tied to CRM and commerce data. AGSuite configures consent, segmentation, templates, journeys, lead handoffs, integrations, migration, reporting, and team training as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
    bestFor: "B2B demand generation, lifecycle campaigns, eCommerce engagement, lead nurturing, event follow-up, and CRM-connected marketing.",
    edition: "Email Marketing is available in Community and Enterprise. Marketing Automation, Social Marketing, and other advanced capabilities vary by edition and installed apps.",
    versions: supportedVersions,
    hosting: hostingOptions,
    dependencies: "Consent model, contact data, segments, sender domains, templates, campaign objectives, lead ownership, tracking, and governance are required.",
    integrations: "CRM, Website, eCommerce, Events, Surveys, SMS providers, social networks, analytics, consent tools, and external data platforms.",
    dataRequirements: "Contacts, consent status, segments, suppression lists, templates, campaigns, sources, scoring rules, sender domains, and attribution requirements.",
    appCategory: "Marketing Automation",
  },
};

export const defaultOdooAppSeoProfile: OdooAppSeoProfile = {
  verdict: "This Odoo application centralizes a defined business workflow and connects it with the wider Odoo data model. It is suitable for organizations that need clearer ownership, less duplicate entry, and consistent reporting. AGSuite assesses requirements, configures the app, migrates validated data, integrates required systems, tests critical workflows, trains users, and supports go-live as an official Odoo Partner. The final scope reflects your users, controls, data, localization, and deployment model.",
  bestFor: "Organizations that need a connected Odoo workflow with controlled configuration, migration, integration, and adoption.",
  edition: "Community and Enterprise availability depends on the app and required features. Confirm edition fit before licensing or implementation.",
  versions: supportedVersions,
  hosting: hostingOptions,
  dependencies: "Business rules, users, roles, source data, integrations, controls, and reporting requirements must be confirmed during discovery.",
  integrations: "Odoo apps, approved third-party platforms, APIs, and data sources required by the target workflow.",
  dataRequirements: "Validated master data, open transactions, ownership, history scope, mapping rules, and reconciliation criteria.",
  appCategory: "Business Application",
};
