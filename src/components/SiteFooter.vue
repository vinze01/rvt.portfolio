<template>
  <footer class="site-footer">
    <div class="wrap-wide">
      <div class="top">
        <router-link to="/contact" class="cta-line">
          <span class="cta-kicker kicker">Next step</span>
          <span class="cta-big display">Let's build something sharp<span class="dot">.</span></span>
        </router-link>
        <div class="cols">
          <div class="col">
            <p class="meta-row">Sitemap</p>
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/contact">Contact</router-link>
          </div>
          <div class="col">
            <p class="meta-row">Elsewhere</p>
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.url"
              target="_blank"
              rel="noopener noreferrer"
            >{{ s.label }} ↗</a>
          </div>
          <div class="col">
            <p class="meta-row">Direct</p>
            <a :href="`mailto:${email}`">{{ email }}</a>
            <span class="loc">{{ location }}</span>
          </div>
        </div>
      </div>
      <hr class="rule" />
      <div class="bottom">
        <span class="brand-mini">RVT</span>
        <p class="copyright">© {{ year }} Robin Vince Tupil. All rights reserved.</p>
        <button class="to-top" type="button" @click="toTop" aria-label="Back to top">↑ Top</button>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { profile } from "@/data/portfolio";

export default defineComponent({
  name: "SiteFooter",
  setup() {
    const year = new Date().getFullYear();
    const toTop = () => {
      const reduced =
        typeof window !== "undefined" &&
        typeof window.matchMedia === "function" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior: "auto" | "smooth" = reduced ? "auto" : "smooth";
      try {
        window.scrollTo({ top: 0, left: 0, behavior });
      } catch {
        window.scrollTo(0, 0);
      }
      // Hard fallbacks in case the scrolling element differs per browser.
      const scroller = document.scrollingElement;
      if (scroller) scroller.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };
    return {
      year,
      toTop,
      socials: profile.socials,
      email: profile.email,
      location: profile.location,
    };
  },
});
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--line);
  background: var(--bg-2);
  padding: clamp(3rem, 6vw, 5rem) 0 1.75rem;
  margin-top: auto;
}
.top {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: start;
  margin-bottom: 2.5rem;
}
.cta-line { text-decoration: none; display: block; }
.cta-big {
  display: block;
  font-size: clamp(2rem, 5vw, 3.6rem);
  margin-top: 1rem;
  transition: letter-spacing var(--dur-med) var(--ease-out);
}
.cta-line:hover .cta-big { letter-spacing: -0.015em; }
.dot { color: var(--accent-strong); }
[data-theme="dark"] .dot { color: var(--accent); }
.cols { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; }
.col { display: flex; flex-direction: column; gap: 0.55rem; }
.col .meta-row { margin-bottom: 0.4rem; }
.col a { text-decoration: none; color: var(--muted); font-weight: 500; width: fit-content; }
.col a:hover { color: var(--ink); text-decoration: underline; text-underline-offset: 4px; }
.loc { color: var(--muted); font-size: 0.9rem; }
.bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  flex-wrap: wrap;
}
.brand-mini { font-family: var(--font-mono); font-size: var(--fs-micro); letter-spacing: 0.2em; text-transform: uppercase; color: var(--faint); }
.copyright { color: var(--faint); font-size: var(--fs-small); }
.to-top {
  position: relative;
  z-index: 991; /* sit above the fixed chat FAB (z-index 990) which overlaps the footer's bottom-right */
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  border-radius: 999px;
  padding: 0.55rem 1.1rem;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: border-color var(--dur-fast) ease, transform var(--dur-fast) var(--ease-out);
}
.to-top:hover { border-color: var(--accent-strong); transform: translateY(-2px); }
@media (max-width: 900px) {
  .top { grid-template-columns: 1fr; }
  .cols { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .cols { grid-template-columns: 1fr; }
}
</style>
