import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "/logo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sky-blue/75 backdrop-blur-sm border-b border-border">
      <nav aria-label="Main" className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <a href="#top" className="flex items-center">
            <img
              src={logo}
              alt="Azul de Canarias"
              width={315}
              height={200}
              /* Height-constrained so the 1.575 landscape ratio is preserved;
                 shrinks on scroll via the header's own padding, CSS only. */
              className="h-14 w-auto object-contain md:h-16"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-text-dark hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#properties"
              className="text-text-dark hover:text-primary transition-colors"
            >
              Properties
            </a>
            <a
              href="#contact"
              className="text-text-dark hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden text-text-dark p-2"
          >
            {mobileMenuOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <div className="flex flex-col gap-4 border-t border-border pt-4">
              <a
                href="#services"
                className="text-text-dark hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#properties"
                className="text-text-dark hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Properties
              </a>
              <a
                href="#contact"
                className="text-text-dark hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
