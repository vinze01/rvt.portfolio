<template>
  <div class="home">
    <!-- ============ HERO ============ -->
    <section class="hero" ref="heroEl" aria-label="Introduction">
      <div class="hero-grid-bg" aria-hidden="true"></div>
      <div class="hero-spot" aria-hidden="true"></div>

      <div class="wrap-wide hero-inner">
        <div class="hero-main">
          <p class="kicker" v-reveal>Portfolio · Full Stack Developer</p>
          <h1 class="display h-display hero-name" v-reveal="{ delay: 80 }">
            <span class="line">Robin Vince</span>
            <span class="line line--accent">Tupil<span class="dot">.</span></span>
          </h1>
          <p class="hero-role" v-reveal="{ delay: 160 }" aria-live="polite">
            <span class="role-static">I'm a</span>
            <span class="role-typed">{{ currentText }}</span><span class="caret" aria-hidden="true">▍</span>
          </p>
          <p class="lead hero-lede" v-reveal="{ delay: 220 }">
            Full stack developer working across Vue, TypeScript, Node.js and REST APIs,
            from component systems to the services behind them. Based in the Philippines,
            shipping production web apps that solve real-world problems.
          </p>
          <div class="hero-ctas" v-reveal="{ delay: 300 }">
            <router-link to="/projects" class="btn-craft btn-craft--accent">
              View selected work <span aria-hidden="true">→</span>
            </router-link>
            <router-link to="/contact" class="btn-craft btn-craft--ghost">
              Get in touch
            </router-link>
          </div>
          <dl class="hero-meta" v-reveal="{ delay: 360 }">
            <div><dt>Location</dt><dd>{{ location }}</dd></div>
            <div><dt>Focus</dt><dd>Frontend · APIs · Delivery</dd></div>
            <div><dt>Status</dt><dd class="ok">● {{ availability }}</dd></div>
          </dl>
        </div>

        <figure class="hero-figure" v-reveal="{ delay: 200 }">
          <div class="fig-frame">
            <img src="@/assets/profile.jpg" alt="Portrait of Robin Vince Tupil" />
            <figcaption class="fig-cap">
              <span>Robin Vince Tupil</span><span>{{ location }}</span>
            </figcaption>
          </div>
          <div class="fig-stamp" aria-hidden="true">Full&nbsp;Stack<br />Engineer</div>
        </figure>
      </div>

      <div class="wrap-wide hero-foot">
        <span class="meta-row">Scroll for selected work, capabilities and experience</span>
        <span class="scroll-line" aria-hidden="true"></span>
      </div>
    </section>

    <!-- ============ SKILLS TICKER ============ -->
    <div
      ref="tickerEl"
      class="ticker"
      aria-hidden="true"
      @pointerdown="onTickDown"
      @pointermove="onTickMove"
      @pointerup="onTickUp"
      @pointerleave="onTickUp"
      @pointercancel="onTickUp"
    >
      <div class="ticker-track">
        <span v-for="(s, idx) in tickerTwice" :key="s.name + idx" class="tick">
          <span class="tick-logo">
            <img :src="s.logo" alt="" loading="lazy" draggable="false" referrerpolicy="no-referrer" @error="onLogoError" />
          </span>{{ s.name }}
        </span>
      </div>
    </div>

    <!-- ============ SELECTED WORK ============ -->
    <section class="section" aria-label="Selected work">
      <div class="wrap">
        <SectionHeading index="01" kicker="Selected work">
          Work that ships<span class="accent-word">.</span>
          <template #sub>Two representative builds. The full archive lives on the Projects page with source links and detail views.</template>
        </SectionHeading>

        <article
          v-for="(p, i) in featured"
          :key="p.id"
          class="feat"
          :class="{ 'feat--flip': i % 2 === 1 }"
          v-reveal
        >
          <router-link :to="{ path: '/projects', query: { open: p.id } }" class="feat-img" :aria-label="`Open ${p.title} details`">
            <img :src="p.image" :alt="`${p.title} screenshot`" loading="lazy" />
            <span class="feat-num">{{ p.index }}</span>
          </router-link>
          <div class="feat-body">
            <p class="meta-row">{{ p.category }}</p>
            <h3 class="display feat-title">{{ p.title }}</h3>
            <p class="feat-desc">{{ p.description }}</p>
            <ul class="tag-row" aria-label="Technologies">
              <li v-for="t in p.technologies.slice(0, 4)" :key="t">{{ t }}</li>
            </ul>
            <div class="feat-links">
              <router-link :to="{ path: '/projects', query: { open: p.id } }" class="text-link">Case details →</router-link>
              <a
                v-if="p.github.length"
                :href="p.github[0]"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link text-link--dim"
              >Source ↗</a>
              <a
                v-if="p.website"
                :href="p.website[0]"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link text-link--dim"
              >Live demo ↗</a>
            </div>
          </div>
        </article>

        <div class="center" v-reveal>
          <router-link to="/projects" class="btn-craft btn-craft--ghost">All projects ({{ projects.length }}) →</router-link>
        </div>
      </div>
    </section>

    <hr class="rule wrap" />

    <!-- ============ WHAT I DO ============ -->
    <section class="section" aria-label="Capabilities">
      <div class="wrap">
        <SectionHeading index="02" kicker="What I do">
          Engineering, end to end<span class="accent-word">.</span>
        </SectionHeading>
        <div class="cap-list">
          <div v-for="c in capabilities" :key="c.index" class="cap-row" v-reveal>
            <span class="cap-index">{{ c.index }}</span>
            <div class="cap-main">
              <h3>{{ c.title }}</h3>
              <p>{{ c.body }}</p>
            </div>
            <p class="cap-items">{{ c.items.join(" · ") }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ EXPERIENCE SNAPSHOT ============ -->
    <section class="section section--band" aria-label="Experience snapshot">
      <div class="wrap band-grid">
        <div>
          <SectionHeading index="03" kicker="Experience">
            Three roles, one trajectory<span class="accent-word">.</span>
          </SectionHeading>
          <router-link to="/about" class="btn-craft btn-craft--ghost">Full story on About →</router-link>
        </div>
        <ol class="snap-list">
          <li v-for="e in experiences" :key="e.title + e.period" v-reveal>
            <p class="meta-row">{{ e.period }}</p>
            <h3>{{ e.title }}</h3>
            <p class="snap-co">{{ e.company }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ============ CONTACT CTA ============ -->
    <section class="section" aria-label="Contact call to action">
      <div class="wrap cta-band" v-reveal>
        <p class="kicker kicker--plain">04 · Contact</p>
        <h2 class="display cta-title">Have something worth building? <em>Let's talk.</em></h2>
        <div class="cta-row">
          <router-link to="/contact" class="btn-craft btn-craft--accent">Start a conversation →</router-link>
          <a class="btn-craft btn-craft--ghost" :href="`mailto:${email}`">{{ email }}</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { projects, experiences, capabilityGroups, roles, profile } from "@/data/portfolio";

export default defineComponent({
  name: "Home",
  components: { SectionHeading },
  props: {
    isDark: { type: Boolean, default: false },
  },
  setup() {
    const currentText = ref("");
    const heroEl = ref<HTMLElement | null>(null);
    let timer: number | null = null;
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let raf = 0;
    let spotX = 50;
    let spotY = 30;

    const reduced =
      typeof window !== "undefined" &&
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const typeEffect = () => {
      const role = roles[roleIdx];
      if (deleting) {
        charIdx -= 1;
        currentText.value = role.substring(0, charIdx);
      } else {
        charIdx += 1;
        currentText.value = role.substring(0, charIdx);
      }
      let speed = deleting ? 38 : 72;
      if (!deleting && charIdx === role.length) {
        speed = 1900;
        deleting = true;
      } else if (deleting && charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
        speed = 420;
      }
      timer = window.setTimeout(typeEffect, speed);
    };

    const paintSpot = () => {
      raf = 0;
      if (heroEl.value) {
        heroEl.value.style.setProperty("--spot-x", `${spotX}%`);
        heroEl.value.style.setProperty("--spot-y", `${spotY}%`);
      }
    };

    const onPointer = (e: PointerEvent) => {
      if (reduced || e.pointerType === "touch" || !heroEl.value) return;
      const r = heroEl.value.getBoundingClientRect();
      spotX = ((e.clientX - r.left) / r.width) * 100;
      spotY = ((e.clientY - r.top) / r.height) * 100;
      if (!raf) raf = requestAnimationFrame(paintSpot);
    };

    onMounted(() => {
      currentText.value = reduced ? roles[0] : "";
      if (!reduced) typeEffect();
      window.addEventListener("pointermove", onPointer, { passive: true });
    });

    onUnmounted(() => {
      if (timer) window.clearTimeout(timer);
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointer);
    });

    const skills = [
      { name: "Vue.js", logo: "https://vuejs.org/images/logo.png" },
      { name: "Nuxt.js", logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" },
      { name: "TypeScript", logo: "https://imgs.search.brave.com/n1OO9whK_AT0eLAtByiStpy0ioE1JUic6Ndocs9OfmU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy90/aHVtYi80LzRjL1R5/cGVzY3JpcHRfbG9n/b18yMDIwLnN2Zy8y/NTBweC1UeXBlc2Ny/aXB0X2xvZ29fMjAy/MC5zdmcucG5n" },
      { name: "React", logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" },
      { name: "HTML/CSS", logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png" },
      { name: "Node.js", logo: "https://imgs.search.brave.com/ag8c9p62o2Uw_YrOnOQfWKRM4Ma_DxgQtf5v-0oirtQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL25vZGUt/anM2MzA0LmxvZ293/aWsuY29tLndlYnA" },
      { name: "Express.js", logo: "https://imgs.search.brave.com/-0WoIV7oC4qypdwev_0UzmOGsHOyIKvkc81UbWhB5zk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL2V4cHJl/c3MtanMxNzIwODk1/NDk3LmxvZ293aWsu/Y29tLndlYnA" },
      { name: "npm", logo: "https://imgs.search.brave.com/lkeWb6DaOjeUPFyKK32QfHoks8wH7PW-sq7bGvplIuI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9l/eHRlcm5hbC10YWwt/cmV2aXZvLWNvbG9y/LXRhbC1yZXZpdm8v/MTIwMC9leHRlcm5h/bC1ucG0tYS1wYWNr/YWdlLW1hbmFnZXIt/Zm9yLXRoZS1qYXZh/c2NyaXB0LXByb2dy/YW1taW5nLWxhbmd1/YWdlLWxvZ28tY29s/b3ItdGFsLXJldml2/by5qcGc" },
      { name: "PHP", logo: "https://www.svgrepo.com/show/303656/php-logo.svg" },
      { name: "Python", logo: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png" },
      { name: "MySQL", logo: "https://cdn.iconscout.com/icon/free/png-256/free-mysql-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-3030165.png?f=webp&w=256" },
      { name: "Sequelize", logo: "https://imgs.search.brave.com/5ckjGePkG0jfg8Gj_qo6Wb5UYDzdOZjFbqdXxryQNJE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9naXRo/dWIuY29tL3NlcXVl/bGl6ZS9zZXF1ZWxp/emUvcmF3L21haW4v/bG9nby5zdmc" },
      { name: "MongoDB", logo: "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-langugae-freebies-pack-logos-icons-1175140.png?f=webp&w=256" },
      { name: "SQLite", logo: "https://cdn.icon-icons.com/icons2/2699/PNG/512/sqlite_logo_icon_169724.png" },
      { name: "Docker", logo: "https://i0.wp.com/www.kitamur.com/wp-content/uploads/2020/12/docker.png?fit=512%2C512&ssl=1" },
      { name: "Git", logo: "https://imgs.search.brave.com/fPJ_EkZNry8fLAQ89QVfurbx4NPTL6k7KdxAF8ofakU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9icmFu/ZGxvZ29zLm5ldC93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMS8x/MS9naXQtbG9nby01/MTJ4NTEyLnBuZw" },
      { name: "Tailwind", logo: "https://imgs.search.brave.com/wSOnOOg2EUrenyo8NcJ86dls3hdoXLz1xMblxCg4gs4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy90YWlsd2luZGNz/cy5zdmc" },
      { name: "Flutter", logo: "https://logosandtypes.com/wp-content/uploads/2021/04/Flutter.png" },
    ];

    // Hide broken remote logos gracefully (initial-letter badge shows through).
    const onLogoError = (e: Event) => {
      const img = e.target as HTMLImageElement | null;
      if (img) img.style.display = "none";
    };

    // Click-drag to scrub the marquee (touch scrolls natively, so only handle mouse/pen here).
    const tickerEl = ref<HTMLElement | null>(null);
    let tickDragging = false;
    let tickStartX = 0;
    let tickStartScroll = 0;

    const onTickDown = (e: PointerEvent) => {
      const el = tickerEl.value;
      if (!el || e.pointerType === "touch") return;
      if (e.pointerType === "mouse" && e.button !== 0) return;
      tickDragging = true;
      tickStartX = e.clientX;
      tickStartScroll = el.scrollLeft;
      el.classList.add("is-drag");
      try {
        el.setPointerCapture(e.pointerId);
      } catch {
        /* pointer capture unsupported, drag still works */
      }
    };
    const onTickMove = (e: PointerEvent) => {
      const el = tickerEl.value;
      if (!el || !tickDragging) return;
      el.scrollLeft = tickStartScroll - (e.clientX - tickStartX);
      // Wrap around the loop seam invisibly (halves are identical).
      const half = el.scrollWidth / 2;
      if (half > 0 && el.scrollLeft >= half) {
        el.scrollLeft -= half;
        tickStartScroll -= half;
      }
    };
    const onTickUp = () => {
      tickDragging = false;
      tickerEl.value?.classList.remove("is-drag");
    };

    return {
      currentText,
      heroEl,
      projects,
      experiences,
      capabilities: capabilityGroups,
      featured: [projects[2], projects[1]],
      tickerTwice: [...skills, ...skills],
      onLogoError,
      tickerEl,
      onTickDown,
      onTickMove,
      onTickUp,
      location: profile.location,
      availability: profile.availability,
      email: profile.email,
    };
  },
});
</script>

<style scoped>
.home { display: flex; flex-direction: column; }

/* ---- hero ---- */
.hero {
  --spot-x: 62%;
  --spot-y: 24%;
  position: relative;
  overflow: clip;
  padding: clamp(3rem, 7vw, 5.5rem) 0 0;
  border-bottom: 1px solid var(--line);
}
.hero-grid-bg {
  position: absolute; inset: 0;
  background-image: linear-gradient(var(--grid-line) 1px, transparent 1px),
    linear-gradient(90deg, var(--grid-line) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(ellipse 90% 75% at var(--spot-x) var(--spot-y), black 30%, transparent 75%);
  -webkit-mask-image: radial-gradient(ellipse 90% 75% at var(--spot-x) var(--spot-y), black 30%, transparent 75%);
}
.hero-spot {
  position: absolute; inset: 0;
  background: radial-gradient(560px 380px at var(--spot-x) var(--spot-y), var(--spot), transparent 70%);
}
.hero-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1.35fr 0.85fr;
  gap: clamp(2rem, 5vw, 4.5rem);
  align-items: end;
  padding-bottom: 2.5rem;
}
.hero-name .line { display: block; }
.line--accent { color: var(--accent-strong); }
[data-theme="dark"] .line--accent { color: var(--accent); }
.dot { color: var(--ink); }
.hero-role {
  margin-top: 1.1rem;
  font-family: var(--font-mono);
  font-size: clamp(0.95rem, 2vw, 1.15rem);
  color: var(--muted);
  min-height: 1.8em;
}
.role-static { color: var(--faint); margin-right: 0.6rem; }
.role-typed { color: var(--ink); font-weight: 600; }
.caret { color: var(--accent-strong); animation: blink 1.1s steps(1) infinite; }
[data-theme="dark"] .caret { color: var(--accent); }
@keyframes blink { 50% { opacity: 0; } }
.hero-lede { margin-top: 1rem; }
.hero-ctas { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1.8rem; }
.hero-meta {
  display: flex; flex-wrap: wrap; gap: 1.5rem 2.5rem;
  margin-top: 2.2rem; padding-top: 1.4rem;
  border-top: 1px solid var(--line);
}
.hero-meta dt { font-family: var(--font-mono); font-size: var(--fs-micro); letter-spacing: 0.18em; text-transform: uppercase; color: var(--faint); }
.hero-meta dd { font-weight: 600; font-size: 0.92rem; }
.ok { color: #16a34a; }
[data-theme="dark"] .ok { color: #4ade80; }

.hero-figure { margin: 0; position: relative; }
.fig-frame {
  border: 1px solid var(--line);
  background: var(--surface);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}
.fig-frame img { width: 100%; aspect-ratio: 4 / 5; object-fit: cover; filter: saturate(0.92) contrast(1.03); }
.fig-cap {
  display: flex; justify-content: space-between;
  font-family: var(--font-mono); font-size: var(--fs-micro);
  letter-spacing: 0.16em; text-transform: uppercase;
  color: var(--muted);
  padding: 0.8rem 1rem;
  border-top: 1px solid var(--line);
}
.fig-stamp {
  position: absolute;
  right: -1rem; top: -1.4rem;
  background: var(--accent); color: var(--accent-ink);
  font-family: var(--font-display); font-weight: 700;
  font-size: 0.8rem; line-height: 1.25; text-transform: uppercase;
  padding: 0.9rem 1rem;
  transform: rotate(6deg);
  border-radius: 4px;
  box-shadow: var(--shadow-lg);
}
.hero-foot {
  position: relative;
  display: flex; align-items: center; gap: 1rem;
  padding: 1.1rem 0 1.4rem;
}
.scroll-line { flex: 1; height: 1px; background: var(--line); position: relative; overflow: hidden; }
.scroll-line::after {
  content: ""; position: absolute; inset: 0;
  background: var(--accent-strong);
  transform: translateX(-100%);
  animation: scan 2.6s var(--ease-out) infinite;
}
@keyframes scan { 40% { transform: translateX(0); } 100% { transform: translateX(100%); } }

/* ---- skills ticker ---- */
.ticker {
  background: transparent;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  cursor: grab;
  user-select: none;
  -webkit-user-select: none;
  padding: 0.85rem 0;
  mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
  -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
}
.ticker::-webkit-scrollbar { display: none; }
.ticker.is-drag { cursor: grabbing; }
.ticker-track {
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  width: max-content;
  animation: tick 48s linear infinite;
  will-change: transform;
}
.ticker.is-drag .ticker-track { animation-play-state: paused; }
.tick {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  padding-right: clamp(2rem, 4vw, 3rem);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}
.tick-logo {
  position: relative;
  flex: none;
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.tick-logo img {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(1);
  opacity: 0.75;
  pointer-events: none;
  transition: filter var(--dur-fast) ease, opacity var(--dur-fast) ease;
}
.ticker:hover .tick-logo img { filter: none; opacity: 1; }
@keyframes tick { to { transform: translateX(-50%); } }

/* ---- selected work ---- */
.feat {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
  padding: clamp(1.75rem, 4vw, 2.75rem) 0;
  border-top: 1px solid var(--line);
}
.feat--flip .feat-img { order: 2; }
.feat-img {
  position: relative; display: block;
  border: 1px solid var(--img-frame);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface);
  text-decoration: none;
}
.feat-img img {
  width: 100%; aspect-ratio: 16 / 10; object-fit: cover; object-position: top;
  transition: transform var(--dur-slow) var(--ease-out);
}
.feat-img:hover img, .feat-img:focus-visible img { transform: scale(1.035); }
.feat-num {
  position: absolute; left: 0.9rem; bottom: 0.7rem;
  font-family: var(--font-display); font-weight: 700; font-size: 2.6rem;
  color: #fff; text-shadow: 0 2px 18px rgba(0,0,0,0.55);
  line-height: 1;
}
.feat-title { font-size: clamp(1.7rem, 3.4vw, 2.5rem); margin: 0.6rem 0 0.7rem; }
.feat-desc { color: var(--muted); max-width: 46ch; }
.tag-row { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.1rem; }
.tag-row li {
  font-family: var(--font-mono); font-size: 0.72rem; letter-spacing: 0.06em;
  border: 1px solid var(--line); border-radius: 999px;
  padding: 0.32rem 0.75rem; color: var(--muted);
}
.feat-links { display: flex; gap: 1.25rem; margin-top: 1.2rem; }
.text-link { font-weight: 700; text-decoration: none; border-bottom: 2px solid var(--accent-strong); padding-bottom: 2px; }
.text-link:hover { background: var(--accent-wash); }
.text-link--dim { color: var(--muted); border-bottom-color: var(--line); font-weight: 600; }
.center { display: flex; justify-content: center; padding: 2rem 0 0; }

/* ---- capabilities ---- */
.cap-list { border-top: 1px solid var(--line); }
.cap-row {
  display: grid;
  grid-template-columns: 64px 1fr 1fr;
  gap: 1.5rem;
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--line);
  align-items: start;
}
.cap-index {
  font-family: var(--font-display); font-weight: 700; font-size: 1.4rem;
  color: var(--accent-strong);
  border: 1px solid var(--line); border-radius: 12px;
  width: 52px; height: 52px; display: inline-flex; align-items: center; justify-content: center;
}
[data-theme="dark"] .cap-index { color: var(--accent); }
.cap-main h3 { font-family: var(--font-display); font-size: 1.3rem; letter-spacing: -0.01em; margin-bottom: 0.4rem; }
.cap-main p { color: var(--muted); max-width: 52ch; }
.cap-items { font-family: var(--font-mono); font-size: 0.8rem; color: var(--muted); line-height: 1.9; }

/* ---- band ---- */
.section--band { background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.band-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
.snap-list { list-style: none; }
.snap-list li { padding: 1.4rem 0; border-bottom: 1px solid var(--line); }
.snap-list li:first-child { padding-top: 0; }
.snap-list h3 { font-family: var(--font-display); font-size: 1.35rem; margin: 0.35rem 0 0.15rem; }
.snap-co { color: var(--muted); }

/* ---- CTA ---- */
.cta-band {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
  padding: clamp(2.5rem, 6vw, 4.5rem);
  position: relative;
  overflow: hidden;
}
.cta-band::after {
  content: "RVT";
  position: absolute; right: -1rem; bottom: -3.4rem;
  font-family: var(--font-display); font-weight: 700;
  font-size: clamp(8rem, 22vw, 15rem); line-height: 1;
  color: transparent;
  -webkit-text-stroke: 1px var(--line);
  pointer-events: none;
}
.cta-title { font-size: clamp(2rem, 5vw, 3.4rem); max-width: 16ch; margin: 1rem 0 1.75rem; }
.cta-title em { font-style: normal; color: var(--accent-strong); }
[data-theme="dark"] .cta-title em { color: var(--accent); }
.cta-row { display: flex; flex-wrap: wrap; gap: 0.8rem; position: relative; z-index: 1; }

@media (max-width: 980px) {
  .hero-inner { grid-template-columns: 1fr; }
  .hero-figure { max-width: 440px; }
  .feat, .feat--flip .feat-img { grid-template-columns: 1fr; }
  .feat--flip .feat-img { order: 0; }
  .cap-row { grid-template-columns: 52px 1fr; }
  .cap-items { grid-column: 2; }
  .band-grid { grid-template-columns: 1fr; }
}
@media (max-width: 560px) {
  .hero-meta { gap: 1rem 1.5rem; }
  .fig-stamp { right: 0.6rem; }
}
@media (prefers-reduced-motion: reduce) {
  .ticker-track, .scroll-line::after, .caret { animation: none; }
}
</style>
