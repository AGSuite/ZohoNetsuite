import React from 'react';
import Link from 'next/link';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  href: string;
}

interface BlogSectionProps {
  title?: string;
  posts: BlogPost[];
  viewAllHref: string;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ 
  title = "Latest Insights", 
  posts, 
  viewAllHref 
}) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <Link href={viewAllHref} className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
            View All Articles &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
             <Link key={index} href={post.href} className="group block h-full">
              <div className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                   {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="text-blue-600 font-medium">Read More</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
