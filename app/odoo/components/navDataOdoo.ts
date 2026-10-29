import type { ComponentType, SVGProps } from "react";
import {
  Activity,
  ArrowUpCircle,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Building2,
  Code2,
  Compass,
  Factory,
  FileText,
  GraduationCap,
  Headphones,
  Heart,
  HeartHandshake,
  Hospital,
  Layers3,
  LifeBuoy,
  PlugZap,
  RefreshCw,
  Rocket,
  ShoppingBag,
  ShoppingCart,
  Store,
  Truck,
  Users,
  Wrench,
} from "lucide-react";

type Icon = ComponentType<SVGProps<SVGSVGElement>>;

export interface OdooNavLink {
  label: string;
  href: string;
  description?: string;
  icon?: Icon;
  logo?: string;
}

export interface OdooMegaCategory {
  title: string;
  items: OdooNavLink[];
}

export interface OdooMegaMenu {
  title: string;
  description: string;
  categories: OdooMegaCategory[];
}

export interface OdooFeaturedCard {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  cta: string;
  image: string;
}

export interface OdooNavItem extends OdooNavLink {
  megaMenu?: OdooMegaMenu;
}

export interface OdooNavSection {
  title: string;
  bannerTitle: string;
  bannerDescription: string;
  viewAllHref: string;
  children: OdooNavItem[];
  featured: OdooFeaturedCard;
}

const sectionLink = {
  apps: "/odoo#apps",
  services: "/odoo#services",
  industries: "/odoo#industries",
  insights: "/odoo#approach",
  contact: "/odoo#contact",
};

