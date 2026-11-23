---
name: Darling Plumbing
description: A local father-and-son plumber's page, plain and careful, with the phone number always to hand.
colors:
  slate: "#38494d"
  slate-deep: "#2c3a3d"
  signal-yellow: "#f9ff00"
  link-blue: "#0174ca"
  ink-soft: "#56676b"
  ground: "#ffffff"
  band: "#eef2f3"
  rule: "#d5dde0"
  on-slate: "#ffffff"
  on-slate-soft: "#c4d0d3"
  on-slate-rule: "rgb(255 255 255 / 0.16)"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(3rem, 1.6rem + 5.6vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "-0.035em"
    fontVariation: "\"wdth\" 116"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 1.6rem + 2.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
    fontVariation: "\"wdth\" 112"
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.375rem, 1.2rem + 0.6vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.015em"
    fontVariation: "\"wdth\" 112"
  lead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.1875rem, 1rem + 0.6vw, 1.4375rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontVariation: "\"wdth\" 100"
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.1
    fontVariation: "\"wdth\" 105"
    fontFeature: "\"tnum\" 1"
rounded:
  sm: "3px"
  md: "6px"
spacing:
  gutter: "max(1rem, calc((100% - 72rem) / 2))"
  section-y: "clamp(4rem, 3rem + 5vw, 7.5rem)"
  measure: "66ch"
  head-gap: "clamp(2.5rem, 2rem + 2vw, 4rem)"
components:
  button-call:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.slate-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.7em 1.15em"
  button-call-large:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.slate-deep}"
    typography: "{typography.label}"
    rounded: "{rounded.md}"
    padding: "0.95em 1.5em"
  emergency-number:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.slate-deep}"
    rounded: "{rounded.sm}"
    padding: "0.15em 0.45em"
  site-header:
    backgroundColor: "{colors.slate}"
    textColor: "{colors.on-slate}"
    padding: "1rem {spacing.gutter}"
  nav-link:
    textColor: "{colors.on-slate-soft}"
  nav-link-hover:
    textColor: "{colors.on-slate}"
  text-link:
    textColor: "{colors.link-blue}"
  map-frame:
    backgroundColor: "{colors.band}"
    rounded: "{rounded.md}"
    height: "clamp(20rem, 40vw, 28rem)"
  review-card:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.slate}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
    width: "22rem"
  review-card-phone:
    width: "18rem"
  hero-panel:
    backgroundColor: "{colors.signal-yellow}"
    rounded: "{rounded.md}"
---

# Design System: Darling Plumbing

## Overview

**Creative North Star: "The Tradesman's Own Page"**

A local tradesman's page done with care. The layout is the conventional one a homeowner expects from a plumber, and the identity comes entirely from the brand colours, one heavy extended grotesque, and the owners' own words. Nothing is themed, illustrated, or decorated; the craft is in proportion, rule weight, and the restraint of the yellow.

The page alternates white reading ground with slate bands (header, hero, footer) and one cool grey band for reviews. Content sits in a single 72rem column with generous section padding. Structure comes from fine horizontal rules and type scale, not from boxes; the reviews row is the one place quotes sit in cards. The only filled shape a visitor is asked to act on is the yellow call button, and it repeats wherever a decision might happen: header, hero, footer.

The system rejects the stock trades template: icon-card grids, hero stat counters, stock photography, and invented badges.

**Key Characteristics:**
- White ground, slate bands, one cool grey band; yellow reserved for calling, plus the one panel behind the hero photo.
- One family (Archivo variable) carrying everything: extended heavy for headings, regular width for text.
- Fine rules instead of cards, with the drifting reviews row as the single card component; flat surfaces.
- Sticky slate header that keeps the number on screen at every width.
- Real proof only: the client's photo, quoted reviews, the 5.0 rating.

## Colors

Three brand colours with strict jobs on a cool, quiet neutral set.

### Primary
- **Workshop Slate** (`slate`): the ink for all body text and headings on white, and the fill of the header, hero, and footer bands. Also the 2px top rule on service blocks and the map pin body.
- **Deep Slate** (`slate-deep`): text on yellow fills (call buttons, emergency number, skip link, text selection).

### Secondary
- **Signal Yellow** (`signal-yellow`): the call fill. Used only on the phone-call buttons, the inline emergency number, the map pin's centre dot, the skip link and text selection, always paired with Deep Slate text. Its one decorative use is the offset panel behind the hero photo.

### Tertiary
- **Link Blue** (`link-blue`): inline text links on white or the grey band, and the focus ring on light surfaces. It meets 4.5:1 only on pure white and the light band, which is why the reading ground stays white.

