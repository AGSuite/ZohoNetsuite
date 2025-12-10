import Link from 'next/link';
import { NSHero } from './components/NSHero';
import { NSCard } from './components/NSCard';

export default function NetSuitePage() {
  return (
    <div>
      <NSHero
        title="NetSuite Solutions"
        subtitle="Enterprise ERP & CRM Platform"
        description="Transform your enterprise with Oracle NetSuite's comprehensive cloud platform. Streamline operations, gain real-time insights, and scale your business with integrated ERP, CRM, and e-commerce solutions designed for growing enterprises."
        ctaText="Explore Solutions"
        ctaHref="/netsuite/solutions"
      />

      {/* Key Solutions Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover NetSuite's powerful enterprise solutions that drive growth and efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NSCard
              title="Core ERP"
              description="Complete enterprise resource planning with financial management, inventory control, and order processing."
              icon="ðŸ¢"
              href="/netsuite/solutions/core-erp"
            />

            <NSCard
              title="Customer Management"
              description="Advanced CRM with sales automation, customer service, and marketing tools for better customer relationships."
              icon="ðŸ¤"
              href="/netsuite/solutions/customer-management"
            />

            <NSCard
              title="Analytics & Intelligence"
              description="Real-time business intelligence with advanced analytics, dashboards, and AI-powered insights."
              icon="ðŸ“Š"
              href="/netsuite/solutions/analytics-intelligence"
            />

            <NSCard
              title="E-commerce"
              description="Integrated online store management with order fulfillment, payment processing, and customer experience tools."
              icon="ðŸ›’"
              href="/netsuite/solutions/ecommerce"
            />

            <NSCard
              title="Project Management"
              description="Comprehensive project planning, resource allocation, and time tracking for professional services."
              icon="ðŸ“‹"
              href="/netsuite/solutions/project-management"
            />

            <NSCard
              title="SuiteSuccess"
              description="Dedicated customer success program with personalized support, training, and optimization services."
              icon="â­"
              href="/netsuite/solutions/specialized-solutions/suitesuccess"
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
              Expert implementation and support to maximize your NetSuite investment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/netsuite/services/digital-transformation">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ðŸš€</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Digital Transformation</h3>
                <p className="text-gray-600 text-sm">Modernize your business processes</p>
              </div>
            </Link>

            <Link href="/netsuite/services/implementation">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">âš™ï¸</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600 text-sm">Expert deployment and configuration</p>
              </div>
            </Link>

            <Link href="/netsuite/services/integration">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ðŸ”—</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Integration</h3>
                <p className="text-gray-600 text-sm">Connect all your systems seamlessly</p>
              </div>
            </Link>

            <Link href="/netsuite/services/managed-services">
              <div className="p-6 border border-gray-200 rounded-lg hover:border-orange-300 hover:shadow-md transition-all duration-200 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ðŸ› ï¸</span>
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
              Specialized solutions for businesses across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">ðŸ­</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Manufacturing</h3>
              <p className="text-gray-600">Production planning, inventory management, quality control</p>
              <Link href="/netsuite/industries/manufacturing" className="text-orange-600 hover:text-orange-800 mt-2 inline-block">
                Learn more â†’
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">ðŸ›’</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Retail & E-commerce</h3>
              <p className="text-gray-600">Omnichannel retail, online stores, supply chain management</p>
              <Link href="/netsuite/industries/retail-ecommerce" className="text-orange-600 hover:text-orange-800 mt-2 inline-block">
                Learn more â†’
              </Link>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">ðŸ’¼</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Services</h3>
              <p className="text-gray-600">Project management, resource planning, billing automation</p>
              <Link href="/netsuite/industries/professional-services" className="text-orange-600 hover:text-orange-800 mt-2 inline-block">
                Learn more â†’
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

