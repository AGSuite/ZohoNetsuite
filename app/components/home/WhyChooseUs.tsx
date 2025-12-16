import React from 'react';

interface ReasonItem {
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  title?: string;
  items: ReasonItem[];
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ 
  title = "Why Choose AGSuite?", 
  items 
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-16 text-center">{title}</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
