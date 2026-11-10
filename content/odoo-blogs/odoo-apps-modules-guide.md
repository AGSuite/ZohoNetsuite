# Sanity fields

- **Title:** Odoo Apps and Modules Explained: How to Choose the Right ERP Stack
- **Slug:** `odoo-apps-modules-guide`
- **Author:** AGSuite Technologies
- **Category:** Odoo Apps
- **Excerpt:** Compare the core Odoo apps for finance, sales, websites, supply chain, HR, marketing, services, and productivity—and build a practical phased ERP roadmap.
- **SEO title:** Odoo Apps and Modules: Complete Selection Guide
- **SEO description:** Compare Odoo apps for finance, CRM, sales, inventory, manufacturing, HR, eCommerce, projects, and more. Learn which modules your business needs first.
- **Keywords:** Odoo apps, Odoo modules, Odoo ERP modules, Odoo applications, best Odoo apps, Odoo module selection, Odoo ERP software
- **Featured image:** `/images/odoo/blogs/odoo-apps-modules-guide.png`
- **Image alt text:** Connected Odoo ERP application ecosystem for finance, sales, HR, inventory, manufacturing, and eCommerce

# Odoo Apps and Modules Explained: How to Choose the Right ERP Stack

Odoo apps manage specific business functions while sharing a common database and user experience. Companies can connect CRM, Sales, Accounting, Purchase, Inventory, Manufacturing, eCommerce, Projects, HR, Marketing, and other applications without building a separate data model for every department.

The main decision is not whether Odoo offers enough apps. It is which applications should be implemented first, how they should exchange data, and where standard configuration ends and customization begins.

This guide explains the main Odoo application groups and provides a practical method for selecting a right-sized ERP stack.

## What is the difference between an Odoo app and an Odoo module?

An Odoo app is a business-facing application such as CRM, Accounting, Inventory, Manufacturing, or Helpdesk. A module is a technical package that adds or changes functionality. An app may depend on several underlying modules, while a custom module can extend an existing application without appearing as a separate business app.

Business teams usually select applications. Technical teams manage module dependencies, custom extensions, deployment, security, and upgrades.

## Why do connected Odoo apps matter?

The value of an integrated ERP comes from connected transactions.

For example:

1. CRM records an opportunity.
2. Sales converts the opportunity into a quotation and sales order.
3. Inventory reserves and delivers the product.
4. Purchase replenishes shortages from suppliers.
5. Accounting creates and reconciles the invoice.
6. Helpdesk retains customer and order context for support.

Each team works in its own process, but the transaction remains connected. This reduces duplicate entry and makes operational reporting easier to reconcile.

## Odoo finance apps

Finance applications establish accounting controls and connect operational transactions to financial reporting.

| App | Primary purpose | Common connections |
|---|---|---|
| Accounting | General ledger, receivables, payables, bank reconciliation, taxes, assets, reporting | Sales, Purchase, Inventory, Expenses |
| Invoicing | Customer invoices, vendor bills, payments, follow-up | Sales, Subscriptions, Projects |
| Expenses | Employee expense submission, approval, reimbursement, accounting | Employees, Accounting, Projects |
| Sign | Electronic document signing and approval | Sales, HR, Documents |
| Spreadsheet | Analysis and operational reporting using connected Odoo data | Accounting, Sales, Inventory |
| ESG | Environmental, social, and governance data and reporting workflows | Accounting, Employees, operations data |

Odoo's official documentation distinguishes Invoicing from the broader Accounting application. Accounting includes capabilities such as financial reports, bank reconciliation, budgets, assets, and additional accounting controls.

Explore [Odoo Accounting](/odoo/apps/accounting).

## Odoo sales apps

Sales applications manage demand from the first interaction through commercial agreement and order execution.

| App | Primary purpose | Best suited to |
|---|---|---|
| CRM | Leads, opportunities, activities, pipeline, forecasting | B2B and considered-purchase sales |
| Sales | Quotations, price lists, discounts, orders, customer commitments | Product and service sales |
| Subscriptions | Recurring contracts, renewals, billing cycles | SaaS, memberships, managed services |
| Point of Sale | In-store transactions, sessions, payments, receipts | Retail stores and restaurants |
| Rental | Rental quotations, reservations, pickup, return, invoicing | Equipment and product rental |

CRM and Sales are often implemented together, but they solve different problems. CRM manages the opportunity pipeline. Sales manages the commercial transaction after a quotation is prepared.

Explore [Odoo CRM](/odoo/apps/crm) and [Odoo Sales](/odoo/apps/sales).

## Odoo website and commerce apps

Odoo can connect digital experiences directly to product, customer, order, inventory, and invoicing data.

