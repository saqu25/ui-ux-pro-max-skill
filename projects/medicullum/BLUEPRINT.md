# Medicullum — Website Design Blueprint

Premium overseas education consultancy website for Medicullum (India → Bulgaria).
Built with the `ui-ux-pro-max` design toolkit as a static, framework-free
HTML/Tailwind/vanilla-JS site. This document is the developer/designer handoff:
design system, wireframes, component specs, SEO structure and sitemap.

Live files: `index.html` + 11 other pages in this folder, shared assets in
`assets/css/style.css` and `assets/js/main.js`.

---

## 1. Design System

### 1.1 Brand Palette

| Token | Hex | Usage |
|---|---|---|
| `--navy` | `#0A1F44` | Primary brand color — header, footer, dark sections, headings |
| `--navy-deep` | `#061530` | Hero gradient base, darkest surface |
| `--navy-800` | `#102A54` | Gradient mid-tone, card media backgrounds |
| `--gold` | `#C9A227` | Accent — CTAs, badges, dividers, active states |
| `--gold-light` | `#E6C65C` | Gold gradient highlight, hover states |
| `--white` | `#FFFFFF` | Cards, form backgrounds |
| `--soft-gray` | `#F5F6F8` | Page background |
| `--ink` | `#17213B` | Body text |
| `--muted` | `#5B6478` | Secondary text |
| `--border` | `#E4E7EE` | Card borders, dividers |

Sourced and validated via the `ui-ux-pro-max` color database (Luxury/Premium
Brand + Hotel/Hospitality navy-gold palettes), adjusted for a bespoke deep-navy
identity per the brief.

### 1.2 Typography

**Classic Elegant** pairing from the `ui-ux-pro-max` typography database:

- **Headings:** Playfair Display (500/600/700/800) — serif, editorial, premium
- **Body:** Inter (300–700) — clean, highly legible at small sizes

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:wght@500;600;700;800&display=swap');
```

Scale: H1 40–60px / H2 30–36px / H3 18–20px / Body 16px / Small 14px.
Large headline + high body readability, per brief.

### 1.3 Spacing, Radius, Elevation

- Section padding: `5rem` mobile → `7rem` desktop (`py-20 md:py-28`)
- Card radius: `16px` (`--radius-md`), hero/CTA banner radius: `24px`
- Shadows: soft ambient (`--shadow-sm/md/lg`) + a warm gold shadow for
  primary buttons (`--shadow-gold`) — no harsh drop shadows
- Buttons: fully rounded (`border-radius: 999px`), 0.85rem/1.9rem padding

### 1.4 Effects

- **Glassmorphism:** `.glass` / `.glass-dark` — `backdrop-filter: blur(18px)
  saturate(160%)` over translucent navy/white, used in the sticky header,
  trust-indicator chips, and CTA banners
- **Motion:** IntersectionObserver-driven `.reveal` fade/slide-up (points
  sourced from the `ui-ux-pro-max` GSAP-tier guidance, implemented in plain
  CSS transitions to keep the page dependency-free), staggered via
  `.reveal-delay-1..4`; animated counters on stat numbers; respects
  `prefers-reduced-motion`
- **Hero treatment:** navy gradient + faint grid overlay + gold radial glow,
  echoing the "Trust & Authority" style pattern from the style database
  (certification-grade credibility, finished with a luxury gold accent)

---

## 2. Site Architecture & Internal Linking

```
Home ─┬─ Study in Bulgaria ──┬─ Universities (Medical filter)
      ├─ Universities ───────┼─ Book Consultation
      ├─ Business Programs ──┤
      ├─ Engineering & IT ───┤
      ├─ Culinary & Hospitality
      ├─ About
      ├─ Services
      ├─ Success Stories
      ├─ Blog
      ├─ Contact ──────────── WhatsApp (external)
      └─ Book Consultation (primary conversion goal)
```

- Every page's primary nav includes a **Programs** dropdown (Business /
  Engineering & IT / Culinary & Hospitality) plus persistent **WhatsApp** and
  **Book Free Consultation** actions in the header — visible on every
  scroll position (sticky glass header).
- Every page footer repeats Quick Links, Programs and Contact blocks so
  crawlers and users reach any page within 2 clicks from anywhere.
- Program pages (Business/Engineering/Culinary) and the Bulgaria/Medicine
  page all deep-link into `universities.html`'s category filter for a
  consistent "browse universities for this program" path.
- `book-consultation.html` is the single conversion endpoint linked from
  every hero, footer CTA banner, and inline card on the site.

---

## 3. Page-by-Page Wireframes

### 3.1 Home (`index.html`)
```
[Sticky glass header: logo | nav + Programs▾ | WhatsApp | Book Consultation]
[HERO — navy gradient, grid overlay]
  Eyebrow · H1 · Subhead · [Book Free Consultation] [Explore Universities]
  4 glass trust chips: 24/7 Support · University Partnerships · Visa · E2E
