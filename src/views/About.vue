<template>
  <div class="about">
    <section class="page-head">
      <div class="wrap">
        <p class="kicker" v-reveal>About</p>
        <h1 class="display h1" v-reveal="{ delay: 80 }">Engineer with an<br />editorial eye<span class="accent-word">.</span></h1>
        <div class="head-grid">
          <p class="lead" v-reveal="{ delay: 140 }">
            I'm Robin Vince Tupil, a full stack developer from the Philippines.
            I build web applications from the ground up, from the database and APIs
            behind them to the interfaces people actually use.
          </p>
          <dl class="facts" v-reveal="{ delay: 200 }">
            <div><dt>Experience</dt><dd>4+ years · full-stack engineer</dd></div>
            <div><dt>Domains</dt><dd>Enterprise apps · portals · web platforms</dd></div>
            <div><dt>Now</dt><dd>Open to opportunities</dd></div>
          </dl>
        </div>
      </div>
    </section>

    <section class="section--tight">
      <div class="wrap split">
        <figure class="portrait" v-reveal>
          <img src="@/assets/profile2.jpg" alt="Robin Vince Tupil portrait" />
          <figcaption class="meta-row">Fig. 02 · working portrait</figcaption>
        </figure>
        <div class="narrative">
          <h2 class="display narr-title" v-reveal>Who I am</h2>
          <p v-reveal>I'm a dedicated software developer with a passion for building innovative solutions. With expertise in modern web technologies, I specialize in creating responsive, user-friendly applications that solve real-world problems.</p>
          <p v-reveal>Throughout my career, I've worked on diverse projects including HRIS, LMS, DMS, and various web applications. I pride myself on writing production-ready code, designing efficient APIs, and creating seamless integrations between front-end and back-end systems.</p>
          <p v-reveal>I actively explore AI and emerging technologies, continuously learning and integrating new tools and approaches into my development workflow.</p>
          <ul class="creed" v-reveal>
            <li><strong>Production-ready code</strong><span>Clean, reviewed, maintainable.</span></li>
            <li><strong>API design &amp; integration</strong><span>Contracts front and back both honor.</span></li>
            <li><strong>Version control</strong><span>Deployments without drama.</span></li>
            <li><strong>AI &amp; emerging tech</strong><span>Leverage, not shortcuts.</span></li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--band" aria-label="Work experience">
      <div class="wrap">
        <SectionHeading index="A" kicker="Experience">
          Where I've worked<span class="accent-word">.</span>
          <template #sub>Expand any role for responsibilities and focus areas. Content preserved from the original portfolio.</template>
        </SectionHeading>
        <div class="timeline">
          <article
            v-for="(exp, i) in experiences"
            :key="exp.title + exp.period"
            class="t-row"
            :class="{ 'is-open': openIndex === i }"
            v-reveal
          >
            <div class="t-head-row">
              <button
                class="t-head"
                type="button"
                @click="toggle(i)"
                :aria-expanded="openIndex === i ? 'true' : 'false'"
                :aria-controls="`exp-body-${i}`"
                :aria-label="(openIndex === i ? 'Collapse ' : 'Expand ') + exp.title"
              >
                <span class="t-side">
                  <span class="t-period">{{ exp.period }}</span>
                  <span class="t-title">{{ exp.title }}</span>
                  <span class="t-co">{{ exp.company }}</span>
                </span>
              </button>
              <button
                class="t-plus"
                type="button"
                @click="toggle(i)"
                :aria-expanded="openIndex === i ? 'true' : 'false'"
                :aria-controls="`exp-body-${i}`"
                :aria-label="(openIndex === i ? 'Collapse ' : 'Expand ') + exp.title"
              >
                <span class="t-bar" aria-hidden="true"></span>
                <span class="t-bar t-bar--v" aria-hidden="true"></span>
              </button>
            </div>
            <div
              class="t-body"
              :id="`exp-body-${i}`"
              :class="{ 'is-open': openIndex === i }"
            >
              <div class="t-body-inner">
                <ul>
                  <li v-for="pt in exp.points" :key="pt">{{ pt }}</li>
                </ul>
                <div class="tag-row">
                  <span v-for="t in exp.tags" :key="t">{{ t }}</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section" aria-label="Capabilities and stack">
      <div class="wrap">
        <SectionHeading index="B" kicker="Capabilities">
          Organized by what I deliver<span class="accent-word">.</span>
        </SectionHeading>
        <div class="cap-grid">
          <article v-for="g in capabilityGroups" :key="g.index" class="cap-card" v-reveal>
            <h3>{{ g.title }}</h3>
            <p class="cap-body">{{ g.body }}</p>
            <ul>
              <li v-for="item in g.items" :key="item">{{ item }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <section class="section--tight edu">
      <div class="wrap">
        <SectionHeading index="C" kicker="Education">Foundations<span class="accent-word">.</span></SectionHeading>
        <ol class="edu-list">
          <li v-for="e in education" :key="e.school" v-reveal>
            <div><h3>{{ e.school }}</h3><p class="edu-degree">{{ e.degree }}</p></div>
            <div class="edu-meta"><span>{{ e.period }}</span><span>{{ e.location }}</span></div>
          </li>
        </ol>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SectionHeading from "@/components/SectionHeading.vue";
import { experiences, capabilityGroups, education } from "@/data/portfolio";

export default defineComponent({
  name: "About",
  components: { SectionHeading },
  props: { isDark: { type: Boolean, default: false } },
  setup() {
    const openIndex = ref(0);
    const toggle = (i: number) => {
      openIndex.value = openIndex.value === i ? -1 : i;
    };
    return { experiences, capabilityGroups, education, openIndex, toggle };
  },
});
</script>

<style scoped>
.about { display: flex; flex-direction: column; }
.page-head { padding: clamp(3rem, 7vw, 5.5rem) 0 clamp(2rem, 4vw, 3rem); border-bottom: 1px solid var(--line); }
.head-grid {
  display: grid; grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  margin-top: 1.5rem; align-items: start;
}
.facts { display: flex; flex-direction: column; border-top: 1px solid var(--line); }
.facts div { display: flex; justify-content: space-between; gap: 1rem; padding: 0.8rem 0; border-bottom: 1px solid var(--line); }
.facts dt { font-family: var(--font-mono); font-size: var(--fs-micro); letter-spacing: 0.16em; text-transform: uppercase; color: var(--faint); }
.facts dd { font-weight: 600; text-align: right; font-size: 0.92rem; }

.split { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
.portrait img { border-radius: var(--radius-lg); border: 1px solid var(--line); aspect-ratio: 4 / 5; object-fit: cover; width: 100%; }
.portrait figcaption { margin-top: 0.7rem; }
.narr-title { font-size: var(--fs-h2); margin-bottom: 1.2rem; }
.narrative p { color: var(--muted); margin-bottom: 1rem; max-width: 62ch; }
.creed { list-style: none; margin-top: 1.75rem; border-top: 1px solid var(--line); }
.creed li { display: flex; justify-content: space-between; gap: 1rem; padding: 0.9rem 0; border-bottom: 1px solid var(--line); }
.creed strong { font-family: var(--font-display); }
.creed span { color: var(--muted); font-size: 0.9rem; text-align: right; }

.section--band { background: var(--bg-2); border-top: 1px solid var(--line); border-bottom: 1px solid var(--line); }
.timeline { border-top: 1px solid var(--line); }
.t-row { border-bottom: 1px solid var(--line); }
.t-head-row {
  width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 1rem;
  padding: 1.4rem 0.25rem;
}
.t-head {
  flex: 1; display: flex; align-items: center;
  color: inherit; text-align: left;
  padding: 0;
  background: transparent;
  border: 0;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
}
.t-head:focus-visible,
.t-plus:focus-visible {
  outline: 2px solid var(--accent-strong);
  outline-offset: 4px;
}
.t-side { display: flex; flex: 1; flex-direction: column; gap: 0.25rem; align-items: flex-start; text-align: left; }
.t-period { font-family: var(--font-mono); font-size: var(--fs-micro); letter-spacing: 0.16em; text-transform: uppercase; color: var(--accent-strong); }
[data-theme="dark"] .t-period { color: var(--accent); }
.t-title { font-family: var(--font-display); font-size: clamp(1.25rem, 2.6vw, 1.7rem); font-weight: 700; letter-spacing: -0.01em; }
.t-co { color: var(--muted); font-size: 0.92rem; }
.t-plus {
  position: relative;
  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  padding: 0;
  border-radius: 50%;
  border: 1px solid var(--line);
  background: transparent;
  color: var(--ink);
  font: inherit;
  cursor: pointer;
  transition: background var(--dur-fast) ease, border-color var(--dur-fast) ease, transform var(--dur-fast) var(--ease-out);
}
.t-head-row:hover .t-plus,
.t-plus:hover {
  border-color: var(--accent-strong);
  transform: scale(1.06);
}
.t-bar {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transform: translate(-50%, -50%);
  transition: transform var(--dur-med) var(--ease-out), opacity var(--dur-fast) ease;
}
.t-bar--v {
  transform: translate(-50%, -50%) rotate(90deg);
}
.t-row.is-open .t-plus {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}
.t-row.is-open .t-bar--v {
  transform: translate(-50%, -50%) rotate(0deg);
  opacity: 0;
}
.t-body {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--dur-med) var(--ease-out);
}
.t-body.is-open {
  grid-template-rows: 1fr;
}
.t-body-inner {
  overflow: hidden;
  min-height: 0;
  padding: 0 0.25rem 1.6rem;
  visibility: hidden;
  opacity: 0;
  transition:
    visibility 0s linear var(--dur-med),
    opacity var(--dur-fast) ease;
}
.t-body.is-open .t-body-inner {
  visibility: visible;
  opacity: 1;
  transition:
    visibility 0s,
    opacity var(--dur-med) ease var(--dur-fast);
}
.t-body-inner ul {
  max-width: 78ch;
}
.t-body-inner > .tag-row {
  max-width: 78ch;
}
.t-body ul { list-style: none; display: flex; flex-direction: column; gap: 0.55rem; margin-bottom: 1rem; }
.t-body li { position: relative; padding-left: 1.4rem; color: var(--muted); }
.t-body li::before { content: "·"; position: absolute; left: 0; color: var(--accent-strong); }
[data-theme="dark"] .t-body li::before { color: var(--accent); }
.tag-row { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.tag-row span { font-family: var(--font-mono); font-size: 0.72rem; border: 1px solid var(--line); border-radius: 999px; padding: 0.3rem 0.75rem; color: var(--muted); }

.cap-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
.cap-card { border: 1px solid var(--line); border-radius: var(--radius-md); background: var(--surface); padding: 1.6rem; }
.cap-card h3 { font-family: var(--font-display); font-size: 1.25rem; margin: 0 0 0.5rem; }
.cap-body { color: var(--muted); font-size: 0.94rem; margin-bottom: 1rem; }
.cap-card ul { list-style: none; display: flex; flex-wrap: wrap; gap: 0.45rem; }
.cap-card li { font-size: 0.8rem; font-weight: 600; background: var(--accent-wash); border: 1px solid var(--line); border-radius: 8px; padding: 0.3rem 0.65rem; }

.edu-list { list-style: none; border-top: 1px solid var(--line); }
.edu-list li {
  display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;
  padding: 1.4rem 0; border-bottom: 1px solid var(--line); align-items: baseline;
}
.edu-list h3 { font-family: var(--font-display); font-size: 1.2rem; }
.edu-degree { color: var(--accent-strong); font-weight: 600; font-size: 0.92rem; }
[data-theme="dark"] .edu-degree { color: var(--accent); }
.edu-meta { display: flex; gap: 1.25rem; font-family: var(--font-mono); font-size: 0.78rem; color: var(--muted); }

@media (prefers-reduced-motion: reduce) {
  .t-body, .t-bar, .t-body-inner { transition: none; }
}
.edu { padding-bottom: clamp(4rem, 8vw, 6rem); }

@media (max-width: 900px) {
  .head-grid, .split { grid-template-columns: 1fr; }
  .cap-grid { grid-template-columns: 1fr; }
  .portrait { max-width: 420px; }
}
</style>
