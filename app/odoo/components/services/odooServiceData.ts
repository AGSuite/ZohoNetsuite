export interface OdooServiceContent {
  slug: string;
  name: string;
  title: string;
  description: string;
  image: string;
  overviewTitle: string;
  overviewParagraphs: string[];
  highlights: Array<{ value: string; label: string }>;
  capabilities: Array<{ title: string; description: string }>;
  process: Array<{ title: string; description: string }>;
  outcomes: Array<{ title: string; description: string }>;
  engagementPoints: string[];
  faqs: Array<{ q: string; a: string }>;
  metaDescription: string;
}

const imageRoot = "/images/odoo-services/generated-v2";

export const odooServices: OdooServiceContent[] = [
  {
    slug: "consulting",
    name: "Odoo Consulting",
    title: "Build the Right Odoo Roadmap Before You Configure",
    description: "Turn business priorities into a practical Odoo strategy, solution architecture, and phased rollout plan built for measurable results.",
    image: `${imageRoot}/odoo-consulting-v2.webp`,
    overviewTitle: "Clarity before configuration",
    overviewParagraphs: [
      "A successful Odoo program starts with a clear understanding of your processes, priorities, constraints, and desired outcomes—not a list of features.",
      "AGSuite brings business and technology teams together to assess the current state, identify improvement opportunities, select the right Odoo applications, and define a realistic delivery roadmap.",
    ],
    highlights: [{ value: "01", label: "Business-first strategy" }, { value: "02", label: "Phased rollout plan" }, { value: "03", label: "Clear solution scope" }],
    capabilities: [
      { title: "Process Discovery", description: "Map current workflows, pain points, controls, and dependencies across teams." },
      { title: "Fit-Gap Assessment", description: "Compare business requirements with standard Odoo capabilities and identify true gaps." },
      { title: "Solution Architecture", description: "Define applications, data, integrations, security, and the target operating model." },
      { title: "Application Selection", description: "Choose the Odoo apps and editions that support current priorities and future growth." },
      { title: "Rollout Roadmap", description: "Sequence work into achievable phases with owners, milestones, risks, and outcomes." },
      { title: "Business Case", description: "Connect the program to operational value, adoption measures, and investment decisions." },
    ],
    process: [
      { title: "Discover", description: "Understand goals, teams, processes, systems, and pain points." },
      { title: "Assess", description: "Evaluate fit, gaps, dependencies, readiness, and delivery risk." },
      { title: "Design", description: "Shape the future solution, governance, and operating model." },
      { title: "Plan", description: "Create the phased roadmap, scope, effort, and success measures." },
    ],
    outcomes: [
      { title: "Aligned stakeholders", description: "One shared view of the program, priorities, and expected results." },
      { title: "Controlled scope", description: "Clear boundaries that reduce rework and unnecessary customization." },
      { title: "Lower delivery risk", description: "Dependencies and decisions are addressed before implementation begins." },
      { title: "Faster value", description: "A phased plan focuses investment on the most valuable capabilities first." },
    ],
    engagementPoints: ["Executive and team workshops", "Current-state process review", "Odoo fit-gap analysis", "Architecture and integration blueprint", "Phased implementation roadmap", "Scope and effort recommendations"],
    faqs: [
      { q: "What is included in Odoo consulting?", a: "Odoo consulting can include process discovery, fit-gap analysis, application selection, solution architecture, integration planning, roadmap creation, and implementation scoping." },
      { q: "When should we engage an Odoo consultant?", a: "Consulting is most valuable before a new implementation, major expansion, rescue project, version upgrade, or when an existing Odoo environment is no longer supporting the business effectively." },
      { q: "Can AGSuite review our existing Odoo setup?", a: "Yes. We can assess configuration, custom modules, integrations, data quality, security, adoption, and performance, then provide prioritized recommendations." },
      { q: "How long does an Odoo consulting engagement take?", a: "A focused assessment may take two to four weeks. Broader multi-company or transformation programs may require a longer discovery period depending on scope and stakeholder availability." },
      { q: "Do we receive a documented roadmap?", a: "Yes. The engagement concludes with practical documentation covering scope, architecture, phases, dependencies, risks, priorities, and recommended next steps." },
    ],
    metaDescription: "Odoo consulting services for process discovery, fit-gap assessment, solution architecture, application selection, and phased implementation planning.",
  },
  {
    slug: "implementation",
    name: "Odoo Implementation",
    title: "Launch Odoo with a Controlled, Business-Ready Plan",
    description: "Configure, validate, and launch Odoo around your real processes with clear milestones, accountable delivery, and confident users.",
    image: `${imageRoot}/odoo-implementation-v2.webp`,
    overviewTitle: "From requirements to a dependable go-live",
    overviewParagraphs: ["Odoo implementation is more than technical configuration. It requires strong process decisions, reliable data, practical testing, and users who are ready to work differently.", "AGSuite manages the complete journey—from discovery and solution design through configuration, migration, testing, training, cutover, and post-go-live stabilization."],
    highlights: [{ value: "01", label: "Structured delivery" }, { value: "02", label: "Validated data" }, { value: "03", label: "Confident go-live" }],
    capabilities: [
      { title: "Discovery & Design", description: "Translate business requirements into agreed future-state processes and solution designs." },
      { title: "Odoo Configuration", description: "Configure applications, roles, approvals, taxes, warehouses, and operating rules." },
      { title: "Data Migration", description: "Prepare, map, load, and reconcile master and transactional data." },
      { title: "Integration Delivery", description: "Connect required commerce, payment, logistics, banking, and business systems." },
      { title: "Testing & UAT", description: "Validate end-to-end scenarios, permissions, controls, data, and exception handling." },
      { title: "Training & Go-Live", description: "Prepare users, execute cutover, and stabilize the platform after launch." },
    ],
    process: [{ title: "Discover", description: "Confirm objectives, scope, processes, data, and success measures." }, { title: "Configure", description: "Build the solution in controlled iterations with regular business reviews." }, { title: "Validate", description: "Migrate trial data and complete functional, integration, and user testing." }, { title: "Launch", description: "Train teams, execute cutover, and provide focused hypercare." }],
    outcomes: [{ title: "Reliable operations", description: "Core workflows are configured and tested around real business scenarios." }, { title: "One connected platform", description: "Teams and data work together across selected Odoo applications." }, { title: "Stronger adoption", description: "Role-based preparation helps users become productive from launch." }, { title: "Scalable foundation", description: "Governed configuration supports future apps, entities, and process growth." }],
    engagementPoints: ["Process and requirements workshops", "Solution design and configuration", "Data migration and reconciliation", "Integration development", "Testing and user acceptance", "Training, cutover, and hypercare"],
    faqs: [{ q: "How long does an Odoo implementation take?", a: "A focused implementation may take 6 to 12 weeks, while broader multi-app or multi-company programs can take longer depending on data, integrations, customization, and availability of business users." }, { q: "Can implementation be delivered in phases?", a: "Yes. A phased rollout often reduces risk and helps teams realize value sooner by prioritizing the most important applications and processes." }, { q: "Does AGSuite handle data migration and integrations?", a: "Yes. Both can be included in the implementation scope, with mapping, validation, testing, monitoring, and reconciliation built into the delivery plan." }, { q: "How are users involved during implementation?", a: "Process owners participate in design reviews, validation, user acceptance testing, training, and go-live readiness decisions." }, { q: "What happens after go-live?", a: "We provide hypercare to stabilize operations, resolve early issues, support users, and transition the platform into an agreed managed support model." }],
    metaDescription: "End-to-end Odoo implementation services covering discovery, configuration, migration, integrations, testing, training, go-live, and support.",
  },
  {
    slug: "customization",
    name: "Odoo Customization",
    title: "Adapt Odoo Without Losing Control or Upgradeability",
    description: "Tailor Odoo workflows, screens, approvals, reports, and modules where standard configuration cannot fully support your business.",
    image: `${imageRoot}/odoo-customization-v2.webp`,
    overviewTitle: "Purposeful customization that stays maintainable",
    overviewParagraphs: ["Customization should solve a defined business need—not recreate legacy complexity inside a modern platform.", "AGSuite first evaluates configuration and process alternatives, then designs focused extensions using clean development standards, documentation, testing, and upgrade-aware architecture."],
    highlights: [{ value: "01", label: "Business-fit workflows" }, { value: "02", label: "Upgrade-aware design" }, { value: "03", label: "Tested extensions" }],
    capabilities: [{ title: "Workflow Tailoring", description: "Create business-specific stages, rules, alerts, and automated actions." }, { title: "Views & Fields", description: "Adapt forms, lists, menus, and fields for different user roles." }, { title: "Approvals & Controls", description: "Implement authorization levels, exceptions, audit points, and validations." }, { title: "Reports & Documents", description: "Build operational reports, dashboards, invoices, and document layouts." }, { title: "Custom Modules", description: "Develop focused modules for requirements not covered by standard Odoo." }, { title: "Testing & Documentation", description: "Protect quality with review, test coverage, deployment notes, and user guidance." }],
    process: [{ title: "Assess", description: "Confirm the need and evaluate standard configuration alternatives." }, { title: "Design", description: "Define behavior, user experience, data model, and acceptance criteria." }, { title: "Build", description: "Develop in a controlled environment using maintainable standards." }, { title: "Validate", description: "Test, document, deploy, and monitor the enhancement." }],
    outcomes: [{ title: "Better process fit", description: "Odoo supports the workflows and controls that differentiate your operations." }, { title: "Simpler user experience", description: "Role-focused screens reduce friction and unnecessary steps." }, { title: "Controlled technical debt", description: "Documented, modular extensions remain easier to maintain and upgrade." }, { title: "Measurable automation", description: "Targeted enhancements remove manual work and improve consistency." }],
    engagementPoints: ["Customization fit assessment", "Functional and technical design", "Workflow and approval automation", "Custom module development", "Reports and document layouts", "Testing, deployment, and documentation"],
    faqs: [{ q: "When should Odoo be customized?", a: "Customization is appropriate when a validated business requirement cannot be met effectively through standard Odoo configuration or a reasonable process adjustment." }, { q: "Will customization affect future upgrades?", a: "Any custom code can affect upgrades. We reduce this risk through focused scope, modular design, coding standards, documentation, and compatibility testing." }, { q: "Can you improve existing custom modules?", a: "Yes. We can review code quality, performance, security, maintainability, and functional fit before recommending remediation or replacement." }, { q: "Do you customize reports and documents?", a: "Yes. We create operational reports, dashboards, print layouts, invoices, quotations, labels, and other documents aligned with business needs." }, { q: "How is customization tested?", a: "We use documented acceptance criteria, developer testing, functional validation, regression checks, and user acceptance testing before production deployment." }],
    metaDescription: "Odoo customization services for workflows, views, approvals, reports, documents, automation, and maintainable custom module development.",
  },
  {
    slug: "integration",
    name: "Odoo Integration",
    title: "Connect Odoo with the Systems Your Business Depends On",
    description: "Create secure, reliable data flows between Odoo and commerce, payments, logistics, banking, productivity, and legacy platforms.",
    image: `${imageRoot}/odoo-integration-v2.webp`,
    overviewTitle: "Connected systems, consistent operations",
    overviewParagraphs: ["Disconnected applications create duplicate effort, delayed decisions, and unreliable data. The right integration makes Odoo part of a coordinated business ecosystem.", "AGSuite designs integrations around business events, data ownership, exception handling, security, and monitoring—not just endpoints."],
    highlights: [{ value: "01", label: "Reliable data flows" }, { value: "02", label: "Secure architecture" }, { value: "03", label: "Visible exceptions" }],
    capabilities: [{ title: "API Integration", description: "Build secure connections using appropriate Odoo and third-party APIs." }, { title: "Data Mapping", description: "Define ownership, transformations, validation rules, and synchronization frequency." }, { title: "Commerce Connections", description: "Connect Shopify, WooCommerce, Amazon, marketplaces, and storefronts." }, { title: "Payments & Logistics", description: "Integrate gateways, carriers, shipping platforms, banks, and fulfilment tools." }, { title: "Legacy Systems", description: "Exchange critical data with established databases and business applications." }, { title: "Monitoring & Recovery", description: "Track failures, manage retries, alert owners, and protect data integrity." }],
    process: [{ title: "Map", description: "Identify systems, business events, data ownership, volumes, and controls." }, { title: "Architect", description: "Choose the integration pattern, security model, and recovery approach." }, { title: "Connect", description: "Build and validate end-to-end flows in a controlled environment." }, { title: "Monitor", description: "Deploy observability, alerts, support procedures, and continuous improvement." }],
    outcomes: [{ title: "Less duplicate work", description: "Information moves automatically between the systems that need it." }, { title: "More reliable data", description: "Validation and ownership rules reduce conflicts and inconsistencies." }, { title: "Faster operations", description: "Orders, payments, stock, and customer updates flow without manual delay." }, { title: "Controlled exceptions", description: "Monitoring and recovery processes make failures visible and actionable." }],
    engagementPoints: ["Integration landscape assessment", "API and security architecture", "Field mapping and transformations", "Connector and middleware development", "End-to-end and volume testing", "Monitoring, alerts, and support handover"],
    faqs: [{ q: "Which systems can Odoo integrate with?", a: "Odoo can connect with commerce platforms, marketplaces, payment gateways, banks, shipping providers, CRM tools, productivity suites, data platforms, and custom or legacy systems that expose usable interfaces." }, { q: "Do you support real-time and scheduled integrations?", a: "Yes. We select real-time, event-driven, scheduled, or batch patterns based on business urgency, volume, reliability, and platform constraints." }, { q: "How do you protect integration data?", a: "We apply appropriate authentication, authorization, encryption, secret management, validation, logging, and least-privilege access controls." }, { q: "What happens if an integration fails?", a: "Well-designed integrations include logging, alerting, retries, reconciliation, and clear ownership so failures can be detected and resolved without silent data loss." }, { q: "Can you repair an existing Odoo integration?", a: "Yes. We can diagnose mapping errors, performance issues, authentication failures, duplication, missing records, and unreliable exception handling." }],
    metaDescription: "Odoo integration services for APIs, commerce, payments, logistics, banking, legacy systems, monitoring, and reliable cross-platform data flows.",
  },
  {
    slug: "data-migration",
    name: "Odoo Data Migration",
    title: "Move Business-Critical Data into Odoo with Confidence",
    description: "Clean, map, validate, reconcile, and migrate the data your teams need through a controlled and auditable cutover process.",
    image: `${imageRoot}/odoo-data-migration-v2.webp`,
    overviewTitle: "Migration built around accuracy and continuity",
    overviewParagraphs: ["Reliable Odoo operations depend on reliable data. Migration must address quality, ownership, transformation rules, reconciliation, and cutover—not simply import files.", "AGSuite uses staged trial migrations and business validation to reduce surprises before production go-live."],
    highlights: [{ value: "01", label: "Cleansed source data" }, { value: "02", label: "Trial migrations" }, { value: "03", label: "Reconciled results" }],
    capabilities: [{ title: "Data Audit", description: "Profile sources, volumes, quality issues, ownership, and retention needs." }, { title: "Cleansing & Preparation", description: "Standardize, deduplicate, enrich, and prepare records for migration." }, { title: "Mapping & Transformation", description: "Align source structures and values with the target Odoo data model." }, { title: "Trial Loads", description: "Run repeatable migrations to expose issues before production cutover." }, { title: "Validation & Reconciliation", description: "Verify counts, balances, relationships, completeness, and business usability." }, { title: "Cutover & Archive", description: "Execute final migration and preserve required historical access and evidence." }],
    process: [{ title: "Audit", description: "Inventory sources and assess quality, ownership, volume, and history." }, { title: "Prepare", description: "Clean, map, transform, and approve migration rules." }, { title: "Validate", description: "Run trial loads and reconcile results with business owners." }, { title: "Migrate", description: "Complete cutover, final checks, sign-off, and support." }],
    outcomes: [{ title: "Trusted information", description: "Users begin with cleaner, validated, and usable business data." }, { title: "Reduced cutover risk", description: "Trial runs expose mapping and quality issues before go-live." }, { title: "Clear audit trail", description: "Rules, results, exceptions, and approvals are documented." }, { title: "Faster user adoption", description: "Familiar and accurate records help teams work confidently from day one." }],
    engagementPoints: ["Source data and quality assessment", "Cleansing and deduplication rules", "Field and value mapping", "Repeatable trial migrations", "Financial and operational reconciliation", "Production cutover and validation"],
    faqs: [{ q: "What data can be migrated into Odoo?", a: "Typical scope includes customers, vendors, products, charts of accounts, opening balances, invoices, orders, inventory, employees, projects, attachments, and selected transaction history." }, { q: "Can you migrate from spreadsheets or legacy ERP systems?", a: "Yes. We work with structured files, databases, exports, APIs, and legacy platforms, subject to source accessibility and data quality." }, { q: "How do you verify migrated data?", a: "Validation includes record counts, control totals, balances, relationships, samples, exception reports, and business-owner sign-off." }, { q: "Do we need to migrate all historical data?", a: "Not always. We help determine the right balance between operational needs, reporting, compliance, cost, and access to archived history." }, { q: "How is downtime minimized?", a: "We rehearse the migration, measure load times, define a data freeze, prepare delta loads where appropriate, and use a detailed cutover checklist." }],
    metaDescription: "Odoo data migration services covering data audit, cleansing, mapping, trial loads, validation, reconciliation, cutover, and historical data planning.",
  },
  {
    slug: "version-upgrade",
    name: "Odoo Version Upgrade",
    title: "Upgrade Odoo Safely Without Disrupting Operations",
    description: "Modernize your Odoo environment while protecting critical data, integrations, custom modules, user workflows, and business continuity.",
    image: `${imageRoot}/odoo-version-upgrade-v2.webp`,
    overviewTitle: "A controlled path to a modern Odoo platform",
    overviewParagraphs: ["An Odoo upgrade affects much more than the core application. Custom code, integrations, reports, data, infrastructure, and user behavior all require structured review.", "AGSuite assesses the full environment, resolves compatibility issues, rehearses the upgrade, supports business testing, and plans cutover around operational risk."],
    highlights: [{ value: "01", label: "Compatibility review" }, { value: "02", label: "Rehearsed cutover" }, { value: "03", label: "Protected continuity" }],
    capabilities: [{ title: "Environment Assessment", description: "Review version, hosting, database, apps, usage, and technical health." }, { title: "Module Compatibility", description: "Evaluate standard, third-party, and custom modules against the target version." }, { title: "Code Remediation", description: "Update or replace incompatible customizations and integration components." }, { title: "Upgrade Rehearsal", description: "Run repeatable test upgrades and record issues, timing, and resolutions." }, { title: "Business Validation", description: "Complete regression testing and user acceptance across critical workflows." }, { title: "Cutover & Hypercare", description: "Execute the upgrade with rollback planning and focused post-launch support." }],
    process: [{ title: "Assess", description: "Inventory the environment and identify compatibility and continuity risks." }, { title: "Prepare", description: "Remediate code, clean data, update integrations, and define test coverage." }, { title: "Rehearse", description: "Run trial upgrades and complete business regression testing." }, { title: "Upgrade", description: "Execute controlled cutover, validate operations, and stabilize." }],
    outcomes: [{ title: "Current capabilities", description: "Access newer Odoo features, experience, security, and platform improvements." }, { title: "Reduced technical debt", description: "Obsolete or fragile customizations are rationalized during preparation." }, { title: "Protected workflows", description: "Critical processes and integrations are regression-tested before cutover." }, { title: "Predictable transition", description: "Rehearsal and rollback planning reduce operational surprises." }],
    engagementPoints: ["Technical and functional health check", "Custom module compatibility review", "Integration and report remediation", "Test upgrade rehearsals", "Regression testing and UAT", "Cutover, rollback, and hypercare plan"],
    faqs: [{ q: "When should we upgrade Odoo?", a: "Upgrade planning is appropriate when your version approaches end of support, newer capabilities provide value, security or compatibility concerns emerge, or technical debt limits improvement." }, { q: "Will our custom modules continue to work?", a: "They must be assessed and may require code changes or replacement. We identify compatibility gaps early and test remediated modules before production cutover." }, { q: "Can we upgrade across multiple Odoo versions?", a: "Often yes, but the approach depends on source version, edition, hosting, custom code, third-party modules, data volume, and the supported migration path." }, { q: "How is business disruption reduced?", a: "We use test upgrades, regression coverage, measured cutover rehearsals, clear data-freeze rules, rollback planning, and hypercare." }, { q: "Can an upgrade also simplify our setup?", a: "Yes. It is a useful opportunity to retire unused modules, remove obsolete customization, improve configuration, and standardize processes." }],
    metaDescription: "Odoo version upgrade services for assessment, module compatibility, code remediation, rehearsal, regression testing, cutover, and hypercare.",
  },
  {
    slug: "training-adoption",
    name: "Odoo Training & Adoption",
    title: "Help Every Team Use Odoo with Confidence",
    description: "Prepare administrators, process owners, and end users with role-based learning grounded in their real daily responsibilities.",
    image: `${imageRoot}/odoo-training-adoption-v2.webp`,
    overviewTitle: "Turn a successful launch into lasting adoption",
    overviewParagraphs: ["Technology creates value only when people understand how and why to use it. Generic demonstrations are rarely enough for lasting change.", "AGSuite builds training around configured workflows, user roles, common scenarios, exceptions, and measurable adoption needs."],
    highlights: [{ value: "01", label: "Role-based learning" }, { value: "02", label: "Real scenarios" }, { value: "03", label: "Lasting adoption" }],
    capabilities: [{ title: "Training Needs Analysis", description: "Map user groups, responsibilities, skill levels, and learning priorities." }, { title: "Administrator Enablement", description: "Prepare internal owners to manage users, configuration, and first-line support." }, { title: "End-User Training", description: "Teach daily workflows through relevant, role-specific business scenarios." }, { title: "Guides & Learning Assets", description: "Create concise job aids, recordings, process guides, and reference material." }, { title: "Super-User Network", description: "Build internal champions who reinforce good practice and support colleagues." }, { title: "Adoption Support", description: "Monitor usage, address friction, refresh learning, and improve processes." }],
    process: [{ title: "Understand", description: "Identify audiences, tasks, readiness, risks, and desired behaviors." }, { title: "Prepare", description: "Build role-based plans, environments, scenarios, and learning assets." }, { title: "Train", description: "Deliver practical sessions with exercises and knowledge checks." }, { title: "Reinforce", description: "Support users, measure adoption, and close learning gaps." }],
    outcomes: [{ title: "Faster proficiency", description: "Users learn the exact workflows and decisions required for their roles." }, { title: "Fewer process errors", description: "Practical exercises reinforce correct data entry and exception handling." }, { title: "Stronger ownership", description: "Administrators and super users become capable internal platform advocates." }, { title: "Sustained value", description: "Ongoing adoption support helps new behaviors become normal operations." }],
    engagementPoints: ["Role and readiness assessment", "Customized training curriculum", "Administrator and super-user enablement", "Instructor-led end-user sessions", "Job aids and process guides", "Post-launch adoption support"],
    faqs: [{ q: "Who should receive Odoo training?", a: "Training should cover system administrators, process owners, managers, end users, and internal support teams, with different content for each role." }, { q: "Is training based on our configured Odoo system?", a: "Yes. Effective training uses your workflows, terminology, roles, data examples, and common business scenarios rather than generic product demonstrations." }, { q: "Can training be delivered remotely?", a: "Yes. We support remote, on-site, and blended delivery depending on team locations, audience size, and learning needs." }, { q: "Do you provide training materials?", a: "Yes. Depending on scope, materials can include role guides, quick references, exercises, recordings, process maps, and administrator documentation." }, { q: "How do you support adoption after go-live?", a: "We can provide office hours, refresher sessions, usage reviews, super-user coaching, issue analysis, and targeted learning for areas with low adoption." }],
    metaDescription: "Role-based Odoo training and adoption services for administrators, process owners, super users, end users, learning content, and post-launch support.",
  },
  {
    slug: "managed-support",
    name: "Odoo Managed Support",
    title: "Keep Odoo Reliable, Secure, and Continuously Improving",
    description: "Give users dependable support while proactively managing platform health, enhancements, releases, and changing business needs.",
    image: `${imageRoot}/odoo-managed-support-v2.webp`,
    overviewTitle: "Support that goes beyond fixing tickets",
    overviewParagraphs: ["After go-live, Odoo must keep pace with changing teams, processes, integrations, and priorities. Reactive support alone cannot protect long-term value.", "AGSuite combines functional assistance, technical resolution, platform monitoring, controlled enhancements, and regular service reviews in one managed model."],
    highlights: [{ value: "01", label: "Responsive helpdesk" }, { value: "02", label: "Proactive monitoring" }, { value: "03", label: "Continuous improvement" }],
    capabilities: [{ title: "Functional Support", description: "Help users resolve process, configuration, reporting, and application questions." }, { title: "Technical Support", description: "Investigate defects, integrations, custom code, performance, and infrastructure issues." }, { title: "Incident & Request Management", description: "Prioritize and track work through agreed severity, ownership, and response targets." }, { title: "Monitoring & Health Checks", description: "Review availability, jobs, errors, integrations, capacity, and technical health." }, { title: "Enhancements & Releases", description: "Plan, test, and deploy improvements through a governed release process." }, { title: "Service Reporting", description: "Review trends, recurring causes, service levels, backlog, and improvement priorities." }],
    process: [{ title: "Stabilize", description: "Understand the environment, backlog, risks, priorities, and support model." }, { title: "Support", description: "Resolve incidents and requests with clear ownership and communication." }, { title: "Improve", description: "Address root causes and deliver controlled platform enhancements." }, { title: "Review", description: "Use service data and business feedback to agree the next priorities." }],
    outcomes: [{ title: "Dependable operations", description: "Users have a clear route to help when business processes are disrupted." }, { title: "Fewer recurring issues", description: "Root-cause analysis and proactive reviews improve platform stability." }, { title: "Controlled change", description: "Enhancements are prioritized, tested, documented, and released safely." }, { title: "More platform value", description: "Odoo continues to evolve with business priorities after implementation." }],
    engagementPoints: ["Functional and technical helpdesk", "Incident and request prioritization", "Platform and integration monitoring", "Root-cause and performance analysis", "Enhancement and release management", "Regular service and roadmap reviews"],
    faqs: [{ q: "What does Odoo managed support include?", a: "Scope can include functional assistance, technical troubleshooting, monitoring, incident and request management, small enhancements, release management, health checks, and service reporting." }, { q: "Can AGSuite support an Odoo system implemented by another partner?", a: "Yes. We begin with a structured transition and environment assessment to understand configuration, custom code, integrations, documentation, risks, and open issues." }, { q: "How are requests prioritized?", a: "Requests are classified by business impact, urgency, type, and agreed service targets, with transparent status and ownership throughout resolution." }, { q: "Does support include new enhancements?", a: "It can. We separate incidents from planned improvements and use a governed backlog, estimation, testing, approval, and release process." }, { q: "How do you improve support over time?", a: "We review ticket trends, recurring causes, platform health, adoption feedback, backlog, and business priorities to recommend preventive and improvement actions." }],
    metaDescription: "Odoo managed support services covering functional helpdesk, technical resolution, monitoring, incidents, enhancements, releases, and continuous improvement.",
  },
];

export const odooServiceBySlug = Object.fromEntries(odooServices.map((service) => [service.slug, service])) as Record<string, OdooServiceContent>;
