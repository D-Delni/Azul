import { MapPin, Home, Users, Globe } from 'lucide-react';

const benefits = [
  {
    icon: MapPin,
    title: 'Local Tenerife Market Guidance',
    description: 'Expert knowledge of neighborhoods, pricing, and hidden gems across the island.',
  },
  {
    icon: Home,
    title: 'Handpicked Holiday Homes',
    description: 'Curated selection of premium properties that match your lifestyle and investment goals.',
  },
  {
    icon: Users,
    title: 'Support for European Buyers',
    description: 'Navigate Spanish property law and tax requirements with confidence and ease.',
  },
  {
    icon: Globe,
    title: 'Multilingual Assistance',
    description: 'Communicate in your language. We support English, German, French, and Spanish.',
  },
];

export function Benefits() {
  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-sky-blue to-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif mb-4" style={{ fontSize: '2.5rem' }}>
            Why Choose Azul de Canarias
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Browse properties anytime on mobile and desktop with expert guidance every step of the way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border"
              >
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif mb-3" style={{ fontSize: '1.25rem' }}>
                  {benefit.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
