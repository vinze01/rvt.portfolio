<template>
  <a-layout style="min-height: 100vh">

    <a-layout-header style="background-color: #001529">
      <a-menu
        mode="horizontal"
        theme="dark"
        style="line-height: 64px; display: flex; justify-content: center"
      >
        <a-menu-item key="5" style="margin-right: auto">
          <router-link to="/">
            <img
              src="/favicon.ico"
              alt="Logo"
              style="height: 40px; border-radius: 20px"
            />
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
      </a-menu>
    </a-layout-header>

    <a-layout-content style="padding: 24px; background-color: #f0f2f5">
      <router-view />
    </a-layout-content>

    <div class="chatbot-container" :class="{ 'chatbot-visible': showChat }">
      <iframe
        src="https://www.chatbase.co/chatbot-iframe/abPmfHcu5WC8SJMnd2Xaa"
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </div>

    <button class="floating-button" @click="showChat = !showChat">
      <component :is="showChat ? 'DownOutlined' : 'MessageOutlined'" />
    </button>

    <a-layout-footer style="text-align: center; background-color: #001529; color: white">
      © {{ new Date().getFullYear() }} RVT & MAD
    </a-layout-footer>  
  </a-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { MessageOutlined, DownOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "App",
  components: {
    MessageOutlined,
    DownOutlined,
  },
  setup() {
    const isDarkMode = ref(false);
    const showChat = ref(false);

    const toggleTheme = (checked: boolean) => {
      isDarkMode.value = checked;
      document.body.className = checked ? "dark-mode" : "";
    };

    return {
      isDarkMode,
      toggleTheme,
      showChat,
    };
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

/* Navigation Links */
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

/* Floating Button */
.floating-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #1890ff;
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 999;
}

.floating-button:hover {
  background-color: #40a9ff;
  transform: scale(1.1);
}

.floating-button svg {
  font-size: 24px;
}

/* Chatbot Panel */
.chatbot-container {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 400px;
  height: 600px;
  max-width: 90vw;
  z-index: 998;
  border-radius: 16px;
  overflow: hidden;
  background: white;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transform: translateY(100%);
  opacity: 0;
  pointer-events: none;
  transition: transform 0.35s ease, opacity 0.35s ease;
  will-change: transform, opacity;
}

.chatbot-visible {
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}
</style>
