import { Facebook, Link2 } from "lucide-react";

import { business, platforms, PROFILE_URL_TODO } from "../../content/site";

/**
 * ⚠️ ICON_TODO — lucide-react carries a Facebook mark and nothing for
 * Booking.com or Airbnb, and simple-icons is not installed. Those two fall back
 * to a neutral link glyph rather than a guessed or hand-drawn brand mark.
 *
 * All three render monochrome in mint, so the stack shares one visual language
 * instead of importing three brand palettes into the navy panel.
 */
const MARKS: Record<string, typeof Facebook> = {
  facebook: Facebook,
  booking: Link2,
  airbnb: Link2,
};

/**
 * Contact. No form: this is a static site with nowhere to post to, and a form
 * would create a GDPR obligation for no benefit. Direct channels only.
 *
 * WhatsApp leads deliberately — it is how this audience makes first contact —
 * so it gets the solid button and everything else is a plain link.
 *
 * Two-tone split: she sits on the pale wash at roughly a third of the width and
 * bleeds off the left edge; the details, which are the functional content, take
 * the navy two thirds.
 */
export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-ocean-blue"
    >
      <div className="grid lg:grid-cols-[1fr_2fr]">
        {/* Portrait: no padding anywhere, so it runs to the page edge. Bottom
            aligned, with the wash carrying the space above her. */}
        <div className="flex items-end bg-sky-blue">
          <picture className="w-full">
            <source srcSet="/portrait.webp" type="image/webp" />
            <img
              src="/portrait.jpg"
              /* NAME_TODO — this alt should name her once her name is known. */
              alt="The agent behind Azul de Canarias"
              width={640}
              height={879}
              loading="lazy"
              decoding="async"
              className="block w-full object-cover object-top"
            />
          </picture>
        </div>

        <div className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] lg:gap-16">
            <div>
          <h2
            id="contact-heading"
            // See BlueThatConnects: the global h1-h6 serif rule is unlayered,
            // so only an inline style can override it here.
            style={{ fontFamily: "var(--font-sans)" }}
            className="text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl"
          >
            Contact
          </h2>

          <div className="mt-7 h-1 w-20 bg-ocean-blue-light" />

          {/* White on navy, 11.5:1 — the solid button carries the priority. */}
          <a
            href={business.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-ocean-blue-pale focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Message me on WhatsApp
          </a>

          <dl className="mt-14 max-w-md space-y-6">
            <div className="border-t border-white/15 pt-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-blue-pale">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={business.phoneHref}
                  className="text-white underline-offset-4 hover:underline"
                >
                  {business.phoneDisplay}
                </a>
              </dd>
            </div>

            <div className="border-t border-white/15 pt-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-blue-pale">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${business.email}`}
                  className="text-white underline-offset-4 hover:underline"
                >
                  {business.email}
                </a>
              </dd>
            </div>

            <div className="border-t border-white/15 pt-6">
              <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-ocean-blue-pale">
                Office
              </dt>
              <dd className="mt-2">
                <address className="not-italic leading-relaxed text-white/85">
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </dd>
            </div>
          </dl>
            </div>

            {/* Platform profiles. Inert elements, not anchors: every url is
                still PROFILE_URL_TODO, and an href="#" would look wired and
                ship broken. On mobile these simply fall below the details —
                nothing above them moves. */}
            <ul className="space-y-4 lg:pt-2">
              {platforms.map((platform) => {
                const Mark = MARKS[platform.id] ?? Link2;
                const pending = platform.url === PROFILE_URL_TODO;
                return (
                  <li
                    key={platform.id}
                    className="border border-white/15 p-5"
                    aria-disabled={pending || undefined}
                  >
                    <div className="flex items-center gap-3">
                      <Mark
                        size={18}
                        aria-hidden="true"
                        className="shrink-0 text-ocean-blue-pale"
                      />
                      <span className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                        {platform.name}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-white/85">
                      {platform.context}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
