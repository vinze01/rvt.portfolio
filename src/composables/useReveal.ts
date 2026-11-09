import type { Directive, DirectiveBinding } from "vue";
import anime from "animejs";

// Smooth, zero-snap Anime.js scroll-reveal, magnetic hover, and tilt directives.
// Key smoothness guarantees:
// 1. Initial state uses anime.set() with exact property names (translateY / translateX / scale)
//    so there is never a translate3d() vs translateY() mismatch or end-of-animation snap.
// 2. Starts animations on a fresh requestAnimationFrame tick so initial mount/layout cost
//    never skips the first frames of the easing curve.
// 3. Uses balanced easeOutCubic easing and zero negative rootMargin lag so elements
//    glide smoothly the moment they enter the viewport.

export interface RevealOptions {
  delay?: number;
  y?: number;
  x?: number;
  scale?: number;
  duration?: number;
  stagger?: number;
  selector?: string;
}

export interface MagneticOptions {
  strength?: number;
}

export interface TiltOptions {
  max?: number;
  scale?: number;
}

export const prefersReducedMotion = (): boolean =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

interface StoredRevealConfig {
  options: Required<Omit<RevealOptions, "selector">> & { selector?: string };
  targets: HTMLElement[];
}

const revealConfigMap = new WeakMap<Element, StoredRevealConfig>();
const cleanupMap = new WeakMap<Element, () => void>();
let sharedObserver: IntersectionObserver | null = null;

const getSharedObserver = (): IntersectionObserver => {
  if (sharedObserver) return sharedObserver;

  sharedObserver = new IntersectionObserver(
    (entries, obs) => {
      const toAnimate: StoredRevealConfig[] = [];

      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        obs.unobserve(el);

        const cfg = revealConfigMap.get(el);
        if (!cfg) continue;
        revealConfigMap.delete(el);
        el.classList.add("is-revealed");
        toAnimate.push(cfg);
      }

      if (toAnimate.length === 0) return;

      // Start on the next animation frame so layout/paint never steals initial tween frames
      requestAnimationFrame(() => {
        for (const { options, targets } of toAnimate) {
          anime.remove(targets);

          const animParams: anime.AnimeParams = {
            targets,
            opacity: [0, 1],
            translateY: [options.y, 0],
            duration: options.duration,
            delay:
              targets.length > 1
                ? anime.stagger(options.stagger, { start: options.delay })
                : options.delay,
            easing: "easeOutCubic",
            complete: () => {
              for (const t of targets) {
                t.style.opacity = "";
                t.style.transform = "";
                t.style.transition = "";
                t.style.willChange = "";
              }
            },
          };

          if (options.x !== 0) {
            animParams.translateX = [options.x, 0];
          }
          if (options.scale !== 1) {
            animParams.scale = [options.scale, 1];
          }

          anime(animParams);
        }
      });
    },
    { threshold: 0.02, rootMargin: "0px 0px 0px 0px" }
  );

  return sharedObserver;
};

const parseBinding = (
  binding: DirectiveBinding<RevealOptions | undefined>
): StoredRevealConfig["options"] => {
  const v = binding.value;
  if (v && typeof v === "object") {
    return {
      delay: typeof v.delay === "number" ? Math.min(v.delay, 120) : 0,
      y: typeof v.y === "number" ? v.y : 14,
      x: typeof v.x === "number" ? v.x : 0,
      scale: typeof v.scale === "number" ? v.scale : 1,
      duration: typeof v.duration === "number" ? v.duration : 520,
      stagger: typeof v.stagger === "number" ? Math.min(v.stagger, 60) : 0,
      selector: typeof v.selector === "string" ? v.selector : undefined,
    };
  }
  return { delay: 0, y: 14, x: 0, scale: 1, duration: 520, stagger: 0 };
};