export const navItemsOdoo: OdooNavSection[] = [
  {
    title: "About Us",
    bannerTitle: "About AGSuite",
    bannerDescription: "Odoo expertise backed by practical business experience.",
    viewAllHref: "/odoo/about-us",
    children: [
      { label: "Who We Are", href: "/odoo/about-us", description: "Meet the team behind your Odoo transformation.", icon: Users },
      { label: "Our Offices", href: "/odoo/our-offices", description: "Explore our locations and global delivery presence.", icon: Building2 },
      { label: "Life at AGSuite", href: "/odoo/life-at-agsuite", description: "Discover our people, culture, and ways of working.", icon: Heart },
    ],
    featured: {
      eyebrow: "Odoo expertise",
      title: "Your trusted Odoo implementation partner",
      description: "Turn your business requirements into a connected, scalable Odoo platform.",
      href: sectionLink.contact,
      cta: "Talk to an Odoo expert",
      image: "/images/navbar/about.png",
    },
  },
  {
    title: "Solutions",
    bannerTitle: "Odoo Business Solutions",
    bannerDescription: "Connected applications, integrations, and extensions for every team.",
    viewAllHref: sectionLink.apps,
    children: [
      {
        label: "ODOO BUSINESS APPS",
        href: sectionLink.apps,
        megaMenu: {
          title: "Odoo Business Applications",
          description: "Choose the applications you need today and expand as your business grows.",
          categories: [
            {
              title: "Sales & CRM",
              items: [
                { label: "Odoo CRM", href: "/odoo/apps/crm", logo: "/images/odoo-apps/crm.svg" },
                { label: "Odoo Sales", href: "/odoo/apps/sales", logo: "/images/odoo-apps/sales.svg" },
              ],
            },
            {
              title: "Finance",
              items: [{ label: "Odoo Accounting", href: "/odoo/apps/accounting", logo: "/images/odoo-apps/accounting.svg" }],
            },
            {
              title: "Operations",
              items: [
                { label: "Odoo Inventory", href: "/odoo/apps/inventory", logo: "/images/odoo-apps/inventory.svg" },
                { label: "Odoo Purchase", href: "/odoo/apps/purchase", logo: "/images/odoo-apps/purchase.svg" },
                { label: "Odoo Manufacturing", href: "/odoo/apps/manufacturing", logo: "/images/odoo-apps/manufacturing.svg" },
              ],
            },
            {
              title: "Service Management",
              items: [
                { label: "Odoo Projects", href: "/odoo/apps/projects", logo: "/images/odoo-apps/projects.svg" },
                { label: "Odoo Helpdesk", href: "/odoo/apps/helpdesk", logo: "/images/odoo-apps/helpdesk.svg" },
              ],
            },
            {
              title: "Website & Commerce",
              items: [
                { label: "Odoo Website", href: "/odoo/apps/website", logo: "/images/odoo-apps/website.svg" },
                { label: "Odoo eCommerce", href: "/odoo/apps/ecommerce", logo: "/images/odoo-apps/ecommerce.svg" },
              ],
            },
            {
              title: "People & Marketing",
              items: [
                { label: "Odoo Employees", href: "/odoo/apps/employees", logo: "/images/odoo-apps/employees.svg" },
                { label: "Odoo Marketing", href: "/odoo/apps/marketing", logo: "/images/odoo-apps/marketing.svg" },
              ],
            },
          ],
        },
      },
      {
        label: "ODOO INTEGRATIONS & EXTENSIONS",
        href: sectionLink.services,
        megaMenu: {
          title: "Odoo Integrations and Extensions",
          description: "Connect commerce, payments, logistics, and custom workflows to Odoo.",
          categories: [
            {
              title: "Commerce Connections",
              items: [
                { label: "Shopify Integration", href: sectionLink.services, icon: ShoppingBag },
                { label: "WooCommerce Integration", href: sectionLink.services, icon: Store },
                { label: "Amazon Integration", href: sectionLink.services, icon: ShoppingCart },
              ],
            },
            {
              title: "Automation & Extensions",
              items: [
                { label: "Payment & Shipping Integrations", href: sectionLink.services, icon: PlugZap },
                { label: "Custom Odoo Modules", href: sectionLink.services, icon: Code2 },
                { label: "API & Third-Party Integrations", href: sectionLink.services, icon: Layers3 },
              ],
            },
          ],
        },
      },
    ],
    featured: {
      eyebrow: "Connected platform",
      title: "Run every business function in one suite",
      description: "Bring sales, finance, operations, service, and people together with Odoo.",
      href: sectionLink.apps,
      cta: "Explore Odoo apps",
      image: "/images/odoo/odoo-growth-dashboard.png",
    },
  },
  {
    title: "Services",
    bannerTitle: "Our Odoo Services",
    bannerDescription: "End-to-end expertise from discovery to continuous improvement.",
    viewAllHref: sectionLink.services,
    children: [
      { label: "Odoo Consulting", href: sectionLink.services, description: "Define the right strategy and rollout roadmap.", icon: Compass },
      { label: "Odoo Implementation", href: sectionLink.services, description: "Configure and launch Odoo around your processes.", icon: Layers3 },
      { label: "Odoo Customization", href: sectionLink.services, description: "Tailor workflows, screens, approvals, and reports.", icon: Wrench },
      { label: "Odoo Integration", href: sectionLink.services, description: "Connect Odoo with your essential business systems.", icon: RefreshCw },
      { label: "Data Migration", href: sectionLink.services, description: "Clean, map, validate, and migrate critical data.", icon: Activity },
      { label: "Version Upgrade", href: sectionLink.services, description: "Upgrade safely while protecting business continuity.", icon: ArrowUpCircle },
      { label: "Training & Adoption", href: sectionLink.services, description: "Prepare teams with practical role-based training.", icon: GraduationCap },
      { label: "Managed Support", href: sectionLink.services, description: "Keep Odoo reliable, optimized, and improving.", icon: Headphones },
    ],
    featured: {
      eyebrow: "Implementation roadmap",
      title: "Build your Odoo journey with confidence",
      description: "Get a practical plan aligned with your priorities, data, and operating model.",
      href: sectionLink.contact,
      cta: "Plan your Odoo rollout",
      image: "/images/navbar/services.png",
    },
  },
  {
    title: "Industries",
    bannerTitle: "Industries We Serve",
    bannerDescription: "Odoo solutions shaped around real operational requirements.",
    viewAllHref: sectionLink.industries,
    children: [
      { label: "Manufacturing", href: sectionLink.industries, description: "Plan production, quality, inventory, and maintenance.", icon: Factory },
      { label: "Wholesale & Distribution", href: sectionLink.industries, description: "Connect purchasing, warehousing, and fulfilment.", icon: Boxes },
      { label: "Retail & eCommerce", href: sectionLink.industries, description: "Unify storefronts, orders, stock, and customers.", icon: Store },
      { label: "Professional Services", href: sectionLink.industries, description: "Manage projects, resources, time, and billing.", icon: BriefcaseBusiness },
      { label: "Software & Technology", href: sectionLink.industries, description: "Scale subscriptions, services, and customer growth.", icon: Rocket },
      { label: "Transportation & Logistics", href: sectionLink.industries, description: "Improve fleet, warehouse, and delivery visibility.", icon: Truck },
      { label: "Construction", href: sectionLink.industries, description: "Control projects, procurement, costs, and teams.", icon: Building2 },
      { label: "Healthcare", href: sectionLink.industries, description: "Coordinate operations, supplies, people, and finance.", icon: Hospital },
    ],
    featured: {
      eyebrow: "Industry-ready Odoo",
      title: "Designed around how your industry operates",
      description: "Start with proven workflows, then adapt Odoo to your exact business model.",
      href: sectionLink.contact,
      cta: "Discuss your industry",
      image: "/images/navbar/industries.png",
    },
  },
  {
    title: "Insights",
    bannerTitle: "Odoo Insights & Resources",
    bannerDescription: "Practical guidance for selecting, implementing, and improving Odoo.",
    viewAllHref: sectionLink.insights,
    children: [
      { label: "Odoo Blogs", href: sectionLink.insights, description: "Ideas, guidance, and the latest Odoo perspectives.", icon: BookOpen },
      { label: "Case Studies", href: sectionLink.insights, description: "See how connected systems create measurable value.", icon: FileText },
    ],
    featured: {
      eyebrow: "Practical knowledge",
      title: "Explore useful Odoo resources",
      description: "Make better platform decisions with implementation insights and real outcomes.",
      href: sectionLink.insights,
      cta: "Explore Odoo insights",
      image: "/images/navbar/insights.png",
    },
  },
  {
    title: "Contact",
    bannerTitle: "Start a Conversation",
    bannerDescription: "Tell us what you want your business systems to do better.",
    viewAllHref: sectionLink.contact,
    children: [
      { label: "Request Quote", href: sectionLink.contact, description: "Get a project estimate aligned with your requirements.", icon: FileText },
      { label: "Free Consultation", href: sectionLink.contact, description: "Discuss your goals with an Odoo specialist.", icon: HeartHandshake },
      { label: "Odoo Support", href: sectionLink.contact, description: "Get functional and technical help for your platform.", icon: LifeBuoy },
      { label: "Careers", href: sectionLink.contact, description: "Build your career with the AGSuite team.", icon: BriefcaseBusiness },
    ],
    featured: {
      eyebrow: "Let’s build together",
      title: "Ready to simplify your business?",
      description: "Start with a focused conversation about your priorities and the right Odoo path.",
      href: sectionLink.contact,
      cta: "Talk to an Odoo expert",
      image: "/images/navbar/contact.png",
    },
  },
];
