import { ref } from "vue";

export type Theme = "dark" | "light";

const STORAGE_KEY = "theme";

// Single source of truth for theme. App.vue owns the instance via provide/inject
// if needed; pages receive `isDark` as a prop from App for backwards compatibility.
const isDark = ref(false);
let initialized = false;

function applyTheme(dark: boolean) {
  isDark.value = dark;
  document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  try {
    localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
  } catch {
    /* storage unavailable, keep in-memory only */
  }
}

export function initTheme(): void {
  if (initialized) return;
  initialized = true;
  let dark = false;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") {
      dark = saved === "dark";
    } else if (window.matchMedia) {
      dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
  } catch {
    dark = false;
  }
  applyTheme(dark);
}

export function toggleTheme(): void {
  applyTheme(!isDark.value);
}

export function useTheme() {
  initTheme();
  return { isDark, initTheme, toggleTheme };
}
