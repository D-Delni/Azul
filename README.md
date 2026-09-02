# Azul de Canarias

Static single-page site for a real estate agent in Tenerife.
React 18 · Vite 6 · Tailwind v4 · TypeScript.

## Running the code

This project uses **pnpm**, not npm.

```sh
pnpm install          # install dependencies
pnpm dev              # development server
pnpm build            # production build into dist/
pnpm typecheck        # TypeScript, no emit
pnpm validate:properties   # check the property listings
```

---

# Adding a property

A listing is two things: **a folder of photos** and **a block of text**. Do them
in that order, then run the checker. Nothing else in the site needs touching.

You will need the property's **id** first. It is the short name used in the web
address, so make it readable: the town, the size, and one thing that
distinguishes it.

- lowercase only
- words joined by single hyphens
- no spaces, no accents, no capitals, no `ñ`

Good: `las-americas-2b-terraza` · `el-medano-2b-frente-playa`
Bad: `Las Américas 2B` · `piso_3` · `property-final-FINAL`

## 1. Make the folder

One folder per property, named exactly the id:

```sh
mkdir -p public/properties/las-americas-2b-terraza
```

## 2. Convert the photos

Photos arrive at whatever size and shape the camera or the phone produced. They
all have to leave at the same size, or the grid will jump around.

**The spec:** 1200 × 800 pixels, 3:2 landscape, one `.webp` and one `.jpg` of
each photo, numbered `01`, `02`, `03` in the order they should appear. The first
one is the photo that shows on the card, so put the best one first.

Run this once per property. Set `ID` to the property id and `SRC` to wherever the
photos are sitting. It resizes, crops to 3:2 from the centre, strips the camera's
GPS data, and writes both formats with the right numbers.

```bash
ID=las-americas-2b-terraza; SRC=~/Downloads/photos; i=1; mkdir -p public/properties/$ID; for f in "$SRC"/*; do n=$(printf %02d $i); magick "$f" -resize '1200x800^' -gravity center -extent 1200x800 -strip -quality 82 public/properties/$ID/$n.jpg; magick "$f" -resize '1200x800^' -gravity center -extent 1200x800 -strip -quality 80 public/properties/$ID/$n.webp; i=$((i+1)); done
```

Copy that whole line into a terminal. It needs [ImageMagick](https://imagemagick.org)
(`magick`); on this machine it is already installed.

In **fish**, the shell on this machine, use this instead — same result:

```fish
set ID las-americas-2b-terraza; set SRC ~/Downloads/photos; set i 1; mkdir -p public/properties/$ID; for f in $SRC/*; set n (printf %02d $i); magick $f -resize '1200x800^' -gravity center -extent 1200x800 -strip -quality 82 public/properties/$ID/$n.jpg; magick $f -resize '1200x800^' -gravity center -extent 1200x800 -strip -quality 80 public/properties/$ID/$n.webp; set i (math $i + 1); end
```

Cropping from the centre is a blunt instrument. Look at the results afterwards —
if a photo lost something important off the top or the side, crop that one by
hand to 3:2 first and run it through again.

## 3. Add the text

Open `src/content/properties.json` and add a block to the `properties` list.
Copy an existing one and change every line; that is safer than typing a new one.

```json
{
  "id": "las-americas-2b-terraza",
  "category": "sale",
  "title": "Two-bedroom with a south terrace",
  "location": "Las Américas",
  "price": 285000,
  "currency": "EUR",
  "sqm": 78,
  "bedrooms": 2,
  "bathrooms": 2,
  "images": [
    "/properties/las-americas-2b-terraza/01.jpg",
    "/properties/las-americas-2b-terraza/02.jpg"
  ],
  "description": "Two or three sentences. What it actually is, and one thing a listing site would not tell you.",
  "featured": true,
  "available": true
}
```

Blocks are separated by a comma. **The last block in the list has no comma after
it** — that is the single most common way to break this file.

Field by field:

| Field | What goes in it |
| --- | --- |
| `id` | The slug from above. Must match the folder name exactly. |
| `category` | Exactly one of `sale`, `long-term`, `vacation`. Nothing else. |
| `title` | Short and plain. It is a heading, not a sentence. |
| `location` | The town, written the way it is written locally. Accents are fine here. |
| `price` | **A bare number.** `285000`, never `285.000` or `"285.000 €"`. See below. |
| `currency` | Always `"EUR"`. |
| `sqm` | Square metres, a number. |
| `bedrooms` / `bathrooms` | Numbers, at least 1. |
| `images` | The `.jpg` paths, in order, each starting `/properties/{id}/`. Do not list the `.webp` files — the site finds those on its own. |
| `description` | Two or three sentences. |
| `featured` | `true` puts it on the home page. `true` or `false`, no quotes. |
| `available` | `false` hides it from the site without deleting it. |

### About the price

Write the number and nothing else. What it *means* comes from the category:

| Category | `285000` reads as |
| --- | --- |
| `sale` | the total asking price |
| `long-term` | per month |
| `vacation` | per night |

Never write `€`, a dot, a comma or the word "month" into this file. The site adds
all of that. Writing it in yourself produces things like "€1.200/month/month".

## 4. Check it

```sh
pnpm validate:properties
```

It either says everything is fine, or it lists what is wrong and names the
property. Fix what it names and run it again. **Do not commit a listing that has
not passed this** — an error here shows up as a blank space or a broken image on
the live site, and nowhere else.

---

# Removing a property

**If it might come back** — sold subject to contract, off the market for the
winter, a refurbishment — set `"available": false` and leave everything else
alone. It disappears from the site and the text and photos are still there when
you need them.

**If it is gone for good**, delete both halves:

```sh
rm -rf public/properties/las-americas-2b-terraza
```

then delete that property's block from `src/content/properties.json`, and check
the comma on the block that is now last in the list. Then:

```sh
pnpm validate:properties
```

Deleting only the folder, or only the text, is what breaks the page. The checker
catches the first of those; it cannot catch the second, which just leaves an
unused folder in the repo.

---

## Note on the current data

The six properties in `properties.json` are **samples**. Real towns and plausible
prices, but none of them exist, and the photos are generated placeholders. They
are there so the grid has something to show. Replace all six.
