import { Button } from '../../components/Button';

interface NSHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
}

export function NSHero({
  title,
  subtitle,
  description,
  ctaText = "Get Started",
  ctaHref = "/netsuite/contact"
}: NSHeroProps) {
  return (
    <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <h2 className="text-2xl font-light mb-8 text-orange-100">{subtitle}</h2>
          <p className="text-xl mb-8 text-orange-50">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-50"
              href={ctaHref}
            >
              {ctaText}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
              href="/netsuite/solutions"
            >
              View All Solutions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
