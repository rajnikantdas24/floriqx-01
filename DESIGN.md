# FloriQX — art direction

A software company that also runs a classroom. The site reads as precise and
technical on the light surface, and commits to a deep navy ground where the
argument changes. Blue is the brand; cyan is the light that falls on it.

## Palette and type

Every value lives in `src/theme.css`. Roles:

- `--background` white — the page surface.
- `--card` / `--secondary` — raised and tinted surfaces, never a hairline box on
  every block.
- `--navy`, `--navy-deep`, `--on-navy`, `--on-navy-muted` — the dark ground and
  its own inks. Not an inversion: navy is a designed surface. `--on-navy-muted`
  is bright enough for 15px body copy, which is the smallest size it is used at.
- `--primary` (vibrant blue) — links, the one primary action, a selected filter.
  `--accent` (cyan) — the second note only: numerals and small status marks on
  the navy ground, where it is the one bright ink that clears contrast at 11px,
  and the gradient's light end. Never set as text on white.
- `--gradient-brand` — cyan → blue. Used for rules, cover art, number tiles and
  the glow behind the hero product panel. Never for body text.

One colour scheme, light with navy bands. No `prefers-color-scheme` override.

Faces: **Plus Jakarta Sans** (headings, labels — geometric, matches the logo's
weight) over **Inter** (body). Loaded together in `src/fonts.css` at
`display=swap`; changing a face means changing the import and the `--font-*`
token together.

## Brand mark

The owner's logo file is the mark, and its tagline is always carried with it:

- `/images/floriqx-logo.webp` — full lockup (symbol, wordmark, tagline in its
  own colours), saved trimmed.
- `/images/floriqx-symbol.webp` — the F alone, used at header height and on the
  404, where the full lockup would not read.

The header mark is the symbol plus the wordmark — "FLORI" in navy and "QX" in
the brand gradient, set in the heading face and never restyled in another
typeface — with **Innovate. Educate. Elevate.** set as a small tracked line
underneath in `--muted-foreground`. The tagline line is why the bar is
`4.5rem` tall below `lg` and `5.25rem` above it. Below `sm` the wordmark and
tagline give way to the symbol alone, which is the owner's own cut. On the navy footer and the About navy band the mark is the owner's
full lockup file, `/images/floriqx-logo.webp`, on a white chip — its own colours,
never a `light` re-typing of the wordmark on dark, which rendered unreadable.
`public/favicon.svg` is a plain shape — two squares and a gradient tile in the
logo's blue and cyan — not a tracing.

One icon set: **Lucide, stroke width 1.75, everywhere**, imported by name.

## Imagery

The home first screen **is** the **home banner plate**, `/images/banner-home.webp`:
one navy band, the plate as a full-bleed ground, a navy → transparent gradient
over its left half so the headline sits on the plate's dark side, and a fine grid
texture masked to that side. The first screen carries no product mockup; the
software is described by the service index below it, not by a composed panel.
Depth comes from token-built gradients and `color-mix()`, never a literal colour.

Sections alternate ground on the home page: navy hero, white, white with a
hairline rule, navy, `--card`, navy closing band. Never two surfaces with the
same shape in a row.

Every inner page opens with a **banner plate** (`src/components/PageBanner.tsx`):
a navy band carrying the page heading on the left and a generated 16:10 plate on
the right — `public/images/banner-*.webp`. All five plates (home, services,
education, about, contact) are one family. The plates are rendered illustrations
of what the page is about, not photographs: flat geometry, the brand's cyan →
blue → navy with cyan and white light, a fine technical grid, no text, no people,
no logos, no screenshots of real products. They share light direction and a deep
navy ground so the five read as one family. Home is the exception in layout only:
it uses the same plate full-bleed as the ground of its first screen rather than
in the PageBanner's side-by-side frame.

The eBook shelf draws its covers in `--gradient-brand` with type on top; they
are illustrations of books, not scans. The office map on the contact page is a
grid sketch, labelled as such. No stock photograph is used: nothing on the site needs a mood shot of
a laptop.

No case study, portfolio or product is shown anywhere on the site: there are none
yet, and a placeholder a visitor reads as a past project would be a false claim.
The route does not exist; the closing band of each page invites the first one.

## Shell

Sticky top bar: the mark at the left (symbol, wordmark and tagline from `sm` up),
five routes — Home, Services, Education, About, Contact — and a solid "Get
started" button at the right. There is no blog: the route does not exist until
there are notes to publish. Below `lg` the links
collapse into one menu control that opens a full-height sheet with a visible
close and the contact line at the foot. Footer on the navy ground: mark,
tagline, email, address, three link columns and the photograph credit line.

## Voice

Real, specific copy about software and AI for Indian businesses. No invented
testimonial, statistic, price or award. Where a figure is unknown — the office
street address, team names — the page says what will go there instead of
inventing it. Testimonials were left out rather than filled with placeholders a
visitor would read as proof.
