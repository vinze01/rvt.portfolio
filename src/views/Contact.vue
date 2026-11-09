<template>
  <div class="contact">
    <section class="page-head">
      <div class="wrap">
        <p class="kicker" v-reveal>Contact</p>
        <h1 class="display contact-title" v-reveal="{ delay: 80 }">
          Let's make<br />something <em>real</em><span class="accent-word">.</span>
        </h1>
        <p class="lead" v-reveal="{ delay: 140 }">
          Open to full-time roles, freelance builds, and collaborations.
          The fastest route is email. The form below opens your mail app with everything pre-filled.
        </p>
      </div>
    </section>

    <section class="section--tight">
      <div class="wrap contact-grid">
        <div class="info">
          <div class="info-row" v-reveal>
            <p class="meta-row">Email</p>
            <a class="big-link" :href="`mailto:${email}`">{{ email }}</a>
          </div>
          <div class="info-row" v-reveal>
            <p class="meta-row">Location</p>
            <p class="info-val">{{ location }}</p>
          </div>
          <div class="info-row" v-reveal>
            <p class="meta-row">Availability</p>
            <p class="info-val ok">● {{ availability }}</p>
          </div>
          <div class="info-row" v-reveal="{ stagger: 65, selector: '.meta-row, .social-btn' }">
            <p class="meta-row">Elsewhere</p>
            <div class="social-row">
              <a
                v-for="s in socials"
                :key="s.label"
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn"
                v-magnetic="{ strength: 0.25 }"
              >{{ s.label }} ↗</a>
            </div>
          </div>
          <p class="note" v-reveal>
            No backend is wired to this form. Submitting composes an email via
            <code>mailto:</code> (existing behavior). Nothing is sent silently.
          </p>
        </div>

        <form
          class="form"
          @submit.prevent="sendEmail"
          v-reveal="{ stagger: 65, selector: 'h2, .field, .submit, .form-hint' }"
          aria-label="Contact form"
        >
          <h2>Send a message</h2>
          <div class="field" @focusin="onFieldFocus" @focusout="onFieldBlur">
            <label for="c-name">Name</label>
            <input id="c-name" v-model="form.name" type="text" placeholder="Your name" required autocomplete="name" />
          </div>
          <div class="field" @focusin="onFieldFocus" @focusout="onFieldBlur">
            <label for="c-email">Email</label>
            <input id="c-email" v-model="form.email" type="email" placeholder="your.email@example.com" required autocomplete="email" />
          </div>
          <div class="field" @focusin="onFieldFocus" @focusout="onFieldBlur">
            <label for="c-subject">Subject</label>
            <input id="c-subject" v-model="form.subject" type="text" placeholder="What's this about?" required />
          </div>
          <div class="field" @focusin="onFieldFocus" @focusout="onFieldBlur">
            <label for="c-message">Message</label>
            <textarea id="c-message" v-model="form.message" placeholder="Tell me about your project, timeline, and goals…" rows="6" required></textarea>
          </div>
          <button class="btn-craft btn-craft--accent submit" type="submit" v-magnetic="{ strength: 0.16 }">
            Compose email <span aria-hidden="true">→</span>
          </button>
          <p class="form-hint">Opens your email client addressed to {{ emailTo }}.</p>
        </form>
      </div>
    </section>

    <a-modal
      v-model:visible="showSuccess"
      title="Email composed"
      :footer="null"
      @cancel="showSuccess = false"
    >
      <div class="success">
        <p ref="successMarkEl" class="success-mark" aria-hidden="true">✓</p>
        <p>Your mail app should now be open with the message pre-filled. I'll reply as soon as I can. Thank you for reaching out.</p>
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, nextTick } from "vue";
import anime from "animejs";
import { profile } from "@/data/portfolio";
import { prefersReducedMotion } from "@/composables/useReveal";

