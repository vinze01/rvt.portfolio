import type { Directive, DirectiveBinding } from "vue";

// Lightweight scroll-reveal directive (replaces AOS).
// Usage: v-reveal or v-reveal="{ delay: 120, y: 28 }"
//
// - Uses IntersectionObserver + transform/opacity (GPU friendly).
// - Respects prefers-reduced-motion.
// - Disconnects on unmount (no leaks).

interface RevealOptions {
  delay?: number;
  y?: number;
}

function prefersReducedMotion(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

const observerMap = new WeakMap<Element, IntersectionObserver>();

function parseBinding(binding: DirectiveBinding): RevealOptions {
  if (binding.value && typeof binding.value === "object") {
    return {
      delay: typeof binding.value.delay === "number" ? binding.value.delay : 0,
      y: typeof binding.value.y === "number" ? binding.value.y : 26,
    };
  }
  return { delay: 0, y: 26 };
}

export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      el.classList.add("is-revealed");
      return;
    }
    const { delay = 0, y = 26 } = parseBinding(binding);
    el.classList.add("rv");
    el.style.setProperty("--rv-y", `${y}px`);
    if (delay) el.style.setProperty("--rv-d", `${delay}ms`);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.disconnect();
            observerMap.delete(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    observerMap.set(el, io);
    io.observe(el);
  },
  unmounted(el) {
    const io = observerMap.get(el);
    if (io) {
      io.disconnect();
      observerMap.delete(el);
    }
  },
};
