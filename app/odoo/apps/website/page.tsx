import type { Metadata } from "next";

import OdooAppTemplate from "@/app/odoo/components/apps/OdooAppTemplate";

export const metadata: Metadata = {
  title: "Odoo Website Builder Implementation | AGSuite Technologies",
  description:
    "Build, customize, and manage your business website with no-code drag-and-drop tools, SEO controls, live chat, and full Odoo CRM & eCommerce integration — implemented by AGSuite Technologies.",
};

const capabilities = [
  {
    title: "Drag-and-Drop Website Builder",
    description:
      "Create and customize professional web pages visually using a no-code block editor — add text, images, banners, sliders, and call-to-action buttons without writing a single line of code.",
  },
  {
    title: "Responsive Mobile-First Design",
    description:
      "All websites built in Odoo are automatically optimized for mobile, tablet, and desktop viewports, ensuring a consistent brand experience and reduced bounce rate across every device.",
  },
  {
    title: "Built-In SEO Optimization Tools",
    description:
      "Manage meta titles, descriptions, canonical URLs, image alt tags, and structured sitemaps directly from the page editor to improve search engine rankings without external plugins.",
  },
  {
    title: "Customizable Themes & Branding",
    description:
      "Select from professionally designed themes and adapt primary colors, typography, header layouts, and footer structure to match your corporate brand identity perfectly.",
  },
  {
    title: "Integrated Live Chat Widget",
    description:
      "Embed Odoo Live Chat on any page to engage website visitors in real time, capture leads, and escalate unresolved conversations directly into Helpdesk tickets or CRM opportunities.",
  },
  {
    title: "Contact Forms & Lead Capture",
    description:
      "Build rich contact, inquiry, and quote-request forms that automatically create CRM leads, assign them to sales teams, and trigger follow-up email sequences.",
  },
  {
    title: "Blog & Content Publishing",
    description:
      "Publish SEO-optimized blog posts, news articles, and case studies with category management, author profiles, social sharing, and comment moderation built in.",
  },
  {
    title: "Event Pages & Registration",
    description:
      "Promote webinars, workshops, and trade shows with dedicated event landing pages, online registration forms, attendee management, and automated reminder emails.",
  },
  {
    title: "Multi-Language & Multi-Website",
    description:
      "Run multiple branded websites from a single Odoo backend and publish content in multiple languages with automatic URL localization and per-language SEO settings.",
  },
  {
    title: "Website Analytics & Visitor Insights",
    description:
      "Track page views, session duration, traffic sources, and conversion funnels with Odoo's native analytics or integrate Google Analytics 4 for deeper behavioral insight.",
  },
  {
    title: "Pop-ups, Banners & Conversion Blocks",
    description:
      "Deploy exit-intent pop-ups, promotional banners, countdown timers, and newsletter subscription blocks to increase visitor engagement and email list growth.",
  },
  {
    title: "Native eCommerce & CRM Integration",
    description:
      "Every website form submission, product inquiry, or live chat conversation flows directly into Odoo CRM and eCommerce — no third-party plugins or manual data transfer needed.",
  },
];

const benefits = [
  {
    title: "Launch a professional website fast",
    description:
      "Go from concept to live business website in days — not months. Odoo's no-code block builder and pre-designed themes eliminate developer dependency for routine content updates.",
    points: [
      "No-code drag-and-drop editor",
      "Professional theme library",
      "Mobile-first out of the box",
      "Rapid page publishing workflow",
    ],
    image: "/images/Dashboard/odoo_command_dashboard.webp",
  },
  {
    title: "Capture and convert more leads",
    description:
      "Every contact form, live chat conversation, and CTA click flows automatically into Odoo CRM as a qualified lead — ensuring no inbound prospect is ever lost or manually entered.",
    points: [
      "Smart contact form builder",
      "CRM lead auto-creation",
      "Live chat to opportunity flow",
      "Sales team auto-assignment",
    ],
    image: "/images/Dashboard/odoo_live_operations_dashboard.webp",
  },
  {
    title: "Rank higher in search results",
    description:
      "Built-in SEO tools let your marketing team manage every on-page ranking factor — meta tags, structured data, page speed, sitemap submission — without relying on external plugins.",
    points: [
      "Meta title & description editor",
      "Auto-generated XML sitemaps",
      "Image alt-tag management",
      "Structured schema markup",
    ],
    image: "/images/Dashboard/accounting and planing dashboard.jpg",
  },
  {
    title: "Manage all content without IT",
    description:
      "Marketing teams can publish blog posts, update product pages, swap hero banners, and create new landing pages entirely from within the browser — no developer tickets required.",
    points: [
      "Inline WYSIWYG page editing",
      "Blog & news module",
      "Media library management",
      "Version history & draft preview",
    ],
    image: "/images/people/person_using_odoo.webp",
  },
  {
    title: "Serve a global multilingual audience",
    description:
      "Reach international markets by publishing content in multiple languages with URL localization, per-language meta tags, and region-specific promotional blocks.",
    points: [
      "Multi-language content publishing",
      "Localized URL structure",
      "Per-language SEO controls",
      "Geo-targeted landing pages",
    ],
    image: "/images/people/odoo_team_collaboration_customization.webp",
  },
  {
    title: "Unified digital marketing platform",
    description:
      "Odoo Website connects to Email Marketing, Social Media, Events, Live Chat, and eCommerce — all managed from one backend, providing a single source of truth for your digital presence.",
    points: [
      "Email marketing integration",
      "Social sharing built in",
      "Event registration pages",
      "eCommerce storefront link",
    ],
    image: "/images/people/people_using_odoo.jpg",
  },
];

