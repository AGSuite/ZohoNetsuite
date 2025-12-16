import React from 'react';

interface MetricItem {
  value: string;
  label: string;
  description?: string;
}

interface MetricsProps {
  title?: string;
  subtitle?: string;
  metrics: MetricItem[];
  bgColor?: string;
  textColor?: string;
}

export const Metrics: React.FC<MetricsProps> = ({ 
  title = "Our Impact", 
  subtitle, 
  metrics,
  bgColor = "bg-white",
  textColor = "text-gray-900"
}) => {
  return (
    <section className={`py-16 ${bgColor} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-xl opacity-80 max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-blue-600">
                {metric.value}
              </div>
              <div className="text-lg font-semibold mb-1">{metric.label}</div>
              {metric.description && (
                <div className="text-sm opacity-70">{metric.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
