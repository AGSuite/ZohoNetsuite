import {
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
    Calculator
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

// ---------------------------------------------
// NAVIGATION DATA - NETSUITE ONLY + COMMON DATA
// ---------------------------------------------
export const navItemsNetSuite: NavSection[] = [
    // ---------------- ABOUT US ----------------
    {
        title: "About Us",
        children: [
            {
                label: "Who We Are",
                href: "/netsuite/about-us",
                description: "Learn more about AGSuite vision, mission and team.",
                icon: Users
            },
            {
                label: "Our Offices",
                href: "/netsuite/about-us#offices",
                description: "Explore our global presence and office locations.",
                icon: Building2
            },
        ],
    },

    // ---------------- SOLUTIONS ----------------
    {
        title: 'Solutions',
        children: [
            {
                label: 'NETSUITE',
                href: '/netsuite/solutions',
                megaMenu: {
                    title: 'NetSuite Business Management Solutions',
                    description: 'Comprehensive ERP and business management platform',
                    categories: [
                        {
                            title: 'Core ERP',
                            items: [
                                { label: 'NetSuite ERP', href: '/netsuite/solutions/core-erp/erp' },
                                { label: 'NetSuite Accounting Software', href: '/netsuite/solutions/core-erp/accounting' },
                                { label: 'Global Business Management', href: '/netsuite/solutions/core-erp/global-business' },
                            ]
                        },
                        {
                            title: 'Customer Management',
                            items: [
                                { label: 'NetSuite CRM', href: '/netsuite/solutions/customer-management/crm' },
                            ]
                        },
                        {
                            title: 'Project Management',
                            items: [
                                { label: 'NetSuite SRP', href: '/netsuite/solutions/project-management/srp' },
                                { label: 'SuiteProject Pro (OpenAir)', href: '/netsuite/solutions/project-management/openair' },
                            ]
                        },
                        {
                            title: 'Analytics & Intelligence',
                            items: [
                                { label: 'NetSuite Business Intelligence', href: '/netsuite/solutions/analytics/bi' },
                                { label: 'NetSuite Analytics Warehouse', href: '/netsuite/solutions/analytics/warehouse' },
                                { label: 'Artificial Intelligence in NetSuite', href: '/netsuite/solutions/analytics/ai' },
                            ]
                        },
                        {
                            title: 'E-Commerce',
                            items: [
                                { label: 'NetSuite E-Commerce', href: '/netsuite/solutions/ecommerce/main' },
                            ]
                        },
                        {
                            title: 'Specialized Solutions',
                            items: [
                                { label: 'SuiteSuccess', href: '/netsuite/solutions/specialized/suitesuccess' },
                                { label: 'India Localization for NetSuite', href: '/netsuite/solutions/specialized/india-localization' },
                            ]
                        },
                        {
                            title: 'Planning & Budgeting',
                            items: [
                                { label: 'NetSuite Planning and Budgeting', href: '/netsuite/solutions/planning/main' },
                            ]
                        },
                        {
                            title: 'Why Choose NetSuite',
                            items: [
                                { label: 'Why NetSuite', href: '/netsuite/solutions/why-netsuite/main' },
                            ]
                        },
                    ],
                }
            },

            // --------------- NETSUITE ADD-ONS ---------------
            {
                label: 'NETSUITE ADD-ONS',
                href: '/netsuite/solutions/addons',
                megaMenu: {
                    title: 'NetSuite Add-On Solutions',
                    description: 'Extend NetSuite with connectors & automation tools',
                    categories: [
                        {
                            title: 'Other Add-ons',
                            items: [
                                {
                                    label: 'India Localization',
                                    href: '/netsuite/solutions/addons/india-localization',
                                    description: 'E-invoicing, GST & statutory compliance for India'
                                },
                                {
                                    label: 'Smart Commission App',
                                    href: '/netsuite/solutions/addons/smart-commission',
                                    description: 'Automate complex partner & sales commission tracking'
                                },
                                {
                                    label: 'NetSuite Data Backup',
                                    href: '/netsuite/solutions/addons/data-backup',
                                    description: 'Secure automated backup for your critical ERP data'
                                },
                            ],
                        },
                        {
                            title: 'Connectors',
                            items: [
                                {
                                    label: 'Magento 2 NetSuite Connector',
                                    href: '/netsuite/solutions/addons/connectors/magento2',
                                    description: 'Real-time sync between Magento storefront & NetSuite'
                                },
                                {
                                    label: 'Amazon NetSuite Connector',
                                    href: '/netsuite/solutions/addons/connectors/amazon',
                                    description: 'Automate Amazon FBA/FBM orders & inventory'
                                },
                                {
                                    label: 'Shopify NetSuite Connector',
                                    href: '/netsuite/solutions/addons/connectors/shopify',
                                    description: 'Seamless integration for Shopify & Shopify Plus'
                                },
                            ],
                        },
                    ],
                },
            },
        ],
    },

    // ---------------- SERVICES ----------------
    {
        title: 'Services',
        children: [
            { label: 'Digital Transformation', href: '/netsuite/services/digital-transformation', description: 'Modernize your business for the digital age.', icon: Rocket },
            { label: 'Integration Services', href: '/netsuite/services/integration-services', description: 'Seamlessly connect your systems.', icon: Layers },
            { label: 'Training Services', href: '/netsuite/services/training-services', description: 'Upskill your team with expert-led training.', icon: GraduationCap },
            { label: 'Low-Code Application Development', href: '/netsuite/services/low-code', description: 'Build apps faster with minimal coding.', icon: Wrench },
            { label: 'Managed Services', href: '/netsuite/services/managed-services', description: 'End-to-end IT management & support.', icon: Settings },
        ],
    },

    // ---------------- INDUSTRIES ----------------
    {
        title: 'Industries',
        children: [
            { label: 'Software & Technology', href: '/netsuite/industries/software', description: 'Tools for modern software companies.', icon: Monitor },
            { label: 'IT & Professional Services', href: '/netsuite/industries/it-services', description: 'Scaling solutions for IT firms.', icon: Briefcase },
            { label: 'Wholesale Distribution', href: '/netsuite/industries/wholesale', description: 'Optimize supply chain & inventory.', icon: Truck },
            { label: 'Advertising & Marketing', href: '/netsuite/industries/advertising-marketing', description: 'Boost your digital campaigns.', icon: Megaphone },
            { label: 'Media & Publishing', href: '/netsuite/industries/media', description: 'Solutions for media operations.', icon: Newspaper },
            { label: 'Retail & E-Commerce', href: '/netsuite/industries/retail', description: 'End-to-end retail automation.', icon: Store },
            { label: 'Transportation & Logistics', href: '/netsuite/industries/transport', description: 'Smart logistics solutions.', icon: Truck },
            { label: 'Manufacturing', href: '/netsuite/industries/manufacturing', description: 'Streamline production cycles.', icon: Factory },
        ],
    },

    // ---------------- INSIGHTS ----------------
    {
        title: 'Insights',
        children: [
            { label: 'Blogs', href: '/netsuite/blog', description: 'Latest posts & insights.', icon: MessageSquare },
            { label: 'Case Study', href: '/netsuite/casestudy', description: 'Our success stories.', icon: BookOpen },
            { label: 'Events', href: '/netsuite/insights/events', description: 'Webinars & workshops.', icon: Calendar },
            { label: 'Pricing Calculator', href: '/netsuite-calculator', description: 'Estimate your NetSuite ROI.', icon: Calculator },
            { label: 'Awards & Achievements', href: '/netsuite/insights/awards', description: 'Recognition & milestones.', icon: Trophy },
        ],
    },

    // ---------------- CONTACT ----------------
    {
        title: 'Contact',
        children: [
            { label: 'Careers', href: '/netsuite/contact/careers', description: 'Join our growing team.', icon: Briefcase },
            { label: 'Support', href: '/netsuite/contact/support', description: '24/7 client support.', icon: Headset },
            { label: 'Request Quote', href: '/netsuite/contact/quote', description: 'Get a project estimate.', icon: FileText },
            { label: 'Free Consultation', href: '/netsuite/free-consultation', description: 'Talk to an expert.', icon: HelpCircle }
        ],
    },
];
