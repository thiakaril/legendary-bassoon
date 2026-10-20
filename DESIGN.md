---
name: Hruno
description: A bilingual pre-launch HR suite landing page built as one dark, well-kept operations board.
colors:
  lunar-black: "#111111"
  tile: "#1c1c1c"
  panel-deep: "#161616"
  raised: "#252525"
  strong: "#363636"
  ink: "#f2f2f2"
  muted: "#8f8f8f"
  bronze: "#a08672"
  bronze-hover: "#b39a85"
typography:
  display:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.5rem, 14.4vw, 13.75rem)"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "-0.045em"
  headline:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 1.4rem + 3.2vw, 4.25rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.7vw, 1.875rem)"
    fontWeight: 400
    lineHeight: 1.16
    letterSpacing: "-0.02em"
  body:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "normal"
  ui:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "normal"
  label:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "normal"
  micro:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "normal"
  rail-value:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.02em"
  marquee:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7.5vw, 7rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.04em"
  footer-mark:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4rem, 10vw, 9rem)"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "-0.05em"
  footer-mark-mobile:
    fontFamily: "General Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "3rem"
    fontWeight: 700
    lineHeight: 0.8
    letterSpacing: "-0.05em"
rounded:
  none: "0px"
spacing:
  page-gutter: "8px"
  tile-gap: "8px"
  row-gap: "4px"
  tile-padding: "clamp(20px, 2.4vw, 36px)"
  mobile-gutter: "6px"
components:
  button-primary:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.lunar-black}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.bronze-hover}"
    textColor: "{colors.lunar-black}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  button-inverse:
    backgroundColor: "{colors.lunar-black}"
    textColor: "{colors.bronze}"
    rounded: "{rounded.none}"
    padding: "0 22px"
    height: "48px"
  nav-link:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "60px"
  board-tile:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.tile-padding}"
  chip-selected:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.lunar-black}"
    rounded: "{rounded.none}"
    padding: "8px 10px"
  status-attention:
    backgroundColor: "{colors.bronze}"
    textColor: "{colors.lunar-black}"
    rounded: "{rounded.none}"
    padding: "7px 9px"
  record-row:
    backgroundColor: "{colors.tile}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px 24px"
    height: "76px"
---

# Design System: Hruno

## Overview

**Creative North Star: "The Well-Kept Board"**

Hruno's public surface is an HR record you can read at a glance, not a software brochure. The page is a dark operations board: flat tiles of equal weight, tight 8px gutters, one white display wordmark, and photographs pinned into the board like evidence. The product interface is the imagery. Real HTML fragments show a copilot, a leave week, an attendance exception list, a payroll run, a hiring pipeline and a people record. The board looks maintained because every tile has a job.

The palette is deliberately almost monochrome. Lunar black is the field; four close neutral steps let tiles recede or lift without shadows. Bronze is an event: it appears on the waitlist action, a selected row, an active filter or an attention state, and almost nowhere else. The one exception is the small H mark that opens a product panel, which works as a maker's stamp.

The writing is bilingual, specific and unadorned. English and Indonesian are written as peers, not as a translation layer. Claims stay inside what a pre-launch product can honestly show: a sample workspace, a waitlist, a demo link, and product views explicitly labelled as sample data.

**Key Characteristics:**
- Flat tonal tiles on a lunar-black field, separated by 8px gaps.
- Square corners everywhere; no borders, gradients, resting shadows or glass.
- General Sans at a wide scale, from a 14.4vw wordmark to 13px UI metadata.
- Product UI as the main imagery, with two credited black-and-white architectural photographs as atmosphere.
- Bronze reserved for action, selection, attention and the small H mark.
- One orchestrated hero-board seat, one copilot approval moment, two slowly drifting photographs and a single marquee.

## Colors

The palette is a dark neutral ladder with one warm bronze event colour.

### Primary

- **Bronze** (`#a08672`): The waitlist action, selected prompt, open record, selected FAQ question, selected leave days, attention status and the small H mark. It is a state colour, not a surface decoration.
- **Bronze Hover** (`#b39a85`): Hover for bronze text on dark grounds and for primary buttons. Use it to lift the state, not to introduce a second accent.