export default defineComponent({
  name: "Contact",
  props: { isDark: { type: Boolean, default: false } },
  setup: () => {
    const form = ref({ name: "", email: "", subject: "", message: "" });
    const showSuccess = ref(false);
    const successMarkEl = ref<HTMLElement | null>(null);

    const onFieldFocus = (e: FocusEvent) => {
      if (prefersReducedMotion()) return;
      const field = e.currentTarget as HTMLElement | null;
      const label = field?.querySelector("label");
      if (label) {
        anime.remove(label);
        anime({
          targets: label,
          translateX: 6,
          duration: 280,
          easing: "easeOutQuad",
        });
      }
    };

    const onFieldBlur = (e: FocusEvent) => {
      if (prefersReducedMotion()) return;
      const field = e.currentTarget as HTMLElement | null;
      const label = field?.querySelector("label");
      if (label) {
        anime.remove(label);
        anime({
          targets: label,
          translateX: 0,
          duration: 420,
          easing: "easeOutElastic(1, .6)",
        });
      }
    };

    const sendEmail = () => {
      // Preserved behavior: no backend, compose via mailto, then confirm.
      const subject = encodeURIComponent(form.value.subject);
      const body = encodeURIComponent(
        `Name: ${form.value.name}\nEmail: ${form.value.email}\n\nMessage:\n${form.value.message}`
      );
      window.location.href = `mailto:${profile.emailTo}?subject=${subject}&body=${body}`;
      showSuccess.value = true;
      form.value = { name: "", email: "", subject: "", message: "" };

      if (!prefersReducedMotion()) {
        nextTick(() => {
          window.setTimeout(() => {
            const mark = successMarkEl.value;
            if (mark) {
              anime.remove(mark);
              anime({
                targets: mark,
                scale: [0, 1],
                rotate: [-45, 0],
                duration: 750,
                easing: "easeOutElastic(1, .5)",
              });
            }
          }, 50);
        });
      }
    };

    return {
      form,
      showSuccess,
      successMarkEl,
      email: profile.email,
      emailTo: profile.emailTo,
      location: profile.location,
      availability: profile.availability,
      socials: profile.socials,
      onFieldFocus,
      onFieldBlur,
      sendEmail,
    };
  },
});
</script>

<style scoped>
.page-head { padding: clamp(3rem, 7vw, 5.5rem) 0 clamp(2rem, 4vw, 3rem); border-bottom: 1px solid var(--line); }
.contact-title { font-size: var(--fs-hero); margin: 1rem 0 1.25rem; }
.contact-title em { font-style: normal; color: var(--accent-strong); }
[data-theme="dark"] .contact-title em { color: var(--accent); }
.contact-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: clamp(2rem, 5vw, 4rem); align-items: start; }
.info-row { padding: 1.4rem 0; border-bottom: 1px solid var(--line); }
.info-row:first-child { padding-top: 0; }
.big-link {
  display: inline-block;
  font-family: var(--font-display); font-weight: 700;
  font-size: clamp(1.15rem, 2.6vw, 1.6rem);
  letter-spacing: -0.01em;
  text-decoration: underline;
  text-decoration-color: var(--accent-strong);
  text-underline-offset: 6px;
  margin-top: 0.5rem;
  overflow-wrap: anywhere;
}
.big-link:hover { background: var(--accent-wash); }
.info-val { font-weight: 600; font-size: 1.05rem; margin-top: 0.4rem; }
.ok { color: #16a34a; }
[data-theme="dark"] .ok { color: #4ade80; }
.social-row { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 0.7rem; }
.social-btn {
  border: 1px solid var(--line); border-radius: 999px;
  padding: 0.6rem 1.1rem; font-weight: 600; font-size: 0.9rem; text-decoration: none;
  transition: border-color var(--dur-fast) ease, transform var(--dur-fast) var(--ease-out);
}
.social-btn:hover { border-color: var(--accent-strong); transform: translateY(-2px); }
.note { color: var(--faint); font-size: 0.85rem; margin-top: 1.4rem; max-width: 44ch; }
.note code { font-family: var(--font-mono); font-size: 0.8rem; }

.form {
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  background: var(--surface);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  box-shadow: var(--shadow-lg);
}
.form h2 { font-family: var(--font-display); font-size: 1.5rem; margin-bottom: 1.4rem; }
.field { margin-bottom: 1.1rem; }
.field label { display: block; font-weight: 600; font-size: 0.88rem; margin-bottom: 0.45rem; }
.field input, .field textarea {
  width: 100%;
  background: var(--bg);
  border: 1px solid var(--line);
  border-radius: var(--radius-sm);
  padding: 0.85rem 1rem;
  font-size: 1rem;
  color: var(--ink);
  transition: border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease;
}
.field input::placeholder, .field textarea::placeholder { color: var(--faint); }
.field input:focus, .field textarea:focus {
  outline: none;
  border-color: var(--accent-strong);
  box-shadow: 0 0 0 3px var(--accent-wash);
}
.field textarea { resize: vertical; min-height: 140px; }
.submit { width: 100%; justify-content: center; margin-top: 0.4rem; }
.form-hint { color: var(--faint); font-size: 0.82rem; margin-top: 0.8rem; text-align: center; }
.success { text-align: center; padding: 0.75rem 0 0.5rem; }
.success-mark {
  width: 64px; height: 64px; margin: 0 auto 1rem;
  border-radius: 50%; background: var(--accent); color: var(--accent-ink);
  font-size: 1.8rem; font-weight: 800;
  display: flex; align-items: center; justify-content: center;
}
.success p { color: var(--muted); }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
