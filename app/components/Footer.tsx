import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">ZohoNetSuite</h3>
            <p className="text-gray-600 text-sm">
              Your trusted partner for Zoho and NetSuite solutions.
            </p>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/zoho" className="hover:text-blue-600">Zoho Solutions</Link></li>
              <li><Link href="/netsuite" className="hover:text-blue-600">NetSuite Solutions</Link></li>
              <li><Link href="/services" className="hover:text-blue-600">Consulting</Link></li>
              <li><Link href="/contact" className="hover:text-blue-600">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/insights" className="hover:text-blue-600">Blog</Link></li>
              <li><Link href="/case-studies" className="hover:text-blue-600">Case Studies</Link></li>
              <li><Link href="/events" className="hover:text-blue-600">Events</Link></li>
              <li><Link href="/documentation" className="hover:text-blue-600">Documentation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-gray-900 mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Phone: +1 (555) 123-4567</li>
              <li>Email: info@zohonetsuite.com</li>
              <li>Address: 123 Business St, Suite 100</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>&copy; 2024 ZohoNetSuite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
