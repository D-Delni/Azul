export type Service = {
  /** Stable key. Also usable as an anchor fragment if we deep-link a service. */
  id: string;
  /** Short label, 2-4 words. Rendered uppercase. */
  title: string;
  /** 2-3 sentences of plain prose. No markup. */
  description: string;
};

/**
 * "autónomos", "empadronamiento" and "NIE" stay in the original — they are the
 * terms this audience searches for, and translating them loses precision.
 *
 * Voice note: these read "we", from the source copy, while the rest of the site
 * is first person singular. See the voice section of CLAUDE.md.
 */
export const services: Service[] = [
  {
    id: "property-sales",
    title: "Property Sales",
    description:
      "We value the property, position it for the market and produce the marketing materials, then promote it across the major platforms and social media. We identify buyers and run the viewings. We negotiate and stay with the sale through to completion and the signing before the notary.",
  },
  {
    id: "long-term-rentals",
    title: "Long-Term Rentals",
    description:
      "We market the property, select the tenant, prepare the rental agreement, document the inventory and handle the handover. We stay available throughout the tenancy.",
  },
  {
    id: "vacation-rentals",
    title: "Vacation Rentals",
    description:
      "We prepare and promote the property, manage reservations and guest communication, and handle check-in and check-out. We coordinate cleaning and maintenance, and work to keep occupancy high while staying compliant with local regulations.",
  },
  {
    id: "property-management",
    title: "Property Management",
    description:
      "We manage the property day to day on the owner's behalf: rent and payments, bills and utilities, periodic inspections, cleaning, repairs, maintenance, and resolving issues as they arise. It suits owners who do not live permanently in Tenerife.",
  },
  {
    id: "residency-documentation",
    title: "Residency & Work Documentation",
    description:
      "We handle NIE applications, residency procedures, empadronamiento, Social Security registration and the other formalities needed to live or work in Tenerife. Where a procedure requires an authorised professional, we coordinate with the appropriate specialist.",
  },
  {
    id: "accounting-tax",
    title: "Accounting & Tax",
    description:
      "For individuals, autónomos and companies: accounting documentation, invoicing, tax returns, property and rental taxes, business taxation and other fiscal obligations. We work in collaboration with accounting and tax professionals.",
  },
  {
    id: "banking-mortgages",
    title: "Banking & Mortgages",
    description:
      "We help open a Spanish bank account and prepare the documentation it requires. We also assist in obtaining mortgage financing for a purchase.",
  },
  {
    id: "utilities-insurance",
    title: "Utilities & Insurance",
    description:
      "We arrange water and electricity contracts, and insurance.",
  },
  {
    id: "translations-renovations",
    title: "Translations, Renovations & Preparation",
    description:
      "We arrange translation, renovation and maintenance work, and prepare a property for sale or rental.",
  },
];
