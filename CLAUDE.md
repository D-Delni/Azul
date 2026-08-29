# Azul de Canarias

Personal-branding site for a real estate agent in Tenerife. Static, single
page. React 18 + Vite 6 + Tailwind v4 + TypeScript. Originally a Figma Make
export; the export scaffold is being stripped out.

## Commands

pnpm install / pnpm dev / pnpm build / pnpm typecheck / pnpm preview

pnpm only. Never npm. packageManager pins pnpm 11.3.0 and it is correct.

## Rules

- NEVER run `git commit`. Stage, show `git status --short` and
  `diff --stat`, propose a message, stop. The user commits.
- Run build and typecheck after each meaningful change.
- Add no dependencies without asking.
- Report `/cost` at the end of each step.

## Source of truth

`raw-material/` holds the brand PDFs. They outrank the code for colour,
copy and tone. Use copy from them verbatim — do not paraphrase or embellish.

## Reading files

Use offset/limit. Do not re-read a whole file you have already read this
session — you already have it in context. Grep for the specific line before
opening the file.

Screenshot verification: at most one round-trip per component. If headless
Chrome does not cooperate on the second attempt, compute what you need from
the source values instead of iterating on the harness.

## Palette (sampled from the PDFs, not invented)

navy #123C5A (primary) · teal #159CB3 (accent only) · mint #DBFAF4 ·
wash #EDF6F8 · body slate #26343D · muted #53616B

Teal is 3.26:1 on white — accent bars, rules, large headings. Never body text.
There is no warm colour in this brand. The old sand-beige tokens were
invented and are deleted; do not reintroduce warmth.

## Voice

UNRESOLVED — the site is currently split, pending a decision.

Services uses "we", from her own source copy. Everything else is first person
singular: the Services heading is "YOUR PROPERTY. YOUR NEEDS. MY EXPERTISE.",
the contact CTA is "Message me on WhatsApp", and the contact section is built
around her portrait. CTA and HowItWorks already said "we" before this.

Until it is settled, do not "fix" either side towards the other — flag it.
The audience is Romanian buyers looking at Tenerife.
No "dream home", "seamless", "your journey", "trusted partner". If a
sentence could appear on any agent's site, rewrite it.

## Design

No generic AI aesthetics: no Inter/Roboto/system fonts, no purple gradients,
no three-identical-cards-with-a-circle-icon grids. Follow the PDFs' own
restraint — thin rules, accent bars, generous whitespace, heavy uppercase
navy headings against light body text. Motion must be purposeful and respect
prefers-reduced-motion.

## Open

- Her name is unknown. Blocks About, footer, schema. Grep NAME_TODO.
- Hero stats (500+, 9+ years) and all three testimonials are unverified
  placeholders. Do not treat as fact.
- History squash pending. Backup branch pushed.

## Learned the hard way

- A green typecheck in one environment does not mean the tree is sound.
  pnpm hoists differently between a fresh export and the working repo.
- Verify against the registry or the filesystem before asserting a version
  or a measurement. Three findings so far were confident and wrong.
