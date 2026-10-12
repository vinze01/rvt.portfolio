<template>
  <div class="sec-head" v-reveal>
    <span class="sec-index" aria-hidden="true">{{ index }}</span>
    <div class="sec-text">
      <p class="kicker">{{ kicker }}</p>
      <h2 class="display sec-title"><slot /></h2>
      <p v-if="$slots.sub" class="sec-sub"><slot name="sub" /></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SectionHeading",
  props: {
    index: { type: String, required: true },
    kicker: { type: String, required: true },
  },
});
</script>

<style scoped>
.sec-head {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: clamp(1rem, 3vw, 2.5rem);
  align-items: start;
  margin-bottom: clamp(2rem, 5vw, 3.5rem);
}
.sec-index {
  font-family: var(--font-mono);
  font-size: var(--fs-small);
  color: var(--accent-strong);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  white-space: nowrap;
}
[data-theme="dark"] .sec-index { color: var(--accent); }
.sec-title { font-size: var(--fs-h2); margin-top: 0.9rem; text-wrap: balance; }
.sec-sub { color: var(--muted); margin-top: 0.8rem; max-width: 60ch; }
</style>
