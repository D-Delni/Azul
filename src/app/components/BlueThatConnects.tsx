import { Reveal, useInView, usePrefersReducedMotion } from "./Reveal";

/**
 * The Blue That Connects — the brand-story section.
 *
 * Copy is verbatim from the brand material. Two orthographic deviations from
 * its ASCII-only text layer, both deliberate: "Voroneț" carries its diacritic,
 * and the spaced hyphens are set as en dashes.
 *
 * Three movements down one spine — origin (navy), the Voroneț passage (mint
 * band), arrival (navy). The spine sits to the RIGHT of the text and reads as a
 * margin annotation, and it turns navy where the mint band crosses: it changes
 * character exactly where the background does.
 */

/** Outer cap, so the block never drifts past a comfortable position. */
const COLUMN = "mx-auto w-full max-w-5xl px-6 lg:px-8";

/**
 * Measure and spine are centred together as one unit, so the composition stays
 * optically anchored however wide the viewport gets. Centring the text alone
 * leaves the rule stranded against empty space on ultrawide.
 */
const BLOCK = "relative mx-auto w-[calc(62ch+4rem)] max-w-full";

/**
 * Fixed, not fluid. The spine aligns against the measure's right edge, so the
 * measure cannot be allowed to move.
 */
const MEASURE = "w-[62ch] max-w-full pr-12 lg:pr-0";

/** Shared by both segments so they line up exactly at the block's right edge. */
const RULE = "absolute inset-y-0 right-0 w-1";

/** Blue into lighter blue. No cyan — the bright end read hot against the navy. */
const SPINE_GRADIENT = "linear-gradient(to bottom, #214F97 0%, #3E87C7 100%)";

export function BlueThatConnects() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView<HTMLElement>("-5% 0px");
  const drawn = reduced || inView;

  /** Drawn downward from the top, as if written. Never a progress bar. */
  const draw = (delay: number) =>
    reduced
      ? undefined
      : {
          transform: `scaleY(${drawn ? 1 : 0})`,
          transformOrigin: "top" as const,
          transition: "transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
          transitionDelay: `${delay}ms`,
        };

  return (
    <section
      ref={ref}
      id="the-blue-that-connects"
      aria-labelledby="the-blue-that-connects-heading"
      className="relative bg-ocean-blue"
    >
      {/* Full-height gradient spine. The mint band paints over it and supplies
          its own navy segment at the same x. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className={`${COLUMN} h-full`}>
          <div className={`${BLOCK} h-full`}>
            <div
              className={RULE}
              style={{ backgroundImage: SPINE_GRADIENT, ...draw(0) }}
            />
          </div>
        </div>
      </div>

      {/* ── Movement one: origin ─────────────────────────────────── */}
      <div className={`relative ${COLUMN} pt-24 pb-20 lg:pt-32 lg:pb-28`}>
        <div className={BLOCK}>
          <div className={MEASURE}>
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-ocean-blue-pale">
                The blue that connects
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h2
                id="the-blue-that-connects-heading"
                // fonts.css sets h1-h6 to the serif in an unlayered rule, which
                // outranks every Tailwind utility; inline style is the only
                // local way over it. A font-sans class would silently do nothing.
                style={{ fontFamily: "var(--font-sans)" }}
                className="mt-6 text-3xl font-bold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
              >
                Azul de Canarias
              </h2>
            </Reveal>

            {/* The one place the serif earns its keep in this section. */}
            <Reveal delay={160}>
              <p className="mt-6 font-serif text-xl leading-snug text-ocean-blue-pale sm:text-2xl">
                From Voroneț to the shores of the Atlantic in the Canary Islands
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-10 leading-relaxed text-white/85">
                For Romanians looking for a holiday home or a secure investment
                in Tenerife, Azul de Canarias is not just a brand – it is a
                state of mind.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Movement two: the mint band ──────────────────────────── */}
      <div className="relative bg-ocean-blue-pale">
        {/* The spine continues through the band in navy, not gradient. */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className={`${COLUMN} h-full`}>
            <div className={`${BLOCK} h-full`}>
              <div className={`${RULE} bg-ocean-blue`} style={draw(500)} />
            </div>
          </div>
        </div>

        {/* Deeper padding than the navy movements: a held breath, not a stripe. */}
        <div className={`relative ${COLUMN} py-28 lg:py-40`}>
          <div className={BLOCK}>
            <Reveal className={MEASURE}>
              <p className="leading-relaxed text-primary">
                It is a deep blue, like the sky of the Islands and the waves of
                the Atlantic Ocean, carrying within it the echo of a symbol dear
                to the Romanian soul: Voroneț Blue.
              </p>
            </Reveal>
          </div>
        </div>
      </div>

      {/* ── Movement three: arrival ──────────────────────────────── */}
      <div className={`relative ${COLUMN} pt-20 pb-24 lg:pt-28 lg:pb-32`}>
        <div className={BLOCK}>
          <div className={MEASURE}>
            <Reveal>
              <p className="leading-relaxed text-white/85">
                Just as Voroneț Blue became a unique signature of our cultural
                identity, Azul de Canarias reflects a clear, pure and profound
                vision of life by the sea – peaceful, yet full of energy.
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className="mt-6 leading-relaxed text-white/85">
                It is the blue of inspired decisions, of bright mornings on the
                terrace while enjoying a good coffee, of clear waters and
                horizons open to the future.
              </p>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 leading-relaxed text-white/85">
                By choosing a property under the AZUL DE CANARIAS brand, you are
                not simply making a real-estate investment; you are creating a
                connection between your roots and the freedom of a new beginning
                – a bridge between tradition and a modern lifestyle, between
                Moldavia and Tenerife, between the serenity of Byzantine
                painting and the explosion of light of the Canary Islands.
              </p>
            </Reveal>

            {/* The only centred element in the section. It lands as a full stop
                because everything above it is left-aligned. */}
            <Reveal delay={240} className="mt-20">
              <div className="border-t border-white/15 pt-10 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                  Azul de Canarias
                </p>
                <p className="mt-4 text-xl font-semibold uppercase leading-snug tracking-[0.14em] text-ocean-blue-pale sm:text-2xl">
                  A blue that speaks your language
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
