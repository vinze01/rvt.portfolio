<template>
  <div class="projects">
    <section class="page-head">
      <div class="wrap">
        <p class="kicker" v-reveal>Projects</p>
        <h1 class="display h1" v-reveal="{ delay: 80 }">Selected<br />work<span class="accent-word">.</span></h1>
        <p class="lead" v-reveal="{ delay: 140 }">Four builds, four different problems. Open any entry for features, stack, and source links.</p>
        <p class="meta-row count" v-reveal="{ delay: 200 }">Index · {{ projects.length }} entries · 01–04</p>
      </div>
    </section>

    <section class="section--tight">
      <div class="wrap-wide">
        <article
          v-for="p in projects"
          :key="p.id"
          class="entry"
          v-reveal
        >
          <button class="entry-img" type="button" @click="openModal(p)" :aria-label="`Open details for ${p.title}`">
            <img :src="p.image" :alt="`${p.title} screenshot`" loading="lazy" />
            <span class="entry-view">Open case <span aria-hidden="true">→</span></span>
          </button>
          <div class="entry-body">
            <div class="entry-top">
              <span class="entry-index">{{ p.index }}</span>
              <span v-if="p.ongoing" class="pill">Ongoing</span>
            </div>
            <p class="meta-row">{{ p.category }}</p>
            <h2 class="display entry-title">{{ p.title }}</h2>
            <p class="entry-desc">{{ p.longDescription }}</p>
            <ul class="tag-row" :aria-label="`Technologies for ${p.title}`">
              <li v-for="t in p.technologies" :key="t">{{ t }}</li>
            </ul>
            <div class="entry-links">
              <button class="btn-craft btn-craft--accent btn-sm" type="button" @click="openModal(p)">Case details →</button>
              <a
                v-if="p.github.length"
                :href="p.github[0]"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link"
                @click.stop
              >Source ↗{{ p.github.length > 1 ? ` (${p.github.length})` : "" }}</a>
              <a
                v-if="p.website"
                :href="p.website[0]"
                target="_blank"
                rel="noopener noreferrer"
                class="text-link text-link--dim"
                @click.stop
              >Live demo ↗</a>
              <span v-if="!p.github.length && !p.website" class="meta-row">Source unavailable</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- Accessible detail modal (Ant Design, re-skinned). Esc + backdrop close built in. -->
    <a-modal
      v-model:visible="isOpen"
      :title="selected?.title"
      :width="860"
      :footer="null"
      @cancel="closeModal"
      class="project-modal"
      :destroyOnClose="true"
    >
      <div v-if="selected" class="modal" role="document">
        <div class="modal-img">
          <img :src="selected.image" :alt="`${selected.title} screenshot`" />
        </div>
        <p class="meta-row">{{ selected.category }} · {{ selected.index }}</p>
        <p class="modal-desc">{{ selected.longDescription }}</p>
        <div class="modal-cols">
          <div>
            <h3>Key features</h3>
            <ul>
              <li v-for="f in selected.features" :key="f">{{ f }}</li>
            </ul>
          </div>
          <div>
            <h3>Stack</h3>
            <div class="tag-row">
              <span v-for="t in selected.technologies" :key="t">{{ t }}</span>
            </div>
          </div>
        </div>
        <div class="modal-links">
          <a
            v-for="g in selected.github"
            :key="g"
            :href="g"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-craft btn-craft--accent btn-sm"
          >Source ↗</a>
          <a
            v-for="w in (selected.website || [])"
            :key="w"
            :href="w"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-craft btn-craft--ghost btn-sm"
          >Live demo ↗</a>
          <span v-if="!selected.github.length && !selected.website" class="meta-row">Source unavailable for this project</span>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { projects, type Project } from "@/data/portfolio";

export default defineComponent({
  name: "Projects",
  props: { isDark: { type: Boolean, default: false } },
  setup() {
    const selected = ref<Project | null>(null);
    const isOpen = ref(false);
    const route = useRoute();
    const router = useRouter();

    const openModal = (p: Project) => {
      selected.value = p;
      isOpen.value = true;
    };
    const closeModal = () => {
      isOpen.value = false;
      selected.value = null;
      // Clear deep-link query without adding history noise.
      if (route.query.open) {
        router.replace({ path: route.path, query: {} });
      }
    };

    onMounted(() => {
      // Deep link support: /projects?open=3 (used by Home "Case details").
      const id = Number(route.query.open);
      if (id) {
        const found = projects.find((p) => p.id === id);
        if (found) openModal(found);
      }
    });

    return { projects, selected, isOpen, openModal, closeModal };
  },
});
</script>

