import Link from 'next/link';
import { ZohoHero } from './components/ZohoHero';
import { ZohoCard } from './components/ZohoCard';

export default function ZohoPage() {
  return (
    <div>
      <ZohoHero
        title="Zoho Solutions"
        subtitle="Complete Business Software Suite"
        description="Transform your business with Zoho's integrated suite of applications. From CRM and HR to finance and marketing, streamline operations and boost productivity with powerful, easy-to-use tools designed for modern businesses."
        ctaText="Explore Solutions"
        ctaHref="/zoho/solutions"
      />

      {/* Key Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Solutions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most powerful business applications that drive growth and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ZohoCard
              title="Zoho CRM"
              description="Complete customer relationship management solution with sales automation, marketing campaigns, and customer support."
              icon="ðŸŽ¯"
              href="/zoho/solutions/sales/zoho-crm"
            />

            <ZohoCard
              title="Zoho People"
              description="Comprehensive HR management system for employee lifecycle, payroll, and workforce analytics."
              icon="ðŸ‘¥"
              href="/zoho/solutions/hr/zoho-people"
            />

            <ZohoCard
              title="Zoho Books"
              description="Cloud-based accounting software for invoicing, expense tracking, and financial reporting."
              icon="ðŸ“Š"
              href="/zoho/solutions/finance/zoho-books"
            />

            <ZohoCard
              title="Zoho Projects"
              description="Project management tool with time tracking, resource allocation, and collaboration features."
              icon="ðŸ“‹"
              href="/zoho/solutions/projects/zoho-projects"
            />

            <ZohoCard
              title="Zoho Desk"
              description="Customer support ticketing system with multi-channel support and automation capabilities."
              icon="ðŸŽ«"
              href="/zoho/solutions/service/zoho-desk"
            />

            <ZohoCard
              title="Zoho Analytics"
              description="Business intelligence platform for data visualization, dashboards, and advanced analytics."
              icon="ðŸ“ˆ"
              href="/zoho/solutions/analytics/zoho-analytics"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Expert implementation, training, and support to maximize your Zoho investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/zoho/services/digital-transformation">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ðŸš€</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                <p className="text-gray-600 text-sm">Modernize your business processes</p>
              </div>
            </Link>

            <Link href="/zoho/services/integration-services">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ðŸ”—</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Integration Services</h3>
                <p className="text-gray-600 text-sm">Connect all your systems seamlessly</p>
              </div>
            </Link>

            <Link href="/zoho/services/training-services">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ðŸ“š</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Training Services</h3>
                <p className="text-gray-600 text-sm">Empower your team with expertise</p>
              </div>
            </Link>

            <Link href="/zoho/services/managed-services">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">âš™ï¸</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Managed Services</h3>
                <p className="text-gray-600 text-sm">Ongoing support and optimization</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tailored solutions for businesses across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">ðŸ’¼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Services</h3>
              <p className="text-gray-600">IT consulting, legal firms, accounting practices</p>
              <Link href="/zoho/industries/it-professional-services" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn more â†’
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">ðŸ­</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Production management, inventory control, quality assurance</p>
              <Link href="/zoho/industries/manufacturing" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn more â†’
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">ðŸ›’</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Retail & E-commerce</h3>
              <p className="text-gray-600">Online stores, inventory management, customer analytics</p>
              <Link href="/zoho/industries/retail-ecommerce" className="text-blue-600 hover:text-blue-800 mt-2 inline-block">
                Learn more â†’
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

