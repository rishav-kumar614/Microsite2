# Microsite 2 — Strategic HR Advisory
## Dr. Krishan Singh | HR Transformation, Organization Design & Culture Consulting

A single-page, premium microsite focused on Dr. Krishan's **Strategic HR Advisory** practice — his third pillar alongside Executive Coaching and Industrial Relations. This site positions him as a senior HR strategist serving CXOs and Board-level clients.

---

## Color Palette (Extracted from dr-krishan-mu.vercel.app)

| Token | Light Mode | Dark Mode | Usage |
|---|---|---|---|
| `--primary` | `#0f5c5e` (Deep Teal) | `#14b8a6` (Teal) | Primary CTAs, headings, borders |
| `--primary-dark` | `#0a4042` | `#0d9488` | Hover states |
| `--secondary` | `#1e3a8a` (Navy Blue) | `#60a5fa` | Accents, badges |
| `--accent` | `#8b6508` (Dark Gold) | `#f0d070` (Warm Gold) | Highlights, icons, stat numbers |
| `--bg-soft` | `#f8fafc` | `#0b0f14` | Page background |
| `--charcoal` | `#1f2937` | `#f3f4f6` | Body text |
| `--card-bg` | `#ffffff` | `#131820` | Card surfaces |
| `--border` | `#e5e7eb` | `#1f2937` | Dividers, card borders |

**Typography**: `Playfair Display` (headings/serif) + `Inter` (body/sans)

---

## Asset Inventory (Microsite 2 — 34 Unique Images)

### Premium Studio Portraits (HERO use)
| File | Description | Best Use |
|---|---|---|
| `wsp-img-01.jpeg` | Seated in leather chair, library backdrop | **Primary Hero** |
| `wsp-img-02.jpeg` | Navy suit + tie, grey studio backdrop | About section |
| `wsp-img-05.jpeg` | Full-length navy suit + burgundy tie | Services section |
| `wsp-img-11.jpeg` | Corporate lobby "Excellence Innovation Integrity" | Advisory credentials |

### Professional Candid Portraits
| File | Description | Best Use |
|---|---|---|
| `wsp-img-03.jpeg` | Professional outdoor candid | About/journey |
| `wsp-img-04.jpeg` | Corporate candid | Sidebar |
| `wsp-img-06.jpeg` | Indoor corporate | Philosophy |
| `wsp-img-07.jpeg` | Office setting | Case studies |
| `wsp-img-08.jpeg` | Campus/outdoor | Bio |
| `wsp-img-09.jpeg` | Casual corporate | Gallery |
| `wsp-img-10.jpeg` | Outdoor standing near trees | Testimonial bg |
| `profile-travel.jpeg` | Near private jet | Executive travel |
| `profile-corporate.jpeg` | Formal corporate | Services |
| `profile-formal.jpeg` | Formal portrait | Profile card |
| `profile-casual.jpeg` | Casual corporate | Story section |
| `profile-outdoor.jpeg` | Outdoor portrait | Credentials |
| `photo-headshot-1.jpeg` | Close-up headshot | Nav avatar |
| `photo-headshot-2.jpeg` | Alternate headshot | Mobile nav |

### Awards & Recognition
| File | Description | Best Use |
|---|---|---|
| `award-srf-chairman.jpeg` | SRF Chairman's Award group photo | Recognition wall |
| `award-global-inclusion.jpeg` | Global Inclusion Summit & Awards 2024 | Awards carousel |
| `award-hrai-trophy.png` | HRAI HR Distinction Trophy (2018) | Awards showcase |
| `award-hr-distinction-cert.jpeg` | HR Distinction Award Certificate | Credentials |
| `award-srf-certificate.jpeg` | SRF Certificate photo | Recognition |
| `award-farewell.jpeg` | Farewell & recognition event | Career story |
| `award-felicitation.jpeg` | Felicitation ceremony | Journey |
| `icf-badge-card.jpeg` | ICF Badge card | Certifications |

### Speaking & Events
| File | Description | Best Use |
|---|---|---|
| `speaking-stage-1.jpeg` | On conference stage | Speaking section |
| `speaking-stage-2.jpeg` | Stage with screen | HR Leadership talks |
| `speaking-stage-3.jpeg` | Stage presentation | Thought leadership |

