import { Target, Heart, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Target,
    number: '01',
    title: 'Set Your Goals',
    description: 'Define your budget, preferred location, and property type. We listen to your vision.',
  },
  {
    icon: Heart,
    number: '02',
    title: 'Get Personalized Guidance',
    description: 'Receive tailored recommendations from local experts who know Tenerife inside and out.',
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Visit and Buy with Confidence',
    description: 'Full support through property visits, paperwork, and all the way to getting your keys.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif mb-4" style={{ fontSize: '2.5rem' }}>
            How It Works
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            A simple, transparent process designed around you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-accent to-transparent -translate-x-6"></div>
                )}

                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-ocean-blue-light rounded-full mb-6 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-serif text-accent mb-4 opacity-50">
                    {step.number}
                  </div>
                  <h3 className="font-serif mb-3" style={{ fontSize: '1.5rem' }}>
                    {step.title}
                  </h3>
                  <p className="text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
