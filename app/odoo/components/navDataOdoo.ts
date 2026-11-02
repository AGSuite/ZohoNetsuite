import type { ComponentType, SVGProps } from "react";
import {
  Activity,
  ArrowUpCircle,
  BookOpen,
  Boxes,
  BriefcaseBusiness,
  Building2,
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
  RefreshCw,
  Rocket,
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
  apps: "/odoo/apps",
  services: "/odoo#services",
  industries: "/odoo#industries",
  insights: "/odoo#approach",
  contact: "/odoo#contact",
};

const odooAppLink = (label: string, logoSlug: string, routeSlug = logoSlug): OdooNavLink => ({
  label: `Odoo ${label}`,
  href: `/odoo/apps/${routeSlug}`,
  logo: `/images/odoo-apps/all/${logoSlug}.svg`,
});

const odooAppNavigationCategories: OdooMegaCategory[] = [
  {
    title: "Finance",
    items: [
      odooAppLink("Accounting", "accounting"),
      odooAppLink("Invoicing", "invoicing"),
      odooAppLink("Expenses", "expenses"),
      odooAppLink("Sign", "sign"),
      odooAppLink("Spreadsheet", "spreadsheet"),
      odooAppLink("ESG", "esg"),
    ],
  },
  {
    title: "Sales",
    items: [
      odooAppLink("CRM", "crm"),
      odooAppLink("Sales", "sales"),
      odooAppLink("Subscriptions", "subscriptions"),
      odooAppLink("POS Shop", "pos-shop"),
      odooAppLink("POS Restaurant", "pos-restaurant"),
      odooAppLink("Rental", "rental"),
    ],
  },
  {
    title: "Websites",
    items: [
      odooAppLink("Website Builder", "website-builder", "website"),
      odooAppLink("eCommerce", "ecommerce"),
      odooAppLink("Events", "events"),
      odooAppLink("Blog", "blog"),
      odooAppLink("eLearning", "elearning"),
      odooAppLink("Forum", "forum"),
    ],
  },
  {
    title: "Supply Chain",
    items: [
      odooAppLink("Inventory", "inventory"),
      odooAppLink("Manufacturing", "manufacturing"),
      odooAppLink("Maintenance", "maintenance"),
      odooAppLink("PLM", "plm"),
      odooAppLink("Quality", "quality"),
      odooAppLink("Purchase", "purchase"),
    ],
  },
  {
    title: "Human Resources",
    items: [
      odooAppLink("Employees", "employees"),
      odooAppLink("Payroll", "payroll"),
      odooAppLink("Recruitment", "recruitment"),
      odooAppLink("Time Off", "time-off"),
      odooAppLink("Appraisals", "appraisals"),
      odooAppLink("Fleet", "fleet"),
    ],
  },
  {
    title: "Marketing",
    items: [
      odooAppLink("Social Marketing", "social-marketing"),
      odooAppLink("Email Marketing", "email-marketing"),
      odooAppLink("SMS Marketing", "sms-marketing"),
      odooAppLink("Marketing Automation", "marketing-automation"),
      odooAppLink("WhatsApp", "whatsapp"),
      odooAppLink("Surveys", "surveys"),
    ],
  },
  {
    title: "Services",
    items: [
      odooAppLink("Project", "project", "projects"),
      odooAppLink("Timesheets", "timesheets"),
      odooAppLink("Planning", "planning"),
      odooAppLink("Appointments", "appointments"),
      odooAppLink("Live Chat", "live-chat"),
      odooAppLink("Helpdesk", "helpdesk"),
    ],
  },
  {
    title: "Productivity",
    items: [
      odooAppLink("Artificial Intelligence", "artificial-intelligence"),
      odooAppLink("Discuss", "discuss"),
      odooAppLink("VoIP", "voip"),
      odooAppLink("IoT", "iot"),
      odooAppLink("Documents", "documents"),
      odooAppLink("Knowledge", "knowledge"),
    ],
  },
];
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
    bannerDescription: "Connected business applications for every team.",
    viewAllHref: sectionLink.apps,
    children: [
      {
        label: "ODOO BUSINESS APPS",
        href: sectionLink.apps,
        megaMenu: {
          title: "Odoo Business Applications",
          description: "Explore all 48 connected applications across finance, sales, operations, people, marketing, services, and productivity.",
          categories: odooAppNavigationCategories,
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
      { label: "Odoo Consulting", href: "/odoo/services/consulting", description: "Define the right strategy and rollout roadmap.", icon: Compass },
      { label: "Odoo Implementation", href: "/odoo/services/implementation", description: "Configure and launch Odoo around your processes.", icon: Layers3 },
      { label: "Odoo Customization", href: "/odoo/services/customization", description: "Tailor workflows, screens, approvals, and reports.", icon: Wrench },
      { label: "Odoo Integration", href: "/odoo/services/integration", description: "Connect Odoo with your essential business systems.", icon: RefreshCw },
      { label: "Data Migration", href: "/odoo/services/data-migration", description: "Clean, map, validate, and migrate critical data.", icon: Activity },
      { label: "Version Upgrade", href: "/odoo/services/version-upgrade", description: "Upgrade safely while protecting business continuity.", icon: ArrowUpCircle },
      { label: "Training & Adoption", href: "/odoo/services/training-adoption", description: "Prepare teams with practical role-based training.", icon: GraduationCap },
      { label: "Managed Support", href: "/odoo/services/managed-support", description: "Keep Odoo reliable, optimized, and improving.", icon: Headphones },
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
      { label: "Manufacturing", href: "/odoo/industries/manufacturing", description: "Plan production, quality, inventory, and maintenance.", icon: Factory },
      { label: "Wholesale & Distribution", href: "/odoo/industries/wholesale-distribution", description: "Connect purchasing, warehousing, and fulfilment.", icon: Boxes },
      { label: "Retail & eCommerce", href: "/odoo/industries/retail-ecommerce", description: "Unify storefronts, orders, stock, and customers.", icon: Store },
      { label: "Professional Services", href: "/odoo/industries/professional-services", description: "Manage projects, resources, time, and billing.", icon: BriefcaseBusiness },
      { label: "Software & Technology", href: "/odoo/industries/software-technology", description: "Scale subscriptions, services, and customer growth.", icon: Rocket },
      { label: "Transportation & Logistics", href: "/odoo/industries/transportation-logistics", description: "Improve fleet, warehouse, and delivery visibility.", icon: Truck },
      { label: "Construction", href: "/odoo/industries/construction", description: "Control projects, procurement, costs, and teams.", icon: Building2 },
      { label: "Healthcare", href: "/odoo/industries/healthcare", description: "Coordinate operations, supplies, people, and finance.", icon: Hospital },
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
