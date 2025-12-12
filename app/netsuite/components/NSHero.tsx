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
    <section className="bg-white text-gray-900 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <h2 className="text-2xl font-light mb-8 text-gray-600">{subtitle}</h2>
          <p className="text-xl mb-8 text-gray-500">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="secondary"
              size="lg"
              className="bg-orange-600 text-white hover:bg-orange-700 shadow-md"
              href={ctaHref}
            >
              {ctaText}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-orange-600 text-orange-600 hover:bg-orange-50"
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
