export function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-ocean-blue via-primary to-ocean-blue-light relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="font-serif text-white mb-6" style={{ fontSize: '2.5rem' }}>
          Ready to Find Your Place in Tenerife?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
          Start your journey today with a free, no-obligation consultation. Our experts are here to help.
        </p>
        <button className="px-10 py-5 bg-white text-primary rounded-full hover:bg-white/90 transition-all shadow-2xl hover:shadow-xl hover:scale-105">
          Book a Free Consultation
        </button>
      </div>
    </section>
  );
}