### Brand & Diagrams
| File | Description |
|---|---|
| `logo.jpeg` / `logo-dark.png` / `logo-light.png` | Dr. KS brand logos |
| `hr-framework-diagram.png` | HR framework visual from PDF |

---

## Proposed Page Architecture

### Single-Page Structure (Scroll-based)

```
1. NAVBAR           — Fixed, glassmorphism, logo + nav links + CTA
2. HERO             — Split-screen: text left, portrait right
3. ABOUT            — "The Advisor" — credentials strip + bio
4. SERVICES         — 3 HR pillars as card grid
5. PHILOSOPHY       — Quote + approach statement
6. TRACK RECORD     — Animated stats counter strip
7. CLIENTS & SECTORS— Industries served
8. RECOGNITION      — Awards carousel / grid
9. THOUGHT LEADERSHIP— Speaking engagements section
10. ENGAGEMENT      — How to work with Dr. KS (process)
11. TESTIMONIALS    — Pull quotes
12. CONTACT         — Form + CTA
13. FOOTER          — Links + social + copyright
```

---

## Proposed Changes

### Foundation

#### [NEW] [Microsite 2/index.html](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Dr%20Krishan%20Microsite's/Microsite%202/index.html)
Full single-page HTML with semantic sections, SEO meta tags, and structured data.

#### [NEW] [Microsite 2/css/style.css](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Dr%20Krishan%20Microsite's/Microsite%202/css/style.css)
Complete CSS design system — same color palette as Microsite 1 but with a **darker, more authoritative visual identity** suited to C-Suite HR advisory.

#### [NEW] [Microsite 2/js/main.js](file:///c:/Users/Rishav/OneDrive/Desktop/mywork/Dr%20Krishan%20Microsite's/Microsite%202/js/main.js)
Scroll animations, counter animations, navbar behavior, mobile menu, theme toggle.

---

## Section-by-Section Design Brief

### 1. NAVBAR
- Fixed top, glassmorphism (`backdrop-filter: blur(20px)`) in dark primary teal
- Left: Logo (`logo-light.png` on dark navbar)
- Links: About | Services | Track Record | Recognition | Contact
- Right: "Engage Dr. Krishan →" pill CTA button in gold accent
- Mobile: Hamburger menu, full-screen slide-in panel

### 2. HERO SECTION
**Layout**: Full-viewport, dark navy/teal gradient background
- **Left 55%**: 
  - Tag: `Strategic HR Advisory` (gold pill badge)
  - H1: *"Transforming Organizations Through People Strategy"*
  - Sub: *"35+ years shaping HR architecture for India's largest enterprises"*
  - Two CTAs: "Explore Services" (primary teal) | "Schedule a Consultation" (outline gold)
  - 3 micro-stat badges: `35+ Yrs` · `Fortune-500 HR` · `HRAI Awardee`
- **Right 45%**: `wsp-img-01.jpeg` in a floating card with layered shadow + teal border glow
- **Background**: Subtle animated geometric grid / particle dots

### 3. ABOUT — "THE ADVISOR"
- Sticky credential strip (teal bar): Ph.D. | 35+ Yrs | XLRI | SRF CHRO
- **Two-column**: Portrait (`wsp-img-02.jpeg`) left + bio paragraph right
- Bio anchored in Strategic HR: "Former CHRO of SRF Ltd... HR transformation across manufacturing, FMCG, and services sectors"
- Gold accent vertical line separator

### 4. SERVICES — "What I Do"
Three service cards in a horizontal 3-column grid:

| # | Card | Icon | Description |
|---|---|---|---|
| 1 | **HR Transformation** | `⚡` | End-to-end HR system redesign, policy frameworks, HR tech integration |
| 2 | **Organization Design** | `🏗️` | Org structure, spans & layers, workforce planning, restructuring |
| 3 | **Culture & People Systems** | `🌱` | Culture audit, values alignment, employee experience, people-system consulting |

Each card: Dark card background (`--card-bg`), top colored border in teal, icon in gold, hover lift animation.

