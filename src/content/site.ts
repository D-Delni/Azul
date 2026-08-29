/**
 * Site-wide facts. Single source of truth for anything that appears in more
 * than one place.
 */

/**
 * ⚠️ NAME_TODO — her name does not appear in either brand PDF.
 *
 * Blocks: the About section byline, the legal footer, og:site_name and any
 * structured data. Grep for NAME_TODO to find every place it is needed.
 */
export const NAME_TODO = "NAME_TODO";

export const business = {
  name: "Azul de Canarias",
  addressLines: [
    "Calle Guatemala 4, Edificio Viña del Mar",
    "Las Américas, 38660, Tenerife",
  ],
  email: "azuldecanarias@gmail.com",
  phoneDisplay: "+34 641 30 01 67",
  phoneHref: "tel:+34641300167",
  whatsappHref: "https://wa.me/34641300167",
} as const;

/**
 * ⚠️ PROFILE_URL_TODO — her profiles on these platforms are not known yet.
 *
 * The cards render as inert elements, not anchors, for as long as a url holds
 * this value: a guessed URL or an href="#" would look wired and ship broken.
 * Grep for PROFILE_URL_TODO.
 */
export const PROFILE_URL_TODO = "PROFILE_URL_TODO";

export type PlatformLink = {
  /** Stable key. */
  id: string;
  /** Platform name as the platform itself writes it. */
  name: string;
  /**
   * ⚠️ PLACEHOLDER — one short line saying what she lists there. Not final
   * copy; it should come from her, not from us.
   */
  context: string;
  /** PROFILE_URL_TODO until she supplies the real profile. */
  url: string;
};

export const platforms: PlatformLink[] = [
  {
    id: "booking",
    name: "Booking.com",
    context: "TODO — one line on what she lists here",
    url: PROFILE_URL_TODO,
  },
  {
    id: "airbnb",
    name: "Airbnb",
    context: "TODO — one line on what she lists here",
    url: PROFILE_URL_TODO,
  },
  {
    id: "facebook",
    name: "Facebook",
    context: "TODO — one line on what she posts here",
    url: PROFILE_URL_TODO,
  },
];
