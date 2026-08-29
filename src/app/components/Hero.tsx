export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1679913156021-ab9d1e6c7a7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZW5lcmlmZSUyMG9jZWFuJTIwY29hc3RsaW5lJTIwbHV4dXJ5JTIwdmlsbGF8ZW58MXx8fHwxNzc5NDM1NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Tenerife coastline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ocean-blue/90 via-ocean-blue/70 to-ocean-blue-light/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h1
              className="font-serif mb-6"
              style={{ fontSize: "3.5rem", lineHeight: "1.1" }}
            >
              Find Your Holiday Home in Tenerife
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Azul de Canarias helps European buyers discover beautiful homes in
              Tenerife with guidance, clarity, and local support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 ">
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-white text-primary rounded-full hover:bg-white/90 transition-all shadow-lg hover:shadow-xl text-center"
              >
                Start Your Journey
              </a>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all">
                Explore Properties
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-serif mb-2">500+</div>
                  <div className="text-white/80">Happy Homeowners</div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="text-4xl font-serif mb-2">9+</div>
                  <div className="text-white/80">Years of Experience</div>
                </div>
                <div className="h-px bg-white/20"></div>
                <div>
                  <div className="text-4xl font-serif mb-2">100%</div>
                  <div className="text-white/80">Multilingual Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
