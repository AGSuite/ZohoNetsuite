import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Marketing Automation & Email Campaign Implementation | AGSuite Technologies",
  description:
    "Run targeted email campaigns, automate multi-step marketing workflows, manage social media, track conversion funnels, and generate qualified leads with Odoo Marketing — implemented by AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Drag-and-Drop Email Campaign Builder",
    description:
      "Design beautiful, mobile-responsive email newsletters and promotional campaigns using Odoo's block editor — no HTML knowledge required. Personalize content dynamically with CRM field merge tags.",
  },
  {
    title: "Marketing Automation & Drip Sequences",
    description:
      "Build multi-step automated workflows triggered by contact actions — form submissions, link clicks, email opens, or lifecycle stage changes — to deliver the right message at the right time.",
  },
  {
    title: "Segmentation & Targeted Mailing Lists",
    description:
      "Create dynamic contact segments based on CRM fields, purchase history, lead score, industry, or behavioral triggers to deliver highly relevant campaigns to the right audience.",
  },
  {
    title: "SMS Marketing Campaigns",
    description:
      "Send targeted SMS messages and promotional texts to opted-in contacts directly from Odoo — with delivery tracking, reply handling, and CRM activity logging.",
  },
  {
    title: "Social Media Management & Scheduling",
    description:
      "Plan, compose, and schedule posts across Facebook, Twitter, LinkedIn, and Instagram from a single Odoo calendar view. Monitor engagement metrics and audience growth per channel.",
  },
  {
    title: "Landing Pages & Lead Capture Forms",
    description:
      "Build conversion-optimized landing pages with embedded lead capture forms that automatically create CRM leads, assign to sales teams, and trigger follow-up sequences.",
  },
  {
    title: "A/B Testing for Campaigns",
    description:
      "Test multiple subject lines, email content blocks, or send times against a sample audience and automatically promote the winning variant to the full contact list.",
  },
  {
    title: "Campaign Performance Analytics",
    description:
      "Track open rates, click-through rates, bounce rates, unsubscribes, and revenue attributed per campaign — with detailed per-link and per-contact engagement reporting.",
  },
  {
    title: "Lead Scoring & Nurturing",
    description:
      "Assign score points for contact behaviors — email opens, website visits, form fills — and automatically escalate high-scoring leads to sales with a hot lead notification.",
  },
  {
    title: "Event Management & Webinar Promotion",
    description:
      "Create event pages, manage registrations, send automated confirmation and reminder emails, and track post-event attendee engagement for follow-up campaigns.",
  },
  {
    title: "Unsubscribe & GDPR Compliance Management",
    description:
      "Manage opt-in consent, unsubscribe preferences, and GDPR data rights requests with built-in compliance tools including suppression lists and consent date tracking.",
  },
  {
    title: "Unified CRM & Sales Integration",
    description:
      "Marketing campaign interactions feed directly into CRM contact timelines — sales reps see every email opened, link clicked, and form submitted before making their first call.",
  },
];

