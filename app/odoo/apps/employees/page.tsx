import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Employees & HR Management Implementation | AGSuite Technologies",
  description:
    "Centralize employee records, contracts, leave management, expense claims, recruitment pipelines, and payroll with Odoo Employees — implemented and configured by AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Centralized Employee Directory",
    description:
      "Maintain a complete digital employee profile for every team member including contract details, job position, reporting manager, skills, certifications, and emergency contacts.",
  },
  {
    title: "Leave & Time-Off Management",
    description:
      "Configure leave types, accrual policies, and approval workflows. Employees submit leave requests from desktop or mobile, managers approve in one click, and balances update automatically.",
  },
  {
    title: "Attendance & Work Schedule Tracking",
    description:
      "Track employee check-in and check-out via web, mobile app, or kiosk. Define flexible shift schedules, overtime rules, and tardiness thresholds for accurate attendance reporting.",
  },
  {
    title: "Expense Claims & Reimbursement",
    description:
      "Employees submit expense claims with receipt photos from the mobile app. Manager approval workflows and direct accounting integration ensure fast, auditable reimbursements.",
  },
  {
    title: "Recruitment Pipeline & Job Posting",
    description:
      "Manage the full hiring funnel — publish job openings on your website and job boards, track applications by Kanban stage, schedule interviews, and send offer letters from one place.",
  },
  {
    title: "Employee Contracts & Document Management",
    description:
      "Store signed employment contracts, NDAs, compliance documents, and certifications securely in the employee record with electronic signature and document expiry tracking.",
  },
  {
    title: "Skills & Training Management",
    description:
      "Track employee skill sets, competency levels, and completed training courses. Identify skill gaps across teams and plan targeted development programs.",
  },
  {
    title: "Payroll Processing & Payslip Generation",
    description:
      "Automate payroll calculations with configurable salary structures, statutory deductions, allowances, and commission rules. Generate payslips and accounting journal entries automatically.",
  },
  {
    title: "Appraisal & Performance Reviews",
    description:
      "Run structured 360° or manager-led appraisal cycles with rating scales, goal tracking, and feedback templates to support objective performance-based compensation decisions.",
  },
  {
    title: "Organizational Chart & Reporting Structure",
    description:
      "Visualize your company's reporting hierarchy with a live org chart that updates automatically when positions, managers, or departments change.",
  },
  {
    title: "Fleet & Asset Assignment",
    description:
      "Track company vehicles, laptops, phones, and equipment assigned to employees. Manage maintenance schedules, asset returns, and cost attribution per team member.",
  },
  {
    title: "Employee Self-Service Portal",
    description:
      "Empower employees to update personal details, view payslips, check leave balances, submit expenses, and manage timesheets independently through a secure self-service portal.",
  },
];

