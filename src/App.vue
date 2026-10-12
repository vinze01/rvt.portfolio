<template>
  <a-layout class="app">
    <SiteHeader :is-dark="isDark" @toggle-theme="toggleTheme" />
    <a-layout-content id="main" class="main">
      <router-view v-slot="{ Component, route }">
        <transition name="route" mode="out-in">
          <component :is="Component" :key="route.path" :is-dark="isDark" />
        </transition>
      </router-view>
    </a-layout-content>
    <SiteFooter />
    <ChatWidget />
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useRouter } from "vue-router";
import SiteHeader from "@/components/SiteHeader.vue";
import SiteFooter from "@/components/SiteFooter.vue";
import ChatWidget from "@/components/ChatWidget.vue";
import { useTheme, initTheme } from "@/composables/useTheme";

export default defineComponent({
  name: "App",
  components: { SiteHeader, SiteFooter, ChatWidget },
  setup() {
    const { isDark, toggleTheme } = useTheme();
    const router = useRouter();

    onMounted(() => {
      initTheme();
      // Keep scroll at top on navigation + close mobile menu state cleanly.
      router.afterEach(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      });
    });

    return { isDark, toggleTheme };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap');

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--bg);
  color: var(--ink);
}
.main {
  flex: 1;
  padding-top: 72px;
  display: flex;
  flex-direction: column;
}

/* Restrained route transition: quick fade + rise, no navigation delay. */
.route-enter-active { transition: opacity 280ms var(--ease-out), transform 280ms var(--ease-out); }
.route-leave-active { transition: opacity 180ms ease, transform 180ms ease; }
.route-enter-from { opacity: 0; transform: translateY(14px); }
.route-leave-to { opacity: 0; transform: translateY(-8px); }

@media (prefers-reduced-motion: reduce) {
  .route-enter-active, .route-leave-active { transition: none; }
  .route-enter-from, .route-leave-to { opacity: 1; transform: none; }
}
</style>
