<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <a class="skip-link" href="#main">Skip to content</a>
    <div class="wrap-wide bar">
      <router-link to="/" class="brand" aria-label="RVT home">
        <span class="brand-mark" aria-hidden="true">RVT</span>
      </router-link>

      <nav class="desk" aria-label="Primary">
        <router-link
          v-for="item in links"
          :key="item.to"
          :to="item.to"
          class="nav-link"
          active-class="is-active"
        >
          {{ item.label }}
        </router-link>
      </nav>

      <div class="actions">
        <span class="avail" title="Availability">
          <span class="avail-dot" aria-hidden="true"></span>
          <span class="avail-text">Open to work</span>
        </span>
        <button
          class="icon-btn"
          type="button"
          @click="$emit('toggle-theme')"
          :aria-label="isDark ? 'Switch to light theme' : 'Switch to dark theme'"
          :title="isDark ? 'Light mode' : 'Dark mode'"
        >
          <BulbOutlined v-if="!isDark" />
          <BulbFilled v-else />
        </button>
        <button
          class="icon-btn menu-btn"
          type="button"
          @click="open = !open"
          :aria-expanded="open ? 'true' : 'false'"
          aria-controls="mobile-nav"
          aria-label="Toggle navigation menu"
        >
          <MenuOutlined v-if="!open" />
          <CloseOutlined v-else />
        </button>
      </div>
    </div>

    <nav
      id="mobile-nav"
      class="mobile"
      :class="{ 'is-open': open }"
      aria-label="Mobile"
    >
      <router-link
        v-for="item in links"
        :key="item.to"
        :to="item.to"
        class="mobile-link"
        active-class="is-active"
        @click="open = false"
      >
        {{ item.label }}
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { BulbOutlined, BulbFilled, MenuOutlined, CloseOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "SiteHeader",
  components: { BulbOutlined, BulbFilled, MenuOutlined, CloseOutlined },
  props: {
    isDark: { type: Boolean, required: true },
  },
  emits: ["toggle-theme"],
  setup() {
    const open = ref(false);
    const scrolled = ref(false);
    const route = useRoute();
    const links = [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/projects", label: "Projects" },
      { to: "/contact", label: "Contact" },
    ];

    const onScroll = () => {
      scrolled.value = window.scrollY > 24;
    };
    // Close mobile menu on route change (covers back/forward too).
    const stopWatch = () => undefined;
    onMounted(() => {
      scrolled.value = window.scrollY > 24;
      window.addEventListener("scroll", onScroll, { passive: true });
    });
    onUnmounted(() => window.removeEventListener("scroll", onScroll));

    return { open, scrolled, links, route, stopWatch };
  },
  watch: {
    $route() {
      this.open = false;
    },
  },
});
</script>

<style scoped>
.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 1000;
  transition: background var(--dur-med) ease, border-color var(--dur-med) ease, backdrop-filter var(--dur-med) ease;
  border-bottom: 1px solid transparent;
}
.site-header.is-scrolled {
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom-color: var(--line);
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 72px;
}
.brand { display: flex; align-items: baseline; gap: 0.7rem; text-decoration: none; }
.brand-mark {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: -0.02em;
  background: var(--ink);
  color: var(--bg);
  padding: 0.28rem 0.6rem;
  border-radius: 8px;
  line-height: 1;
}
.desk { display: flex; gap: 0.25rem; }
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: baseline;
  gap: 0.45rem;
  padding: 0.6rem 0.95rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  color: var(--muted);
  border-radius: 999px;
  transition: color var(--dur-fast) ease, background var(--dur-fast) ease;
}
.nav-link:hover { color: var(--ink); background: var(--accent-wash); }
.nav-link.is-active { color: var(--ink); }
.nav-link.is-active::after {
  content: "";
  position: absolute;
  left: 1rem;
  right: 1rem;
  bottom: 0.3rem;
  height: 2px;
  background: var(--accent-strong);
  border-radius: 2px;
}
[data-theme="dark"] .nav-link.is-active::after { background: var(--accent); }
.actions { display: flex; align-items: center; gap: 0.6rem; }
.avail {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: var(--fs-micro);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.45rem 0.85rem;
}
.avail-dot { width: 8px; height: 8px; border-radius: 50%; background: #22c55e; box-shadow: 0 0 0 4px rgba(34, 197, 94, 0.18); }
.icon-btn {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--surface);
  color: var(--ink);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1.05rem;
  transition: transform var(--dur-fast) var(--ease-out), border-color var(--dur-fast) ease, color var(--dur-fast) ease;
}
.icon-btn:hover { transform: translateY(-2px); border-color: var(--accent-strong); }
.menu-btn { display: none; }
.mobile { display: none; }

@media (max-width: 900px) {
  .desk, .avail-text { display: none; }
  .avail { padding: 0.45rem 0.6rem; }
  .menu-btn { display: inline-flex; }
  .mobile {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.75rem var(--gutter) 1.1rem;
    background: color-mix(in srgb, var(--bg) 94%, transparent);
    backdrop-filter: blur(14px);
    border-bottom: 1px solid var(--line);
    transform: translateY(-8px);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--dur-med) ease, transform var(--dur-med) var(--ease-out);
  }
  .mobile.is-open { transform: none; opacity: 1; pointer-events: auto; }
  .mobile-link {
    display: flex;
    align-items: baseline;
    gap: 0.7rem;
    padding: 0.85rem 0.4rem;
    text-decoration: none;
    font-family: var(--font-display);
    font-size: 1.35rem;
    font-weight: 600;
    color: var(--muted);
    border-bottom: 1px solid var(--line-soft);
  }
  .mobile-link:last-child { border-bottom: none; }
  .mobile-link.is-active { color: var(--ink); }
}
</style>
