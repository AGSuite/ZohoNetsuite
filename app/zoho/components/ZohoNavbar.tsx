import Link from 'next/link';
import { Button } from '../../components/Button';

export function ZohoNavbar() {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="/zoho" className="text-2xl font-bold">
            Zoho Solutions
          </Link>

          <div className="hidden lg:flex items-center space-x-6">
            <div className="relative group">
              <button className="hover:text-blue-200 transition-colors">
                Solutions ▼
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white text-gray-900 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Link href="/zoho/solutions/sales" className="block px-3 py-2 hover:bg-blue-50 rounded text-sm">Sales</Link>
                      <Link href="/zoho/solutions/hr" className="block px-3 py-2 hover:bg-blue-50 rounded text-sm">HR</Link>
                      <Link href="/zoho/solutions/finance" className="block px-3 py-2 hover:bg-blue-50 rounded text-sm">Finance</Link>
                      <Link href="/zoho/solutions/projects" className="block px-3 py-2 hover:bg-blue-50 rounded text-sm">Projects</Link>
                      <Link href="/zoho/solutions/service" className="block px-3 py-2 hover:bg-blue-50 rounded text-sm">Service</Link>
                    </div>
                    <div>
                      <Link href="/zoho/solutions/marketing" className="block px-3 py-2 hover:bg-blue-50 rounded text-sm">Marketing</Link>
                      <Link href="/zoho/solutions/analytics" className="block px-3 py-2 hover:bg-blue-50 rounded text-sm">Analytics</Link>
                      <Link href="/zoho/solutions/it-management" className="block px-3 py-2 hover:bg-blue-50 rounded text-sm">IT Management</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/zoho/services" className="hover:text-blue-200 transition-colors">
              Services
            </Link>
            <Link href="/zoho/industries" className="hover:text-blue-200 transition-colors">
              Industries
            </Link>
            <Link href="/zoho/insights" className="hover:text-blue-200 transition-colors">
              Insights
            </Link>
            <Link href="/zoho/about-us" className="hover:text-blue-200 transition-colors">
              About Us
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="outline" size="sm" className="bg-white text-blue-600 border-white hover:bg-gray-50">
              ← Back to Home
            </Button>
          </Link>
          <Link href="/zoho/contact">
            <Button variant="secondary" size="sm">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