### Neutral
- **Plain White** (`ground`): the page ground for services, about, and contact, and the fill of the review cards on the cool band.
- **Cool Band** (`band`): the reviews band, the map placeholder, and map control hover.
- **Fine Rule** (`rule`): 1px dividers between sections and above the hours block; the border of the review cards, the map frame, and map controls.
- **Soft Ink** (`ink-soft`): secondary paragraphs (service descriptions, about body, hours, review rating text).
- **On-Slate White** (`on-slate`) and **On-Slate Mist** (`on-slate-soft`): primary and secondary text on slate bands; Mist is also the resting nav link colour and the light-weight "Plumbing" in the wordmark.
- **On-Slate Rule** (`on-slate-rule`): hairlines inside slate bands (footer bottom, mobile nav top edge).

### Named Rules
**The Yellow Means Call Rule.** Signal Yellow fills only things that start a phone call or mark the number, plus the map pin centre. The single decorative exception is the offset panel behind the hero photo (chosen by the user in live mode, 2026-11-23); it is not repeated on any other image or surface. Yellow never colours text, headings, borders, section backgrounds, or any other decoration.

**The Blue Is For Links Rule.** Link Blue appears only as link text and the light-surface focus ring. On slate bands the focus ring switches to Signal Yellow and links use On-Slate colours.

**The White Reading Ground Rule.** Long reading happens on pure white or the cool band, never on slate; slate bands carry headings, leads, and the call.

## Typography

**Display Font:** Archivo variable, self-hosted (weights 100 to 900, widths 62% to 125%), with Helvetica Neue, Arial fallback
**Body Font:** Archivo, same file, at normal width

**Character:** One grotesque used at two personalities: wide and heavy for headings and the wordmark, upright and regular for reading. The width axis does the work a second family would otherwise do.

### Hierarchy
- **Display** (850, 116% width, fluid 3 to 6rem, line-height 0.95, max 10ch): the hero heading only. The footer call-out heading uses the same width and tracking at 2.5 to 4.5rem.
- **Headline** (800, 112% width, fluid 2.25 to 3.5rem, line-height 1.05): section headings.
- **Title** (700, 112% width, fluid 1.375 to 1.75rem, line-height 1.15): service names. Small labels like "Opening hours" drop to 1rem at 105% width with no tracking.
- **Lead** (400 to 500, fluid 1.1875 to 1.4375rem, line-height 1.45): hero and footer leads (max 34ch); the about lead runs larger (1.3125 to 1.75rem, weight 500).
- **Body** (400, 1.125rem, line-height 1.6, max 66ch): all running text. Reviews set at 1rem.
- **Label** (700, 105% width, tabular numerals): button text, phone numbers, reviewer names. Nav links are 1rem at weight 500.

### Named Rules
**The Width Carries Weight Rule.** Headings are always extended (112% to 118%) and heavy (700 to 850) with negative tracking; body is never extended. Do not introduce a second typeface.

**The Tabular Number Rule.** Every phone number is set with tabular numerals and bold weight.

## Layout

A single centred column: horizontal padding is `gutter`, which yields a 72rem content width with a 1rem minimum side margin. Sections pad vertically by `section-y`. Section heads are a wrapping flex row (heading left, a supporting fact such as the emergency number or rating pushed right, baseline-bottom aligned), followed by `head-gap`.

