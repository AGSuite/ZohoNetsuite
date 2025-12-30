import CampaignIcon from '@mui/icons-material/Campaign';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import WorkIcon from '@mui/icons-material/Work';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ForumIcon from '@mui/icons-material/Forum';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EventIcon from '@mui/icons-material/Event';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import ComputerIcon from '@mui/icons-material/Computer';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import BuildIcon from '@mui/icons-material/Build';
import SettingsIcon from '@mui/icons-material/Settings';
import Groups from '@mui/icons-material/Groups';

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
                icon: Groups
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
                            title: 'Connectors',
                            items: [
                                { label: 'Magento 2 NetSuite Connector', href: '/netsuite/solutions/addons/connectors/magento2' },
                                { label: 'Amazon NetSuite Connector', href: '/netsuite/solutions/addons/connectors/amazon' },
                                { label: 'Shopify NetSuite Connector', href: '/netsuite/solutions/addons/connectors/shopify' },
                            ],
                        },
                        {
                            title: 'Other Add-ons',
                            items: [
                                { label: 'India Localization', href: '/netsuite/solutions/addons/india-localization' },
                                { label: 'Smart Commission App', href: '/netsuite/solutions/addons/smart-commission' },
                                { label: 'NetSuite Data Backup', href: '/netsuite/solutions/addons/data-backup' },
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
            { label: 'Digital Transformation', href: '/netsuite/services/digital-transformation', description: 'Modernize your business for the digital age.', icon: RocketLaunchIcon },
            { label: 'Integration Services', href: '/netsuite/services/integration-services', description: 'Seamlessly connect your systems.', icon: IntegrationInstructionsIcon },
            { label: 'Training Services', href: '/netsuite/services/training-services', description: 'Upskill your team with expert-led training.', icon: SchoolIcon },
            { label: 'Low-Code Application Development', href: '/netsuite/services/low-code', description: 'Build apps faster with minimal coding.', icon: BuildIcon },
            { label: 'Managed Services', href: '/netsuite/services/managed-services', description: 'End-to-end IT management & support.', icon: SettingsIcon },
        ],
    },

    // ---------------- INDUSTRIES ----------------
    {
        title: 'Industries',
        children: [
            { label: 'Software & Technology', href: '/netsuite/industries/software', description: 'Tools for modern software companies.', icon: ComputerIcon },
            { label: 'IT & Professional Services', href: '/netsuite/industries/it-services', description: 'Scaling solutions for IT firms.', icon: WorkIcon },
            { label: 'Wholesale Distribution', href: '/netsuite/industries/wholesale', description: 'Optimize supply chain & inventory.', icon: LocalShippingIcon },
            { label: 'Advertising & Marketing', href: '/netsuite/industries/advertising-marketing', description: 'Boost your digital campaigns.', icon: CampaignIcon },
            { label: 'Media & Publishing', href: '/netsuite/industries/media', description: 'Solutions for media operations.', icon: NewspaperIcon },
            { label: 'Retail & E-Commerce', href: '/netsuite/industries/retail', description: 'End-to-end retail automation.', icon: StoreIcon },
            { label: 'Transportation & Logistics', href: '/netsuite/industries/transport', description: 'Smart logistics solutions.', icon: LocalShippingIcon },
            { label: 'Manufacturing', href: '/netsuite/industries/manufacturing', description: 'Streamline production cycles.', icon: PrecisionManufacturingIcon },
        ],
    },

    // ---------------- INSIGHTS ----------------
    {
        title: 'Insights',
        children: [
            { label: 'Blogs', href: '/netsuite/blog', description: 'Latest posts & insights.', icon: ForumIcon },
            { label: 'Case Study', href: '/netsuite/casestudy', description: 'Our success stories.', icon: LocalLibraryIcon },
            { label: 'Events', href: '/netsuite/insights/events', description: 'Webinars & workshops.', icon: EventIcon },
            { label: 'Awards & Achievements', href: '/netsuite/insights/awards', description: 'Recognition & milestones.', icon: EmojiEventsIcon },
        ],
    },

    // ---------------- CONTACT ----------------
    {
        title: 'Contact',
        children: [
            { label: 'Careers', href: '/netsuite/contact/careers', description: 'Join our growing team.', icon: WorkIcon },
            { label: 'Support', href: '/netsuite/contact/support', description: '24/7 client support.', icon: SupportAgentIcon },
            { label: 'Request Quote', href: '/netsuite/contact/quote', description: 'Get a project estimate.', icon: RequestQuoteIcon },
            { label: 'Free Consultation', href: '/netsuite/free-consultation', description: 'Talk to an expert.', icon: ContactSupportIcon }
        ],
    },
];
