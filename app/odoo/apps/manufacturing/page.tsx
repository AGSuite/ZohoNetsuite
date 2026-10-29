import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Manufacturing & MRP Implementation | AGSuite Technologies",
  description:
    "Optimize production planning, multi-level bills of materials (BOM), work center routing, capacity scheduling, quality control, and cost tracking with Odoo MRP consulting and implementation from AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Multi-Level Bills of Materials (BOM)",
    description: "Structure complex parent-child product assemblies, sub-assemblies, kit BOMs, and engineering variants with revision control.",
  },
  {
    title: "Work Center & Routing Management",
    description: "Map work centers with designated machine hourly rates, labor capacities, setup times, and defined routing steps.",
  },
  {
    title: "Master Production Schedule (MPS)",
    description: "Plan short and long-term production runs based on demand forecasts, current stock levels, and open sales commitments.",
  },
  {
    title: "Shop Floor Tablet Interface",
    description: "Equip machine operators with touch-friendly tablet interfaces to log work orders, record time, and access work instructions.",
  },
  {
    title: "Real-Time Capacity & Workload Planning",
    description: "Visualize work center loading, identify machine bottlenecks, and reschedule production orders using interactive Gantt charts.",
  },
  {
    title: "By-Products & Co-Products Tracking",
    description: "Track primary outputs alongside secondary by-products, scrap percentages, and recovery materials with automated cost splits.",
  },
  {
    title: "Integrated Quality Control Points",
    description: "Embed mandatory quality inspections, tolerance checks, and photographic sign-offs directly inside work center operations.",
  },
  {
    title: "Predictive & Preventive Maintenance",
    description: "Link equipment maintenance schedules and emergency repair requests directly to work center capacity planning.",
  },
  {
    title: "Engineering Change Orders (ECO)",
    description: "Manage product revisions, BOM modifications, and routing adjustments with structured engineering approval workflows.",
  },
  {
    title: "Lot & Serial Component Tracking",
    description: "Track individual components and raw material batches into finished goods with full genealogy and recall readiness.",
  },
  {
    title: "Subcontracting & External Processing",
    description: "Manage external manufacturing steps, tracking raw materials issued to subcontractors and finished items received back.",
  },
  {
    title: "Real-Time Manufacturing Costing",
    description: "Calculate exact cost per finished unit factoring direct raw material consumption, machine run-time, and labor hours.",
  },
];

const benefits = [
  {
    title: "Accurate manufacturing cost calculation",
    description: "Uncover true job and product profitability by factoring exact raw material consumption, work center machine rates, and actual operator labor time.",
    points: ["Direct material cost tracking", "Machine run-time & labor attribution", "Real-time scrap cost recording", "Standard vs. actual cost variance"],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Maximized shop floor productivity & OEE",
    description: "Empower operators with clear digital work instructions, paperless time logging, and instant visibility into machine bottlenecks.",
    points: ["Touchscreen tablet operator view", "Live OEE & efficiency tracking", "Digital PDF & video work instructions", "Real-time production reporting"],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Synchronized inventory & material planning",
    description: "Never stall a production line due to missing raw materials. Odoo MRP triggers automated purchase orders and reservations based on production schedules.",
    points: ["Automated component reservations", "Demand-driven material purchasing", "Lead-time scheduling accuracy", "Zero stockout downtime"],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Fewer bottlenecks with visual capacity planning",
    description: "Balance factory workloads across machines and teams using dynamic Gantt charts, drag-and-drop rescheduling, and constraint planning.",
    points: ["Interactive Gantt schedule view", "Work center capacity leveling", "Bottleneck identification", "Flexible order re-sequencing"],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Consistent quality & regulatory compliance",
    description: "Enforce quality gates at critical production stages, preventing defect goods from reaching downstream operations or customer deliveries.",
    points: ["In-process quality checkpoints", "Component lot genealogy tracking", "Failure analysis & corrective actions", "Audit-ready compliance records"],
    image: "/images/people/people_using_odoo.jpg",
  },
  {
    title: "Controlled product revisions with ECOs",
    description: "Protect production integrity during engineering changes through formal approval workflows, version comparisons, and effective-date scheduling.",
    points: ["BOM revision history tracking", "Structured engineering sign-offs", "Side-by-side version comparison", "Automated production updates"],
    image: "/images/odoo/odoo-growth-dashboard.png",
  },
];

