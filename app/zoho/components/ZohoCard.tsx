import { Card } from '../../components/Card';

interface ZohoCardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  className?: string;
}

export function ZohoCard({ title, description, icon, href, className }: ZohoCardProps) {
  const content = (
    <div className="p-6">
      {icon && (
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <span className="text-2xl">{icon}</span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block h-full">
        <Card className={`h-full hover:border-blue-300 transition-all duration-200 hover:shadow-lg ${className}`}>
          {content}
        </Card>
      </a>
    );
  }

  return (
    <Card className={`h-full ${className}`}>
      {content}
    </Card>
  );
}