const benefits = [
  {
    title: "Generate more qualified leads automatically",
    description:
      "Multi-step drip sequences, behavioral lead scoring, and automated CRM hand-off ensure that only sales-ready, engaged prospects land on your team's to-do list — not cold, unqualified contacts.",
    points: [
      "Behavioral trigger automation",
      "Lead scoring & qualification",
      "Automated CRM lead creation",
      "Sales team hot-lead alerts",
    ],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Run campaigns without a developer",
    description:
      "Marketing teams design, personalize, segment, schedule, and analyze email and SMS campaigns entirely within Odoo — without relying on IT or HTML developers for routine campaign execution.",
    points: [
      "No-code email block editor",
      "Dynamic personalization tags",
      "One-click send & schedule",
      "Mobile-responsive previews",
    ],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Increase engagement with precise segmentation",
    description:
      "Send the right message to the right audience by segmenting contacts dynamically based on purchase behavior, CRM stage, product interest, and campaign engagement history.",
    points: [
      "Dynamic list segmentation",
      "Behavioral audience filters",
      "Purchase history targeting",
      "Lifecycle-stage campaigns",
    ],
    image: "/images/Dashboard/accounting and planing dashboard.jpg",
  },
  {
    title: "Attribute revenue directly to campaigns",
    description:
      "Connect marketing campaigns to closed CRM deals and eCommerce orders to calculate true return on investment per campaign, channel, and target audience segment.",
    points: [
      "CRM opportunity attribution",
      "eCommerce revenue tracking",
      "Campaign ROI dashboards",
      "Cost-per-lead analysis",
    ],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Manage all social media from one calendar",
    description:
      "Plan and schedule content across every social channel from a unified Odoo content calendar — eliminating the need for third-party tools like Buffer or Hootsuite.",
    points: [
      "Multi-channel post scheduling",
      "Unified content calendar",
      "Engagement metrics tracking",
      "Audience growth reporting",
    ],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Stay GDPR-compliant with built-in consent tools",
    description:
      "Odoo's marketing tools include native consent management, unsubscribe handling, suppression lists, and data subject request workflows to keep your campaigns legally compliant.",
    points: [
      "Opt-in consent date tracking",
      "One-click unsubscribe handling",
      "GDPR data request tools",
      "Suppression list management",
    ],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What marketing tools does Odoo include?",
    a: "Odoo Marketing covers email campaign management, marketing automation and drip sequences, SMS marketing, social media scheduling, landing page and lead form builders, A/B testing, event promotion, lead scoring, and campaign analytics — all in one platform natively connected to Odoo CRM, Website, and eCommerce.",
  },
  {
    q: "How does Odoo marketing automation work?",
    a: "Odoo's marketing automation module lets you build visual multi-step workflows triggered by specific contact actions or conditions — such as form submissions, email link clicks, lead score thresholds, or CRM stage changes. Each trigger can send an email, update a CRM field, assign a task to a sales rep, or wait a defined number of days before the next action.",
  },
  {
    q: "Can Odoo segment contacts for targeted campaigns?",
    a: "Yes. Odoo supports both static and dynamic mailing lists. Dynamic segments update automatically based on filter rules — for example, all contacts in the Manufacturing industry with a lead score above 50 who clicked an email in the last 30 days. Segments draw from CRM, eCommerce purchase history, and website behavior data.",
  },
  {
    q: "Does Odoo support A/B testing for email campaigns?",
    a: "Yes. Odoo Email Marketing allows you to create multiple variants of a campaign — testing different subject lines, from names, or email content blocks — against a defined percentage sample of your audience. After a set period, Odoo automatically identifies the winning variant and sends it to the remaining contacts.",
  },
  {
    q: "How does Odoo Marketing integrate with the CRM and Sales team?",
    a: "Every email campaign interaction is logged on the corresponding CRM contact record — opens, clicks, form submissions, unsubscribes. When a contact reaches a qualifying lead score, Odoo can automatically create a CRM opportunity, assign it to the appropriate sales rep, and send a notification so the sales team can follow up while interest is highest.",
  },
  {
    q: "Can Odoo send SMS marketing campaigns?",
    a: "Yes. Odoo SMS Marketing allows you to send targeted text messages to opted-in contacts with merge tag personalization. Delivery status is tracked per recipient, and replies can be captured back into the contact's CRM communication thread. SMS campaigns can also be included as steps within marketing automation workflows.",
  },
  {
    q: "Does Odoo help manage GDPR and marketing consent?",
    a: "Yes. Odoo includes native tools for tracking contact opt-in consent with timestamps, managing double opt-in confirmation workflows, processing one-click unsubscribes, maintaining suppression lists, and handling GDPR data subject requests — ensuring your campaigns comply with GDPR, CAN-SPAM, and other email marketing regulations.",
  },
  {
    q: "How long does an Odoo Marketing implementation take?",
    a: "A standard Odoo Marketing implementation with AGSuite takes 3 to 6 weeks depending on the number of automation workflows, email template designs, CRM integration complexity, and list migration size. We configure campaign templates, build initial automation sequences, integrate with your website lead forms, and train your marketing team before handover.",
  },
];

export default function OdooMarketingPage() {
  return (
    <OdooAppTemplate
      appName="Odoo Marketing"
      appLogo="/images/odoo-apps/marketing.svg"
      title="Attract, Nurture, and Convert Leads With Fully Automated Odoo Marketing"
      description="Run targeted email campaigns, build multi-step marketing automation workflows, score and qualify leads, schedule social media content, and measure true campaign ROI — all connected to your Odoo CRM and eCommerce."
      heroImage="/images/Dashboard/odoo_command_dashboard.webp"
      overviewImage="/images/Dashboard/odoo_live_operations_dashboard.webp"
      overviewTitle="From first touch to closed deal: automated marketing that works while you sleep"
      overviewParagraphs={[
        "Odoo Marketing gives your team a complete campaign management platform — email, SMS, social media, landing pages, and marketing automation — all natively integrated with CRM, eCommerce, and your Odoo website so every campaign interaction becomes traceable, actionable data.",
        "Unlike standalone tools like Mailchimp or HubSpot that require manual CRM sync, Odoo Marketing flows campaign engagement directly into contact timelines, auto-scores leads based on behavior, and hands off qualified prospects to sales automatically — shortening the path from awareness to revenue.",
      ]}
      heroCards={[
        { value: "Multi-step", label: "Marketing automation" },
        { value: "Dynamic", label: "Contact segmentation" },
        { value: "Native", label: "CRM lead attribution" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Contact list migration & segmentation setup",
        "Email template design & brand alignment",
        "Marketing automation workflow build",
        "Lead scoring & CRM hand-off configuration",
        "Social media calendar & channel integration",
        "Campaign analytics & team training",
      ]}
      faqs={faqs}
    />
  );
}

