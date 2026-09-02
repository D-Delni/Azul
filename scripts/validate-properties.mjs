/**
 * Guards src/content/properties.json against the mistake that will actually
 * happen: a typo while adding a listing, made in a hurry, possibly on a phone.
 *
 * Every problem is reported — the run does not stop at the first one — and each
 * message names the offending property id so it can be found by searching.
 *
 * Run: pnpm validate:properties
 */
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const jsonPath = join(root, "src/content/properties.json");
const publicDir = join(root, "public");

const CATEGORIES = ["sale", "long-term", "vacation"];
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

const errors = [];
/** @param {string} where @param {string} message */
const fail = (where, message) => errors.push(`${where}: ${message}`);

let parsed;
try {
  parsed = JSON.parse(readFileSync(jsonPath, "utf8"));
} catch (error) {
  console.error(`properties.json is not valid JSON.\n  ${error.message}`);
  console.error("\nMost likely a trailing comma, or a quote that was never closed.");
  process.exit(1);
}

if (!Array.isArray(parsed.properties)) {
  console.error('properties.json must hold an array under the key "properties".');
  process.exit(1);
}

const seen = new Map();

parsed.properties.forEach((property, index) => {
  // Without a usable id there is nothing to name the other errors after, so the
  // position in the file has to stand in for it.
  const hasId = typeof property.id === "string" && property.id.length > 0;
  const where = hasId ? property.id : `entry #${index + 1} (no id)`;

  if (!hasId) {
    fail(where, "id is missing, or is not a non-empty string");
  } else {
    if (!SLUG.test(property.id)) {
      fail(
        where,
        "id is not a valid slug — lowercase letters, digits and single hyphens only, " +
          'e.g. "las-americas-2b-terraza". No spaces, accents or capitals: it becomes the URL.',
      );
    }
    if (seen.has(property.id)) {
      fail(where, `id is already used by entry #${seen.get(property.id) + 1}. Ids must be unique.`);
    } else {
      seen.set(property.id, index);
    }
  }

  if (!CATEGORIES.includes(property.category)) {
    fail(
      where,
      `category is ${JSON.stringify(property.category)}. It must be exactly one of ` +
        CATEGORIES.map((c) => `"${c}"`).join(", ") + ".",
    );
  }

  for (const field of ["title", "location", "description"]) {
    if (typeof property[field] !== "string" || property[field].trim() === "") {
      fail(where, `${field} is missing, or is not a non-empty string`);
    }
  }

  if (property.currency !== "EUR") {
    fail(where, `currency is ${JSON.stringify(property.currency)}. It must be "EUR".`);
  }

  for (const field of ["price", "sqm", "bedrooms", "bathrooms"]) {
    const value = property[field];
    if (typeof value !== "number" || !Number.isFinite(value)) {
      fail(
        where,
        `${field} is ${JSON.stringify(value)}. It must be a plain number — no quotes, ` +
          "no currency symbol, no thousands separator.",
      );
    } else if (value <= 0) {
      fail(where, `${field} is ${value}. It must be greater than zero.`);
    }
  }

  for (const field of ["featured", "available"]) {
    if (typeof property[field] !== "boolean") {
      fail(where, `${field} is ${JSON.stringify(property[field])}. It must be true or false, unquoted.`);
    }
  }

  if (!Array.isArray(property.images) || property.images.length === 0) {
    fail(where, "images must be an array holding at least one path");
    return;
  }

  property.images.forEach((image, imageIndex) => {
    const position = `images[${imageIndex}]`;
    if (typeof image !== "string") {
      fail(where, `${position} is not a string`);
      return;
    }
    const expectedPrefix = hasId ? `/properties/${property.id}/` : null;
    if (expectedPrefix && !image.startsWith(expectedPrefix)) {
      fail(where, `${position} is "${image}". It must start with "${expectedPrefix}".`);
      return;
    }
    if (!image.endsWith(".jpg")) {
      fail(
        where,
        `${position} is "${image}". List the .jpg file — the .webp beside it is derived in code.`,
      );
      return;
    }
    // A path in the JSON that has no file behind it renders as a broken image
    // in production and nowhere else, so it is checked against the disk here.
    const jpg = join(publicDir, image);
    const webp = jpg.replace(/\.jpg$/, ".webp");
    if (!existsSync(jpg)) {
      fail(where, `${position} points at public${image}, which does not exist on disk`);
    }
    if (!existsSync(webp)) {
      fail(
        where,
        `${position} has no .webp beside it — expected public${image.replace(/\.jpg$/, ".webp")}. ` +
          "Re-run the convert command from the README; it writes both.",
      );
    }
  });
});

if (errors.length > 0) {
  console.error(`properties.json — ${errors.length} problem${errors.length === 1 ? "" : "s"}:\n`);
  for (const error of errors) console.error(`  ✗ ${error}`);
  console.error("\nSee the 'Adding a property' section of the README.");
  process.exit(1);
}

console.log(
  `properties.json OK — ${parsed.properties.length} properties, ` +
    `${parsed.properties.reduce((n, p) => n + p.images.length, 0)} images, all files present.`,
);
