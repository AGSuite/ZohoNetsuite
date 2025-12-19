// navDataZoho.ts

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
                icon: Groups
            },
        ],
    },

    // ---------------- SOLUTIONS ----------------
    {
        title: "Solutions",
        children: [
            {
                label: "ZOHO",
                href: "/solutions/zoho",
                megaMenu: {
                    title: "Zoho Complete Suite of Applications",
                    description: "All the tools you need for sales, HR, operations & automation.",
                    categories: [
                        {
                            title: "Sales",
                            items: [
                                { label: "Zoho CRM", href: "/zoho/solutions/zohocrm" },
                                { label: "Zoho CRM Plus", href: "/zoho/solutions/zohocrmplus" },
                                { label: "Zoho Bigin", href: "/zoho/solutions/zohobigin" },
                            ]
                        },
                        {
                            title: "HR",
                            items: [
                                { label: "Zoho People", href: "/zoho/solutions/zohopeople" },
                                { label: "Zoho Recruit", href: "/zoho/solutions/zohorecruit" },
                                { label: "Zoho People Plus", href: "/zoho/solutions/zohopeopleplus" },
                                { label: "Zoho Payroll", href: "/zoho/solutions/zohopayroll" },
                                { label: "Zoho Expense", href: "/zoho/solutions/zohoexpense" },
                            ]
                        },
                        {
                            title: "Finance",
                            items: [
                                { label: "Zoho Books", href: "/zoho/solutions/zohobooks" },
                                { label: "Zoho Inventory", href: "/zoho/solutions/zohoinventory" },
                                { label: "Zoho Finance Plus", href: "/zoho/solutions/zohofinanceplus" },
                            ]
                        },
                        {
                            title: "Projects",
                            items: [
                                { label: "Zoho Projects", href: "/zoho/solutions/zohoprojects" },
                                { label: "Zoho Sprints", href: "/zoho/solutions/zohosprint" },
                            ]
                        },
                        {
                            title: "Service",
                            items: [
                                { label: "Zoho Desk", href: "/zoho/solutions/zohodesk" },
                                { label: "Zoho SalesIQ", href: "/zoho/solutions/zohosalesiq" },
                                { label: "Zoho FSM", href: "/zoho/solutions/zohofsm" },
                            ]
                        },
                        {
                            title: "Email & Collaboration",
                            items: [
                                { label: "Zoho Mail", href: "/zoho/solutions/zohomail" },
                                { label: "Zoho Workplace", href: "/zoho/solutions/zohoworkplace" },
                            ]
                        },
                        {
                            title: "Marketing",
                            items: [
                                { label: "Zoho Sites", href: "/zoho/solutions/zohosites" },
                                { label: "Zoho Social", href: "/zoho/solutions/zohosocial" },
                                { label: "Zoho Commerce", href: "/zoho/solutions/zohocommerce" },
                                { label: "Zoho Marketing Automation", href: "/zoho/solutions/zohomarketingauto" },
                                { label: "Zoho Marketing Plus", href: "/zoho/solutions/zohomarketingplus" },
                            ]
                        },
                        {
                            title: "BI & Analytics",
                            items: [
                                { label: "Zoho Analytics", href: "/zoho/solutions/zohoanalytics" },
                                { label: "Zoho Flow", href: "/zoho/solutions/zohoflow" },
                            ]
                        },
                        {
                            title: "Dev Platforms",
                            items: [
                                { label: "Zoho Creator", href: "/zoho/solutions/zohocreator" },
                                { label: "Zoho Catalyst", href: "/zoho/solutions/zohocatalyst" },
                            ]
                        },
                        {
                            title: "IT Management",
                            items: [
                                { label: "Zoho IT Management", href: "/zoho/solutions/zohoitmanagement" },
                            ]
                        },
                        {
                            title: "Complete Suite",
                            items: [
                                { label: "Zoho One", href: "/zoho/solutions/zohoone" },
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
            { label: 'Digital Transformation', href: '/zoho/services/digital-transformation', description: 'Modernize your business.', icon: RocketLaunchIcon },
            { label: 'Integration Services', href: '/zoho/services/integration-services', description: 'Connect systems easily.', icon: IntegrationInstructionsIcon },
            { label: 'Training Services', href: '/zoho/services/training-services', description: 'Expert-led training programs.', icon: SchoolIcon },
            { label: 'Low-Code App Development', href: '/zoho/services/low-code', description: 'Build apps faster.', icon: BuildIcon },
            { label: 'Managed Services', href: '/zoho/services/managed-services', description: 'Complete IT management.', icon: SettingsIcon },
        ]
    },

    // ---------------- INDUSTRIES ----------------
    {
        title: "Industries",
        children: [
            { label: 'Software & Technology', href: '/zoho/industries/software', description: 'Solutions for tech businesses.', icon: ComputerIcon },
            { label: 'IT & Professional Services', href: '/zoho/industries/it-services', description: 'Automation for service providers.', icon: WorkIcon },
            { label: 'Wholesale Distribution', href: '/zoho/industries/wholesale', description: 'Distribution & logistics tools.', icon: LocalShippingIcon },
            { label: 'Advertising & Marketing', href: '/zoho/industries/advertising-marketing', description: 'Boost your campaigns.', icon: CampaignIcon },
            { label: 'Media & Publishing', href: '/zoho/industries/media', description: 'Tools for media houses.', icon: NewspaperIcon },
            { label: 'Retail & E-Commerce', href: '/zoho/industries/retail', description: 'Retail automation suite.', icon: StoreIcon },
            { label: 'Transportation & Logistics', href: '/zoho/industries/transport', description: 'Smart logistics systems.', icon: LocalShippingIcon },
            { label: 'Manufacturing', href: '/zoho/industries/manufacturing', description: 'Optimize manufacturing cycles.', icon: PrecisionManufacturingIcon },
        ]
    },

    // ---------------- INSIGHTS ----------------
    {
        title: "Insights",
        children: [
            { label: 'Blogs', href: '/zoho/blog', description: 'Latest articles & updates.', icon: ForumIcon },
            { label: 'Case Study', href: '/zoho/casestudy', description: 'Our success stories.', icon: LocalLibraryIcon },
            { label: 'Events', href: '/zoho/insights/events', description: 'Workshops & webinars.', icon: EventIcon },
            { label: 'Awards & Achievements', href: '/zoho/insights/awards', description: 'Recognition & milestones.', icon: EmojiEventsIcon },
        ]
    },

    // ---------------- CONTACT ----------------
    {
        title: "Contact",
        children: [
            { label: 'Careers', href: '/zoho/contact/careers', description: 'Join our growing team.', icon: WorkIcon },
            { label: 'Support', href: '/zoho/contact/support', description: 'Get expert help.', icon: SupportAgentIcon },
            { label: 'Request Quote', href: '/zoho/contact/quote', description: 'Get project pricing.', icon: RequestQuoteIcon },
            { label: 'Free Consultation', href: '/zoho/free-consultation', description: 'Talk to our team.', icon: ContactSupportIcon }
        ]
    }
];