<style scoped>
.page-head { padding: clamp(3rem, 7vw, 5.5rem) 0 clamp(1.5rem, 3vw, 2.5rem); border-bottom: 1px solid var(--line); }
.page-head .lead { margin-top: 1.25rem; }
.count { margin-top: 1rem; }

.entry {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  padding: clamp(2rem, 5vw, 3.5rem) 0;
  border-bottom: 1px solid var(--line);
  align-items: start;
}
.entry:nth-child(even) .entry-img { order: 2; }
.entry-img {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 1px solid var(--img-frame);
  border-radius: var(--radius-md);
  overflow: hidden;
  background: var(--surface);
  cursor: pointer;
}
.entry-img img {
  width: 100%;
  aspect-ratio: 16 / 10.5;
  object-fit: cover;
  object-position: top;
  transition: transform var(--dur-slow) var(--ease-out), filter var(--dur-med) ease;
}
.entry-img:hover img, .entry-img:focus-visible img { transform: scale(1.03); }
.entry-view {
  position: absolute;
  right: 1rem; bottom: 1rem;
  background: var(--ink); color: var(--bg);
  font-weight: 700; font-size: 0.85rem;
  padding: 0.6rem 1.1rem; border-radius: 999px;
  opacity: 0; transform: translateY(8px);
  transition: opacity var(--dur-med) ease, transform var(--dur-med) var(--ease-out);
}
.entry-img:hover .entry-view, .entry-img:focus-visible .entry-view { opacity: 1; transform: none; }
.entry-top { display: flex; align-items: center; gap: 0.8rem; margin-bottom: 0.7rem; }
.entry-index {
  font-family: var(--font-display); font-weight: 700; font-size: 1rem;
  border: 1px solid var(--line); border-radius: 999px; padding: 0.25rem 0.8rem;
  color: var(--accent-strong);
}
[data-theme="dark"] .entry-index { color: var(--accent); }
.pill {
  font-family: var(--font-mono); font-size: 0.68rem; letter-spacing: 0.14em; text-transform: uppercase;
  background: var(--accent); color: var(--accent-ink);
  border-radius: 999px; padding: 0.3rem 0.8rem; font-weight: 700;
}
.entry-title { font-size: clamp(1.8rem, 3.6vw, 2.7rem); margin: 0.5rem 0 0.8rem; }
.entry-desc { color: var(--muted); font-size: 0.98rem; }
.tag-row { list-style: none; display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 1.1rem; }
.tag-row li, .tag-row span {
  font-family: var(--font-mono); font-size: 0.72rem;
  border: 1px solid var(--line); border-radius: 999px;
  padding: 0.32rem 0.75rem; color: var(--muted);
}
.entry-links { display: flex; align-items: center; flex-wrap: wrap; gap: 0.8rem 1.25rem; margin-top: 1.4rem; }
.btn-sm { padding: 0.7rem 1.25rem; font-size: 0.88rem; }
.text-link { font-weight: 700; text-decoration: none; border-bottom: 2px solid var(--accent-strong); padding-bottom: 2px; }
.text-link:hover { background: var(--accent-wash); }
.text-link--dim { color: var(--muted); border-bottom-color: var(--line); font-weight: 600; }

.modal-img { border: 1px solid var(--line); border-radius: 12px; overflow: hidden; margin-bottom: 1.25rem; }
.modal-img img { width: 100%; max-height: 380px; object-fit: cover; object-position: top; }
.modal-desc { color: var(--muted); margin: 0.8rem 0 1.5rem; line-height: 1.75; }
.modal-cols { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 1.75rem; }
.modal-cols h3 { font-family: var(--font-display); font-size: 1rem; margin-bottom: 0.7rem; }
.modal-cols ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
.modal-cols li { position: relative; padding-left: 1.3rem; color: var(--muted); font-size: 0.94rem; }
.modal-cols li::before { content: "·"; position: absolute; left: 0; color: var(--accent-strong); }
[data-theme="dark"] .modal-cols li::before { color: var(--accent); }
.modal-links { display: flex; flex-wrap: wrap; gap: 0.7rem; margin-top: 1.75rem; padding-top: 1.4rem; border-top: 1px solid var(--line); }

@media (max-width: 980px) {
  .entry, .entry:nth-child(even) .entry-img { grid-template-columns: 1fr; }
  .entry:nth-child(even) .entry-img { order: 0; }
  .entry-view { opacity: 1; transform: none; }
  .modal-cols { grid-template-columns: 1fr; }
}
</style>