const faqs = [
  {
    q: "What is Odoo Manufacturing and what types of manufacturing does it support?",
    a: "Odoo Manufacturing (MRP) is a comprehensive manufacturing resource planning platform supporting discrete manufacturing, process manufacturing, assemble-to-order (ATO), make-to-order (MTO), make-to-stock (MTS), and kit assembly. It manages bills of materials, work centers, routing steps, quality control, maintenance, and job costing.",
  },
  {
    q: "Can Odoo handle complex multi-level Bills of Materials (BOM) and variants?",
    a: "Yes. Odoo supports multi-tiered BOMs with nested sub-assemblies, dynamic routing sequences, by-products, and product variants with variant-specific components. Kit BOMs and phantom BOMs are also natively supported.",
  },
  {
    q: "How does the shop floor tablet interface work for machine operators?",
    a: "Odoo provides a dedicated, touchscreen-optimized Shop Floor application. Operators can scan barcodes, view digital work instructions (PDFs or videos), log work start/stop times, record scrap, trigger maintenance requests, and register quality checks with zero paperwork.",
  },
  {
    q: "How does Odoo MRP calculate manufacturing costs and work center rates?",
    a: "Odoo tracks manufacturing costs by combining the actual cost of consumed raw material components, the machine hourly rate assigned to each work center, and the direct labor cost recorded by operators. Real-time cost breakdown reports show standard vs. actual cost variances.",
  },
  {
    q: "Can Odoo track lots, serial numbers, and component genealogy?",
    a: "Yes. Odoo provides full bidirectional traceability. You can track which specific raw material lot was used in which finished good serial number, and which customer received it—enabling rapid targeted recalls and strict ISO/FDA audit compliance.",
  },
  {
    q: "How does Odoo Manufacturing integrate with Inventory and Purchasing?",
    a: "When a manufacturing order is confirmed, Odoo immediately reserves the required raw materials in Inventory. If components are missing, Odoo's automated replenishment rules can generate Purchase Orders or subcontracting requests, factoring in lead times to ensure materials arrive before production starts.",
  },
  {
    q: "Does Odoo support subcontracting and external manufacturing processes?",
    a: "Yes. Odoo natively handles subcontracting workflows. You can track raw materials shipped to external partner facilities, monitor external production stages, and record the receipt and costing of the finished goods.",
  },
  {
    q: "How long does an Odoo Manufacturing & MRP implementation take?",
    a: "A manufacturing rollout typically requires between 6 to 16 weeks depending on BOM complexity, number of work centers, routing depth, shop floor hardware deployment, and quality management scope. AGSuite delivers a phased implementation ensuring full validation of BOMs and routings before going live.",
  },
];

export default function OdooManufacturingPage() {
  return (
    <OdooAppTemplate
      appName="Odoo Manufacturing"
      appLogo="/images/odoo-apps/manufacturing.svg"
      title="Precision MRP and Shop Floor Execution in One Connected Suite"
      description="Manage multi-level Bills of Materials, schedule production capacity, streamline work center operations, and calculate true manufacturing costs with Odoo MRP."
      heroImage="/images/modules/manufacturing.webp"
      overviewImage="/images/hero/industry_manufacturing_hero.png"
      overviewTitle="Unified shop floor execution, production scheduling, and inventory control"
      overviewParagraphs={[
        "Odoo Manufacturing (MRP II) brings engineering, planning, shop floor operators, and finance together into a synchronized production environment. From multi-tier Bills of Materials (BOM) to dynamic work center routings, production workflows adapt seamlessly to your exact shop floor realities.",
        "By natively uniting with Odoo Inventory, Purchase, Maintenance, Quality, and Accounting, production schedules react instantly to raw material arrivals, machine capacities, and confirmed sales orders—giving plant managers real-time visibility into Overall Equipment Effectiveness (OEE) and actual job costs.",
      ]}
      heroCards={[
        { value: "Multi-level", label: "BOM management" },
        { value: "Live", label: "Shop floor tracking" },
        { value: "Exact", label: "Production costing" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Manufacturing process & shop floor discovery",
        "BOM hierarchy & routing architecture",
        "Work center setup & labor rate modeling",
        "Inventory & procurement integration",
        "Operator tablet & shop floor rollout",
        "Plant manager training & go-live support",
      ]}
      faqs={faqs}
    />
  );
}

