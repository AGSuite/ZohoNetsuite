import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface CTAProps {
  title: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText?: string;
  secondaryBtnHref?: string;
  variant?: 'blue' | 'orange' | 'dark';
  bgImage?: string;
}

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryBtnText,
  primaryBtnHref,
  secondaryBtnText,
  secondaryBtnHref,
  variant = 'blue',
  bgImage
}) => {
  const bgClass = {
    blue: 'bg-blue-700',
    orange: 'bg-orange-600',
    dark: 'bg-gray-900'
  }[variant];

  return (
    <section className={`relative py-24 md:py-32 overflow-hidden ${!bgImage ? bgClass : ''} text-white`}>
      {bgImage && (
        <>
          <div className="absolute inset-0">
            <Image
              src={bgImage}
              alt="CTA Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className={`absolute inset-0 opacity-90 ${bgClass} mix-blend-multiply`} />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
        </>
      )}
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
          {title}
        </h2>
        <p className="text-xl md:text-2xl mb-12 text-gray-100 max-w-3xl mx-auto leading-relaxed font-medium">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            href={primaryBtnHref}
            className="group relative inline-flex items-center justify-center px-10 py-4 bg-white text-gray-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:-translate-y-1 active:scale-95"
          >
            {primaryBtnText}
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
          
          {secondaryBtnText && secondaryBtnHref && (
            <Link
              href={secondaryBtnHref}
              className="inline-flex items-center justify-center px-10 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-bold text-lg rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95"
            >
              {secondaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