Within sections, two-column grids carry the content and collapse to one column on narrow screens: hero 1.15fr / 0.85fr (collapses at 52rem, photo becomes square and follows the text), services 2 columns (collapses at 40rem), about 1fr / 2fr (collapses at 48rem), contact 1fr / 1.5fr (collapses at 48rem). Reviews run as one full-bleed row edge to edge across the page (the list breaks out of the gutter to the viewport width; the section clips horizontal overflow), with a 1.5rem gap between cards. The row drifts slowly (90s linear loop, paused on hover or focus) and becomes a plain horizontally scrollable row, inset to the content column, under reduced motion. It is the one place on the page that uses cards (user's live-mode pick, 2026-11-23).

**Sticky header.** On desktop the whole header is one sticky slate bar: wordmark left, three nav links, call button right. Below 48rem the header splits: the wordmark and call button form a pinned slate bar, while the nav row sits beneath it on slate with a hairline top edge and scrolls away. Scroll padding matches the pinned height (5.5rem desktop, 3.75rem mobile). Below 22rem the call button tightens its padding rather than dropping the number.

## Elevation & Depth

Flat by default. Depth comes from band colour changes (white, cool grey, slate) and rules, not from layered surfaces. Shadows exist only as soft, short-lived responses or to seat a real object.

### Shadow Vocabulary
- **Call lift** (`box-shadow: 0 6px 18px -6px rgb(0 0 0 / 0.45)` with `translateY(-1px)`): call button hover only; removed on press.
- **Photo seat** (`box-shadow: 0 30px 60px -30px rgb(0 0 0 / 0.55)`): the hero photo on slate, above its flat yellow panel.
- **Map furniture** (`0 2px 8px -2px rgb(0 0 0 / 0.15)` for controls, `0 8px 24px -8px rgb(0 0 0 / 0.3)` for popups, `drop-shadow(0 4px 6px rgb(0 0 0 / 0.3))` for the pin).

### Named Rules
**The Rules Not Cards Rule.** Content groups are separated by a top rule (1px Fine Rule, or 2px Workshop Slate for service blocks) and whitespace. The only bordered container is the review card (white, 1px Fine Rule, no shadow); no other text sits in a box, and no container carries a shadow.

## Shapes

Gently rounded, small radii: 6px on buttons, the hero photo and its yellow panel, the review cards, the map frame, and map controls; 3px on the inline emergency number. Rules are straight full-width hairlines. The only silhouette is the map pin (slate teardrop, yellow centre dot).

## Components

### Buttons
Direct and solid; one kind of button, one job.
- **Shape:** gently rounded (6px).
- **Call (primary):** Signal Yellow fill, Deep Slate text, phone icon (inline SVG, 1.1em) before the number or phrase, 700 weight at 105% width, no wrap. Header size 1rem; large size 1.1875rem for hero and footer.
- **Hover / Active:** lifts 1px with the Call lift shadow over 180ms on the expo-out curve; pressing returns it flat.
- **Focus:** 3px outline offset 3px; Signal Yellow on slate bands.
- There are no secondary or ghost buttons; other actions are text links.

### Emergency Number
The phone number inline in running text, set on a small yellow fill (3px radius, 800 weight, tabular), underlining on hover.

### Text Links
Link Blue, 1px underline offset 0.2em, thickening to 2px on hover. The hero rating link is the exception: On-Slate Mist text that underlines its caption on hover.

### Navigation
Three text links, 1rem weight 500, On-Slate Mist at rest, On-Slate White on hover (150ms). Wordmark: "Darling" at 800 / 118% width in white, "Plumbing" at 500 in On-Slate Mist.

### Review
A 22rem white card (18rem below 40rem) with a 1px Fine Rule border, 6px corners, 1.5rem padding and no shadow; quote at 1rem (line-height 1.6), reviewer's name 0.875rem below at 0.9375rem, 700, 105% width. No avatars, quote marks, or star rows per review; the aggregate rating with slate stars sits once in the section head.
- **Drift:** the cards sit in one track that holds the reviews twice (the copy marked `aria-hidden`) and translates by half its length plus half a gap over 90s, linear, infinite, for a seamless loop. Hovering the row or focusing anything inside it pauses the drift.
- **Reduced motion:** no animation; the duplicate cards are hidden and the row scrolls horizontally, inset to the 72rem column.

### Hero Photo Panel
The client's photo (portrait 3:4, square below 52rem) on a Signal Yellow panel of the same size and 6px radius, resting offset down-left (18px, 10px below 52rem). On load the panel slides out from behind the photo over 1s after a 0.3s delay on the expo-out curve, while the photo rises 1rem and fades in over 0.9s; under reduced motion both simply rest in place. One instance only: the hero.

### Service Block
A 2px Workshop Slate top rule, title, then a Soft Ink paragraph (max 40ch).

### Contact Map
Leaflet map in a 6px-radius frame with a Fine Rule border; tiles greyscaled to sit in the slate palette; the custom slate pin with a yellow centre; controls restyled with Fine Rule borders and the band hover.

## Do's and Don'ts

### Do:
- **Do** keep the yellow call button visible in the header at every width, and repeat it at the hero and footer.
- **Do** set every heading in Archivo at 112% width or wider, 700 to 850 weight, with negative tracking.
- **Do** separate content with top rules (1px `rule`, or 2px `slate` for service blocks) and whitespace.
- **Do** keep reading text on white or the cool band, at 1.125rem with line-height 1.6 and max 66ch.
- **Do** switch the focus ring to Signal Yellow on slate bands and keep it Link Blue on light surfaces.
- **Do** use only real material: the client's photo and quoted reviews.

### Don't:
- **Don't** use Signal Yellow for text, borders, section backgrounds, or decoration beyond the one hero photo panel.
- **Don't** put text in bordered or shadowed cards outside the reviews row, or build icon-card grids.
- **Don't** add hero stat counters, stock photography, invented badges, or accreditations.
- **Don't** set Link Blue on slate or on any tint darker than the cool band.
- **Don't** introduce a second typeface or extend body text.
