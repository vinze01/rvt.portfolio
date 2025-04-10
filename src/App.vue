<template>
  <a-layout style="min-height: 100vh;">
    <a-layout-header style="background-color: #001529;">
      <a-menu mode="horizontal" theme="dark" style="line-height: 64px; display: flex; justify-content: center;">
        <a-menu-item key="5" style="margin-right: auto;">
          <router-link to="/">
            <img src="/favicon.ico" alt="Logo" style="height: 40px; border-radius: 20px;" />
          </router-link>
        </a-menu-item>
        <a-menu-item key="1">
          <router-link to="/" class="nav-link">Home</router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/about" class="nav-link">About</router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/projects" class="nav-link">Projects</router-link>
        </a-menu-item>
        <a-menu-item key="4">
          <router-link to="/contact" class="nav-link">Contact</router-link>
        </a-menu-item>
        <!-- Uncomment if needed
        <a-menu-item key="5" style="float: right;">
          <a-switch
            checkedChildren="🌙"
            unCheckedChildren="☀️"
            v-model:checked="isDarkMode"
            @change="toggleTheme"
          />
        </a-menu-item> -->
      </a-menu>
    </a-layout-header>

    <a-layout-content style="padding: 24px; background-color: #f0f2f5;">
      <router-view />
    </a-layout-content>

    <a-layout-footer style="text-align: center; background-color: #001529; color: white;">
      © {{ new Date().getFullYear() }} RVT
    </a-layout-footer>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    const isDarkMode = ref(false);

    const toggleTheme = (checked: boolean) => {
      isDarkMode.value = checked;
      document.body.className = checked ? 'dark-mode' : '';
    };

    return { isDarkMode, toggleTheme };
  },
});
</script>

<style>
/* Dark Mode Styles */
.dark-mode {
  background-color: #1a1a1a;
  color: white;
}

.dark-mode a-layout-content {
  background-color: #2b2b2b;
}

.dark-mode a-layout-footer {
  background-color: #001529;
  color: white;
}

.dark-mode a-menu {
  background-color: #001529;
}

.dark-mode a-menu-item {
  color: white;
}

.nav-link {
  color: white;
  text-decoration: none;
  padding: 0 15px;
  transition: all 0.3s ease;
  border-radius: 4px;
}

.nav-link:hover {
  color: white;
  background-color: #1890ff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transform: translateY(-2px);
}
</style>
