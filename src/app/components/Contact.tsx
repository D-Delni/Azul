import { siAirbnb, siBookingdotcom, siFacebook } from "simple-icons";

import { business, platforms, PROFILE_URL_TODO } from "../../content/site";

/**
 * All three marks come from simple-icons so they share one geometry and one
 * 24-unit grid. They are rendered in currentColor — mint, like everything else
 * in this panel — rather than each platform's own brand colour, which would
 * drag three unrelated palettes into the navy.
 *
 * simple-icons ships the paths under CC0; the marks themselves remain the
 * platforms' trademarks and are used here only to identify her profiles.
 */
const MARKS: Record<string, { title: string; path: string }> = {
  booking: siBookingdotcom,
  airbnb: siAirbnb,
  facebook: siFacebook,
};

function PlatformMark({ path }: { path: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={18}
      height={18}
      fill="currentColor"
      aria-hidden="true"
      className="shrink-0 text-ocean-blue-pale"
    >
      <path d={path} />
    </svg>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-ocean-blue"
    >
      <div className="grid lg:grid-cols-[1fr_2fr]">
        {/* Portrait: no padding anywhere, so it runs to the page edge. The
            panel's height comes from the navy column beside it — this column
            is a stretched grid item with no height of its own — so there is a
            box to centre her within. */}
        <div className="flex items-center bg-ocean-blue">
          <picture className="w-full">
            <source srcSet="/oficinaB.webp" type="image/webp" />
            <img
              src="/oficinaB.jpg"
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

          {/* Details and platform cards are two items in one grid row, so
              their tops align by construction rather than by an offset that
              would drift at other viewport sizes. */}
          <div className="mt-14 grid items-start gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,17rem)] lg:gap-16">
            <dl className="max-w-md space-y-6">
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

            {/* Platform profiles. Inert elements, not anchors: every url is
                still PROFILE_URL_TODO, and an href="#" would look wired and
                ship broken. On mobile these simply fall below the details —
                nothing above them moves. */}
            <ul className="space-y-4">
              {platforms.map((platform) => {
                const mark = MARKS[platform.id];
                const pending = platform.url === PROFILE_URL_TODO;
                return (
                  <li
                    key={platform.id}
                    /* lg:pt-6 rather than p-5 at the top: the details rows
                       open with a 1px rule plus pt-6, so this puts their first
                       labels on the same y instead of 4px apart. Desktop only —
                       mobile keeps the even padding it already had. */
                    className="border border-white/15 p-5 lg:pt-6"
                    aria-disabled={pending || undefined}
                  >
                    <div className="flex items-center gap-3">
                      {mark ? <PlatformMark path={mark.path} /> : null}
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
