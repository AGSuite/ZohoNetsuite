import Link from 'next/link';
import { ZohoCard } from '../components/ZohoCard';

export default function ZohoServicesPage() {
  const services = [
    {
      title: "Digital Transformation",
      description: "Transform your business processes with modern technology solutions and digital workflows.",
      icon: "ðŸš€",
      href: "/zoho/services/digital-transformation",
      features: ["Process Automation", "Digital Strategy", "Change Management", "Technology Assessment"]
    },
    {
      title: "Integration Services",
      description: "Connect Zoho applications with your existing systems for seamless data flow and unified operations.",
      icon: "ðŸ”—",
      href: "/zoho/services/integration-services",
      features: ["API Integration", "Custom Connectors", "Data Migration", "System Synchronization"]
    },
    {
      title: "Training Services",
      description: "Comprehensive training programs to ensure your team maximizes the value from Zoho solutions.",
      icon: "ðŸ“š",
      href: "/zoho/services/training-services",
      features: ["User Training", "Admin Training", "Custom Training", "Ongoing Support"]
    },
    {
      title: "Low-Code Development",
      description: "Custom application development using Zoho's low-code platform to meet specific business needs.",
      icon: "âš™ï¸",
      href: "/zoho/services/low-code-development",
      features: ["Custom Apps", "Workflow Automation", "Form Building", "Report Customization"]
    },
    {
      title: "Managed Services",
      description: "Ongoing support and management of your Zoho environment to ensure optimal performance.",
      icon: "ðŸ› ï¸",
      href: "/zoho/services/managed-services",
      features: ["System Monitoring", "Updates & Maintenance", "Performance Optimization", "24/7 Support"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert team provides comprehensive implementation, training, and support services
            to ensure your Zoho investment delivers maximum value and ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{service.icon}</span>
                <h2 className="text-xl font-semibold text-gray-900">{service.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="space-y-1 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <span className="text-green-500 mr-2">âœ“</span>
                    {feature}
                  </div>
                ))}
              </div>
              <Link
                href={service.href}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                Learn More â†’
              </Link>
            </div>
          ))}
        </div>

        {/* Why Choose Our Services */}
        <section className="bg-white rounded-lg p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600">Expert guidance throughout your Zoho journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">ðŸŽ¯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Experts</h3>
              <p className="text-gray-600 text-sm">Zoho-certified consultants with years of experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">âš¡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Implementation</h3>
              <p className="text-gray-600 text-sm">Accelerated deployment with proven methodologies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">ðŸ›¡ï¸</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600 text-sm">Continuous assistance and system optimization</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">ðŸ“ˆ</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Measurable Results</h3>
              <p className="text-gray-600 text-sm">Focus on delivering tangible business outcomes</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-blue-600 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our experts for a free consultation and discover how our professional services
            can accelerate your Zoho implementation and maximize your ROI.
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
              Get Service Quote
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

