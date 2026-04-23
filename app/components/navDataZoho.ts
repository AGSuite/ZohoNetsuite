// navDataZoho.ts

import {
    Heart,
    Megaphone,
    HelpCircle,
    Briefcase,
    Headset,
    FileText,
    MessageSquare,
    Newspaper,
    Calendar,
    Trophy,
    GraduationCap,
    Store,
    Truck,
    Factory,
    Monitor,
    BookOpen,
    Rocket,
    Layers,
    Wrench,
    Settings,
    Users,
    Building2
} from 'lucide-react';

// Types
export interface MegaMenuItem {
    label: string;
    href: string;
    description?: string;
}

export interface MegaMenuCategory {
    title: string;
    items: MegaMenuItem[];
}

export interface MegaMenu {
    title: string;
    description: string;
    categories: MegaMenuCategory[];
}

export interface NavItem {
    label: string;
    href: string;
    description?: string;
    megaMenu?: MegaMenu;
    icon?: React.ComponentType<any>;
}

export interface NavSection {
    title: string;
    children: NavItem[];
}

// --------------------------------------------------
// ZOHO NAVIGATION DATA - ONLY ZOHO + COMMON SECTIONS
// --------------------------------------------------

export const navItemsZoho: NavSection[] = [
    // ---------------- ABOUT US ----------------
    {
        title: "About Us",
        children: [
            {
                label: "Who We Are",
                href: "/zoho/about-us",
                description: "Learn more about AGSuite vision, mission and team.",
                icon: Users
            },
            {
                label: "Our Offices",
                href: "/zoho/about-us#offices",
                description: "Explore our global presence and office locations.",
                icon: Building2
            },
            {
                label: "Life at AGSuite",
                href: "/zoho/life-at-agsuite",
                description: "Discover our vibrant culture, events, and work environment.",
                icon: Heart
            },
        ],
    },

    // ---------------- SOLUTIONS ----------------
    {
        title: "Solutions",
        children: [
            {
                label: "ZOHO",
                href: "/zoho/solutions",
                megaMenu: {
                    title: "Zoho Complete Suite of Applications",
                    description: "All the tools you need for sales, HR, operations & automation.",
                    categories: [
                        {
                            title: "Sales",
                            items: [
                                { label: "Zoho CRM", href: "/zoho-crm" },
                                { label: "Zoho CRM Plus", href: "/zoho-crm-plus" },
                                { label: "Zoho Bigin", href: "/zoho-bigin" },
                            ]
                        },
                        {
                            title: "HR",
                            items: [
                                { label: "Zoho People", href: "/zoho-people" },
                                { label: "Zoho Recruit", href: "/zoho-recruit-hiring-software" },
                                { label: "Zoho People Plus", href: "/zoho-people-plus" },
                                { label: "Zoho Payroll", href: "/zoho-payroll" },
                                { label: "Zoho Expense", href: "/zoho-expense" },
                            ]
                        },
                        {
                            title: "Finance",
                            items: [
                                { label: "Zoho Books", href: "/zoho-books-accounting-software" },
                                { label: "Zoho Inventory", href: "/zoho-inventory-software" },
                                { label: "Zoho Payroll", href: "/zoho-payroll-finance" },
                                { label: "Zoho Finance Plus", href: "/zoho-finance-plus" },
                                { label: "Zoho Expense", href: "/zoho-expense-finance" },
                            ]
                        },
                        {
                            title: "Projects",
                            items: [
                                { label: "Zoho Projects", href: "/zoho-projects" },
                                { label: "Zoho Sprints", href: "/zoho-sprint" },
                            ]
                        },
                        {
                            title: "Service",
                            items: [
                                { label: "Zoho Desk", href: "/zoho-desk" },
                                { label: "Zoho SalesIQ", href: "/zoho-salesiq-implementation" },
                                { label: "Zoho FSM", href: "/zoho-fsm" },
                            ]
                        },
                        {
                            title: "Email & Collaboration",
                            items: [
                                { label: "Zoho Mail", href: "/zoho-mail" },
                                { label: "Zoho Workplace", href: "/zoho-workplace" },
                            ]
                        },
                        {
                            title: "Marketing",
                            items: [
                                { label: "Zoho Sites", href: "/zoho-sites" },
                                { label: "Zoho Social", href: "/zoho-social-media-management" },
                                { label: "Zoho Commerce", href: "/zoho-commerce" },
                                { label: "Zoho Marketing Automation", href: "/zoho-marketing-automation" },
                                { label: "Zoho Marketing Plus", href: "/zoho-marketing-plus" },
                                { label: "Zoho SalesIQ", href: "/zoho-salesiq-marketing" },
                            ]
                        },
                        {
                            title: "BI & Analytics",
                            items: [
                                { label: "Zoho Analytics", href: "/zoho-analytics" },
                                { label: "Zoho Flow", href: "/zoho-flow" },
                            ]
                        },
                        {
                            title: "Dev Platforms",
                            items: [
                                { label: "Zoho Creator", href: "/zoho-creator" },
                                { label: "Zoho Catalyst", href: "/zoho-catalyst" },
                            ]
                        },
                        {
                            title: "IT Management",
                            items: [
                                { label: "Zoho Creator", href: "/zoho-creator-it-management" },
                                { label: "Zoho IT Management", href: "/zoho-it-management" },
                            ]
                        },
                        {
                            title: "Complete Suite",
                            items: [
                                { label: "Zoho One", href: "/zoho-one" },
                                { label: "Zoho ERP", href: "/zoho-erp" },
                            ]
                        }
                    ]
                }
            }
        ]
    },

    // ---------------- SERVICES ----------------
    {
        title: "Services",
        children: [
            { label: 'Digital Transformation', href: '/zoho/services/digital-transformation', description: 'Modernize your business.', icon: Rocket },
            { label: 'Integration Services', href: '/zoho/services/integration-services', description: 'Connect systems easily.', icon: Layers },
            { label: 'Training Services', href: '/zoho/services/training-services', description: 'Expert-led training programs.', icon: GraduationCap },
            { label: 'Low-Code App Development', href: '/zoho/services/low-code', description: 'Build apps faster.', icon: Wrench },
            { label: 'Managed Services', href: '/zoho/services/managed-services', description: 'Complete IT management.', icon: Settings },
        ]
    },

    // ---------------- INDUSTRIES ----------------
    {
        title: "Industries",
        children: [
            { label: 'Software & Technology', href: '/zoho/industries/software', description: 'Solutions for tech businesses.', icon: Monitor },
            { label: 'IT & Professional Services', href: '/zoho/industries/it-services', description: 'Automation for service providers.', icon: Briefcase },
            { label: 'Wholesale Distribution', href: '/zoho/industries/wholesale', description: 'Distribution & logistics tools.', icon: Truck },
            { label: 'Advertising & Marketing', href: '/zoho/industries/advertising-marketing', description: 'Boost your campaigns.', icon: Megaphone },
            { label: 'Media & Publishing', href: '/zoho/industries/media', description: 'Tools for media houses.', icon: Newspaper },
            { label: 'Retail & E-Commerce', href: '/zoho/industries/retail', description: 'Retail automation suite.', icon: Store },
            { label: 'Transportation & Logistics', href: '/zoho/industries/transport', description: 'Smart logistics systems.', icon: Truck },
            { label: 'Manufacturing', href: '/zoho/industries/manufacturing', description: 'Optimize manufacturing cycles.', icon: Factory },
        ]
    },

    // ---------------- INSIGHTS ----------------
    {
        title: "Insights",
        children: [
            { label: 'Blogs', href: '/zoho/blogs', description: 'Latest articles & updates.', icon: MessageSquare },
            { label: 'Case Studies', href: '/zoho/case-studies', description: 'Our success stories.', icon: BookOpen },
            { label: 'Events', href: '/zoho/insights#events', description: 'Workshops & webinars.', icon: Calendar },
            { label: 'Awards & Achievements', href: '/zoho/insights#awards', description: 'Recognition & milestones.', icon: Trophy },
        ]
    },

    // ---------------- CONTACT ----------------
    {
        title: "Contact",
        children: [
            { label: 'Careers', href: '/zoho/contact/careers', description: 'Join our growing team.', icon: Briefcase },
            { label: 'Support', href: '/zoho/contact/support', description: 'Get expert help.', icon: Headset },
            { label: 'Request Quote', href: '/zoho/contact/request-quote', description: 'Get project pricing.', icon: FileText },
            { label: 'Free Consultation', href: '/zoho/contact/free-consultation', description: 'Talk to our team.', icon: HelpCircle }
        ]
    }
];
