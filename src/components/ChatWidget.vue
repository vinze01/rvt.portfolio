<template>
  <div class="chat">
    <div
      class="chat-panel"
      :class="{ 'is-open': open }"
      role="dialog"
      aria-label="RVT assistant chat"
      :aria-hidden="open ? 'false' : 'true'"
    >
      <div class="chat-head">
        <div>
          <p class="chat-title">RVT Assistant</p>
          <p class="chat-sub">Ask about stack, work &amp; projects</p>
        </div>
        <button class="chat-x" type="button" @click="open = false" aria-label="Close chat">✕</button>
      </div>
      <!-- Chatbase embed. Render only when opened so it never slows initial paint. -->
      <iframe
        v-if="open"
        src="https://www.chatbase.co/chatbot-iframe/abPmfHcu5WC8SJMnd2Xaa"
        width="100%"
        height="100%"
        style="border: 0; min-height: 480px"
        title="RVT assistant chatbot"
      ></iframe>
    </div>
    <button
      class="chat-fab"
      type="button"
      @click="open = !open"
      :aria-expanded="open ? 'true' : 'false'"
      :aria-label="open ? 'Close assistant chat' : 'Open assistant chat'"
    >
      <MessageOutlined v-if="!open" />
      <CloseOutlined v-else />
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { MessageOutlined, CloseOutlined } from "@ant-design/icons-vue";

export default defineComponent({
  name: "ChatWidget",
  components: { MessageOutlined, CloseOutlined },
  setup() {
    const open = ref(false);
    return { open };
  },
});
</script>

<style scoped>
.chat { position: fixed; right: 1.25rem; bottom: 1.25rem; z-index: 990; display: flex; flex-direction: column; align-items: flex-end; gap: 0.8rem; pointer-events: none; }
.chat-panel {
  width: min(400px, calc(100vw - 2.5rem));
  height: min(600px, calc(100dvh - 10rem));
  min-height: 420px;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  transform: translateY(16px) scale(0.97);
  transform-origin: bottom right;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--dur-med) var(--ease-out), transform var(--dur-med) var(--ease-out);
}
.chat-panel.is-open { opacity: 1; transform: none; pointer-events: auto; }
.chat-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.9rem 1.1rem;
  border-bottom: 1px solid var(--line);
  background: var(--surface-2);
}
.chat-title { font-weight: 700; font-size: 0.95rem; }
.chat-sub { color: var(--muted); font-size: 0.78rem; }
.chat-x { border: 1px solid var(--line); background: transparent; color: var(--muted); border-radius: 8px; width: 32px; height: 32px; cursor: pointer; }
.chat-x:hover { color: var(--ink); border-color: var(--accent-strong); }
.chat-fab {
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid var(--accent);
  background: var(--accent);
  color: var(--accent-ink);
  font-size: 1.35rem;
  cursor: pointer;
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
  transition: transform var(--dur-fast) var(--ease-spring);
}
.chat-fab:hover { transform: scale(1.07) rotate(-4deg); }
</style>