export const vReveal: Directive<HTMLElement, RevealOptions | undefined> = {
  mounted: (el, binding) => {
    if (prefersReducedMotion()) {
      el.classList.add("is-revealed");
      return;
    }

    const options = parseBinding(binding);

    let targets: HTMLElement[] = [el];
    if (options.stagger > 0) {
      const found = options.selector
        ? Array.from(el.querySelectorAll<HTMLElement>(options.selector))
        : (Array.from(el.children) as HTMLElement[]);
      if (found.length > 0) {
        targets = found;
      }
    }

    for (const t of targets) {
      t.style.transition = "none";
      t.style.willChange = "opacity, transform";
    }

    // Use anime.set so the initial transform string uses the exact same functions
    // (translateY / translateX / scale) that anime() will tween.
    const initialProps: Record<string, number> = {
      opacity: 0,
      translateY: options.y,
    };
    if (options.x !== 0) initialProps.translateX = options.x;
    if (options.scale !== 1) initialProps.scale = options.scale;
    anime.set(targets, initialProps);

    revealConfigMap.set(el, { options, targets });
    getSharedObserver().observe(el);
  },
  unmounted: (el) => {
    const cfg = revealConfigMap.get(el);
    if (cfg) {
      anime.remove(cfg.targets);
      revealConfigMap.delete(el);
    } else {
      anime.remove(el);
    }
    if (sharedObserver) {
      sharedObserver.unobserve(el);
    }
  },
};

export const vMagnetic: Directive<HTMLElement, MagneticOptions | undefined> = {
  mounted: (el, binding) => {
    if (prefersReducedMotion()) return;
    const strength =
      binding.value && typeof binding.value.strength === "number" ? binding.value.strength : 0.2;

    let rafId = 0;
    let targetX = 0;
    let targetY = 0;

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      anime.remove(el);
      el.style.transition = "background 160ms ease, color 160ms ease, border-color 160ms ease";
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = el.getBoundingClientRect();
      targetX = (e.clientX - (rect.left + rect.width / 2)) * strength;
      targetY = (e.clientY - (rect.top + rect.height / 2)) * strength;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          anime.set(el, {
            translateX: Number(targetX.toFixed(2)),
            translateY: Number(targetY.toFixed(2)),
          });
        });
      }
    };

    const onLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      anime.remove(el);
      anime({
        targets: el,
        translateX: 0,
        translateY: 0,
        duration: 380,
        easing: "easeOutCubic",
        complete: () => {
          el.style.transform = "";
          el.style.transition = "";
        },
      });
    };

    el.addEventListener("pointerenter", onEnter, { passive: true });
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });
    cleanupMap.set(el, () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      anime.remove(el);
    });
  },
  unmounted: (el) => {
    const clean = cleanupMap.get(el);
    if (clean) {
      clean();
      cleanupMap.delete(el);
    }
  },
};

export const vTilt: Directive<HTMLElement, TiltOptions | undefined> = {
  mounted: (el, binding) => {
    if (prefersReducedMotion()) return;
    const max = binding.value && typeof binding.value.max === "number" ? binding.value.max : 2.5;

    let rafId = 0;
    let rotX = 0;
    let rotY = 0;

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      anime.remove(el);
      el.style.transition = "none";
      el.style.willChange = "transform";
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = el.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      rotY = px * max * 2;
      rotX = -py * max * 2;

      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          rafId = 0;
          anime.set(el, {
            perspective: 900,
            rotateX: Number(rotX.toFixed(2)),
            rotateY: Number(rotY.toFixed(2)),
          });
        });
      }
    };

    const onLeave = () => {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
      anime.remove(el);
      anime({
        targets: el,
        perspective: 900,
        rotateX: 0,
        rotateY: 0,
        duration: 420,
        easing: "easeOutCubic",
        complete: () => {
          el.style.transform = "";
          el.style.transition = "";
          el.style.willChange = "";
        },
      });
    };

    el.addEventListener("pointerenter", onEnter, { passive: true });
    el.addEventListener("pointermove", onMove, { passive: true });
    el.addEventListener("pointerleave", onLeave, { passive: true });
    cleanupMap.set(el, () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      anime.remove(el);
    });
  },
  unmounted: (el) => {
    const clean = cleanupMap.get(el);
    if (clean) {
      clean();
      cleanupMap.delete(el);
    }
  },
};
