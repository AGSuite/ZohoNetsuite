import { Button } from '../../components/Button';

interface ZohoHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function ZohoHero({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaHref = "/zoho/contact"
}: ZohoHeroProps) {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <h2 className="text-2xl font-light mb-8 text-blue-100">{subtitle}</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto text-blue-50">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-50"
              href={ctaHref}
            >
              {ctaText}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              href="/zoho/solutions"
            >
              View All Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