### Neutral

- **Lunar Black** (`#111111`): The page field, body ground and text on bronze. It is the resting dark.
- **Tile** (`#1c1c1c`): The standard board tile, statement band, feature card, record row and section head.
- **Panel Deep** (`#161616`): The copilot's working panel inside the hero. One step darker than the tile so the product surface reads as an inset instrument.
- **Raised** (`#252525`): Secondary surfaces: the marquee band, the FAQ answer pane, unselected chips and small nested rows.
- **Strong** (`#363636`): The strongest neutral step: avatars, the CTA's quiet square and the inverse-button hover.
- **Ink** (`#f2f2f2`): Primary text and the one bright neutral. Pure white is avoided.
- **Muted** (`#8f8f8f`): Metadata, labels, captions and secondary explanation. It must stay at or above 4.5:1 on the tile and panel grounds it sits on.

### Named Rules

**The Bronze Is an Event Rule.** Bronze marks an action, a selection, an attention state or the small H mark. Never use it as a decorative fill for a marquee, footer letter, chart series, card background or heading. If a surface needs emphasis without interaction, use ink or a neutral tonal step.

**The No Ambient Accent Rule.** No purple-blue "AI" gradients, glows, sparkle icons or holographic surfaces. The copilot earns attention through the record it reads, not through a second palette.

## Typography