const faqs = [
  {
    q: "What is Odoo Website and who is it designed for?",
    a: "Odoo Website is a no-code website builder integrated into the Odoo platform. It is designed for businesses of all sizes — from SMBs launching their first professional web presence to enterprises managing multiple regional websites. Because it natively connects to Odoo CRM, Marketing, eCommerce, and Helpdesk, it eliminates the integration complexity associated with standalone CMS platforms like WordPress.",
  },
  {
    q: "Do I need a developer to build or update our Odoo website?",
    a: "No. Odoo's drag-and-drop block editor enables marketing and content teams to build, edit, and publish pages, blog posts, banners, and landing pages entirely through the browser. Developer assistance is only needed for advanced custom theme development or highly specialized functionality.",
  },
  {
    q: "Can Odoo Website handle SEO for our business?",
    a: "Yes. Odoo Website includes comprehensive on-page SEO tools — meta title and description editors, canonical URL management, XML sitemap auto-generation, image alt tag fields, and schema markup support. You can also integrate Google Analytics 4 and Google Search Console directly from the website settings.",
  },
  {
    q: "Can we run multiple websites from one Odoo backend?",
    a: "Yes. Odoo's multi-website feature allows you to operate multiple branded websites — each with its own domain, language, theme, pricing, and product catalog — all managed from a single Odoo backend. This is ideal for companies with multiple brands, regions, or product lines.",
  },
  {
    q: "How does Odoo Website integrate with CRM?",
    a: "Every contact form submission, live chat conversation, product inquiry, or newsletter sign-up on the Odoo website automatically creates a CRM lead or contact record. Sales teams receive instant notifications and can immediately follow up. No manual data entry or third-party CRM connector is required.",
  },
  {
    q: "Can Odoo Website publish blog content for inbound marketing?",
    a: "Yes. Odoo includes a native blogging and content publishing module with category management, author profiles, estimated reading time, social sharing buttons, subscriber email notifications, and comment moderation — everything needed for a consistent inbound content strategy.",
  },
  {
    q: "Does Odoo Website support e-commerce product listings?",
    a: "Yes. Odoo Website and Odoo eCommerce share the same backend. You can add product pages, configure pricing, manage inventory availability, and process online orders — all from the same platform. This eliminates the need for separate WooCommerce or Shopify integrations.",
  },
  {
    q: "How long does an Odoo Website implementation take?",
    a: "A standard Odoo Website implementation with AGSuite typically takes 2 to 5 weeks, covering theme customization, page structure setup, CRM integration, SEO configuration, and team training. E-commerce and multi-website setups may extend the timeline depending on catalog size and custom requirements.",
  },
];

export default function OdooWebsitePage() {
  return (
    <OdooAppTemplate
      appName="Odoo Website"
      appLogo="/images/odoo-apps/website.svg"
      title="Build, Manage, and Convert With Your Odoo-Powered Business Website"
      description="Design professional websites with no-code tools, capture leads directly into CRM, publish SEO-optimized content, and manage your entire digital presence from one integrated Odoo platform."
      heroImage="/images/Dashboard/odoo_command_dashboard.webp"
      overviewImage="/images/Dashboard/odoo_live_operations_dashboard.webp"
      overviewTitle="Your website, your CRM, and your marketing — all in one platform"
      overviewParagraphs={[
        "Odoo Website gives marketing and business teams a powerful no-code page builder, SEO toolkit, blog publishing platform, and live chat system — all natively connected to Odoo CRM, eCommerce, and Email Marketing so every visitor interaction automatically becomes a business opportunity.",
        "Unlike standalone CMS platforms that require plugins, connectors, and custom development to link to your CRM or email tools, Odoo Website works seamlessly out of the box with your entire Odoo ecosystem — reducing complexity, eliminating data silos, and enabling non-technical teams to manage their digital presence independently.",
      ]}
      heroCards={[
        { value: "No-code", label: "Page builder" },
        { value: "Built-in", label: "SEO & analytics" },
        { value: "Native", label: "CRM integration" },
      ]}
      capabilities={capabilities}
      benefits={benefits}
      engagementPoints={[
        "Website structure & page hierarchy planning",
        "Theme customization & brand alignment",
        "SEO configuration & sitemap setup",
        "CRM lead capture & form integration",
        "Blog & content publishing workflow",
        "Team training & marketing handover",
      ]}
      faqs={faqs}
    />
  );
}

