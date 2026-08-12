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
    Calculator,
    Wifi,
    DollarSign,
    Database,
    Globe,
    Puzzle,
    MapPin,
    BarChart,
    Repeat,
    PieChart,
    Activity,
    Cpu,
    ShoppingCart,
    Clock,
    Puzzle as PuzzleIcon,
    GitMerge,
    Share2,
    Coins
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
                href: "/netsuite/our-offices",
                description: "Explore our global presence and office locations.",
                icon: Building2
            },
            {
                label: "Life at AGSuite",
                href: "/netsuite/life-at-agsuite",
                description: "Discover our vibrant culture, events, and work environment.",
                icon: Heart
            },
        ],
    },

    // ---------------- SOLUTIONS ----------------
    {
        title: 'Solutions',
        children: [
            {
                label: 'NETSUITE',
                href: '/netsuite-products',
                megaMenu: {
                    title: 'NetSuite Business Management Solutions',
                    description: 'Comprehensive ERP and business management platform',
                    categories: [
                        {
                            title: 'Core ERP',
                            items: [
                                { label: 'NetSuite ERP', href: '/netsuite-erp-solution', icon: Database },
                                { label: 'NetSuite Accounting Software', href: '/netsuite-accounting-services', icon: Calculator },
                                { label: 'Global Business Management', href: '/global-business-management', icon: Globe },
                            ]
                        },
                        {
                            title: 'Customer Management',
                            items: [
                                { label: 'NetSuite CRM', href: '/netsuite-crm-solutions', icon: Users },
                            ]
                        },
                        {
                            title: 'Project Management',
                            items: [
                                { label: 'NetSuite SRP', href: '/service-resource-planning', icon: Briefcase },
                                { label: 'NetSuite SuiteProject Pro', href: '/netsuite-open-air-solution', icon: Clock },
                            ]
                        },
                        {
                            title: 'Analytics & Intelligence',
                            items: [
                                { label: 'NetSuite Business Intelligence', href: '/netsuite-business-intelligence', icon: PieChart },
                                { label: 'NetSuite Analytics Warehouse', href: '/netsuite-analytics-warehouse', icon: Activity },
                                { label: 'Artificial Intelligence in NetSuite', href: '/artificial-intelligence-ai', icon: Cpu },
                            ]
                        },
                        {
                            title: 'E-Commerce',
                            items: [
                                { label: 'NetSuite E-Commerce', href: '/netsuite-suite-commerce-site-builder', icon: ShoppingCart },
                            ]
                        },
                        {
                            title: 'Specialized Solutions',
                            items: [
                                { label: 'SuiteSuccess', href: '/netsuite-suitesuccess', icon: Trophy },
                                { label: 'India Localization for NetSuite', href: '/india-localization-for-netsuite', icon: MapPin },
                            ]
                        },
                        {
                            title: 'Planning & Budgeting',
                            items: [
                                { label: 'NetSuite Planning and Budgeting', href: '/netsuite-planning-and-budgeting', icon: BarChart },
                            ]
                        },
                        {
                            title: 'Why Choose NetSuite',
                            items: [
                                { label: 'Why NetSuite', href: '/why-netsuite', icon: HelpCircle },
                            ]
                        },
                    ],
                }
            },

            // --------------- NETSUITE ADD-ONS ---------------
            {
                label: 'NETSUITE ADD-ONS AND CONNECTORS',
                href: '/netsuite-connector',
                megaMenu: {
                    title: 'NetSuite Add-On Solutions',
                    description: 'Extend NetSuite with connectors & automation tools',
                    categories: [
                        {
                            title: 'Add-ons',
                            items: [
                                {
                                    label: 'Indian Localization for NetSuite',
                                    href: '/india-localization-for-netsuite',
                                    description: 'E-invoicing, GST & statutory compliance for India',
                                    icon: MapPin
                                },
                                {
                                    label: 'Smart Commission App',
                                    href: '/smart-commission-app',
                                    description: 'Automate complex partner & sales commission tracking',
                                    icon: Coins
                                },
                                {
                                    label: 'NetSuite Data Backup',
                                    href: '/netsuite-data-backup-solution',
                                    description: 'Secure automated backup for your critical ERP data',
                                    icon: Database
                                },
                            ],
                        },
                        {
                            title: 'Connectors',
                            items: [
                                {
                                    label: 'Magento 2 NetSuite Connector',
                                    href: '/magento-2-netsuite-connector',
                                    description: 'Real-time sync between Magento storefront & NetSuite',
                                    icon: GitMerge
                                },
                                {
                                    label: 'Amazon NetSuite Connector',
                                    href: '/amazon-netsuite-connector',
                                    description: 'Automate Amazon FBA/FBM orders & inventory',
                                    icon: Share2
                                },
                                {
                                    label: 'Shopify NetSuite Connector',
                                    href: '/shopify-netsuite-connector',
                                    description: 'Seamless integration for Shopify & Shopify Plus',
                                    icon: Repeat
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
            { label: 'Software & Technology', href: '/netsuite/industries/software-and-technology', description: 'Tools for modern software companies.', icon: Monitor },
            { label: 'IT & Professional Services', href: '/netsuite/industries/it-and-professional-services', description: 'Scaling solutions for IT firms.', icon: Briefcase },
            { label: 'Wholesale Distribution', href: '/netsuite/industries/wholesale-distribution', description: 'Optimize supply chain & inventory.', icon: Truck },
            { label: 'Advertising & Marketing', href: '/netsuite/industries/advertising-and-digital-marketing-agencies', description: 'Boost your digital campaigns.', icon: Megaphone },
            { label: 'Media & Publishing', href: '/netsuite/industries/media-and-publishing', description: 'Solutions for media operations.', icon: Newspaper },
            { label: 'Retail & E-Commerce', href: '/netsuite/industries/retail-and-e-commerce', description: 'End-to-end retail automation.', icon: Store },
            { label: 'Transportation & Logistics', href: '/netsuite/industries/transportation-and-logistics', description: 'Smart logistics solutions.', icon: Truck },
            { label: 'Manufacturing', href: '/netsuite/industries/manufacturing', description: 'Streamline production cycles.', icon: Factory },
            { label: 'Telecom Industry', href: '/netsuite/industries/telecom-industry', description: 'Modernize billing & telecom operations.', icon: Wifi },
            { label: 'Financial Services', href: '/netsuite/industries/financial-services', description: 'Compliance, risk & real-time insights.', icon: DollarSign },
        ],
    },

    // ---------------- INSIGHTS ----------------
    {
        title: 'Insights',
        children: [
            { label: 'Blogs', href: '/netsuite/blogs', description: 'Latest posts & insights.', icon: MessageSquare },
            { label: 'Case Studies', href: '/netsuite/case-studies', description: 'Our success stories.', icon: BookOpen },
            { label: 'Events', href: '/netsuite/insights#events', description: 'Webinars & workshops.', icon: Calendar },
            { label: 'Pricing Calculator', href: '/netsuite/insights#pricing-calculator', description: 'Estimate your NetSuite ROI.', icon: Calculator },
            { label: 'Awards & Achievements', href: '/netsuite/insights#awards', description: 'Recognition & milestones.', icon: Trophy },
        ],
    },

    // ---------------- CONTACT ----------------
    {
        title: 'Contact',
        children: [
            { label: 'Careers', href: '/netsuite/contact/careers', description: 'Join our growing team.', icon: Briefcase },
            { label: 'Support', href: '/netsuite/contact/support', description: '24/7 client support.', icon: Headset },
            { label: 'Request Quote', href: '/netsuite/contact/request-quote', description: 'Get a project estimate.', icon: FileText },
            { label: 'Free Consultation', href: '/netsuite/free-consultation', description: 'Talk to an expert.', icon: HelpCircle }
        ],
    },
];