| App | Primary purpose |
|---|---|
| Website Builder | Business pages, landing pages, forms, menus, and content |
| eCommerce | Product catalog, pricing, checkout, delivery, customer accounts, orders |
| Blog | Articles, categories, authors, and search-focused content |
| Events | Event pages, registrations, tickets, communication, attendance |
| eLearning | Courses, lessons, assessments, and learner access |
| Forum | Community questions, answers, moderation, and participation |

Odoo's eCommerce documentation covers the complete order lifecycle, including products, checkout, delivery, stock, returns, invoicing, and performance analysis. That connection is useful when a business wants its storefront and back-office operations to share the same transaction data.

Explore [Odoo Website](/odoo/apps/website) and [Odoo eCommerce](/odoo/apps/ecommerce).

## Odoo supply-chain and manufacturing apps

Supply-chain applications coordinate purchasing, stock, production, quality, assets, and product changes.

| App | Primary purpose | Key design decisions |
|---|---|---|
| Inventory | Warehouses, locations, receipts, deliveries, transfers, lots, serials, replenishment | Warehouse structure, routes, costing, traceability |
| Purchase | Requests, suppliers, quotations, purchase orders, approvals | Approval rules, vendor data, matching |
| Manufacturing | Bills of materials, work orders, production planning, consumption | BoM design, work centers, capacity, costing |
| Quality | Control points, checks, alerts, corrective actions | Inspection plans and ownership |
| Maintenance | Preventive and corrective equipment maintenance | Assets, teams, schedules, failure tracking |
| PLM | Engineering changes, versions, approvals, product documentation | Change control and release governance |

Inventory is frequently a foundation application because Sales, Purchase, Manufacturing, eCommerce, and Accounting depend on accurate product and stock rules.

Explore [Odoo Inventory](/odoo/apps/inventory), [Odoo Purchase](/odoo/apps/purchase), and [Odoo Manufacturing](/odoo/apps/manufacturing).

## Odoo human-resources apps

HR applications manage workforce records and employee processes.

| App | Primary purpose |
|---|---|
| Employees | Workforce directory, departments, roles, contracts, employee information |
| Recruitment | Vacancies, applicants, stages, interviews, hiring activities |
| Time Off | Leave types, balances, requests, approvals, calendars |
| Appraisals | Review cycles, feedback, objectives, follow-up |
| Payroll | Salary structures, work entries, payslips, payroll processing where localized |
| Fleet | Vehicles, assignments, contracts, services, costs |

HR scope requires careful attention to country localization, privacy, access control, payroll rules, and data retention. Confirm local capabilities before committing to a payroll design.

Explore [Odoo Employees](/odoo/apps/employees).

## Odoo marketing apps

Marketing applications help teams acquire, segment, communicate with, and learn from audiences.

| App | Primary purpose |
|---|---|
| Email Marketing | Campaign creation, recipient lists, delivery, engagement reporting |
| Marketing Automation | Triggered journeys and activity-based campaigns |
| Social Marketing | Connected channels, scheduling, monitoring, campaign reporting |
| SMS Marketing | Permission-based SMS campaigns and delivery tracking |
| WhatsApp | Customer conversations using supported WhatsApp workflows |
| Surveys | Forms, questionnaires, assessments, feedback, analysis |

Marketing data becomes more useful when consent, campaign response, lead creation, sales activity, and revenue reporting follow consistent definitions.

Explore [Odoo Marketing](/odoo/apps/marketing).

## Odoo service-delivery apps

Service applications connect customer commitments with work, capacity, time, support, and billing.

| App | Primary purpose |
|---|---|
| Project | Tasks, stages, milestones, collaboration, project visibility |
| Timesheets | Time entry, approvals, utilization, billing inputs |
| Planning | Resource schedules, shifts, roles, capacity |
| Appointments | Availability and online booking |
| Helpdesk | Tickets, teams, channels, SLAs, escalation, customer support |
| Live Chat | Website conversations and lead or support intake |

A professional-services company may connect CRM, Sales, Projects, Planning, Timesheets, Expenses, Helpdesk, and Accounting to follow the lifecycle from opportunity through delivery and billing.

Explore [Odoo Projects](/odoo/apps/projects) and [Odoo Helpdesk](/odoo/apps/helpdesk).

## Odoo productivity and platform apps

Productivity applications support communication, documents, knowledge, automation, and connected devices.

- **Discuss** supports internal conversations and activity notifications.
- **Documents** organizes files and document workflows.
- **Knowledge** provides internal articles, instructions, and shared references.
- **VoIP** connects supported calling workflows with customer activity.
- **IoT** links supported physical devices with operational processes.
- **Artificial Intelligence** adds supported assistance and automation across selected workflows.

These apps should support defined business processes rather than become isolated collaboration tools.

