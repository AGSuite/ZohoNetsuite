import Link from 'next/link';
import { Button } from '../../../../components/Button';
import { ZohoCard } from '../../../components/ZohoCard';

export default function ZohoCRMPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">Zoho CRM</h1>
            <p className="text-xl mb-8 text-blue-100">
              Complete customer relationship management solution that helps you manage leads,
              track deals, automate sales processes, and grow your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-50"
                href="/zoho/contact/free-consultation"
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                href="/zoho/contact/request-quote"
              >
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need to manage and grow customer relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">ðŸŽ¯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lead Management</h3>
              <p className="text-gray-600">Capture, nurture, and convert leads from multiple sources with automated workflows.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">ðŸ“ˆ</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sales Automation</h3>
              <p className="text-gray-600">Automate repetitive tasks, follow-ups, and sales processes to close deals faster.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">ðŸ“Š</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Analytics & Reporting</h3>
              <p className="text-gray-600">Get insights into your sales performance with customizable dashboards and reports.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">ðŸ“±</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Access</h3>
              <p className="text-gray-600">Access your CRM data on-the-go with native mobile apps for iOS and Android.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">ðŸ”—</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Integration</h3>
              <p className="text-gray-600">Seamlessly integrate with email, social media, e-commerce, and other business tools.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">ðŸŽ«</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Support</h3>
              <p className="text-gray-600">Built-in customer support tools to provide excellent service and track interactions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-gray-600">Flexible pricing options to fit your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Standard</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$20</div>
              <div className="text-gray-600 mb-6">per user/month</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Lead Management</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Basic Automation</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Standard Reports</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Email Integration</li>
              </ul>
              <Button variant="primary" className="w-full">Get Started</Button>
            </div>

            <div className="border-2 border-blue-500 rounded-lg p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$35</div>
              <div className="text-gray-600 mb-6">per user/month</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> All Standard Features</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Advanced Automation</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Custom Reports</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> API Access</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Phone Integration</li>
              </ul>
              <Button variant="primary" className="w-full">Get Started</Button>
            </div>

            <div className="border border-gray-200 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">Custom</div>
              <div className="text-gray-600 mb-6">pricing</div>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> All Professional Features</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Unlimited Users</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Custom Integrations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> Dedicated Support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">âœ“</span> SLA Guarantee</li>
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Complementary Solutions</h2>
            <p className="text-xl text-gray-600">Enhance your CRM with these integrated Zoho solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ZohoCard
              title="Zoho CRM Plus"
              description="CRM bundled with inventory, invoicing, and project management"
              icon="ðŸ“¦"
              href="/zoho/solutions/sales/zoho-crm-plus"
            />
            <ZohoCard
              title="Zoho Bigin"
              description="Simplified CRM for small businesses and startups"
              icon="ðŸš€"
              href="/zoho/solutions/sales/zoho-bigin"
            />
            <ZohoCard
              title="Zoho Desk"
              description="Customer support and helpdesk integrated with CRM"
              icon="ðŸŽ«"
              href="/zoho/solutions/service/zoho-desk"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

