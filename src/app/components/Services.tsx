import { services } from "../../content/services";

/**
 * Services — replaces the old Benefits grid.
 *
 * Laid out after the brand PDF rather than a component-library default:
 * a narrow heading column with a teal accent bar, a hairline vertical rule,
 * and the services as a plain stacked list. No cards, no icons, no shadows —
 * the restraint is the brand.
 */
export function Services() {
  return (
    <section id="services" className="relative bg-white py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-20">
          {/* Heading column */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2
              // fonts.css sets h1-h6 to the serif in an UNLAYERED rule, which beats
              // every Tailwind utility regardless of specificity. Inline style is
              // the only local way over it; a font-sans class silently does nothing.
              style={{ fontFamily: "var(--font-sans)" }}
              className="text-3xl font-bold uppercase leading-tight tracking-tight text-primary sm:text-4xl"
            >
              Your property.
              <br />
              Your needs.
              <br />
              My expertise.
            </h2>

            {/* Short horizontal accent bar under the heading, as in the PDF. */}
            <div className="mt-7 h-1 w-20 bg-ocean-blue-light" />

            <p className="mt-8 font-medium leading-relaxed text-primary">
              Every client is different. And so is every property search.
            </p>

            <p className="mt-6 text-sm font-semibold uppercase leading-relaxed tracking-wide text-ocean-blue-light">
              Your needs come first.
              <br />
              The right property comes next.
            </p>
          </div>

          {/* Services list, divided from the heading by a hairline rule */}
          <div className="lg:border-l lg:border-border lg:pl-16">
            <ul>
              {services.map((service) => (
                <li
                  key={service.id}
                  className="border-t border-border py-8 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-8"
                >
                  <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-relaxed text-text-muted">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
