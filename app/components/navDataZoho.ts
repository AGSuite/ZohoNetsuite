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
    Building2,
    Wifi,
    DollarSign,
    Target,
    Zap,
    UserPlus,
    FileSpreadsheet,
    Wallet,
    Receipt,
    Package,
    CreditCard,
    Coins,
    Clock,
    Activity,
    Eye,
    Mail,
    Layout,
    Globe,
    Share2,
    ShoppingCart,
    BarChart,
    PieChart,
    GitMerge,
    Code,
    Cpu,
    Terminal,
    Server,
    Box,
    Database
} from 'lucide-react';

// Types
export interface MegaMenuItem {
    label: string;
    href: string;
    description?: string;
    icon?: React.ComponentType<any>;
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
                href: "/zoho/our-offices",
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
                                { label: "Zoho CRM", href: "/zoho-crm", icon: Database },
                                { label: "Zoho CRM Plus", href: "/zoho-crm-plus", icon: Zap },
                                { label: "Zoho Bigin", href: "/zoho-bigin", icon: Target },
                            ]
                        },
                        {
                            title: "HR",
                            items: [
                                { label: "Zoho People", href: "/zoho-people", icon: Users },
                                { label: "Zoho Recruit", href: "/zoho-recruit-hiring-software", icon: UserPlus },
                                { label: "Zoho People Plus", href: "/zoho-people-plus", icon: FileSpreadsheet },
                                { label: "Zoho Payroll", href: "/zoho-payroll", icon: Wallet },
                                { label: "Zoho Expense", href: "/zoho-expense", icon: Receipt },
                            ]
                        },
                        {
                            title: "Finance",
                            items: [
                                { label: "Zoho Books", href: "/zoho-books-accounting-software", icon: BookOpen },
                                { label: "Zoho Inventory", href: "/zoho-inventory-software", icon: Package },
                                { label: "Zoho Payroll", href: "/zoho-payroll-finance", icon: CreditCard },
                                { label: "Zoho Finance Plus", href: "/zoho-finance-plus", icon: Coins },
                                { label: "Zoho Expense", href: "/zoho-expense-finance", icon: DollarSign },
                            ]
                        },
                        {
                            title: "Projects",
                            items: [
                                { label: "Zoho Projects", href: "/zoho-projects", icon: Briefcase },
                                { label: "Zoho Sprints", href: "/zoho-sprint", icon: Activity },
                            ]
                        },
                        {
                            title: "Service",
                            items: [
                                { label: "Zoho Desk", href: "/zoho-desk", icon: Headset },
                                { label: "Zoho SalesIQ", href: "/zoho-salesiq-implementation", icon: Eye },
                                { label: "Zoho FSM", href: "/zoho-fsm", icon: Settings },
                            ]
                        },
                        {
                            title: "Collaboration",
                            items: [
                                { label: "Zoho Mail", href: "/zoho-mail", icon: Mail },
                                { label: "Zoho Workplace", href: "/zoho-workplace", icon: Layout },
                            ]
                        },
                        {
                            title: "Marketing",
                            items: [
                                { label: "Zoho Sites", href: "/zoho-sites", icon: Globe },
                                { label: "Zoho Social", href: "/zoho-social-media-management", icon: Share2 },
                                { label: "Zoho Commerce", href: "/zoho-commerce", icon: ShoppingCart },
                                { label: "Zoho Marketing Automation", href: "/zoho-marketing-automation", icon: BarChart },
                                { label: "Zoho Marketing Plus", href: "/zoho-marketing-plus", icon: Megaphone },
                                { label: "Zoho SalesIQ", href: "/zoho-salesiq-marketing", icon: Eye },
                            ]
                        },
                        {
                            title: "Analytics",
                            items: [
                                { label: "Zoho Analytics", href: "/zoho-analytics", icon: PieChart },
                                { label: "Zoho Flow", href: "/zoho-flow", icon: GitMerge },
                            ]
                        },
                        {
                            title: "Developer & IT",
                            items: [
                                { label: "Zoho Creator", href: "/zoho-creator", icon: Code },
                                { label: "Zoho Catalyst", href: "/zoho-catalyst", icon: Cpu },
                                { label: "Zoho IT Management", href: "/zoho-it-management", icon: Server },
                            ]
                        },
                        {
                            title: "Suites",
                            items: [
                                { label: "Zoho One", href: "/zoho-one", icon: Box },
                                { label: "Zoho ERP", href: "/zoho-erp", icon: Layers },
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
            { label: 'Digital Transformation', href: '/zoho/services/digital-transformation', description: 'Modernize your business for the digital age.', icon: Rocket },
            { label: 'Integration Services', href: '/zoho/services/integration-services', description: 'Seamlessly connect your systems.', icon: Layers },
            { label: 'Training Services', href: '/zoho/services/training-services', description: 'Upskill your team with expert-led training.', icon: GraduationCap },
            { label: 'Low-Code Application Development', href: '/zoho/services/low-code', description: 'Build apps faster with minimal coding.', icon: Wrench },
            { label: 'Managed Services', href: '/zoho/services/managed-services', description: 'End-to-end IT management & support.', icon: Settings },
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
            { label: 'Telecom Industry', href: '/zoho/industries/telecom', description: 'Modernize billing & telecom operations.', icon: Wifi },
            { label: 'Financial Services', href: '/zoho/industries/financial-services', description: 'Compliance, risk & real-time insights.', icon: DollarSign },
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
