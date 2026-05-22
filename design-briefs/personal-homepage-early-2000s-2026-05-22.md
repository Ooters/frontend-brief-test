# Design Brief: Personal Homepage — Tasteful Early-2000s

## Purpose & audience
A personal homepage / digital garden — a hand-built corner of the web where the owner posts writing, thoughts, projects, links, and whatever else they want to express. Audience is whoever stumbles in (friends, internet strangers, future self), not a "customer." The one job it must do well: feel like a place you actually *visit*, not a feed you scroll — with a clear front page, a few sections (about / writing / projects / links / guestbook), and the warmth of a site someone made by hand in 2001.

## References analyzed
- `50de5af80ae782003cd3540f3410f349.jpg` (DeviantArt homepage, August 2000) → palette: muted sage `#9aa893`, warm beige panels `#d9d3b8`, cream inner fields `#efe9cf`, near-black text; type: small Verdana/Tahoma, bold headers on solid title bars; density: very dense table-grid; layout: 3-column with bracketed text nav above and below; tone: community-driven, geeky, utilitarian, proudly Web 1.0.

## Anti-references
- **Avoid (modern):** SaaS minimalism, giant hero sections, glassmorphism, gradient blobs, Inter/Geist fonts, rounded-2xl cards, dark-mode-by-default, infinite scroll, scroll-triggered reveals, hamburger menus, hover-lift cards.
- **Avoid (era excess):** tiled lava backgrounds, marquee-on-everything, neon-on-neon, unreadable nested tables, broken "under construction" pages. The target is *tasteful* early-2000s — handmade but well made.
- **In spirit, also draw from:** Space Jam 1996, early personal GeoCities/Angelfire, useit.com, old Slashdot, webrings, hit counters, "best viewed in 800×600" badges — but used with restraint.

## Tone & voice
- **Feel:** quiet, lived-in, a little nerdy, slightly nostalgic without being a costume. Like walking into someone's actual room rather than a showroom. Confident in its own taste.
- **Voice:** first-person, conversational, dry humor. Playful, self-aware section labels (e.g., "the writing desk," "things I made," "stuff worth your time," "sign the guestbook"). Footer carries a tiny easter-egg stat ("page rendering was a mere 0.xxxxxx seconds").
- **Avoid:** corporate-cheerful, LinkedIn-earnest, ironic-detached shitposting. Sincere but witty.

## Layout & density
- **Top:** banner with hand-styled logo (name + tagline "where ___ meets ___"), thin bracketed text nav above it: `[home] [about] [writing] [projects] [links] [contact]`.
- **Left column (~180px):** stacked titled-bar boxes — "Navigation," "Login" (decorative), "Elsewhere" (other profiles), "Webring" (optional).
- **Center column (fluid):** main content — welcome/intro panel, then "Latest Writing," "Recent Projects," "Now," each its own titled panel.
- **Right column (~180px):** "Search," "Featured" (rotating spotlight), "Shoutbox" (recent guestbook entries or quotes).
- **Footer:** repeat bracketed nav, copyright line, fake render-time stat, "best viewed in 1024×768" badge.
- **Density:** packed like the reference — ~11px body, tight line-height, panels butted close together, dotted/inset borders. No hero, no whitespace luxury.
- **Width:** fixed ~960px centered, desktop-first. Below ~720px columns stack: left nav → main → right sidebar. No hamburger; bracketed text nav wraps.

## Type & color
- **Fonts:**
  - Body & UI: `Verdana, Geneva, Tahoma, sans-serif` at 11px.
  - Headers / title bars: same family, **bold**, slightly tracked.
  - Logo: single chunky display treatment via CSS (text-shadow + letter-spacing) or a hand-styled SVG; no webfont.
  - Monospace accents (timestamps, render-time, code): `"Courier New", monospace`.
- **Palette:**
  - `#9aa893` — sage green (chrome / title bars / outer frame)
  - `#d9d3b8` — warm beige (panel backgrounds)
  - `#efe9cf` — cream (inner content / input fields)
  - `#6b7a63` — deep sage (header bar text background / accents)
  - `#222222` — near-black body text
  - `#5a4a2a` — muted brown (visited links)
  - `#2a4d8f` — classic web blue (unvisited links, underlined)
- **Mode:** light only. Dark mode is anachronistic.
- **Accent strategy:** color does structural work (title bars, borders), not decoration. Links are *the* interactive color signal.

## Motion & interaction
- **Default:** static. Restraint keeps it tasteful, not costume.
- **Allowed:** instant link hover color swap + underline toggle (no transition); button `:active` 1px inset-shadow press; **one** tasteful animated detail (blinking cursor in "Now" panel, or slow rotating "under construction" sign in footer) via CSS `@keyframes`; optional CSS-animated marquee-style shoutbox ticker, slow and unobtrusive.
- **Forbidden:** scroll-triggered reveals, parallax, fade-ins, easing curves, hover-lift, smooth-scroll. If it feels like 2024, cut it.
- **JS:** near-zero. Tiny script for fake render-time stat and a `localStorage` hit counter.

## Tech & constraints
- **Framework:** none. Plain `index.html` + `styles.css` + `site.js`. Zero build step.
- **Components:** none. Hand-written semantic HTML using CSS Grid styled to *look* like a 2001 table layout.
- **Responsive:** desktop-first at 960px fixed; stacks below ~720px.
- **Accessibility floor:** semantic landmarks (`<nav>`, `<main>`, `<aside>`, `<article>`, `<h1>`–`<h3>`); visible focus states (1px dotted outline); WCAG AA contrast on body text; `alt` text on decorative images; `aria-label` on icon-only links; fully keyboard-navigable; works with JS disabled.
- **Browsers:** evergreen Chrome/Firefox/Safari. No IE6 hacks.
- **File structure:**
  ```
  ├── index.html
  ├── styles.css
  ├── site.js
  └── assets/
  ```

## Non-goals
- Not a CMS, blog engine, or anything with a backend.
- Not mobile-first; not a PWA; not installable.
- Not pixel-faithful to the reference — the reference sets *vibe and density*, not exact pixels.
- Not a parody or costume of the era — it should look like a site a discerning person makes *today* using period-appropriate constraints.
