import React from 'react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  variant?: 'blue' | 'orange' | 'dark'; // Blue for Zoho, Orange for NetSuite? or simple logic
}

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryBtnText,
  primaryBtnHref,
  secondaryBtnText,
  secondaryBtnHref,
  variant = 'blue'
}) => {
  const bgClass = {
    blue: 'bg-blue-600',
    orange: 'bg-orange-600',
    dark: 'bg-gray-900'
  }[variant];

  return (
    <section className={`py-20 ${bgClass} text-white`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
        <p className="text-xl opacity-90 mb-10 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryBtnHref}
            className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            {primaryBtnText}
          </Link>
          
          {secondaryBtnText && secondaryBtnHref && (
            <Link
              href={secondaryBtnHref}
              className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              {secondaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