## How do you choose the right Odoo apps?

Use a process-led selection method.

### 1. Identify the business outcome

Define a measurable operational goal: reduce duplicate order entry, improve stock accuracy, shorten quote turnaround, control purchasing, accelerate financial close, or standardize project billing.

### 2. Map the complete transaction

Follow work across departments. A quote-to-cash process may require CRM, Sales, Inventory, Invoicing, Accounting, and an external payment or tax integration.

### 3. Separate foundation apps from later enhancements

Foundation apps establish master data and transaction control. Enhancement apps add optimization after the foundation is stable.

### 4. Test standard Odoo before approving customization

Prototype real scenarios using standard configuration. Record true gaps, their business impact, and available workarounds. Customize only after the trade-off is understood.

### 5. Check edition, hosting, localization, and integration requirements

Confirm whether each requirement is available in the selected Odoo edition and country localization. Hosting also matters: Odoo Online supports standard applications, while custom modules generally require Odoo.sh or a self-managed deployment.

### 6. Plan application dependencies and data ownership

Define which application owns customer, product, pricing, employee, inventory, and financial data. Avoid creating parallel sources of truth.

## Recommended starting stacks by business model

These examples are starting points, not fixed packages.

| Business model | Practical first-phase apps |
|---|---|
| B2B sales organization | CRM, Sales, Invoicing, Accounting |
| Wholesale distributor | CRM, Sales, Purchase, Inventory, Accounting |
| Manufacturer | Sales, Purchase, Inventory, Manufacturing, Quality, Maintenance, Accounting |
| Professional services | CRM, Sales, Project, Timesheets, Expenses, Invoicing, Accounting |
| Retailer | Point of Sale, Inventory, Purchase, Sales, Accounting |
| Online seller | Website, eCommerce, Sales, Inventory, Purchase, Accounting |
| Customer-support operation | CRM, Sales, Helpdesk, Knowledge, Live Chat |

## Common Odoo module-selection mistakes

- Activating too many applications before master data is ready
- Selecting apps without mapping cross-functional processes
- Reproducing legacy workflows without challenging them
- Assuming every country has identical accounting, payroll, or tax features
- Customizing before testing standard configuration
- Ignoring access roles, audit needs, and segregation of duties
- Treating migration as a final technical task instead of a business workstream
- Choosing hosting before understanding customization requirements
- Launching without an upgrade and support plan

## Build a phased Odoo application roadmap

A practical roadmap connects business priorities with dependencies:

1. **Foundation:** companies, users, security, contacts, products, accounting structures, and core master data.
2. **Core transactions:** lead-to-order, procure-to-pay, inventory, production, project delivery, or another primary value stream.
3. **Control and visibility:** approvals, reconciliation, analytics, dashboards, quality, and exception management.
4. **Experience and automation:** portals, eCommerce, marketing automation, self-service, AI assistance, and optimized integrations.
5. **Continuous improvement:** adoption reviews, backlog governance, performance tuning, and version upgrades.

AGSuite Technologies helps businesses assess requirements, select Odoo applications, design connected processes, migrate data, integrate external systems, train users, and support phased growth.

Browse [all Odoo applications](/odoo/apps) or [talk to an Odoo consultant](/odoo#contact).

## Frequently asked questions

### Do we need to implement every Odoo app?

No. Implement the applications required for your priority processes and add others through governed phases. Unnecessary scope increases configuration, migration, testing, and training effort.

### Can Odoo apps share the same data?

Yes. Installed applications use Odoo's shared platform and can connect records and transactions. The exact flow depends on configuration, permissions, edition, localization, and installed modules.

### Can Odoo connect with existing software?

Yes, when the external system provides suitable integration methods. Define the system of record, synchronization direction, frequency, error handling, security, monitoring, and ownership before development.

### Are Odoo Community and Enterprise apps identical?

No. Odoo Community provides the open-source core, while Enterprise includes additional functionality and services. Verify each required capability against the selected edition instead of assuming feature parity.

### When is a custom Odoo module appropriate?

A custom module is appropriate when a validated, high-value requirement cannot be met through standard configuration or a maintainable integration. It should include documentation, tests, ownership, and an upgrade plan.

## Official references

- [Odoo 19 application documentation](https://www.odoo.com/documentation/19.0/applications.html)
- [Odoo Accounting and Invoicing](https://www.odoo.com/documentation/19.0/applications/finance/accounting.html)
- [Odoo supply-chain documentation](https://www.odoo.com/documentation/19.0/applications/inventory_and_mrp.html)
- [Odoo eCommerce documentation](https://www.odoo.com/documentation/19.0/applications/websites/ecommerce.html)
- [Odoo database administration and editions](https://www.odoo.com/documentation/19.0/administration.html)

