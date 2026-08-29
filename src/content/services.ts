/**
 * Services shown in the #services section.
 *
 * This is the same shape the property listings will use in the next batch:
 * a typed array exported from src/content/, rendered by a component that
 * knows nothing about the copy. To change what the site says, edit this
 * file — not the component.
 */
export type Service = {
  /** Stable key. Also usable as an anchor fragment if we deep-link a service. */
  id: string;
  /** Short label, 2-4 words. Rendered uppercase. */
  title: string;
  /** 2-3 sentences of plain prose. No markup. */
  description: string;
};

/**
 * ⚠️ PLACEHOLDER CONTENT — NOT FINAL COPY. DO NOT SHIP.
 *
 * The four real services derive from her professional background in Law,
 * Journalism, Mediation and Sales, plus 9 years in Tenerife. That copy is
 * still being written.
 *
 * These entries exist only to test the layout at realistic text lengths:
 * a 2-4 word title and 2-3 sentences of description each. They are marked
 * TODO on purpose so nothing here can be mistaken for finished wording.
 * Replace the title and description of each entry and delete this notice.
 */
export const services: Service[] = [
  {
    id: "service-1",
    title: "TODO — service title one",
    description:
      "TODO — description for the first service. This placeholder is written to roughly the length of the real copy, two to three sentences, so the column width and the vertical rhythm of the list are tested honestly before the final text arrives.",
  },
  {
    id: "service-2",
    title: "TODO — service title two",
    description:
      "TODO — description for the second service. Kept to the same length as the others so the rows read as an even stack. Real wording will come from her own words rather than being drafted here.",
  },
  {
    id: "service-3",
    title: "TODO — service title three",
    description:
      "TODO — description for the third service. Long enough to wrap onto three lines at the desktop column width and rather more on mobile, which is the case worth checking.",
  },
  {
    id: "service-4",
    title: "TODO — service title four",
    description:
      "TODO — description for the fourth service. The last row carries no bottom border, so this entry is the one to look at when checking the spacing below the list.",
  },
];
