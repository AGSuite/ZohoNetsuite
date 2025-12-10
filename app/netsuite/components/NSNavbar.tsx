import Link from 'next/link';
import { Button } from '../../components/Button';

export function NSNavbar() {
  return (
    <nav className="bg-orange-600 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/netsuite" className="text-2xl font-bold">
            NetSuite Solutions
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="hover:text-orange-200 transition-colors">
                Solutions ▼
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Link href="/netsuite/solutions/core-erp" className="block px-3 py-2 hover:bg-orange-50 rounded text-sm">Core ERP</Link>
                      <Link href="/netsuite/solutions/customer-management" className="block px-3 py-2 hover:bg-orange-50 rounded text-sm">CRM</Link>
                      <Link href="/netsuite/solutions/analytics-intelligence" className="block px-3 py-2 hover:bg-orange-50 rounded text-sm">Analytics</Link>
                      <Link href="/netsuite/solutions/ecommerce" className="block px-3 py-2 hover:bg-orange-50 rounded text-sm">E-commerce</Link>
                    </div>
                    <div>
                      <Link href="/netsuite/solutions/project-management" className="block px-3 py-2 hover:bg-orange-50 rounded text-sm">Project Mgmt</Link>
                      <Link href="/netsuite/solutions/planning-budgeting" className="block px-3 py-2 hover:bg-orange-50 rounded text-sm">Planning</Link>
                      <Link href="/netsuite/solutions/connectors" className="block px-3 py-2 hover:bg-orange-50 rounded text-sm">Connectors</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/netsuite/services" className="hover:text-orange-200 transition-colors">
              Services
            </Link>
            <Link href="/netsuite/industries" className="hover:text-orange-200 transition-colors">
              Industries
            </Link>
            <Link href="/netsuite/insights" className="hover:text-orange-200 transition-colors">
              Insights
            </Link>
            <Link href="/netsuite/about-us" className="hover:text-orange-200 transition-colors">
              About Us
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="outline" size="sm" className="bg-white text-orange-600 border-white hover:bg-gray-50">
              ← Back to Home
            </Button>
          </Link>
          <Link href="/netsuite/contact">
            <Button variant="secondary" size="sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
