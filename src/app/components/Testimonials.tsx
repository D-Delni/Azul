import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie Mueller',
    location: 'Berlin, Germany',
    quote: 'Found the perfect holiday apartment in just two weeks. The team understood exactly what we were looking for.',
    avatar: 'https://i.pravatar.cc/150?img=1',
    benefit: 'Quick and seamless process',
  },
  {
    name: 'James Peterson',
    location: 'London, UK',
    quote: 'The multilingual support made everything so easy. They guided us through every legal step with patience.',
    avatar: 'https://i.pravatar.cc/150?img=13',
    benefit: 'Full legal support',
  },
  {
    name: 'Marie Dubois',
    location: 'Paris, France',
    quote: 'Their local knowledge is unmatched. We discovered a beautiful villa we would never have found on our own.',
    avatar: 'https://i.pravatar.cc/150?img=5',
    benefit: 'Access to exclusive properties',
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sand-beige">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif mb-4" style={{ fontSize: '2.5rem' }}>
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Join hundreds of happy homeowners who found their dream property in Tenerife.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all border border-border"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-text-dark mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-medium text-text-dark">{testimonial.name}</div>
                  <div className="text-sm text-text-muted">{testimonial.location}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="text-sm text-primary font-medium">
                  {testimonial.benefit}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
