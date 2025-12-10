import Link from 'next/link';
import { ZohoCard } from '../components/ZohoCard';

export default function ZohoSolutionsPage() {
  const solutionCategories = [
    {
      title: "Sales & CRM",
      description: "Complete customer relationship management and sales automation solutions",
      icon: "ðŸŽ¯",
      href: "/zoho/solutions/sales",
      items: ["Zoho CRM", "Zoho CRM Plus", "Zoho Bigin"]
    },
    {
      title: "HR & People Management",
      description: "Comprehensive human resources and workforce management tools",
      icon: "ðŸ‘¥",
      href: "/zoho/solutions/hr",
      items: ["Zoho People", "Zoho Recruit", "Zoho People Plus", "Zoho Payroll", "Zoho Expense"]
    },
    {
      title: "Finance & Accounting",
      description: "Cloud-based financial management and accounting solutions",
      icon: "ðŸ’°",
      href: "/zoho/solutions/finance",
      items: ["Zoho Books", "Zoho Inventory", "Zoho Finance Plus"]
    },
    {
      title: "Project Management",
      description: "Tools for planning, tracking, and managing projects effectively",
      icon: "ðŸ“‹",
      href: "/zoho/solutions/projects",
      items: ["Zoho Projects", "Zoho Sprints"]
    },
    {
      title: "Customer Service",
      description: "Multi-channel customer support and service management",
      icon: "ðŸŽ«",
      href: "/zoho/solutions/service",
      items: ["Zoho Desk", "Zoho Sales IQ", "Zoho FSM"]
    },
    {
      title: "Marketing & Commerce",
      description: "Digital marketing, website building, and e-commerce solutions",
      icon: "ðŸ“¢",
      href: "/zoho/solutions/marketing",
      items: ["Zoho Sites", "Zoho Social", "Zoho Commerce", "Zoho Marketing Automation", "Zoho Marketing Plus"]
    },
    {
      title: "Analytics & Intelligence",
      description: "Business intelligence and data analytics platforms",
      icon: "ðŸ“Š",
      href: "/zoho/solutions/analytics",
      items: ["Zoho Analytics", "Zoho Flow"]
    },
    {
      title: "Development Platforms",
      description: "Low-code development and application building tools",
      icon: "âš™ï¸",
      href: "/zoho/solutions/dev-platforms",
      items: ["Zoho Creator", "Zoho Catalyst"]
    },
    {
      title: "IT Management",
      description: "IT service management and business suite solutions",
      icon: "ðŸ–¥ï¸",
      href: "/zoho/solutions/it-management",
      items: ["Zoho IT Management", "Complete Suite", "Zoho One"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Zoho Solutions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive suite of business applications designed to streamline operations,
            boost productivity, and drive growth across all areas of your organization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="space-y-1 mb-4">
                {category.items.slice(0, 3).map((item, itemIndex) => (
                  <div key={itemIndex} className="text-sm text-gray-500">â€¢ {item}</div>
                ))}
                {category.items.length > 3 && (
                  <div className="text-sm text-blue-600">+{category.items.length - 3} more</div>
                )}
              </div>
              <Link
                href={category.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Explore Solutions â†’
              </Link>
            </div>
          ))}
        </div>

        {/* Popular Solutions Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Most Popular Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ZohoCard
              title="Zoho CRM"
              description="Complete sales and customer management platform"
              icon="ðŸŽ¯"
              href="/zoho/solutions/sales/zoho-crm"
            />
            <ZohoCard
              title="Zoho Books"
              description="Cloud accounting and invoicing software"
              icon="ðŸ“Š"
              href="/zoho/solutions/finance/zoho-books"
            />
            <ZohoCard
              title="Zoho People"
              description="HR and workforce management system"
              icon="ðŸ‘¥"
              href="/zoho/solutions/hr/zoho-people"
            />
            <ZohoCard
              title="Zoho Desk"
              description="Customer support and helpdesk solution"
              icon="ðŸŽ«"
              href="/zoho/solutions/service/zoho-desk"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing the Right Solutions?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our experts can help you identify the perfect combination of Zoho applications
            for your specific business needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/zoho/contact/free-consultation"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/zoho/contact/request-quote"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

