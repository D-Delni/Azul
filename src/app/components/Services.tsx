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
          {/* Not sticky. With nine rows the list runs well past the heading,
              and pinning it leaves the heading stranded at the top for most of
              the section's scroll. It reads better travelling with the page. */}
          <div className="lg:self-start">
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

            {/* The section's summary, not a tenth service — held apart by the
                accent rule and set at reading size rather than as a list row. */}
            <p className="mt-16 max-w-2xl border-t-2 border-ocean-blue-light pt-10 text-lg leading-relaxed text-primary">
              One trusted point of contact in Tenerife for Real Estate, Property
              Management, Residency &amp; Work Documentation, Accounting &amp;
              Tax Assistance, Banking, Mortgages, and comprehensive client
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
