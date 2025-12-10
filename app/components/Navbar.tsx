import Link from 'next/link';
import { Button } from './Button';

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            ZohoNetSuite
          </Link>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/zoho" className="text-gray-700 hover:text-blue-600 transition-colors">
            Zoho
          </Link>
          <Link href="/netsuite" className="text-gray-700 hover:text-blue-600 transition-colors">
            NetSuite
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm">
            Contact Us
          </Button>
        </div>
      </div>
    </nav>
  );
}