### 5. PHILOSOPHY — "My Approach"
- Full-width dark section, large pull quote in Playfair Display italic
- *"HR is not a support function — it is the engine of business growth"*
- Portrait `wsp-img-11.jpeg` (the "Excellence · Innovation · Integrity" lobby photo) as background with overlay

### 6. TRACK RECORD — Animated Counters
Dark teal strip with 4 animated stat counters:
- `35+` Years of HR Leadership
- `10,000+` Employees Impacted
- `5+` Industries Transformed
- `3` National HR Awards

### 7. CLIENTS & SECTORS
- Icons/badges for sectors: Manufacturing | FMCG | Technology | Financial Services | Pharmaceuticals
- Client-type labels: Fortune 500 | Mid-Cap Growth Companies | PE-backed Firms | Family-Owned Businesses
- Image: `speaking-stage-1.jpeg` as section background with overlay

### 8. RECOGNITION — Awards Wall
Masonry/grid layout showcasing:
- `award-global-inclusion.jpeg` — Global Inclusion Summit & Awards 2024
- `award-srf-chairman.jpeg` — SRF Chairman's Award
- `award-hrai-trophy.png` — HRAI HR Distinction Trophy 2018
- `award-hr-distinction-cert.jpeg` — HR Distinction Certificate
- `icf-badge-card.jpeg` — ICF Badge

### 9. THOUGHT LEADERSHIP — Speaking
- Section header + subheading about industry influence
- Speaking photos: `speaking-stage-2.jpeg`, `speaking-stage-3.jpeg`
- Tags: HR Conferences | Industry Summits | University Panels | Corporate Workshops

### 10. ENGAGEMENT — "How to Work With Me"
3-step horizontal process:
1. **Discovery Call** → Understand the challenge
2. **Diagnostic & Proposal** → Assessment + roadmap
3. **Advisory Engagement** → Implementation & hand-holding

### 11. TESTIMONIALS
Pull-quote cards on dark background with a light quote mark icon in gold.
Placeholder with visual structure ready for client quotes.

### 12. CONTACT
Split layout:
- Left: Contact form (Name, Organization, Email, Challenge Description, CTA button)
- Right: Dr. Krishan's card with `wsp-img-02.jpeg`, phone/email links

### 13. FOOTER
Dark navy bg, logo, quick links, tagline, copyright 2026

---

## Design Aesthetic Differentiators (vs Microsite 1)

| Element | Microsite 1 (Coaching) | Microsite 2 (HR Advisory) |
|---|---|---|
| **Tone** | Warm, personal, inspirational | Authoritative, strategic, enterprise |
| **Primary BG** | Light (#f8fafc) | Dark (deep navy/teal dark) |
| **Hero portrait** | Casual event photo | Premium studio portrait |
| **Card style** | Light with teal border | Dark glass with gold accent border |
| **Typography emphasis** | Italic/warm | Bold/structured |
| **Animation** | Scroll fade-ins | Counter animations + reveal slides |
| **CTA color** | Teal primary | Gold accent primary |

---

## Open Questions

> [!IMPORTANT]
> **1. Dark vs Light Mode default?** Should Microsite 2 be **dark-first** (more executive/authoritative feel) or light-first like Microsite 1? My recommendation: **Dark-first**, as it differentiates the two microsites.

> [!IMPORTANT]
> **2. Company names for Case Studies?** Should specific client/company names be listed in the Track Record or Clients section, or kept generic (industry only)?

> [!NOTE]
> **3. Contact form action?** Is there a backend (Formspree, Netlify Forms, etc.) or should it just open a mailto link?

> [!NOTE]
> **4. Testimonials content?** Do you have real client testimonials to include, or should I put placeholder visual structures?

---

## Verification Plan

### Automated
- Open `index.html` in browser, verify all 13 sections render
- Check all 34 image paths resolve correctly
- Validate responsive layout at 375px (mobile), 768px (tablet), 1440px (desktop)

### Manual
- Review section-by-section visual quality
- Confirm color palette matches Microsite 1 palette tokens exactly
- Test dark/light theme toggle
- Check all animations trigger on scroll correctly
- Validate CTA buttons and contact form UI
