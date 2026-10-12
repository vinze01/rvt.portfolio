# RVT Portfolio Website

A personal portfolio for **Robin Vince Tupil (RVT)**, Full Stack Developer. Editorial, art-directed redesign (“Full Stack Engineering”): Swiss typography, cinematic dark + warm paper light themes, asymmetric layouts, and restrained motion.

Live socials: [GitHub](https://github.com/vinze01) · [LinkedIn](https://www.linkedin.com/in/rvt-dev/) · [Facebook](https://www.facebook.com/veeenss/)

## ✨ What’s inside

- **4 routes (Vue Router, history mode):** `/` Home · `/about` About · `/projects` Projects · `/contact` Contact, with a quick fade/rise transition
- **Home:** oversized editorial hero (name as display type, typed roles, pointer-responsive grid + spotlight), subtle skills marquee (logos + names, grayscale until hover), alternating Selected Work previews (deep-link `?open=` into the Projects modal), capability rows, experience snapshot, contact CTA band
- **About:** professional narrative, portrait figure, expandable experience timeline (full-row clickable header plus a dedicated +/− toggle button, keyboard accessible, first role open by default), capabilities grouped by delivery area, education list
- **Projects:** editorial index (01–04) with large framed screenshots, alternating compositions, hover “Open case”, accessible Ant Design detail modal (Esc/backdrop close), GitHub + live-demo links preserved
- **Contact:** oversized closing typography, direct email/location/availability rows, social buttons, refined form that composes a `mailto:` (no backend, stated honestly in UI) + confirmation modal
- **Chrome:** fixed header with RVT monogram, numbered nav + active indicator, availability pill, theme toggle, mobile menu; editorial footer with contact CTA, sitemap, dynamic year, back-to-top; lazy-rendered Chatbase assistant widget
- **Themes:** dark (`#0b0b0c` + acid lime `#d7f542`) and light (warm bone `#f2eee3` + deep olive accents), intentionally designed separately, persisted in `localStorage`, `prefers-color-scheme` first-visit default, pre-paint init script (no flash)
- **Motion:** single lightweight `v-reveal` IntersectionObserver directive (transform/opacity, staggered delays, reduced-motion aware) + CSS-only hero/ticker/modal motion. No AOS, GSAP, or smooth-scroll libs, deliberate to keep the build lean and reliable.

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | Vue 3.2 (Composition API, `<script lang="ts">`) |
| Language | TypeScript ~4.5 |
| Routing | Vue Router 4 (`createWebHistory`) |
| UI | Ant Design Vue 4 (modal/layout only, fully re-skinned) + `@ant-design/icons-vue` |
| Styling | Vanilla CSS + CSS variables (`src/global.css` design tokens) |
| Typography | Space Grotesk (display) + Inter (body) via Google Fonts; system mono for labels |
| Build | Vue CLI 5, Babel, ESLint + TypeScript plugin |
| Chatbot | Chatbase iframe (lazy-rendered on open) |

No new runtime dependencies were added in the redesign. AOS remains in `package.json` but is no longer used (candidate for removal in a follow-up).

## 📁 Project Structure

```
├── public/index.html          # Title/meta/fonts, pre-paint theme script (no flash)
├── src/
│   ├── App.vue                # Layout shell: header, router-view, footer, chat
│   ├── main.ts                # createApp, Antd, router, global v-reveal
│   ├── global.css             # Design tokens, primitives (.wrap, .kicker, .display, .btn-craft), Ant re-skin
│   ├── data/portfolio.ts      # Single source: profile, roles, projects, experiences, capabilities, education
│   ├── composables/
│   │   ├── useTheme.ts        # Canonical theme state (init/persist/toggle)
│   │   └── useReveal.ts       # v-reveal directive (IntersectionObserver, cleanup, reduced-motion)
│   ├── components/
│   │   ├── SiteHeader.vue     # Monogram, numbered nav, availability, theme toggle, mobile menu
│   │   ├── SiteFooter.vue     # Contact CTA, sitemap, socials, year, back-to-top
│   │   ├── SectionHeading.vue # Numbered editorial section headers
│   │   └── ChatWidget.vue     # Floating Chatbase assistant (lazy iframe)
│   ├── views/
│   │   ├── Home.vue           # Hero + ticker + selected work + capabilities + snapshot + CTA
│   │   ├── About.vue          # Narrative + timeline + capability groups + education
│   │   ├── Projects.vue       # Editorial index + detail modal + ?open= deep links
│   │   └── Contact.vue        # Closing statement + info + mailto form + confirmation
│   ├── router/index.ts        # /, /about, /projects, /contact
│   └── assets/                # portraits, project screenshots, logo, bg (reused as-is)
```

## 🚀 Getting Started

Requires Node.js 16+ (LTS recommended) and npm.

```bash
npm install
npm run serve    # hot-reload, default http://localhost:8080/
npm run build    # production output in dist/
npm run lint     # eslint (no errors as of redesign)
```

History-mode routing needs an SPA fallback (`index.html` rewrite) on static hosts, or sub-route refreshes will 404.

## 🎨 Design tokens

Defined in `src/global.css` under `:root` + `[data-theme="dark"|"light"]`: fonts, fluid type scale (`clamp()`), `--wrap` widths, radii, easing/duration tokens, and per-theme surfaces, ink, lines, accent (`--accent` / `--accent-strong` / `--accent-wash`), grid/spot treatments, and shadows. Components consume tokens only. No hardcoded theme colors.

## ♿ Accessibility & responsive

- Semantic landmarks, skip link, labelled icon buttons, visible focus rings, dialog semantics on chat/modal; experience timeline uses native `<button>` headers with `aria-expanded` / `aria-controls`
- `prefers-reduced-motion` disables typing loop advance, ticker, reveals, and pointer spotlight
- Pointer effects are pointer-type gated (ignored on touch); no hover-only essential info
- Fluid type + grid, tested breakpoints 320 → 1600px+; no horizontal overflow (`overflow-x: clip`)

## 👤 Author

**Robin Vince Tupil**, Full Stack Developer (HRIS / LMS / DMS, web apps, APIs, AI tooling)
- Email: robin.vince01@gmail.com
- GitHub: https://github.com/vinze01 · LinkedIn: https://www.linkedin.com/in/rvt-dev/ · Facebook: https://www.facebook.com/veeenss/

## 📄 License

Private portfolio (`"private": true`). © Robin Vince Tupil, all rights reserved.
