import { Card } from '../../components/Card';

interface NSCardProps {
  title: string;
  description: string;
  icon?: string;
  href?: string;
  className?: string;
}

export function NSCard({ title, description, icon, href, className }: NSCardProps) {
  const content = (
    <div className="p-6">
      {icon && (
        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
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
        <Card className={`h-full hover:border-orange-300 transition-all duration-200 hover:shadow-lg ${className}`}>
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
