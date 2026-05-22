import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-serif">A</span>
            </div>
            <span className="font-serif text-xl text-white">Azul de Canarias</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#programs" className="text-white/90 hover:text-white transition-colors">
              Programs for you
            </a>
            <a href="#media" className="text-white/90 hover:text-white transition-colors">
              Media
            </a>
            <a href="#contact" className="text-white/90 hover:text-white transition-colors">
              Contact us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg">
            <div className="flex flex-col gap-4 px-6">
              <a
                href="#programs"
                className="text-text-dark hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Programs for you
              </a>
              <a
                href="#media"
                className="text-text-dark hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Media
              </a>
              <a
                href="#contact"
                className="text-text-dark hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact us
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