**Display Font:** General Sans (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** General Sans (with ui-sans-serif, system-ui, sans-serif)
**Label Font:** General Sans, same family

**Character:** One geometric-humanist family in three weights. The scale does the work: the wordmark is architectural, the headings are compact and editorial, and the product metadata is deliberately small and legible. There is no serif, mono or display-face contrast.

### Hierarchy

- **Display** (700, `clamp(3.5rem, 14.4vw, 13.75rem)`, 0.8): The HRUNO name band only. Set tight, left aligned, one line.
- **Headline** (500, `clamp(2.25rem, 1.4rem + 3.2vw, 4.25rem)`, 1.02): Section statements such as "One board for the work" and "Every record on one board".
- **Title** (500, `1.75rem`, 1.08): Feature, stage, record, FAQ and question titles. Keep lines short.
- **Lead** (400, `clamp(1.25rem, 1.1rem + 0.7vw, 1.875rem)`, 1.16): The hero statement. It is the only long passage at this size.
- **Body** (400, `1.125rem`, 1.55): Explanations and product detail. Cap marketing copy at 62–72ch.
- **UI** (500, `1rem`, 1.4): Buttons, rail values, row labels and copilot controls.
- **Label** (500, `0.875rem`, 1.2): Status chips, dates, table metadata and small captions.
- **Micro** (400, `0.8125rem`, 1.3): Sample labels, footer credits and the smallest product chrome.
- **Rail Value** (500, `1.5rem`, 1): The large value in a hero rail tile.
- **Marquee** (700, `clamp(2.75rem, 7.5vw, 7rem)`, 1): The single running line between hero and product.
- **Footer Mark** (700, `clamp(4rem, 10vw, 9rem)`, 0.8): The five-block Hruno wordmark; at ≤760px it steps to 3rem.

The public page uses five editorial sizes (display, headline, title, lead, body). The synthetic product fragments add 13–16px UI sizes because real product chrome needs them; that is a deliberate product-interface layer, not a second marketing scale. The rail values, marquee and footer mark are display utilities with their own fixed or fluid steps, not body-copy sizes.

### Named Rules

**The One Face Rule.** Use General Sans 400, 500 and 700 only. Do not add a serif, mono, handwriting or decorative display face.

**The No Tiny Body Rule.** Body copy never goes below 1rem. 13–14px is for metadata, labels and product chrome, never for a paragraph.

## Layout

The page is a 12-column board inside an 8px outer gutter, with an 8px gap between tiles and a 4px gap between rows inside a board. The maximum width is 1920px; the board should feel like it fills the viewport rather than floating in a container.

The hero is a 2/8/2 composition at 1440px: a left rail with one square photograph above five facts; a center stack with the copilot panel and the statement/CTA band; a right rail of five tiles. Above it sit the full-width name band and four equal navigation tiles. The first viewport is designed to hold the name, navigation, copilot, statement, both CTAs and the waitlist tile without a scroll at 1440×900.

The body repeats the board language: a 5/7, 4/8, 6/6 feature grid; full-width record rows; a three-stage bar with 5/3/2 widths; a 5/7 FAQ split; a 4/4/4 closing board. Tiles align to the same gutters and never overlap.

Responsive behavior:
- **≤1100px:** feature tiles drop to 6/6; the hero begins to compress.
- **≤900px:** the hero center and rails stack; the FAQ pane hides and answers become inline; the CTA becomes one column with the action first and the photo second; record rows lose the module column and keep name, detail and status.
- **≤760px:** 6px gutters; one-column features; nav becomes 2×2; the hero name remains one line; facts become a two-column grid with the last fact spanning both columns; the footer wordmark shortens.
- **≤620px:** record rows move the detail to its own line under the name; name, detail and status remain visible.

## Elevation & Depth

There are no shadows. Depth is tonal and spatial: the page field is `#111111`, standard tiles are `#1c1c1c`, inset product panels are `#161616`, secondary surfaces are `#252525`, and the strongest neutral is `#363636`. An 8px gap is the only separator. A focus ring is the only outline: 2px bronze at 3px offset, never a resting border.

Motion is part of depth but not decoration. The hero board seats itself once: four nav tiles, three copilot rows and the waitlist tile arrive in a 40–300ms stagger over 420ms. The copilot approval is the one authored board moment: pressing the action stamps the two leave rows as approved and adds a sample-only note. The two photographs drift slowly (26s and 30s, alternating) inside clipped frames. The marquee runs at 34s and pauses on hover. The open record uses a 320ms rise. All of it collapses under `prefers-reduced-motion`.

### Named Rules

**The Flat-by-Default Rule.** No box shadows, gradients, glows or blurred glass at rest. If a surface needs to rise, change its neutral step or its position in the grid, not its shadow.

**The One Authored Moment Rule.** A control must visibly change the record it names. The copilot's "Approve 2 requests" updates the two leave rows and labels itself as a sample; it does not pretend to write live data.

## Shapes

Everything is square. `border-radius: 0` is the default on buttons, tiles, chips, status labels, record rows, images and the footer wordmark. There are no borders; separation comes from 8px gaps and tonal steps. Photographs are clipped by their tile, never rounded. The footer mark is a row of five hard-edged blocks with no letter spacing between the board and the body.

The only repeated silhouette is the rectangle: wide statement bands, narrow rail tiles, one-line record rows, and a square photograph. The CTA's quiet square in the flat tile is the one small geometric echo, and it is neutral, not bronze.

## Components

### Buttons

- **Shape:** square (0px radius), 48px minimum height.
- **Primary:** bronze ground, lunar-black text, 0 22px padding. Hover moves to bronze-hover.
- **Inverse:** lunar-black ground, bronze text; hover becomes strong neutral with ink text. Used only inside the bronze CTA panel.
- **Secondary:** a text link with a 10px gap and a moving arrow; 48px hit area. It is never a second filled button beside the primary.
- **Focus:** 2px bronze outline, 3px offset. Never remove it.

### Chips and Statuses

- **Selected chip:** bronze ground, lunar-black text, square, 8px 10px. The active copilot prompt is the canonical example.
- **Unselected chip:** muted text on the tile; hover moves to ink.
- **Status:** flat square pill with 7px 9px padding. Neutral statuses use `#252525` with ink; attention statuses use bronze with lunar-black. Do not use traffic-light green/red; the system has no semantic green/red pair.

### Cards and Tiles

- **Corner style:** square.
- **Background:** tile `#1c1c1c` by default; raised `#252525` for the FAQ pane and marquee; panel `#161616` for the copilot working area.
- **Shadow:** none.
- **Border:** none.
- **Internal padding:** `clamp(20px, 2.4vw, 36px)` for editorial tiles; 16–24px for product fragments.
- Feature tiles use 5/7, 4/8 and 6/6 spans. Do not make every feature the same width.

### Navigation

Four equal tiles across the page at 60px height, ink text at 1rem/500. Hover moves the tile to `#252525`; there is no underline or pill. The language switch is a two-button EN / ID group at the right of the name band, with the active language in ink and the inactive in muted. At ≤760px the nav becomes a 2×2 grid and the switch stays at the top right.

### Copilot

The signature component. A deep panel with a 44px bar (H mark, title, "Sample workspace"), a horizontally scrollable prompt row, a short answer, three named rows and one action. Active prompt is bronze. Rows are flat, 36px, with initials in a strong neutral square. The action is a real button: the leave prompt approves the two named leave rows, adds "Approved ·" to their dates, changes to "Approved in this sample", and shows "Sample only — no live data changes." The payroll and hiring prompts open a labelled sample state rather than pretending to navigate.

### Records Board

Eight full-width rows, 76px, with name, module, detail and status. One row is open at a time; the open row turns bronze and reveals a short record note. Pending and "needs review" statuses use the bronze attention pill; approved/open statuses use ink on bronze. Do not use row stripes or hover shadows.

### FAQ

A 5/7 split: seven question buttons on the left, one answer pane on the right. The selected question is bronze; the pane is raised neutral and stretches to the list height. The pane ends with a "Book a demo" action. At ≤900px the pane disappears and the answer opens inline under the selected question.

### Photography

Two black-and-white architectural photographs, each credited in its own caption: the hero's window view by Charles Forerunner, the CTA's concrete-and-sky crop by Carl Nenzen Loven. Both are grayscale with a slight contrast lift, clipped square or wide, and never used as a background behind text. Product UI, not photography, carries the product claims.

### Synthetic Product Surfaces

Every product view is a sample. The copilot bar says "Sample workspace", the features heading says the views are sample data from one workspace, the records caption says eight records from a sample workspace, and the footer repeats the policy. The same workspace must stay internally consistent: if the copilot says one person short on Thursday, the record says cover is not yet assigned; if payroll is blocked by a missing bank account, the payroll fragment says Blocked.

## Do's and Don'ts

### Do:
- **Do** use 8px page gutters and 8px tile gaps at desktop, 6px at ≤760px, and 4px between rows inside a board.
- **Do** keep every corner at 0 and every resting surface flat.
- **Do** reserve bronze for the primary action, selected state, attention state and the small H mark. The bronze CTA panel is the one large action field; do not add a second.
- **Do** use the neutral ladder (`#111111` → `#1c1c1c` → `#252525` → `#363636`) to create depth.
- **Do** set product UI in real HTML fragments with real numbers, names and dates from one sample workspace.
- **Do** label every synthetic product view at the point of use: "Sample workspace", "sample data", "data contoh".
- **Do** write English and Indonesian as separate, idiomatic copies. Keep the same facts and the same honesty in both.
- **Do** credit both photographs and keep their captions visible.
- **Do** provide a reduced-motion path and a visible focus ring.

### Don't:
- **Don't** add gradients, neon, glass, blurred cards, rounded corners, drop shadows or decorative outlines.
- **Don't** use bronze as a background for marquees, footer letters, charts, stats or decorative squares.
- **Don't** invent customers, testimonials, logos, pricing, benchmarks, compliance certifications or live-product claims.
- **Don't** show a dashboard, metric or record without a sample-data label.
- **Don't** let the copilot contradict the record: no "one person short" beside "+1 cover", no "Approve 2" beside an already-approved request, no "Ready to lock" beside "blocked payroll".
- **Don't** use a generic fade-up on every section. The page's motion is the hero board seat, the copilot approval, two drifting photographs and the marquee; keep it to that.
- **Don't** use purple-blue "AI" gradients, sparkle icons or a second accent to signal intelligence.
