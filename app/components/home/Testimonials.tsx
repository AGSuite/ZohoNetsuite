import React from 'react';

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials: TestimonialItem[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  title = "What Our Clients Say",
  subtitle = "Success stories from businesses we've helped transform",
  testimonials
}) => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl relative">
              <div className="text-blue-200 text-6xl absolute top-4 left-6 leading-none">"</div>
              <p className="relative z-10 text-gray-700 italic mb-6 pt-6">
                {testimonial.quote}
              </p>
              <div className="flex items-center gap-4">
                {testimonial.image && (
                   // eslint-disable-next-line @next/next/no-img-element
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                )}
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
