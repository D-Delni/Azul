import data from "./properties.json";

export const categories = ["sale", "long-term", "vacation"] as const;

export type Category = (typeof categories)[number];

export type Property = {
  /** URL slug. Lowercase, hyphenated, unique. Becomes the page path in stage 4. */
  id: string;
  category: Category;
  /** Short and human. Rendered as the card heading. */
  title: string;
  /** Town or area, as it is written locally, e.g. "Las Américas". */
  location: string;
  /**
   * A bare number. Total for `sale`, per month for `long-term`, per night for
   * `vacation`. The unit lives here in code, never in the JSON — see
   * {@link formatPrice}.
   */
  price: number;
  currency: "EUR";
  sqm: number;
  bedrooms: number;
  bathrooms: number;
  /**
   * Paths to the `.jpg` files under `/properties/{id}/`. The matching `.webp`
   * sits beside each one and is derived with {@link webpFor}.
   */
  images: string[];
  featured: boolean;
  available: boolean;
};

/**
 * The JSON is hand-edited, so TypeScript can only infer `category: string` from
 * it. `pnpm validate:properties` is what actually proves the shape at every
 * field, and this cast is only honest for as long as that script is run.
 */
export const properties = data.properties as Property[];

/**
 * ⚠️ es-ES groups thousands with a dot: 285000 renders as "€285.000", not
 * "€285,000". That follows the brief's "es-ES number formatting" — the market's
 * own convention — over its example strings, which were written with English
 * commas. Change this one constant to "en-GB" if the commas were the intent.
 */
const PRICE_LOCALE = "es-ES";

const priceFormat = new Intl.NumberFormat(PRICE_LOCALE, {
  maximumFractionDigits: 0,
  /**
   * es-ES leaves four-digit numbers ungrouped by default, which renders a
   * monthly rent as "€1200/month". Rents are the numbers most often in that
   * range, so grouping is forced. `true` rather than the newer `"always"`:
   * identical output, and it is typed without widening tsconfig's `lib`.
   */
  useGrouping: true,
});

const priceSuffix: Record<Category, string> = {
  sale: "",
  "long-term": "/month",
  vacation: "/night",
};

/**
 * "€285.000" · "€1.200/month" · "€95/night".
 *
 * The symbol is prefixed by hand rather than left to `style: "currency"`, which
 * would put it after the number in this locale.
 */
export function formatPrice(property: Property): string {
  return `€${priceFormat.format(property.price)}${priceSuffix[property.category]}`;
}

/** Every property in one category, available or not. Source order is preserved. */
export function getByCategory(category: Category): Property[] {
  return properties.filter((property) => property.category === category);
}

/** Everything currently on the market. Compose with the others to narrow. */
export function getAvailable(): Property[] {
  return properties.filter((property) => property.available);
}

/**
 * The listings worth putting on the home page. Unavailable ones are excluded —
 * a flat that cannot be viewed has no business being promoted.
 */
export function getFeatured(): Property[] {
  return properties.filter((property) => property.featured && property.available);
}

/** `…/01.jpg` → `…/01.webp`. Both files exist; the validator enforces it. */
export function webpFor(imagePath: string): string {
  return imagePath.replace(/\.jpg$/, ".webp");
}