const benefits = [
  {
    title: "Single source of truth for your workforce",
    description:
      "Eliminate scattered spreadsheets and paper records. Odoo Employees stores every team member's profile, contract, attendance, leave balance, and performance data in one secure, searchable system.",
    points: [
      "Complete digital employee profiles",
      "Contract & document repository",
      "Skills & certification tracking",
      "Real-time org chart updates",
    ],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Automated leave & attendance workflows",
    description:
      "Replace manual leave approval emails and attendance spreadsheets with automated workflows that enforce policy rules, calculate accurate balances, and update payroll data instantly.",
    points: [
      "Mobile leave request submission",
      "Multi-level approval chains",
      "Kiosk & web attendance check-in",
      "Leave calendar team visibility",
    ],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Faster, auditable expense reimbursements",
    description:
      "Employees capture receipts on their phone, submit claims in seconds, and managers approve digitally — eliminating lost receipts, manual calculations, and delayed payments.",
    points: [
      "Mobile receipt photo upload",
      "Manager digital approval",
      "Accounting auto-integration",
      "Expense policy enforcement",
    ],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Structured recruitment & onboarding",
    description:
      "Track every candidate from application to signed offer in one pipeline, coordinate interview schedules, and trigger onboarding checklists automatically when a hire is confirmed.",
    points: [
      "Job board & website posting",
      "Kanban recruitment pipeline",
      "Interview scheduling tools",
      "Onboarding checklist automation",
    ],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Compliant payroll & payslip generation",
    description:
      "Define country-specific salary structures, statutory deductions, and allowances. Odoo calculates payroll automatically and generates formatted payslips with connected accounting entries.",
    points: [
      "Configurable salary structures",
      "Automatic statutory deductions",
      "PDF payslip generation",
      "Payroll accounting integration",
    ],
    image: "/images/Dashboard/accounting and planing dashboard.jpg",
  },
  {
    title: "Data-driven performance management",
    description:
      "Run regular appraisal cycles, track individual goals, collect 360° feedback, and tie performance scores to compensation decisions with structured templates and approval workflows.",
    points: [
      "Structured appraisal templates",
      "360° feedback collection",
      "Goal tracking per employee",
      "Performance-linked compensation",
    ],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo Employees and what HR processes does it cover?",
    a: "Odoo Employees is a comprehensive HR management module covering the full employee lifecycle — from recruitment and onboarding to contract management, leave and attendance tracking, expense reimbursement, payroll processing, performance appraisals, and offboarding. It is suitable for SMBs and growing enterprises looking to replace disparate HR tools with a single integrated platform.",
  },
  {
    q: "How does leave management work in Odoo Employees?",
    a: "HR administrators define leave types (annual, sick, unpaid, compensatory) with accrual rules and approval workflows. Employees submit leave requests from the desktop or Odoo mobile app, selecting dates from a calendar that shows team availability. Managers receive approval notifications, and upon approval, leave balances update automatically and are reflected in payroll calculations.",
  },
  {
    q: "Can employees track their own attendance in Odoo?",
    a: "Yes. Employees can check in and out via the Odoo web interface, the mobile app, or a physical kiosk device. Work schedules define expected hours, and the system tracks real attendance against scheduled shifts — generating overtime, absence, and tardiness reports automatically for HR review.",
  },
  {
    q: "Does Odoo Employees support payroll processing?",
    a: "Yes. Odoo includes a payroll module where HR teams define salary structures with configurable basic pay, allowances, statutory deductions, and commission calculations. Payroll runs generate individual payslips for each employee and create the corresponding accounting journal entries — ensuring payroll and finance remain perfectly synchronized.",
  },
  {
    q: "How does Odoo handle recruitment and applicant tracking?",
    a: "Odoo Recruitment provides a Kanban-based applicant tracking system (ATS). Job positions can be published to your Odoo website, LinkedIn, and other job boards. Applications move through configurable pipeline stages — Screening, Interview, Offer, Hired — with automated email templates at each stage, integrated interview scheduling, and offer letter generation.",
  },
  {
    q: "Can employees submit expense claims from their mobile phones?",
    a: "Yes. The Odoo mobile app allows employees to photograph receipts, categorize expenses, and submit reimbursement claims in under a minute. Managers receive push notifications to approve claims, and upon approval, the expense amount is automatically reconciled in Odoo Accounting and queued for the next payroll reimbursement cycle.",
  },
  {
    q: "Does Odoo Employees include performance appraisals?",
    a: "Yes. Odoo Appraisals enables HR teams to schedule periodic review cycles, assign structured appraisal templates with rating scales and goal sections, collect peer and manager feedback, and record final performance scores. Results feed into compensation review workflows and development plan assignments.",
  },
  {
    q: "How long does an Odoo Employees implementation take?",
    a: "A standard Odoo Employees implementation with AGSuite typically takes 3 to 7 weeks, covering employee data migration, leave policy configuration, contract template setup, payroll salary structure definition, and manager training. Recruitment module setup and payroll go-live may add additional time depending on complexity.",
  },
];

export default function OdooEmployeesPage() {
  return (
    <OdooAppTemplate
      appName="Odoo Employees"
      appLogo="/images/odoo-apps/employees.svg"
      title="Manage Your Entire Workforce From Hire to Retire in One Integrated HR Platform"
      description="Streamline recruitment, contracts, attendance, leave management, expense claims, payroll processing, and performance appraisals with Odoo Employees — fully integrated with your Odoo ecosystem."
      heroImage="/images/people/odoo_team_collaboration_customization.webp"
      overviewImage="/images/people/people_using_odoo.jpg"
      overviewTitle="Complete employee lifecycle management: from first application to final payslip"
      overviewParagraphs={[
        "Odoo Employees gives HR teams a centralized platform to manage every stage of the employee journey — recruiting top talent, onboarding new hires, tracking attendance and leaves, processing payroll, and evaluating performance — all from one connected system.",
        "Because Odoo Employees integrates natively with Accounting, Projects, Helpdesk, and Marketing, workforce costs flow directly into financial reports, employee hours link to project profitability, and team capacity is always visible — eliminating the manual reconciliation that comes with disconnected HR software.",
      ]}
      heroCards={[
        { value: "Full", label: "Employee lifecycle" },
        { value: "Automated", label: "Leave & payroll" },
        { value: "Integrated", label: "Recruitment ATS" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Employee data migration & profile setup",
        "Leave policy & approval workflow configuration",
        "Payroll salary structure & deduction setup",
        "Recruitment pipeline & job board integration",
        "Expense claim & reimbursement workflow",
        "Manager & employee training & go-live support",
      ]}
      faqs={faqs}
    />
  );
}

