import React from 'react';

interface Feature {
  title: string;
  description: string;
}

interface PageTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  ctaText: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  title,
  subtitle,
  description,
  features,
  ctaText,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              {title}
            </h1>
            <p className="text-xl sm:text-2xl text-blue-600 font-medium mb-6">
              {subtitle}
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">{ctaText}</h2>
          <div className="relative inline-flex group">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg group-hover:opacity-100 transition duration-700" />
            <button className="relative px-8 py-3 rounded-xl bg-gray-900 text-white font-semibold shadow-xl">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageTemplate;