[STATS strip — white bg] 15+ Universities | 30+ Programs | Bulgaria (EU) | 24/7
[WHY CHOOSE MEDICULLUM] eyebrow+h2 / 3x3 icon-card grid (9 differentiators)
[PROGRAMS WE OFFER — white bg] 4 program cards (Medicine/Business/Eng/Culinary)
[WHY BULGARIA] 2-col: copy+checklist | gradient stat panel (founded/EU/duration/fee)
[HOW IT WORKS] 4-step horizontal timeline w/ gold dotted connector
[SUCCESS STORIES preview — 3 testimonial cards] → link to full page
[FROM THE BLOG — white bg, 3 article cards] → link to full blog
[CTA BANNER] "Ready to start your journey?" + dual CTA
[FOOTER — 5 columns + WhatsApp floating button]
```

### 3.2 Study in Bulgaria (`study-in-bulgaria.html`)
Hero → Overview (2-col: narrative + sticky "Programs Covered" checklist card)
→ Medical Universities grid (6 cards) → Eligibility checklist + FAQ accordion
(NMC recognition, NEET requirement, medium of instruction, duration, post-arrival support).

### 3.3 Universities (`universities.html`)
Hero → **Filter tabs** (All / Medical / Business / Engineering & IT /
Culinary & Hospitality, client-side JS toggle) → responsive 3-col grid of
16 university cards (image band, programs, tuition/duration/intake stat
trio, program-type badge, Learn More) → consultation nudge banner.

### 3.4 Business / Engineering & IT / Culinary & Hospitality pages
Shared template: Hero → 2-col intro (narrative + sticky career-outcomes
card) → 4 differentiator cards → matching university cards (filtered
subset) → CTA banner. Keeps program pages visually consistent while
content (careers, universities, highlights) is fully bespoke per program.

### 3.5 About (`about.html`)
Hero → Story (2-col: narrative + 4 stat cards) → Values (4-card grid) →
Team (4 counsellor cards with initials avatar placeholders).

### 3.6 Services (`services.html`)
Hero → 11-service icon-card grid (Admission Processing → Long-Term Student
Support, matching the brief's exact list) → CTA banner.

### 3.7 Success Stories (`success-stories.html`)
Hero → filter tabs by program category → 9 testimonial cards (avatar
initials placeholder, star rating, course, university, quote) → CTA block.

### 3.8 Blog (`blog.html`)
Hero → category filter tabs → 9 article cards (image band, category badge,
read time, title, excerpt) → newsletter capture banner.

### 3.9 Contact (`contact.html`)
Hero → full-width WhatsApp CTA banner → 2-col: contact info cards
(location/email/phone/social) + message form → embedded map → CTA banner.

### 3.10 Book Consultation (`book-consultation.html`)
Hero → 2-col: "What happens next" 3-step explainer (sticky) + full lead
form (Name, Phone, Email, Country, Desired Program, Preferred University,
Intake, Best Time to Contact, Message) with inline validation and an
on-submit success state.

---

## 4. Component Specification

| Component | File ref | Notes |
|---|---|---|
| Sticky glass header + mega Programs dropdown + mobile full-screen nav | `.site-header`, `.dropdown-panel`, `[data-nav-panel]` | Scroll-aware shadow via `initStickyHeader()` |
| Buttons: `.btn-gold` / `.btn-outline-light` / `.btn-outline-navy` / `.btn-whatsapp` | `style.css` | Consistent pill shape, hover lift + shadow |
| Stat counters | `[data-counter]` + `initCounters()` | Count-up animation on scroll-into-view |
| Icon cards ("Why Choose" / Services) | `why_card()` | 12px icon tile, title, 2-line description |
| University / Program card | `uni_card()` | Media band, programs list, 3-stat row, badge, CTA |
| Testimonial card | `testimonial_card()` | Star rating, quote, initials avatar, course/university |
| FAQ accordion | `[data-faq-item]` | Height-animated disclosure, rotate-plus icon |
| Filter tabs | `[data-filter-tabs]` / `[data-filter-item]` | Vanilla JS category toggle, reused on Universities/Stories/Blog |
| Lead forms | `[data-lead-form]` | Client-side required-field validation + success panel swap |
| Floating WhatsApp button | `.float-whatsapp` | Fixed, bottom-right, all pages |
| CTA banner | shared footer partial | Glass panel over navy, repeated pre-footer on every page |

All components are hand-authored HTML/CSS/JS (no component framework),
matching this repository's existing `projects/*` static-page convention.

---

## 5. SEO Structure

### 5.1 Titles & Meta Descriptions

| Page | Title | Meta Description |
|---|---|---|
| Home | Medicullum \| Study in Bulgaria — MBBS, Business, Engineering & IT Admission Experts | Medicullum is India's trusted overseas education consultancy for Bulgaria. Get expert guidance on MBBS, Business, Engineering, IT and Hospitality admissions, visa support and complete student care. |
| Study in Bulgaria | Study Medicine (MD) in Bulgaria \| NMC-Recognised Universities — Medicullum | Study MBBS/MD, Dentistry, Pharmacy, Nursing and Physiotherapy in Bulgaria. Compare 6 accredited medical universities with tuition, intake and eligibility details. |
| Universities | Universities in Bulgaria \| Medicine, Business, Engineering & Culinary Programs — Medicullum | Compare 12+ accredited Bulgarian universities for Medicine, Business, Engineering, IT, Culinary Arts and Hospitality — tuition, duration, intake and program details. |
| Business Programs | Business Programs in Bulgaria \| BBA, MBA & Finance Degrees — Medicullum | Study Business Administration, Finance, Marketing and Management in Bulgaria at 4 leading universities. |
| Engineering & IT | Engineering & IT Programs in Bulgaria \| Computer Science, AI & Engineering — Medicullum | Study Computer Science, AI, Software and core Engineering at Technical University Sofia, Varna, Gabrovo and Sofia University. |
| Culinary & Hospitality | Culinary Arts & Hospitality Management in Bulgaria — Medicullum | Study Culinary Arts and Hotel Management at Varna University of Management and International Hotel Casino School. |
| About | About Medicullum \| India's Trusted Bulgaria Education Consultancy | Learn about Medicullum's story, values and counsellors helping Indian students secure admissions in Bulgaria. |
| Services | Our Services \| Admission, Visa, Accommodation & Student Support — Medicullum | Explore Medicullum's complete range of services for studying in Bulgaria. |
| Success Stories | Student Success Stories \| Medicullum Bulgaria Admissions | Read real success stories from Indian students who studied in Bulgaria with Medicullum's guidance. |
| Blog | Blog \| Bulgaria Admissions, Visa & Student Life Guides — Medicullum | Guides on studying in Bulgaria: admission costs, visa timelines, career outcomes and student life. |
| Contact | Contact Medicullum \| Bulgaria Education Consultancy — India | Get in touch with Medicullum for admission guidance to Bulgaria. |
| Book Consultation | Book Free Consultation \| Medicullum Bulgaria Admissions | Book a free consultation with Medicullum. Response within 24 hours. |

Every page also carries a canonical URL, Open Graph + Twitter Card tags,
and `theme-color`.

### 5.2 Structured Data (JSON-LD)

| Page | Schema type |
|---|---|
| Home | `EducationalOrganization` (name, logo, address, contact point, social profiles) |
| Study in Bulgaria | `FAQPage` (5 Q&As: NMC recognition, NEET, medium of instruction, duration, post-arrival support) |
| Universities / Business / Engineering / Culinary | `BreadcrumbList` |
| About | `AboutPage` → `Organization` |
| Services | `Service` (provider, area served, audience) |
| Success Stories | `CollectionPage` |
| Blog | `Blog` |
| Contact | `ContactPage` → `Organization` with `PostalAddress` |
| Book Consultation | `WebPage` |

### 5.3 Sitemap

See `sitemap.xml` in this folder — all 12 pages with `changefreq`/`priority`
(Home and Book Consultation weighted highest for crawl priority).

---

## 6. Conversion Design Notes

- **Primary CTA** (`Book Free Consultation`, gold pill) appears in: header
  (desktop + mobile), every hero, every pre-footer CTA banner, and as the
  form itself — never more than one scroll away.
- **Secondary CTA** (`WhatsApp Us`) appears in header, floating button
  (all pages), and a dedicated banner on the Contact page — for users who
  want a faster, lower-commitment channel than a form.
- Trust is front-loaded: hero trust chips → stat counters → 9-point "Why
  Choose" grid, before any product/program content, per the "Trust &
  Authority" landing pattern (credibility → proof → offer → CTA).
- Forms are kept short where possible (Contact = 4 fields) and richer only
  where lead quality matters (Book Consultation = 8 fields incl. program +
  university + intake, enabling immediate counsellor routing).

---

## 7. Handoff Notes for Production

This is a static, dependency-light prototype meant to be handed directly to
a developer. Before launch:

1. **Build pipeline:** replace the Tailwind Play CDN `<script>` with a
   compiled Tailwind build (PostCSS/Vite) for performance and CSP control.
2. **Fonts:** self-host or confirm Google Fonts availability in the target
   region; add `font-display: swap` (already set) and preload the two
   heading weights used above the fold.
3. **Forms:** wire `[data-lead-form]` submissions to a real CRM/backend
   (the current JS only does client-side validation + a visual success
   state — no network request is made).
4. **Map:** the Contact page ships a placeholder OpenStreetMap embed with
   approximate Gurugram coordinates — replace with the real office
   location.
5. **Imagery:** `.uni-media` / blog card banners are gradient placeholders
   — replace with real campus/student photography before launch.
6. **Legal:** Privacy Policy / Terms links in the footer are placeholders.
